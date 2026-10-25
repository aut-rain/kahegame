const KEY='karcher-experience:v1';
const $=s=>document.querySelector(s);
export function createExperience({onPause,onChange}){
 let prefs={sound:false,volume:.55,ambient:0,easy:false,quality:'auto'},persistent=true;
 try{const p=JSON.parse(localStorage.getItem(KEY)||'null');if(p){prefs.sound=p.sound===true;prefs.easy=p.easy===true;for(const k of ['volume','ambient'])if(Number.isFinite(p[k]))prefs[k]=Math.max(0,Math.min(1,p[k]));prefs.quality=p.quality==='low'?'low':'auto';}}catch{persistent=false;}
 const library=document.createElement('details');library.className='library-details';const summary=document.createElement('summary');summary.textContent='委托 · 图文卡册 · 产品资料';library.append(summary);$('.sidebar').append(library);
 for(const selector of ['#save-status','.commission-entry','.story-entry','.product-card','.sidebar-note'])library.append($(selector));
 const mobile=matchMedia('(max-width:800px)');const layout=()=>library.open=!mobile.matches;layout();mobile.addEventListener('change',layout);
 $('.toolbar').after($('.progress-panel'));
 $('#process-toggle').addEventListener('click',()=>{const expanded=$('#process-panel').classList.toggle('compact')===false;$('#process-toggle').setAttribute('aria-expanded',String(expanded));$('#process-toggle').textContent=expanded?'收起观察 −':'展开观察 ＋';});
 function sync(){ $('#sound').textContent=prefs.sound?'声音开':'声音关';$('#sound').setAttribute('aria-pressed',String(prefs.sound));$('#sound').setAttribute('aria-label',prefs.sound?'关闭清洁声音':'开启清洁声音');$('#settings-sound').checked=prefs.sound;$('#device-volume').value=Math.round(prefs.volume*100);$('#ambient-volume').value=Math.round(prefs.ambient*100);$('#easy-clean').checked=prefs.easy;$('#render-quality').value=prefs.quality;$('#settings-status').textContent=persistent?'偏好保存在本机。':'此浏览器暂时无法保存设置，本次操作仍然有效。';}
 function change(patch){Object.assign(prefs,patch);try{localStorage.setItem(KEY,JSON.stringify(prefs));}catch{persistent=false;}sync();onChange({...prefs});}
 $('#sound').addEventListener('click',()=>change({sound:!prefs.sound}));
 $('#settings-sound').addEventListener('change',e=>change({sound:e.target.checked}));$('#device-volume').addEventListener('input',e=>change({volume:Number(e.target.value)/100}));$('#ambient-volume').addEventListener('input',e=>change({ambient:Number(e.target.value)/100}));$('#easy-clean').addEventListener('change',e=>change({easy:e.target.checked}));$('#render-quality').addEventListener('change',e=>change({quality:e.target.value}));
 $('#open-settings').addEventListener('click',()=>{onPause();$('#settings-dialog').showModal();});$('#close-settings').addEventListener('click',()=>$('#settings-dialog').close());$('#settings-dialog').addEventListener('click',e=>{if(e.target===$('#settings-dialog'))$('#settings-dialog').close();});
 sync();return {get prefs(){return {...prefs};},get active(){return $('#settings-dialog').open;},get reducedMotion(){return matchMedia('(prefers-reduced-motion:reduce)').matches;}};
}
