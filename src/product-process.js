// Qualitative gameplay states, not instrument readings or measured performance.
const N=192;
export function initializeProcesses(surfaces,level,job,seed=0){
 if(!['window','fabric'].includes(level))return;
 surfaces.forEach((s,index)=>{
  const bound=new Float32Array(N*N),best=new Float32Array(N*N),initialWet=new Float32Array(N*N),initialBound=new Float32Array(N*N),type=new Uint8Array(N*N);
  const shift=((seed||0)%101)/101*.18;
  for(let i=0;i<bound.length;i++){
   if(!s.initial[i]){s.wet[i]=0;continue;}
   const x=(i%N)/N,y=Math.floor(i/N)/N;let loose=false,condensation=false;
   if(level==='window'){
    condensation=job?.id==='rain-window'?(index===1&&x>.38):!job&&x>.72;
    loose=job?.id==='rain-window'||(job?.dry?x<.20+shift:x>.38+shift);
    s.wet[i]=loose?1:0;bound[i]=loose?0:s.initial[i];type[i]=condensation?2:loose?1:0;
   }else{bound[i]=s.initial[i];s.wet[i]=0;type[i]=job?.id==='paw-weekend'&&Math.sin(x*17+y*13+shift*8)>.1?1:0;}
   initialWet[i]=s.wet[i];initialBound[i]=bound[i];best[i]=level==='window'&&loose?.35:0;
  }
  s.process={kind:level,bound,best,initialWet,initialBound,type,recovered:0,baseRGB:new Uint8ClampedArray(s.image.data)};
  s.lastAction={useful:0,changed:false,recovered:0,removed:0};s.changed=true;s.refresh();
 });
}
export function processPaint(s,uv,rxWorld,ryWorld,strength,mode){
 const p=s.process,cx=uv.x*N,cy=(1-uv.y)*N,rx=rxWorld/s.width*N,ry=ryWorld/s.height*N;
 const action={useful:0,changed:false,recovered:0,removed:0};
 for(let y=Math.max(0,Math.floor(cy-ry));y<Math.min(N,Math.ceil(cy+ry));y++)for(let x=Math.max(0,Math.floor(cx-rx));x<Math.min(N,Math.ceil(cx+rx));x++){
  const d=((x-cx)/rx)**2+((y-cy)/ry)**2,i=y*N+x,a=s.initial[i];if(d>=1||!a)continue;
  const f=(1-d)*strength,oldWet=s.wet[i],oldDirt=s.remaining[i],oldBound=p.bound[i];let removed=0,water=0;
  if(p.kind==='window'){
   if(mode==='spray'){s.wet[i]=Math.min(1,oldWet+f*2.8);}
   else if(mode==='glass-wipe'&&oldWet>.12){p.bound[i]=Math.max(0,oldBound-f*2.5*Math.min(1,oldWet*2));}
   else if(mode==='squeegee'&&oldWet>.001){removed=Math.min(Math.max(0,oldDirt-oldBound),f*4*Math.max(.25,oldWet));water=Math.min(oldWet,f*.85);s.wet[i]-=water;}
  }else{
   if(mode==='extract'){
    const supplied=Math.min(1-oldWet,f*2);s.wet[i]+=supplied;water=Math.min(s.wet[i],f*.5);s.wet[i]-=water;
    p.bound[i]=Math.max(0,oldBound-f*(p.type[i]?1.3:2.6)*s.wet[i]);
    removed=Math.min(Math.max(0,oldDirt-p.bound[i]),f*2.5);
   }else if(mode==='suction'){water=Math.min(Math.max(0,oldWet-.06),f*1.7);s.wet[i]-=water;if(oldWet>.06)removed=Math.min(Math.max(0,oldDirt-oldBound),f*2);}
  }
  s.remaining[i]=Math.max(0,oldDirt-removed);p.bound[i]=Math.min(p.bound[i],s.remaining[i]);s.left-=removed;
  action.removed+=removed;action.recovered+=water*a;
  const clean=1-s.remaining[i]/a,loose=1-p.bound[i]/a;
  const stage=p.kind==='window'?.15*Math.min(1,s.wet[i]/.6)*(1-loose)+.35*loose+.65*clean*(1-s.wet[i]):clean*(.75+.25*(1-s.wet[i]));
  // Only new best progress earns feedback; rewetting and re-suctioning cannot farm +1.
  const gain=Math.max(0,stage-p.best[i]);p.best[i]=Math.max(p.best[i],stage);if(gain>1e-6)action.useful+=gain*a;
  if(Math.abs(s.wet[i]-oldWet)+removed+Math.abs(p.bound[i]-oldBound)>1e-7)action.changed=true;
 }
 p.recovered+=action.recovered;s.left=Math.max(0,s.left);s.lastAction=action;s.changed ||= action.changed;return action.removed;
}
export function processSummary(surfaces){
 let total=0,dirt=0,wet=0,bound=0,ready=0,progress=0,recovered=0;
 for(const s of surfaces){if(!s.process||!s.total)continue;const p=s.process;total+=s.total;recovered+=p.recovered;
  for(let i=0;i<s.initial.length;i++){const a=s.initial[i];if(!a)continue;dirt+=s.remaining[i];wet+=s.wet[i]*a;bound+=p.bound[i];if(p.bound[i]>.02&&s.wet[i]>.12)ready+=p.bound[i];const excess=p.kind==='fabric'?Math.max(0,(s.wet[i]-.06)/.94):s.wet[i];if(p.kind==='window'){const clean=1-s.remaining[i]/a,loose=1-p.bound[i]/a,base=p.initialBound[i]===0?.35:0,stage=.15*Math.min(1,s.wet[i]/.6)*(1-loose)+.35*loose+.65*clean*(1-s.wet[i]);progress+=a*Math.max(0,(stage-base)/(1-base));}else progress+=(a-s.remaining[i])*(.75+.25*(1-excess));}
 }
 return {total,dirt:total?dirt/total:0,wet:total?wet/total:0,bound:total?bound/total:0,ready:total?ready/total:0,percent:total?Math.max(0,Math.min(100,progress/total*100)):0,recovered:total?recovered/total:0,done:total>0&&dirt/total<=.025&&wet/total<=(surfaces.find(s=>s.process)?.process.kind==='fabric'?.10:.035)};
}
export function processPixel(s,i,before){
 const p=s.process,a=s.initial[i],d=before?a:s.remaining[i],w=before?p.initialWet[i]:s.wet[i],b=before?p.initialBound[i]:p.bound[i];
 if(p.kind==='window'){const attached=a?b/a:0;return {r:105+attached*26,g:159-attached*42,b:177-attached*83,alpha:Math.min(1,d*(p.type[i]===2?.22:.38+attached*.5)+w*Math.min(1,a*3)*.17)};}
 const x=i%N,y=Math.floor(i/N),weave=(x%3===0?6:0)+(y%3===0?4:0),edge=a>0&&a<.55?12:0;return {r:116+weave+edge-w*35,g:86+weave+edge-w*27,b:52+weave-w*8,alpha:Math.min(1,d*.88+w*Math.min(1,a*3)*.31)};
}
