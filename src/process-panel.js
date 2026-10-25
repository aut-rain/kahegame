import {processSummary} from './product-process.js';
const $=s=>document.querySelector(s);
export function updateProcessPanel(surfaces,level,mode,completed,hit=null,summary=null){
 $('#process-panel').hidden=false;const recovery=$('#process-readouts .recovery');recovery.hidden=level==='steam'||level==='outdoor';
 if(level==='steam'||level==='outdoor'){const target=hit?.object.userData.surface;const active=target?[target]:surfaces;let total=0,left=0,soft=0;for(const surface of active){total+=surface.total;left+=surface.left;if(level==='steam')for(let i=0;i<surface.initial.length;i++)soft+=surface.remaining[i]*surface.wet[i];}const dirt=total?left/total:0,loose=left?soft/left:0,steam=level==='steam';
  $('#process-product').textContent=steam?'SC4D · 蒸汽与擦拭':'KHB AIR · 看部位选覆盖';$('#process-dirt').textContent=dirt<.035?'当前污渍已处理':'仍有'+(steam?'油垢':'泥点');$('#process-water').textContent=steam?(loose>.6?'多数油垢已松动':loose>.15?'部分油垢已松动':'等待蒸汽松动'):(target?.partLabel||'整车分部位清洁');$('#process-dirt-bar').style.width=dirt*100+'%';$('#process-water-bar').style.width=(steam?loose:1-dirt)*100+'%';
  let message;if(completed)message=steam?'蒸汽松动与擦拭已完成，厨房恢复清爽。':'泥点已冲走，看看车架、轮胎和挡泥板的变化。';else if(steam)message=loose>.6?'油垢颜色已变浅：移动清洁布带走松动残留。':mode==='wipe'?'这里还有附着油垢：切换蒸汽，在污点或砖缝稍作停留。':'观察油膜变化；已松动处可以擦去，顽固砖缝多停留一会儿。';else{const broad=/wheel|fender/.test(target?.partId||'');message=target?(broad?'轮胎和挡泥板：扇形覆盖大片泥点，窄处可换集中水束。':'车架与车把：集中水束方便对准细部，沿管架逐段清洁。'):'先看泥点落在哪一处，再选扇形覆盖或集中清理；无需整车反复冲洗。';}
  $('#process-observation').textContent=(target&&!completed?'当前落点 · ':'')+message;$('#process-note').textContent=steam?'松动程度为游戏示意；SC4D 不在此回收污水。附件与适用材质以说明书为准。':'覆盖方式为玩法示意，不代表真实压力或水量；保持无线、接瓶供水的产品设定。';
  const labels=steam?['蒸汽 · 松动油垢','擦拭 · 带走残留']:['扇形 · 覆盖大片','集中 · 对准细部'];const current=steam?(mode==='steam'?0:1):(mode==='fan'?0:1);const steps=labels.map((label,i)=>'<span class="'+(i===current&&!completed?'current':'')+'">'+label+'</span>').join('');if($('#process-steps').innerHTML!==steps)$('#process-steps').innerHTML=steps;return;
 }

 const t=summary||processSummary(surfaces),fabric=level==='fabric';
 $('#process-product').textContent=fabric?'PUZZI · 喷抽与回收':'WV 2 · 观察再清洁';
 $('#process-dirt').textContent=t.dirt<.025?'污渍已处理':t.bound>.04?'仍有附着污渍':'污膜已松动';
 $('#process-water').textContent=fabric?(t.wet>.30?'明显湿痕':t.wet>.10?'还有余水':t.dirt>.025?'尚未回收 · 先处理污渍':'已回收 · 待通风晾干'):(t.wet>.10?'可见水膜':t.wet>.035?'少量水痕':'水痕已收净');
 $('#process-dirt-bar').style.width=Math.min(100,t.dirt*100)+'%';$('#process-water-bar').style.width=Math.min(100,t.wet*100)+'%';
 $('#recovery-fill').style.height=Math.min(90,t.recovered*32)+'%';
 $('#recovery-label').textContent=t.recovered>.015?'已收集清洁液':'等待回收';
 let b=t.bound,w=t.wet,d=t.dirt,local=false;
 if(hit?.object.userData.surface.process){const s=hit.object.userData.surface,i=Math.min(191,Math.max(0,Math.floor((1-hit.uv.y)*192)))*192+Math.min(191,Math.max(0,Math.floor(hit.uv.x*192)));if(s.initial[i]>.001){b=s.process.bound[i]/s.initial[i];w=s.wet[i];d=s.remaining[i]/s.initial[i];local=true;}}
 if(!local&&b>.025&&level==='window')w=t.ready/b>.5?.8:0;
 let text;if(completed)text=fabric?'清洁与回收已完成。织物仍需通风晾干，再恢复使用。':'已吸走污水，让窗外重新清晰。';
 else if(fabric){text=d>.025?(mode==='suction'&&b>.025?'抽吸收水，但附着污渍还在；切换喷抽，缓慢重叠覆盖。':'让喷抽吸头缓慢划过污区；深色湿痕说明还需要回收余水。'):w>.10?'污渍已去，仍有湿痕：停止喷水，切换「仅抽吸」收余水。':'这一处已处理好；查找其他污渍与余水，完成后通风。';}
 else if(b>.025){text=w<.12?'干手印仍附着：先用辅助喷瓶润湿，再用清洁布擦松。':mode==='squeegee'?'吸水不能替代擦洗：先用清洁布把已湿润的手印擦松。':'手印已湿润：用清洁布擦松，随后交给 WV 2 回收污水。';}
 else text=w>.035||d>.025?'这里已是湿污膜或冷凝水，可直接用 WV 2 吸走，无需重复喷擦。':'这一处已通透。查找剩余污渍或水痕，避免重复喷水。';
 $('#process-observation').textContent=(local&&!completed?'当前落点 · ':'')+text;
 $('#process-note').textContent=fabric?'水分、回流与水箱均为玩法示意；不是湿度读数。':'干手印呈棕色，擦松后变浅；蓝色液膜需要吸走。水箱为玩法示意。';
 const current=fabric?(mode==='extract'?0:1):['spray','glass-wipe','squeegee'].indexOf(mode);
 const steps=(fabric?['喷抽带走污渍','抽吸收余水','通风晾干']:['辅助喷瓶 · 润湿','清洁布 · 擦松','WV 2 · 回收']).map((label,i)=>'<span class="'+(i===current&&!completed?'current':'')+'">'+(i+1)+' '+label+'</span>').join('');if($('#process-steps').innerHTML!==steps)$('#process-steps').innerHTML=steps;
}
