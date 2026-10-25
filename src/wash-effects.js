import * as THREE from 'three';

// Bounded particle and beam buffers are reused across all four cleaning tools.
export function createWashEffects(){
 const group=new THREE.Group();group.name='wash-effects';group.visible=false;
 const fanGeo=new THREE.BufferGeometry();fanGeo.setAttribute('position',new THREE.BufferAttribute(new Float32Array(9),3));
 const fan=new THREE.Mesh(fanGeo,new THREE.MeshBasicMaterial({color:0xa9ebff,transparent:true,opacity:.16,side:THREE.DoubleSide,depthWrite:false}));fan.frustumCulled=false;group.add(fan);
 const streamCount=13,lineArray=new Float32Array(streamCount*6),lineGeo=new THREE.BufferGeometry();lineGeo.setAttribute('position',new THREE.BufferAttribute(lineArray,3));const lines=new THREE.LineSegments(lineGeo,new THREE.LineBasicMaterial({color:0xd8f8ff,transparent:true,opacity:.74,depthWrite:false}));lines.frustumCulled=false;group.add(lines);
 const particleCount=90,particleArray=new Float32Array(particleCount*3),particleGeo=new THREE.BufferGeometry();particleGeo.setAttribute('position',new THREE.BufferAttribute(particleArray,3));
 const sprite=document.createElement('canvas');sprite.width=sprite.height=64;const c=sprite.getContext('2d'),gradient=c.createRadialGradient(32,32,1,32,32,32);gradient.addColorStop(0,'#fff');gradient.addColorStop(.22,'#ffffffd9');gradient.addColorStop(1,'#ffffff00');c.fillStyle=gradient;c.fillRect(0,0,64,64);const map=new THREE.CanvasTexture(sprite);
 const droplets=new THREE.Points(particleGeo,new THREE.PointsMaterial({map,color:0xe3f9ff,size:.04,transparent:true,opacity:.8,depthWrite:false}));droplets.frustumCulled=false;group.add(droplets);
 const ring=new THREE.Mesh(new THREE.RingGeometry(.82,1,40),new THREE.MeshBasicMaterial({color:0xd0f6ff,transparent:true,opacity:.6,side:THREE.DoubleSide,depthWrite:false}));group.add(ring);
 const mist=Array.from({length:14},()=>{const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map,color:0xffffff,transparent:true,opacity:.3,depthWrite:false,depthTest:false}));sprite.visible=false;sprite.renderOrder=3;group.add(sprite);return sprite;});
 const dirtyFlow=new THREE.InstancedMesh(new THREE.SphereGeometry(.012,7,5),new THREE.MeshBasicMaterial({color:0x89623d,transparent:true,opacity:.85,depthWrite:false}),14);dirtyFlow.frustumCulled=false;group.add(dirtyFlow);const flowTransform=new THREE.Object3D();
 const start=new THREE.Vector3(),end=new THREE.Vector3(),right=new THREE.Vector3(),up=new THREE.Vector3(),normal=new THREE.Vector3(),point=new THREE.Vector3();let phase=0;
 function hide(){group.visible=false;}
 function update(hit,tool,level,mode,dt,active,flow={recovered:0,removed:0}){
  if(!active||!hit||!tool.visible){hide();return;}
  group.visible=true;phase+=dt;tool.updateWorldMatrix(true,false);
  normal.copy(hit.face.normal).transformDirection(hit.object.matrixWorld);right.set(1,0,0).applyQuaternion(tool.quaternion);up.set(0,1,0).applyQuaternion(tool.quaternion);end.copy(hit.point).addScaledVector(normal,.01);
  const steam=mode.id==='steam',extract=level.id==='fabric',window=level.id==='window',wipe=mode.id==='wipe'||mode.id==='glass-wipe',jet=mode.id==='jet';
  const nozzle=level.id==='outdoor'?[0,0,.16]:steam?[.02,-.08,.025]:window&&mode.id==='spray'?[.02,-.04,.09]:extract?[0,.06,.08]:[0,0,0];start.set(...nozzle);tool.localToWorld(start);
  const spread=jet?.045:mode.id==='fan'?mode.rx:steam?.11:mode.id==='spray'?.18:extract?.18:.21;
  dirtyFlow.visible=extract&&flow.recovered>.001;dirtyFlow.material.color.set(flow.removed>.001?0x89623d:0xb8dbe1);mist.forEach(p=>p.visible=steam);fan.visible=mode.id==='fan';lines.visible=level.id==='outdoor'||mode.id==='spray';ring.visible=!wipe;droplets.visible=!wipe&&(!extract||flow.recovered>.001)&&(!window||mode.id==='spray'||flow.recovered>.001);
  const fanPositions=fanGeo.attributes.position;fanPositions.setXYZ(0,start.x,start.y,start.z);point.copy(end).addScaledVector(right,-spread);fanPositions.setXYZ(1,point.x,point.y,point.z);point.copy(end).addScaledVector(right,spread);fanPositions.setXYZ(2,point.x,point.y,point.z);fanPositions.needsUpdate=true;
  const count=jet?5:13;lineGeo.setDrawRange(0,count*2);
  for(let i=0;i<count;i++){const f=i/(count-1)*2-1,offset=i*6;lineArray[offset]=start.x;lineArray[offset+1]=start.y;lineArray[offset+2]=start.z;point.copy(end).addScaledVector(right,f*spread).addScaledVector(up,Math.sin(i+phase*22)*(jet?.01:.022));lineArray[offset+3]=point.x;lineArray[offset+4]=point.y;lineArray[offset+5]=point.z;}
  lineGeo.attributes.position.needsUpdate=true;
  const countParticles=extract?30:steam?65:90;particleGeo.setDrawRange(0,countParticles);droplets.material.size=steam?18:extract?3:jet?2.4:3.4;droplets.material.opacity=steam?.21:extract?.9:.78;droplets.material.color.set(extract?(flow.removed>.001?0x9a7041:0xc5e6f4):steam?0xffffff:0xdcf8ff);
  for(let i=0;i<countParticles;i++){const t=(i*.618033+phase*(steam?.7:2.6))%1,side=Math.sin(i*7.71),other=Math.cos(i*3.11);if(extract){point.copy(start).addScaledVector(up,t*.29).addScaledVector(normal,t*.27).addScaledVector(right,side*.045);}else if(window&&mode.id==='squeegee'){point.copy(end).lerp(start,t).addScaledVector(up,t*.10).addScaledVector(right,side*.03);}else if(steam){point.copy(start).lerp(end,t).addScaledVector(right,side*t*.13).addScaledVector(up,other*t*.1+Math.sin(t*Math.PI)*.10);}else{point.copy(start).lerp(end,t).addScaledVector(right,side*spread*t).addScaledVector(up,other*(jet?.017:.04)*t);}particleArray[i*3]=point.x;particleArray[i*3+1]=point.y;particleArray[i*3+2]=point.z;}
  particleGeo.attributes.position.needsUpdate=true;
  if(steam)mist.forEach((sprite,i)=>{const t=(i/14+phase*.85)%1;sprite.position.copy(start).lerp(end,t).addScaledVector(right,Math.sin(i*2.4)*t*.11).addScaledVector(up,t*.09+Math.cos(i*1.8)*t*.045);sprite.scale.setScalar(.095+t*.19);sprite.material.opacity=.36*Math.sin(Math.PI*t);});
  if(extract){for(let i=0;i<14;i++){const t=(i/14+phase*1.8)%1;flowTransform.position.set(Math.sin(i*2.3)*.13*(1-t),.035+t*.21,.162+t*.04);tool.localToWorld(flowTransform.position);flowTransform.scale.set(1,.65,1);flowTransform.updateMatrix();dirtyFlow.setMatrixAt(i,flowTransform.matrix);}dirtyFlow.instanceMatrix.needsUpdate=true;}
  ring.position.copy(end).addScaledVector(normal,.012);ring.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),normal);const pulse=1+Math.sin(phase*17)*.05;ring.scale.set((jet?.08:mode.rx)*pulse,(steam?.12:mode.ry)*pulse,1);ring.material.opacity=steam?.17:window?.26:.5;
 }
 return {group,update,hide,dispose(){fanGeo.dispose();fan.material.dispose();lineGeo.dispose();lines.material.dispose();particleGeo.dispose();droplets.material.dispose();map.dispose();ring.geometry.dispose();ring.material.dispose();mist.forEach(p=>p.material.dispose());dirtyFlow.geometry.dispose();dirtyFlow.material.dispose();}};
}
