import * as THREE from 'three';
import {processPaint,processPixel} from './product-process.js';
const N=192;
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
// The alpha mask is the state: progress measures removed dirt mass, never cursor events.
export class DirtySurface{
 constructor(parent,{width,height,position,rotation=[0,0,0],kind='mud',seed=1,shape='rect',geometry=null,coverage=null,partId=null,partLabel=null}){
  this.width=width;this.height=height;this.kind=kind;this.partId=partId;this.partLabel=partLabel;this.partDone=false;this.canvas=document.createElement('canvas');this.canvas.width=this.canvas.height=N;
  this.ctx=this.canvas.getContext('2d',{willReadFrequently:true});const c=this.ctx,r=rng(seed);
  const grad=c.createLinearGradient(0,0,N,N);grad.addColorStop(0,kind==='glass'?'rgba(120,119,99,.40)':'rgba(93,64,34,.38)');grad.addColorStop(1,kind==='glass'?'rgba(155,135,103,.6)':'rgba(101,65,30,.58)');c.fillStyle=grad;c.fillRect(3,3,N-6,N-6);
  for(let i=0;i<65;i++){let x=r()*N,y=r()*N,rr=4+r()*22;c.beginPath();c.ellipse(x,y,rr,rr*(.3+r()*.8),r()*3,0,Math.PI*2);c.fillStyle=kind==='glass'?'rgba(115,104,87,'+(.1+r()*.22)+')':'rgba('+(60+Math.floor(r()*30))+',48,27,'+(.14+r()*.4)+')';c.fill();}
  if(kind==='glass'){for(let i=0;i<22;i++){c.strokeStyle='rgba(235,234,210,.4)';c.lineWidth=1;c.beginPath();const x=r()*N;c.moveTo(x,0);c.lineTo(x+4,N);c.stroke();}}
  const coverageData=coverage?coverage.getContext('2d').getImageData(0,0,N,N).data:null;
  this.image=c.getImageData(0,0,N,N);this.initial=new Float32Array(N*N);this.remaining=new Float32Array(N*N);this.wet=new Float32Array(N*N);this.total=0;this.left=0;this.loosened=0;
  for(let y=0;y<N;y++)for(let x=0;x<N;x++){const i=y*N+x;let a=this.image.data[i*4+3]/255;const edge=Math.min(x,y,N-1-x,N-1-y);a*=coverageData?coverageData[i*4+3]/255:Math.min(1,Math.max(0,(edge-2)/6));if(shape==='circle'&&Math.hypot((x-N/2)/(N/2-3),(y-N/2)/(N/2-3))>1)a=0;this.initial[i]=this.remaining[i]=a;this.image.data[i*4+3]=Math.round(a*255);this.total+=a;this.wet[i]=kind==='glass'?1:0;}
  this.left=this.total;c.putImageData(this.image,0,0);this.texture=new THREE.CanvasTexture(this.canvas);this.texture.colorSpace=THREE.SRGBColorSpace;this.texture.minFilter=THREE.LinearFilter;this.texture.generateMipmaps=false;
  this.material=new THREE.MeshStandardMaterial({map:this.texture,transparent:true,depthWrite:false,roughness:kind==='grease'?.35:kind==='glass'?.25:.94,polygonOffset:true,polygonOffsetFactor:-2});
  this.mesh=new THREE.Mesh(geometry||new THREE.PlaneGeometry(width,height),this.material);this.mesh.position.set(...position);this.mesh.rotation.set(...rotation);this.mesh.userData.surface=this;parent.add(this.mesh);this.changed=false;
  this.hitMesh=this.mesh;
  if(geometry){this.hitMesh=new THREE.Mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({visible:false}));this.hitMesh.position.copy(this.mesh.position);this.hitMesh.position.z+=.22;this.hitMesh.userData.surface=this;parent.add(this.hitMesh);}
  this.probeUVs=[];if(coverageData)for(let y=8;y<N;y+=12)for(let x=8;x<N;x+=12)if(this.initial[y*N+x]>.04)this.probeUVs.push({u:x/N,v:1-y/N});if(kind==='grease'){this.changed=true;this.refresh();}
 }
 acceptsUV(uv,rxWorld,ryWorld){if(!this.partId)return true;const cx=uv.x*N,cy=(1-uv.y)*N,rx=rxWorld/this.width*N,ry=ryWorld/this.height*N;for(let y=Math.max(0,Math.floor(cy-ry));y<Math.min(N,Math.ceil(cy+ry));y+=2)for(let x=Math.max(0,Math.floor(cx-rx));x<Math.min(N,Math.ceil(cx+rx));x+=2)if(((x-cx)/rx)**2+((y-cy)/ry)**2<1&&this.initial[y*N+x]>.02)return true;return false;}
 paint(uv,rxWorld,ryWorld,strength,mode){if(this.process)return processPaint(this,uv,rxWorld,ryWorld,strength,mode);const cx=uv.x*N,cy=(1-uv.y)*N,rx=rxWorld/this.width*N,ry=ryWorld/this.height*N;let removed=0;
  for(let y=Math.max(0,Math.floor(cy-ry));y<Math.min(N,Math.ceil(cy+ry));y++)for(let x=Math.max(0,Math.floor(cx-rx));x<Math.min(N,Math.ceil(cx+rx));x++){
   const d=((x-cx)/rx)**2+((y-cy)/ry)**2;if(d>=1)continue;const i=y*N+x;if(this.initial[i]===0)continue;const force=(1-d)*strength;
   if(mode==='steam'||mode==='spray'){const delta=Math.min(1-this.wet[i],force*3);this.wet[i]+=delta;this.loosened+=delta*this.initial[i];}
   else {const factor=this.kind==='grease'?this.wet[i]:(this.kind==='glass'?(this.requiresWet?this.wet[i]:.25+.75*this.wet[i]):1);const delta=Math.min(this.remaining[i],force*factor);this.remaining[i]-=delta;this.left-=delta;removed+=delta;}
  }this.changed=true;return removed;
 }
 refresh(before=false){if(!this.changed&&!before)return;for(let i=0;i<this.remaining.length;i++){if(this.process){const c=processPixel(this,i,before);this.image.data.set([c.r,c.g,c.b,Math.round(c.alpha*255)],i*4);continue;}this.image.data[i*4+3]=Math.round((before?this.initial[i]:this.remaining[i])*255);if(this.kind==='grease'){const x=i%N,y=Math.floor(i/N),seam=x%32<3||y%64<4,film=Math.sin(x*.18+y*.07)*6,w=before?0:this.wet[i];this.image.data[i*4]=seam?84:153+film-w*24;this.image.data[i*4+1]=seam?74:119+film+w*12;this.image.data[i*4+2]=seam?50:62+w*46;}}this.ctx.putImageData(this.image,0,0);this.texture.needsUpdate=true;this.changed=false;}
 finish(){if(this.process){this.process.bound.fill(0);this.wet.fill(this.process.kind==='fabric'?.06:0);}this.remaining.fill(0);this.left=0;this.changed=true;this.refresh();}
 reset(){this.partDone=false;this.remaining.set(this.initial);this.left=this.total;this.wet.fill(this.kind==='glass'?1:0);this.loosened=0;if(this.process){this.wet.set(this.process.initialWet);this.process.bound.set(this.process.initialBound);this.process.best.fill(0);this.process.recovered=0;}this.changed=true;this.refresh();}
 dispose(){if(this.hitMesh!==this.mesh){this.hitMesh.geometry.dispose();this.hitMesh.material.dispose();}this.mesh.geometry.dispose();this.material.dispose();this.texture.dispose();}
}
