import * as THREE from 'three';
export function createDetailView({scene,camera,controls,board,getWorld,onFocusChange}){
 let motion=null,focusIndex=null,remainingUntil=0;const markers=[];
 const group=new THREE.Group();group.name='remaining-dirt-hints';scene.add(group);
 const material=new THREE.MeshBasicMaterial({color:0xffdf00,transparent:true,opacity:.9,depthTest:false,depthWrite:false,side:THREE.DoubleSide});const geometry=new THREE.RingGeometry(.045,.07,20);
 for(let i=0;i<12;i++){const mesh=new THREE.Mesh(geometry,material);mesh.visible=false;mesh.renderOrder=50;group.add(mesh);markers.push(mesh);}
 let pendingHint=false;
 const reduce=matchMedia('(prefers-reduced-motion: reduce)');
 function clearHints(){remainingUntil=0;markers.forEach(m=>m.visible=false);}
 function cancel(){pendingHint=false;motion=null;focusIndex=null;onFocusChange(null);clearHints();}
 function focus(index){const world=getWorld(),surface=world.surfaces[index];if(!surface)return;clearHints();focusIndex=index;onFocusChange(index);world.root.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(surface.mesh),target=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3());
  const direction=camera.position.clone().sub(controls.target).normalize();const maxSize=Math.max(size.x,size.y,size.z,.3);
  const zoom=THREE.MathUtils.clamp(Math.min((camera.right-camera.left)/(maxSize*1.55),(camera.top-camera.bottom)/(maxSize*1.45)),1,2.8);
  motion={t:0,fromPosition:camera.position.clone(),fromTarget:controls.target.clone(),fromZoom:camera.zoom,toPosition:target.clone().addScaledVector(direction,8.5),toTarget:target,toZoom:zoom};
 }
 function hints(){clearHints();const world=getWorld(),surfaces=focusIndex===null?world.surfaces:[world.surfaces[focusIndex]];const candidates=[];world.root.updateMatrixWorld(true);
  for(const s of surfaces){const n=192;for(let y=0;y<n;y+=16)for(let x=0;x<n;x+=16){let mass=0,mx=0,my=0;for(let yy=y;yy<Math.min(y+16,n);yy++)for(let xx=x;xx<Math.min(x+16,n);xx++){const k=yy*n+xx,a=s.remaining[k]+(s.process?Math.max(0,s.wet[k]-(s.process.kind==='fabric'?.10:.035))*s.initial[k]:0);mass+=a;mx+=(xx+.5)*a;my+=(yy+.5)*a;}if(mass>.12){const point=new THREE.Vector3((mx/mass/n-.5)*s.width,(.5-my/mass/n)*s.height,.012).applyMatrix4(s.hitMesh.matrixWorld);const screen=point.clone().project(camera);if(Math.abs(screen.x)<.94&&Math.abs(screen.y)<.83)candidates.push({point,mass});}}}
  candidates.sort((a,b)=>b.mass-a.mass);const chosen=[];for(const p of candidates){if(chosen.every(c=>c.point.distanceTo(p.point)>.15))chosen.push(p);if(chosen.length===markers.length)break;}
  chosen.forEach((p,i)=>{markers[i].position.copy(p.point);markers[i].visible=true;});remainingUntil=performance.now()+4500;return chosen.length;
 }
 function showcase(position,target){clearHints();pendingHint=false;focusIndex=null;onFocusChange(null);motion={t:0,fromPosition:camera.position.clone(),fromTarget:controls.target.clone(),fromZoom:camera.zoom,toPosition:new THREE.Vector3(...position),toTarget:target.clone(),toZoom:1};}
 function nextResidue(){const world=getWorld();let best=null;for(let index=0;index<world.surfaces.length;index++){const s=world.surfaces[index];let dirt=0,water=0;for(let i=0;i<s.initial.length;i++){dirt+=s.remaining[i];if(s.process)water+=Math.max(0,s.wet[i]-(s.process.kind==='fabric'?.10:.035))*s.initial[i];}const mass=dirt+water;if(mass>.12&&(!best||mass>best.mass))best={index,mass,kind:water>dirt?'水痕':'污渍'};}if(best){focus(best.index);pendingHint=true;}return best;}
 function update(dt){if(motion){motion.t+=reduce.matches?1:dt/.55;const t=Math.min(1,motion.t),e=t*t*(3-2*t);camera.position.lerpVectors(motion.fromPosition,motion.toPosition,e);controls.target.lerpVectors(motion.fromTarget,motion.toTarget,e);camera.zoom=THREE.MathUtils.lerp(motion.fromZoom,motion.toZoom,e);camera.updateProjectionMatrix();controls.update();if(t===1){motion=null;if(pendingHint){pendingHint=false;hints();}}}if(remainingUntil){if(performance.now()>remainingUntil)clearHints();else for(const m of markers){m.quaternion.copy(camera.quaternion);m.scale.setScalar((reduce.matches?1:1+Math.sin(performance.now()*.009)*.13)/Math.sqrt(camera.zoom));}}}
 return {focus,hints,nextResidue,showcase,update,cancel,clearHints,get active(){return focusIndex;},get moving(){return !!motion;},get hintsVisible(){return markers.filter(m=>m.visible).length;},dispose(){geometry.dispose();material.dispose();scene.remove(group);}};
}
