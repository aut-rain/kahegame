import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

// Photo-based, hand-built meshes. Dimensions are visual proportions, not CAD measurements.
export const PRODUCT_DETAILS={
 fabric:{name:'Puzzi 8/1',reference:'assets/references/puzzi-8-1.png',thumbnail:'assets/references/puzzi-8-1-thumb.png',features:['透明双舱顶盖','灰色轮式机身','波纹喷抽软管','透明短手扒'],description:'沿着透明吸嘴，看见布面的变化。'},
 window:{name:'WV 2',reference:'assets/references/wv2.webp',thumbnail:'assets/references/wv2-thumb.png',features:['黄色宽幅刮头','白色弧面机身','烟灰色水箱','镂空握持结构'],description:'握住机身，让刮条沿玻璃缓缓滑过。'},
 steam:{name:'SC 4 Deluxe',reference:'assets/references/sc4-deluxe.webp',thumbnail:'assets/references/sc4-deluxe-thumb.png',features:['白色圆角主机','顶部水箱与黑色盖板','黄色细线饰边','长杆与织物地刷'],description:'主机、软管与清洁头，一起完成蒸汽清洁。'},
 outdoor:{name:'KHB Air',reference:'assets/references/khb-air-view.png',thumbnail:'assets/references/khb-air-thumb.png',features:['黑色圆筒枪身','黄色折叠握柄','旋转多孔喷嘴','握柄开关与接缝'],description:'小巧的枪身，让户外冲洗随手开始。'}
};
function kit(root){
 const mats={white:new THREE.MeshStandardMaterial({color:0xf4f5f4,roughness:.3}),grey:new THREE.MeshStandardMaterial({color:0x747678,roughness:.39}),light:new THREE.MeshStandardMaterial({color:0xc6cacb,roughness:.32,metalness:.13}),black:new THREE.MeshStandardMaterial({color:0x202224,roughness:.35}),rubber:new THREE.MeshStandardMaterial({color:0x121416,roughness:.8}),yellow:new THREE.MeshStandardMaterial({color:0xffdf00,roughness:.29}),silver:new THREE.MeshStandardMaterial({color:0x9ea4a7,roughness:.25,metalness:.8}),glass:new THREE.MeshPhysicalMaterial({color:0xc9d1d2,roughness:.12,metalness:.05,transparent:true,opacity:.31,depthWrite:false,side:THREE.DoubleSide,clearcoat:1}),smoke:new THREE.MeshPhysicalMaterial({color:0x4c5359,roughness:.19,transparent:true,opacity:.57,depthWrite:false,side:THREE.DoubleSide,clearcoat:1}),cloth:new THREE.MeshStandardMaterial({color:0xe5e4de,roughness:1})};
 function mesh(geometry,mat,pos=[0,0,0],parent=root,name=''){const m=new THREE.Mesh(geometry,typeof mat==='string'?mats[mat]:mat);m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;m.name=name;parent.add(m);return m;}
 function box(size,pos,mat,r=.04,parent=root,name=''){return mesh(new RoundedBoxGeometry(...size,3,Math.min(r,Math.min(...size)/2)),mat,pos,parent,name);}
 function cyl(r,length,pos,mat,axis='y',r2=r,parent=root){const m=mesh(new THREE.CylinderGeometry(r,r2,length,32),mat,pos,parent);if(axis==='x')m.rotation.z=Math.PI/2;if(axis==='z')m.rotation.x=Math.PI/2;return m;}
 function torus(r,t,pos,mat,axis='z',parent=root){const m=mesh(new THREE.TorusGeometry(r,t,8,40),mat,pos,parent);if(axis==='x')m.rotation.y=Math.PI/2;if(axis==='y')m.rotation.x=Math.PI/2;return m;}
 function outline(points,depth,pos,mat,bevel=.025,parent=root,holes=[]){const s=new THREE.Shape();const round=.16;for(let i=0;i<points.length;i++){const prev=points[(i+points.length-1)%points.length],p=points[i],next=points[(i+1)%points.length];const ax=p[0]+(prev[0]-p[0])*round,ay=p[1]+(prev[1]-p[1])*round,bx=p[0]+(next[0]-p[0])*round,by=p[1]+(next[1]-p[1])*round;if(i===0)s.moveTo(ax,ay);else s.lineTo(ax,ay);s.quadraticCurveTo(p[0],p[1],bx,by);}s.closePath();for(const hp of holes){const h=new THREE.Path();h.moveTo(...hp[0]);hp.slice(1).forEach(p=>h.lineTo(...p));h.closePath();s.holes.push(h);}const g=new THREE.ExtrudeGeometry(s,{depth,bevelEnabled:bevel>0,bevelSize:bevel,bevelThickness:bevel,bevelSegments:3,curveSegments:12,steps:1});g.translate(0,0,-depth/2);return mesh(g,mat,pos,parent);}
 function hose(points,r=.06,ribbed=true,parent=root){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const m=mesh(new THREE.TubeGeometry(curve,64,r,10,false),'rubber',[0,0,0],parent,'hose');if(ribbed){const count=Math.min(105,Math.ceil(curve.getLength()/.035));const geom=new THREE.TorusGeometry(r,.011,6,10);const ribs=new THREE.InstancedMesh(geom,mats.black,count),dummy=new THREE.Object3D();for(let i=0;i<count;i++){const t=(i+.5)/count;dummy.position.copy(curve.getPointAt(t));dummy.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),curve.getTangentAt(t));dummy.updateMatrix();ribs.setMatrixAt(i,dummy.matrix);}ribs.castShadow=true;parent.add(ribs);}return m;}
 function rod(a,b,r,mat,parent=root){const va=new THREE.Vector3(...a),vb=new THREE.Vector3(...b),d=vb.clone().sub(va);const m=cyl(r,d.length(),va.add(vb).multiplyScalar(.5).toArray(),mat,'y',r,parent);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return m;}
 function label(text,size,pos,parent=root,{sub='',yellow=true,rotate=0}={}){const c=document.createElement('canvas');c.width=512;c.height=192;const x=c.getContext('2d');x.fillStyle='#f5f5ef';x.fillRect(0,0,512,192);x.fillStyle='#161819';x.font='900 69px Arial';x.textAlign='center';x.fillText(text,256,85);if(yellow){x.fillStyle='#ffdc00';x.fillRect(36,102,440,20);}if(sub){x.fillStyle='#303335';x.font='30px Arial';x.fillText(sub,256,164);}const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;const m=mesh(new THREE.PlaneGeometry(...size),new THREE.MeshBasicMaterial({map}),pos,parent,'brand-label');m.rotation.y=rotate;m.castShadow=false;return m;}
 function screw(pos,axis='z',parent=root){cyl(.018,.007,pos,'silver',axis,.018,parent);const slit=box([.019,.004,.004],[pos[0],pos[1],pos[2]+.005],'black',.001,parent);if(axis!=='z')slit.visible=false;}
 return {root,mats,mesh,box,cyl,torus,outline,hose,rod,label,screw};
}
function wv2(root){
 const {box,outline,cyl,torus,label,screw}=kit(root);
 const shell=[[-.42,.13],[.36,.13],[.42,.24],[.39,.79],[.32,1.19],[.19,1.52],[.29,1.69],[-.22,1.69],[-.3,1.48],[-.25,1.12],[-.37,.67]];
 const grip=[[.055,.35],[.23,.35],[.29,.49],[.27,.95],[.19,1.18],[.09,1.20],[.035,1.03]];
 outline(shell,.35,[0,0,0],'white',.04,root,[grip]);
 box([.8,.12,.44],[-.01,.12,0],'white',.04);box([.79,.025,.44],[-.01,.059,0],'rubber',.012);
 outline([[-.45,.19],[.02,.18],[.09,.3],[.06,.93],[-.05,1.02],[-.39,.97],[-.45,.77]],.30,[0,0,.185],'smoke',.035);
 outline([[-.37,.23],[-.06,.23],[-.01,.37],[-.04,.86],[-.12,.94],[-.3,.92]],.025,[0,0,.18],'light',.02);
 box([.46,.045,.31],[-.18,1.0,.185],'black',.018);
 for(let i=0;i<3;i++)box([.14,.012,.014],[-.25,.36+i*.065,.381],'light',.005);
 outline([[-.84,1.92],[.84,1.92],[.81,1.7],[.44,1.64],[.21,1.46],[-.2,1.46],[-.43,1.63],[-.81,1.7]],.17,[0,0,0],'yellow',.035);
 outline([[-.39,1.84],[.39,1.84],[.16,1.57],[-.15,1.57]],.012,[0,0,.105],'yellow',.012);
 box([1.79,.10,.19],[0,1.97,-.01],'black',.012);box([1.79,.025,.026],[0,2.028,-.11],'rubber',.004,root,'contact-edge');
 for(let i=0;i<17;i++)box([.025,.035,.13],[-.79+i*.099,2.027,.015],'rubber',.005);
 [[-.77,1.74,.105],[.77,1.74,.105],[-.32,1.61,.105],[.32,1.61,.105],[0,1.81,.105],[.31,.3,.199],[.29,1.06,.201]].forEach(p=>screw(p));
 cyl(.037,.012,[.19,1.38,.2],'black','z');torus(.021,.002,[.19,1.382,.21],'light');box([.05,.027,.012],[.3,.245,.225],'black',.008);
 label('KÄRCHER',[.25,.095],[-.08,1.22,.212],root,{sub:'WV 2'});root.userData.contact=[0,2.03,-.12];return root;
}
function puzzi(root,{accessories=true}={}){
 const {box,cyl,torus,outline,hose,label}=kit(root);
 box([1.23,.22,1.62],[0,.26,0],'grey',.1);box([1.14,.89,1.36],[0,.8,-.02],'grey',.17);
 [-1,1].forEach(side=>{box([.075,.63,.16],[side*.553,.65,-.12],'grey',.035);box([.07,.34,.45],[side*.564,.46,-.4],'grey',.05);cyl(.25,.14,[side*.61,.29,-.47],'rubber','x');cyl(.175,.15,[side*.62,.29,-.47],'grey','x');cyl(.079,.16,[side*.63,.29,-.47],'black','x');for(let i=0;i<5;i++){const a=i*Math.PI*2/5;const spoke=box([.025,.12,.039],[side*.71,.29+Math.cos(a)*.105,-.47+Math.sin(a)*.105],'black',.008);spoke.rotation.x=-a;}box([.09,.09,.1],[side*.43,.20,.59],'black',.018);cyl(.105,.09,[side*.43,.116,.61],'rubber','x');cyl(.07,.10,[side*.435,.116,.61],'grey','x');});
 box([1.17,.08,1.4],[0,1.235,-.02],'black',.12);
 [[.39,.61],[-.32,.62]].forEach(([z,depth])=>{box([1.03,.10,depth],[0,1.30,z-.1],'black',.08);box([1.1,.22,depth+.04],[0,1.39,z-.1],'glass',.11);for(let j=-3;j<=3;j++)box([.009,.14,.014],[j*.125,1.40,z+depth/2-.065],'light',.003);});
 box([.44,.055,.41],[0,1.56,-.32],'glass',.025);
 outline([[-.38,0],[.38,0],[.35,.23],[.21,.27],[-.21,.27],[-.35,.23]],.12,[0,1.4,-.57],'black',.025,root,[[[-.22,.06],[-.2,.16],[.2,.16],[.22,.06]]]);
 [-.23,.23].forEach(x=>{box([.19,.075,.17],[x,1.43,-.63],'yellow',.025).rotation.x=-.2;});for(let i=0;i<5;i++)box([.02,.025,.27],[.575,.98+i*.045,-.39],'black',.006);
 label('KÄRCHER',[.43,.19],[.59,.99,.02],root,{sub:'Professional',rotate:Math.PI/2});label('KÄRCHER',[.39,.17],[.15,.98,.673],root,{sub:'Puzzi 8/1'});
 cyl(.12,.19,[-.3,1.07,.76],'black','z');torus(.122,.018,[-.3,1.07,.855],'black');cyl(.055,.12,[-.23,.78,.747],'yellow','z');cyl(.035,.05,[-.23,.78,.825],'light','z');root.userData.hosePort=[-.3,1.07,.855];
 if(accessories){hose([[-.3,1.07,.86],[-.82,.98,1.12],[-1.0,.35,1.0],[-.95,.11,.5],[-.72,.12,.3],[-.76,.27,1.25]],.067);hose([[-.23,.78,.81],[-.71,.71,1.12],[-.88,.21,.83],[-.69,.22,.42]],.014,false);const head=createExtractionHead();head.scale.setScalar(.92);head.rotation.x=-Math.PI/2;head.rotation.z=-.26;head.position.set(-.77,.15,1.02);root.add(head);}return root;
}
function sc4(root,{accessories=true}={}){
 const {box,cyl,torus,outline,hose,rod,label}=kit(root);
 box([1.18,.20,1.6],[0,.19,0],'black',.14);box([1.14,1.08,1.51],[0,.78,-.025],'white',.19);
 const top=new THREE.Group();top.position.set(0,1.30,0);top.rotation.x=-.095;root.add(top);box([1.13,.022,1.50],[0,0,0],'yellow',.12,top);box([1.11,.07,1.47],[0,.04,0],'black',.13,top);box([1.02,.28,.70],[0,.16,.315],'light',.10,top);box([.88,.035,.55],[0,.305,.32],'white',.08,top);cyl(.095,.043,[-.28,.339,.33],'light','y',.095,top);cyl(.115,.08,[.1,.35,.15],'black','y',.115,top);
 for(let i=0;i<18;i++){const a=i*Math.PI/9;box([.013,.07,.013],[.1+Math.cos(a)*.107,.35,.15+Math.sin(a)*.107],'rubber',.003,top);}box([.84,.05,.56],[0,.095,-.42],'black',.07,top);
 [-.46,.46].forEach(x=>{cyl(.11,.09,[x,.11,-.55],'rubber','x');cyl(.055,.10,[x,.11,.54],'black','x');});outline([[-.28,.29],[.28,.29],[.24,.69],[.16,.77],[-.17,.77],[-.26,.67]],.04,[0,0,.746],'black',.05);cyl(.09,.09,[0,.45,.8],'black','z');torus(.089,.018,[0,.45,.85],'rubber');label('KÄRCHER',[.35,.15],[0,1.13,.751],root,{sub:'SC 4 Deluxe'});root.userData.hosePort=[0,.45,.85];
 if(accessories){hose([[0,.45,.84],[-.28,.22,1.02],[-.92,.15,1.0],[-1.08,.43,.30],[-.42,1.75,-.17],[-.60,2.03,.03]],.045);const a=[-1.16,.25,1.19],b=[-.66,2.08,.03];rod(a,b,.047,'black');const av=new THREE.Vector3(...a),bv=new THREE.Vector3(...b);[.22,.64].forEach(t=>{const p=av.clone().lerp(bv,t);const joint=cyl(.065,.13,p.toArray(),'rubber');joint.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),bv.clone().sub(av).normalize());});rod(b,[-.47,2.09,-.07],.075,'black');const foot=new THREE.Group();foot.position.set(-1.16,.10,1.19);root.add(foot);box([1.10,.06,.48],[0,0,0],'cloth',.045,foot);box([1.03,.065,.43],[0,.055,0],'yellow',.025,foot);box([1.0,.065,.42],[0,.09,0],'black',.04,foot);box([.29,.12,.24],[0,.16,-.04],'black',.045,foot);cyl(.085,.21,[0,.21,0],'black','x',.085,foot);for(let i=0;i<24;i++)box([.017,.014,.025],[-.5+i*.043,-.017,.24],'light',.003,foot);}return root;
}
function khb(root){
 const {box,cyl,torus,outline,label}=kit(root);const barrel=new THREE.Group();barrel.position.set(0,1.18,0);root.add(barrel);
 cyl(.215,1.18,[.20,0,0],'black','x',.235,barrel);cyl(.215,.09,[.80,0,0],'black','x',.195,barrel);cyl(.255,.22,[-.43,0,0],'black','x',.218,barrel);torus(.245,.014,[-.535,0,0],'rubber','x',barrel);cyl(.195,.47,[-.79,0,0],'black','x',.195,barrel);
 for(let i=0;i<8;i++){const a=i*Math.PI/4;const ridge=box([.34,.028,.045],[-.79,Math.cos(a)*.19,Math.sin(a)*.19],'rubber',.009,barrel);ridge.rotation.x=a;}cyl(.199,.04,[-1.04,0,0],'rubber','x',.199,barrel);cyl(.145,.008,[-1.063,0,0],'black','x',.145,barrel);for(let i=0;i<5;i++){const a=i*Math.PI*2/5;cyl(.021,.01,[-1.071,Math.cos(a)*.076,Math.sin(a)*.076],'silver','x',.021,barrel);cyl(.012,.013,[-1.079,Math.cos(a)*.076,Math.sin(a)*.076],'rubber','x',.012,barrel);}cyl(.018,.012,[-1.081,0,0],'silver','x',.018,barrel);label('KÄRCHER',[.43,.17],[.3,1.2,.255],root,{yellow:true});
 const grip=new THREE.Group();grip.position.set(.41,1.06,0);root.add(grip);grip.name='folding-grip';outline([[-.39,.06],[.17,.06],[.20,-.15],[.34,-1.0],[.09,-1.07],[-.08,-.99],[-.20,-.38],[-.33,-.20]],.29,[0,0,0],'yellow',.045,grip);outline([[.11,.04],[.23,-.08],[.39,-.99],[.25,-1.035],[.07,-.27]],.36,[0,0,0],'black',.03,grip);box([.35,.018,.30],[.12,-.62,0],'yellow',.006,grip).rotation.z=.16;box([.34,.009,.306],[.12,-.63,0],'grey',.003,grip).rotation.z=.16;cyl(.048,.025,[-.12,-.30,.18],'black','z',.048,grip);torus(.048,.005,[-.12,-.30,.198],'rubber','z',grip);cyl(.07,.012,[-.01,-.025,.183],'black','z',.07,grip);for(let i=0;i<3;i++)box([.035,.008,.01],[-.21+i*.052,-.12,.18],'black',.003,grip);
 root.userData.foldPivot=grip;root.userData.contact=[-1.08,1.18,0];return root;
}
export function createProduct(id,options={}){const root=new THREE.Group();root.name='product-'+id;({fabric:puzzi,window:wv2,steam:sc4,outdoor:khb}[id])(root,options);root.userData.productId=id;return root;}
export function createExtractionHead(){const root=new THREE.Group();const {box,outline,cyl,torus}=kit(root);outline([[-.24,0],[.24,0],[.17,.18],[.08,.36],[-.08,.36],[-.17,.18]],.10,[0,0,.095],'glass',.015);box([.47,.026,.10],[0,.015,.08],'light',.007);box([.16,.18,.18],[0,.34,.19],'black',.04);box([.15,.29,.16],[0,.37,.37],'grey',.04).rotation.x=-.72;box([.11,.035,.06],[0,.26,.31],'yellow',.009);cyl(.074,.17,[0,.48,.48],'black','z');torus(.074,.012,[0,.48,.57],'rubber');root.userData.hoseEnd=[0,.48,.57];return root;}
export function createCleaningTool(id,mode){const root=new THREE.Group();root.name='active-tool-'+id;const {box,cyl,rod}=kit(root);
 if(id==='window'&&mode==='glass-wipe'){box([.49,.26,.06],[0,0,.04],'cloth',.035);box([.20,.11,.05],[0,0,.09],'yellow',.02);}
 else if(id==='window'&&mode!=='spray'){const m=createProduct('window');m.scale.setScalar(.36);m.position.set(0,-2.03*.36,.12*.36);root.add(m);}
 else if(id==='window'){box([.16,.25,.13],[.11,-.23,.29],'white',.04);box([.13,.07,.10],[.08,-.07,.25],'yellow',.015);box([.09,.05,.15],[.02,-.04,.16],'black',.012);}
 else if(id==='fabric'){root.add(createExtractionHead());root.userData.hoseEnd=[0,.48,.57];}
 else if(id==='steam'){if(mode==='wipe'){box([.52,.28,.065],[0,0,.04],'cloth',.035);box([.24,.12,.04],[0,0,.09],'grey',.02);}else{cyl(.037,.30,[.02,-.08,.19],'black','z');rod([.02,-.08,.31],[.12,-.27,.41],.05,'black');box([.07,.035,.07],[.08,-.17,.4],'yellow',.008);for(let i=0;i<8;i++){const a=i*Math.PI/4;cyl(.007,.042,[.02+Math.cos(a)*.035,-.08+Math.sin(a)*.035,.025],'rubber','z');}root.userData.hoseEnd=[.12,-.27,.42];}}
 else{const m=createProduct('outdoor');m.scale.setScalar(.42);m.rotation.y=-Math.PI/2;m.position.set(0,-1.18*.42,1.08*.42+.16);root.add(m);}root.visible=false;root.userData.mode=mode;return root;}
export function disposeModel(root){const geometries=new Set(),materials=new Set(),textures=new Set();root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>{materials.add(m);for(const v of Object.values(m))if(v?.isTexture)textures.add(v);});});geometries.forEach(g=>g.dispose());textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());}
