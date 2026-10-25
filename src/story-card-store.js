// One persisted draw per completed cleaning run. This is a local demo, not a prize service.
const KEY='karcher-story-cards:v1';
const LEVELS=['fabric','window','steam','outdoor'];
export function randomBelow(max,cryptoSource=globalThis.crypto){
 if(!Number.isSafeInteger(max)||max<1||max>0x100000000)throw Error('Invalid random range');
 const limit=Math.floor(0x100000000/max)*max,buffer=new Uint32Array(1);let value;
 do{cryptoSource.getRandomValues(buffer);value=buffer[0];}while(value>=limit);
 return value%max;
}
export function newCleaningRun(){return 'run:'+crypto.randomUUID();}
export function createStoryCardStore(cards,{storage,random=randomBelow,now=Date.now}={}){
 const ids=new Set(cards.map(c=>c.id)),receipts=new Map();let persistent=true,message='';
 function valid(r){return r&&typeof r.runId==='string'&&r.runId.length<=180&&ids.has(r.cardId)&&typeof r.gold==='boolean'&&Number.isFinite(r.createdAt)&&r.createdAt>0&&LEVELS.includes(r.level);}
 function clean(r){return {runId:r.runId,cardId:r.cardId,gold:r.gold,createdAt:r.createdAt,level:r.level};}
 try{storage??=globalThis.localStorage;const data=JSON.parse(storage.getItem(KEY)||'null');if(data){if(data.version!==1||!Array.isArray(data.receipts))throw Error('Invalid card album');for(const r of data.receipts)if(valid(r))receipts.set(r.runId,clean(r));}}
 catch{persistent=false;message='卡册暂时无法读取；本次卡片仍保留在页面中。';}
 function persist(){try{storage.setItem(KEY,JSON.stringify({version:1,receipts:[...receipts.values()]}));persistent=true;message='';}catch{persistent=false;message='浏览器无法保存卡册；本次切关仍保留，请勿关闭页面。';}}
 function reconcile(receipt){if(!valid(receipt))return null;const previous=receipts.get(receipt.runId);if(previous)return {...previous};const r=clean(receipt);receipts.set(r.runId,r);persist();return {...r};}
 function draw(runId,level){if(typeof runId!=='string'||!runId||runId.length>180||!LEVELS.includes(level))throw Error('Invalid cleaning run');const previous=receipts.get(runId);if(previous)return {...previous};
  // Rejection sampling gives exactly 1/100, without modulo bias or a forced hundredth win.
  const gold=random(100)===0;
  // The gold draw stays independent. A product's first run teaches that product;
  // later runs give each unseen normal card three slots, owned cards one slot.
  const existing=[...receipts.values()],first=!existing.some(r=>r.level===level),productCard=cards.find(c=>c.level===level),owned=new Set(existing.map(r=>r.cardId));
  let cardId;if(first&&productCard)cardId=productCard.id;else{const pool=cards.flatMap(c=>Array(owned.has(c.id)?1:3).fill(c.id));cardId=pool[random(pool.length)];}
  const receipt={runId,level,cardId,gold,createdAt:now()};receipts.set(runId,receipt);persist();return {...receipt};
 }
 return {draw,reconcile,get(runId){const r=receipts.get(runId);return r?{...r}:null;},get state(){return {receipts:[...receipts.values()].map(r=>({...r})),persistent,message};}};
}
