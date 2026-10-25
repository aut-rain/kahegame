import * as THREE from 'three';
// A reusable, deforming hose joins the parked extractor/steam unit to its active hand tool.
export function createLiveHose(){
 const group=new THREE.Group(),segments=38,rings=90;
 const material=new THREE.MeshStandardMaterial({color:0x242628,roughness:.7});
 const tube=new THREE.InstancedMesh(new THREE.CylinderGeometry(1,1,1,8),material,segments);
 const ribs=new THREE.InstancedMesh(new THREE.TorusGeometry(1,.18,5,8),material,rings);
 tube.instanceMatrix.setUsage(THREE.DynamicDrawUsage);ribs.instanceMatrix.setUsage(THREE.DynamicDrawUsage);tube.frustumCulled=false;ribs.frustumCulled=false;group.add(tube,ribs);group.visible=false;
 const dummy=new THREE.Object3D(),up=new THREE.Vector3(0,1,0),forward=new THREE.Vector3(0,0,1);
 function update(product,tool,id){if(!tool.visible||!tool.userData.hoseEnd||!product.userData.hosePort){group.visible=false;return;}group.visible=true;product.updateWorldMatrix(true,false);tool.updateWorldMatrix(true,false);
 const a=product.localToWorld(new THREE.Vector3(...product.userData.hosePort)),b=tool.localToWorld(new THREE.Vector3(...tool.userData.hoseEnd));const middle=a.clone().lerp(b,.47);middle.y=Math.max(.16,Math.min(a.y,b.y)-.5);middle.z=Math.max(a.z,b.z)+.8;
 const curve=new THREE.CatmullRomCurve3([a,a.clone().add(new THREE.Vector3(0,-.15,.3)),middle,b.clone().add(new THREE.Vector3(.12,.10,.75)),b]);const radius=id==='fabric'?.035:.022;
 for(let i=0;i<segments;i++){const p=curve.getPoint(i/segments),q=curve.getPoint((i+1)/segments),dir=q.clone().sub(p);dummy.position.copy(p).add(q).multiplyScalar(.5);dummy.quaternion.setFromUnitVectors(up,dir.clone().normalize());dummy.scale.set(radius,dir.length()*1.08,radius);dummy.updateMatrix();tube.setMatrixAt(i,dummy.matrix);}
 for(let i=0;i<rings;i++){const t=(i+.5)/rings;dummy.position.copy(curve.getPoint(t));dummy.quaternion.setFromUnitVectors(forward,curve.getTangent(t).normalize());dummy.scale.setScalar(radius*1.06);dummy.updateMatrix();ribs.setMatrixAt(i,dummy.matrix);}tube.instanceMatrix.needsUpdate=true;ribs.instanceMatrix.needsUpdate=true;
 }
 return {group,update,dispose(){tube.geometry.dispose();ribs.geometry.dispose();material.dispose();}};
}
