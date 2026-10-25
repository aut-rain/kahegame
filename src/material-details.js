import * as THREE from 'three';
// Original procedural scenery, not an image of an actual location.
export function windowScenery(panel){
 const canvas=document.createElement('canvas');canvas.width=384;canvas.height=512;const c=canvas.getContext('2d');
 const sky=c.createLinearGradient(0,0,0,512);sky.addColorStop(0,'#90bdc6');sky.addColorStop(.6,'#d6e5d6');sky.addColorStop(1,'#819f82');c.fillStyle=sky;c.fillRect(0,0,384,512);
 c.save();c.translate(-panel*384,0);c.fillStyle='#f8edc8';c.beginPath();c.arc(550,100,35,0,Math.PI*2);c.fill();
 for(let i=0;i<11;i++){const x=i*80-35,h=70+(Math.sin(i*3.7)+1)*45;c.fillStyle=i%2?'#a8bcaf':'#b6c5b4';c.fillRect(x,300-h,64,h);c.fillStyle='#dce1ca';for(let y=315-h;y<295;y+=23)for(let dx=12;dx<55;dx+=20)c.fillRect(x+dx,y,9,12);}
 c.fillStyle='#8faa8e';c.beginPath();c.moveTo(0,335);for(let x=0;x<=780;x+=20)c.lineTo(x,310+Math.sin(x*.013)*19);c.lineTo(780,512);c.lineTo(0,512);c.fill();
 for(let i=0;i<8;i++){const x=i*108+20,y=375+Math.sin(i*2)*20;c.fillStyle='#6f8e72';c.fillRect(x-3,y-45,6,104);c.fillStyle=i%2?'#7b9e7d':'#8bad83';for(let j=0;j<3;j++){c.beginPath();c.ellipse(x+(j-1)*17,y-38+(j%2)*15,29,38,0,0,Math.PI*2);c.fill();}}
 c.strokeStyle='#d5d6b3';c.lineWidth=23;c.beginPath();c.moveTo(570,340);c.bezierCurveTo(600,410,330,430,400,512);c.stroke();c.restore();
 const gloss=c.createLinearGradient(0,0,384,512);gloss.addColorStop(0,'#fff8');gloss.addColorStop(.25,'#fff0');gloss.addColorStop(.7,'#fff0');gloss.addColorStop(1,'#e4f1e626');c.fillStyle=gloss;c.fillRect(0,0,384,512);
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;
}
