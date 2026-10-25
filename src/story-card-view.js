import {STORY_CARDS,GOLD_DEMO} from './story-cards.js';
import {createStoryCardStore} from './story-card-store.js';
const $=s=>document.querySelector(s);
export function createStoryCardView(onPause){
 const store=createStoryCardStore(STORY_CARDS),dialog=$('#story-dialog');let current=null,screen='card';
 const find=id=>STORY_CARDS.find(c=>c.id===id);
 function sourceLink(url,label){const a=document.createElement('a');a.href=url;a.textContent=label;a.target='_blank';a.rel='noopener noreferrer';return a;}
 function updateCount(){const state=store.state,count=new Set(state.receipts.map(r=>r.cardId)).size;$('#story-count').textContent=count+' / '+STORY_CARDS.length;$('#story-storage').textContent=state.message;$('#story-storage').hidden=!state.message;}
 function drawCard(receipt,newly=false){const card=find(receipt.cardId);if(!card)return;screen='card';$('#story-album').hidden=true;$('#story-detail').hidden=false;$('#story-heading').textContent=newly?'清洁完成，发现一段新故事':'你的卡赫图文卡';$('#story-subtitle').textContent=(receipt.gold?'本次还抽中了 1% 惊喜金卡。':'图文卡已自动收入卡册。')+' 已记录这次完整清洁。';
  const article=$('#story-card');article.classList.toggle('is-gold',receipt.gold);article.classList.remove('is-revealing');
  $('#story-category').textContent=card.category+' / '+card.number;$('#story-product').textContent=card.product;$('#story-title').textContent=card.title;$('#story-body').textContent=card.body;$('#story-note').textContent=card.note;$('#story-image').src=card.image;$('#story-image').alt=card.alt;$('#story-image-fallback').hidden=true;$('#story-image').hidden=false;
  $('#story-sources').replaceChildren(sourceLink(card.url,card.source+' ↗'),sourceLink(card.imageUrl,'查看官方原图 ↗'));$('#story-image-credit').textContent='图片：Kärcher 官方 · 文字据官方资料中文整理';
  $('#story-gold').hidden=!receipt.gold;$('#story-gold-title').textContent=GOLD_DEMO.title;$('#story-gold-notice').textContent=GOLD_DEMO.notice;
  const copies=store.state.receipts.filter(r=>r.cardId===card.id).length;const repeat=newly&&copies>1&&!receipt.gold;dialog.classList.toggle('story-repeat',repeat);dialog.classList.toggle('story-compact',newly&&!receipt.gold);$('#story-expand').hidden=!repeat;if(repeat)$('#story-heading').textContent='熟悉的故事，又收藏了一次';$('#story-copy-count').textContent=copies>1?'这张已收集 '+copies+' 次':'首次收集';
  $('#story-album-button').hidden=false;$('#story-done').textContent=newly?'收好卡片，继续清洁':'返回游戏';
  if(newly){void article.offsetWidth;article.classList.add('is-revealing');}updateCount();
 }
 function openCard(receipt,newly=false){if(!receipt||!find(receipt.cardId))return;onPause();drawCard(receipt,newly);if(!dialog.open)dialog.showModal();}
 function openAlbum(){onPause();dialog.classList.remove('story-repeat','story-compact');$('#story-expand').hidden=true;screen='album';$('#story-detail').hidden=true;$('#story-album').hidden=false;$('#story-heading').textContent='我的卡赫图文卡册';const state=store.state;$('#story-subtitle').textContent='每款产品首次完成获得对应知识卡；之后随机收集，未拥有卡的权重为已拥有卡的 3 倍。';$('#story-album-button').hidden=true;$('#story-done').textContent='返回游戏';$('#story-album').replaceChildren();
  for(const card of STORY_CARDS){const matches=state.receipts.filter(r=>r.cardId===card.id);const button=document.createElement('button');button.type='button';button.className='story-album-item'+(matches.length?' earned':' locked');button.disabled=!matches.length;button.dataset.storyId=card.id;
   const image=document.createElement('img');image.src=card.image;image.alt=card.alt;image.loading='lazy';const label=document.createElement('small');label.textContent=card.category+' · '+card.product;const title=document.createElement('strong');title.textContent=card.title;const count=document.createElement('span');count.textContent=matches.length?'已收集 '+matches.length+' 次 · 查看':'尚未收集';button.append(image,label,title,count);if(matches.length)button.addEventListener('click',()=>openCard(matches.at(-1)));$('#story-album').append(button);
  }
  const gold=state.receipts.filter(r=>r.gold);if(gold.length){const button=document.createElement('button');button.className='story-album-item gold-album-item';const title=document.createElement('strong');title.textContent=GOLD_DEMO.title;const note=document.createElement('span');note.textContent='惊喜金卡 × '+gold.length+' · 试玩演示';button.append(title,note);button.addEventListener('click',()=>openCard(gold.at(-1)));$('#story-album').prepend(button);}
  updateCount();if(!dialog.open)dialog.showModal();
 }
 $('#story-expand').addEventListener('click',()=>{dialog.classList.remove('story-repeat');$('#story-expand').hidden=true;});
 $('#story-image').addEventListener('error',()=>{$('#story-image').hidden=true;$('#story-image-fallback').hidden=false;});
 $('#open-story-album').addEventListener('click',openAlbum);$('#story-album-button').addEventListener('click',openAlbum);$('#result-story-card').addEventListener('click',()=>openCard(current));$('#close-story').addEventListener('click',()=>dialog.close());$('#story-done').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
 updateCount();
 return {draw(runId,level){current=store.draw(runId,level);updateCount();$('#result-story-card').hidden=false;return current;},restore(receipt,runId){const restored=receipt?.runId===runId?store.reconcile(receipt):null;current=restored||store.get(runId);$('#result-story-card').hidden=!current;updateCount();return current;},showCurrent(){openCard(current,true);},get active(){return dialog.open;},get state(){return {...store.state,current:current?{...current}:null,screen};}};
}
