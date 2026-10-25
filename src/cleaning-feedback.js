// A small, reusable overlay pool: +1 is visual feedback, independent of area progress.
export function createCleaningFeedback(board){
 const layer=document.createElement('div');layer.className='cleaning-feedback';layer.setAttribute('aria-hidden','true');board.append(layer);
 const slots=Array.from({length:8},()=>{const node=document.createElement('span');node.className='cleaning-plus';node.textContent='+1';node.hidden=true;layer.append(node);return {node,animation:null};});
 const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');let cursor=0,nextAt=0;
 function emit(x,y){const now=performance.now();if(now<nextAt)return;nextAt=now+170;const slot=slots[cursor++%slots.length];slot.animation?.cancel();const drift=(cursor%3-1)*19;
  slot.node.style.left=Math.max(30,Math.min(board.clientWidth-30,x*board.clientWidth+drift*.45))+'px';
  slot.node.style.top=Math.max(80,Math.min(board.clientHeight-48,y*board.clientHeight-20))+'px';slot.node.hidden=false;
  const frames=reducedMotion.matches?[{opacity:1,transform:'translate(-50%,-50%)'},{opacity:0,transform:'translate(-50%,-50%)'}]:[
   {opacity:0,transform:'translate(-50%,-35%) scale(.55)',offset:0},
   {opacity:1,transform:'translate(-50%,-65%) scale(1.18)',offset:.16},
   {opacity:1,transform:'translate(calc(-50% + '+drift*.45+'px),-115%) scale(1)',offset:.44},
   {opacity:0,transform:'translate(calc(-50% + '+drift+'px),-245%) scale(.85)',offset:1}
  ];
  const animation=slot.node.animate(frames,{duration:reducedMotion.matches?400:820,easing:'ease-out',fill:'forwards'});slot.animation=animation;
  animation.onfinish=()=>{if(slot.animation!==animation)return;slot.node.hidden=true;animation.cancel();slot.animation=null;};
 }
 function clear(){nextAt=0;for(const slot of slots){slot.animation?.cancel();slot.animation=null;slot.node.hidden=true;}}
 return {emit,clear,release(){nextAt=0;},dispose(){clear();layer.remove();}};
}
