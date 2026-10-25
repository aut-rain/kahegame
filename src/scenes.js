import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {windowScenery} from './material-details.js';
import {DirtySurface} from './surface.js';
import {createWashableBicycle} from './bicycle.js';
import {createProduct,createCleaningTool,disposeModel} from './products.js';
const C={cream:0xf0ead9,wood:0xbfa480,dark:0x3f4a3e,yellow:0xf2d62e,leaf:0x718363};
export function createWorld(level){
 const root=new THREE.Group(),surfaces=[];const extras=[];
 const material=(color,opts={})=>new THREE.MeshStandardMaterial({color,roughness:.8,...opts});
 function box(size,pos,color,r=.05,opts={}){const m=new THREE.Mesh(new RoundedBoxGeometry(...size,3,r),material(color,opts));m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;root.add(m);return m;}
 function cylinder(rt,rb,h,pos,color){const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,32),material(color));m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;root.add(m);return m;}
 function tube(points,r,color){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const m=new THREE.Mesh(new THREE.TubeGeometry(curve,36,r,8,false),material(color));m.castShadow=true;root.add(m);return m;}
 function plant(x,z,s=1){cylinder(.21*s,.16*s,.38*s,[x,.25*s,z],0xe6d9c2);for(let i=0;i<8;i++){const a=i*2.4;const px=x+Math.cos(a)*.23*s,pz=z+Math.sin(a)*.23*s;const y=(.65+i*.05)*s;tube([[x,.4*s,z],[px,y,pz]],.012*s,0x657657);const leaf=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),material(i%2?0x889871:0x607c63));leaf.scale.set(.11*s,.28*s,.035*s);leaf.position.set(px,y,pz);leaf.rotation.set(.25,a,.6*Math.cos(a));leaf.castShadow=true;root.add(leaf);}}
 function addSurface(config){const s=new DirtySurface(root,{kind:'mud',...config});surfaces.push(s);return s;}
 const floor=box([7.6,.14,5.8],[0,-.07,0],0xd8daca,.16);floor.receiveShadow=true;
 box([7.6,3.8,.13],[0,1.82,-2.65],level.id==='window'?0xdce2d6:0xe5e5d8,.04);
 box([.13,3.8,5.8],[-3.72,1.82,0],0xd7dfce,.04);
 box([7.2,.08,.04],[0,.1,-2.54],0xc8cdbb,.01);
 for(let i=0;i<8;i++){box([.012,.006,5.5],[-3.3+i*.9,.006,.0],0xcbd0bc,.001);}
 if(level.id==='fabric'){
  const cloth=document.createElement('canvas');cloth.width=cloth.height=128;const ctx=cloth.getContext('2d');ctx.fillStyle='#c0af8c';ctx.fillRect(0,0,128,128);ctx.strokeStyle='#d2c2a0';ctx.lineWidth=1;for(let i=0;i<128;i+=3){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,128);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(128,i);ctx.stroke();}const tex=new THREE.CanvasTexture(cloth);tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(3,3);tex.colorSpace=THREE.SRGBColorSpace;extras.push(tex);
  [-1.35,1.35].forEach(x=>[-.55,.8].forEach(z=>cylinder(.085,.065,.34,[x,.2,z],0x695d48)));
  box([3.5,.35,1.8],[0,.55,.1],0x9e9178,.13);
  box([3.35,1.37,.38],[0,1.34,-.63],0xb3a180,.13,{map:tex});
  [-.79,.79].forEach((x,i)=>{box([1.51,.29,1.24],[x,.87,.25],0xd0bd96,.12,{map:tex});box([1.52,1.1,.24],[x,1.42,-.39],0xc7b28a,.12,{map:tex});addSurface({width:1.42,height:1.11,position:[x,1.025,.25],rotation:[-Math.PI/2,0,0],seed:12+i});addSurface({width:1.39,height:.93,position:[x,1.43,-.262],seed:21+i});});
  [-1.68,1.68].forEach(x=>box([.31,.7,1.72],[x,.95,.08],0xb7a483,.13,{map:tex}));
  // Floor rug, wall art and a reading nook make the target recognisable as a room.
  box([4.35,.025,2.9],[0,.03,.55],0xe9e1ca,.1);for(let i=-7;i<8;i++)box([.012,.005,2.75],[i*.27,.046,.55],0xdad2bb,.001);
  cylinder(.48,.48,.08,[2.5,.84,-.35],0xb59a76);cylinder(.06,.06,.8,[2.5,.42,-.35],0x8e775a);cylinder(.35,.35,.04,[2.5,.04,-.35],0x8e775a);cylinder(.10,.08,.22,[2.5,.99,-.35],0xece4d2);plant(-2.7,-1.6,1.4);
  box([1.3,1.05,.08],[.2,2.75,-2.5],0xb49a72,.02);box([1.15,.9,.04],[.2,2.75,-2.44],0xf4eedb,.01);box([.57,.57,.025],[.2,2.75,-2.41],0x8c9b7a,.13);
 }else if(level.id==='window'){
  box([3.66,2.75,.18],[0,1.82,-.63],0x7c8f81,.05);
  [-.86,.86].forEach((x,i)=>{const outside=windowScenery(i);extras.push(outside);box([1.6,2.48,.08],[x,1.82,-.50],0xffffff,.01,{map:outside,metalness:.05,roughness:.25});box([.18,2.1,.018],[x-.48,1.82,-.449],0xebf6ee,.01,{transparent:true,opacity:.13});addSurface({width:1.56,height:2.43,position:[x,1.82,-.442],kind:'glass',seed:50+i});});
  [-1.73,0,1.73].forEach(x=>box([.1,2.68,.14],[x,1.82,-.39],0xf2eedc,.02));[.51,1.82,3.13].forEach(y=>box([3.55,.08,.14],[0,y,-.39],0xf2eedc,.01));box([4,.16,.6],[0,.42,-.48],0xabae95,.03);plant(-2.55,-.45,1.3);plant(2.55,-1.55,1.65);
  [-2.3,2.3].forEach(x=>{for(let j=0;j<6;j++){const m=box([.1,3,.22],[x+j*.09*(x>0?1:-1),1.95,-1.1],j%2?0xd7ccaf:0xe4d9bf,.04);}});
 }else if(level.id==='steam'){
  box([3.9,.95,1.05],[0,.54,-.25],0xbcae92,.05);[-1.25,0,1.25].forEach(x=>{box([1.17,.8,.05],[x,.55,.3],0xcabb9f,.02);box([.25,.035,.04],[x,.82,.34],0x727c68,.01);});box([4.14,.13,1.23],[0,1.08,-.25],0xe8e3d3,.05);box([3.86,1.86,.1],[0,2.08,-.77],0xc3cdb9,.02);
  for(let y=0;y<3;y++)for(let x=0;x<6;x++){box([.6,.55,.04],[-1.57+x*.63,1.49+y*.58,-.69],(x+y)%3?0xd2dbca:0xc5d1c1,.012,{roughness:.27,metalness:.04});}
  addSurface({width:3.72,height:1.68,position:[0,2.08,-.663],kind:'grease',seed:63});
  cylinder(.2,.18,.36,[1.5,1.32,-.08],0xc7b591);[-.1,0,.1].forEach(d=>tube([[1.5+d,1.4,-.08],[1.5+d*2,1.95,-.08]],.025,0x78674b));box([.56,.03,.7],[-1.4,1.17,-.25],0xad926f,.02);plant(-2.75,-1.6,1.4);
  box([2.5,.12,.48],[0,3.28,-1.0],0xbfa483,.02);[0,.6].forEach(x=>cylinder(.15,.15,.29,[x,3.5,-1.0],0xd4d1ad));
 }else{
  // The bicycle is the cleaning target. Keep background equipment away from it.
  box([1.15,.75,.65],[2.35,.51,-1.8],0x7b938b,.1);
  box([1.2,.07,.69],[2.35,.91,-1.8],0x4b635c,.03);
  box([.30,.065,.06],[2.35,.70,-1.44],0x293c33,.02);
  const bicycle=createWashableBicycle(root);surfaces.push(...bicycle.surfaces);
  plant(3.02,-1.25,1.25);plant(-3.1,-1.8,1.0);
  box([4.6,.025,2.3],[-.45,.018,.6],0xd0d6c5,.08);

 }
 // Scene and product studio share reference-based meshes.
 const prop=createProduct(level.id,{accessories:true});
 prop.scale.setScalar(level.id==='window'?.54:level.id==='outdoor'?.6:.64);
 prop.position.set(2.45,.055,1.24);prop.rotation.y=level.id==='outdoor'?.18:-.25;root.add(prop);
 if(level.id==='window'||level.id==='outdoor'){
  box([1.3,.13,1.0],[2.45,.08,1.24],0xe8e4d6,.1);prop.position.y=.15;
 }
 root.updateMatrixWorld(true);
 return {root,surfaces,product:prop,target:level.id==='outdoor'?new THREE.Vector3(-.15,1.15,.3):new THREE.Vector3(0,1.25,0),dispose(){surfaces.forEach(s=>s.dispose());disposeModel(root);extras.forEach(t=>t.dispose());}};
}
export function createTool(level,mode){return createCleaningTool(level.id,mode||level.modes[0].id);}
