import * as THREE from 'three';
// Hand-authored jobs; seeds change stains, rewards are always guaranteed.
export const COMMISSIONS = [
 {id:'coffee-break',level:'fabric',title:'咖啡洒了',tag:'局部喷抽',story:'读书时碰倒的咖啡，留在了左侧坐垫上。',task:'喷抽左侧坐垫的咖啡渍，再停止喷水抽吸余水；清洁后安排通风。',targets:[0],pattern:'coffee',revealSurface:0,reward:'慢午后咖啡',motif:'cup',color:'#ba825d',hint:'左侧坐垫 · 咖啡渍下有一枚小刺绣'},
 {id:'paw-weekend',level:'fabric',title:'小爪印来过',tag:'分区清洁',story:'毛茸茸的客人，把周末的快乐留在沙发上。',task:'观察深浅爪印，缓慢重叠喷抽；污渍去除后，抽吸回收深色湿痕。',targets:[0,1,2,3],pattern:'paws',revealSurface:3,reward:'毛茸茸周末',motif:'paw',color:'#b79368',hint:'右侧靠背 · 一枚特别的小爪印藏在这里'},
 {id:'rain-window',level:'window',title:'雨后放晴',tag:'湿污膜与冷凝水',story:'雨停了，两扇窗上还留着长长短短的水痕。',task:'玻璃上是已松动湿污膜和冷凝水；直接刮吸，观察液体回收。',targets:[0,1],pattern:'rain',revealSurface:0,reward:'雨后小太阳',motif:'sun',color:'#c59e3f',hint:'左侧玻璃 · 雨痕下面藏着一个晴天'},
 {id:'tiny-handprints',level:'window',title:'窗边的小手印',tag:'观察 → 喷 → 擦 → 吸',story:'右侧窗上有几枚干掉的小手印，还有一个小秘密。',task:'干手印先喷润、擦松，再用 WV 2 吸走；少量已湿污膜可直接吸除。',targets:[1],pattern:'hands',dry:true,revealSurface:1,reward:'窗边的小猫',motif:'cat',color:'#799a8c',hint:'右侧玻璃 · 观察干手印与湿污膜'},
 {id:'supper-splash',level:'steam',title:'晚饭之后',tag:'局部蒸汽 → 擦拭',story:'一顿热闹的晚饭，在左侧瓷砖上留下了油点。',task:'蒸汽松动左侧油点，再擦拭收尾，露出花砖图案。',targets:[0],pattern:'splash',revealSurface:0,reward:'餐后小花砖',motif:'flower',color:'#9b9b68',hint:'左侧瓷砖 · 油点里有一朵小花'},
 {id:'tile-memory',level:'steam',title:'缝隙里的春天',tag:'细节蒸汽 → 擦拭',story:'细小的砖缝也值得被认真照顾，春天藏在其中。',task:'沿砖缝蒸汽松动积垢，再擦去残留，发现叶片花砖。',targets:[0],pattern:'grout',revealSurface:0,reward:'一片新绿',motif:'leaf',color:'#739064',hint:'中央瓷砖 · 沿着缝隙寻找叶片'},
 {id:'muddy-ride',level:'outdoor',title:'雨后骑行',tag:'轮胎与挡泥板',story:'绕湖骑了一圈，泥点带回来了，快乐也带回来了。',task:'冲净前后轮和挡泥板的泥层，发现骑行纪念贴。',targets:[0,1,3],pattern:'mud',revealSurface:3,reward:'绕湖一圈',motif:'wheel',color:'#668c89',hint:'挡泥板 · 冲去泥点，找出旅行贴纸'},
 {id:'ready-to-go',level:'outdoor',title:'出发之前',tag:'车架与车把',story:'车轮已经干净，整理好车架和车座，就能再次出发。',task:'集中清洁车架、车座与车把，让出发纪念贴重新显现。',targets:[2,4],pattern:'dust',revealSurface:2,reward:'下一站山野',motif:'mountain',color:'#83966b',hint:'车架 · 一张山野贴纸等你发现'}
];
export const findCommission=id=>COMMISSIONS.find(job=>job.id===id)||null;
export const freshSeed=()=>crypto.getRandomValues(new Uint32Array(1))[0];
function random(seed){return()=>{seed|=0;seed=seed+0x6d2b79f5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
const artCache=new Map();
export function rewardArt(job){
 if(artCache.has(job.id))return artCache.get(job.id);
 const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const c=canvas.getContext('2d');
 c.fillStyle='#faf7e9';c.beginPath();c.roundRect(12,12,232,232,54);c.fill();c.strokeStyle=job.color;c.lineWidth=6;c.stroke();c.fillStyle=job.color;c.lineWidth=11;c.lineCap='round';c.lineJoin='round';
 const line=pts=>{c.beginPath();pts.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke();};
 const circle=(x,y,r,fill=true)=>{c.beginPath();c.arc(x,y,r,0,Math.PI*2);fill?c.fill():c.stroke();};
 switch(job.motif){
  case 'cup':c.beginPath();c.roundRect(68,96,100,76,[5,5,26,26]);c.fill();c.beginPath();c.arc(170,126,24,-Math.PI/2,Math.PI/2);c.stroke();line([[61,186],[185,186]]);line([[95,71],[101,57]]);line([[130,71],[136,57]]);break;
  case 'paw':c.beginPath();c.ellipse(128,154,44,34,0,0,Math.PI*2);c.fill();[[76,113,16],[104,82,17],[150,82,17],[180,113,16]].forEach(a=>circle(...a));break;
  case 'sun':circle(128,128,38);for(let i=0;i<8;i++){const a=i*Math.PI/4;line([[128+Math.cos(a)*60,128+Math.sin(a)*60],[128+Math.cos(a)*76,128+Math.sin(a)*76]]);}break;
  case 'cat':c.beginPath();c.moveTo(76,123);c.lineTo(73,65);c.lineTo(112,91);c.lineTo(145,91);c.lineTo(182,65);c.lineTo(179,128);c.bezierCurveTo(191,204,61,204,76,123);c.fill();c.fillStyle='#faf7e9';circle(105,132,6);circle(151,132,6);c.strokeStyle='#faf7e9';c.lineWidth=5;line([[119,151],[128,157],[137,151]]);break;
  case 'flower':for(let i=0;i<6;i++){const a=i*Math.PI/3;circle(128+Math.cos(a)*38,128+Math.sin(a)*38,26);}c.fillStyle='#f4d461';circle(128,128,22);break;
  case 'leaf':c.beginPath();c.moveTo(65,184);c.bezierCurveTo(51,92,142,62,190,63);c.bezierCurveTo(197,148,150,204,65,184);c.fill();c.strokeStyle='#faf7e9';c.lineWidth=7;line([[79,174],[166,89]]);line([[113,142],[111,105]]);line([[131,123],[163,122]]);break;
  case 'wheel':circle(128,128,68,false);circle(128,128,10);for(let i=0;i<8;i++){const a=i*Math.PI/4;line([[128+Math.cos(a)*15,128+Math.sin(a)*15],[128+Math.cos(a)*58,128+Math.sin(a)*58]]);}break;
  default:c.beginPath();c.moveTo(46,182);c.lineTo(106,78);c.lineTo(144,137);c.lineTo(169,98);c.lineTo(213,182);c.closePath();c.fill();c.fillStyle='#faf7e9';c.beginPath();c.moveTo(87,110);c.lineTo(106,78);c.lineTo(125,110);c.lineTo(106,102);c.closePath();c.fill();circle(183,68,13);
 }
 const result={canvas,url:canvas.toDataURL('image/png')};artCache.set(job.id,result);return result;
}
function stainMask(job,index,seed){
 const n=192,canvas=document.createElement('canvas');canvas.width=canvas.height=n;const c=canvas.getContext('2d'),r=random(seed+index*1907);c.fillStyle='white';c.strokeStyle='white';c.lineCap='round';
 const oval=(x,y,rx,ry)=>{c.beginPath();c.ellipse(x,y,rx,ry,r()*2,0,Math.PI*2);c.fill();};
 if(job.pattern==='coffee'){for(let i=0;i<5;i++)oval(48+r()*92,48+r()*92,17+r()*20,12+r()*13);}
 if(job.pattern==='paws'){for(let i=0;i<4;i++){const x=32+r()*124,y=38+r()*116;oval(x,y,15,12);for(let j=0;j<4;j++)oval(x-17+j*11,y-20+(j===0||j===3?6:0),5,7);}}
 if(job.pattern==='rain'){for(let i=0;i<13;i++){const x=12+i*13+r()*6,y=8+r()*45;c.lineWidth=4+r()*6;c.beginPath();c.moveTo(x,y);c.bezierCurveTo(x-10,y+50,x+9,y+75,x-4,165+r()*18);c.stroke();}}
 if(job.pattern==='hands'){for(let i=0;i<3;i++){const x=48+r()*96,y=66+i*36;oval(x,y,14,20);for(let j=0;j<4;j++){c.lineWidth=6;c.beginPath();c.moveTo(x-11+j*8,y-10);c.lineTo(x-16+j*9,y-34-r()*8);c.stroke();}oval(x-19,y-3,6,13);}}
 if(job.pattern==='splash'){for(let i=0;i<28;i++)oval(15+r()*82,20+r()*150,3+r()*13,3+r()*9);}
 if(job.pattern==='grout'){for(let x=32;x<n;x+=32){c.lineWidth=5+r()*4;c.beginPath();c.moveTo(x,10);c.lineTo(x,182);c.stroke();}for(let y=64;y<n;y+=64){c.lineWidth=7;c.beginPath();c.moveTo(9,y);c.lineTo(183,y);c.stroke();}}
 if(job.pattern==='mud'){c.globalAlpha=.48;c.fillRect(0,0,n,n);c.globalAlpha=1;for(let i=0;i<30;i++)oval(r()*n,r()*n,8+r()*23,5+r()*15);}
 if(job.pattern==='dust'){c.globalAlpha=.55;c.fillRect(0,0,n,n);c.globalAlpha=1;for(let i=0;i<12;i++)oval(r()*n,r()*n,12+r()*25,8+r()*15);}
 return {canvas,c};
}
export function applyCommission(world,job,seed){
 const s=world.surfaces[job.revealSurface],n=192;let u=.52,v=.52;
 if(job.pattern==='splash')u=.27;
 if(s.partId){let best=Infinity;for(let y=10;y<182;y++)for(let x=10;x<182;x++){if(s.initial[y*n+x]<.1)continue;const distance=(x/n-.45)**2+(1-y/n-.78)**2;if(distance<best){best=distance;u=(x+.5)/n;v=1-(y+.5)/n;}}}
 const size=THREE.MathUtils.clamp(Math.min(s.width,s.height)*.28,.18,.46),rx=size/s.width*.7,ry=size/s.height*.7;
 world.surfaces.forEach((surface,index)=>{
  surface.requiresWet=job.dry===true;const active=job.targets.includes(index);let mask;
  if(active){const {c}=stainMask(job,index,seed);if(index===job.revealSurface){c.fillStyle='white';c.globalAlpha=1;c.beginPath();c.ellipse(u*n,(1-v)*n,rx*n,ry*n,0,0,Math.PI*2);c.fill();}mask=c.getImageData(0,0,n,n).data;}
  surface.total=0;surface.loosened=0;surface.probeUVs=[];
  for(let i=0;i<n*n;i++){const a=active?surface.initial[i]*mask[i*4+3]/255:0;surface.initial[i]=surface.remaining[i]=a;surface.total+=surface.initial[i];surface.wet[i]=surface.kind==='glass'&&!job.dry?1:0;surface.loosened+=surface.initial[i]*surface.wet[i];}
  surface.left=surface.total;surface.partDone=!active;surface.changed=true;surface.refresh();
  for(let y=8;y<n;y+=12)for(let x=8;x<n;x+=12)if(surface.initial[y*n+x]>.04)surface.probeUVs.push({u:x/n,v:1-y/n});
 });
 const texture=new THREE.CanvasTexture(rewardArt(job).canvas);texture.colorSpace=THREE.SRGBColorSpace;
 const material=new THREE.MeshBasicMaterial({map:texture,transparent:true,opacity:0,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-3});
 const plaque=new THREE.Mesh(new THREE.PlaneGeometry(size,size),material);plaque.name='commission-discovery';
 s.hitMesh.add(plaque);plaque.position.set((u-.5)*s.width,(v-.5)*s.height,s.partId?.008:.002);plaque.renderOrder=2;
 const indices=[];let initial=0;
 for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(((x/n-u)/rx)**2+(((1-y/n)-v)/ry)**2<1){const i=y*n+x;if(s.initial[i]>0){indices.push(i);initial+=s.initial[i];}}
 let before=false,revealed=false,progress=0;
 function update(){let left=0;indices.forEach(i=>left+=s.remaining[i]);progress=initial?Math.max(0,Math.min(1,1-left/initial)):0;revealed=progress>=.92;material.opacity=before?0:Math.max(0,Math.min(1,(progress-.08)/.84));return {progress,revealed};}
 return {update,setBefore(value){before=value;update();},get state(){return {progress,revealed,surface:job.revealSurface,u,v};}};
}

export const JOB_METHODS={'coffee-break':'PUZZI 8-1 · 局部喷抽 → 收余水 → 通风','paw-weekend':'PUZZI 8-1 · 重叠喷抽 → 检查湿痕 → 抽吸','rain-window':'WV 2 · 湿污膜与冷凝水 → 直接吸除','tiny-handprints':'WV 2 · 干手印喷润 → 擦松 → 吸走污水','supper-splash':'SC4D · 蒸汽松动油点 → 擦去残留','tile-memory':'SC4D · 蒸汽处理砖缝 → 擦拭收尾','muddy-ride':'KHB AIR · 冲洗轮胎与挡泥板泥层','ready-to-go':'KHB AIR · 覆盖车架、车座与车把'};
