// Per-level, versioned saves. Two Uint16 channels preserve dirt/wetness without
// serializing huge decimal arrays. Storage failure never interrupts gameplay.
const PREFIX='karcher-cleaning:v1:',PIXELS=192*192;
function signature(s){return [s.kind,s.partId||'',s.width.toFixed(5),s.height.toFixed(5),s.total.toFixed(3)].join('|');}
// Run-length encoding keeps eight jobs plus free-play saves well below quota.
// The decoder still accepts the original uncompressed v1 payloads.
function encode(surface){
 const runs=[];let count=0,lastD=-1,lastW=-1;
 for(let i=0;i<PIXELS;i++){const d=Math.round((surface.initial[i]?surface.remaining[i]/surface.initial[i]:0)*65535),w=Math.round(surface.wet[i]*65535);if(d===lastD&&w===lastW&&count<65535)count++;else{if(count)runs.push(count,lastD,lastW);count=1;lastD=d;lastW=w;}}
 if(count)runs.push(count,lastD,lastW);const bytes=new Uint8Array(runs.length*2),view=new DataView(bytes.buffer);runs.forEach((v,i)=>view.setUint16(i*2,v,true));let str='';for(let i=0;i<bytes.length;i+=8192)str+=String.fromCharCode(...bytes.subarray(i,i+8192));return 'rle:'+btoa(str);
}
function decode(text){
 if(typeof text!=='string'||text.length>PIXELS*8+4)throw Error('Invalid save size');const packed=text.startsWith('rle:'),raw=atob(packed?text.slice(4):text),bytes=Uint8Array.from(raw,c=>c.charCodeAt(0)),source=new DataView(bytes.buffer);
 if(!packed){if(raw.length!==PIXELS*4)throw Error('Invalid save');return source;}
 if(bytes.length%6)throw Error('Invalid run');const output=new DataView(new ArrayBuffer(PIXELS*4));let at=0;
 for(let pos=0;pos<bytes.length;pos+=6){const count=source.getUint16(pos,true),d=source.getUint16(pos+2,true),w=source.getUint16(pos+4,true);if(!count||at+count>PIXELS)throw Error('Invalid run');for(let i=0;i<count;i++,at++){output.setUint16(at*4,d,true);output.setUint16(at*4+2,w,true);}}
 if(at!==PIXELS)throw Error('Incomplete save');return output;
}
export function createSaveGame(status){
 const memory=new Map();let available=true;const notice=(text,error=false)=>{status.textContent=text;status.classList.toggle('save-error',error);};
 try{localStorage.setItem(PREFIX+'probe','1');localStorage.removeItem(PREFIX+'probe');notice('自动存档已开启');}catch{available=false;notice('无法保存到浏览器 · 本次切关仍保留进度',true);}
 if(location.protocol==='file:')status.title='本地文件模式的存档受浏览器设置影响。固定使用同一浏览器和入口，或通过 npm start 的地址继续游玩。';
 function read(id){if(memory.has(id))return memory.get(id);try{const text=localStorage.getItem(PREFIX+id);if(!text)return null;const data=JSON.parse(text);memory.set(id,data);return data;}catch{notice('存档无法读取 · 本关重新开始',true);return null;}}
 function write(id,data){memory.set(id,data);try{localStorage.setItem(PREFIX+id,JSON.stringify(data));available=true;notice('已保存 · '+new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'}));return true;}catch{available=false;notice('浏览器存档失败 · 请勿关闭，切关仍保留',true);return false;}}
 return {
  inspect(id){const d=read(id);return d&&d.version===1&&Number.isFinite(d.elapsed)&&typeof d.completed==='boolean'?{seed:d.seed,completed:d.completed,elapsed:d.elapsed,percent:d.percent}:null;},
  active(){try{return localStorage.getItem(PREFIX+'active');}catch{return null;}},
  setActive(id){try{localStorage.setItem(PREFIX+'active',id);}catch{}},
  save(id,surfaces,meta){return write(id,{version:1,id,savedAt:Date.now(),...meta,surfaces:surfaces.map(s=>({signature:signature(s),done:s.partDone,data:encode(s),...(s.process?{process:{version:1,kind:s.process.kind,data:encode({initial:s.initial,remaining:s.process.bound,wet:s.process.best}),recovered:s.process.recovered}}:{})}))});},
  restore(id,surfaces){const data=read(id);if(!data)return null;try{
   if(data.version!==1||data.id!==id||!Array.isArray(data.surfaces)||data.surfaces.length!==surfaces.length||!Number.isFinite(data.elapsed)||data.elapsed<0||data.elapsed>1e9||typeof data.completed!=='boolean')throw Error('Incompatible save');
   // Decode and validate everything before mutating the live model.
   const buffers=data.surfaces.map((item,i)=>{if(item.signature!==signature(surfaces[i])||typeof item.done!=='boolean')throw Error('Changed scene');return decode(item.data);});
   const processes=data.surfaces.map((item,j)=>{if(!item.process)return null;const p=item.process;if(!surfaces[j].process||p.version!==1||p.kind!==surfaces[j].process.kind||!Number.isFinite(p.recovered)||p.recovered<0||p.recovered>1e12)throw Error('Invalid process');const v=decode(p.data);for(let i=0;i<PIXELS;i++)if(v.getUint16(i*4,true)>buffers[j].getUint16(i*4,true)+1)throw Error('Invalid bound dirt');return v;});
   surfaces.forEach((s,j)=>{const view=buffers[j];s.left=0;s.loosened=0;for(let i=0;i<PIXELS;i++){s.remaining[i]=s.initial[i]*view.getUint16(i*4,true)/65535;s.wet[i]=view.getUint16(i*4+2,true)/65535;s.left+=s.remaining[i];s.loosened+=s.initial[i]*s.wet[i];}if(s.process){const v=processes[j];for(let i=0;i<PIXELS;i++){s.process.bound[i]=v?s.initial[i]*v.getUint16(i*4,true)/65535:Math.min(s.process.initialBound[i],s.remaining[i]);s.process.best[i]=v?v.getUint16(i*4+2,true)/65535:s.initial[i]?1-s.remaining[i]/s.initial[i]:0;if(!v&&s.remaining[i]===0)s.wet[i]=s.process.kind==='fabric'?.06:0;}s.process.recovered=data.surfaces[j].process?.recovered||0;}s.partDone=data.surfaces[j].done;if(s.partDone||data.completed)s.finish();else{s.changed=true;s.refresh();}});
   notice(available?'已恢复上次清洁进度':'已恢复本次进度 · 浏览器存档不可用',!available);return data;
  }catch{notice('旧存档不兼容或损坏 · 本关重新开始',true);return null;}},
  get available(){return available;}
 };
}
