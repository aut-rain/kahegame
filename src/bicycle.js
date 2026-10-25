import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {DirtySurface} from './surface.js';

// The dirt skins share a side-projected UV layout with the actual bicycle geometry.
// Cleaning one side clears that projected patch on both sides, keeping every part reachable.
export function createWashableBicycle(parent){
 const bike=new THREE.Group();bike.name='washable-bicycle';bike.position.set(-.45,.045,.5);bike.scale.setScalar(1.4);parent.add(bike);
 const material=(color,opts={})=>new THREE.MeshStandardMaterial({color,roughness:.6,...opts});
 const frameMat=material(0xe3b623,{metalness:.25,roughness:.3}),tireMat=material(0x28352f),metalMat=material(0xa8b2ac,{metalness:.7,roughness:.3}),gripMat=material(0x35463d),fenderMat=material(0x607f76,{metalness:.25,roughness:.35});
 const groups=new Map([['rear-wheel',{label:'后轮',meshes:[]}],['front-wheel',{label:'前轮',meshes:[]}],['frame',{label:'车架',meshes:[]}],['fenders',{label:'挡泥板',meshes:[]}],['cockpit',{label:'车座与车把',meshes:[]}]]);
 function mesh(g,m,p,part){const o=new THREE.Mesh(g,m);o.position.set(...p);o.castShadow=true;o.receiveShadow=true;bike.add(o);if(part)groups.get(part).meshes.push(o);return o;}
 function rod(a,b,r,m=frameMat,part='frame'){const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b),d=bv.clone().sub(av);const o=mesh(new THREE.CylinderGeometry(r,r,d.length(),12),m,av.add(bv).multiplyScalar(.5).toArray(),part);o.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return o;}
 const rear=[-.85,.59,0],front=[.85,.59,0],crank=[-.12,.54,0],seat=[-.43,1.25,0],head=[.55,1.26,0];
 for(const [center,part] of [[rear,'rear-wheel'],[front,'front-wheel']]){
  mesh(new THREE.TorusGeometry(.53,.055,12,64),tireMat,center,part);mesh(new THREE.TorusGeometry(.465,.014,8,48),metalMat,center,part);
  const hub=mesh(new THREE.CylinderGeometry(.045,.045,.15,16),metalMat,center);hub.rotation.x=Math.PI/2;
  for(let i=0;i<18;i++){const a=i*Math.PI/9;rod([center[0],center[1],.02],[center[0]+Math.cos(a)*.46,center[1]+Math.sin(a)*.46,.02],.0055,metalMat,null);}
  const arch=mesh(new THREE.TorusGeometry(.617,.032,10,44,Math.PI*.79),fenderMat,[center[0],center[1],.005],'fenders');arch.rotation.z=Math.PI*.105;
 }
 [[rear,seat],[seat,crank],[crank,rear],[seat,head],[head,crank]].forEach(([a,b])=>rod(a,b,.037));
 for(const z of [-.07,.07]){rod([.55,1.26,z],[.85,.59,z],.024);rod([-.12,.54,z],[-.85,.59,z],.02);}
 rod(seat,[-.48,1.43,0],.025,metalMat,'cockpit');mesh(new RoundedBoxGeometry(.39,.075,.23,3,.025),gripMat,[-.49,1.45,0],'cockpit');
 rod(head,[.48,1.51,0],.026,metalMat,'cockpit');rod([.48,1.51,0],[.65,1.56,0],.025,metalMat,'cockpit');rod([.65,1.56,-.25],[.65,1.56,.25],.023,metalMat,'cockpit');
 for(const z of [-.22,.22])rod([.65,1.56,z-.065],[.65,1.56,z+.065],.033,gripMat,'cockpit');
 mesh(new THREE.TorusGeometry(.12,.02,8,24),metalMat,[-.12,.54,.09]);rod([-.12,.54,.10],[.05,.39,.10],.018,metalMat,null);rod([-.12,.54,-.10],[-.29,.69,-.10],.018,metalMat,null);
 mesh(new RoundedBoxGeometry(.16,.045,.13,2,.012),gripMat,[.05,.39,.16]);mesh(new RoundedBoxGeometry(.16,.045,.13,2,.012),gripMat,[-.29,.69,-.16]);
 rod([-.12,.65,.07],[-.85,.63,.07],.008,gripMat,null);rod([-.12,.42,.07],[-.85,.55,.07],.008,gripMat,null);rod([-.14,.53,-.05],[-.26,.04,-.32],.017,gripMat,null);
 const surfaces=[];let seed=85;
 for(const [id,part] of groups){
  const geometries=part.meshes.map(o=>{o.updateMatrix();const source=o.geometry.clone();const g=source.index?source.toNonIndexed():source;if(g!==source)source.dispose();g.applyMatrix4(o.matrix);g.clearGroups();return g;});
  const geometry=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());geometry.computeBoundingBox();const bounds=geometry.boundingBox,center=bounds.getCenter(new THREE.Vector3());
  const width=bounds.max.x-bounds.min.x+.08,height=bounds.max.y-bounds.min.y+.08;geometry.translate(-center.x,-center.y,0);
  const positions=geometry.getAttribute('position'),normals=geometry.getAttribute('normal'),uv=new Float32Array(positions.count*2);
  for(let i=0;i<positions.count;i++){uv[i*2]=positions.getX(i)/width+.5;uv[i*2+1]=positions.getY(i)/height+.5;positions.setXYZ(i,positions.getX(i)+normals.getX(i)*.0025,positions.getY(i)+normals.getY(i)*.0025,positions.getZ(i)+normals.getZ(i)*.0025);}
  geometry.setAttribute('uv',new THREE.BufferAttribute(uv,2));geometry.computeBoundingSphere();
  const coverage=document.createElement('canvas');coverage.width=coverage.height=192;const c=coverage.getContext('2d');c.fillStyle='#fff';const indices=geometry.index;const count=indices?indices.count:positions.count;
  for(let i=0;i<count;i+=3){c.beginPath();for(let v=0;v<3;v++){const n=indices?indices.getX(i+v):i+v,x=uv[n*2]*192,y=(1-uv[n*2+1])*192;v?c.lineTo(x,y):c.moveTo(x,y);}c.closePath();c.fill();}
  const s=new DirtySurface(bike,{width,height,position:[center.x,center.y,0],kind:'mud',seed:seed++,geometry,coverage,partId:id,partLabel:part.label});surfaces.push(s);
 }
 return {bike,surfaces};
}
