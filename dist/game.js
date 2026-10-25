(()=>{var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Th=0,nc=1,Ah=2;var ic=1,zs=2,Vn=3,Qn=0,$e=1,ze=2,ni=0,Fi=1,sc=2,rc=3,oc=4,Rh=5,pi=100,Ch=101,Ih=102,Ph=103,Lh=104,Dh=200,Uh=201,Nh=202,Fh=203,ko=204,zo=205,Oh=206,Bh=207,kh=208,zh=209,Hh=210,Vh=211,Gh=212,Wh=213,Xh=214,ga=0,_a=1,xa=2,Oi=3,ya=4,va=5,Ma=6,ba=7,ac=0,qh=1,Yh=2,ii=0,Zh=1,Jh=2,Kh=3,Hs=4,$h=5,jh=6,Qh=7;var lc=300,Ji=301,Ki=302,Sa=303,Ea=304,Qr=306,bs=1e3,fi=1001,Ho=1002,nn=1003,tu=1004;var to=1005;var hn=1006,wa=1007;var Mi=1008;var Dn=1009,cc=1010,hc=1011,Vs=1012,Ta=1013,bi=1014,Un=1015,Gs=1016,Aa=1017,Ra=1018,Ws=1020,uc=35902,dc=35899,fc=1021,pc=1022,En=1023,Ss=1026,Xs=1027,Ca=1028,Ia=1029,mc=1030,Pa=1031;var La=1033,eo=33776,no=33777,io=33778,so=33779,Da=35840,Ua=35841,Na=35842,Fa=35843,Oa=36196,Ba=37492,ka=37496,za=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,Ya=37815,Za=37816,Ja=37817,Ka=37818,$a=37819,ja=37820,Qa=37821,tl=36492,el=36494,nl=36495,il=36283,sl=36284,rl=36285,ol=36286;var Sr=2300,Vo=2301,Bo=2302,Wl=2400,Xl=2401,ql=2402;var eu=3200,nu=3201;var gc=0,iu=1,si="",ye="srgb",Bi="srgb-linear",Er="linear",pe="srgb";var Ui=7680;var Yl=519,su=512,ru=513,ou=514,_c=515,au=516,lu=517,cu=518,hu=519,Go=35044,al=35048;var xc="300 es",In=2e3,wr=2001;var On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wc=1234567,yr=Math.PI/180,Es=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function yc(i,t){return(i%t+t)%t}function Nd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fd(i,t,e){return i!==t?(e-i)/(t-i):0}function vr(i,t,e){return(1-e)*i+e*t}function Od(i,t,e,n){return vr(i,t,1-Math.exp(-e*n))}function Bd(i,t=1){return t-Math.abs(yc(i,t*2)-t)}function kd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Hd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Vd(i,t){return i+Math.random()*(t-i)}function Gd(i){return i*(.5-Math.random())}function Wd(i){i!==void 0&&(Wc=i);let t=Wc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xd(i){return i*yr}function qd(i){return i*Es}function Yd(i){return(i&i-1)===0&&i!==0}function Zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var je={DEG2RAD:yr,RAD2DEG:Es,generateUUID:Fn,clamp:te,euclideanModulo:yc,mapLinear:Nd,inverseLerp:Fd,lerp:vr,damp:Od,pingpong:Bd,smoothstep:kd,smootherstep:zd,randInt:Hd,randFloat:Vd,randFloatSpread:Gd,seededRandom:Wd,degToRad:Xd,radToDeg:qd,isPowerOfTwo:Yd,ceilPowerOfTwo:Zd,floorPowerOfTwo:Jd,setQuaternionFromProperEuler:Kd,normalize:fe,denormalize:Cn},at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=1-a,p=l*d+c*f+h*m+u*_,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let E=Math.sqrt(y),S=Math.atan2(E,p*M);g=Math.sin(g*S)/E,a=Math.sin(a*S)/E}let x=a*M;if(l=l*g+d*x,c=c*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Xc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_l=new C,Xc=new yn,Qt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],M=s[1],y=s[4],x=s[7],E=s[2],S=s[5],A=s[8];return r[0]=o*_+a*M+l*E,r[3]=o*g+a*y+l*S,r[6]=o*p+a*x+l*A,r[1]=c*_+h*M+u*E,r[4]=c*g+h*y+u*S,r[7]=c*p+h*x+u*A,r[2]=d*_+f*M+m*E,r[5]=d*g+f*y+m*S,r[8]=d*p+f*x+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xl.makeScale(t,e)),this}rotate(t){return this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},xl=new Qt;function vc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function uu(){let i=Tr("canvas");return i.style.display="block",i}var qc={};function ws(i){i in qc||(qc[i]=!0,console.warn(i))}function du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Yc=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zc=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $d(){let i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ws("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ws("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:t,whitePoint:n,transfer:Er,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Yc,fromXYZ:Zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}var ae=$d();function jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ss,Wo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ss===void 0&&(ss=Tr("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ss}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jd=0,Ts=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Fn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yl(s[o].image)):r.push(yl(s[o]))}else r=yl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qd=0,vl=new C,Je=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=fi,s=fi,r=hn,o=Mi,a=En,l=Dn,c=i.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Fn(),this.name="",this.source=new Ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bs:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bs:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=lc;Je.DEFAULT_ANISOTROPY=1;var Ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(f+1)/2,E=(p+1)/2,S=(h+d)/4,A=(u+_)/4,I=(m+g)/4;return y>x&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=A/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=I/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=A/r,s=I/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xo=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Je(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ts(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Xo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ar=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qo=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vn=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),co.subVectors(this.max,lr),rs.subVectors(t.a,lr),os.subVectors(t.b,lr),as.subVectors(t.c,lr),ai.subVectors(os,rs),li.subVectors(as,os),Ii.subVectors(rs,as);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ii.z,Ii.y,ai.z,0,-ai.x,li.z,0,-li.x,Ii.z,0,-Ii.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ii.y,Ii.x,0];return!Ml(e,rs,os,as,co)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,rs,os,as,co))?!1:(ho.crossVectors(ai,li),e=[ho.x,ho.y,ho.z],Ml(e,rs,os,as,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new C,new C,new C,new C,new C,new C,new C,new C],Tn=new C,lo=new vn,rs=new C,os=new C,as=new C,ai=new C,li=new C,Ii=new C,lr=new C,co=new C,ho=new C,Pi=new C;function Ml(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tf=new vn,cr=new C,bl=new C,kn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cr.subVectors(t,this.center);let e=cr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cr.copy(t.center).add(bl)),this.expandByPoint(cr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yn=new C,Sl=new C,uo=new C,ci=new C,El=new C,fo=new C,wl=new C,ti=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),uo.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Sl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(uo),a=ci.dot(this.direction),l=-ci.dot(uo),c=ci.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Sl).addScaledVector(uo,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){El.subVectors(e,t),fo.subVectors(n,t),wl.crossVectors(El,fo);let o=this.direction.dot(wl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);let l=a*this.direction.dot(fo.crossVectors(ci,fo));if(l<0)return null;let c=a*this.direction.dot(El.cross(ci));if(c<0||l+c>o)return null;let h=-a*ci.dot(wl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,_,g)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,m,_,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),r=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ef,t,nf)}lookAt(t,e,n){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),hi.crossVectors(n,ln),hi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),hi.crossVectors(n,ln)),hi.normalize(),po.crossVectors(ln,hi),s[0]=hi.x,s[4]=po.x,s[8]=ln.x,s[1]=hi.y,s[5]=po.y,s[9]=ln.y,s[2]=hi.z,s[6]=po.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],M=n[3],y=n[7],x=n[11],E=n[15],S=s[0],A=s[4],I=s[8],w=s[12],v=s[1],P=s[5],U=s[9],O=s[13],G=s[2],V=s[6],q=s[10],$=s[14],B=s[3],et=s[7],lt=s[11],St=s[15];return r[0]=o*S+a*v+l*G+c*B,r[4]=o*A+a*P+l*V+c*et,r[8]=o*I+a*U+l*q+c*lt,r[12]=o*w+a*O+l*$+c*St,r[1]=h*S+u*v+d*G+f*B,r[5]=h*A+u*P+d*V+f*et,r[9]=h*I+u*U+d*q+f*lt,r[13]=h*w+u*O+d*$+f*St,r[2]=m*S+_*v+g*G+p*B,r[6]=m*A+_*P+g*V+p*et,r[10]=m*I+_*U+g*q+p*lt,r[14]=m*w+_*O+g*$+p*St,r[3]=M*S+y*v+x*G+E*B,r[7]=M*A+y*P+x*V+E*et,r[11]=M*I+y*U+x*q+E*lt,r[15]=M*w+y*O+x*$+E*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+g*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],M=u*g*c-_*d*c+_*l*f-a*g*f-u*l*p+a*d*p,y=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,x=h*_*c-m*u*c+m*a*f-o*_*f-h*a*p+o*u*p,E=m*u*l-h*_*l-m*a*d+o*_*d+h*a*g-o*u*g,S=e*M+n*y+s*x+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/S;return t[0]=M*A,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*A,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*p+n*l*p)*A,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*A,t[4]=y*A,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*A,t[6]=(m*l*r-o*g*r-m*s*c+e*g*c+o*s*p-e*l*p)*A,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*A,t[8]=x*A,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*A,t[10]=(o*_*r-m*a*r+m*n*c-e*_*c-o*n*p+e*a*p)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=E*A,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*A,t[14]=(m*a*s-o*_*s-m*n*l+e*_*l+o*n*g-e*a*g)*A,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,M=l*c,y=l*h,x=l*u,E=n.x,S=n.y,A=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+x)*E,s[2]=(m-y)*E,s[3]=0,s[4]=(f-x)*S,s[5]=(1-(d+p))*S,s[6]=(g+M)*S,s[7]=0,s[8]=(m+y)*A,s[9]=(g-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ls.set(s[0],s[1],s[2]).length(),o=ls.set(s[4],s[5],s[6]).length(),a=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);let c=1/r,h=1/o,u=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=In,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===In)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===wr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=In,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===In)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===wr)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new C,An=new me,ef=new C(0,0,0),nf=new C(1,1,1),hi=new C,po=new C,ln=new C,Jc=new me,Kc=new yn,Pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kc.setFromEuler(this),this.setFromQuaternion(Kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sf=0,$c=new C,cs=new yn,Zn=new me,mo=new C,hr=new C,rf=new C,of=new yn,jc=new C(1,0,0),Qc=new C(0,1,0),th=new C(0,0,1),eh={type:"added"},af={type:"removed"},hs={type:"childadded",child:null},Tl={type:"childremoved",child:null},we=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new Pn,n=new yn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Qt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(th,t)}translateOnAxis(t,e){return $c.copy(t).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(th,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mo.copy(t):mo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(hr,mo,this.up):Zn.lookAt(mo,hr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Zn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eh),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(af),Tl.child=t,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eh),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};we.DEFAULT_UP=new C(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new C,Jn=new C,Al=new C,Kn=new C,us=new C,ds=new C,nh=new C,Rl=new C,Cl=new C,Il=new C,Pl=new Ce,Ll=new Ce,Dl=new Ce,$n=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Rn.subVectors(t,e),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Rn.subVectors(s,e),Jn.subVectors(n,e),Al.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(Jn),l=Rn.dot(Al),c=Jn.dot(Jn),h=Jn.dot(Al),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Pl.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Pl.fromBufferAttribute(t,e),Ll.fromBufferAttribute(t,n),Dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pl,r.x),o.addScaledVector(Ll,r.y),o.addScaledVector(Dl,r.z),o}static isFrontFacing(t,e,n,s){return Rn.subVectors(n,e),Jn.subVectors(t,e),Rn.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;us.subVectors(s,n),ds.subVectors(r,n),Rl.subVectors(t,n);let l=us.dot(Rl),c=ds.dot(Rl);if(l<=0&&c<=0)return e.copy(n);Cl.subVectors(t,s);let h=us.dot(Cl),u=ds.dot(Cl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(us,o);Il.subVectors(t,r);let f=us.dot(Il),m=ds.dot(Il);if(m>=0&&f<=m)return e.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ds,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return nh.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(nh,a);let p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},go={h:0,s:0,l:0};function Ul(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=yc(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ul(o,r,t+1/3),this.g=Ul(o,r,t),this.b=Ul(o,r,t-1/3)}return ae.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ae.workingToColorSpace(We.copy(this),t),Math.round(te(We.r*255,0,255))*65536+Math.round(te(We.g*255,0,255))*256+Math.round(te(We.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=ye){ae.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(go);let n=vr(ui.h,go.h,e),s=vr(ui.s,go.s,e),r=vr(ui.l,go.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new jt;jt.NAMES=fu;var lf=0,Mn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Fi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=zo,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ve=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ne=new C,_o=new at,cf=0,Ee=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_o.fromBufferAttribute(this,e),_o.applyMatrix3(t),this.setXY(e,_o.x,_o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Go&&(t.usage=this.usage),t}};var Rr=class extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var le=class extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}},hf=0,_n=new me,Nl=new we,fs=new C,cn=new vn,ur=new vn,ke=new C,ve=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vc(t)?Cr:Rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Nl.lookAt(t),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ur.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(cn.min,ur.min),cn.expandByPoint(ke),ke.addVectors(cn.max,ur.max),cn.expandByPoint(ke)):(cn.expandByPoint(ur.min),cn.expandByPoint(ur.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(t,c),ke.add(fs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new C,l[I]=new C;let c=new C,h=new C,u=new C,d=new at,f=new at,m=new at,_=new C,g=new C;function p(I,w,v){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[I].add(_),a[w].add(_),a[v].add(_),l[I].add(g),l[w].add(g),l[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let I=0,w=M.length;I<w;++I){let v=M[I],P=v.start,U=v.count;for(let O=P,G=P+U;O<G;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let y=new C,x=new C,E=new C,S=new C;function A(I){E.fromBufferAttribute(s,I),S.copy(E);let w=a[I];y.copy(w),y.sub(E.multiplyScalar(E.dot(w))).normalize(),x.crossVectors(S,w);let P=x.dot(l[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,P)}for(let I=0,w=M.length;I<w;++I){let v=M[I],P=v.start,U=v.count;for(let O=P,G=P+U;O<G;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ee(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ih=new me,Li=new ti,xo=new kn,sh=new C,yo=new C,vo=new C,Mo=new C,Fl=new C,bo=new C,rh=new C,So=new C,re=class extends we{constructor(t=new ve,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Fl.fromBufferAttribute(u,t),o?bo.addScaledVector(Fl,h):bo.addScaledVector(Fl.sub(e),h))}e.add(bo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(xo.containsPoint(Li.origin)===!1&&(Li.intersectSphere(xo,sh)===null||Li.origin.distanceToSquared(sh)>(t.far-t.near)**2))&&(ih.copy(r).invert(),Li.copy(t.ray).applyMatrix4(ih),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,E=y;x<E;x+=3){let S=a.getX(x),A=a.getX(x+1),I=a.getX(x+2);s=Eo(this,p,t,n,c,h,u,S,A,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);s=Eo(this,o,t,n,c,h,u,M,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),y=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,E=y;x<E;x+=3){let S=x,A=x+1,I=x+2;s=Eo(this,p,t,n,c,h,u,S,A,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let M=g,y=g+1,x=g+2;s=Eo(this,o,t,n,c,h,u,M,y,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function uf(i,t,e,n,s,r,o,a){let l;if(t.side===$e?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Qn,a),l===null)return null;So.copy(a),So.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(So);return c<e.near||c>e.far?null:{distance:c,point:So.clone(),object:i}}function Eo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,yo),i.getVertexPosition(l,vo),i.getVertexPosition(c,Mo);let h=uf(i,t,e,n,yo,vo,Mo,rh);if(h){let u=new C;$n.getBarycoord(rh,yo,vo,Mo,u),s&&(h.uv=$n.getInterpolatedAttribute(s,a,l,c,u,new at)),r&&(h.uv1=$n.getInterpolatedAttribute(r,a,l,c,u,new at)),o&&(h.normal=$n.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new C,materialIndex:0};$n.getNormal(yo,vo,Mo,d.normal),h.face=d,h.barycoord=u}return h}var mi=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(u,2));function m(_,g,p,M,y,x,E,S,A,I,w){let v=x/A,P=E/I,U=x/2,O=E/2,G=S/2,V=A+1,q=I+1,$=0,B=0,et=new C;for(let lt=0;lt<q;lt++){let St=lt*P-O;for(let Wt=0;Wt<V;Wt++){let Yt=Wt*v-U;et[_]=Yt*M,et[g]=St*y,et[p]=G,c.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[p]=S>0?1:-1,h.push(et.x,et.y,et.z),u.push(Wt/A),u.push(1-lt/I),$+=1}}for(let lt=0;lt<I;lt++)for(let St=0;St<A;St++){let Wt=d+St+V*lt,Yt=d+St+V*(lt+1),ie=d+(St+1)+V*(lt+1),Kt=d+(St+1)+V*lt;l.push(Wt,Yt,Kt),l.push(Yt,ie,Kt),B+=6}a.addGroup(f,B,w),f+=B,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let s in n)t[s]=n[s]}return t}function df(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var pu={clone:$i,merge:qe},ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ff,this.fragmentShader=pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=df(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ir=class extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},di=new C,oh=new at,ah=new at,Xe=class extends Ir{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,oh,ah),e.subVectors(ah,oh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ps=-90,ms=1,Yo=class extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new Xe(ps,ms,t,e);r.layers=this.layers,this.add(r);let o=new Xe(ps,ms,t,e);o.layers=this.layers,this.add(o);let a=new Xe(ps,ms,t,e);a.layers=this.layers,this.add(a);let l=new Xe(ps,ms,t,e);l.layers=this.layers,this.add(l);let c=new Xe(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Pr=class extends Je{constructor(t=[],e=Ji,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zo=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mi(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ni});r.uniforms.tEquirect.value=e;let o=new re(s,r),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=hn),new Yo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Se=class extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}},mf={type:"move"},Rs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ki=class extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Lr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Go,this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ze=new C,Cs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Cn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Cn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Cn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Cn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Is=class extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gs,dr=new C,_s=new C,xs=new C,ys=new at,fr=new at,mu=new me,wo=new C,pr=new C,To=new C,lh=new at,Ol=new at,ch=new at,Dr=class extends we{constructor(t=new Is){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lr(e,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new Cs(n,3,0,!1)),gs.setAttribute("uv",new Cs(n,2,3,!1))}this.geometry=gs,this.material=t,this.center=new at(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ao(wo.set(-.5,-.5,0),xs,o,_s,s,r),Ao(pr.set(.5,-.5,0),xs,o,_s,s,r),Ao(To.set(.5,.5,0),xs,o,_s,s,r),lh.set(0,0),Ol.set(1,0),ch.set(1,1);let a=t.ray.intersectTriangle(wo,pr,To,!1,dr);if(a===null&&(Ao(pr.set(-.5,.5,0),xs,o,_s,s,r),Ol.set(0,1),a=t.ray.intersectTriangle(wo,To,pr,!1,dr),a===null))return;let l=t.ray.origin.distanceTo(dr);l<t.near||l>t.far||e.push({distance:l,point:dr.clone(),uv:$n.getInterpolation(dr,wo,pr,To,lh,Ol,ch,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ao(i,t,e,n,s,r){ys.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(fr.x=r*ys.x-s*ys.y,fr.y=s*ys.x+r*ys.y):fr.copy(ys),i.copy(t),i.x+=fr.x,i.y+=fr.y,i.applyMatrix4(mu)}var Jo=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=nn,h=nn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ps=class extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vs=new me,hh=new me,Ro=[],uh=new vn,gf=new me,mr=new re,gr=new kn,zn=class extends re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ps(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),uh.copy(t.boundingBox).applyMatrix4(vs),this.boundingBox.union(uh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vs),gr.copy(t.boundingSphere).applyMatrix4(vs),this.boundingSphere.union(gr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(n),t.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,vs),hh.multiplyMatrices(n,vs),mr.matrixWorld=hh,mr.raycast(t,Ro);for(let o=0,a=Ro.length;o<a;o++){let l=Ro[o];l.instanceId=r,l.object=this,e.push(l)}Ro.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ps(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jo(new Float32Array(s*this.count),s,this.count,Ca,Un));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Bl=new C,_f=new C,xf=new Qt,xn=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Bl.subVectors(n,e).cross(_f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||xf.getNormalMatrix(t),s=this.coplanarPoint(Bl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Di=new kn,yf=new at(.5,.5),Co=new C,Ls=class{constructor(t=new xn,e=new xn,n=new xn,s=new xn,r=new xn,o=new xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],M=r[12],y=r[13],x=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,p-m,E-M).normalize(),s[1].setComponents(c+o,f+h,p+m,E+M).normalize(),s[2].setComponents(c+a,f+u,p+_,E+y).normalize(),s[3].setComponents(c-a,f-u,p-_,E-y).normalize(),n)s[4].setComponents(l,d,g,x).normalize(),s[5].setComponents(c-l,f-d,p-g,E-x).normalize();else if(s[4].setComponents(c-l,f-d,p-g,E-x).normalize(),e===In)s[5].setComponents(c+l,f+d,p+g,E+x).normalize();else if(e===wr)s[5].setComponents(l,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=yf.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ds=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ko=new C,$o=new C,dh=new me,_r=new ti,Io=new kn,kl=new C,fh=new C,jo=class extends we{constructor(t=new ve,e=new Ds){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ko.fromBufferAttribute(e,s-1),$o.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ko.distanceTo($o);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,t.ray.intersectsSphere(Io)===!1)return;dh.copy(s).invert(),_r.copy(t.ray).applyMatrix4(dh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=h.getX(_),M=h.getX(_+1),y=Po(this,t,_r,l,p,M,_);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=Po(this,t,_r,l,_,g,m-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=Po(this,t,_r,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=Po(this,t,_r,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Po(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ko.fromBufferAttribute(a,s),$o.fromBufferAttribute(a,r),e.distanceSqToSegment(Ko,$o,kl,fh)>n)return;kl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(kl);if(!(c<t.near||c>t.far))return{distance:c,point:fh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var ph=new C,mh=new C,Ur=class extends jo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ph.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ph.distanceTo(mh);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var gi=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},gh=new me,Zl=new ti,Lo=new kn,Do=new C,zi=class extends we{constructor(t=new ve,e=new gi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;gh.copy(s).invert(),Zl.copy(t.ray).applyMatrix4(gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=c.getX(m);Do.fromBufferAttribute(u,g),_h(Do,g,l,s,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)Do.fromBufferAttribute(u,m),_h(Do,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _h(i,t,e,n,s,r,o){let a=Zl.distanceSqToPoint(i);if(a<e){let l=new C;Zl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ke=class extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nr=class extends Je{constructor(t,e,n=bi,s,r,o,a=nn,l=nn,c,h=Ss,u=1){if(h!==Ss&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ts(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fr=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Or=class i extends ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new at;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},bn=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,_=[],g=n/2,p=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function M(){let x=new C,E=new C,S=0,A=(e-t)/n;for(let I=0;I<=r;I++){let w=[],v=I/r,P=v*(e-t)+t;for(let U=0;U<=s;U++){let O=U/s,G=O*l+a,V=Math.sin(G),q=Math.cos(G);E.x=P*V,E.y=-v*n+g,E.z=P*q,u.push(E.x,E.y,E.z),x.set(V,A,q).normalize(),d.push(x.x,x.y,x.z),f.push(O,1-v),w.push(m++)}_.push(w)}for(let I=0;I<s;I++)for(let w=0;w<r;w++){let v=_[w][I],P=_[w+1][I],U=_[w+1][I+1],O=_[w][I+1];(t>0||w!==0)&&(h.push(v,P,O),S+=3),(e>0||w!==r-1)&&(h.push(P,U,O),S+=3)}c.addGroup(p,S,0),p+=S}function y(x){let E=m,S=new at,A=new C,I=0,w=x===!0?t:e,v=x===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),m++;let P=m;for(let U=0;U<=s;U++){let G=U/s*l+a,V=Math.cos(G),q=Math.sin(G);A.x=w*q,A.y=g*v,A.z=w*V,u.push(A.x,A.y,A.z),d.push(0,v,0),S.x=V*.5+.5,S.y=q*.5*v+.5,f.push(S.x,S.y),m++}for(let U=0;U<s;U++){let O=E+U,G=P+U;x===!0?h.push(G,G+1,O):h.push(G+1,G,O),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],o=[],a=new C,l=new me;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Us=class extends un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Qo=class extends Us{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Uo=new C,zl=new bc,Hl=new bc,Vl=new bc,Hn=class extends un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Uo.subVectors(s[0],s[1]).add(s[0]),c=Uo);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),zl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,_,g),Hl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,_,g),Vl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(zl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Hl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(zl.calc(l),Hl.calc(l),Vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function xh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function vf(i,t){let e=1-i;return e*e*t}function Mf(i,t){return 2*(1-i)*i*t}function bf(i,t){return i*i*t}function Mr(i,t,e,n){return vf(i,t)+Mf(i,e)+bf(i,n)}function Sf(i,t){let e=1-i;return e*e*e*t}function Ef(i,t){let e=1-i;return 3*e*e*i*t}function wf(i,t){return 3*(1-i)*i*i*t}function Tf(i,t){return i*i*i*t}function br(i,t,e,n,s){return Sf(i,t)+Ef(i,e)+wf(i,n)+Tf(i,s)}var Br=class extends un{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(t,s.x,r.x,o.x,a.x),br(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ta=class extends un{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(br(t,s.x,r.x,o.x,a.x),br(t,s.y,r.y,o.y,a.y),br(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kr=class extends un{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ea=class extends un{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends un{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends un{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Mr(t,s.x,r.x,o.x),Mr(t,s.y,r.y,o.y),Mr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(xh(a,l.x,c.x,h.x,u.x),xh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},na=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:Hn,CubicBezierCurve:Br,CubicBezierCurve3:ta,EllipseCurve:Us,LineCurve:kr,LineCurve3:ea,QuadraticBezierCurve:zr,QuadraticBezierCurve3:Hr,SplineCurve:Vr}),ia=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new na[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new na[s.type]().fromJSON(s))}return this}},Hi=class extends ia{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new kr(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zr(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Br(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Us(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ns=class extends Hi{constructor(t){super(t),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Hi().fromJSON(s))}return this}};function Af(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Lf(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=i[d],m=i[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Gr(r,o,e,a,l,c,0),o}function gu(i,t,e,n,s){let r;if(s===Gf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=yh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=yh(o/n|0,i[o],i[o+1],r);return r&&Fs(r,r.next)&&(Xr(r),r=r.next),r}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fs(e,e.next)||Re(e.prev,e,e.next)===0)){if(Xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Of(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Cf(i,n,s,r):Rf(i)){t.push(l.i,i.i,c.i),Xr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=If(Vi(i),t),Gr(i,t,e,n,s,r,2)):o===2&&Pf(i,t,e,n,s,r):Gr(Vi(i),t,e,n,s,r,1);break}}}function Rf(i){let t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&xr(s,a,r,l,o,c,m.x,m.y)&&Re(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Cf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Re(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),_=Math.max(a,l,c),g=Math.max(h,u,d),p=Jl(f,m,t,e,n),M=Jl(_,g,t,e,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=M;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&xr(a,h,l,u,c,d,y.x,y.y)&&Re(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&xr(a,h,l,u,c,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==o&&xr(a,h,l,u,c,d,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&xr(a,h,l,u,c,d,x.x,x.y)&&Re(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function If(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Fs(n,s)&&xu(n,e,e.next,s)&&Wr(n,s)&&Wr(s,n)&&(t.push(n.i,e.i,s.i),Xr(e),Xr(e.next),e=i=s),e=e.next}while(e!==i);return Vi(e)}function Pf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zf(o,a)){let l=yu(o,a);o=Vi(o,o.next),l=Vi(l,l.next),Gr(o,t,e,n,s,r,0),Gr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Lf(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=gu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(kf(c))}s.sort(Df);for(let r=0;r<s.length;r++)e=Uf(s[r],e);return e}function Df(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Uf(i,t){let e=Nf(i,t);if(!e)return t;let n=yu(e,i);return Vi(n,n.next),Vi(e,e.next)}function Nf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Fs(i,e))return e;do{if(Fs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&_u(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Wr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Ff(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Ff(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function Of(i,t,e,n){let s=i;do s.z===0&&(s.z=Jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bf(s)}function Bf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function kf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _u(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function xr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&_u(i,t,e,n,s,r,o,a)}function zf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Hf(i,t)&&(Wr(i,t)&&Wr(t,i)&&Vf(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Fs(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fs(i,t){return i.x===t.x&&i.y===t.y}function xu(i,t,e,n){let s=Fo(Re(i,t,e)),r=Fo(Re(i,t,n)),o=Fo(Re(e,n,i)),a=Fo(Re(e,n,t));return!!(s!==r&&o!==a||s===0&&No(i,e,t)||r===0&&No(i,n,t)||o===0&&No(e,i,n)||a===0&&No(e,t,n))}function No(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Fo(i){return i>0?1:i<0?-1:0}function Hf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Wr(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function Vf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yu(i,t){let e=Kl(i.i,i.x,i.y),n=Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yh(i,t,e,n){let s=Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var $l=class{static triangulate(t,e,n=2){return Af(t,e,n)}},Ni=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];vh(t),Mh(n,t);let o=t.length;e.forEach(vh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Mh(n,e[l]);let a=$l.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function vh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var qr=class i extends ve{constructor(t=new Ns([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new le(s,3)),this.setAttribute("uv",new le(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Wf,y,x=!1,E,S,A,I;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,E=p.computeFrenetFrames(h,!1),S=new C,A=new C,I=new C),d||(g=0,f=0,m=0,_=0);let w=a.extractPoints(c),v=w.shape,P=w.holes;if(!Ni.isClockWise(v)){v=v.reverse();for(let ot=0,Q=P.length;ot<Q;ot++){let tt=P[ot];Ni.isClockWise(tt)&&(P[ot]=tt.reverse())}}function O(ot){let tt=10000000000000001e-36,j=ot[0];for(let gt=1;gt<=ot.length;gt++){let ht=gt%ot.length,mt=ot[ht],Vt=mt.x-j.x,Tt=mt.y-j.y,R=Vt*Vt+Tt*Tt,b=Math.max(Math.abs(mt.x),Math.abs(mt.y),Math.abs(j.x),Math.abs(j.y)),z=tt*b*b;if(R<=z){ot.splice(ht,1),gt--;continue}j=mt}}O(v),P.forEach(O);let G=P.length,V=v;for(let ot=0;ot<G;ot++){let Q=P[ot];v=v.concat(Q)}function q(ot,Q,tt){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(Q,tt)}let $=v.length;function B(ot,Q,tt){let j,gt,ht,mt=ot.x-Q.x,Vt=ot.y-Q.y,Tt=tt.x-ot.x,R=tt.y-ot.y,b=mt*mt+Vt*Vt,z=mt*R-Vt*Tt;if(Math.abs(z)>Number.EPSILON){let Y=Math.sqrt(b),K=Math.sqrt(Tt*Tt+R*R),Z=Q.x-Vt/Y,Rt=Q.y+mt/Y,dt=tt.x-R/K,Dt=tt.y+Tt/K,It=((dt-Z)*R-(Dt-Rt)*Tt)/(mt*R-Vt*Tt);j=Z+mt*It-ot.x,gt=Rt+Vt*It-ot.y;let ct=j*j+gt*gt;if(ct<=2)return new at(j,gt);ht=Math.sqrt(ct/2)}else{let Y=!1;mt>Number.EPSILON?Tt>Number.EPSILON&&(Y=!0):mt<-Number.EPSILON?Tt<-Number.EPSILON&&(Y=!0):Math.sign(Vt)===Math.sign(R)&&(Y=!0),Y?(j=-Vt,gt=mt,ht=Math.sqrt(b)):(j=mt,gt=Vt,ht=Math.sqrt(b/2))}return new at(j/ht,gt/ht)}let et=[];for(let ot=0,Q=V.length,tt=Q-1,j=ot+1;ot<Q;ot++,tt++,j++)tt===Q&&(tt=0),j===Q&&(j=0),et[ot]=B(V[ot],V[tt],V[j]);let lt=[],St,Wt=et.concat();for(let ot=0,Q=G;ot<Q;ot++){let tt=P[ot];St=[];for(let j=0,gt=tt.length,ht=gt-1,mt=j+1;j<gt;j++,ht++,mt++)ht===gt&&(ht=0),mt===gt&&(mt=0),St[j]=B(tt[j],tt[ht],tt[mt]);lt.push(St),Wt=Wt.concat(St)}let Yt;if(g===0)Yt=Ni.triangulateShape(V,P);else{let ot=[],Q=[];for(let tt=0;tt<g;tt++){let j=tt/g,gt=f*Math.cos(j*Math.PI/2),ht=m*Math.sin(j*Math.PI/2)+_;for(let mt=0,Vt=V.length;mt<Vt;mt++){let Tt=q(V[mt],et[mt],ht);Ut(Tt.x,Tt.y,-gt),j===0&&ot.push(Tt)}for(let mt=0,Vt=G;mt<Vt;mt++){let Tt=P[mt];St=lt[mt];let R=[];for(let b=0,z=Tt.length;b<z;b++){let Y=q(Tt[b],St[b],ht);Ut(Y.x,Y.y,-gt),j===0&&R.push(Y)}j===0&&Q.push(R)}}Yt=Ni.triangulateShape(ot,Q)}let ie=Yt.length,Kt=m+_;for(let ot=0;ot<$;ot++){let Q=d?q(v[ot],Wt[ot],Kt):v[ot];x?(A.copy(E.normals[0]).multiplyScalar(Q.x),S.copy(E.binormals[0]).multiplyScalar(Q.y),I.copy(y[0]).add(A).add(S),Ut(I.x,I.y,I.z)):Ut(Q.x,Q.y,0)}for(let ot=1;ot<=h;ot++)for(let Q=0;Q<$;Q++){let tt=d?q(v[Q],Wt[Q],Kt):v[Q];x?(A.copy(E.normals[ot]).multiplyScalar(tt.x),S.copy(E.binormals[ot]).multiplyScalar(tt.y),I.copy(y[ot]).add(A).add(S),Ut(I.x,I.y,I.z)):Ut(tt.x,tt.y,u/h*ot)}for(let ot=g-1;ot>=0;ot--){let Q=ot/g,tt=f*Math.cos(Q*Math.PI/2),j=m*Math.sin(Q*Math.PI/2)+_;for(let gt=0,ht=V.length;gt<ht;gt++){let mt=q(V[gt],et[gt],j);Ut(mt.x,mt.y,u+tt)}for(let gt=0,ht=P.length;gt<ht;gt++){let mt=P[gt];St=lt[gt];for(let Vt=0,Tt=mt.length;Vt<Tt;Vt++){let R=q(mt[Vt],St[Vt],j);x?Ut(R.x,R.y+y[h-1].y,y[h-1].x+tt):Ut(R.x,R.y,u+tt)}}}J(),it();function J(){let ot=s.length/3;if(d){let Q=0,tt=$*Q;for(let j=0;j<ie;j++){let gt=Yt[j];ft(gt[2]+tt,gt[1]+tt,gt[0]+tt)}Q=h+g*2,tt=$*Q;for(let j=0;j<ie;j++){let gt=Yt[j];ft(gt[0]+tt,gt[1]+tt,gt[2]+tt)}}else{for(let Q=0;Q<ie;Q++){let tt=Yt[Q];ft(tt[2],tt[1],tt[0])}for(let Q=0;Q<ie;Q++){let tt=Yt[Q];ft(tt[0]+$*h,tt[1]+$*h,tt[2]+$*h)}}n.addGroup(ot,s.length/3-ot,0)}function it(){let ot=s.length/3,Q=0;Et(V,Q),Q+=V.length;for(let tt=0,j=P.length;tt<j;tt++){let gt=P[tt];Et(gt,Q),Q+=gt.length}n.addGroup(ot,s.length/3-ot,1)}function Et(ot,Q){let tt=ot.length;for(;--tt>=0;){let j=tt,gt=tt-1;gt<0&&(gt=ot.length-1);for(let ht=0,mt=h+g*2;ht<mt;ht++){let Vt=$*ht,Tt=$*(ht+1),R=Q+j+Vt,b=Q+gt+Vt,z=Q+gt+Tt,Y=Q+j+Tt;Lt(R,b,z,Y)}}}function Ut(ot,Q,tt){l.push(ot),l.push(Q),l.push(tt)}function ft(ot,Q,tt){Bt(ot),Bt(Q),Bt(tt);let j=s.length/3,gt=M.generateTopUV(n,s,j-3,j-2,j-1);L(gt[0]),L(gt[1]),L(gt[2])}function Lt(ot,Q,tt,j){Bt(ot),Bt(Q),Bt(j),Bt(Q),Bt(tt),Bt(j);let gt=s.length/3,ht=M.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);L(ht[0]),L(ht[1]),L(ht[3]),L(ht[1]),L(ht[2]),L(ht[3])}function Bt(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function L(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xf(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new na[s.type]().fromJSON(s)),new i(n,t.options)}},Wf={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,l),new at(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new at(o,1-l),new at(c,1-u),new at(d,1-m),new at(_,1-p)]:[new at(a,1-l),new at(h,1-u),new at(f,1-m),new at(g,1-p)]}};function Xf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Sn=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let M=p*d-o;for(let y=0;y<c;y++){let x=y*u-r;m.push(x,-M,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let y=M+c*p,x=M+c*(p+1),E=M+1+c*(p+1),S=M+1+c*p;f.push(y,x,S),f.push(x,E,S)}this.setIndex(f),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Gi=class i extends ve{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/s,f=new C,m=new at;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let M=p+g,y=M,x=M+n+1,E=M+n+2,S=M+1;a.push(y,x,S),a.push(x,E,S)}}this.setIndex(a),this.setAttribute("position",new le(l,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Wi=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,d=new C,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let M=[],y=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){let S=E/e;u.x=-t*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+S*r)*Math.sin(o+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(S+x,1-y),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let y=h[p][M+1],x=h[p][M],E=h[p+1][M],S=h[p+1][M+1];(p!==0||o>0)&&f.push(y,x,S),(p!==n-1||l<Math.PI)&&f.push(x,E,S)}this.setIndex(f),this.setAttribute("position",new le(m,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var dn=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let _=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,M=(s+1)*f+m;o.push(_,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Xi=class i extends ve{constructor(t=new Hr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new at,h=new C,u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(f,2));function _(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),M(),p()}function g(y){h=t.getPointAt(y/e,h);let x=o.normals[y],E=o.binormals[y];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,I=Math.sin(A),w=-Math.cos(A);l.x=w*x.x+I*E.x,l.y=w*x.y+I*E.y,l.z=w*x.z+I*E.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let x=1;x<=s;x++){let E=(s+1)*(y-1)+(x-1),S=(s+1)*y+(x-1),A=(s+1)*y+x,I=(s+1)*(y-1)+x;m.push(E,S,I),m.push(S,A,I)}}function M(){for(let y=0;y<=e;y++)for(let x=0;x<=s;x++)c.x=y/e,c.y=x/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new na[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Yr=class extends Mn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new jt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var Ue=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Os=class extends Ue{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var sa=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ra=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Oo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oa=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xl:r=t,a=2*e-n;break;case ql:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xl:o=t,l=2*n-e;break;case ql:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,M=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*_+.5*m,x=f*g-f*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+M*o[c+E]+y*o[l+E]+x*o[u+E];return r}},aa=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},la=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Oo(e,this.TimeBufferType),this.values=Oo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Oo(t.times,Array),values:Oo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new la(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new oa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case Vo:e=this.InterpolantFactoryMethodLinear;break;case Bo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Vo;case this.InterpolantFactoryMethodSmooth:return Bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Bo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=e[u+m];if(_!==e[d+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Vo;var _i=class extends fn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Sr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};ca.prototype.ValueTypeName="color";var ha=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};ha.prototype.ValueTypeName="number";var ua=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)yn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Zr=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends fn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Sr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};da.prototype.ValueTypeName="vector";var fa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},vu=new fa,pa=class{constructor(t){this.manager=t!==void 0?t:vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Bs=class extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Yi=class extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Gl=new me,bh=new C,Sh=new C,jl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(bh),Sh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sh),e.updateMatrixWorld(),Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Zi=class extends Ir{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ql=class extends jl{constructor(){super(new Zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ei=class extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Jr=class extends Bs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ma=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Kr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Sc="\\[\\]\\.:\\/",Yf=new RegExp("["+Sc+"]","g"),Ec="[^"+Sc+"]",Zf="[^"+Sc.replace("\\.","")+"]",Jf=/((?:WC+[\/:])*)/.source.replace("WC",Ec),Kf=/(WCOD+)?/.source.replace("WCOD",Zf),$f=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ec),jf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ec),Qf=new RegExp("^"+Jf+Kf+$f+jf+"$"),tp=["material","materials","bones","map"],tc=class{constructor(t,e,n){let s=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yf,"")}static parseTrackName(t){let e=Qf.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);tp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=tc;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nx=new Float32Array(1);var Eh=new me,$r=class{constructor(t,e,n=0,s=1/0){this.ray=new ti(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Eh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eh),this}intersectObject(t,e=!0,n=[]){return ec(t,this,n,e),n.sort(wh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)ec(t[s],this,n,e);return n.sort(wh),n}};function wh(i,t){return i.distance-t.distance}function ec(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ec(r[o],t,e,!0)}}var ks=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var jr=class extends On{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function wc(i,t,e,n){let s=ep(n);switch(e){case fc:return i*t;case Ca:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case mc:return i*t*2/s.components*s.byteLength;case Pa:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case La:return i*t*4/s.components*s.byteLength;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case io:case so:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Fa:return Math.max(i,16)*Math.max(t,8)/4;case Da:case Na:return Math.max(i,8)*Math.max(t,8)/2;case Oa:case Ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case tl:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ep(i){switch(i){case Dn:case cc:return{byteLength:1,components:1};case Vs:case hc:case Gs:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case bi:case Ta:case Un:return{byteLength:4,components:1};case uc:case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Wu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function op(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Np=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$p=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,em=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,om=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,km=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$m=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ag=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ng=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ne={alphahash_fragment:ap,alphahash_pars_fragment:lp,alphamap_fragment:cp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:_p,beginnormal_vertex:xp,bsdfs:yp,iridescence_fragment:vp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:bp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:wp,color_fragment:Tp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Ip,cube_uv_reflection_fragment:Pp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Dp,displacementmap_vertex:Up,emissivemap_fragment:Np,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:Bp,envmap_fragment:kp,envmap_common_pars_fragment:zp,envmap_pars_fragment:Hp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:Qp,envmap_vertex:Gp,fog_vertex:Wp,fog_pars_vertex:Xp,fog_fragment:qp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Zp,lightmap_pars_fragment:Jp,lights_lambert_fragment:Kp,lights_lambert_pars_fragment:$p,lights_pars_begin:jp,lights_toon_fragment:tm,lights_toon_pars_fragment:em,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:sm,lights_physical_pars_fragment:rm,lights_fragment_begin:om,lights_fragment_maps:am,lights_fragment_end:lm,logdepthbuf_fragment:cm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:xm,morphinstance_vertex:ym,morphcolor_vertex:vm,morphnormal_vertex:Mm,morphtarget_pars_vertex:bm,morphtarget_vertex:Sm,normal_fragment_begin:Em,normal_fragment_maps:wm,normal_pars_fragment:Tm,normal_pars_vertex:Am,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Dm,opaque_fragment:Um,packing:Nm,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:km,roughnessmap_fragment:zm,roughnessmap_pars_fragment:Hm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Gm,shadowmap_vertex:Wm,shadowmask_pars_fragment:Xm,skinbase_vertex:qm,skinning_pars_vertex:Ym,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Km,specularmap_pars_fragment:$m,tonemapping_fragment:jm,tonemapping_pars_fragment:Qm,transmission_fragment:tg,transmission_pars_fragment:eg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:sg,worldpos_vertex:rg,background_vert:og,background_frag:ag,backgroundCube_vert:lg,backgroundCube_frag:cg,cube_vert:hg,cube_frag:ug,depth_vert:dg,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:_g,linedashed_vert:xg,linedashed_frag:yg,meshbasic_vert:vg,meshbasic_frag:Mg,meshlambert_vert:bg,meshlambert_frag:Sg,meshmatcap_vert:Eg,meshmatcap_frag:wg,meshnormal_vert:Tg,meshnormal_frag:Ag,meshphong_vert:Rg,meshphong_frag:Cg,meshphysical_vert:Ig,meshphysical_frag:Pg,meshtoon_vert:Lg,meshtoon_frag:Dg,points_vert:Ug,points_frag:Ng,shadow_vert:Fg,shadow_frag:Og,sprite_vert:Bg,sprite_frag:kg},bt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Gn={basic:{uniforms:qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:qe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:qe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:qe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:qe([bt.points,bt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:qe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:qe([bt.common,bt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:qe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:qe([bt.sprite,bt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distanceRGBA:{uniforms:qe([bt.common,bt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distanceRGBA_vert,fragmentShader:ne.distanceRGBA_frag},shadow:{uniforms:qe([bt.lights,bt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Gn.physical={uniforms:qe([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var ll={r:0,b:0,g:0},ji=new Pn,zg=new me;function Hg(i,t,e,n,s,r,o){let a=new jt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,E=m(y);E===null?p(a,l):E&&E.isColor&&(p(E,1),x=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){let E=m(x);E&&(E.isCubeTexture||E.mapping===Qr)?(h===void 0&&(h=new re(new mi(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:$i(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ji.copy(x.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zg.makeRotationFromEuler(ji)),h.material.toneMapped=ae.getTransfer(E.colorSpace)!==pe,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new re(new Sn(2,2),new Ln({name:"BackgroundMaterial",uniforms:$i(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ae.getTransfer(E.colorSpace)!==pe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(ll,Mc(i)),n.buffers.color.setClear(ll.r,ll.g,ll.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g,dispose:M}}function Vg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(v,P,U,O,G){let V=!1,q=u(O,U,P);r!==q&&(r=q,c(r.object)),V=f(v,O,U,G),V&&m(v,O,U,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(v,P,U,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,P,U){let O=U.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let V=G[P.id];V===void 0&&(V={},G[P.id]=V);let q=V[O];return q===void 0&&(q=d(l()),V[O]=q),q}function d(v){let P=[],U=[],O=[];for(let G=0;G<e;G++)P[G]=0,U[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:O,object:v,attributes:{},index:null}}function f(v,P,U,O){let G=r.attributes,V=P.attributes,q=0,$=U.getAttributes();for(let B in $)if($[B].location>=0){let lt=G[B],St=V[B];if(St===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function m(v,P,U,O){let G={},V=P.attributes,q=0,$=U.getAttributes();for(let B in $)if($[B].location>=0){let lt=V[B];lt===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor));let St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),G[B]=St,q++}r.attributes=G,r.attributesNum=q,r.index=O}function _(){let v=r.newAttributes;for(let P=0,U=v.length;P<U;P++)v[P]=0}function g(v){p(v,0)}function p(v,P){let U=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;U[v]=1,O[v]===0&&(i.enableVertexAttribArray(v),O[v]=1),G[v]!==P&&(i.vertexAttribDivisor(v,P),G[v]=P)}function M(){let v=r.newAttributes,P=r.enabledAttributes;for(let U=0,O=P.length;U<O;U++)P[U]!==v[U]&&(i.disableVertexAttribArray(U),P[U]=0)}function y(v,P,U,O,G,V,q){q===!0?i.vertexAttribIPointer(v,P,U,G,V):i.vertexAttribPointer(v,P,U,O,G,V)}function x(v,P,U,O){_();let G=O.attributes,V=U.getAttributes(),q=P.defaultAttributeValues;for(let $ in V){let B=V[$];if(B.location>=0){let et=G[$];if(et===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let lt=et.normalized,St=et.itemSize,Wt=t.get(et);if(Wt===void 0)continue;let Yt=Wt.buffer,ie=Wt.type,Kt=Wt.bytesPerElement,J=ie===i.INT||ie===i.UNSIGNED_INT||et.gpuType===Ta;if(et.isInterleavedBufferAttribute){let it=et.data,Et=it.stride,Ut=et.offset;if(it.isInstancedInterleavedBuffer){for(let ft=0;ft<B.locationSize;ft++)p(B.location+ft,it.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ft=0;ft<B.locationSize;ft++)g(B.location+ft);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let ft=0;ft<B.locationSize;ft++)y(B.location+ft,St/B.locationSize,ie,lt,Et*Kt,(Ut+St/B.locationSize*ft)*Kt,J)}else{if(et.isInstancedBufferAttribute){for(let it=0;it<B.locationSize;it++)p(B.location+it,et.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let it=0;it<B.locationSize;it++)g(B.location+it);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let it=0;it<B.locationSize;it++)y(B.location+it,St/B.locationSize,ie,lt,St*Kt,St/B.locationSize*it*Kt,J)}}else if(q!==void 0){let lt=q[$];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(B.location,lt);break;case 3:i.vertexAttrib3fv(B.location,lt);break;case 4:i.vertexAttrib4fv(B.location,lt);break;default:i.vertexAttrib1fv(B.location,lt)}}}}M()}function E(){I();for(let v in n){let P=n[v];for(let U in P){let O=P[U];for(let G in O)h(O[G].object),delete O[G];delete P[U]}delete n[v]}}function S(v){if(n[v.id]===void 0)return;let P=n[v.id];for(let U in P){let O=P[U];for(let G in O)h(O[G].object),delete O[G];delete P[U]}delete n[v.id]}function A(v){for(let P in n){let U=n[P];if(U[v.id]===void 0)continue;let O=U[v.id];for(let G in O)h(O[G].object),delete O[G];delete U[v.id]}}function I(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function Gg(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==En&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let I=A===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:E,maxSamples:S}}function Xg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new xn,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,y=M*4,x=p.clippingState||null;l.value=x,x=h(m,d,y,f);for(let E=0;E!==y;++E)x[E]=e[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function qg(i){let t=new WeakMap;function e(o,a){return a===Sa?o.mapping=Ji:a===Ea&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sa||a===Ea)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Zo(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ys=4,Mu=[.125,.215,.35,.446,.526,.582],es=20,Tc=new Zi,bu=new jt,Ac=null,Rc=0,Cc=0,Ic=!1,ts=(1+Math.sqrt(5))/2,qs=1/ts,Su=[new C(-ts,qs,0),new C(ts,qs,0),new C(-qs,0,ts),new C(qs,0,ts),new C(0,ts,-qs),new C(0,ts,qs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Yg=new C,ul=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=Yg}=r;Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ac,Rc,Cc),this._renderer.xr.enabled=Ic,t.scissorTest=!1,cl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ac=this._renderer.getRenderTarget(),Rc=this._renderer.getActiveCubeFace(),Cc=this._renderer.getActiveMipmapLevel(),Ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Gs,format:En,colorSpace:Bi,depthBuffer:!1},s=Eu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Jg(r,t,e)}return s}_compileMaterial(t){let e=new re(this._lodPlanes[0],t);this._renderer.compile(e,Tc)}_sceneToCubeUV(t,e,n,s,r){let l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(bu),u.toneMapping=ii,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Ve({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new re(new mi,_),p=!1,M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(bu),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let E=this._cubeSize;cl(s,x*E,y>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ji||t.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;cl(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Tc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Su[(s-r-1)%Su.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new re(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*es-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):es;g>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${es}`);let p=[],M=0;for(let A=0;A<es;++A){let I=A/_,w=Math.exp(-I*I/2);p.push(w),A===0?M+=w:A<g&&(M+=2*w)}for(let A=0;A<p.length;A++)p[A]=p[A]/M;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let x=this._sizeLods[s],E=3*x*(s>y-Ys?s-y+Ys:0),S=4*(this._cubeSize-x);cl(e,E,S,3*x,2*x),l.setRenderTarget(e),l.render(u,Tc)}};function Zg(i){let t=[],e=[],n=[],s=i,r=i-Ys+1+Mu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ys?l=Mu[o-i+Ys-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*f),y=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let S=0;S<f;S++){let A=S%3*2/3-1,I=S>2?0:-1,w=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];M.set(w,_*m*S),y.set(d,g*m*S);let v=[S,S,S,S,S,S];x.set(v,p*m*S)}let E=new ve;E.setAttribute("position",new Ee(M,_)),E.setAttribute("uv",new Ee(y,g)),E.setAttribute("faceIndex",new Ee(x,p)),t.push(E),s>Ys&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Eu(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=Qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cl(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Jg(i,t,e){let n=new Float32Array(es),s=new C(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function wu(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Tu(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Sa||l===Ea,h=l===Ji||l===Ki;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ul(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new ul(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $g(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jg(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let y=0,x=M.length;y<x;y+=3){let E=M[y+0],S=M[y+1],A=M[y+2];d.push(E,S,S,A,A,E)}}else if(m!==void 0){let M=m.array;_=m.version;for(let y=0,x=M.length/3-1;y<x;y+=3){let E=y+0,S=y+1,A=y+2;d.push(E,S,S,A,A,E)}}else return;let g=new(vc(d)?Cr:Rr)(d,1);g.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Qg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function t0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function e0(i,t,e){let n=new WeakMap,s=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let S=new Float32Array(x*E*4*u),A=new Ar(S,x,E,u);A.type=Un,A.needsUpdate=!0;let I=y*4;for(let v=0;v<u;v++){let P=g[v],U=p[v],O=M[v],G=x*E*4*v;for(let V=0;V<P.count;V++){let q=V*I;f===!0&&(s.fromBufferAttribute(P,V),S[G+q+0]=s.x,S[G+q+1]=s.y,S[G+q+2]=s.z,S[G+q+3]=0),m===!0&&(s.fromBufferAttribute(U,V),S[G+q+4]=s.x,S[G+q+5]=s.y,S[G+q+6]=s.z,S[G+q+7]=0),_===!0&&(s.fromBufferAttribute(O,V),S[G+q+8]=s.x,S[G+q+9]=s.y,S[G+q+10]=s.z,S[G+q+11]=O.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new at(x,E)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function n0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var Xu=new Je,Au=new Nr(1,1),qu=new Ar,Yu=new qo,Zu=new Pr,Ru=[],Cu=[],Iu=new Float32Array(16),Pu=new Float32Array(9),Lu=new Float32Array(4);function Ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function dl(i,t){let e=Cu[t];e===void 0&&(e=new Int32Array(t),Cu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function r0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function o0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function a0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Lu.set(n),i.uniformMatrix2fv(this.addr,!1,Lu),Oe(e,n)}}function l0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Pu.set(n),i.uniformMatrix3fv(this.addr,!1,Pu),Oe(e,n)}}function c0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Iu.set(n),i.uniformMatrix4fv(this.addr,!1,Iu),Oe(e,n)}}function h0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function d0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function p0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function g0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function _0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function x0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Au.compareFunction=_c,r=Au):r=Xu,e.setTexture2D(t||r,s)}function y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yu,s)}function v0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Zu,s)}function M0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function b0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return M0}}function S0(i,t){i.uniform1fv(this.addr,t)}function E0(i,t){let e=Ks(t,this.size,2);i.uniform2fv(this.addr,e)}function w0(i,t){let e=Ks(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){let e=Ks(t,this.size,4);i.uniform4fv(this.addr,e)}function A0(i,t){let e=Ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function R0(i,t){let e=Ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C0(i,t){let e=Ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function I0(i,t){i.uniform1iv(this.addr,t)}function P0(i,t){i.uniform2iv(this.addr,t)}function L0(i,t){i.uniform3iv(this.addr,t)}function D0(i,t){i.uniform4iv(this.addr,t)}function U0(i,t){i.uniform1uiv(this.addr,t)}function N0(i,t){i.uniform2uiv(this.addr,t)}function F0(i,t){i.uniform3uiv(this.addr,t)}function O0(i,t){i.uniform4uiv(this.addr,t)}function B0(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xu,r[o])}function k0(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yu,r[o])}function z0(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Zu,r[o])}function H0(i,t,e){let n=this.cache,s=t.length,r=dl(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qu,r[o])}function V0(i){switch(i){case 5126:return S0;case 35664:return E0;case 35665:return w0;case 35666:return T0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return I0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return D0;case 5125:return U0;case 36294:return N0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return H0}}var Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=b0(e.type)}},Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V0(e.type)}},Uc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Pc=/(\w+)(\])?(\[|\.)?/g;function Du(i,t){i.seq.push(t),i.map[t.id]=t}function G0(i,t,e){let n=i.name,s=n.length;for(Pc.lastIndex=0;;){let r=Pc.exec(n),o=Pc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Du(e,c===void 0?new Lc(a,i,t):new Dc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Uc(a),Du(e,u)),e=u}}}var Zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);G0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Uu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var W0=37297,X0=0;function q0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Nu=new Qt;function Y0(i){ae._getMatrix(Nu,ae.workingColorSpace,i);let t=`mat3( ${Nu.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Er:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Fu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+q0(i.getShaderSource(t),a)}else return r}function Z0(i,t){let e=Y0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function J0(i,t){let e;switch(t){case Zh:e="Linear";break;case Jh:e="Reinhard";break;case Kh:e="Cineon";break;case Hs:e="ACESFilmic";break;case jh:e="AgX";break;case Qh:e="Neutral";break;case $h:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hl=new C;function K0(){ae.getLuminanceCoefficients(hl);let i=hl.x.toFixed(4),t=hl.y.toFixed(4),e=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function j0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ro(i){return i!==""}function Ou(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var t_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(i){return i.replace(t_,n_)}var e_=new Map;function n_(i,t){let e=ne[t];if(e===void 0){let n=e_.get(t);if(n!==void 0)e=ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}var i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ku(i){return i.replace(i_,s_)}function s_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function r_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ic?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zs?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function o_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Ki:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function l_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ac:t="ENVMAP_BLENDING_MULTIPLY";break;case qh:t="ENVMAP_BLENDING_MIX";break;case Yh:t="ENVMAP_BLENDING_ADD";break}return t}function c_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function h_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=r_(e),c=o_(e),h=a_(e),u=l_(e),d=c_(e),f=$0(e),m=j0(r),_=s.createProgram(),g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(ro).join(`
`),p.length>0&&(p+=`
`)):(g=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),p=[zu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?ne.tonemapping_pars_fragment:"",e.toneMapping!==ii?J0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Z0("linearToOutputTexel",e.outputColorSpace),K0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=Nc(o),o=Ou(o,e),o=Bu(o,e),a=Nc(a),a=Ou(a,e),a=Bu(a,e),o=ku(o),a=ku(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=M+g+o,x=M+p+a,E=Uu(s,s.VERTEX_SHADER,y),S=Uu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,S),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",O=s.getShaderInfoLog(E)||"",G=s.getShaderInfoLog(S)||"",V=U.trim(),q=O.trim(),$=G.trim(),B=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,S);else{let lt=Fu(s,E,"vertex"),St=Fu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+lt+`
`+St)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(q===""||$==="")&&(et=!1);et&&(P.diagnostics={runnable:B,programLog:V,vertexShader:{log:q,prefix:g},fragmentShader:{log:$,prefix:p}})}s.deleteShader(E),s.deleteShader(S),I=new Zs(s,_),w=Q0(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,W0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=X0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}var u_=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oc(t),e.set(t,n)),n}},Oc=class{constructor(t){this.id=u_++,this.code=t,this.usedTimes=0}};function d_(i,t,e,n,s,r,o){let a=new As,l=new Fc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,v,P,U,O){let G=U.fog,V=O.geometry,q=w.isMeshStandardMaterial?U.environment:null,$=(w.isMeshStandardMaterial?e:t).get(w.envMap||q),B=$&&$.mapping===Qr?$.image.height:null,et=m[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,St=lt!==void 0?lt.length:0,Wt=0;V.morphAttributes.position!==void 0&&(Wt=1),V.morphAttributes.normal!==void 0&&(Wt=2),V.morphAttributes.color!==void 0&&(Wt=3);let Yt,ie,Kt,J;if(et){let oe=Gn[et];Yt=oe.vertexShader,ie=oe.fragmentShader}else Yt=w.vertexShader,ie=w.fragmentShader,l.update(w),Kt=l.getVertexShaderID(w),J=l.getFragmentShaderID(w);let it=i.getRenderTarget(),Et=i.state.buffers.depth.getReversed(),Ut=O.isInstancedMesh===!0,ft=O.isBatchedMesh===!0,Lt=!!w.map,Bt=!!w.matcap,L=!!$,ot=!!w.aoMap,Q=!!w.lightMap,tt=!!w.bumpMap,j=!!w.normalMap,gt=!!w.displacementMap,ht=!!w.emissiveMap,mt=!!w.metalnessMap,Vt=!!w.roughnessMap,Tt=w.anisotropy>0,R=w.clearcoat>0,b=w.dispersion>0,z=w.iridescence>0,Y=w.sheen>0,K=w.transmission>0,Z=Tt&&!!w.anisotropyMap,Rt=R&&!!w.clearcoatMap,dt=R&&!!w.clearcoatNormalMap,Dt=R&&!!w.clearcoatRoughnessMap,It=z&&!!w.iridescenceMap,ct=z&&!!w.iridescenceThicknessMap,Mt=Y&&!!w.sheenColorMap,kt=Y&&!!w.sheenRoughnessMap,Nt=!!w.specularMap,yt=!!w.specularColorMap,$t=!!w.specularIntensityMap,F=K&&!!w.transmissionMap,pt=K&&!!w.thicknessMap,xt=!!w.gradientMap,At=!!w.alphaMap,st=w.alphaTest>0,nt=!!w.alphaHash,Pt=!!w.extensions,Zt=ii;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let ge={shaderID:et,shaderType:w.type,shaderName:w.name,vertexShader:Yt,fragmentShader:ie,defines:w.defines,customVertexShaderID:Kt,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ft,batchingColor:ft&&O._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&O.instanceColor!==null,instancingMorph:Ut&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Bi,alphaToCoverage:!!w.alphaToCoverage,map:Lt,matcap:Bt,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:B,aoMap:ot,lightMap:Q,bumpMap:tt,normalMap:j,displacementMap:d&&gt,emissiveMap:ht,normalMapObjectSpace:j&&w.normalMapType===iu,normalMapTangentSpace:j&&w.normalMapType===gc,metalnessMap:mt,roughnessMap:Vt,anisotropy:Tt,anisotropyMap:Z,clearcoat:R,clearcoatMap:Rt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Dt,dispersion:b,iridescence:z,iridescenceMap:It,iridescenceThicknessMap:ct,sheen:Y,sheenColorMap:Mt,sheenRoughnessMap:kt,specularMap:Nt,specularColorMap:yt,specularIntensityMap:$t,transmission:K,transmissionMap:F,thicknessMap:pt,gradientMap:xt,opaque:w.transparent===!1&&w.blending===Fi&&w.alphaToCoverage===!1,alphaMap:At,alphaTest:st,alphaHash:nt,combine:w.combine,mapUv:Lt&&_(w.map.channel),aoMapUv:ot&&_(w.aoMap.channel),lightMapUv:Q&&_(w.lightMap.channel),bumpMapUv:tt&&_(w.bumpMap.channel),normalMapUv:j&&_(w.normalMap.channel),displacementMapUv:gt&&_(w.displacementMap.channel),emissiveMapUv:ht&&_(w.emissiveMap.channel),metalnessMapUv:mt&&_(w.metalnessMap.channel),roughnessMapUv:Vt&&_(w.roughnessMap.channel),anisotropyMapUv:Z&&_(w.anisotropyMap.channel),clearcoatMapUv:Rt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(w.sheenRoughnessMap.channel),specularMapUv:Nt&&_(w.specularMap.channel),specularColorMapUv:yt&&_(w.specularColorMap.channel),specularIntensityMapUv:$t&&_(w.specularIntensityMap.channel),transmissionMapUv:F&&_(w.transmissionMap.channel),thicknessMapUv:pt&&_(w.thicknessMap.channel),alphaMapUv:At&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(j||Tt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Lt||At),fog:!!G,useFog:w.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Et,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Wt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Lt&&w.map.isVideoTexture===!0&&ae.getTransfer(w.map.colorSpace)===pe,decodeVideoTextureEmissive:ht&&w.emissiveMap.isVideoTexture===!0&&ae.getTransfer(w.emissiveMap.colorSpace)===pe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ze,flipSided:w.side===$e,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&w.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(w){let v=[];if(w.shaderID?v.push(w.shaderID):(v.push(w.customVertexShaderID),v.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)v.push(P),v.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(M(v,w),y(v,w),v.push(i.outputColorSpace)),v.push(w.customProgramCacheKey),v.join()}function M(w,v){w.push(v.precision),w.push(v.outputColorSpace),w.push(v.envMapMode),w.push(v.envMapCubeUVHeight),w.push(v.mapUv),w.push(v.alphaMapUv),w.push(v.lightMapUv),w.push(v.aoMapUv),w.push(v.bumpMapUv),w.push(v.normalMapUv),w.push(v.displacementMapUv),w.push(v.emissiveMapUv),w.push(v.metalnessMapUv),w.push(v.roughnessMapUv),w.push(v.anisotropyMapUv),w.push(v.clearcoatMapUv),w.push(v.clearcoatNormalMapUv),w.push(v.clearcoatRoughnessMapUv),w.push(v.iridescenceMapUv),w.push(v.iridescenceThicknessMapUv),w.push(v.sheenColorMapUv),w.push(v.sheenRoughnessMapUv),w.push(v.specularMapUv),w.push(v.specularColorMapUv),w.push(v.specularIntensityMapUv),w.push(v.transmissionMapUv),w.push(v.thicknessMapUv),w.push(v.combine),w.push(v.fogExp2),w.push(v.sizeAttenuation),w.push(v.morphTargetsCount),w.push(v.morphAttributeCount),w.push(v.numDirLights),w.push(v.numPointLights),w.push(v.numSpotLights),w.push(v.numSpotLightMaps),w.push(v.numHemiLights),w.push(v.numRectAreaLights),w.push(v.numDirLightShadows),w.push(v.numPointLightShadows),w.push(v.numSpotLightShadows),w.push(v.numSpotLightShadowsWithMaps),w.push(v.numLightProbes),w.push(v.shadowMapType),w.push(v.toneMapping),w.push(v.numClippingPlanes),w.push(v.numClipIntersection),w.push(v.depthPacking)}function y(w,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){let v=m[w.type],P;if(v){let U=Gn[v];P=pu.clone(U.uniforms)}else P=w.uniforms;return P}function E(w,v){let P;for(let U=0,O=h.length;U<O;U++){let G=h[U];if(G.cacheKey===v){P=G,++P.usedTimes;break}}return P===void 0&&(P=new h_(i,v,w,r),h.push(P)),P}function S(w){if(--w.usedTimes===0){let v=h.indexOf(w);h[v]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:I}}function f_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function p_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||p_),n.length>1&&n.sort(d||Hu),s.length>1&&s.sort(d||Hu)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function m_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Vu,i.set(n,[o])):s>=r.length?(o=new Vu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function g_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new jt};break;case"SpotLight":e={position:new C,direction:new C,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function __(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var x_=0;function y_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function v_(i){let t=new g_,e=__(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new me,o=new me;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,M=0,y=0,x=0,E=0,S=0,A=0;c.sort(y_);for(let w=0,v=c.length;w<v;w++){let P=c[w],U=P.color,O=P.intensity,G=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*O,u+=U.g*O,d+=U.b*O;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],O);A++}else if(P.isDirectionalLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,B=e.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.directionalShadow[f]=B,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=q,f++}else if(P.isSpotLight){let q=t.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(U).multiplyScalar(O),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[_]=q;let $=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[_]=$.matrix,P.castShadow){let B=e.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=V,x++}_++}else if(P.isRectAreaLight){let q=t.get(P);q.color.copy(U).multiplyScalar(O),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=q,g++}else if(P.isPointLight){let q=t.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){let $=P.shadow,B=e.get(P);B.shadowIntensity=$.intensity,B.shadowBias=$.bias,B.shadowNormalBias=$.normalBias,B.shadowRadius=$.radius,B.shadowMapSize=$.mapSize,B.shadowCameraNear=$.camera.near,B.shadowCameraFar=$.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=q,m++}else if(P.isHemisphereLight){let q=t.get(P);q.skyColor.copy(P.color).multiplyScalar(O),q.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=q,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==E||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=E,I.numLightProbes=A,n.version=x_++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let y=c[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Gu(i){let t=new v_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function M_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Gu(i),t.set(s,[a])):r>=o.length?(a=new Gu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function E_(i,t,e){let n=new Ls,s=new at,r=new at,o=new Ce,a=new sa({depthPacking:nu}),l=new ra,c={},h=e.maxTextureSize,u={[Qn]:$e,[$e]:Qn,[ze]:ze},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:b_,fragmentShader:S_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ve;m.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new re(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let p=this.type;this.render=function(S,A,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let w=i.getRenderTarget(),v=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ni),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let O=p!==Vn&&this.type===Vn,G=p===Vn&&this.type!==Vn;for(let V=0,q=S.length;V<q;V++){let $=S[V],B=$.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let et=B.getFrameExtents();if(s.multiply(et),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,B.mapSize.y=r.y)),B.map===null||O===!0||G===!0){let St=this.type!==Vn?{minFilter:nn,magFilter:nn}:{};B.map!==null&&B.map.dispose(),B.map=new Bn(s.x,s.y,St),B.map.texture.name=$.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();let lt=B.getViewportCount();for(let St=0;St<lt;St++){let Wt=B.getViewport(St);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),U.viewport(o),B.updateMatrices($,St),n=B.getFrustum(),x(A,I,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===Vn&&M(B,I),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,v,P)};function M(S,A){let I=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Bn(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,_,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,I,f,_,null)}function y(S,A,I,w){let v=null,P=I.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)v=P;else if(v=I.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let U=v.uuid,O=A.uuid,G=c[U];G===void 0&&(G={},c[U]=G);let V=G[O];V===void 0&&(V=v.clone(),G[O]=V,A.addEventListener("dispose",E)),v=V}if(v.visible=A.visible,v.wireframe=A.wireframe,w===Vn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=i.properties.get(v);U.light=I}return v}function x(S,A,I,w,v){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&v===Vn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,S.matrixWorld);let O=t.update(S),G=S.material;if(Array.isArray(G)){let V=O.groups;for(let q=0,$=V.length;q<$;q++){let B=V[q],et=G[B.materialIndex];if(et&&et.visible){let lt=y(S,et,w,v);S.onBeforeShadow(i,S,A,I,O,lt,B),i.renderBufferDirect(I,null,O,lt,S,B),S.onAfterShadow(i,S,A,I,O,lt,B)}}}else if(G.visible){let V=y(S,G,w,v);S.onBeforeShadow(i,S,A,I,O,V,null),i.renderBufferDirect(I,null,O,V,S,null),S.onAfterShadow(i,S,A,I,O,V,null)}}let U=S.children;for(let O=0,G=U.length;O<G;O++)x(U[O],A,I,w,v)}function E(S){S.target.removeEventListener("dispose",E);for(let I in c){let w=c[I],v=S.target.uuid;v in w&&(w[v].dispose(),delete w[v])}}}var w_={[ga]:_a,[xa]:Ma,[ya]:ba,[Oi]:va,[_a]:ga,[Ma]:xa,[ba]:ya,[va]:Oi};function T_(i,t){function e(){let F=!1,pt=new Ce,xt=null,At=new Ce(0,0,0,0);return{setMask:function(st){xt!==st&&!F&&(i.colorMask(st,st,st,st),xt=st)},setLocked:function(st){F=st},setClear:function(st,nt,Pt,Zt,ge){ge===!0&&(st*=Zt,nt*=Zt,Pt*=Zt),pt.set(st,nt,Pt,Zt),At.equals(pt)===!1&&(i.clearColor(st,nt,Pt,Zt),At.copy(pt))},reset:function(){F=!1,xt=null,At.set(-1,0,0,0)}}}function n(){let F=!1,pt=!1,xt=null,At=null,st=null;return{setReversed:function(nt){if(pt!==nt){let Pt=t.get("EXT_clip_control");nt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),pt=nt;let Zt=st;st=null,this.setClear(Zt)}},getReversed:function(){return pt},setTest:function(nt){nt?it(i.DEPTH_TEST):Et(i.DEPTH_TEST)},setMask:function(nt){xt!==nt&&!F&&(i.depthMask(nt),xt=nt)},setFunc:function(nt){if(pt&&(nt=w_[nt]),At!==nt){switch(nt){case ga:i.depthFunc(i.NEVER);break;case _a:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case va:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=nt}},setLocked:function(nt){F=nt},setClear:function(nt){st!==nt&&(pt&&(nt=1-nt),i.clearDepth(nt),st=nt)},reset:function(){F=!1,xt=null,At=null,st=null,pt=!1}}}function s(){let F=!1,pt=null,xt=null,At=null,st=null,nt=null,Pt=null,Zt=null,ge=null;return{setTest:function(oe){F||(oe?it(i.STENCIL_TEST):Et(i.STENCIL_TEST))},setMask:function(oe){pt!==oe&&!F&&(i.stencilMask(oe),pt=oe)},setFunc:function(oe,pn,tn){(xt!==oe||At!==pn||st!==tn)&&(i.stencilFunc(oe,pn,tn),xt=oe,At=pn,st=tn)},setOp:function(oe,pn,tn){(nt!==oe||Pt!==pn||Zt!==tn)&&(i.stencilOp(oe,pn,tn),nt=oe,Pt=pn,Zt=tn)},setLocked:function(oe){F=oe},setClear:function(oe){ge!==oe&&(i.clearStencil(oe),ge=oe)},reset:function(){F=!1,pt=null,xt=null,At=null,st=null,nt=null,Pt=null,Zt=null,ge=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,y=null,x=null,E=null,S=null,A=new jt(0,0,0),I=0,w=!1,v=null,P=null,U=null,O=null,G=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,$=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=$>=2);let et=null,lt={},St=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),Yt=new Ce().fromArray(St),ie=new Ce().fromArray(Wt);function Kt(F,pt,xt,At){let st=new Uint8Array(4),nt=i.createTexture();i.bindTexture(F,nt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<xt;Pt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(pt+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return nt}let J={};J[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Oi),tt(!1),j(nc),it(i.CULL_FACE),ot(ni);function it(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function Et(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ut(F,pt){return u[F]!==pt?(i.bindFramebuffer(F,pt),u[F]=pt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function ft(F,pt){let xt=f,At=!1;if(F){xt=d.get(pt),xt===void 0&&(xt=[],d.set(pt,xt));let st=F.textures;if(xt.length!==st.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,Pt=st.length;nt<Pt;nt++)xt[nt]=i.COLOR_ATTACHMENT0+nt;xt.length=st.length,At=!0}}else xt[0]!==i.BACK&&(xt[0]=i.BACK,At=!0);At&&i.drawBuffers(xt)}function Lt(F){return m!==F?(i.useProgram(F),m=F,!0):!1}let Bt={[pi]:i.FUNC_ADD,[Ch]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};Bt[Ph]=i.MIN,Bt[Lh]=i.MAX;let L={[Dh]:i.ZERO,[Uh]:i.ONE,[Nh]:i.SRC_COLOR,[ko]:i.SRC_ALPHA,[Hh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Vh]:i.CONSTANT_COLOR,[Gh]:i.ONE_MINUS_CONSTANT_COLOR,[Wh]:i.CONSTANT_ALPHA,[Xh]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(F,pt,xt,At,st,nt,Pt,Zt,ge,oe){if(F===ni){_===!0&&(Et(i.BLEND),_=!1);return}if(_===!1&&(it(i.BLEND),_=!0),F!==Rh){if(F!==g||oe!==w){if((p!==pi||x!==pi)&&(i.blendEquation(i.FUNC_ADD),p=pi,x=pi),oe)switch(F){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,y=null,E=null,S=null,A.set(0,0,0),I=0,g=F,w=oe}return}st=st||pt,nt=nt||xt,Pt=Pt||At,(pt!==p||st!==x)&&(i.blendEquationSeparate(Bt[pt],Bt[st]),p=pt,x=st),(xt!==M||At!==y||nt!==E||Pt!==S)&&(i.blendFuncSeparate(L[xt],L[At],L[nt],L[Pt]),M=xt,y=At,E=nt,S=Pt),(Zt.equals(A)===!1||ge!==I)&&(i.blendColor(Zt.r,Zt.g,Zt.b,ge),A.copy(Zt),I=ge),g=F,w=!1}function Q(F,pt){F.side===ze?Et(i.CULL_FACE):it(i.CULL_FACE);let xt=F.side===$e;pt&&(xt=!xt),tt(xt),F.blending===Fi&&F.transparent===!1?ot(ni):ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let At=F.stencilWrite;a.setTest(At),At&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ht(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Et(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(F){v!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),v=F)}function j(F){F!==Th?(it(i.CULL_FACE),F!==P&&(F===nc?i.cullFace(i.BACK):F===Ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Et(i.CULL_FACE),P=F}function gt(F){F!==U&&(q&&i.lineWidth(F),U=F)}function ht(F,pt,xt){F?(it(i.POLYGON_OFFSET_FILL),(O!==pt||G!==xt)&&(i.polygonOffset(pt,xt),O=pt,G=xt)):Et(i.POLYGON_OFFSET_FILL)}function mt(F){F?it(i.SCISSOR_TEST):Et(i.SCISSOR_TEST)}function Vt(F){F===void 0&&(F=i.TEXTURE0+V-1),et!==F&&(i.activeTexture(F),et=F)}function Tt(F,pt,xt){xt===void 0&&(et===null?xt=i.TEXTURE0+V-1:xt=et);let At=lt[xt];At===void 0&&(At={type:void 0,texture:void 0},lt[xt]=At),(At.type!==F||At.texture!==pt)&&(et!==xt&&(i.activeTexture(xt),et=xt),i.bindTexture(F,pt||J[F]),At.type=F,At.texture=pt)}function R(){let F=lt[et];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Mt(F){Yt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Yt.copy(F))}function kt(F){ie.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ie.copy(F))}function Nt(F,pt){let xt=c.get(pt);xt===void 0&&(xt=new WeakMap,c.set(pt,xt));let At=xt.get(F);At===void 0&&(At=i.getUniformBlockIndex(pt,F.name),xt.set(F,At))}function yt(F,pt){let At=c.get(pt).get(F);l.get(pt)!==At&&(i.uniformBlockBinding(pt,At,F.__bindingPointIndex),l.set(pt,At))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,lt={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,M=null,y=null,x=null,E=null,S=null,A=new jt(0,0,0),I=0,w=!1,v=null,P=null,U=null,O=null,G=null,Yt.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Et,bindFramebuffer:Ut,drawBuffers:ft,useProgram:Lt,setBlending:ot,setMaterial:Q,setFlipSided:tt,setCullFace:j,setLineWidth:gt,setPolygonOffset:ht,setScissorTest:mt,activeTexture:Vt,bindTexture:Tt,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:It,texImage3D:ct,updateUBOMapping:Nt,uniformBlockBinding:yt,texStorage2D:dt,texStorage3D:Dt,texSubImage2D:Y,texSubImage3D:K,compressedTexSubImage2D:Z,compressedTexSubImage3D:Rt,scissor:Mt,viewport:kt,reset:$t}}function A_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,b){return f?new OffscreenCanvas(R,b):Tr("canvas")}function _(R,b,z){let Y=1,K=Tt(R);if((K.width>z||K.height>z)&&(Y=z/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(Y*K.width),Rt=Math.floor(Y*K.height);u===void 0&&(u=m(Z,Rt));let dt=b?m(Z,Rt):u;return dt.width=Z,dt.height=Rt,dt.getContext("2d").drawImage(R,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+Rt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,b,z,Y,K=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=b;if(b===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),b===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),b===i.RGBA){let Rt=K?Er:ae.getTransfer(Y);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=Rt===pe?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,b){let z;return R?b===null||b===bi||b===Ws?z=i.DEPTH24_STENCIL8:b===Un?z=i.DEPTH32F_STENCIL8:b===Vs&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===bi||b===Ws?z=i.DEPTH_COMPONENT24:b===Un?z=i.DEPTH_COMPONENT32F:b===Vs&&(z=i.DEPTH_COMPONENT16),z}function E(R,b){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==hn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function S(R){let b=R.target;b.removeEventListener("dispose",S),I(b),b.isVideoTexture&&h.delete(b)}function A(R){let b=R.target;b.removeEventListener("dispose",A),v(b)}function I(R){let b=n.get(R);if(b.__webglInit===void 0)return;let z=R.source,Y=d.get(z);if(Y){let K=Y[b.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(R),Object.keys(Y).length===0&&d.delete(z)}n.remove(R)}function w(R){let b=n.get(R);i.deleteTexture(b.__webglTexture);let z=R.source,Y=d.get(z);delete Y[b.__cacheKey],o.memory.textures--}function v(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let K=0;K<b.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(b.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let Y=0,K=z.length;Y<K;Y++){let Z=n.get(z[Y]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(R)}let P=0;function U(){P=0}function O(){let R=P;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function G(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function V(R,b){let z=n.get(R);if(R.isVideoTexture&&mt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,R,b);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function q(R,b){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){J(z,R,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function $(R,b){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){J(z,R,b);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function B(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){it(z,R,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}let et={[bs]:i.REPEAT,[fi]:i.CLAMP_TO_EDGE,[Ho]:i.MIRRORED_REPEAT},lt={[nn]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[to]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},St={[su]:i.NEVER,[hu]:i.ALWAYS,[ru]:i.LESS,[_c]:i.LEQUAL,[ou]:i.EQUAL,[cu]:i.GEQUAL,[au]:i.GREATER,[lu]:i.NOTEQUAL};function Wt(R,b){if(b.type===Un&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===hn||b.magFilter===wa||b.magFilter===to||b.magFilter===Mi||b.minFilter===hn||b.minFilter===wa||b.minFilter===to||b.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,et[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,et[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,et[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,lt[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,lt[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,St[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===nn||b.minFilter!==to&&b.minFilter!==Mi||b.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Yt(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",S));let Y=b.source,K=d.get(Y);K===void 0&&(K={},d.set(Y,K));let Z=G(b);if(Z!==R.__cacheKey){K[Z]===void 0&&(K[Z]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[Z].usedTimes++;let Rt=K[R.__cacheKey];Rt!==void 0&&(K[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(b)),R.__cacheKey=Z,R.__webglTexture=K[Z].texture}return z}function ie(R,b,z){return Math.floor(Math.floor(R/z)/b)}function Kt(R,b,z,Y){let Z=R.updateRanges;if(Z.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,Y,b.data);else{Z.sort((ct,Mt)=>ct.start-Mt.start);let Rt=0;for(let ct=1;ct<Z.length;ct++){let Mt=Z[Rt],kt=Z[ct],Nt=Mt.start+Mt.count,yt=ie(kt.start,b.width,4),$t=ie(Mt.start,b.width,4);kt.start<=Nt+1&&yt===$t&&ie(kt.start+kt.count-1,b.width,4)===yt?Mt.count=Math.max(Mt.count,kt.start+kt.count-Mt.start):(++Rt,Z[Rt]=kt)}Z.length=Rt+1;let dt=i.getParameter(i.UNPACK_ROW_LENGTH),Dt=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ct=0,Mt=Z.length;ct<Mt;ct++){let kt=Z[ct],Nt=Math.floor(kt.start/4),yt=Math.ceil(kt.count/4),$t=Nt%b.width,F=Math.floor(Nt/b.width),pt=yt,xt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,$t,F,pt,xt,z,Y,b.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,dt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function J(R,b,z){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let K=Yt(R,b),Z=b.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+z);let Rt=n.get(Z);if(Z.version!==Rt.__version||K===!0){e.activeTexture(i.TEXTURE0+z);let dt=ae.getPrimaries(ae.workingColorSpace),Dt=b.colorSpace===si?null:ae.getPrimaries(b.colorSpace),It=b.colorSpace===si||dt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let ct=_(b.image,!1,s.maxTextureSize);ct=Vt(b,ct);let Mt=r.convert(b.format,b.colorSpace),kt=r.convert(b.type),Nt=y(b.internalFormat,Mt,kt,b.colorSpace,b.isVideoTexture);Wt(Y,b);let yt,$t=b.mipmaps,F=b.isVideoTexture!==!0,pt=Rt.__version===void 0||K===!0,xt=Z.dataReady,At=E(b,ct);if(b.isDepthTexture)Nt=x(b.format===Xs,b.type),pt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Nt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,Mt,kt,null));else if(b.isDataTexture)if($t.length>0){F&&pt&&e.texStorage2D(i.TEXTURE_2D,At,Nt,$t[0].width,$t[0].height);for(let st=0,nt=$t.length;st<nt;st++)yt=$t[st],F?xt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,Mt,kt,yt.data):e.texImage2D(i.TEXTURE_2D,st,Nt,yt.width,yt.height,0,Mt,kt,yt.data);b.generateMipmaps=!1}else F?(pt&&e.texStorage2D(i.TEXTURE_2D,At,Nt,ct.width,ct.height),xt&&Kt(b,ct,Mt,kt)):e.texImage2D(i.TEXTURE_2D,0,Nt,ct.width,ct.height,0,Mt,kt,ct.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){F&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,$t[0].width,$t[0].height,ct.depth);for(let st=0,nt=$t.length;st<nt;st++)if(yt=$t[st],b.format!==En)if(Mt!==null)if(F){if(xt)if(b.layerUpdates.size>0){let Pt=wc(yt.width,yt.height,b.format,b.type);for(let Zt of b.layerUpdates){let ge=yt.data.subarray(Zt*Pt/yt.data.BYTES_PER_ELEMENT,(Zt+1)*Pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Zt,yt.width,yt.height,1,Mt,ge)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,yt.width,yt.height,ct.depth,Mt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Nt,yt.width,yt.height,ct.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?xt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,yt.width,yt.height,ct.depth,Mt,kt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Nt,yt.width,yt.height,ct.depth,0,Mt,kt,yt.data)}else{F&&pt&&e.texStorage2D(i.TEXTURE_2D,At,Nt,$t[0].width,$t[0].height);for(let st=0,nt=$t.length;st<nt;st++)yt=$t[st],b.format!==En?Mt!==null?F?xt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,Mt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?xt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,Mt,kt,yt.data):e.texImage2D(i.TEXTURE_2D,st,Nt,yt.width,yt.height,0,Mt,kt,yt.data)}else if(b.isDataArrayTexture)if(F){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Nt,ct.width,ct.height,ct.depth),xt)if(b.layerUpdates.size>0){let st=wc(ct.width,ct.height,b.format,b.type);for(let nt of b.layerUpdates){let Pt=ct.data.subarray(nt*st/ct.data.BYTES_PER_ELEMENT,(nt+1)*st/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,ct.width,ct.height,1,Mt,kt,Pt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Mt,kt,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,ct.width,ct.height,ct.depth,0,Mt,kt,ct.data);else if(b.isData3DTexture)F?(pt&&e.texStorage3D(i.TEXTURE_3D,At,Nt,ct.width,ct.height,ct.depth),xt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Mt,kt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,ct.width,ct.height,ct.depth,0,Mt,kt,ct.data);else if(b.isFramebufferTexture){if(pt)if(F)e.texStorage2D(i.TEXTURE_2D,At,Nt,ct.width,ct.height);else{let st=ct.width,nt=ct.height;for(let Pt=0;Pt<At;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Nt,st,nt,0,Mt,kt,null),st>>=1,nt>>=1}}else if($t.length>0){if(F&&pt){let st=Tt($t[0]);e.texStorage2D(i.TEXTURE_2D,At,Nt,st.width,st.height)}for(let st=0,nt=$t.length;st<nt;st++)yt=$t[st],F?xt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Mt,kt,yt):e.texImage2D(i.TEXTURE_2D,st,Nt,Mt,kt,yt);b.generateMipmaps=!1}else if(F){if(pt){let st=Tt(ct);e.texStorage2D(i.TEXTURE_2D,At,Nt,st.width,st.height)}xt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,kt,ct)}else e.texImage2D(i.TEXTURE_2D,0,Nt,Mt,kt,ct);g(b)&&p(Y),Rt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function it(R,b,z){if(b.image.length!==6)return;let Y=Yt(R,b),K=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);let Z=n.get(K);if(K.version!==Z.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);let Rt=ae.getPrimaries(ae.workingColorSpace),dt=b.colorSpace===si?null:ae.getPrimaries(b.colorSpace),Dt=b.colorSpace===si||Rt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let It=b.isCompressedTexture||b.image[0].isCompressedTexture,ct=b.image[0]&&b.image[0].isDataTexture,Mt=[];for(let nt=0;nt<6;nt++)!It&&!ct?Mt[nt]=_(b.image[nt],!0,s.maxCubemapSize):Mt[nt]=ct?b.image[nt].image:b.image[nt],Mt[nt]=Vt(b,Mt[nt]);let kt=Mt[0],Nt=r.convert(b.format,b.colorSpace),yt=r.convert(b.type),$t=y(b.internalFormat,Nt,yt,b.colorSpace),F=b.isVideoTexture!==!0,pt=Z.__version===void 0||Y===!0,xt=K.dataReady,At=E(b,kt);Wt(i.TEXTURE_CUBE_MAP,b);let st;if(It){F&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,$t,kt.width,kt.height);for(let nt=0;nt<6;nt++){st=Mt[nt].mipmaps;for(let Pt=0;Pt<st.length;Pt++){let Zt=st[Pt];b.format!==En?Nt!==null?F?xt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,Zt.width,Zt.height,Nt,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,$t,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,0,0,Zt.width,Zt.height,Nt,yt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt,$t,Zt.width,Zt.height,0,Nt,yt,Zt.data)}}}else{if(st=b.mipmaps,F&&pt){st.length>0&&At++;let nt=Tt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,$t,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(ct){F?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Mt[nt].width,Mt[nt].height,Nt,yt,Mt[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,$t,Mt[nt].width,Mt[nt].height,0,Nt,yt,Mt[nt].data);for(let Pt=0;Pt<st.length;Pt++){let ge=st[Pt].image[nt].image;F?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,ge.width,ge.height,Nt,yt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,$t,ge.width,ge.height,0,Nt,yt,ge.data)}}else{F?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Nt,yt,Mt[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,$t,Nt,yt,Mt[nt]);for(let Pt=0;Pt<st.length;Pt++){let Zt=st[Pt];F?xt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,0,0,Nt,yt,Zt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Pt+1,$t,Nt,yt,Zt.image[nt])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),Z.__version=K.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Et(R,b,z,Y,K,Z){let Rt=r.convert(z.format,z.colorSpace),dt=r.convert(z.type),Dt=y(z.internalFormat,Rt,dt,z.colorSpace),It=n.get(b),ct=n.get(z);if(ct.__renderTarget=b,!It.__hasExternalTextures){let Mt=Math.max(1,b.width>>Z),kt=Math.max(1,b.height>>Z);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,Z,Dt,Mt,kt,b.depth,0,Rt,dt,null):e.texImage2D(K,Z,Dt,Mt,kt,0,Rt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,ct.__webglTexture,0,gt(b)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,ct.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(R,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){let Y=b.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,Z=x(b.stencilBuffer,K),Rt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=gt(b);ht(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Z,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Z,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Z,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{let Y=b.textures;for(let K=0;K<Y.length;K++){let Z=Y[K],Rt=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),Dt=y(Z.internalFormat,Rt,dt,Z.colorSpace),It=gt(b);z&&ht(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Dt,b.width,b.height):ht(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Dt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let K=Y.__webglTexture,Z=gt(b);if(b.depthTexture.format===Ss)ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(b.depthTexture.format===Xs)ht(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Lt(R){let b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let K=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),b.__depthDisposeCallback=K}b.__boundDepthTexture=Y}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let Y=R.texture.mipmaps;Y&&Y.length>0?ft(b.__webglFramebuffer[0],R):ft(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ut(b.__webglDepthbuffer[Y],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ut(b.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Z)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(R,b,z){let Y=n.get(R);b!==void 0&&Et(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Lt(R)}function L(R){let b=R.texture,z=n.get(R),Y=n.get(b);R.addEventListener("dispose",A);let K=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Rt=K.length>1;if(Rt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),Z){z.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[dt]=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)z.__webglFramebuffer[dt][Dt]=i.createFramebuffer()}else z.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)z.__webglFramebuffer[dt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let dt=0,Dt=K.length;dt<Dt;dt++){let It=n.get(K[dt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&ht(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let dt=0;dt<K.length;dt++){let Dt=K[dt];z.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[dt]);let It=r.convert(Dt.format,Dt.colorSpace),ct=r.convert(Dt.type),Mt=y(Dt.internalFormat,It,ct,Dt.colorSpace,R.isXRRenderTarget===!0),kt=gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,Mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,z.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Dt=0;Dt<b.mipmaps.length;Dt++)Et(z.__webglFramebuffer[dt][Dt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Dt);else Et(z.__webglFramebuffer[dt],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,Dt=K.length;dt<Dt;dt++){let It=K[dt],ct=n.get(It),Mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,ct.__webglTexture),Wt(Mt,It),Et(z.__webglFramebuffer,R,It,i.COLOR_ATTACHMENT0+dt,Mt,0),g(It)&&p(Mt)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,Y.__webglTexture),Wt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Dt=0;Dt<b.mipmaps.length;Dt++)Et(z.__webglFramebuffer[Dt],R,b,i.COLOR_ATTACHMENT0,dt,Dt);else Et(z.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,dt,0);g(b)&&p(dt),e.unbindTexture()}R.depthBuffer&&Lt(R)}function ot(R){let b=R.textures;for(let z=0,Y=b.length;z<Y;z++){let K=b[z];if(g(K)){let Z=M(R),Rt=n.get(K).__webglTexture;e.bindTexture(Z,Rt),p(Z),e.unbindTexture()}}}let Q=[],tt=[];function j(R){if(R.samples>0){if(ht(R)===!1){let b=R.textures,z=R.width,Y=R.height,K=i.COLOR_BUFFER_BIT,Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),dt=b.length>1;if(dt)for(let It=0;It<b.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let Dt=R.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let It=0;It<b.length;It++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[It]);let ct=n.get(b[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,K,i.NEAREST),l===!0&&(Q.length=0,tt.length=0,Q.push(i.COLOR_ATTACHMENT0+It),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Q.push(Z),tt.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let It=0;It<b.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[It]);let ct=n.get(b[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,ct,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function gt(R){return Math.min(s.maxSamples,R.samples)}function ht(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function mt(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Vt(R,b){let z=R.colorSpace,Y=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Bi&&z!==si&&(ae.getTransfer(z)===pe?(Y!==En||K!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function Tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=$,this.setTextureCube=B,this.rebindTextures=Bt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ht}function R_(i,t){function e(n,s=si){let r,o=ae.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cc)return i.BYTE;if(n===hc)return i.SHORT;if(n===Vs)return i.UNSIGNED_SHORT;if(n===Ta)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Gs)return i.HALF_FLOAT;if(n===fc)return i.ALPHA;if(n===pc)return i.RGB;if(n===En)return i.RGBA;if(n===Ss)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===Ca)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===mc)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===eo||n===no||n===io||n===so)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Ua||n===Na||n===Fa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===Ka||n===$a||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ga)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===tl||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===tl)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===il||n===sl||n===rl||n===ol)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ln({vertexShader:C_,fragmentShader:I_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends On{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new Bc,p={},M=e.getContextAttributes(),y=null,x=null,E=[],S=[],A=new at,I=null,w=new Xe;w.viewport=new Ce;let v=new Xe;v.viewport=new Ce;let P=[w,v],U=new ma,O=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=E[J];return it===void 0&&(it=new Rs,E[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=E[J];return it===void 0&&(it=new Rs,E[J]=it),it.getGripSpace()},this.getHand=function(J){let it=E[J];return it===void 0&&(it=new Rs,E[J]=it),it.getHandSpace()};function V(J){let it=S.indexOf(J.inputSource);if(it===-1)return;let Et=E[it];Et!==void 0&&(Et.update(J.inputSource,J.frame,c||o),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",$);for(let J=0;J<E.length;J++){let it=S[J];it!==null&&(S[J]=null,E[J].disconnect(it))}O=null,G=null,g.reset();for(let J in p)delete p[J];t.setRenderTarget(y),f=null,d=null,u=null,s=null,x=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",$),M.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ut=null,ft=null;M.depth&&(ft=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=M.stencil?Xs:Ss,Ut=M.stencil?Ws:bi);let Lt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Bn(d.textureWidth,d.textureHeight,{format:En,type:Dn,depthTexture:new Nr(d.textureWidth,d.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Et={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Bn(f.framebufferWidth,f.framebufferHeight,{format:En,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(J){for(let it=0;it<J.removed.length;it++){let Et=J.removed[it],Ut=S.indexOf(Et);Ut>=0&&(S[Ut]=null,E[Ut].disconnect(Et))}for(let it=0;it<J.added.length;it++){let Et=J.added[it],Ut=S.indexOf(Et);if(Ut===-1){for(let Lt=0;Lt<E.length;Lt++)if(Lt>=S.length){S.push(Et),Ut=Lt;break}else if(S[Lt]===null){S[Lt]=Et,Ut=Lt;break}if(Ut===-1)break}let ft=E[Ut];ft&&ft.connect(Et)}}let B=new C,et=new C;function lt(J,it,Et){B.setFromMatrixPosition(it.matrixWorld),et.setFromMatrixPosition(Et.matrixWorld);let Ut=B.distanceTo(et),ft=it.projectionMatrix.elements,Lt=Et.projectionMatrix.elements,Bt=ft[14]/(ft[10]-1),L=ft[14]/(ft[10]+1),ot=(ft[9]+1)/ft[5],Q=(ft[9]-1)/ft[5],tt=(ft[8]-1)/ft[0],j=(Lt[8]+1)/Lt[0],gt=Bt*tt,ht=Bt*j,mt=Ut/(-tt+j),Vt=mt*-tt;if(it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Vt),J.translateZ(mt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ft[10]===-1)J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let Tt=Bt+mt,R=L+mt,b=gt-Vt,z=ht+(Ut-Vt),Y=ot*L/R*Tt,K=Q*L/R*Tt;J.projectionMatrix.makePerspective(b,z,Y,K,Tt,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function St(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let it=J.near,Et=J.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(Et=g.depthFar)),U.near=v.near=w.near=it,U.far=v.far=w.far=Et,(O!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),O=U.near,G=U.far),U.layers.mask=J.layers.mask|6,w.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;let Ut=J.parent,ft=U.cameras;St(U,Ut);for(let Lt=0;Lt<ft.length;Lt++)St(ft[Lt],Ut);ft.length===2?lt(U,w,v):U.projectionMatrix.copy(w.projectionMatrix),Wt(J,U,Ut)};function Wt(J,it,Et){Et===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Es*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let Yt=null;function ie(J,it){if(h=it.getViewerPose(c||o),m=it,h!==null){let Et=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ut=!1;Et.length!==U.cameras.length&&(U.cameras.length=0,Ut=!0);for(let L=0;L<Et.length;L++){let ot=Et[L],Q=null;if(f!==null)Q=f.getViewport(ot);else{let j=u.getViewSubImage(d,ot);Q=j.viewport,L===0&&(t.setRenderTargetTextures(x,j.colorTexture,j.depthStencilTexture),t.setRenderTarget(x))}let tt=P[L];tt===void 0&&(tt=new Xe,tt.layers.enable(L),tt.viewport=new Ce,P[L]=tt),tt.matrix.fromArray(ot.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(ot.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Q.x,Q.y,Q.width,Q.height),L===0&&(U.matrix.copy(tt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ut===!0&&U.cameras.push(tt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let L=u.getDepthInformation(Et[0]);L&&L.isValid&&L.texture&&g.init(L,s.renderState)}if(ft&&ft.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Et.length;L++){let ot=Et[L].camera;if(ot){let Q=p[ot];Q||(Q=new Fr,p[ot]=Q);let tt=u.getCameraImage(ot);Q.sourceTexture=tt}}}}for(let Et=0;Et<E.length;Et++){let Ut=S[Et],ft=E[Et];Ut!==null&&ft!==void 0&&ft.update(Ut,it,c||o)}Yt&&Yt(J,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let Kt=new Wu;Kt.setAnimationLoop(ie),this.setAnimationLoop=function(J){Yt=J},this.dispose=function(){}}},Qi=new Pn,P_=new me;function L_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Mc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$e&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$e&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=t.get(p),y=M.envMap,x=M.envMapRotation;y&&(g.envMap.value=y,Qi.copy(x),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),g.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Qi)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){let x=y.program;n.uniformBlockBinding(M,x)}function c(M,y){let x=s[M.id];x===void 0&&(m(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",g));let E=y.program;n.updateUBOMapping(M,E);let S=t.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function h(M){let y=u();M.__bindingPointIndex=y;let x=i.createBuffer(),E=M.__size,S=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=s[M.id],x=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,A=x.length;S<A;S++){let I=Array.isArray(x[S])?x[S]:[x[S]];for(let w=0,v=I.length;w<v;w++){let P=I[w];if(f(P,S,w,E)===!0){let U=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],G=0;for(let V=0;V<O.length;V++){let q=O[V],$=_(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,U+G,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,G),G+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,y,x,E){let S=M.value,A=y+"_"+x;if(E[A]===void 0)return typeof S=="number"||typeof S=="boolean"?E[A]=S:E[A]=S.clone(),!0;{let I=E[A];if(typeof S=="number"||typeof S=="boolean"){if(I!==S)return E[A]=S,!0}else if(I.equals(S)===!1)return I.copy(S),!0}return!1}function m(M){let y=M.uniforms,x=0,E=16;for(let A=0,I=y.length;A<I;A++){let w=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,P=w.length;v<P;v++){let U=w[v],O=Array.isArray(U.value)?U.value:[U.value];for(let G=0,V=O.length;G<V;G++){let q=O[G],$=_(q),B=x%E,et=B%$.boundary,lt=B+et;x+=et,lt!==0&&E-lt<$.storage&&(x+=E-lt),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=$.storage}}}let S=x%E;return S>0&&(x+=E-S),M.__size=x,M.__cache={},this}function _(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){let y=M.target;y.removeEventListener("dispose",g);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Js=class{constructor(t={}){let{canvas:e=uu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=ye;let S=0,A=0,I=null,w=-1,v=null,P=new Ce,U=new Ce,O=null,G=new jt(0),V=0,q=e.width,$=e.height,B=1,et=null,lt=null,St=new Ce(0,0,q,$),Wt=new Ce(0,0,q,$),Yt=!1,ie=new Ls,Kt=!1,J=!1,it=new me,Et=new C,Ut=new Ce,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Bt(){return I===null?B:1}let L=n;function ot(T,N){return e.getContext(T,N)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",st,!1),L===null){let N="webgl2";if(L=ot(N,T),L===null)throw ot(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,tt,j,gt,ht,mt,Vt,Tt,R,b,z,Y,K,Z,Rt,dt,Dt,It,ct,Mt,kt,Nt,yt,$t;function F(){Q=new $g(L),Q.init(),Nt=new R_(L,Q),tt=new Wg(L,Q,t,Nt),j=new T_(L,Q),tt.reversedDepthBuffer&&d&&j.buffers.depth.setReversed(!0),gt=new t0(L),ht=new f_,mt=new A_(L,Q,j,ht,tt,Nt,gt),Vt=new qg(x),Tt=new Kg(x),R=new op(L),yt=new Vg(L,R),b=new jg(L,R,gt,yt),z=new n0(L,b,R,gt),ct=new e0(L,tt,mt),dt=new Xg(ht),Y=new d_(x,Vt,Tt,Q,tt,yt,dt),K=new L_(x,ht),Z=new m_,Rt=new M_(Q),It=new Hg(x,Vt,Tt,j,z,f,l),Dt=new E_(x,z,tt),$t=new D_(L,gt,tt,j),Mt=new Gg(L,Q,gt),kt=new Qg(L,Q,gt),gt.programs=Y.programs,x.capabilities=tt,x.extensions=Q,x.properties=ht,x.renderLists=Z,x.shadowMap=Dt,x.state=j,x.info=gt}F();let pt=new kc(x,L);this.xr=pt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(q,$,!1))},this.getSize=function(T){return T.set(q,$)},this.setSize=function(T,N,H=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,$=N,e.width=Math.floor(T*B),e.height=Math.floor(N*B),H===!0&&(e.style.width=T+"px",e.style.height=N+"px"),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(q*B,$*B).floor()},this.setDrawingBufferSize=function(T,N,H){q=T,$=N,B=H,e.width=Math.floor(T*H),e.height=Math.floor(N*H),this.setViewport(0,0,T,N)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(St)},this.setViewport=function(T,N,H,X){T.isVector4?St.set(T.x,T.y,T.z,T.w):St.set(T,N,H,X),j.viewport(P.copy(St).multiplyScalar(B).round())},this.getScissor=function(T){return T.copy(Wt)},this.setScissor=function(T,N,H,X){T.isVector4?Wt.set(T.x,T.y,T.z,T.w):Wt.set(T,N,H,X),j.scissor(U.copy(Wt).multiplyScalar(B).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(T){j.setScissorTest(Yt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){lt=T},this.getClearColor=function(T){return T.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,H=!0){let X=0;if(T){let k=!1;if(I!==null){let ut=I.texture.format;k=ut===La||ut===Pa||ut===Ia}if(k){let ut=I.texture.type,vt=ut===Dn||ut===bi||ut===Vs||ut===Ws||ut===Aa||ut===Ra,Ct=It.getClearColor(),wt=It.getClearAlpha(),Ht=Ct.r,Ft=Ct.g,Ot=Ct.b;vt?(m[0]=Ht,m[1]=Ft,m[2]=Ot,m[3]=wt,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=Ht,_[1]=Ft,_[2]=Ot,_[3]=wt,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}N&&(X|=L.DEPTH_BUFFER_BIT),H&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",st,!1),It.dispose(),Z.dispose(),Rt.dispose(),ht.dispose(),Vt.dispose(),Tt.dispose(),z.dispose(),yt.dispose(),$t.dispose(),Y.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",tn),pt.removeEventListener("sessionend",rr),Ie.stop()};function xt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let T=gt.autoReset,N=Dt.enabled,H=Dt.autoUpdate,X=Dt.needsUpdate,k=Dt.type;F(),gt.autoReset=T,Dt.enabled=N,Dt.autoUpdate=H,Dt.needsUpdate=X,Dt.type=k}function st(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function nt(T){let N=T.target;N.removeEventListener("dispose",nt),Pt(N)}function Pt(T){Zt(T),ht.remove(T)}function Zt(T){let N=ht.get(T).programs;N!==void 0&&(N.forEach(function(H){Y.releaseProgram(H)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,H,X,k,ut){N===null&&(N=ft);let vt=k.isMesh&&k.matrixWorld.determinant()<0,Ct=W(T,N,H,X,k);j.setMaterial(X,vt);let wt=H.index,Ht=1;if(X.wireframe===!0){if(wt=b.getWireframeAttribute(H),wt===void 0)return;Ht=2}let Ft=H.drawRange,Ot=H.attributes.position,se=Ft.start*Ht,he=(Ft.start+Ft.count)*Ht;ut!==null&&(se=Math.max(se,ut.start*Ht),he=Math.min(he,(ut.start+ut.count)*Ht)),wt!==null?(se=Math.max(se,0),he=Math.min(he,wt.count)):Ot!=null&&(se=Math.max(se,0),he=Math.min(he,Ot.count));let Le=he-se;if(Le<0||Le===1/0)return;yt.setup(k,X,Ct,H,wt);let Me,xe=Mt;if(wt!==null&&(Me=R.get(wt),xe=kt,xe.setIndex(Me)),k.isMesh)X.wireframe===!0?(j.setLineWidth(X.wireframeLinewidth*Bt()),xe.setMode(L.LINES)):xe.setMode(L.TRIANGLES);else if(k.isLine){let Gt=X.linewidth;Gt===void 0&&(Gt=1),j.setLineWidth(Gt*Bt()),k.isLineSegments?xe.setMode(L.LINES):k.isLineLoop?xe.setMode(L.LINE_LOOP):xe.setMode(L.LINE_STRIP)}else k.isPoints?xe.setMode(L.POINTS):k.isSprite&&xe.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ws("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Gt=k._multiDrawStarts,Te=k._multiDrawCounts,ce=k._multiDrawCount,on=wt?R.get(wt).bytesPerElement:1,is=ht.get(X).currentProgram.getUniforms();for(let an=0;an<ce;an++)is.setValue(L,"_gl_DrawID",an),xe.render(Gt[an]/on,Te[an])}else if(k.isInstancedMesh)xe.renderInstances(se,Le,k.count);else if(H.isInstancedBufferGeometry){let Gt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Te=Math.min(H.instanceCount,Gt);xe.renderInstances(se,Le,Te)}else xe.render(se,Le)};function ge(T,N,H){T.transparent===!0&&T.side===ze&&T.forceSinglePass===!1?(T.side=$e,T.needsUpdate=!0,Ri(T,N,H),T.side=Qn,T.needsUpdate=!0,Ri(T,N,H),T.side=ze):Ri(T,N,H)}this.compile=function(T,N,H=null){H===null&&(H=T),p=Rt.get(H),p.init(N),y.push(p),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==H&&T.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let X=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ut=k.material;if(ut)if(Array.isArray(ut))for(let vt=0;vt<ut.length;vt++){let Ct=ut[vt];ge(Ct,H,k),X.add(Ct)}else ge(ut,H,k),X.add(ut)}),p=y.pop(),X},this.compileAsync=function(T,N,H=null){let X=this.compile(T,N,H);return new Promise(k=>{function ut(){if(X.forEach(function(vt){ht.get(vt).currentProgram.isReady()&&X.delete(vt)}),X.size===0){k(T);return}setTimeout(ut,10)}Q.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let oe=null;function pn(T){oe&&oe(T)}function tn(){Ie.stop()}function rr(){Ie.start()}let Ie=new Wu;Ie.setAnimationLoop(pn),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(T){oe=T,pt.setAnimationLoop(T),T===null?Ie.stop():Ie.start()},pt.addEventListener("sessionstart",tn),pt.addEventListener("sessionend",rr),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(N),N=pt.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,N,I),p=Rt.get(T,y.length),p.init(N),y.push(p),it.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ie.setFromProjectionMatrix(it,In,N.reversedDepth),J=this.localClippingEnabled,Kt=dt.init(this.clippingPlanes,J),g=Z.get(T,M.length),g.init(),M.push(g),pt.enabled===!0&&pt.isPresenting===!0){let ut=x.xr.getDepthSensingMesh();ut!==null&&wi(ut,N,-1/0,x.sortObjects)}wi(T,N,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(et,lt),Lt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Lt&&It.addToRenderList(g,T),this.info.render.frame++,Kt===!0&&dt.beginShadows();let H=p.state.shadowsArray;Dt.render(H,T,N),Kt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,k=g.transmissive;if(p.setupLights(),N.isArrayCamera){let ut=N.cameras;if(k.length>0)for(let vt=0,Ct=ut.length;vt<Ct;vt++){let wt=ut[vt];ri(X,k,T,wt)}Lt&&It.render(T);for(let vt=0,Ct=ut.length;vt<Ct;vt++){let wt=ut[vt];Ti(g,T,wt,wt.viewport)}}else k.length>0&&ri(X,k,T,N),Lt&&It.render(T),Ti(g,T,N);I!==null&&A===0&&(mt.updateMultisampleRenderTarget(I),mt.updateRenderTargetMipmap(I)),T.isScene===!0&&T.onAfterRender(x,T,N),yt.resetDefaultState(),w=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],Kt===!0&&dt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function wi(T,N,H,X){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ie.intersectsSprite(T)){X&&Ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(it);let vt=z.update(T),Ct=T.material;Ct.visible&&g.push(T,vt,Ct,H,Ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ie.intersectsObject(T))){let vt=z.update(T),Ct=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ut.copy(T.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ut.copy(vt.boundingSphere.center)),Ut.applyMatrix4(T.matrixWorld).applyMatrix4(it)),Array.isArray(Ct)){let wt=vt.groups;for(let Ht=0,Ft=wt.length;Ht<Ft;Ht++){let Ot=wt[Ht],se=Ct[Ot.materialIndex];se&&se.visible&&g.push(T,vt,se,H,Ut.z,Ot)}}else Ct.visible&&g.push(T,vt,Ct,H,Ut.z,null)}}let ut=T.children;for(let vt=0,Ct=ut.length;vt<Ct;vt++)wi(ut[vt],N,H,X)}function Ti(T,N,H,X){let k=T.opaque,ut=T.transmissive,vt=T.transparent;p.setupLightsView(H),Kt===!0&&dt.setGlobalState(x.clippingPlanes,H),X&&j.viewport(P.copy(X)),k.length>0&&Ai(k,N,H),ut.length>0&&Ai(ut,N,H),vt.length>0&&Ai(vt,N,H),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ri(T,N,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Bn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Gs:Dn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let ut=p.state.transmissionRenderTarget[X.id],vt=X.viewport||P;ut.setSize(vt.z*x.transmissionResolutionScale,vt.w*x.transmissionResolutionScale);let Ct=x.getRenderTarget(),wt=x.getActiveCubeFace(),Ht=x.getActiveMipmapLevel();x.setRenderTarget(ut),x.getClearColor(G),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Lt&&It.render(H);let Ft=x.toneMapping;x.toneMapping=ii;let Ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Kt===!0&&dt.setGlobalState(x.clippingPlanes,X),Ai(T,H,X),mt.updateMultisampleRenderTarget(ut),mt.updateRenderTargetMipmap(ut),Q.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let he=0,Le=N.length;he<Le;he++){let Me=N[he],xe=Me.object,Gt=Me.geometry,Te=Me.material,ce=Me.group;if(Te.side===ze&&xe.layers.test(X.layers)){let on=Te.side;Te.side=$e,Te.needsUpdate=!0,oi(xe,H,X,Gt,Te,ce),Te.side=on,Te.needsUpdate=!0,se=!0}}se===!0&&(mt.updateMultisampleRenderTarget(ut),mt.updateRenderTargetMipmap(ut))}x.setRenderTarget(Ct,wt,Ht),x.setClearColor(G,V),Ot!==void 0&&(X.viewport=Ot),x.toneMapping=Ft}function Ai(T,N,H){let X=N.isScene===!0?N.overrideMaterial:null;for(let k=0,ut=T.length;k<ut;k++){let vt=T[k],Ct=vt.object,wt=vt.geometry,Ht=vt.group,Ft=vt.material;Ft.allowOverride===!0&&X!==null&&(Ft=X),Ct.layers.test(H.layers)&&oi(Ct,N,H,wt,Ft,Ht)}}function oi(T,N,H,X,k,ut){T.onBeforeRender(x,N,H,X,k,ut),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(x,N,H,X,T,ut),k.transparent===!0&&k.side===ze&&k.forceSinglePass===!1?(k.side=$e,k.needsUpdate=!0,x.renderBufferDirect(H,N,X,k,T,ut),k.side=Qn,k.needsUpdate=!0,x.renderBufferDirect(H,N,X,k,T,ut),k.side=ze):x.renderBufferDirect(H,N,X,k,T,ut),T.onAfterRender(x,N,H,X,k,ut)}function Ri(T,N,H){N.isScene!==!0&&(N=ft);let X=ht.get(T),k=p.state.lights,ut=p.state.shadowsArray,vt=k.state.version,Ct=Y.getParameters(T,k.state,ut,N,H),wt=Y.getProgramCacheKey(Ct),Ht=X.programs;X.environment=T.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(T.isMeshStandardMaterial?Tt:Vt).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Ht===void 0&&(T.addEventListener("dispose",nt),Ht=new Map,X.programs=Ht);let Ft=Ht.get(wt);if(Ft!==void 0){if(X.currentProgram===Ft&&X.lightsStateVersion===vt)return D(T,Ct),Ft}else Ct.uniforms=Y.getUniforms(T),T.onBeforeCompile(Ct,x),Ft=Y.acquireProgram(Ct,wt),Ht.set(wt,Ft),X.uniforms=Ct.uniforms;let Ot=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=dt.uniform),D(T,Ct),X.needsLights=ee(T),X.lightsStateVersion=vt,X.needsLights&&(Ot.ambientLightColor.value=k.state.ambient,Ot.lightProbe.value=k.state.probe,Ot.directionalLights.value=k.state.directional,Ot.directionalLightShadows.value=k.state.directionalShadow,Ot.spotLights.value=k.state.spot,Ot.spotLightShadows.value=k.state.spotShadow,Ot.rectAreaLights.value=k.state.rectArea,Ot.ltc_1.value=k.state.rectAreaLTC1,Ot.ltc_2.value=k.state.rectAreaLTC2,Ot.pointLights.value=k.state.point,Ot.pointLightShadows.value=k.state.pointShadow,Ot.hemisphereLights.value=k.state.hemi,Ot.directionalShadowMap.value=k.state.directionalShadowMap,Ot.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ot.spotShadowMap.value=k.state.spotShadowMap,Ot.spotLightMatrix.value=k.state.spotLightMatrix,Ot.spotLightMap.value=k.state.spotLightMap,Ot.pointShadowMap.value=k.state.pointShadowMap,Ot.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ft,X.uniformsList=null,Ft}function or(T){if(T.uniformsList===null){let N=T.currentProgram.getUniforms();T.uniformsList=Zs.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function D(T,N){let H=ht.get(T);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function W(T,N,H,X,k){N.isScene!==!0&&(N=ft),mt.resetTextureUnits();let ut=N.fog,vt=X.isMeshStandardMaterial?N.environment:null,Ct=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Bi,wt=(X.isMeshStandardMaterial?Tt:Vt).get(X.envMap||vt),Ht=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ft=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ot=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,he=!!H.morphAttributes.color,Le=ii;X.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Le=x.toneMapping);let Me=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=Me!==void 0?Me.length:0,Gt=ht.get(X),Te=p.state.lights;if(Kt===!0&&(J===!0||T!==v)){let Ye=T===v&&X.id===w;dt.setState(X,T,Ye)}let ce=!1;X.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Te.state.version||Gt.outputColorSpace!==Ct||k.isBatchedMesh&&Gt.batching===!1||!k.isBatchedMesh&&Gt.batching===!0||k.isBatchedMesh&&Gt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Gt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Gt.instancing===!1||!k.isInstancedMesh&&Gt.instancing===!0||k.isSkinnedMesh&&Gt.skinning===!1||!k.isSkinnedMesh&&Gt.skinning===!0||k.isInstancedMesh&&Gt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Gt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Gt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Gt.instancingMorph===!1&&k.morphTexture!==null||Gt.envMap!==wt||X.fog===!0&&Gt.fog!==ut||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==dt.numPlanes||Gt.numIntersection!==dt.numIntersection)||Gt.vertexAlphas!==Ht||Gt.vertexTangents!==Ft||Gt.morphTargets!==Ot||Gt.morphNormals!==se||Gt.morphColors!==he||Gt.toneMapping!==Le||Gt.morphTargetsCount!==xe)&&(ce=!0):(ce=!0,Gt.__version=X.version);let on=Gt.currentProgram;ce===!0&&(on=Ri(X,N,k));let is=!1,an=!1,ar=!1,Ae=on.getUniforms(),mn=Gt.uniforms;if(j.useProgram(on.program)&&(is=!0,an=!0,ar=!0),X.id!==w&&(w=X.id,an=!0),is||v!==T){j.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ae.setValue(L,"projectionMatrix",T.projectionMatrix),Ae.setValue(L,"viewMatrix",T.matrixWorldInverse);let en=Ae.map.cameraPosition;en!==void 0&&en.setValue(L,Et.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&Ae.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ae.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,an=!0,ar=!0)}if(k.isSkinnedMesh){Ae.setOptional(L,k,"bindMatrix"),Ae.setOptional(L,k,"bindMatrixInverse");let Ye=k.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Ae.setValue(L,"boneTexture",Ye.boneTexture,mt))}k.isBatchedMesh&&(Ae.setOptional(L,k,"batchingTexture"),Ae.setValue(L,"batchingTexture",k._matricesTexture,mt),Ae.setOptional(L,k,"batchingIdTexture"),Ae.setValue(L,"batchingIdTexture",k._indirectTexture,mt),Ae.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Ae.setValue(L,"batchingColorTexture",k._colorsTexture,mt));let gn=H.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ct.update(k,H,on),(an||Gt.receiveShadow!==k.receiveShadow)&&(Gt.receiveShadow=k.receiveShadow,Ae.setValue(L,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(mn.envMap.value=wt,mn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(mn.envMapIntensity.value=N.environmentIntensity),an&&(Ae.setValue(L,"toneMappingExposure",x.toneMappingExposure),Gt.needsLights&&_t(mn,ar),ut&&X.fog===!0&&K.refreshFogUniforms(mn,ut),K.refreshMaterialUniforms(mn,X,B,$,p.state.transmissionRenderTarget[T.id]),Zs.upload(L,or(Gt),mn,mt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Zs.upload(L,or(Gt),mn,mt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ae.setValue(L,"center",k.center),Ae.setValue(L,"modelViewMatrix",k.modelViewMatrix),Ae.setValue(L,"normalMatrix",k.normalMatrix),Ae.setValue(L,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Ye=X.uniformsGroups;for(let en=0,gl=Ye.length;en<gl;en++){let Ci=Ye[en];$t.update(Ci,on),$t.bind(Ci,on)}}return on}function _t(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function ee(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,N,H){let X=ht.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ht.get(T.texture).__webglTexture=N,ht.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:H,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){let H=ht.get(T);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};let zt=L.createFramebuffer();this.setRenderTarget=function(T,N=0,H=0){I=T,S=N,A=H;let X=!0,k=null,ut=!1,vt=!1;if(T){let wt=ht.get(T);if(wt.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)mt.setupRenderTarget(T);else if(wt.__hasExternalTextures)mt.rebindTextures(T,ht.get(T.texture).__webglTexture,ht.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ot=T.depthTexture;if(wt.__boundDepthTexture!==Ot){if(Ot!==null&&ht.has(Ot)&&(T.width!==Ot.image.width||T.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");mt.setupDepthRenderbuffer(T)}}let Ht=T.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(vt=!0);let Ft=ht.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?k=Ft[N][H]:k=Ft[N],ut=!0):T.samples>0&&mt.useMultisampledRTT(T)===!1?k=ht.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?k=Ft[H]:k=Ft,P.copy(T.viewport),U.copy(T.scissor),O=T.scissorTest}else P.copy(St).multiplyScalar(B).floor(),U.copy(Wt).multiplyScalar(B).floor(),O=Yt;if(H!==0&&(k=zt),j.bindFramebuffer(L.FRAMEBUFFER,k)&&X&&j.drawBuffers(T,k),j.viewport(P),j.scissor(U),j.setScissorTest(O),ut){let wt=ht.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,wt.__webglTexture,H)}else if(vt){let wt=N;for(let Ht=0;Ht<T.textures.length;Ht++){let Ft=ht.get(T.textures[Ht]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ht,Ft.__webglTexture,H,wt)}}else if(T!==null&&H!==0){let wt=ht.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,H)}w=-1},this.readRenderTargetPixels=function(T,N,H,X,k,ut,vt,Ct=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt){j.bindFramebuffer(L.FRAMEBUFFER,wt);try{let Ht=T.textures[Ct],Ft=Ht.format,Ot=Ht.type;if(!tt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-X&&H>=0&&H<=T.height-k&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct),L.readPixels(N,H,X,k,Nt.convert(Ft),Nt.convert(Ot),ut))}finally{let Ht=I!==null?ht.get(I).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(T,N,H,X,k,ut,vt,Ct=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=ht.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&vt!==void 0&&(wt=wt[vt]),wt)if(N>=0&&N<=T.width-X&&H>=0&&H<=T.height-k){j.bindFramebuffer(L.FRAMEBUFFER,wt);let Ht=T.textures[Ct],Ft=Ht.format,Ot=Ht.type;if(!tt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let se=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.bufferData(L.PIXEL_PACK_BUFFER,ut.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ct),L.readPixels(N,H,X,k,Nt.convert(Ft),Nt.convert(Ot),0);let he=I!==null?ht.get(I).__webglFramebuffer:null;j.bindFramebuffer(L.FRAMEBUFFER,he);let Le=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await du(L,Le,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,se),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ut),L.deleteBuffer(se),L.deleteSync(Le),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,H=0){let X=Math.pow(2,-H),k=Math.floor(T.image.width*X),ut=Math.floor(T.image.height*X),vt=N!==null?N.x:0,Ct=N!==null?N.y:0;mt.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,vt,Ct,k,ut),j.unbindTexture()};let Pe=L.createFramebuffer(),He=L.createFramebuffer();this.copyTextureToTexture=function(T,N,H=null,X=null,k=0,ut=null){ut===null&&(k!==0?(ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ut=k,k=0):ut=0);let vt,Ct,wt,Ht,Ft,Ot,se,he,Le,Me=T.isCompressedTexture?T.mipmaps[ut]:T.image;if(H!==null)vt=H.max.x-H.min.x,Ct=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,Ht=H.min.x,Ft=H.min.y,Ot=H.isBox3?H.min.z:0;else{let gn=Math.pow(2,-k);vt=Math.floor(Me.width*gn),Ct=Math.floor(Me.height*gn),T.isDataArrayTexture?wt=Me.depth:T.isData3DTexture?wt=Math.floor(Me.depth*gn):wt=1,Ht=0,Ft=0,Ot=0}X!==null?(se=X.x,he=X.y,Le=X.z):(se=0,he=0,Le=0);let xe=Nt.convert(N.format),Gt=Nt.convert(N.type),Te;N.isData3DTexture?(mt.setTexture3D(N,0),Te=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(mt.setTexture2DArray(N,0),Te=L.TEXTURE_2D_ARRAY):(mt.setTexture2D(N,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);let ce=L.getParameter(L.UNPACK_ROW_LENGTH),on=L.getParameter(L.UNPACK_IMAGE_HEIGHT),is=L.getParameter(L.UNPACK_SKIP_PIXELS),an=L.getParameter(L.UNPACK_SKIP_ROWS),ar=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ht),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ot);let Ae=T.isDataArrayTexture||T.isData3DTexture,mn=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){let gn=ht.get(T),Ye=ht.get(N),en=ht.get(gn.__renderTarget),gl=ht.get(Ye.__renderTarget);j.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,gl.__webglFramebuffer);for(let Ci=0;Ci<wt;Ci++)Ae&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.get(T).__webglTexture,k,Ot+Ci),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.get(N).__webglTexture,ut,Le+Ci)),L.blitFramebuffer(Ht,Ft,vt,Ct,se,he,vt,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||T.isRenderTargetTexture||ht.has(T)){let gn=ht.get(T),Ye=ht.get(N);j.bindFramebuffer(L.READ_FRAMEBUFFER,Pe),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,He);for(let en=0;en<wt;en++)Ae?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gn.__webglTexture,k,Ot+en):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gn.__webglTexture,k),mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ye.__webglTexture,ut,Le+en):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ye.__webglTexture,ut),k!==0?L.blitFramebuffer(Ht,Ft,vt,Ct,se,he,vt,Ct,L.COLOR_BUFFER_BIT,L.NEAREST):mn?L.copyTexSubImage3D(Te,ut,se,he,Le+en,Ht,Ft,vt,Ct):L.copyTexSubImage2D(Te,ut,se,he,Ht,Ft,vt,Ct);j.bindFramebuffer(L.READ_FRAMEBUFFER,null),j.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mn?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Te,ut,se,he,Le,vt,Ct,wt,xe,Gt,Me.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,ut,se,he,Le,vt,Ct,wt,xe,Me.data):L.texSubImage3D(Te,ut,se,he,Le,vt,Ct,wt,xe,Gt,Me):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ut,se,he,vt,Ct,xe,Gt,Me.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ut,se,he,Me.width,Me.height,xe,Me.data):L.texSubImage2D(L.TEXTURE_2D,ut,se,he,vt,Ct,xe,Gt,Me);L.pixelStorei(L.UNPACK_ROW_LENGTH,ce),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,on),L.pixelStorei(L.UNPACK_SKIP_PIXELS,is),L.pixelStorei(L.UNPACK_SKIP_ROWS,an),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ar),ut===0&&N.generateMipmaps&&L.generateMipmap(Te),j.unbindTexture()},this.initRenderTarget=function(T){ht.get(T).__webglFramebuffer===void 0&&mt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?mt.setTextureCube(T,0):T.isData3DTexture?mt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?mt.setTexture2DArray(T,0):mt.setTexture2D(T,0),j.unbindTexture()},this.resetState=function(){S=0,A=0,I=null,j.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Ju={type:"change"},Vc={type:"start"},$u={type:"end"},fl=new ti,Ku=new xn,U_=Math.cos(70*je.DEG2RAD),Be=new C,sn=2*Math.PI,_e={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hc=1e-6,$s=class extends jr{constructor(t,e=null){super(t,e),this.state=_e.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new yn,this._lastTargetPosition=new C,this._quat=new yn().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ks,this._sphericalDelta=new ks,this._scale=1,this._panOffset=new C,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new C,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=F_.bind(this),this._onPointerDown=N_.bind(this),this._onPointerUp=O_.bind(this),this._onContextMenu=W_.bind(this),this._onMouseWheel=z_.bind(this),this._onKeyDown=H_.bind(this),this._onTouchStart=V_.bind(this),this._onTouchMove=G_.bind(this),this._onMouseDown=B_.bind(this),this._onMouseMove=k_.bind(this),this._interceptControlDown=X_.bind(this),this._interceptControlUp=q_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ju),this.update(),this.state=_e.NONE}update(t=null){let e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===_e.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=sn:n>Math.PI&&(n-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Be.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fl.origin.copy(this.object.position),fl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fl.direction))<U_?this.object.lookAt(this.target):(Ku.setFromNormalAndCoplanarPoint(this.object.up,this.target),fl.intersectPlane(Ku,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hc||this._lastTargetPosition.distanceToSquared(this.target)>Hc?(this.dispatchEvent(Ju),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?sn/60*this.autoRotateSpeed*t:sn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Be.copy(s).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/e.clientHeight),this._rotateUp(sn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function N_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function F_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function O_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($u),this.state=_e.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function B_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_e.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_e.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_e.PAN}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Vc)}function k_(i){switch(this.state){case _e.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _e.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function z_(i){this.enabled===!1||this.enableZoom===!1||this.state!==_e.NONE||(i.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($u))}function H_(i){this.enabled!==!1&&this._handleKeyDown(i)}function V_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_e.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_e.TOUCH_PAN;break;default:this.state=_e.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_e.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_e.TOUCH_DOLLY_ROTATE;break;default:this.state=_e.NONE}break;default:this.state=_e.NONE}this.state!==_e.NONE&&this.dispatchEvent(Vc)}function G_(i){switch(this._trackPointer(i),this.state){case _e.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _e.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _e.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _e.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_e.NONE}}function W_(i){this.enabled!==!1&&i.preventDefault()}function X_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Si=i=>'<svg viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">'+i+"</svg>",Jt=[{id:"fabric",name:"\u5BA2\u5385 \xB7 \u5E03\u827A\u7115\u65B0",title:"\u628A\u67D4\u8F6F\uFF0C\u91CD\u65B0\u627E\u56DE\u6765\u3002",english:"01 / THE SOFT RESET",product:"PUZZI 8-1",type:"\u5E03\u827A\u55B7\u62BD\u673A",fact:"\u55B7\u96FE\u8403\u53D6\u4E0E\u6C61\u6C34\u56DE\u6536\uFF0C\u7528\u4E8E\u7EC7\u7269\u5EA7\u6905\u3001\u6C99\u53D1\u7B49\u6E05\u6D17\u3002\u5B98\u7F51\u8D44\u6599\u540D\uFF1APuzzi 8/1 C\u3002",link:"https://www.kahechina.com/products/pro-spray-extraction/puzzi81c.html",tool:"\u5E03\u827A\u55B7\u62BD\u5438\u5934",hint:"\u55B7\u62BD\u5E26\u8D70\u6C61\u6E0D\uFF1B\u505C\u6B62\u55B7\u6C34\u540E\u8865\u5145\u62BD\u5438\uFF0C\u51CF\u5C11\u6B8B\u7559\u6C34\u5206",caption:"\u4E00\u5F20\u65E7\u6C99\u53D1\uFF0C\u4E5F\u503C\u5F97\u4E00\u4E2A\u65B0\u7684\u4E0B\u5348\u3002",task:"\u55B7\u62BD\u6E05\u6D01\u540E\u89C2\u5BDF\u6E7F\u75D5\uFF0C\u5207\u6362\u4EC5\u62BD\u5438\u6536\u4F59\u6C34\uFF1B\u5B8C\u6210\u540E\u901A\u98CE\u667E\u5E72\u3002",symbol:"\u21A5",color:12297853,bg:15001820,modes:[{id:"extract",label:"\u55B7\u62BD\u6E05\u6D01",rx:.23,ry:.14,speed:1.9},{id:"suction",label:"\u4EC5\u62BD\u5438 \xB7 \u6536\u4F59\u6C34",rx:.23,ry:.14,speed:2.8}],icon:Si('<rect x="10" y="29" width="60" height="27" rx="8" fill="#aaa084"/><rect x="17" y="14" width="46" height="28" rx="8" fill="#c9c0a2"/><rect x="8" y="34" width="10" height="23" rx="4" fill="#8c836a"/><rect x="62" y="34" width="10" height="23" rx="4" fill="#8c836a"/><path d="M17 57v7m46-7v7" stroke="#5e594a" stroke-width="4"/>'),art:Si('<rect x="10" y="26" width="41" height="30" rx="8" fill="#5b6060"/><rect x="15" y="20" width="31" height="17" rx="5" fill="#e4d02c"/><rect x="17" y="11" width="23" height="11" rx="5" stroke="#393d3b" stroke-width="4"/><circle cx="17" cy="57" r="6" fill="#292c29"/><circle cx="44" cy="57" r="6" fill="#292c29"/><path d="M47 35C75 63 75 9 62 19" stroke="#454b47" stroke-width="5"/><path d="M57 18h14l4 8H55z" fill="#a9c2bd"/>')},{id:"window",name:"\u7A97\u8FB9 \xB7 \u901A\u900F\u65F6\u523B",title:"\u7A97\u4EAE\u4E86\uFF0C\u5FC3\u60C5\u4E5F\u4EAE\u4E86\u3002",english:"02 / A CLEARER DAY",product:"WV 2",type:"\u955C\u9762\u6E05\u6D01\u673A",fact:"\u8F85\u52A9\u55B7\u74F6\u4E0E\u6E05\u6D01\u5E03\u8D1F\u8D23\u9884\u6E05\u6D01\uFF1BWV 2 \u5438\u8D70\u73BB\u7483\u4E0A\u7684\u6C61\u6C34\u3002\u89C2\u5BDF\u72B6\u6001\u9009\u62E9\u6B65\u9AA4\u3002",link:"https://www.kahechina.com/products/home-indoor-window-cleaner/WV2.html",tool:"\u5BBD\u5E45\u522E\u5438\u5934",hint:"\u5E72\u624B\u5370\u5148\u55B7\u3001\u518D\u64E6\uFF1B\u6E7F\u6C61\u819C\u548C\u51B7\u51DD\u6C34\u53EF\u76F4\u63A5\u5438\u9664",caption:"\u628A\u773C\u524D\u64E6\u4EAE\uFF0C\u8BA9\u7A97\u5916\u8D70\u8FDB\u6765\u3002",task:"\u89C2\u5BDF\u5E72\u624B\u5370\u3001\u6E7F\u6C61\u819C\u4E0E\u51B7\u51DD\u6C34\uFF0C\u9009\u62E9\u55B7\u3001\u64E6\u6216\u5438\uFF0C\u6062\u590D\u901A\u900F\u3002",symbol:"\u229F",color:11654869,bg:14937062,modes:[{id:"spray",label:"\u8F85\u52A9\u55B7\u74F6 \xB7 \u55B7",rx:.28,ry:.22,speed:2.8},{id:"glass-wipe",label:"\u6E05\u6D01\u5E03 \xB7 \u64E6",rx:.29,ry:.17,speed:2.8},{id:"squeegee",label:"WV 2 \xB7 \u5438",rx:.32,ry:.1,speed:3.7}],icon:Si('<rect x="16" y="7" width="48" height="54" rx="3" fill="#abcaca" stroke="#718d85" stroke-width="4"/><path d="M40 9v51M17 34h46" stroke="#f5f0df" stroke-width="4"/><path d="m23 17 9-4m12 38 12-6" stroke="#edf6f2" stroke-width="3"/><path d="M10 63h60" stroke="#718d85" stroke-width="4"/>'),art:Si('<path d="M25 19h30l-4 15-7 2 6 22H30l5-22-7-2z" fill="#e6d129"/><rect x="14" y="11" width="51" height="9" rx="3" fill="#343d38"/><rect x="22" y="18" width="36" height="6" rx="3" fill="#8da19b"/><path d="M37 34h9v20h-9z" fill="#738780"/><path d="M31 58h18" stroke="#343d38" stroke-width="5"/>')},{id:"steam",name:"\u53A8\u623F \xB7 \u6E05\u723D\u4E00\u523B",title:"\u8BA9\u5C0F\u53A8\u623F\uFF0C\u8F7B\u677E\u547C\u5438\u3002",english:"03 / STEAM & SERENITY",product:"SC4D",type:"\u591A\u529F\u80FD\u84B8\u6C7D\u6E05\u6D01\u673A",fact:"\u84B8\u6C7D\u6E05\u6D01\u4EA7\u54C1\u3002\u5BF9\u5E94\u5B98\u7F51 SC 4 Deluxe\uFF1B\u672C\u5173\u7528\u8010\u6C34\u786C\u8D28\u74F7\u7816\u8868\u73B0\u84B8\u6C7D\u4E0E\u64E6\u62ED\u8FC7\u7A0B\u3002",link:"https://www.kahechina.com/products/home-steam-cleaner/SC4Deluxe.html",tool:"\u84B8\u6C7D\u7EC6\u8282\u5237",hint:"\u84B8\u6C7D\u6162\u6162\u677E\u52A8\u6CB9\u57A2\uFF0C\u518D\u7528\u64E6\u62ED\u6A21\u5F0F\u6536\u5C3E",caption:"\u5728\u7EC6\u5C0F\u7684\u7F1D\u9699\u91CC\uFF0C\u627E\u56DE\u6E05\u723D\u3002",task:"\u5148\u84B8\u6C7D\u677E\u52A8\uFF0C\u518D\u64E6\u62ED\u79FB\u9664\uFF1B\u4E0D\u7528\u7740\u6025\u3002",symbol:"\u224B",color:13687495,bg:15263707,modes:[{id:"steam",label:"\u84B8\u6C7D\u677E\u52A8",rx:.2,ry:.2,speed:0},{id:"wipe",label:"\u64E6\u62ED\u6536\u5C3E",rx:.27,ry:.15,speed:2.8}],icon:Si('<rect x="11" y="10" width="58" height="34" rx="3" fill="#bccabc"/><path d="M12 26h56M29 10v33M49 10v33" stroke="#eef0e4" stroke-width="3"/><rect x="8" y="44" width="64" height="7" rx="2" fill="#8c9486"/><rect x="12" y="51" width="56" height="15" rx="2" fill="#c9baa0"/>'),art:Si('<rect x="14" y="27" width="42" height="27" rx="9" fill="#e6d12d"/><rect x="19" y="22" width="33" height="9" rx="4" fill="#3e4540"/><path d="M27 23v-9h18v9" stroke="#3e4540" stroke-width="4"/><circle cx="21" cy="56" r="7" fill="#343a36"/><circle cx="50" cy="56" r="6" fill="#343a36"/><path d="M53 36C75 52 77 15 64 18" stroke="#434b45" stroke-width="4"/><path d="m62 13 5 10" stroke="#343a36" stroke-width="6"/>')},{id:"outdoor",name:"\u6237\u5916 \xB7 \u51FA\u53D1\u4E4B\u524D",title:"\u6D17\u53BB\u6CE5\u6CDE\uFF0C\u8F7B\u88C5\u51FA\u53D1\u3002",english:"04 / READY TO GO",product:"KHB AIR",type:"\u65E0\u7EBF\u6298\u53E0\u6E05\u6D17\u673A",fact:"\u5B98\u7F51\u8D44\u6599\u4ECB\u7ECD\u65E0\u7EBF\u6298\u53E0\u7ED3\u6784\u4E0E\u591A\u79CD\u6C34\u578B\uFF0C\u53EF\u7528\u4E8E\u8F66\u8F86\u3001\u82B1\u56ED\u5BB6\u5177\u7B49\u6237\u5916\u573A\u666F\u3002",link:"https://www.kahechina.com/article/karcher-story/springKHB.html",tool:"\u65E0\u7EBF\u51B2\u6D17\u55B7\u5934",hint:"\u6247\u5F62\u51B2\u6D17\u8986\u76D6\u5927\u9762\u79EF\uFF0C\u96C6\u4E2D\u6C34\u675F\u6E05\u7406\u8F66\u67B6\u548C\u8FB9\u7F18",caption:"\u7559\u4F4F\u51FA\u6E38\u7684\u5FEB\u4E50\uFF0C\u51B2\u8D70\u5E26\u56DE\u7684\u6CE5\u70B9\u3002",task:"\u51B2\u6D17\u524D\u540E\u8F6E\u3001\u8F66\u67B6\u3001\u6321\u6CE5\u677F\u4E0E\u8F66\u5EA7\u8F66\u628A\uFF0C\u8BA9\u6574\u8F86\u8F66\u7115\u65B0\u3002",symbol:"\u2301",color:8623500,bg:15002331,modes:[{id:"fan",label:"\u6247\u5F62\u51B2\u6D17",rx:.32,ry:.17,speed:2.1},{id:"jet",label:"\u96C6\u4E2D\u6C34\u675F",rx:.12,ry:.12,speed:4}],icon:Si('<circle cx="20" cy="49" r="13" stroke="#5c685c" stroke-width="4"/><circle cx="62" cy="49" r="13" stroke="#5c685c" stroke-width="4"/><path d="m20 49 14-24 14 24H20l30-15 12 15-9-30h9M28 24h13" stroke="#b5a04c" stroke-width="4" stroke-linejoin="round"/>'),art:Si('<path d="m14 23 38 1 13 8-5 8-24-1-4 22H20l5-26z" fill="#e4d02c"/><rect x="52" y="23" width="20" height="11" rx="3" fill="#3b423c"/><path d="m16 22 21 3-4 9-17-2z" fill="#4d554b"/><path d="M19 58h16v6H19z" fill="#343c36"/><path d="M71 25h5v8h-5z" fill="#82988b"/>')}];var oo=new C;function wn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;oo.copy(t),oo[n]=0,oo.normalize();let c=.5*o/(o+a),h=1-oo.angleTo(i)/l;return Math.sign(oo[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Wn=class i extends mi{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,h=new C(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,_=new C,g=.5/o;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*r,u[p+1]=h.y*Math.sign(l.y)+c.y*r,u[p+2]=h.z*Math.sign(l.z)+c.z*r,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:_.set(1,0,0),f[M+0]=wn(_,c,"z","y",r,n),f[M+1]=1-wn(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),f[M+0]=1-wn(_,c,"z","y",r,n),f[M+1]=1-wn(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),f[M+0]=1-wn(_,c,"x","z",r,t),f[M+1]=wn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[M+0]=1-wn(_,c,"x","z",r,t),f[M+1]=1-wn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[M+0]=1-wn(_,c,"x","y",r,t),f[M+1]=1-wn(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),f[M+0]=wn(_,c,"x","y",r,t),f[M+1]=1-wn(_,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function ju(i){let t=document.createElement("canvas");t.width=384,t.height=512;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,512);n.addColorStop(0,"#90bdc6"),n.addColorStop(.6,"#d6e5d6"),n.addColorStop(1,"#819f82"),e.fillStyle=n,e.fillRect(0,0,384,512),e.save(),e.translate(-i*384,0),e.fillStyle="#f8edc8",e.beginPath(),e.arc(550,100,35,0,Math.PI*2),e.fill();for(let o=0;o<11;o++){let a=o*80-35,l=70+(Math.sin(o*3.7)+1)*45;e.fillStyle=o%2?"#a8bcaf":"#b6c5b4",e.fillRect(a,300-l,64,l),e.fillStyle="#dce1ca";for(let c=315-l;c<295;c+=23)for(let h=12;h<55;h+=20)e.fillRect(a+h,c,9,12)}e.fillStyle="#8faa8e",e.beginPath(),e.moveTo(0,335);for(let o=0;o<=780;o+=20)e.lineTo(o,310+Math.sin(o*.013)*19);e.lineTo(780,512),e.lineTo(0,512),e.fill();for(let o=0;o<8;o++){let a=o*108+20,l=375+Math.sin(o*2)*20;e.fillStyle="#6f8e72",e.fillRect(a-3,l-45,6,104),e.fillStyle=o%2?"#7b9e7d":"#8bad83";for(let c=0;c<3;c++)e.beginPath(),e.ellipse(a+(c-1)*17,l-38+c%2*15,29,38,0,0,Math.PI*2),e.fill()}e.strokeStyle="#d5d6b3",e.lineWidth=23,e.beginPath(),e.moveTo(570,340),e.bezierCurveTo(600,410,330,430,400,512),e.stroke(),e.restore();let s=e.createLinearGradient(0,0,384,512);s.addColorStop(0,"#fff8"),s.addColorStop(.25,"#fff0"),s.addColorStop(.7,"#fff0"),s.addColorStop(1,"#e4f1e626"),e.fillStyle=s,e.fillRect(0,0,384,512);let r=new Ke(t);return r.colorSpace=ye,r}function Qu(i,t,e,n=0){["window","fabric"].includes(t)&&i.forEach((s,r)=>{let o=new Float32Array(36864),a=new Float32Array(36864),l=new Float32Array(36864),c=new Float32Array(36864),h=new Uint8Array(36864),u=(n||0)%101/101*.18;for(let d=0;d<o.length;d++){if(!s.initial[d]){s.wet[d]=0;continue}let f=d%192/192,m=Math.floor(d/192)/192,_=!1,g=!1;t==="window"?(g=e?.id==="rain-window"?r===1&&f>.38:!e&&f>.72,_=e?.id==="rain-window"||(e?.dry?f<.2+u:f>.38+u),s.wet[d]=_?1:0,o[d]=_?0:s.initial[d],h[d]=g?2:_?1:0):(o[d]=s.initial[d],s.wet[d]=0,h[d]=e?.id==="paw-weekend"&&Math.sin(f*17+m*13+u*8)>.1?1:0),l[d]=s.wet[d],c[d]=o[d],a[d]=t==="window"&&_?.35:0}s.process={kind:t,bound:o,best:a,initialWet:l,initialBound:c,type:h,recovered:0,baseRGB:new Uint8ClampedArray(s.image.data)},s.lastAction={useful:0,changed:!1,recovered:0,removed:0},s.changed=!0,s.refresh()})}function td(i,t,e,n,s,r){let o=i.process,a=t.x*192,l=(1-t.y)*192,c=e/i.width*192,h=n/i.height*192,u={useful:0,changed:!1,recovered:0,removed:0};for(let d=Math.max(0,Math.floor(l-h));d<Math.min(192,Math.ceil(l+h));d++)for(let f=Math.max(0,Math.floor(a-c));f<Math.min(192,Math.ceil(a+c));f++){let m=((f-a)/c)**2+((d-l)/h)**2,_=d*192+f,g=i.initial[_];if(m>=1||!g)continue;let p=(1-m)*s,M=i.wet[_],y=i.remaining[_],x=o.bound[_],E=0,S=0;if(o.kind==="window")r==="spray"?i.wet[_]=Math.min(1,M+p*2.8):r==="glass-wipe"&&M>.12?o.bound[_]=Math.max(0,x-p*2.5*Math.min(1,M*2)):r==="squeegee"&&M>.001&&(E=Math.min(Math.max(0,y-x),p*4*Math.max(.25,M)),S=Math.min(M,p*.85),i.wet[_]-=S);else if(r==="extract"){let P=Math.min(1-M,p*2);i.wet[_]+=P,S=Math.min(i.wet[_],p*.5),i.wet[_]-=S,o.bound[_]=Math.max(0,x-p*(o.type[_]?1.3:2.6)*i.wet[_]),E=Math.min(Math.max(0,y-o.bound[_]),p*2.5)}else r==="suction"&&(S=Math.min(Math.max(0,M-.06),p*1.7),i.wet[_]-=S,M>.06&&(E=Math.min(Math.max(0,y-x),p*2)));i.remaining[_]=Math.max(0,y-E),o.bound[_]=Math.min(o.bound[_],i.remaining[_]),i.left-=E,u.removed+=E,u.recovered+=S*g;let A=1-i.remaining[_]/g,I=1-o.bound[_]/g,w=o.kind==="window"?.15*Math.min(1,i.wet[_]/.6)*(1-I)+.35*I+.65*A*(1-i.wet[_]):A*(.75+.25*(1-i.wet[_])),v=Math.max(0,w-o.best[_]);o.best[_]=Math.max(o.best[_],w),v>1e-6&&(u.useful+=v*g),Math.abs(i.wet[_]-M)+E+Math.abs(o.bound[_]-x)>1e-7&&(u.changed=!0)}return o.recovered+=u.recovered,i.left=Math.max(0,i.left),i.lastAction=u,i.changed||=u.changed,u.removed}function ns(i){let t=0,e=0,n=0,s=0,r=0,o=0,a=0;for(let l of i){if(!l.process||!l.total)continue;let c=l.process;t+=l.total,a+=c.recovered;for(let h=0;h<l.initial.length;h++){let u=l.initial[h];if(!u)continue;e+=l.remaining[h],n+=l.wet[h]*u,s+=c.bound[h],c.bound[h]>.02&&l.wet[h]>.12&&(r+=c.bound[h]);let d=c.kind==="fabric"?Math.max(0,(l.wet[h]-.06)/.94):l.wet[h];if(c.kind==="window"){let f=1-l.remaining[h]/u,m=1-c.bound[h]/u,_=c.initialBound[h]===0?.35:0,g=.15*Math.min(1,l.wet[h]/.6)*(1-m)+.35*m+.65*f*(1-l.wet[h]);o+=u*Math.max(0,(g-_)/(1-_))}else o+=(u-l.remaining[h])*(.75+.25*(1-d))}}return{total:t,dirt:t?e/t:0,wet:t?n/t:0,bound:t?s/t:0,ready:t?r/t:0,percent:t?Math.max(0,Math.min(100,o/t*100)):0,recovered:t?a/t:0,done:t>0&&e/t<=.025&&n/t<=(i.find(l=>l.process)?.process.kind==="fabric"?.1:.035)}}function ed(i,t,e){let n=i.process,s=i.initial[t],r=e?s:i.remaining[t],o=e?n.initialWet[t]:i.wet[t],a=e?n.initialBound[t]:n.bound[t];if(n.kind==="window"){let d=s?a/s:0;return{r:105+d*26,g:159-d*42,b:177-d*83,alpha:Math.min(1,r*(n.type[t]===2?.22:.38+d*.5)+o*Math.min(1,s*3)*.17)}}let l=t%192,c=Math.floor(t/192),h=(l%3===0?6:0)+(c%3===0?4:0),u=s>0&&s<.55?12:0;return{r:116+h+u-o*35,g:86+h+u-o*27,b:52+h-o*8,alpha:Math.min(1,r*.88+o*Math.min(1,s*3)*.31)}}var qt=192;function Y_(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var js=class{constructor(t,{width:e,height:n,position:s,rotation:r=[0,0,0],kind:o="mud",seed:a=1,shape:l="rect",geometry:c=null,coverage:h=null,partId:u=null,partLabel:d=null}){this.width=e,this.height=n,this.kind=o,this.partId=u,this.partLabel=d,this.partDone=!1,this.canvas=document.createElement("canvas"),this.canvas.width=this.canvas.height=qt,this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0});let f=this.ctx,m=Y_(a),_=f.createLinearGradient(0,0,qt,qt);_.addColorStop(0,o==="glass"?"rgba(120,119,99,.40)":"rgba(93,64,34,.38)"),_.addColorStop(1,o==="glass"?"rgba(155,135,103,.6)":"rgba(101,65,30,.58)"),f.fillStyle=_,f.fillRect(3,3,qt-6,qt-6);for(let p=0;p<65;p++){let M=m()*qt,y=m()*qt,x=4+m()*22;f.beginPath(),f.ellipse(M,y,x,x*(.3+m()*.8),m()*3,0,Math.PI*2),f.fillStyle=o==="glass"?"rgba(115,104,87,"+(.1+m()*.22)+")":"rgba("+(60+Math.floor(m()*30))+",48,27,"+(.14+m()*.4)+")",f.fill()}if(o==="glass")for(let p=0;p<22;p++){f.strokeStyle="rgba(235,234,210,.4)",f.lineWidth=1,f.beginPath();let M=m()*qt;f.moveTo(M,0),f.lineTo(M+4,qt),f.stroke()}let g=h?h.getContext("2d").getImageData(0,0,qt,qt).data:null;this.image=f.getImageData(0,0,qt,qt),this.initial=new Float32Array(qt*qt),this.remaining=new Float32Array(qt*qt),this.wet=new Float32Array(qt*qt),this.total=0,this.left=0,this.loosened=0;for(let p=0;p<qt;p++)for(let M=0;M<qt;M++){let y=p*qt+M,x=this.image.data[y*4+3]/255,E=Math.min(M,p,qt-1-M,qt-1-p);x*=g?g[y*4+3]/255:Math.min(1,Math.max(0,(E-2)/6)),l==="circle"&&Math.hypot((M-qt/2)/(qt/2-3),(p-qt/2)/(qt/2-3))>1&&(x=0),this.initial[y]=this.remaining[y]=x,this.image.data[y*4+3]=Math.round(x*255),this.total+=x,this.wet[y]=o==="glass"?1:0}if(this.left=this.total,f.putImageData(this.image,0,0),this.texture=new Ke(this.canvas),this.texture.colorSpace=ye,this.texture.minFilter=hn,this.texture.generateMipmaps=!1,this.material=new Ue({map:this.texture,transparent:!0,depthWrite:!1,roughness:o==="grease"?.35:o==="glass"?.25:.94,polygonOffset:!0,polygonOffsetFactor:-2}),this.mesh=new re(c||new Sn(e,n),this.material),this.mesh.position.set(...s),this.mesh.rotation.set(...r),this.mesh.userData.surface=this,t.add(this.mesh),this.changed=!1,this.hitMesh=this.mesh,c&&(this.hitMesh=new re(new Sn(e,n),new Ve({visible:!1})),this.hitMesh.position.copy(this.mesh.position),this.hitMesh.position.z+=.22,this.hitMesh.userData.surface=this,t.add(this.hitMesh)),this.probeUVs=[],g)for(let p=8;p<qt;p+=12)for(let M=8;M<qt;M+=12)this.initial[p*qt+M]>.04&&this.probeUVs.push({u:M/qt,v:1-p/qt});o==="grease"&&(this.changed=!0,this.refresh())}acceptsUV(t,e,n){if(!this.partId)return!0;let s=t.x*qt,r=(1-t.y)*qt,o=e/this.width*qt,a=n/this.height*qt;for(let l=Math.max(0,Math.floor(r-a));l<Math.min(qt,Math.ceil(r+a));l+=2)for(let c=Math.max(0,Math.floor(s-o));c<Math.min(qt,Math.ceil(s+o));c+=2)if(((c-s)/o)**2+((l-r)/a)**2<1&&this.initial[l*qt+c]>.02)return!0;return!1}paint(t,e,n,s,r){if(this.process)return td(this,t,e,n,s,r);let o=t.x*qt,a=(1-t.y)*qt,l=e/this.width*qt,c=n/this.height*qt,h=0;for(let u=Math.max(0,Math.floor(a-c));u<Math.min(qt,Math.ceil(a+c));u++)for(let d=Math.max(0,Math.floor(o-l));d<Math.min(qt,Math.ceil(o+l));d++){let f=((d-o)/l)**2+((u-a)/c)**2;if(f>=1)continue;let m=u*qt+d;if(this.initial[m]===0)continue;let _=(1-f)*s;if(r==="steam"||r==="spray"){let g=Math.min(1-this.wet[m],_*3);this.wet[m]+=g,this.loosened+=g*this.initial[m]}else{let g=this.kind==="grease"?this.wet[m]:this.kind==="glass"?this.requiresWet?this.wet[m]:.25+.75*this.wet[m]:1,p=Math.min(this.remaining[m],_*g);this.remaining[m]-=p,this.left-=p,h+=p}}return this.changed=!0,h}refresh(t=!1){if(!(!this.changed&&!t)){for(let e=0;e<this.remaining.length;e++){if(this.process){let n=ed(this,e,t);this.image.data.set([n.r,n.g,n.b,Math.round(n.alpha*255)],e*4);continue}if(this.image.data[e*4+3]=Math.round((t?this.initial[e]:this.remaining[e])*255),this.kind==="grease"){let n=e%qt,s=Math.floor(e/qt),r=n%32<3||s%64<4,o=Math.sin(n*.18+s*.07)*6,a=t?0:this.wet[e];this.image.data[e*4]=r?84:153+o-a*24,this.image.data[e*4+1]=r?74:119+o+a*12,this.image.data[e*4+2]=r?50:62+a*46}}this.ctx.putImageData(this.image,0,0),this.texture.needsUpdate=!0,this.changed=!1}}finish(){this.process&&(this.process.bound.fill(0),this.wet.fill(this.process.kind==="fabric"?.06:0)),this.remaining.fill(0),this.left=0,this.changed=!0,this.refresh()}reset(){this.partDone=!1,this.remaining.set(this.initial),this.left=this.total,this.wet.fill(this.kind==="glass"?1:0),this.loosened=0,this.process&&(this.wet.set(this.process.initialWet),this.process.bound.set(this.process.initialBound),this.process.best.fill(0),this.process.recovered=0),this.changed=!0,this.refresh()}dispose(){this.hitMesh!==this.mesh&&(this.hitMesh.geometry.dispose(),this.hitMesh.material.dispose()),this.mesh.geometry.dispose(),this.material.dispose(),this.texture.dispose()}};function id(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ve,c=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=i[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=nd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let _=0;_<o[h].length;++_)f.push(o[h][_][d]);let m=nd(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function nd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Ee(o,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<e;m++){let _=h.getComponent(d,m);a.setComponent(d+u,m,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}function sd(i){let t=new Se;t.name="washable-bicycle",t.position.set(-.45,.045,.5),t.scale.setScalar(1.4),i.add(t);let e=(M,y={})=>new Ue({color:M,roughness:.6,...y}),n=e(14923299,{metalness:.25,roughness:.3}),s=e(2635055),r=e(11055788,{metalness:.7,roughness:.3}),o=e(3491389),a=e(6324086,{metalness:.25,roughness:.35}),l=new Map([["rear-wheel",{label:"\u540E\u8F6E",meshes:[]}],["front-wheel",{label:"\u524D\u8F6E",meshes:[]}],["frame",{label:"\u8F66\u67B6",meshes:[]}],["fenders",{label:"\u6321\u6CE5\u677F",meshes:[]}],["cockpit",{label:"\u8F66\u5EA7\u4E0E\u8F66\u628A",meshes:[]}]]);function c(M,y,x,E){let S=new re(M,y);return S.position.set(...x),S.castShadow=!0,S.receiveShadow=!0,t.add(S),E&&l.get(E).meshes.push(S),S}function h(M,y,x,E=n,S="frame"){let A=new C(...M),I=new C(...y),w=I.clone().sub(A),v=c(new bn(x,x,w.length(),12),E,A.add(I).multiplyScalar(.5).toArray(),S);return v.quaternion.setFromUnitVectors(new C(0,1,0),w.normalize()),v}let u=[-.85,.59,0],d=[.85,.59,0],f=[-.12,.54,0],m=[-.43,1.25,0],_=[.55,1.26,0];for(let[M,y]of[[u,"rear-wheel"],[d,"front-wheel"]]){c(new dn(.53,.055,12,64),s,M,y),c(new dn(.465,.014,8,48),r,M,y);let x=c(new bn(.045,.045,.15,16),r,M);x.rotation.x=Math.PI/2;for(let S=0;S<18;S++){let A=S*Math.PI/9;h([M[0],M[1],.02],[M[0]+Math.cos(A)*.46,M[1]+Math.sin(A)*.46,.02],.0055,r,null)}let E=c(new dn(.617,.032,10,44,Math.PI*.79),a,[M[0],M[1],.005],"fenders");E.rotation.z=Math.PI*.105}[[u,m],[m,f],[f,u],[m,_],[_,f]].forEach(([M,y])=>h(M,y,.037));for(let M of[-.07,.07])h([.55,1.26,M],[.85,.59,M],.024),h([-.12,.54,M],[-.85,.59,M],.02);h(m,[-.48,1.43,0],.025,r,"cockpit"),c(new Wn(.39,.075,.23,3,.025),o,[-.49,1.45,0],"cockpit"),h(_,[.48,1.51,0],.026,r,"cockpit"),h([.48,1.51,0],[.65,1.56,0],.025,r,"cockpit"),h([.65,1.56,-.25],[.65,1.56,.25],.023,r,"cockpit");for(let M of[-.22,.22])h([.65,1.56,M-.065],[.65,1.56,M+.065],.033,o,"cockpit");c(new dn(.12,.02,8,24),r,[-.12,.54,.09]),h([-.12,.54,.1],[.05,.39,.1],.018,r,null),h([-.12,.54,-.1],[-.29,.69,-.1],.018,r,null),c(new Wn(.16,.045,.13,2,.012),o,[.05,.39,.16]),c(new Wn(.16,.045,.13,2,.012),o,[-.29,.69,-.16]),h([-.12,.65,.07],[-.85,.63,.07],.008,o,null),h([-.12,.42,.07],[-.85,.55,.07],.008,o,null),h([-.14,.53,-.05],[-.26,.04,-.32],.017,o,null);let g=[],p=85;for(let[M,y]of l){let x=y.meshes.map(B=>{B.updateMatrix();let et=B.geometry.clone(),lt=et.index?et.toNonIndexed():et;return lt!==et&&et.dispose(),lt.applyMatrix4(B.matrix),lt.clearGroups(),lt}),E=id(x,!1);x.forEach(B=>B.dispose()),E.computeBoundingBox();let S=E.boundingBox,A=S.getCenter(new C),I=S.max.x-S.min.x+.08,w=S.max.y-S.min.y+.08;E.translate(-A.x,-A.y,0);let v=E.getAttribute("position"),P=E.getAttribute("normal"),U=new Float32Array(v.count*2);for(let B=0;B<v.count;B++)U[B*2]=v.getX(B)/I+.5,U[B*2+1]=v.getY(B)/w+.5,v.setXYZ(B,v.getX(B)+P.getX(B)*.0025,v.getY(B)+P.getY(B)*.0025,v.getZ(B)+P.getZ(B)*.0025);E.setAttribute("uv",new Ee(U,2)),E.computeBoundingSphere();let O=document.createElement("canvas");O.width=O.height=192;let G=O.getContext("2d");G.fillStyle="#fff";let V=E.index,q=V?V.count:v.count;for(let B=0;B<q;B+=3){G.beginPath();for(let et=0;et<3;et++){let lt=V?V.getX(B+et):B+et,St=U[lt*2]*192,Wt=(1-U[lt*2+1])*192;et?G.lineTo(St,Wt):G.moveTo(St,Wt)}G.closePath(),G.fill()}let $=new js(t,{width:I,height:w,position:[A.x,A.y,0],kind:"mud",seed:p++,geometry:E,coverage:O,partId:M,partLabel:y.label});g.push($)}return{bike:t,surfaces:g}}var tr={fabric:{name:"Puzzi 8/1",reference:"assets/references/puzzi-8-1.png",thumbnail:"assets/references/puzzi-8-1-thumb.png",features:["\u900F\u660E\u53CC\u8231\u9876\u76D6","\u7070\u8272\u8F6E\u5F0F\u673A\u8EAB","\u6CE2\u7EB9\u55B7\u62BD\u8F6F\u7BA1","\u900F\u660E\u77ED\u624B\u6252"],description:"\u6CBF\u7740\u900F\u660E\u5438\u5634\uFF0C\u770B\u89C1\u5E03\u9762\u7684\u53D8\u5316\u3002"},window:{name:"WV 2",reference:"assets/references/wv2.webp",thumbnail:"assets/references/wv2-thumb.png",features:["\u9EC4\u8272\u5BBD\u5E45\u522E\u5934","\u767D\u8272\u5F27\u9762\u673A\u8EAB","\u70DF\u7070\u8272\u6C34\u7BB1","\u9542\u7A7A\u63E1\u6301\u7ED3\u6784"],description:"\u63E1\u4F4F\u673A\u8EAB\uFF0C\u8BA9\u522E\u6761\u6CBF\u73BB\u7483\u7F13\u7F13\u6ED1\u8FC7\u3002"},steam:{name:"SC 4 Deluxe",reference:"assets/references/sc4-deluxe.webp",thumbnail:"assets/references/sc4-deluxe-thumb.png",features:["\u767D\u8272\u5706\u89D2\u4E3B\u673A","\u9876\u90E8\u6C34\u7BB1\u4E0E\u9ED1\u8272\u76D6\u677F","\u9EC4\u8272\u7EC6\u7EBF\u9970\u8FB9","\u957F\u6746\u4E0E\u7EC7\u7269\u5730\u5237"],description:"\u4E3B\u673A\u3001\u8F6F\u7BA1\u4E0E\u6E05\u6D01\u5934\uFF0C\u4E00\u8D77\u5B8C\u6210\u84B8\u6C7D\u6E05\u6D01\u3002"},outdoor:{name:"KHB Air",reference:"assets/references/khb-air-view.png",thumbnail:"assets/references/khb-air-thumb.png",features:["\u9ED1\u8272\u5706\u7B52\u67AA\u8EAB","\u9EC4\u8272\u6298\u53E0\u63E1\u67C4","\u65CB\u8F6C\u591A\u5B54\u55B7\u5634","\u63E1\u67C4\u5F00\u5173\u4E0E\u63A5\u7F1D"],description:"\u5C0F\u5DE7\u7684\u67AA\u8EAB\uFF0C\u8BA9\u6237\u5916\u51B2\u6D17\u968F\u624B\u5F00\u59CB\u3002"}};function er(i){let t={white:new Ue({color:16053748,roughness:.3}),grey:new Ue({color:7632504,roughness:.39}),light:new Ue({color:13028043,roughness:.32,metalness:.13}),black:new Ue({color:2105892,roughness:.35}),rubber:new Ue({color:1184790,roughness:.8}),yellow:new Ue({color:16768768,roughness:.29}),silver:new Ue({color:10396839,roughness:.25,metalness:.8}),glass:new Os({color:13226450,roughness:.12,metalness:.05,transparent:!0,opacity:.31,depthWrite:!1,side:ze,clearcoat:1}),smoke:new Os({color:5002073,roughness:.19,transparent:!0,opacity:.57,depthWrite:!1,side:ze,clearcoat:1}),cloth:new Ue({color:15066334,roughness:1})};function e(u,d,f=[0,0,0],m=i,_=""){let g=new re(u,typeof d=="string"?t[d]:d);return g.position.set(...f),g.castShadow=!0,g.receiveShadow=!0,g.name=_,m.add(g),g}function n(u,d,f,m=.04,_=i,g=""){return e(new Wn(...u,3,Math.min(m,Math.min(...u)/2)),f,d,_,g)}function s(u,d,f,m,_="y",g=u,p=i){let M=e(new bn(u,g,d,32),m,f,p);return _==="x"&&(M.rotation.z=Math.PI/2),_==="z"&&(M.rotation.x=Math.PI/2),M}function r(u,d,f,m,_="z",g=i){let p=e(new dn(u,d,8,40),m,f,g);return _==="x"&&(p.rotation.y=Math.PI/2),_==="y"&&(p.rotation.x=Math.PI/2),p}function o(u,d,f,m,_=.025,g=i,p=[]){let M=new Ns,y=.16;for(let E=0;E<u.length;E++){let S=u[(E+u.length-1)%u.length],A=u[E],I=u[(E+1)%u.length],w=A[0]+(S[0]-A[0])*y,v=A[1]+(S[1]-A[1])*y,P=A[0]+(I[0]-A[0])*y,U=A[1]+(I[1]-A[1])*y;E===0?M.moveTo(w,v):M.lineTo(w,v),M.quadraticCurveTo(A[0],A[1],P,U)}M.closePath();for(let E of p){let S=new Hi;S.moveTo(...E[0]),E.slice(1).forEach(A=>S.lineTo(...A)),S.closePath(),M.holes.push(S)}let x=new qr(M,{depth:d,bevelEnabled:_>0,bevelSize:_,bevelThickness:_,bevelSegments:3,curveSegments:12,steps:1});return x.translate(0,0,-d/2),e(x,m,f,g)}function a(u,d=.06,f=!0,m=i){let _=new Hn(u.map(p=>new C(...p))),g=e(new Xi(_,64,d,10,!1),"rubber",[0,0,0],m,"hose");if(f){let p=Math.min(105,Math.ceil(_.getLength()/.035)),M=new dn(d,.011,6,10),y=new zn(M,t.black,p),x=new we;for(let E=0;E<p;E++){let S=(E+.5)/p;x.position.copy(_.getPointAt(S)),x.quaternion.setFromUnitVectors(new C(0,0,1),_.getTangentAt(S)),x.updateMatrix(),y.setMatrixAt(E,x.matrix)}y.castShadow=!0,m.add(y)}return g}function l(u,d,f,m,_=i){let g=new C(...u),p=new C(...d),M=p.clone().sub(g),y=s(f,M.length(),g.add(p).multiplyScalar(.5).toArray(),m,"y",f,_);return y.quaternion.setFromUnitVectors(new C(0,1,0),M.normalize()),y}function c(u,d,f,m=i,{sub:_="",yellow:g=!0,rotate:p=0}={}){let M=document.createElement("canvas");M.width=512,M.height=192;let y=M.getContext("2d");y.fillStyle="#f5f5ef",y.fillRect(0,0,512,192),y.fillStyle="#161819",y.font="900 69px Arial",y.textAlign="center",y.fillText(u,256,85),g&&(y.fillStyle="#ffdc00",y.fillRect(36,102,440,20)),_&&(y.fillStyle="#303335",y.font="30px Arial",y.fillText(_,256,164));let x=new Ke(M);x.colorSpace=ye;let E=e(new Sn(...d),new Ve({map:x}),f,m,"brand-label");return E.rotation.y=p,E.castShadow=!1,E}function h(u,d="z",f=i){s(.018,.007,u,"silver",d,.018,f);let m=n([.019,.004,.004],[u[0],u[1],u[2]+.005],"black",.001,f);d!=="z"&&(m.visible=!1)}return{root:i,mats:t,mesh:e,box:n,cyl:s,torus:r,outline:o,hose:a,rod:l,label:c,screw:h}}function Z_(i){let{box:t,outline:e,cyl:n,torus:s,label:r,screw:o}=er(i);e([[-.42,.13],[.36,.13],[.42,.24],[.39,.79],[.32,1.19],[.19,1.52],[.29,1.69],[-.22,1.69],[-.3,1.48],[-.25,1.12],[-.37,.67]],.35,[0,0,0],"white",.04,i,[[[.055,.35],[.23,.35],[.29,.49],[.27,.95],[.19,1.18],[.09,1.2],[.035,1.03]]]),t([.8,.12,.44],[-.01,.12,0],"white",.04),t([.79,.025,.44],[-.01,.059,0],"rubber",.012),e([[-.45,.19],[.02,.18],[.09,.3],[.06,.93],[-.05,1.02],[-.39,.97],[-.45,.77]],.3,[0,0,.185],"smoke",.035),e([[-.37,.23],[-.06,.23],[-.01,.37],[-.04,.86],[-.12,.94],[-.3,.92]],.025,[0,0,.18],"light",.02),t([.46,.045,.31],[-.18,1,.185],"black",.018);for(let c=0;c<3;c++)t([.14,.012,.014],[-.25,.36+c*.065,.381],"light",.005);e([[-.84,1.92],[.84,1.92],[.81,1.7],[.44,1.64],[.21,1.46],[-.2,1.46],[-.43,1.63],[-.81,1.7]],.17,[0,0,0],"yellow",.035),e([[-.39,1.84],[.39,1.84],[.16,1.57],[-.15,1.57]],.012,[0,0,.105],"yellow",.012),t([1.79,.1,.19],[0,1.97,-.01],"black",.012),t([1.79,.025,.026],[0,2.028,-.11],"rubber",.004,i,"contact-edge");for(let c=0;c<17;c++)t([.025,.035,.13],[-.79+c*.099,2.027,.015],"rubber",.005);return[[-.77,1.74,.105],[.77,1.74,.105],[-.32,1.61,.105],[.32,1.61,.105],[0,1.81,.105],[.31,.3,.199],[.29,1.06,.201]].forEach(c=>o(c)),n(.037,.012,[.19,1.38,.2],"black","z"),s(.021,.002,[.19,1.382,.21],"light"),t([.05,.027,.012],[.3,.245,.225],"black",.008),r("K\xC4RCHER",[.25,.095],[-.08,1.22,.212],i,{sub:"WV 2"}),i.userData.contact=[0,2.03,-.12],i}function J_(i,{accessories:t=!0}={}){let{box:e,cyl:n,torus:s,outline:r,hose:o,label:a}=er(i);e([1.23,.22,1.62],[0,.26,0],"grey",.1),e([1.14,.89,1.36],[0,.8,-.02],"grey",.17),[-1,1].forEach(l=>{e([.075,.63,.16],[l*.553,.65,-.12],"grey",.035),e([.07,.34,.45],[l*.564,.46,-.4],"grey",.05),n(.25,.14,[l*.61,.29,-.47],"rubber","x"),n(.175,.15,[l*.62,.29,-.47],"grey","x"),n(.079,.16,[l*.63,.29,-.47],"black","x");for(let c=0;c<5;c++){let h=c*Math.PI*2/5,u=e([.025,.12,.039],[l*.71,.29+Math.cos(h)*.105,-.47+Math.sin(h)*.105],"black",.008);u.rotation.x=-h}e([.09,.09,.1],[l*.43,.2,.59],"black",.018),n(.105,.09,[l*.43,.116,.61],"rubber","x"),n(.07,.1,[l*.435,.116,.61],"grey","x")}),e([1.17,.08,1.4],[0,1.235,-.02],"black",.12),[[.39,.61],[-.32,.62]].forEach(([l,c])=>{e([1.03,.1,c],[0,1.3,l-.1],"black",.08),e([1.1,.22,c+.04],[0,1.39,l-.1],"glass",.11);for(let h=-3;h<=3;h++)e([.009,.14,.014],[h*.125,1.4,l+c/2-.065],"light",.003)}),e([.44,.055,.41],[0,1.56,-.32],"glass",.025),r([[-.38,0],[.38,0],[.35,.23],[.21,.27],[-.21,.27],[-.35,.23]],.12,[0,1.4,-.57],"black",.025,i,[[[-.22,.06],[-.2,.16],[.2,.16],[.22,.06]]]),[-.23,.23].forEach(l=>{e([.19,.075,.17],[l,1.43,-.63],"yellow",.025).rotation.x=-.2});for(let l=0;l<5;l++)e([.02,.025,.27],[.575,.98+l*.045,-.39],"black",.006);if(a("K\xC4RCHER",[.43,.19],[.59,.99,.02],i,{sub:"Professional",rotate:Math.PI/2}),a("K\xC4RCHER",[.39,.17],[.15,.98,.673],i,{sub:"Puzzi 8/1"}),n(.12,.19,[-.3,1.07,.76],"black","z"),s(.122,.018,[-.3,1.07,.855],"black"),n(.055,.12,[-.23,.78,.747],"yellow","z"),n(.035,.05,[-.23,.78,.825],"light","z"),i.userData.hosePort=[-.3,1.07,.855],t){o([[-.3,1.07,.86],[-.82,.98,1.12],[-1,.35,1],[-.95,.11,.5],[-.72,.12,.3],[-.76,.27,1.25]],.067),o([[-.23,.78,.81],[-.71,.71,1.12],[-.88,.21,.83],[-.69,.22,.42]],.014,!1);let l=rd();l.scale.setScalar(.92),l.rotation.x=-Math.PI/2,l.rotation.z=-.26,l.position.set(-.77,.15,1.02),i.add(l)}return i}function K_(i,{accessories:t=!0}={}){let{box:e,cyl:n,torus:s,outline:r,hose:o,rod:a,label:l}=er(i);e([1.18,.2,1.6],[0,.19,0],"black",.14),e([1.14,1.08,1.51],[0,.78,-.025],"white",.19);let c=new Se;c.position.set(0,1.3,0),c.rotation.x=-.095,i.add(c),e([1.13,.022,1.5],[0,0,0],"yellow",.12,c),e([1.11,.07,1.47],[0,.04,0],"black",.13,c),e([1.02,.28,.7],[0,.16,.315],"light",.1,c),e([.88,.035,.55],[0,.305,.32],"white",.08,c),n(.095,.043,[-.28,.339,.33],"light","y",.095,c),n(.115,.08,[.1,.35,.15],"black","y",.115,c);for(let h=0;h<18;h++){let u=h*Math.PI/9;e([.013,.07,.013],[.1+Math.cos(u)*.107,.35,.15+Math.sin(u)*.107],"rubber",.003,c)}if(e([.84,.05,.56],[0,.095,-.42],"black",.07,c),[-.46,.46].forEach(h=>{n(.11,.09,[h,.11,-.55],"rubber","x"),n(.055,.1,[h,.11,.54],"black","x")}),r([[-.28,.29],[.28,.29],[.24,.69],[.16,.77],[-.17,.77],[-.26,.67]],.04,[0,0,.746],"black",.05),n(.09,.09,[0,.45,.8],"black","z"),s(.089,.018,[0,.45,.85],"rubber"),l("K\xC4RCHER",[.35,.15],[0,1.13,.751],i,{sub:"SC 4 Deluxe"}),i.userData.hosePort=[0,.45,.85],t){o([[0,.45,.84],[-.28,.22,1.02],[-.92,.15,1],[-1.08,.43,.3],[-.42,1.75,-.17],[-.6,2.03,.03]],.045);let h=[-1.16,.25,1.19],u=[-.66,2.08,.03];a(h,u,.047,"black");let d=new C(...h),f=new C(...u);[.22,.64].forEach(_=>{let g=d.clone().lerp(f,_);n(.065,.13,g.toArray(),"rubber").quaternion.setFromUnitVectors(new C(0,1,0),f.clone().sub(d).normalize())}),a(u,[-.47,2.09,-.07],.075,"black");let m=new Se;m.position.set(-1.16,.1,1.19),i.add(m),e([1.1,.06,.48],[0,0,0],"cloth",.045,m),e([1.03,.065,.43],[0,.055,0],"yellow",.025,m),e([1,.065,.42],[0,.09,0],"black",.04,m),e([.29,.12,.24],[0,.16,-.04],"black",.045,m),n(.085,.21,[0,.21,0],"black","x",.085,m);for(let _=0;_<24;_++)e([.017,.014,.025],[-.5+_*.043,-.017,.24],"light",.003,m)}return i}function $_(i){let{box:t,cyl:e,torus:n,outline:s,label:r}=er(i),o=new Se;o.position.set(0,1.18,0),i.add(o),e(.215,1.18,[.2,0,0],"black","x",.235,o),e(.215,.09,[.8,0,0],"black","x",.195,o),e(.255,.22,[-.43,0,0],"black","x",.218,o),n(.245,.014,[-.535,0,0],"rubber","x",o),e(.195,.47,[-.79,0,0],"black","x",.195,o);for(let l=0;l<8;l++){let c=l*Math.PI/4,h=t([.34,.028,.045],[-.79,Math.cos(c)*.19,Math.sin(c)*.19],"rubber",.009,o);h.rotation.x=c}e(.199,.04,[-1.04,0,0],"rubber","x",.199,o),e(.145,.008,[-1.063,0,0],"black","x",.145,o);for(let l=0;l<5;l++){let c=l*Math.PI*2/5;e(.021,.01,[-1.071,Math.cos(c)*.076,Math.sin(c)*.076],"silver","x",.021,o),e(.012,.013,[-1.079,Math.cos(c)*.076,Math.sin(c)*.076],"rubber","x",.012,o)}e(.018,.012,[-1.081,0,0],"silver","x",.018,o),r("K\xC4RCHER",[.43,.17],[.3,1.2,.255],i,{yellow:!0});let a=new Se;a.position.set(.41,1.06,0),i.add(a),a.name="folding-grip",s([[-.39,.06],[.17,.06],[.2,-.15],[.34,-1],[.09,-1.07],[-.08,-.99],[-.2,-.38],[-.33,-.2]],.29,[0,0,0],"yellow",.045,a),s([[.11,.04],[.23,-.08],[.39,-.99],[.25,-1.035],[.07,-.27]],.36,[0,0,0],"black",.03,a),t([.35,.018,.3],[.12,-.62,0],"yellow",.006,a).rotation.z=.16,t([.34,.009,.306],[.12,-.63,0],"grey",.003,a).rotation.z=.16,e(.048,.025,[-.12,-.3,.18],"black","z",.048,a),n(.048,.005,[-.12,-.3,.198],"rubber","z",a),e(.07,.012,[-.01,-.025,.183],"black","z",.07,a);for(let l=0;l<3;l++)t([.035,.008,.01],[-.21+l*.052,-.12,.18],"black",.003,a);return i.userData.foldPivot=a,i.userData.contact=[-1.08,1.18,0],i}function Qs(i,t={}){let e=new Se;return e.name="product-"+i,{fabric:J_,window:Z_,steam:K_,outdoor:$_}[i](e,t),e.userData.productId=i,e}function rd(){let i=new Se,{box:t,outline:e,cyl:n,torus:s}=er(i);return e([[-.24,0],[.24,0],[.17,.18],[.08,.36],[-.08,.36],[-.17,.18]],.1,[0,0,.095],"glass",.015),t([.47,.026,.1],[0,.015,.08],"light",.007),t([.16,.18,.18],[0,.34,.19],"black",.04),t([.15,.29,.16],[0,.37,.37],"grey",.04).rotation.x=-.72,t([.11,.035,.06],[0,.26,.31],"yellow",.009),n(.074,.17,[0,.48,.48],"black","z"),s(.074,.012,[0,.48,.57],"rubber"),i.userData.hoseEnd=[0,.48,.57],i}function od(i,t){let e=new Se;e.name="active-tool-"+i;let{box:n,cyl:s,rod:r}=er(e);if(i==="window"&&t==="glass-wipe")n([.49,.26,.06],[0,0,.04],"cloth",.035),n([.2,.11,.05],[0,0,.09],"yellow",.02);else if(i==="window"&&t!=="spray"){let o=Qs("window");o.scale.setScalar(.36),o.position.set(0,-2.03*.36,.12*.36),e.add(o)}else if(i==="window")n([.16,.25,.13],[.11,-.23,.29],"white",.04),n([.13,.07,.1],[.08,-.07,.25],"yellow",.015),n([.09,.05,.15],[.02,-.04,.16],"black",.012);else if(i==="fabric")e.add(rd()),e.userData.hoseEnd=[0,.48,.57];else if(i==="steam")if(t==="wipe")n([.52,.28,.065],[0,0,.04],"cloth",.035),n([.24,.12,.04],[0,0,.09],"grey",.02);else{s(.037,.3,[.02,-.08,.19],"black","z"),r([.02,-.08,.31],[.12,-.27,.41],.05,"black"),n([.07,.035,.07],[.08,-.17,.4],"yellow",.008);for(let o=0;o<8;o++){let a=o*Math.PI/4;s(.007,.042,[.02+Math.cos(a)*.035,-.08+Math.sin(a)*.035,.025],"rubber","z")}e.userData.hoseEnd=[.12,-.27,.42]}else{let o=Qs("outdoor");o.scale.setScalar(.42),o.rotation.y=-Math.PI/2,o.position.set(0,-1.18*.42,1.08*.42+.16),e.add(o)}return e.visible=!1,e.userData.mode=t,e}function Xn(i){let t=new Set,e=new Set,n=new Set;i.traverse(s=>{s.geometry&&t.add(s.geometry),s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(r=>{e.add(r);for(let o of Object.values(r))o?.isTexture&&n.add(o)})}),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),e.forEach(s=>s.dispose())}function ad(i){let t=new Se,e=[],n=[],s=(d,f={})=>new Ue({color:d,roughness:.8,...f});function r(d,f,m,_=.05,g={}){let p=new re(new Wn(...d,3,_),s(m,g));return p.position.set(...f),p.castShadow=!0,p.receiveShadow=!0,t.add(p),p}function o(d,f,m,_,g){let p=new re(new bn(d,f,m,32),s(g));return p.position.set(..._),p.castShadow=!0,p.receiveShadow=!0,t.add(p),p}function a(d,f,m){let _=new Hn(d.map(p=>new C(...p))),g=new re(new Xi(_,36,f,8,!1),s(m));return g.castShadow=!0,t.add(g),g}function l(d,f,m=1){o(.21*m,.16*m,.38*m,[d,.25*m,f],15129026);for(let _=0;_<8;_++){let g=_*2.4,p=d+Math.cos(g)*.23*m,M=f+Math.sin(g)*.23*m,y=(.65+_*.05)*m;a([[d,.4*m,f],[p,y,M]],.012*m,6649431);let x=new re(new Wi(1,12,8),s(_%2?8951921:6323299));x.scale.set(.11*m,.28*m,.035*m),x.position.set(p,y,M),x.rotation.set(.25,g,.6*Math.cos(g)),x.castShadow=!0,t.add(x)}}function c(d){let f=new js(t,{kind:"mud",...d});return e.push(f),f}let h=r([7.6,.14,5.8],[0,-.07,0],14211786,.16);h.receiveShadow=!0,r([7.6,3.8,.13],[0,1.82,-2.65],i.id==="window"?14475990:15066584,.04),r([.13,3.8,5.8],[-3.72,1.82,0],14147534,.04),r([7.2,.08,.04],[0,.1,-2.54],13159867,.01);for(let d=0;d<8;d++)r([.012,.006,5.5],[-3.3+d*.9,.006,0],13357244,.001);if(i.id==="fabric"){let d=document.createElement("canvas");d.width=d.height=128;let f=d.getContext("2d");f.fillStyle="#c0af8c",f.fillRect(0,0,128,128),f.strokeStyle="#d2c2a0",f.lineWidth=1;for(let _=0;_<128;_+=3)f.beginPath(),f.moveTo(_,0),f.lineTo(_,128),f.stroke(),f.beginPath(),f.moveTo(0,_),f.lineTo(128,_),f.stroke();let m=new Ke(d);m.wrapS=m.wrapT=bs,m.repeat.set(3,3),m.colorSpace=ye,n.push(m),[-1.35,1.35].forEach(_=>[-.55,.8].forEach(g=>o(.085,.065,.34,[_,.2,g],6905160))),r([3.5,.35,1.8],[0,.55,.1],10391928,.13),r([3.35,1.37,.38],[0,1.34,-.63],11772288,.13,{map:m}),[-.79,.79].forEach((_,g)=>{r([1.51,.29,1.24],[_,.87,.25],13680022,.12,{map:m}),r([1.52,1.1,.24],[_,1.42,-.39],13087370,.12,{map:m}),c({width:1.42,height:1.11,position:[_,1.025,.25],rotation:[-Math.PI/2,0,0],seed:12+g}),c({width:1.39,height:.93,position:[_,1.43,-.262],seed:21+g})}),[-1.68,1.68].forEach(_=>r([.31,.7,1.72],[_,.95,.08],12035203,.13,{map:m})),r([4.35,.025,2.9],[0,.03,.55],15327690,.1);for(let _=-7;_<8;_++)r([.012,.005,2.75],[_*.27,.046,.55],14340795,.001);o(.48,.48,.08,[2.5,.84,-.35],11901558),o(.06,.06,.8,[2.5,.42,-.35],9336666),o(.35,.35,.04,[2.5,.04,-.35],9336666),o(.1,.08,.22,[2.5,.99,-.35],15525074),l(-2.7,-1.6,1.4),r([1.3,1.05,.08],[.2,2.75,-2.5],11836018,.02),r([1.15,.9,.04],[.2,2.75,-2.44],16051931,.01),r([.57,.57,.025],[.2,2.75,-2.41],9214842,.13)}else if(i.id==="window")r([3.66,2.75,.18],[0,1.82,-.63],8163201,.05),[-.86,.86].forEach((d,f)=>{let m=ju(f);n.push(m),r([1.6,2.48,.08],[d,1.82,-.5],16777215,.01,{map:m,metalness:.05,roughness:.25}),r([.18,2.1,.018],[d-.48,1.82,-.449],15464174,.01,{transparent:!0,opacity:.13}),c({width:1.56,height:2.43,position:[d,1.82,-.442],kind:"glass",seed:50+f})}),[-1.73,0,1.73].forEach(d=>r([.1,2.68,.14],[d,1.82,-.39],15920860,.02)),[.51,1.82,3.13].forEach(d=>r([3.55,.08,.14],[0,d,-.39],15920860,.01)),r([4,.16,.6],[0,.42,-.48],11251349,.03),l(-2.55,-.45,1.3),l(2.55,-1.55,1.65),[-2.3,2.3].forEach(d=>{for(let f=0;f<6;f++){let m=r([.1,3,.22],[d+f*.09*(d>0?1:-1),1.95,-1.1],f%2?14142639:14997951,.04)}});else if(i.id==="steam"){r([3.9,.95,1.05],[0,.54,-.25],12365458,.05),[-1.25,0,1.25].forEach(d=>{r([1.17,.8,.05],[d,.55,.3],13286303,.02),r([.25,.035,.04],[d,.82,.34],7502952,.01)}),r([4.14,.13,1.23],[0,1.08,-.25],15262675,.05),r([3.86,1.86,.1],[0,2.08,-.77],12832185,.02);for(let d=0;d<3;d++)for(let f=0;f<6;f++)r([.6,.55,.04],[-1.57+f*.63,1.49+d*.58,-.69],(f+d)%3?13818826:12964289,.012,{roughness:.27,metalness:.04});c({width:3.72,height:1.68,position:[0,2.08,-.663],kind:"grease",seed:63}),o(.2,.18,.36,[1.5,1.32,-.08],13088145),[-.1,0,.1].forEach(d=>a([[1.5+d,1.4,-.08],[1.5+d*2,1.95,-.08]],.025,7890763)),r([.56,.03,.7],[-1.4,1.17,-.25],11375215,.02),l(-2.75,-1.6,1.4),r([2.5,.12,.48],[0,3.28,-1],12559491,.02),[0,.6].forEach(d=>o(.15,.15,.29,[d,3.5,-1],13947309))}else{r([1.15,.75,.65],[2.35,.51,-1.8],8098699,.1),r([1.2,.07,.69],[2.35,.91,-1.8],4940636,.03),r([.3,.065,.06],[2.35,.7,-1.44],2702387,.02);let d=sd(t);e.push(...d.surfaces),l(3.02,-1.25,1.25),l(-3.1,-1.8,1),r([4.6,.025,2.3],[-.45,.018,.6],13686469,.08)}let u=Qs(i.id,{accessories:!0});return u.scale.setScalar(i.id==="window"?.54:i.id==="outdoor"?.6:.64),u.position.set(2.45,.055,1.24),u.rotation.y=i.id==="outdoor"?.18:-.25,t.add(u),(i.id==="window"||i.id==="outdoor")&&(r([1.3,.13,1],[2.45,.08,1.24],15262934,.1),u.position.y=.15),t.updateMatrixWorld(!0),{root:t,surfaces:e,product:u,target:i.id==="outdoor"?new C(-.15,1.15,.3):new C(0,1.25,0),dispose(){e.forEach(d=>d.dispose()),Xn(t),n.forEach(d=>d.dispose())}}}function ld(i,t){return od(i.id,t||i.modes[0].id)}var cd=["fabric","window","steam","outdoor"];function hd(i){let t=document.querySelector("#product-dialog"),e=document.querySelector("#product-canvas"),n=document.querySelector("#product-stage"),s=null,r=null,o,a,l,c="fabric",h=!1,u=0,d=x=>t.querySelector(x);d("#product-tabs").innerHTML=cd.map(x=>'<button data-product="'+x+'">'+tr[x].name+"</button>").join("");function f(){if(s)return;s=new Js({canvas:e,antialias:!0,alpha:!0}),s.setPixelRatio(Math.min(devicePixelRatio,2)),s.outputColorSpace=ye,s.toneMapping=Hs,s.toneMappingExposure=1.05,s.shadowMap.enabled=!0,s.shadowMap.type=zs,o=new ki,a=new Xe(34,1,.1,40),r=new $s(a,e),r.enableDamping=!0,r.enablePan=!1,r.minDistance=2.5,r.maxDistance=8,r.maxPolarAngle=Math.PI*.57,r.autoRotate=!1,o.add(new Yi(16777215,8357776,2.5));let x=new ei(16777215,3.2);x.position.set(-3,5,5),x.castShadow=!0,x.shadow.mapSize.set(1024,1024),x.shadow.normalBias=.02,o.add(x);let E=new ei(13098751,3);E.position.set(3,3,-3),o.add(E);let S=new ei(16777215,1);S.position.set(1,2,5),o.add(S);let A=new re(new Or(6,80),new Yr({opacity:.17}));A.rotation.x=-Math.PI/2,A.position.y=-.005,A.receiveShadow=!0,o.add(A)}function m(){if(!s||!t.open)return;let x=n.getBoundingClientRect();s.setSize(x.width,x.height,!1),a.aspect=x.width/x.height,a.updateProjectionMatrix()}function _(){if(!a)return;let x=n.clientWidth<420;a.position.set(c==="outdoor"?-2.5:c==="window"?1.6:2.7,c==="window"?1.7:2.5,x?5.5:4.7),r.target.set(0,c==="window"?1.02:.87,0),r.update()}function g(x){f(),c=x,h=!1,u=0,l&&(o.remove(l),Xn(l)),l=Qs(x),(x==="fabric"||x==="steam")&&(l.position.x=.22),o.add(l);let E=tr[x];d("#viewer-name").textContent=E.name,d("#viewer-description").textContent=E.description,d("#viewer-reference").src=E.reference,d("#viewer-reference").alt=E.name+" \u7528\u6237\u63D0\u4F9B\u7684\u4EA7\u54C1\u53C2\u8003\u56FE",d("#viewer-reference-link").href=E.reference,d("#viewer-features").innerHTML=E.features.map(S=>"<li>"+S+"</li>").join(""),d("#fold-product").hidden=x!=="outdoor",d("#fold-product").textContent="\u6F14\u793A\u63E1\u67C4\u6298\u53E0",d("#fold-product").setAttribute("aria-pressed","false"),t.querySelectorAll("[data-product]").forEach(S=>{S.classList.toggle("active",S.dataset.product===x),S.setAttribute("aria-pressed",String(S.dataset.product===x))}),_(),m()}function p(){t.close(),s?.setAnimationLoop(null)}d("#close-product").addEventListener("click",p),t.addEventListener("close",()=>s?.setAnimationLoop(null)),t.addEventListener("click",x=>{x.target===t&&p()}),d("#product-reset").addEventListener("click",_),d("#use-product").addEventListener("click",()=>{p(),i(cd.indexOf(c))}),d("#fold-product").addEventListener("click",()=>{h=!h,u=h?-1.42:0,d("#fold-product").textContent=h?"\u5C55\u5F00\u63E1\u67C4":"\u6F14\u793A\u63E1\u67C4\u6298\u53E0",d("#fold-product").setAttribute("aria-pressed",String(h))}),t.querySelectorAll("[data-product]").forEach(x=>x.addEventListener("click",()=>g(x.dataset.product)));let M=new ResizeObserver(m);M.observe(n);function y(x){t.showModal();try{g(x),d("#product-view-error").hidden=!0,s.setAnimationLoop(()=>{if(!t.open||document.hidden)return;let E=l?.userData.foldPivot;E&&(E.rotation.z=je.lerp(E.rotation.z,u,.13)),r.update(),s.render(o,a)})}catch(E){d("#product-view-error").hidden=!1,console.error(E)}}return{open:y,get state(){return{open:t.open,selected:c,folded:h,geometries:s?.info.memory.geometries||0,textures:s?.info.memory.textures||0}},dispose(){s?.setAnimationLoop(null),M.disconnect(),r?.dispose(),l&&Xn(l),o&&Xn(o),s?.dispose()}}}function ud(){let i=new Se,t=38,e=90,n=new Ue({color:2369064,roughness:.7}),s=new zn(new bn(1,1,1,8),n,t),r=new zn(new dn(1,.18,5,8),n,e);s.instanceMatrix.setUsage(al),r.instanceMatrix.setUsage(al),s.frustumCulled=!1,r.frustumCulled=!1,i.add(s,r),i.visible=!1;let o=new we,a=new C(0,1,0),l=new C(0,0,1);function c(h,u,d){if(!u.visible||!u.userData.hoseEnd||!h.userData.hosePort){i.visible=!1;return}i.visible=!0,h.updateWorldMatrix(!0,!1),u.updateWorldMatrix(!0,!1);let f=h.localToWorld(new C(...h.userData.hosePort)),m=u.localToWorld(new C(...u.userData.hoseEnd)),_=f.clone().lerp(m,.47);_.y=Math.max(.16,Math.min(f.y,m.y)-.5),_.z=Math.max(f.z,m.z)+.8;let g=new Hn([f,f.clone().add(new C(0,-.15,.3)),_,m.clone().add(new C(.12,.1,.75)),m]),p=d==="fabric"?.035:.022;for(let M=0;M<t;M++){let y=g.getPoint(M/t),x=g.getPoint((M+1)/t),E=x.clone().sub(y);o.position.copy(y).add(x).multiplyScalar(.5),o.quaternion.setFromUnitVectors(a,E.clone().normalize()),o.scale.set(p,E.length()*1.08,p),o.updateMatrix(),s.setMatrixAt(M,o.matrix)}for(let M=0;M<e;M++){let y=(M+.5)/e;o.position.copy(g.getPoint(y)),o.quaternion.setFromUnitVectors(l,g.getTangent(y).normalize()),o.scale.setScalar(p*1.06),o.updateMatrix(),r.setMatrixAt(M,o.matrix)}s.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0}return{group:i,update:c,dispose(){s.geometry.dispose(),r.geometry.dispose(),n.dispose()}}}function dd(i){let t=document.createElement("div");t.className="cleaning-feedback",t.setAttribute("aria-hidden","true"),i.append(t);let e=Array.from({length:8},()=>{let l=document.createElement("span");return l.className="cleaning-plus",l.textContent="+1",l.hidden=!0,t.append(l),{node:l,animation:null}}),n=matchMedia("(prefers-reduced-motion: reduce)"),s=0,r=0;function o(l,c){let h=performance.now();if(h<r)return;r=h+170;let u=e[s++%e.length];u.animation?.cancel();let d=(s%3-1)*19;u.node.style.left=Math.max(30,Math.min(i.clientWidth-30,l*i.clientWidth+d*.45))+"px",u.node.style.top=Math.max(80,Math.min(i.clientHeight-48,c*i.clientHeight-20))+"px",u.node.hidden=!1;let f=n.matches?[{opacity:1,transform:"translate(-50%,-50%)"},{opacity:0,transform:"translate(-50%,-50%)"}]:[{opacity:0,transform:"translate(-50%,-35%) scale(.55)",offset:0},{opacity:1,transform:"translate(-50%,-65%) scale(1.18)",offset:.16},{opacity:1,transform:"translate(calc(-50% + "+d*.45+"px),-115%) scale(1)",offset:.44},{opacity:0,transform:"translate(calc(-50% + "+d+"px),-245%) scale(.85)",offset:1}],m=u.node.animate(f,{duration:n.matches?400:820,easing:"ease-out",fill:"forwards"});u.animation=m,m.onfinish=()=>{u.animation===m&&(u.node.hidden=!0,m.cancel(),u.animation=null)}}function a(){r=0;for(let l of e)l.animation?.cancel(),l.animation=null,l.node.hidden=!0}return{emit:o,clear:a,release(){r=0},dispose(){a(),t.remove()}}}function fd(){let i=new Se;i.name="wash-effects",i.visible=!1;let t=new ve;t.setAttribute("position",new Ee(new Float32Array(9),3));let e=new re(t,new Ve({color:11135999,transparent:!0,opacity:.16,side:ze,depthWrite:!1}));e.frustumCulled=!1,i.add(e);let n=13,s=new Float32Array(n*6),r=new ve;r.setAttribute("position",new Ee(s,3));let o=new Ur(r,new Ds({color:14219519,transparent:!0,opacity:.74,depthWrite:!1}));o.frustumCulled=!1,i.add(o);let a=90,l=new Float32Array(a*3),c=new ve;c.setAttribute("position",new Ee(l,3));let h=document.createElement("canvas");h.width=h.height=64;let u=h.getContext("2d"),d=u.createRadialGradient(32,32,1,32,32,32);d.addColorStop(0,"#fff"),d.addColorStop(.22,"#ffffffd9"),d.addColorStop(1,"#ffffff00"),u.fillStyle=d,u.fillRect(0,0,64,64);let f=new Ke(h),m=new zi(c,new gi({map:f,color:14940671,size:.04,transparent:!0,opacity:.8,depthWrite:!1}));m.frustumCulled=!1,i.add(m);let _=new re(new Gi(.82,1,40),new Ve({color:13694719,transparent:!0,opacity:.6,side:ze,depthWrite:!1}));i.add(_);let g=Array.from({length:14},()=>{let U=new Dr(new Is({map:f,color:16777215,transparent:!0,opacity:.3,depthWrite:!1,depthTest:!1}));return U.visible=!1,U.renderOrder=3,i.add(U),U}),p=new zn(new Wi(.012,7,5),new Ve({color:9003581,transparent:!0,opacity:.85,depthWrite:!1}),14);p.frustumCulled=!1,i.add(p);let M=new we,y=new C,x=new C,E=new C,S=new C,A=new C,I=new C,w=0;function v(){i.visible=!1}function P(U,O,G,V,q,$,B={recovered:0,removed:0}){if(!$||!U||!O.visible){v();return}i.visible=!0,w+=q,O.updateWorldMatrix(!0,!1),A.copy(U.face.normal).transformDirection(U.object.matrixWorld),E.set(1,0,0).applyQuaternion(O.quaternion),S.set(0,1,0).applyQuaternion(O.quaternion),x.copy(U.point).addScaledVector(A,.01);let et=V.id==="steam",lt=G.id==="fabric",St=G.id==="window",Wt=V.id==="wipe"||V.id==="glass-wipe",Yt=V.id==="jet",ie=G.id==="outdoor"?[0,0,.16]:et?[.02,-.08,.025]:St&&V.id==="spray"?[.02,-.04,.09]:lt?[0,.06,.08]:[0,0,0];y.set(...ie),O.localToWorld(y);let Kt=Yt?.045:V.id==="fan"?V.rx:et?.11:V.id==="spray"||lt?.18:.21;p.visible=lt&&B.recovered>.001,p.material.color.set(B.removed>.001?9003581:12114913),g.forEach(ft=>ft.visible=et),e.visible=V.id==="fan",o.visible=G.id==="outdoor"||V.id==="spray",_.visible=!Wt,m.visible=!Wt&&(!lt||B.recovered>.001)&&(!St||V.id==="spray"||B.recovered>.001);let J=t.attributes.position;J.setXYZ(0,y.x,y.y,y.z),I.copy(x).addScaledVector(E,-Kt),J.setXYZ(1,I.x,I.y,I.z),I.copy(x).addScaledVector(E,Kt),J.setXYZ(2,I.x,I.y,I.z),J.needsUpdate=!0;let it=Yt?5:13;r.setDrawRange(0,it*2);for(let ft=0;ft<it;ft++){let Lt=ft/(it-1)*2-1,Bt=ft*6;s[Bt]=y.x,s[Bt+1]=y.y,s[Bt+2]=y.z,I.copy(x).addScaledVector(E,Lt*Kt).addScaledVector(S,Math.sin(ft+w*22)*(Yt?.01:.022)),s[Bt+3]=I.x,s[Bt+4]=I.y,s[Bt+5]=I.z}r.attributes.position.needsUpdate=!0;let Et=lt?30:et?65:90;c.setDrawRange(0,Et),m.material.size=et?18:lt?3:Yt?2.4:3.4,m.material.opacity=et?.21:lt?.9:.78,m.material.color.set(lt?B.removed>.001?10121281:12969716:et?16777215:14481663);for(let ft=0;ft<Et;ft++){let Lt=(ft*.618033+w*(et?.7:2.6))%1,Bt=Math.sin(ft*7.71),L=Math.cos(ft*3.11);lt?I.copy(y).addScaledVector(S,Lt*.29).addScaledVector(A,Lt*.27).addScaledVector(E,Bt*.045):St&&V.id==="squeegee"?I.copy(x).lerp(y,Lt).addScaledVector(S,Lt*.1).addScaledVector(E,Bt*.03):et?I.copy(y).lerp(x,Lt).addScaledVector(E,Bt*Lt*.13).addScaledVector(S,L*Lt*.1+Math.sin(Lt*Math.PI)*.1):I.copy(y).lerp(x,Lt).addScaledVector(E,Bt*Kt*Lt).addScaledVector(S,L*(Yt?.017:.04)*Lt),l[ft*3]=I.x,l[ft*3+1]=I.y,l[ft*3+2]=I.z}if(c.attributes.position.needsUpdate=!0,et&&g.forEach((ft,Lt)=>{let Bt=(Lt/14+w*.85)%1;ft.position.copy(y).lerp(x,Bt).addScaledVector(E,Math.sin(Lt*2.4)*Bt*.11).addScaledVector(S,Bt*.09+Math.cos(Lt*1.8)*Bt*.045),ft.scale.setScalar(.095+Bt*.19),ft.material.opacity=.36*Math.sin(Math.PI*Bt)}),lt){for(let ft=0;ft<14;ft++){let Lt=(ft/14+w*1.8)%1;M.position.set(Math.sin(ft*2.3)*.13*(1-Lt),.035+Lt*.21,.162+Lt*.04),O.localToWorld(M.position),M.scale.set(1,.65,1),M.updateMatrix(),p.setMatrixAt(ft,M.matrix)}p.instanceMatrix.needsUpdate=!0}_.position.copy(x).addScaledVector(A,.012),_.quaternion.setFromUnitVectors(new C(0,0,1),A);let Ut=1+Math.sin(w*17)*.05;_.scale.set((Yt?.08:V.rx)*Ut,(et?.12:V.ry)*Ut,1),_.material.opacity=et?.17:St?.26:.5}return{group:i,update:P,hide:v,dispose(){t.dispose(),e.material.dispose(),r.dispose(),o.material.dispose(),c.dispose(),m.material.dispose(),f.dispose(),_.geometry.dispose(),_.material.dispose(),g.forEach(U=>U.material.dispose()),p.geometry.dispose(),p.material.dispose()}}}var nr="karcher-cleaning:v1:";function pd(i){return[i.kind,i.partId||"",i.width.toFixed(5),i.height.toFixed(5),i.total.toFixed(3)].join("|")}function md(i){let t=[],e=0,n=-1,s=-1;for(let l=0;l<36864;l++){let c=Math.round((i.initial[l]?i.remaining[l]/i.initial[l]:0)*65535),h=Math.round(i.wet[l]*65535);c===n&&h===s&&e<65535?e++:(e&&t.push(e,n,s),e=1,n=c,s=h)}e&&t.push(e,n,s);let r=new Uint8Array(t.length*2),o=new DataView(r.buffer);t.forEach((l,c)=>o.setUint16(c*2,l,!0));let a="";for(let l=0;l<r.length;l+=8192)a+=String.fromCharCode(...r.subarray(l,l+8192));return"rle:"+btoa(a)}function gd(i){if(typeof i!="string"||i.length>36864*8+4)throw Error("Invalid save size");let t=i.startsWith("rle:"),e=atob(t?i.slice(4):i),n=Uint8Array.from(e,a=>a.charCodeAt(0)),s=new DataView(n.buffer);if(!t){if(e.length!==36864*4)throw Error("Invalid save");return s}if(n.length%6)throw Error("Invalid run");let r=new DataView(new ArrayBuffer(36864*4)),o=0;for(let a=0;a<n.length;a+=6){let l=s.getUint16(a,!0),c=s.getUint16(a+2,!0),h=s.getUint16(a+4,!0);if(!l||o+l>36864)throw Error("Invalid run");for(let u=0;u<l;u++,o++)r.setUint16(o*4,c,!0),r.setUint16(o*4+2,h,!0)}if(o!==36864)throw Error("Incomplete save");return r}function _d(i){let t=new Map,e=!0,n=(o,a=!1)=>{i.textContent=o,i.classList.toggle("save-error",a)};try{localStorage.setItem(nr+"probe","1"),localStorage.removeItem(nr+"probe"),n("\u81EA\u52A8\u5B58\u6863\u5DF2\u5F00\u542F")}catch{e=!1,n("\u65E0\u6CD5\u4FDD\u5B58\u5230\u6D4F\u89C8\u5668 \xB7 \u672C\u6B21\u5207\u5173\u4ECD\u4FDD\u7559\u8FDB\u5EA6",!0)}location.protocol==="file:"&&(i.title="\u672C\u5730\u6587\u4EF6\u6A21\u5F0F\u7684\u5B58\u6863\u53D7\u6D4F\u89C8\u5668\u8BBE\u7F6E\u5F71\u54CD\u3002\u56FA\u5B9A\u4F7F\u7528\u540C\u4E00\u6D4F\u89C8\u5668\u548C\u5165\u53E3\uFF0C\u6216\u901A\u8FC7 npm start \u7684\u5730\u5740\u7EE7\u7EED\u6E38\u73A9\u3002");function s(o){if(t.has(o))return t.get(o);try{let a=localStorage.getItem(nr+o);if(!a)return null;let l=JSON.parse(a);return t.set(o,l),l}catch{return n("\u5B58\u6863\u65E0\u6CD5\u8BFB\u53D6 \xB7 \u672C\u5173\u91CD\u65B0\u5F00\u59CB",!0),null}}function r(o,a){t.set(o,a);try{return localStorage.setItem(nr+o,JSON.stringify(a)),e=!0,n("\u5DF2\u4FDD\u5B58 \xB7 "+new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"})),!0}catch{return e=!1,n("\u6D4F\u89C8\u5668\u5B58\u6863\u5931\u8D25 \xB7 \u8BF7\u52FF\u5173\u95ED\uFF0C\u5207\u5173\u4ECD\u4FDD\u7559",!0),!1}}return{inspect(o){let a=s(o);return a&&a.version===1&&Number.isFinite(a.elapsed)&&typeof a.completed=="boolean"?{seed:a.seed,completed:a.completed,elapsed:a.elapsed,percent:a.percent}:null},active(){try{return localStorage.getItem(nr+"active")}catch{return null}},setActive(o){try{localStorage.setItem(nr+"active",o)}catch{}},save(o,a,l){return r(o,{version:1,id:o,savedAt:Date.now(),...l,surfaces:a.map(c=>({signature:pd(c),done:c.partDone,data:md(c),...c.process?{process:{version:1,kind:c.process.kind,data:md({initial:c.initial,remaining:c.process.bound,wet:c.process.best}),recovered:c.process.recovered}}:{}}))})},restore(o,a){let l=s(o);if(!l)return null;try{if(l.version!==1||l.id!==o||!Array.isArray(l.surfaces)||l.surfaces.length!==a.length||!Number.isFinite(l.elapsed)||l.elapsed<0||l.elapsed>1e9||typeof l.completed!="boolean")throw Error("Incompatible save");let c=l.surfaces.map((u,d)=>{if(u.signature!==pd(a[d])||typeof u.done!="boolean")throw Error("Changed scene");return gd(u.data)}),h=l.surfaces.map((u,d)=>{if(!u.process)return null;let f=u.process;if(!a[d].process||f.version!==1||f.kind!==a[d].process.kind||!Number.isFinite(f.recovered)||f.recovered<0||f.recovered>1e12)throw Error("Invalid process");let m=gd(f.data);for(let _=0;_<36864;_++)if(m.getUint16(_*4,!0)>c[d].getUint16(_*4,!0)+1)throw Error("Invalid bound dirt");return m});return a.forEach((u,d)=>{let f=c[d];u.left=0,u.loosened=0;for(let m=0;m<36864;m++)u.remaining[m]=u.initial[m]*f.getUint16(m*4,!0)/65535,u.wet[m]=f.getUint16(m*4+2,!0)/65535,u.left+=u.remaining[m],u.loosened+=u.initial[m]*u.wet[m];if(u.process){let m=h[d];for(let _=0;_<36864;_++)u.process.bound[_]=m?u.initial[_]*m.getUint16(_*4,!0)/65535:Math.min(u.process.initialBound[_],u.remaining[_]),u.process.best[_]=m?m.getUint16(_*4+2,!0)/65535:u.initial[_]?1-u.remaining[_]/u.initial[_]:0,!m&&u.remaining[_]===0&&(u.wet[_]=u.process.kind==="fabric"?.06:0);u.process.recovered=l.surfaces[d].process?.recovered||0}u.partDone=l.surfaces[d].done,u.partDone||l.completed?u.finish():(u.changed=!0,u.refresh())}),n(e?"\u5DF2\u6062\u590D\u4E0A\u6B21\u6E05\u6D01\u8FDB\u5EA6":"\u5DF2\u6062\u590D\u672C\u6B21\u8FDB\u5EA6 \xB7 \u6D4F\u89C8\u5668\u5B58\u6863\u4E0D\u53EF\u7528",!e),l}catch{return n("\u65E7\u5B58\u6863\u4E0D\u517C\u5BB9\u6216\u635F\u574F \xB7 \u672C\u5173\u91CD\u65B0\u5F00\u59CB",!0),null}},get available(){return e}}}function xd({scene:i,camera:t,controls:e,board:n,getWorld:s,onFocusChange:r}){let o=null,a=null,l=0,c=[],h=new Se;h.name="remaining-dirt-hints",i.add(h);let u=new Ve({color:16768768,transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1,side:ze}),d=new Gi(.045,.07,20);for(let S=0;S<12;S++){let A=new re(d,u);A.visible=!1,A.renderOrder=50,h.add(A),c.push(A)}let f=!1,m=matchMedia("(prefers-reduced-motion: reduce)");function _(){l=0,c.forEach(S=>S.visible=!1)}function g(){f=!1,o=null,a=null,r(null),_()}function p(S){let A=s(),I=A.surfaces[S];if(!I)return;_(),a=S,r(S),A.root.updateMatrixWorld(!0);let w=new vn().setFromObject(I.mesh),v=w.getCenter(new C),P=w.getSize(new C),U=t.position.clone().sub(e.target).normalize(),O=Math.max(P.x,P.y,P.z,.3),G=je.clamp(Math.min((t.right-t.left)/(O*1.55),(t.top-t.bottom)/(O*1.45)),1,2.8);o={t:0,fromPosition:t.position.clone(),fromTarget:e.target.clone(),fromZoom:t.zoom,toPosition:v.clone().addScaledVector(U,8.5),toTarget:v,toZoom:G}}function M(){_();let S=s(),A=a===null?S.surfaces:[S.surfaces[a]],I=[];S.root.updateMatrixWorld(!0);for(let v of A)for(let U=0;U<192;U+=16)for(let O=0;O<192;O+=16){let G=0,V=0,q=0;for(let $=U;$<Math.min(U+16,192);$++)for(let B=O;B<Math.min(O+16,192);B++){let et=$*192+B,lt=v.remaining[et]+(v.process?Math.max(0,v.wet[et]-(v.process.kind==="fabric"?.1:.035))*v.initial[et]:0);G+=lt,V+=(B+.5)*lt,q+=($+.5)*lt}if(G>.12){let $=new C((V/G/192-.5)*v.width,(.5-q/G/192)*v.height,.012).applyMatrix4(v.hitMesh.matrixWorld),B=$.clone().project(t);Math.abs(B.x)<.94&&Math.abs(B.y)<.83&&I.push({point:$,mass:G})}}I.sort((v,P)=>P.mass-v.mass);let w=[];for(let v of I)if(w.every(P=>P.point.distanceTo(v.point)>.15)&&w.push(v),w.length===c.length)break;return w.forEach((v,P)=>{c[P].position.copy(v.point),c[P].visible=!0}),l=performance.now()+4500,w.length}function y(S,A){_(),f=!1,a=null,r(null),o={t:0,fromPosition:t.position.clone(),fromTarget:e.target.clone(),fromZoom:t.zoom,toPosition:new C(...S),toTarget:A.clone(),toZoom:1}}function x(){let S=s(),A=null;for(let I=0;I<S.surfaces.length;I++){let w=S.surfaces[I],v=0,P=0;for(let O=0;O<w.initial.length;O++)v+=w.remaining[O],w.process&&(P+=Math.max(0,w.wet[O]-(w.process.kind==="fabric"?.1:.035))*w.initial[O]);let U=v+P;U>.12&&(!A||U>A.mass)&&(A={index:I,mass:U,kind:P>v?"\u6C34\u75D5":"\u6C61\u6E0D"})}return A&&(p(A.index),f=!0),A}function E(S){if(o){o.t+=m.matches?1:S/.55;let A=Math.min(1,o.t),I=A*A*(3-2*A);t.position.lerpVectors(o.fromPosition,o.toPosition,I),e.target.lerpVectors(o.fromTarget,o.toTarget,I),t.zoom=je.lerp(o.fromZoom,o.toZoom,I),t.updateProjectionMatrix(),e.update(),A===1&&(o=null,f&&(f=!1,M()))}if(l)if(performance.now()>l)_();else for(let A of c)A.quaternion.copy(t.quaternion),A.scale.setScalar((m.matches?1:1+Math.sin(performance.now()*.009)*.13)/Math.sqrt(t.zoom))}return{focus:p,hints:M,nextResidue:x,showcase:y,update:E,cancel:g,clearHints:_,get active(){return a},get moving(){return!!o},get hintsVisible(){return c.filter(S=>S.visible).length},dispose(){d.dispose(),u.dispose(),i.remove(h)}}}function yd(i){let t=document.querySelector("#achievement-dialog"),e=document.querySelector("#achievement-before"),n=document.querySelector("#achievement-after"),s=document.querySelector("#achievement-slider"),r=document.querySelector("#achievement-card"),o=document.querySelector("#achievement-status"),a=!1,l=!1,c=async d=>{let f=new Image;return f.src=d,await f.decode(),f};function h(){document.querySelector("#achievement-comparison").style.setProperty("--split",s.value+"%"),s.setAttribute("aria-valuetext","\u6E05\u6D01\u524D\u5360 "+s.value+"%")}s.addEventListener("input",h),document.querySelector("#close-achievement").addEventListener("click",()=>t.close()),t.addEventListener("click",d=>{d.target===t&&t.close()});async function u(){if(!l){l=!0,a=!1,document.querySelector("#download-achievement").disabled=!0,o.textContent="\u6B63\u5728\u5236\u4F5C\u540C\u89C6\u89D2\u6210\u679C\u5361\u2026",t.showModal();try{let d=i();e.src=d.before,n.src=d.after,s.value=50,h(),document.querySelector("#achievement-title").textContent=d.completed?"\u8FD9\u4E00\u523B\uFF0C\u7115\u7136\u4E00\u65B0\u3002":"\u628A\u53D8\u5316\uFF0C\u7559\u5728\u8FD9\u4E00\u523B\u3002",document.querySelector("#achievement-subtitle").textContent=d.product+" \xB7 "+Math.floor(d.percent)+"% \u6E05\u6D01\u5B8C\u6210 \xB7 "+Math.floor(d.elapsed)+" \u79D2";let f=await Promise.all([c(d.before),d.middle?c(d.middle):null,c(d.after)]);r.width=1800,r.height=860;let m=r.getContext("2d");m.fillStyle="#f5f4ee",m.fillRect(0,0,1800,860),m.fillStyle="#252c22",m.font="900 38px Arial",m.fillText("K\xC4RCHER",62,76),m.fillStyle="#ffdf00",m.fillRect(62,89,204,9),m.fillStyle="#252c22",m.font="600 38px sans-serif",m.fillText("\u6E05\u6D01\u4E00\u4E0B\u3002\u5FC3\u60C5\uFF0C\u4EAE\u4E00\u4E0B\u3002",62,161),m.font="20px sans-serif",m.fillStyle="#727e66",m.fillText(d.product+" \xB7 "+d.caption,62,205);let _=["\u6E05\u6D01\u524D",d.middle?"\u6E05\u6D01\u4E2D \xB7 "+Math.floor(d.middlePercent)+"%":"\u6E05\u6D01\u4E2D \xB7 \u6682\u65E0\u8BB0\u5F55",d.completed?"\u7115\u7136\u4E00\u65B0 \xB7 100%":"\u73B0\u5728 \xB7 "+Math.floor(d.percent)+"%"];for(let g=0;g<3;g++){let p=62+g*567;if(m.fillStyle="#e4e8dc",m.fillRect(p,252,542,350),f[g]){let M=f[g],y=Math.min(542/M.width,350/M.height),x=M.width*y,E=M.height*y;m.drawImage(M,p+(542-x)/2,252+(350-E)/2,x,E)}else m.fillStyle="#7b8770",m.font="20px sans-serif",m.fillText("\u7EE7\u7EED\u6E05\u6D01\uFF0C\u81EA\u52A8\u8BB0\u5F55\u8FC7\u7A0B",p+140,427);m.fillStyle="#283223",m.font="600 25px sans-serif",m.fillText(_[g],p,650)}m.strokeStyle="#d9ddcf",m.beginPath(),m.moveTo(62,701),m.lineTo(1738,701),m.stroke(),m.fillStyle="#637353",m.font="24px sans-serif",m.fillText("\u6E05\u6D01\u8FDB\u5EA6 "+Math.floor(d.percent)+"%    \xB7    \u7528\u5FC3 "+Math.floor(d.elapsed)+" \u79D2",62,756),m.font="17px sans-serif",m.fillStyle="#87917b",m.fillText("\u5361\u8D6B\u6E05\u6D01\u5B9E\u9A8C\u5BA4 \xB7 \u975E\u5B98\u65B9\u54C1\u724C\u6982\u5FF5\u8BD5\u73A9",62,802),m.textAlign="right",m.fillText(new Date().toLocaleDateString("zh-CN"),1738,802),m.textAlign="left",a=!0,document.querySelector("#download-achievement").disabled=!1,o.textContent="\u62D6\u52A8\u6ED1\u6746\u5BF9\u6BD4\u524D\u540E\uFF1B\u4E0B\u65B9\u4E09\u8054\u753B\u53EF\u4FDD\u5B58\u4E3A PNG\u3002"}catch(d){o.textContent="\u56FE\u7247\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u5173\u95ED\u540E\u91CD\u8BD5\u3002",console.error(d)}finally{l=!1}}}return document.querySelector("#download-achievement").addEventListener("click",()=>{a&&r.toBlob(d=>{if(!d){o.textContent="\u56FE\u7247\u5BFC\u51FA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002";return}let f=URL.createObjectURL(d),m=document.createElement("a");m.href=f,m.download="\u5361\u8D6B-\u6E05\u6D01\u6210\u679C-"+new Date().toISOString().replace(/[:.]/g,"-")+".png",document.body.append(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(f),6e4),o.textContent="PNG \u5DF2\u751F\u6210\uFF0C\u8BF7\u67E5\u770B\u6D4F\u89C8\u5668\u4E0B\u8F7D\u3002"},"image/png")}),{open:u,get active(){return t.open}}}var Ei=[{id:"coffee-break",level:"fabric",title:"\u5496\u5561\u6D12\u4E86",tag:"\u5C40\u90E8\u55B7\u62BD",story:"\u8BFB\u4E66\u65F6\u78B0\u5012\u7684\u5496\u5561\uFF0C\u7559\u5728\u4E86\u5DE6\u4FA7\u5750\u57AB\u4E0A\u3002",task:"\u55B7\u62BD\u5DE6\u4FA7\u5750\u57AB\u7684\u5496\u5561\u6E0D\uFF0C\u518D\u505C\u6B62\u55B7\u6C34\u62BD\u5438\u4F59\u6C34\uFF1B\u6E05\u6D01\u540E\u5B89\u6392\u901A\u98CE\u3002",targets:[0],pattern:"coffee",revealSurface:0,reward:"\u6162\u5348\u540E\u5496\u5561",motif:"cup",color:"#ba825d",hint:"\u5DE6\u4FA7\u5750\u57AB \xB7 \u5496\u5561\u6E0D\u4E0B\u6709\u4E00\u679A\u5C0F\u523A\u7EE3"},{id:"paw-weekend",level:"fabric",title:"\u5C0F\u722A\u5370\u6765\u8FC7",tag:"\u5206\u533A\u6E05\u6D01",story:"\u6BDB\u8338\u8338\u7684\u5BA2\u4EBA\uFF0C\u628A\u5468\u672B\u7684\u5FEB\u4E50\u7559\u5728\u6C99\u53D1\u4E0A\u3002",task:"\u89C2\u5BDF\u6DF1\u6D45\u722A\u5370\uFF0C\u7F13\u6162\u91CD\u53E0\u55B7\u62BD\uFF1B\u6C61\u6E0D\u53BB\u9664\u540E\uFF0C\u62BD\u5438\u56DE\u6536\u6DF1\u8272\u6E7F\u75D5\u3002",targets:[0,1,2,3],pattern:"paws",revealSurface:3,reward:"\u6BDB\u8338\u8338\u5468\u672B",motif:"paw",color:"#b79368",hint:"\u53F3\u4FA7\u9760\u80CC \xB7 \u4E00\u679A\u7279\u522B\u7684\u5C0F\u722A\u5370\u85CF\u5728\u8FD9\u91CC"},{id:"rain-window",level:"window",title:"\u96E8\u540E\u653E\u6674",tag:"\u6E7F\u6C61\u819C\u4E0E\u51B7\u51DD\u6C34",story:"\u96E8\u505C\u4E86\uFF0C\u4E24\u6247\u7A97\u4E0A\u8FD8\u7559\u7740\u957F\u957F\u77ED\u77ED\u7684\u6C34\u75D5\u3002",task:"\u73BB\u7483\u4E0A\u662F\u5DF2\u677E\u52A8\u6E7F\u6C61\u819C\u548C\u51B7\u51DD\u6C34\uFF1B\u76F4\u63A5\u522E\u5438\uFF0C\u89C2\u5BDF\u6DB2\u4F53\u56DE\u6536\u3002",targets:[0,1],pattern:"rain",revealSurface:0,reward:"\u96E8\u540E\u5C0F\u592A\u9633",motif:"sun",color:"#c59e3f",hint:"\u5DE6\u4FA7\u73BB\u7483 \xB7 \u96E8\u75D5\u4E0B\u9762\u85CF\u7740\u4E00\u4E2A\u6674\u5929"},{id:"tiny-handprints",level:"window",title:"\u7A97\u8FB9\u7684\u5C0F\u624B\u5370",tag:"\u89C2\u5BDF \u2192 \u55B7 \u2192 \u64E6 \u2192 \u5438",story:"\u53F3\u4FA7\u7A97\u4E0A\u6709\u51E0\u679A\u5E72\u6389\u7684\u5C0F\u624B\u5370\uFF0C\u8FD8\u6709\u4E00\u4E2A\u5C0F\u79D8\u5BC6\u3002",task:"\u5E72\u624B\u5370\u5148\u55B7\u6DA6\u3001\u64E6\u677E\uFF0C\u518D\u7528 WV 2 \u5438\u8D70\uFF1B\u5C11\u91CF\u5DF2\u6E7F\u6C61\u819C\u53EF\u76F4\u63A5\u5438\u9664\u3002",targets:[1],pattern:"hands",dry:!0,revealSurface:1,reward:"\u7A97\u8FB9\u7684\u5C0F\u732B",motif:"cat",color:"#799a8c",hint:"\u53F3\u4FA7\u73BB\u7483 \xB7 \u89C2\u5BDF\u5E72\u624B\u5370\u4E0E\u6E7F\u6C61\u819C"},{id:"supper-splash",level:"steam",title:"\u665A\u996D\u4E4B\u540E",tag:"\u5C40\u90E8\u84B8\u6C7D \u2192 \u64E6\u62ED",story:"\u4E00\u987F\u70ED\u95F9\u7684\u665A\u996D\uFF0C\u5728\u5DE6\u4FA7\u74F7\u7816\u4E0A\u7559\u4E0B\u4E86\u6CB9\u70B9\u3002",task:"\u84B8\u6C7D\u677E\u52A8\u5DE6\u4FA7\u6CB9\u70B9\uFF0C\u518D\u64E6\u62ED\u6536\u5C3E\uFF0C\u9732\u51FA\u82B1\u7816\u56FE\u6848\u3002",targets:[0],pattern:"splash",revealSurface:0,reward:"\u9910\u540E\u5C0F\u82B1\u7816",motif:"flower",color:"#9b9b68",hint:"\u5DE6\u4FA7\u74F7\u7816 \xB7 \u6CB9\u70B9\u91CC\u6709\u4E00\u6735\u5C0F\u82B1"},{id:"tile-memory",level:"steam",title:"\u7F1D\u9699\u91CC\u7684\u6625\u5929",tag:"\u7EC6\u8282\u84B8\u6C7D \u2192 \u64E6\u62ED",story:"\u7EC6\u5C0F\u7684\u7816\u7F1D\u4E5F\u503C\u5F97\u88AB\u8BA4\u771F\u7167\u987E\uFF0C\u6625\u5929\u85CF\u5728\u5176\u4E2D\u3002",task:"\u6CBF\u7816\u7F1D\u84B8\u6C7D\u677E\u52A8\u79EF\u57A2\uFF0C\u518D\u64E6\u53BB\u6B8B\u7559\uFF0C\u53D1\u73B0\u53F6\u7247\u82B1\u7816\u3002",targets:[0],pattern:"grout",revealSurface:0,reward:"\u4E00\u7247\u65B0\u7EFF",motif:"leaf",color:"#739064",hint:"\u4E2D\u592E\u74F7\u7816 \xB7 \u6CBF\u7740\u7F1D\u9699\u5BFB\u627E\u53F6\u7247"},{id:"muddy-ride",level:"outdoor",title:"\u96E8\u540E\u9A91\u884C",tag:"\u8F6E\u80CE\u4E0E\u6321\u6CE5\u677F",story:"\u7ED5\u6E56\u9A91\u4E86\u4E00\u5708\uFF0C\u6CE5\u70B9\u5E26\u56DE\u6765\u4E86\uFF0C\u5FEB\u4E50\u4E5F\u5E26\u56DE\u6765\u4E86\u3002",task:"\u51B2\u51C0\u524D\u540E\u8F6E\u548C\u6321\u6CE5\u677F\u7684\u6CE5\u5C42\uFF0C\u53D1\u73B0\u9A91\u884C\u7EAA\u5FF5\u8D34\u3002",targets:[0,1,3],pattern:"mud",revealSurface:3,reward:"\u7ED5\u6E56\u4E00\u5708",motif:"wheel",color:"#668c89",hint:"\u6321\u6CE5\u677F \xB7 \u51B2\u53BB\u6CE5\u70B9\uFF0C\u627E\u51FA\u65C5\u884C\u8D34\u7EB8"},{id:"ready-to-go",level:"outdoor",title:"\u51FA\u53D1\u4E4B\u524D",tag:"\u8F66\u67B6\u4E0E\u8F66\u628A",story:"\u8F66\u8F6E\u5DF2\u7ECF\u5E72\u51C0\uFF0C\u6574\u7406\u597D\u8F66\u67B6\u548C\u8F66\u5EA7\uFF0C\u5C31\u80FD\u518D\u6B21\u51FA\u53D1\u3002",task:"\u96C6\u4E2D\u6E05\u6D01\u8F66\u67B6\u3001\u8F66\u5EA7\u4E0E\u8F66\u628A\uFF0C\u8BA9\u51FA\u53D1\u7EAA\u5FF5\u8D34\u91CD\u65B0\u663E\u73B0\u3002",targets:[2,4],pattern:"dust",revealSurface:2,reward:"\u4E0B\u4E00\u7AD9\u5C71\u91CE",motif:"mountain",color:"#83966b",hint:"\u8F66\u67B6 \xB7 \u4E00\u5F20\u5C71\u91CE\u8D34\u7EB8\u7B49\u4F60\u53D1\u73B0"}],ir=i=>Ei.find(t=>t.id===i)||null,vd=()=>crypto.getRandomValues(new Uint32Array(1))[0];function j_(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Gc=new Map;function sr(i){if(Gc.has(i.id))return Gc.get(i.id);let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#faf7e9",e.beginPath(),e.roundRect(12,12,232,232,54),e.fill(),e.strokeStyle=i.color,e.lineWidth=6,e.stroke(),e.fillStyle=i.color,e.lineWidth=11,e.lineCap="round",e.lineJoin="round";let n=o=>{e.beginPath(),o.forEach(([a,l],c)=>c?e.lineTo(a,l):e.moveTo(a,l)),e.stroke()},s=(o,a,l,c=!0)=>{e.beginPath(),e.arc(o,a,l,0,Math.PI*2),c?e.fill():e.stroke()};switch(i.motif){case"cup":e.beginPath(),e.roundRect(68,96,100,76,[5,5,26,26]),e.fill(),e.beginPath(),e.arc(170,126,24,-Math.PI/2,Math.PI/2),e.stroke(),n([[61,186],[185,186]]),n([[95,71],[101,57]]),n([[130,71],[136,57]]);break;case"paw":e.beginPath(),e.ellipse(128,154,44,34,0,0,Math.PI*2),e.fill(),[[76,113,16],[104,82,17],[150,82,17],[180,113,16]].forEach(o=>s(...o));break;case"sun":s(128,128,38);for(let o=0;o<8;o++){let a=o*Math.PI/4;n([[128+Math.cos(a)*60,128+Math.sin(a)*60],[128+Math.cos(a)*76,128+Math.sin(a)*76]])}break;case"cat":e.beginPath(),e.moveTo(76,123),e.lineTo(73,65),e.lineTo(112,91),e.lineTo(145,91),e.lineTo(182,65),e.lineTo(179,128),e.bezierCurveTo(191,204,61,204,76,123),e.fill(),e.fillStyle="#faf7e9",s(105,132,6),s(151,132,6),e.strokeStyle="#faf7e9",e.lineWidth=5,n([[119,151],[128,157],[137,151]]);break;case"flower":for(let o=0;o<6;o++){let a=o*Math.PI/3;s(128+Math.cos(a)*38,128+Math.sin(a)*38,26)}e.fillStyle="#f4d461",s(128,128,22);break;case"leaf":e.beginPath(),e.moveTo(65,184),e.bezierCurveTo(51,92,142,62,190,63),e.bezierCurveTo(197,148,150,204,65,184),e.fill(),e.strokeStyle="#faf7e9",e.lineWidth=7,n([[79,174],[166,89]]),n([[113,142],[111,105]]),n([[131,123],[163,122]]);break;case"wheel":s(128,128,68,!1),s(128,128,10);for(let o=0;o<8;o++){let a=o*Math.PI/4;n([[128+Math.cos(a)*15,128+Math.sin(a)*15],[128+Math.cos(a)*58,128+Math.sin(a)*58]])}break;default:e.beginPath(),e.moveTo(46,182),e.lineTo(106,78),e.lineTo(144,137),e.lineTo(169,98),e.lineTo(213,182),e.closePath(),e.fill(),e.fillStyle="#faf7e9",e.beginPath(),e.moveTo(87,110),e.lineTo(106,78),e.lineTo(125,110),e.lineTo(106,102),e.closePath(),e.fill(),s(183,68,13)}let r={canvas:t,url:t.toDataURL("image/png")};return Gc.set(i.id,r),r}function Q_(i,t,e){let s=document.createElement("canvas");s.width=s.height=192;let r=s.getContext("2d"),o=j_(e+t*1907);r.fillStyle="white",r.strokeStyle="white",r.lineCap="round";let a=(l,c,h,u)=>{r.beginPath(),r.ellipse(l,c,h,u,o()*2,0,Math.PI*2),r.fill()};if(i.pattern==="coffee")for(let l=0;l<5;l++)a(48+o()*92,48+o()*92,17+o()*20,12+o()*13);if(i.pattern==="paws")for(let l=0;l<4;l++){let c=32+o()*124,h=38+o()*116;a(c,h,15,12);for(let u=0;u<4;u++)a(c-17+u*11,h-20+(u===0||u===3?6:0),5,7)}if(i.pattern==="rain")for(let l=0;l<13;l++){let c=12+l*13+o()*6,h=8+o()*45;r.lineWidth=4+o()*6,r.beginPath(),r.moveTo(c,h),r.bezierCurveTo(c-10,h+50,c+9,h+75,c-4,165+o()*18),r.stroke()}if(i.pattern==="hands")for(let l=0;l<3;l++){let c=48+o()*96,h=66+l*36;a(c,h,14,20);for(let u=0;u<4;u++)r.lineWidth=6,r.beginPath(),r.moveTo(c-11+u*8,h-10),r.lineTo(c-16+u*9,h-34-o()*8),r.stroke();a(c-19,h-3,6,13)}if(i.pattern==="splash")for(let l=0;l<28;l++)a(15+o()*82,20+o()*150,3+o()*13,3+o()*9);if(i.pattern==="grout"){for(let l=32;l<192;l+=32)r.lineWidth=5+o()*4,r.beginPath(),r.moveTo(l,10),r.lineTo(l,182),r.stroke();for(let l=64;l<192;l+=64)r.lineWidth=7,r.beginPath(),r.moveTo(9,l),r.lineTo(183,l),r.stroke()}if(i.pattern==="mud"){r.globalAlpha=.48,r.fillRect(0,0,192,192),r.globalAlpha=1;for(let l=0;l<30;l++)a(o()*192,o()*192,8+o()*23,5+o()*15)}if(i.pattern==="dust"){r.globalAlpha=.55,r.fillRect(0,0,192,192),r.globalAlpha=1;for(let l=0;l<12;l++)a(o()*192,o()*192,12+o()*25,8+o()*15)}return{canvas:s,c:r}}function Md(i,t,e){let n=i.surfaces[t.revealSurface],s=192,r=.52,o=.52;if(t.pattern==="splash"&&(r=.27),n.partId){let y=1/0;for(let x=10;x<182;x++)for(let E=10;E<182;E++){if(n.initial[x*s+E]<.1)continue;let S=(E/s-.45)**2+(1-x/s-.78)**2;S<y&&(y=S,r=(E+.5)/s,o=1-(x+.5)/s)}}let a=je.clamp(Math.min(n.width,n.height)*.28,.18,.46),l=a/n.width*.7,c=a/n.height*.7;i.surfaces.forEach((y,x)=>{y.requiresWet=t.dry===!0;let E=t.targets.includes(x),S;if(E){let{c:A}=Q_(t,x,e);x===t.revealSurface&&(A.fillStyle="white",A.globalAlpha=1,A.beginPath(),A.ellipse(r*s,(1-o)*s,l*s,c*s,0,0,Math.PI*2),A.fill()),S=A.getImageData(0,0,s,s).data}y.total=0,y.loosened=0,y.probeUVs=[];for(let A=0;A<s*s;A++){let I=E?y.initial[A]*S[A*4+3]/255:0;y.initial[A]=y.remaining[A]=I,y.total+=y.initial[A],y.wet[A]=y.kind==="glass"&&!t.dry?1:0,y.loosened+=y.initial[A]*y.wet[A]}y.left=y.total,y.partDone=!E,y.changed=!0,y.refresh();for(let A=8;A<s;A+=12)for(let I=8;I<s;I+=12)y.initial[A*s+I]>.04&&y.probeUVs.push({u:I/s,v:1-A/s})});let h=new Ke(sr(t).canvas);h.colorSpace=ye;let u=new Ve({map:h,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}),d=new re(new Sn(a,a),u);d.name="commission-discovery",n.hitMesh.add(d),d.position.set((r-.5)*n.width,(o-.5)*n.height,n.partId?.008:.002),d.renderOrder=2;let f=[],m=0;for(let y=0;y<s;y++)for(let x=0;x<s;x++)if(((x/s-r)/l)**2+((1-y/s-o)/c)**2<1){let E=y*s+x;n.initial[E]>0&&(f.push(E),m+=n.initial[E])}let _=!1,g=!1,p=0;function M(){let y=0;return f.forEach(x=>y+=n.remaining[x]),p=m?Math.max(0,Math.min(1,1-y/m)):0,g=p>=.92,u.opacity=_?0:Math.max(0,Math.min(1,(p-.08)/.84)),{progress:p,revealed:g}}return{update:M,setBefore(y){_=y,M()},get state(){return{progress:p,revealed:g,surface:t.revealSurface,u:r,v:o}}}}var bd={"coffee-break":"PUZZI 8-1 \xB7 \u5C40\u90E8\u55B7\u62BD \u2192 \u6536\u4F59\u6C34 \u2192 \u901A\u98CE","paw-weekend":"PUZZI 8-1 \xB7 \u91CD\u53E0\u55B7\u62BD \u2192 \u68C0\u67E5\u6E7F\u75D5 \u2192 \u62BD\u5438","rain-window":"WV 2 \xB7 \u6E7F\u6C61\u819C\u4E0E\u51B7\u51DD\u6C34 \u2192 \u76F4\u63A5\u5438\u9664","tiny-handprints":"WV 2 \xB7 \u5E72\u624B\u5370\u55B7\u6DA6 \u2192 \u64E6\u677E \u2192 \u5438\u8D70\u6C61\u6C34","supper-splash":"SC4D \xB7 \u84B8\u6C7D\u677E\u52A8\u6CB9\u70B9 \u2192 \u64E6\u53BB\u6B8B\u7559","tile-memory":"SC4D \xB7 \u84B8\u6C7D\u5904\u7406\u7816\u7F1D \u2192 \u64E6\u62ED\u6536\u5C3E","muddy-ride":"KHB AIR \xB7 \u51B2\u6D17\u8F6E\u80CE\u4E0E\u6321\u6CE5\u677F\u6CE5\u5C42","ready-to-go":"KHB AIR \xB7 \u8986\u76D6\u8F66\u67B6\u3001\u8F66\u5EA7\u4E0E\u8F66\u628A"};var Sd="karcher-collection:v1";function Ed({onStart:i,onPause:t,getCurrent:e,getSave:n}){let s=p=>document.querySelector(p),r=s("#commission-dialog"),o="jobs",a={},l=!0,c="";try{let p=JSON.parse(localStorage.getItem(Sd)||"{}");if(p.version===1&&p.records&&typeof p.records=="object")for(let M of Ei){let y=p.records[M.id];y&&Number.isSafeInteger(y.count)&&y.count>0&&Number.isFinite(y.firstAt)&&typeof y.lastRun=="string"&&(a[M.id]={count:y.count,firstAt:y.firstAt,lastRun:y.lastRun})}}catch{l=!1,c="\u8BB0\u5F55\u8BFB\u53D6\u5931\u8D25\uFF1B\u672C\u6B21\u83B7\u5F97\u7684\u8BB0\u5F55\u4ECD\u4F1A\u4FDD\u7559\u5728\u9875\u9762\u4E2D\u3002"}for(let p of Ei){let M=n(p.id);M?.completed&&!a[p.id]&&(a[p.id]={count:1,firstAt:Date.now(),lastRun:p.id+":"+M.seed})}let h=p=>!!a[p];function u(){try{localStorage.setItem(Sd,JSON.stringify({version:1,records:a})),l=!0,c=""}catch{l=!1,c="\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u8BB0\u5F55 \xB7 \u672C\u6B21\u53EF\u67E5\u770B\uFF0C\u8BF7\u52FF\u5173\u95ED\u9875\u9762\u3002"}}function d(){let p=e(),M=Object.keys(a).length,y=s("#product-mastery");y||(y=document.createElement("div"),y.id="product-mastery",y.className="product-mastery",y.setAttribute("aria-label","\u4EA7\u54C1\u6E05\u6D01\u65B9\u6CD5\u8BB0\u5F55"),s(".collection-progress").after(y)),y.innerHTML=Jt.map(x=>{let E=Ei.filter(A=>A.level===x.id),S=E.filter(A=>h(A.id)).length;return"<div><strong>"+x.product+"</strong><span>"+S+" / "+E.length+" \u79CD\u60C5\u666F\u5DF2\u5B8C\u6210</span><small>"+(S===E.length?"\u4E24\u79CD\u6E05\u6D01\u60C5\u51B5\u90FD\u8BD5\u8FC7\u4E86":S?"\u6362\u79CD\u6C61\u6E0D\uFF0C\u518D\u7EC3\u4E00\u6B21\u5224\u65AD":"\u4ECE\u4E00\u4E2A\u751F\u6D3B\u95EE\u9898\u5F00\u59CB")+"</small></div>"}).join(""),s("#collection-count").textContent=M+" / 8",s("#collection-caption").textContent=M===8?"\u516B\u7C7B\u6E05\u6D01\u95EE\u9898\u90FD\u5DF2\u89E3\u51B3\u3002\u518D\u63A5\u4E00\u5355\uFF0C\u89C2\u5BDF\u65B0\u7684\u6C61\u6E0D\u72B6\u6001\u3002":"\u8BB0\u4E0B\u7528\u8FC7\u7684\u4EA7\u54C1\u3001\u5904\u7406\u65B9\u6CD5\u548C\u91CD\u65B0\u7115\u65B0\u7684\u65E5\u5E38\u3002",s("#collection-total").textContent=M+" / 8 \u5355",s("#collection-bar").style.width=M/8*100+"%",s("#commission-storage").textContent=c,s("#commission-storage").hidden=!c,s("#commission-tab-jobs").setAttribute("aria-selected",String(o==="jobs")),s("#commission-tab-collection").setAttribute("aria-selected",String(o==="collection")),s("#commission-tab-jobs").tabIndex=o==="jobs"?0:-1,s("#commission-tab-collection").tabIndex=o==="collection"?0:-1,s("#commission-jobs").hidden=o!=="jobs",s("#commission-collection").hidden=o!=="collection",s("#commission-jobs").innerHTML=Ei.map((x,E)=>{let S=n(x.id),A=p?.id===x.id&&!p.completed,I=S&&!S.completed&&S.percent>0,w=A?"\u7EE7\u7EED\u8FD9\u5355":I?"\u7EE7\u7EED \xB7 "+Math.floor(S.percent)+"%":h(x.id)?"\u518D\u6D17\u4E00\u6B21 \xB7 \u65B0\u6C61\u6E0D":"\u63A5\u4E0B\u8FD9\u5355";return'<article class="job-card"><div class="job-top"><span>\u59D4\u6258 '+String(E+1).padStart(2,"0")+" \xB7 "+Jt.find(v=>v.id===x.level).product+'</span><span class="job-earned">'+(h(x.id)?"\u5DF2\u8BB0\u5F55 \u2713":"\u5F85\u5904\u7406")+"</span></div><h3>"+x.title+"</h3><p>"+x.story+'</p><span class="job-tag">'+x.tag+'</span><div class="job-prize"><img src="'+sr(x).url+'" alt="'+x.reward+'\u56FE\u6848\u9884\u89C8"><span><small>\u5B8C\u6210\u6D41\u7A0B\uFF0C\u7559\u4E0B\u6E05\u6D01\u8BB0\u5F55</small><strong>'+x.reward+'</strong></span></div><button class="primary" data-job="'+x.id+'">'+w+" \u2192</button></article>"}).join(""),s("#commission-collection").innerHTML=Ei.map(x=>'<article class="collection-item '+(h(x.id)?"earned":"locked")+'"><img src="'+sr(x).url+'" alt="'+x.reward+(h(x.id)?"\uFF0C\u5DF2\u8BB0\u5F55":"\uFF0C\u672A\u8BB0\u5F55\u9884\u89C8")+'"><h3>'+x.reward+'</h3><p class="collection-method">'+bd[x.id]+"</p><p>"+(h(x.id)?"\u5DF2\u5B8C\u6210 "+a[x.id].count+" \u6B21":x.title+" \xB7 \u5B8C\u6210\u540E\u83B7\u5F97")+'</p><button data-job="'+x.id+'">'+(h(x.id)?"\u91CD\u6E29\u8FD9\u6BB5\u6E05\u6D01":"\u5904\u7406\u8FD9\u4E2A\u95EE\u9898")+" \u2197</button></article>").join("")}function f(p="jobs"){t(),o=p,d(),r.open||r.showModal()}function m(p){let M=ir(p);M&&(r.close(),i(M))}r.addEventListener("click",p=>{let M=p.target.closest("[data-job]");M?m(M.dataset.job):p.target===r&&r.close()}),s("#close-commissions").addEventListener("click",()=>r.close()),s("#commission-tab-jobs").addEventListener("click",()=>{o="jobs",d()}),s("#commission-tab-collection").addEventListener("click",()=>{o="collection",d()}),r.querySelector("[role=tablist]").addEventListener("keydown",p=>{["ArrowLeft","ArrowRight","Home","End"].includes(p.key)&&(p.preventDefault(),o=p.key==="Home"?"jobs":p.key==="End"||o==="jobs"?"collection":"jobs",d(),s(o==="jobs"?"#commission-tab-jobs":"#commission-tab-collection").focus())}),s("#open-commissions").addEventListener("click",()=>f()),s("#open-collection").addEventListener("click",()=>f("collection")),s("#change-commission").addEventListener("click",()=>f()),s("#result-collection").addEventListener("click",()=>f("collection")),s("#next-commissions").addEventListener("click",()=>f()),s("#next-commission-choices").addEventListener("click",p=>{let M=p.target.closest("[data-next-job]");M&&i(ir(M.dataset.nextJob))});function _(p,M){let y=p.id+":"+M,x=a[p.id];return x?.lastRun===y?!1:(a[p.id]={count:(x?.count||0)+1,firstAt:x?.firstAt||Date.now(),lastRun:y},u(),d(),!x)}function g(p,M,y=p?.level){s("#commission-reward").hidden=!p,s("#next-commission-panel").hidden=!1,s("#result-collection").hidden=!p,p&&(s("#reward-art").src=sr(p).url,s("#reward-art").alt=p.reward,s("#reward-title").textContent=(M?"\u65B0\u8BB0\u5F55 \xB7 ":"\u518D\u6B21\u7115\u65B0 \xB7 ")+p.reward,s("#reward-copy").textContent=l?"\u5DF2\u6536\u5165\u6E05\u6D01\u4EFB\u52A1\u8BB0\u5F55 \xB7 "+Object.keys(a).length+" / 8 \u5355":c);let x=Ei.filter(S=>S.id!==p?.id).sort((S,A)=>Number(h(S.id))-Number(h(A.id))),E=[x.find(S=>S.level===y),x.find(S=>S.level!==y)].filter(Boolean);s("#next-commission-choices").innerHTML=E.map(S=>'<button data-next-job="'+S.id+'"><img src="'+sr(S).url+'" alt=""><span><strong>'+S.title+"</strong><small>"+(S.level===y?"\u540C\u4EA7\u54C1 \xB7 \u65B0\u7684\u6E05\u6D01\u60C5\u51B5":"\u6362\u79CD\u624B\u611F \xB7 "+Jt.find(A=>A.id===S.level).product)+"</small></span><b>\u2192</b></button>").join("")}return d(),{open:f,award:_,completed:g,refresh:d,get active(){return r.open},get state(){return{count:Object.keys(a).length,ids:Object.keys(a),persistent:l}}}}var De=i=>document.querySelector(i);function wd(i,t,e,n,s=null,r=null){De("#process-panel").hidden=!1;let o=De("#process-readouts .recovery");if(o.hidden=t==="steam"||t==="outdoor",t==="steam"||t==="outdoor"){let g=s?.object.userData.surface,p=g?[g]:i,M=0,y=0,x=0;for(let U of p)if(M+=U.total,y+=U.left,t==="steam")for(let O=0;O<U.initial.length;O++)x+=U.remaining[O]*U.wet[O];let E=M?y/M:0,S=y?x/y:0,A=t==="steam";De("#process-product").textContent=A?"SC4D \xB7 \u84B8\u6C7D\u4E0E\u64E6\u62ED":"KHB AIR \xB7 \u770B\u90E8\u4F4D\u9009\u8986\u76D6",De("#process-dirt").textContent=E<.035?"\u5F53\u524D\u6C61\u6E0D\u5DF2\u5904\u7406":"\u4ECD\u6709"+(A?"\u6CB9\u57A2":"\u6CE5\u70B9"),De("#process-water").textContent=A?S>.6?"\u591A\u6570\u6CB9\u57A2\u5DF2\u677E\u52A8":S>.15?"\u90E8\u5206\u6CB9\u57A2\u5DF2\u677E\u52A8":"\u7B49\u5F85\u84B8\u6C7D\u677E\u52A8":g?.partLabel||"\u6574\u8F66\u5206\u90E8\u4F4D\u6E05\u6D01",De("#process-dirt-bar").style.width=E*100+"%",De("#process-water-bar").style.width=(A?S:1-E)*100+"%";let I;if(n)I=A?"\u84B8\u6C7D\u677E\u52A8\u4E0E\u64E6\u62ED\u5DF2\u5B8C\u6210\uFF0C\u53A8\u623F\u6062\u590D\u6E05\u723D\u3002":"\u6CE5\u70B9\u5DF2\u51B2\u8D70\uFF0C\u770B\u770B\u8F66\u67B6\u3001\u8F6E\u80CE\u548C\u6321\u6CE5\u677F\u7684\u53D8\u5316\u3002";else if(A)I=S>.6?"\u6CB9\u57A2\u989C\u8272\u5DF2\u53D8\u6D45\uFF1A\u79FB\u52A8\u6E05\u6D01\u5E03\u5E26\u8D70\u677E\u52A8\u6B8B\u7559\u3002":e==="wipe"?"\u8FD9\u91CC\u8FD8\u6709\u9644\u7740\u6CB9\u57A2\uFF1A\u5207\u6362\u84B8\u6C7D\uFF0C\u5728\u6C61\u70B9\u6216\u7816\u7F1D\u7A0D\u4F5C\u505C\u7559\u3002":"\u89C2\u5BDF\u6CB9\u819C\u53D8\u5316\uFF1B\u5DF2\u677E\u52A8\u5904\u53EF\u4EE5\u64E6\u53BB\uFF0C\u987D\u56FA\u7816\u7F1D\u591A\u505C\u7559\u4E00\u4F1A\u513F\u3002";else{let U=/wheel|fender/.test(g?.partId||"");I=g?U?"\u8F6E\u80CE\u548C\u6321\u6CE5\u677F\uFF1A\u6247\u5F62\u8986\u76D6\u5927\u7247\u6CE5\u70B9\uFF0C\u7A84\u5904\u53EF\u6362\u96C6\u4E2D\u6C34\u675F\u3002":"\u8F66\u67B6\u4E0E\u8F66\u628A\uFF1A\u96C6\u4E2D\u6C34\u675F\u65B9\u4FBF\u5BF9\u51C6\u7EC6\u90E8\uFF0C\u6CBF\u7BA1\u67B6\u9010\u6BB5\u6E05\u6D01\u3002":"\u5148\u770B\u6CE5\u70B9\u843D\u5728\u54EA\u4E00\u5904\uFF0C\u518D\u9009\u6247\u5F62\u8986\u76D6\u6216\u96C6\u4E2D\u6E05\u7406\uFF1B\u65E0\u9700\u6574\u8F66\u53CD\u590D\u51B2\u6D17\u3002"}De("#process-observation").textContent=(g&&!n?"\u5F53\u524D\u843D\u70B9 \xB7 ":"")+I,De("#process-note").textContent=A?"\u677E\u52A8\u7A0B\u5EA6\u4E3A\u6E38\u620F\u793A\u610F\uFF1BSC4D \u4E0D\u5728\u6B64\u56DE\u6536\u6C61\u6C34\u3002\u9644\u4EF6\u4E0E\u9002\u7528\u6750\u8D28\u4EE5\u8BF4\u660E\u4E66\u4E3A\u51C6\u3002":"\u8986\u76D6\u65B9\u5F0F\u4E3A\u73A9\u6CD5\u793A\u610F\uFF0C\u4E0D\u4EE3\u8868\u771F\u5B9E\u538B\u529B\u6216\u6C34\u91CF\uFF1B\u4FDD\u6301\u65E0\u7EBF\u3001\u63A5\u74F6\u4F9B\u6C34\u7684\u4EA7\u54C1\u8BBE\u5B9A\u3002";let w=A?["\u84B8\u6C7D \xB7 \u677E\u52A8\u6CB9\u57A2","\u64E6\u62ED \xB7 \u5E26\u8D70\u6B8B\u7559"]:["\u6247\u5F62 \xB7 \u8986\u76D6\u5927\u7247","\u96C6\u4E2D \xB7 \u5BF9\u51C6\u7EC6\u90E8"],v=A?e==="steam"?0:1:e==="fan"?0:1,P=w.map((U,O)=>'<span class="'+(O===v&&!n?"current":"")+'">'+U+"</span>").join("");De("#process-steps").innerHTML!==P&&(De("#process-steps").innerHTML=P);return}let a=r||ns(i),l=t==="fabric";De("#process-product").textContent=l?"PUZZI \xB7 \u55B7\u62BD\u4E0E\u56DE\u6536":"WV 2 \xB7 \u89C2\u5BDF\u518D\u6E05\u6D01",De("#process-dirt").textContent=a.dirt<.025?"\u6C61\u6E0D\u5DF2\u5904\u7406":a.bound>.04?"\u4ECD\u6709\u9644\u7740\u6C61\u6E0D":"\u6C61\u819C\u5DF2\u677E\u52A8",De("#process-water").textContent=l?a.wet>.3?"\u660E\u663E\u6E7F\u75D5":a.wet>.1?"\u8FD8\u6709\u4F59\u6C34":a.dirt>.025?"\u5C1A\u672A\u56DE\u6536 \xB7 \u5148\u5904\u7406\u6C61\u6E0D":"\u5DF2\u56DE\u6536 \xB7 \u5F85\u901A\u98CE\u667E\u5E72":a.wet>.1?"\u53EF\u89C1\u6C34\u819C":a.wet>.035?"\u5C11\u91CF\u6C34\u75D5":"\u6C34\u75D5\u5DF2\u6536\u51C0",De("#process-dirt-bar").style.width=Math.min(100,a.dirt*100)+"%",De("#process-water-bar").style.width=Math.min(100,a.wet*100)+"%",De("#recovery-fill").style.height=Math.min(90,a.recovered*32)+"%",De("#recovery-label").textContent=a.recovered>.015?"\u5DF2\u6536\u96C6\u6E05\u6D01\u6DB2":"\u7B49\u5F85\u56DE\u6536";let c=a.bound,h=a.wet,u=a.dirt,d=!1;if(s?.object.userData.surface.process){let g=s.object.userData.surface,p=Math.min(191,Math.max(0,Math.floor((1-s.uv.y)*192)))*192+Math.min(191,Math.max(0,Math.floor(s.uv.x*192)));g.initial[p]>.001&&(c=g.process.bound[p]/g.initial[p],h=g.wet[p],u=g.remaining[p]/g.initial[p],d=!0)}!d&&c>.025&&t==="window"&&(h=a.ready/c>.5?.8:0);let f;n?f=l?"\u6E05\u6D01\u4E0E\u56DE\u6536\u5DF2\u5B8C\u6210\u3002\u7EC7\u7269\u4ECD\u9700\u901A\u98CE\u667E\u5E72\uFF0C\u518D\u6062\u590D\u4F7F\u7528\u3002":"\u5DF2\u5438\u8D70\u6C61\u6C34\uFF0C\u8BA9\u7A97\u5916\u91CD\u65B0\u6E05\u6670\u3002":l?f=u>.025?e==="suction"&&c>.025?"\u62BD\u5438\u6536\u6C34\uFF0C\u4F46\u9644\u7740\u6C61\u6E0D\u8FD8\u5728\uFF1B\u5207\u6362\u55B7\u62BD\uFF0C\u7F13\u6162\u91CD\u53E0\u8986\u76D6\u3002":"\u8BA9\u55B7\u62BD\u5438\u5934\u7F13\u6162\u5212\u8FC7\u6C61\u533A\uFF1B\u6DF1\u8272\u6E7F\u75D5\u8BF4\u660E\u8FD8\u9700\u8981\u56DE\u6536\u4F59\u6C34\u3002":h>.1?"\u6C61\u6E0D\u5DF2\u53BB\uFF0C\u4ECD\u6709\u6E7F\u75D5\uFF1A\u505C\u6B62\u55B7\u6C34\uFF0C\u5207\u6362\u300C\u4EC5\u62BD\u5438\u300D\u6536\u4F59\u6C34\u3002":"\u8FD9\u4E00\u5904\u5DF2\u5904\u7406\u597D\uFF1B\u67E5\u627E\u5176\u4ED6\u6C61\u6E0D\u4E0E\u4F59\u6C34\uFF0C\u5B8C\u6210\u540E\u901A\u98CE\u3002":c>.025?f=h<.12?"\u5E72\u624B\u5370\u4ECD\u9644\u7740\uFF1A\u5148\u7528\u8F85\u52A9\u55B7\u74F6\u6DA6\u6E7F\uFF0C\u518D\u7528\u6E05\u6D01\u5E03\u64E6\u677E\u3002":e==="squeegee"?"\u5438\u6C34\u4E0D\u80FD\u66FF\u4EE3\u64E6\u6D17\uFF1A\u5148\u7528\u6E05\u6D01\u5E03\u628A\u5DF2\u6E7F\u6DA6\u7684\u624B\u5370\u64E6\u677E\u3002":"\u624B\u5370\u5DF2\u6E7F\u6DA6\uFF1A\u7528\u6E05\u6D01\u5E03\u64E6\u677E\uFF0C\u968F\u540E\u4EA4\u7ED9 WV 2 \u56DE\u6536\u6C61\u6C34\u3002":f=h>.035||u>.025?"\u8FD9\u91CC\u5DF2\u662F\u6E7F\u6C61\u819C\u6216\u51B7\u51DD\u6C34\uFF0C\u53EF\u76F4\u63A5\u7528 WV 2 \u5438\u8D70\uFF0C\u65E0\u9700\u91CD\u590D\u55B7\u64E6\u3002":"\u8FD9\u4E00\u5904\u5DF2\u901A\u900F\u3002\u67E5\u627E\u5269\u4F59\u6C61\u6E0D\u6216\u6C34\u75D5\uFF0C\u907F\u514D\u91CD\u590D\u55B7\u6C34\u3002",De("#process-observation").textContent=(d&&!n?"\u5F53\u524D\u843D\u70B9 \xB7 ":"")+f,De("#process-note").textContent=l?"\u6C34\u5206\u3001\u56DE\u6D41\u4E0E\u6C34\u7BB1\u5747\u4E3A\u73A9\u6CD5\u793A\u610F\uFF1B\u4E0D\u662F\u6E7F\u5EA6\u8BFB\u6570\u3002":"\u5E72\u624B\u5370\u5448\u68D5\u8272\uFF0C\u64E6\u677E\u540E\u53D8\u6D45\uFF1B\u84DD\u8272\u6DB2\u819C\u9700\u8981\u5438\u8D70\u3002\u6C34\u7BB1\u4E3A\u73A9\u6CD5\u793A\u610F\u3002";let m=l?e==="extract"?0:1:["spray","glass-wipe","squeegee"].indexOf(e),_=(l?["\u55B7\u62BD\u5E26\u8D70\u6C61\u6E0D","\u62BD\u5438\u6536\u4F59\u6C34","\u901A\u98CE\u667E\u5E72"]:["\u8F85\u52A9\u55B7\u74F6 \xB7 \u6DA6\u6E7F","\u6E05\u6D01\u5E03 \xB7 \u64E6\u677E","WV 2 \xB7 \u56DE\u6536"]).map((g,p)=>'<span class="'+(p===m&&!n?"current":"")+'">'+(p+1)+" "+g+"</span>").join("");De("#process-steps").innerHTML!==_&&(De("#process-steps").innerHTML=_)}var pl="https://www.kaercher.com/int/inside-kaercher/company/sponsoring/cultural-sponsorship.html",ao=[{id:"wv-water",level:"window",number:"01",category:"\u4EA7\u54C1\u77E5\u8BC6",product:"WV 2",title:"\u901A\u900F\u7684\u6700\u540E\u4E00\u6B65\uFF0C\u662F\u5438\u8D70\u6C61\u6C34",body:"\u8F85\u52A9\u55B7\u74F6\u548C\u5FAE\u7EA4\u7EF4\u6E05\u6D01\u5E03\u5148\u5904\u7406\u73BB\u7483\u4E0A\u7684\u6C61\u6E0D\uFF0CWV \u7684\u7535\u52A8\u62BD\u5438\u968F\u540E\u56DE\u6536\u6DB2\u4F53\u3002\u201C\u55B7\u3001\u64E6\u3001\u5438\u201D\u4E09\u4E2A\u6B65\u9AA4\uFF0C\u5BF9\u5E94\u7740\u4E0D\u540C\u7684\u6E05\u6D01\u4F5C\u7528\u3002",image:"assets/cards/wv.jpg",alt:"\u5361\u8D6B\u5B98\u7F51 WV 2 Plus \u4EA7\u54C1\u53CA\u8F85\u52A9\u55B7\u74F6\u3001\u6E05\u6D01\u5E03",source:"\u5361\u8D6B\u56FD\u9645\u5B98\u7F51 \xB7 WV 2 Plus",url:"https://www.kaercher.com/int/home-garden/window-vacs/wv-2-plus-16336400.html",imageUrl:"https://s1.kaercher-media.com/mam/16336400/mainproduct/211500/d0.jpg",note:"\u56FE\u7247\u4E3A\u5B98\u7F51 WV 2 Plus \u5730\u533A\u7248\u672C\uFF0C\u914D\u4EF6\u4EE5\u5B9E\u9645\u5957\u88C5\u4E3A\u51C6\u3002"},{id:"puzzi-extraction",level:"fabric",number:"02",category:"\u4EA7\u54C1\u77E5\u8BC6",product:"PUZZI 8/1",title:"\u6C61\u6E0D\u79BB\u5F00\u7EC7\u7269\uFF0C\u4E5F\u6709\u53BB\u5904",body:"Puzzi \u628A\u6E05\u6D01\u6DB2\u55B7\u5165\u7EC7\u7269\u7EA4\u7EF4\uFF0C\u518D\u628A\u677E\u52A8\u7684\u6C61\u57A2\u548C\u6DB2\u4F53\u4E00\u8D77\u62BD\u56DE\u3002\u900F\u660E\u9876\u76D6\u548C\u624B\u6301\u5438\u5634\u4FBF\u4E8E\u89C2\u5BDF\u6C61\u6C34\uFF0C\u6E05\u6D01\u7684\u53D8\u5316\u4E5F\u53D1\u751F\u5728\u56DE\u6536\u9014\u4E2D\u3002",image:"assets/cards/puzzi.jpg",alt:"\u5361\u8D6B\u5B98\u7F51 Puzzi 8/1 \u55B7\u62BD\u673A\u3001\u8F6F\u7BA1\u4E0E\u624B\u6301\u5438\u5634",source:"\u5361\u8D6B\u56FD\u9645\u5B98\u7F51 \xB7 Puzzi 8/1",url:"https://www.kaercher.com/int/professional/carpet-cleaner/spray-extraction-machines/puzzi-8-1-11002400.html",imageUrl:"https://s1.kaercher-media.com/mam/11002400/mainproduct/196789/d0.jpg",note:"\u56FE\u7247\u4E3A\u56FD\u9645\u5B98\u7F51\u7248\u672C\uFF1B\u62BD\u5438\u6709\u52A9\u4E8E\u5E72\u71E5\uFF0C\u4E0D\u4EE3\u8868\u7EC7\u7269\u77AC\u95F4\u5168\u5E72\u3002"},{id:"sc-steam",level:"steam",number:"03",category:"\u4EA7\u54C1\u77E5\u8BC6",product:"SC 4 DELUXE",title:"\u9762\u5BF9\u4E0D\u540C\u89D2\u843D\uFF0C\u6362\u4E00\u79CD\u63A5\u89E6\u65B9\u5F0F",body:"SC 4 Deluxe \u7684\u84B8\u6C7D\u6E05\u6D01\u53EF\u4EE5\u914D\u5408\u5730\u9762\u6E05\u6D01\u5934\u3001\u624B\u6301\u55B7\u5634\u548C\u5706\u5237\u7B49\u9644\u4EF6\uFF0C\u5904\u7406\u4E0D\u540C\u8868\u9762\u4E0E\u7F1D\u9699\u3002\u5408\u9002\u7684\u9644\u4EF6\uFF0C\u8BA9\u84B8\u6C7D\u4F5C\u7528\u5230\u9700\u8981\u6E05\u6D01\u7684\u4F4D\u7F6E\u3002",image:"assets/cards/sc.jpg",alt:"\u5361\u8D6B\u5B98\u7F51 SC 4 Deluxe \u4E0E\u5176\u56FD\u9645\u7248\u9644\u4EF6\u5C55\u793A",source:"\u5361\u8D6B\u56FD\u9645\u5B98\u7F51 \xB7 SC 4 Deluxe",url:"https://www.kaercher.com/int/home-garden/steam-cleaners/sc-4-deluxe-15134600.html",imageUrl:"https://s1.kaercher-media.com/mam/15134600/mainproduct/216559/d0.jpg",note:"\u56FE\u7247\u4E3A\u56FD\u9645\u7248\u9644\u4EF6\u5C55\u793A\uFF0C\u4E0D\u8868\u793A\u4E2D\u56FD\u5957\u88C5\u5305\u542B\u5168\u90E8\u9644\u4EF6\uFF1B\u6750\u8D28\u9002\u7528\u6027\u4EE5\u8BF4\u660E\u4E66\u4E3A\u51C6\u3002"},{id:"khb-outdoors",level:"outdoor",number:"04",category:"\u4EA7\u54C1\u77E5\u8BC6",product:"KHB AIR",title:"\u628A\u6E05\u6D01\u5E26\u5230\u6237\u5916",body:"\u5361\u8D6B\u4E2D\u56FD\u5B98\u7F51\u4ECB\u7ECD KHB Air \u7684\u65E0\u7EBF\u8BBE\u8BA1\u3001\u6298\u53E0\u7ED3\u6784\u548C\u63A5\u74F6\u4F9B\u6C34\u65B9\u5F0F\u3002\u9664\u4E86\u8F66\u8F86\uFF0C\u82B1\u56ED\u5BB6\u5177\u4E0E\u9732\u53F0\u4E5F\u662F\u6587\u7AE0\u4ECB\u7ECD\u7684\u6E05\u6D01\u573A\u666F\uFF0C\u8BA9\u6237\u5916\u6536\u5C3E\u66F4\u65B9\u4FBF\u3002",image:"assets/cards/khb.jpg",alt:"\u5361\u8D6B\u4E2D\u56FD\u5B98\u7F51 KHB Air \u6298\u53E0\u6E05\u6D17\u673A\u6536\u7EB3\u5C55\u793A",source:"\u5361\u8D6B\u4E2D\u56FD\u5B98\u7F51 \xB7 \u81EA\u9A7E\u8E0F\u9752\u5FC5\u5907",url:"https://www.kahechina.com/article/karcher-story/springKHB.html",imageUrl:"https://static.kahechina.com/img/20250321/20250321185512_vlpz.jpg?x-oss-process=image/resize,w_830",note:"\u5B98\u65B9\u6587\u7AE0\u53D1\u5E03\u4E8E 2025-03-21\uFF1B\u5177\u4F53\u6C34\u6E90\u3001\u9644\u4EF6\u548C\u64CD\u4F5C\u6761\u4EF6\u4EE5\u8BF4\u660E\u4E66\u4E3A\u51C6\u3002"},{id:"culture-since-1980",number:"05",category:"\u54C1\u724C\u6545\u4E8B",product:"\u6587\u5316\u6E05\u6D01",title:"\u6E05\u6D01\uFF0C\u4E5F\u80FD\u5E2E\u52A9\u5386\u53F2\u88AB\u770B\u89C1",body:"\u5361\u8D6B\u5B98\u7F51\u4ECB\u7ECD\uFF0C\u81EA 1980 \u5E74\u8D77\uFF0C\u54C1\u724C\u4EE5\u6587\u5316\u8D5E\u52A9\u7684\u5F62\u5F0F\uFF0C\u4E3A\u4E16\u754C\u5404\u5730\u5386\u53F2\u5EFA\u7B51\u5F00\u5C55\u514D\u8D39\u6E05\u6D01\u9879\u76EE\u3002\u6E05\u6D01\u7684\u5BF9\u8C61\u4E0D\u53EA\u6709\u65E5\u7528\u54C1\uFF0C\u4E5F\u5305\u62EC\u4EBA\u4EEC\u5171\u540C\u73CD\u89C6\u7684\u6587\u5316\u7A7A\u95F4\u3002",image:"assets/cards/heritage.jpg",alt:"\u5361\u8D6B\u5B98\u7F51\u6587\u5316\u6E05\u6D01\u9879\u76EE\u7167\u7247\u62FC\u56FE",source:"\u5361\u8D6B\u56FD\u9645\u5B98\u7F51 \xB7 Cultural Sponsorship",url:pl,imageUrl:"https://s1.kaercher-media.com/media/image/selection/192127/d0/90-cleaning-projects-key-visual.jpg",note:"\u56FE\u7247\u4E3A\u5B98\u7F51\u5468\u5E74\u6E05\u6D01\u9879\u76EE\u62FC\u56FE\uFF1B\u4E13\u4E1A\u9879\u76EE\u4E0D\u4EE3\u8868\u672C\u6E38\u620F\u56DB\u6B3E\u4EA7\u54C1\u53EF\u7528\u4E8E\u6587\u7269\u6E05\u6D17\u3002"},{id:"culture-lingshan",number:"06",category:"\u54C1\u724C\u6545\u4E8B",product:"\u4E2D\u56FD \xB7 \u65E0\u9521",title:"\u4E00\u6BB5\u79BB\u82CF\u5DDE\u5F88\u8FD1\u7684\u6E05\u6D01\u6545\u4E8B",body:"\u5361\u8D6B\u7684\u5B98\u65B9\u6587\u5316\u6E05\u6D01\u9879\u76EE\u540D\u5F55\u4E2D\uFF0C\u6709\u4E2D\u56FD\u65E0\u9521\u7684\u7075\u5C71\u5927\u4F5B\u3002\u4F60\u770B\u5230\u7684\u662F\u5B98\u7F51\u6536\u5F55\u7684\u9879\u76EE\u7167\u7247\uFF1A\u6E05\u6D01\u7559\u4E0B\u7684\u53D8\u5316\uFF0C\u4E5F\u8FDE\u63A5\u7740\u5730\u65B9\u7684\u6587\u5316\u8BB0\u5FC6\u3002",image:"assets/cards/lingshan.jpg",alt:"\u5361\u8D6B\u5B98\u7F51\u6536\u5F55\u7684\u65E0\u9521\u7075\u5C71\u5927\u4F5B\u6E05\u6D01\u9879\u76EE\u7167\u7247",source:"\u5361\u8D6B\u56FD\u9645\u5B98\u7F51 \xB7 Lingshan Buddha",url:pl,imageUrl:"https://s1.kaercher-media.com/media/image/file/174/d0/lingshan-buddha.jpg",note:"\u6B64\u4E3A\u4E13\u4E1A\u6587\u5316\u6E05\u6D01\u9879\u76EE\uFF0C\u975E\u5BB6\u7528\u8BBE\u5907\u4F7F\u7528\u793A\u8303\u3002"},{id:"culture-brandenburg",number:"07",category:"\u54C1\u724C\u6545\u4E8B",product:"\u5FB7\u56FD \xB7 \u67CF\u6797",title:"\u8BA9\u57CE\u5E02\u5730\u6807\u91CD\u65B0\u6E05\u6670",body:"\u52C3\u5170\u767B\u5821\u95E8\u88AB\u6536\u5F55\u5728\u5361\u8D6B\u7684\u5B98\u65B9\u6587\u5316\u6E05\u6D01\u9879\u76EE\u540D\u5F55\u4E2D\u3002\u8FD9\u5F20\u67CF\u6797\u5730\u6807\u7684\u9879\u76EE\u7167\u7247\uFF0C\u8BB0\u5F55\u4E86\u54C1\u724C\u6E05\u6D01\u5DE5\u4F5C\u4E0E\u57CE\u5E02\u516C\u5171\u7A7A\u95F4\u7684\u4E00\u6B21\u76F8\u9047\u3002",image:"assets/cards/gate.jpg",alt:"\u5361\u8D6B\u5B98\u7F51\u6536\u5F55\u7684\u67CF\u6797\u52C3\u5170\u767B\u5821\u95E8\u9879\u76EE\u7167\u7247",source:"\u5361\u8D6B\u56FD\u9645\u5B98\u7F51 \xB7 Brandenburg Gate",url:pl,imageUrl:"https://s1.kaercher-media.com/media/image/file/2109/d0/brandenburger-tor.jpg",note:"\u6B64\u4E3A\u4E13\u4E1A\u6587\u5316\u6E05\u6D01\u9879\u76EE\uFF0C\u975E\u5BB6\u7528\u8BBE\u5907\u4F7F\u7528\u793A\u8303\u3002"},{id:"culture-rio",number:"08",category:"\u54C1\u724C\u6545\u4E8B",product:"\u5DF4\u897F \xB7 \u91CC\u7EA6\u70ED\u5185\u5362",title:"\u6E05\u6D01\u7684\u8DB3\u8FF9\uFF0C\u6765\u5230\u91CC\u7EA6",body:"\u91CC\u7EA6\u70ED\u5185\u5362\u7684\u57FA\u7763\u50CF\uFF0C\u540C\u6837\u51FA\u73B0\u5728\u5361\u8D6B\u5B98\u7F51\u7684\u6587\u5316\u6E05\u6D01\u9879\u76EE\u540D\u5F55\u4E2D\u3002\u5B98\u65B9\u7167\u7247\u8BA9\u6211\u4EEC\u770B\u5230\uFF0C\u719F\u6089\u7684\u57CE\u5E02\u5730\u6807\u4E5F\u6709\u88AB\u4ED4\u7EC6\u7167\u6599\u7684\u65F6\u523B\u3002",image:"assets/cards/crist.jpg",alt:"\u5361\u8D6B\u5B98\u7F51\u6536\u5F55\u7684\u91CC\u7EA6\u57FA\u7763\u50CF\u6E05\u6D01\u9879\u76EE\u8FD1\u666F\u7167\u7247",source:"\u5361\u8D6B\u56FD\u9645\u5B98\u7F51 \xB7 Christ the Redeemer",url:pl,imageUrl:"https://s1.kaercher-media.com/media/image/file/1367/d0/christusstatue.jpg",note:"\u6B64\u4E3A\u4E13\u4E1A\u6587\u5316\u6E05\u6D01\u9879\u76EE\uFF0C\u975E\u5BB6\u7528\u8BBE\u5907\u4F7F\u7528\u793A\u8303\u3002"}],ml={title:"\u83B7\u5F97\u5361\u8D6B\u5927\u793C\u5305\u4E00\u4EFD",label:"\u60CA\u559C\u91D1\u5361 \xB7 1%",notice:"\u8BD5\u73A9\u6F14\u793A \xB7 \u5B9E\u7269\u5956\u54C1\u5C1A\u672A\u843D\u5B9E\uFF0C\u4E0D\u4F5C\u4E3A\u5151\u5956\u51ED\u8BC1\u3002"};var Td="karcher-story-cards:v1",Ad=["fabric","window","steam","outdoor"];function tx(i,t=globalThis.crypto){if(!Number.isSafeInteger(i)||i<1||i>4294967296)throw Error("Invalid random range");let e=Math.floor(4294967296/i)*i,n=new Uint32Array(1),s;do t.getRandomValues(n),s=n[0];while(s>=e);return s%i}function Rd(){return"run:"+crypto.randomUUID()}function Cd(i,{storage:t,random:e=tx,now:n=Date.now}={}){let s=new Set(i.map(f=>f.id)),r=new Map,o=!0,a="";function l(f){return f&&typeof f.runId=="string"&&f.runId.length<=180&&s.has(f.cardId)&&typeof f.gold=="boolean"&&Number.isFinite(f.createdAt)&&f.createdAt>0&&Ad.includes(f.level)}function c(f){return{runId:f.runId,cardId:f.cardId,gold:f.gold,createdAt:f.createdAt,level:f.level}}try{t??=globalThis.localStorage;let f=JSON.parse(t.getItem(Td)||"null");if(f){if(f.version!==1||!Array.isArray(f.receipts))throw Error("Invalid card album");for(let m of f.receipts)l(m)&&r.set(m.runId,c(m))}}catch{o=!1,a="\u5361\u518C\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\uFF1B\u672C\u6B21\u5361\u7247\u4ECD\u4FDD\u7559\u5728\u9875\u9762\u4E2D\u3002"}function h(){try{t.setItem(Td,JSON.stringify({version:1,receipts:[...r.values()]})),o=!0,a=""}catch{o=!1,a="\u6D4F\u89C8\u5668\u65E0\u6CD5\u4FDD\u5B58\u5361\u518C\uFF1B\u672C\u6B21\u5207\u5173\u4ECD\u4FDD\u7559\uFF0C\u8BF7\u52FF\u5173\u95ED\u9875\u9762\u3002"}}function u(f){if(!l(f))return null;let m=r.get(f.runId);if(m)return{...m};let _=c(f);return r.set(_.runId,_),h(),{..._}}function d(f,m){if(typeof f!="string"||!f||f.length>180||!Ad.includes(m))throw Error("Invalid cleaning run");let _=r.get(f);if(_)return{..._};let g=e(100)===0,p=[...r.values()],M=!p.some(A=>A.level===m),y=i.find(A=>A.level===m),x=new Set(p.map(A=>A.cardId)),E;if(M&&y)E=y.id;else{let A=i.flatMap(I=>Array(x.has(I.id)?1:3).fill(I.id));E=A[e(A.length)]}let S={runId:f,level:m,cardId:E,gold:g,createdAt:n()};return r.set(f,S),h(),{...S}}return{draw:d,reconcile:u,get(f){let m=r.get(f);return m?{...m}:null},get state(){return{receipts:[...r.values()].map(f=>({...f})),persistent:o,message:a}}}}var Xt=i=>document.querySelector(i);function Id(i){let t=Cd(ao),e=Xt("#story-dialog"),n=null,s="card",r=u=>ao.find(d=>d.id===u);function o(u,d){let f=document.createElement("a");return f.href=u,f.textContent=d,f.target="_blank",f.rel="noopener noreferrer",f}function a(){let u=t.state,d=new Set(u.receipts.map(f=>f.cardId)).size;Xt("#story-count").textContent=d+" / "+ao.length,Xt("#story-storage").textContent=u.message,Xt("#story-storage").hidden=!u.message}function l(u,d=!1){let f=r(u.cardId);if(!f)return;s="card",Xt("#story-album").hidden=!0,Xt("#story-detail").hidden=!1,Xt("#story-heading").textContent=d?"\u6E05\u6D01\u5B8C\u6210\uFF0C\u53D1\u73B0\u4E00\u6BB5\u65B0\u6545\u4E8B":"\u4F60\u7684\u5361\u8D6B\u56FE\u6587\u5361",Xt("#story-subtitle").textContent=(u.gold?"\u672C\u6B21\u8FD8\u62BD\u4E2D\u4E86 1% \u60CA\u559C\u91D1\u5361\u3002":"\u56FE\u6587\u5361\u5DF2\u81EA\u52A8\u6536\u5165\u5361\u518C\u3002")+" \u5DF2\u8BB0\u5F55\u8FD9\u6B21\u5B8C\u6574\u6E05\u6D01\u3002";let m=Xt("#story-card");m.classList.toggle("is-gold",u.gold),m.classList.remove("is-revealing"),Xt("#story-category").textContent=f.category+" / "+f.number,Xt("#story-product").textContent=f.product,Xt("#story-title").textContent=f.title,Xt("#story-body").textContent=f.body,Xt("#story-note").textContent=f.note,Xt("#story-image").src=f.image,Xt("#story-image").alt=f.alt,Xt("#story-image-fallback").hidden=!0,Xt("#story-image").hidden=!1,Xt("#story-sources").replaceChildren(o(f.url,f.source+" \u2197"),o(f.imageUrl,"\u67E5\u770B\u5B98\u65B9\u539F\u56FE \u2197")),Xt("#story-image-credit").textContent="\u56FE\u7247\uFF1AK\xE4rcher \u5B98\u65B9 \xB7 \u6587\u5B57\u636E\u5B98\u65B9\u8D44\u6599\u4E2D\u6587\u6574\u7406",Xt("#story-gold").hidden=!u.gold,Xt("#story-gold-title").textContent=ml.title,Xt("#story-gold-notice").textContent=ml.notice;let _=t.state.receipts.filter(p=>p.cardId===f.id).length,g=d&&_>1&&!u.gold;e.classList.toggle("story-repeat",g),e.classList.toggle("story-compact",d&&!u.gold),Xt("#story-expand").hidden=!g,g&&(Xt("#story-heading").textContent="\u719F\u6089\u7684\u6545\u4E8B\uFF0C\u53C8\u6536\u85CF\u4E86\u4E00\u6B21"),Xt("#story-copy-count").textContent=_>1?"\u8FD9\u5F20\u5DF2\u6536\u96C6 "+_+" \u6B21":"\u9996\u6B21\u6536\u96C6",Xt("#story-album-button").hidden=!1,Xt("#story-done").textContent=d?"\u6536\u597D\u5361\u7247\uFF0C\u7EE7\u7EED\u6E05\u6D01":"\u8FD4\u56DE\u6E38\u620F",d&&(m.offsetWidth,m.classList.add("is-revealing")),a()}function c(u,d=!1){!u||!r(u.cardId)||(i(),l(u,d),e.open||e.showModal())}function h(){i(),e.classList.remove("story-repeat","story-compact"),Xt("#story-expand").hidden=!0,s="album",Xt("#story-detail").hidden=!0,Xt("#story-album").hidden=!1,Xt("#story-heading").textContent="\u6211\u7684\u5361\u8D6B\u56FE\u6587\u5361\u518C";let u=t.state;Xt("#story-subtitle").textContent="\u6BCF\u6B3E\u4EA7\u54C1\u9996\u6B21\u5B8C\u6210\u83B7\u5F97\u5BF9\u5E94\u77E5\u8BC6\u5361\uFF1B\u4E4B\u540E\u968F\u673A\u6536\u96C6\uFF0C\u672A\u62E5\u6709\u5361\u7684\u6743\u91CD\u4E3A\u5DF2\u62E5\u6709\u5361\u7684 3 \u500D\u3002",Xt("#story-album-button").hidden=!0,Xt("#story-done").textContent="\u8FD4\u56DE\u6E38\u620F",Xt("#story-album").replaceChildren();for(let f of ao){let m=u.receipts.filter(x=>x.cardId===f.id),_=document.createElement("button");_.type="button",_.className="story-album-item"+(m.length?" earned":" locked"),_.disabled=!m.length,_.dataset.storyId=f.id;let g=document.createElement("img");g.src=f.image,g.alt=f.alt,g.loading="lazy";let p=document.createElement("small");p.textContent=f.category+" \xB7 "+f.product;let M=document.createElement("strong");M.textContent=f.title;let y=document.createElement("span");y.textContent=m.length?"\u5DF2\u6536\u96C6 "+m.length+" \u6B21 \xB7 \u67E5\u770B":"\u5C1A\u672A\u6536\u96C6",_.append(g,p,M,y),m.length&&_.addEventListener("click",()=>c(m.at(-1))),Xt("#story-album").append(_)}let d=u.receipts.filter(f=>f.gold);if(d.length){let f=document.createElement("button");f.className="story-album-item gold-album-item";let m=document.createElement("strong");m.textContent=ml.title;let _=document.createElement("span");_.textContent="\u60CA\u559C\u91D1\u5361 \xD7 "+d.length+" \xB7 \u8BD5\u73A9\u6F14\u793A",f.append(m,_),f.addEventListener("click",()=>c(d.at(-1))),Xt("#story-album").prepend(f)}a(),e.open||e.showModal()}return Xt("#story-expand").addEventListener("click",()=>{e.classList.remove("story-repeat"),Xt("#story-expand").hidden=!0}),Xt("#story-image").addEventListener("error",()=>{Xt("#story-image").hidden=!0,Xt("#story-image-fallback").hidden=!1}),Xt("#open-story-album").addEventListener("click",h),Xt("#story-album-button").addEventListener("click",h),Xt("#result-story-card").addEventListener("click",()=>c(n)),Xt("#close-story").addEventListener("click",()=>e.close()),Xt("#story-done").addEventListener("click",()=>e.close()),e.addEventListener("click",u=>{u.target===e&&e.close()}),a(),{draw(u,d){return n=t.draw(u,d),a(),Xt("#result-story-card").hidden=!1,n},restore(u,d){return n=(u?.runId===d?t.reconcile(u):null)||t.get(d),Xt("#result-story-card").hidden=!n,a(),n},showCurrent(){c(n,!0)},get active(){return e.open},get state(){return{...t.state,current:n?{...n}:null,screen:s}}}}var Pd={spray:{motor:0,pitch:0,flow:.1,hz:3300,contact:0},"glass-wipe":{motor:0,pitch:0,flow:0,hz:900,contact:.15},squeegee:{motor:.022,pitch:158,flow:.08,hz:1100,contact:.025},extract:{motor:.038,pitch:94,flow:.12,hz:1450,contact:.028},suction:{motor:.037,pitch:88,flow:.085,hz:780,contact:.02},steam:{motor:0,pitch:0,flow:.11,hz:3100,contact:.018},wipe:{motor:0,pitch:0,flow:0,hz:650,contact:.13},fan:{motor:.022,pitch:122,flow:.13,hz:2400,contact:.035},jet:{motor:.027,pitch:139,flow:.12,hz:3600,contact:.045}};function Ld(i){let t=null,e,n,s,r,o,a,l,c,h,u=[],d=null,f=!1,m=!1,_=(E,S,A=.055)=>E.setTargetAtTime(S,t.currentTime,A);function g(E,S,A,I){let w=t.createBufferSource(),v=t.createBiquadFilter(),P=t.createGain();return w.buffer=E,w.loop=!0,v.type=S,v.frequency.value=A,v.Q.value=.5,P.gain.value=0,w.connect(v).connect(P).connect(I),w.start(),u.push(w,v,P),{filter:v,gain:P}}function p(){try{if(!t){t=new(window.AudioContext||window.webkitAudioContext),e=t.createGain(),e.gain.value=0;let E=t.createDynamicsCompressor();E.threshold.value=-12,E.knee.value=18,E.ratio.value=4,e.connect(E).connect(t.destination),n=t.createGain(),n.connect(e),u.push(e,E,n);let S=t.createBuffer(1,t.sampleRate*5,t.sampleRate),A=S.getChannelData(0);for(let P=0;P<A.length;P++)A[P]=Math.random()*2-1;let I=g(S,"bandpass",1200,n);a=I.filter,l=I.gain;let w=g(S,"lowpass",800,n);c=w.filter,h=w.gain,s=g(S,"lowpass",180,e).gain,r=t.createOscillator(),r.type="triangle",r.frequency.value=94,o=t.createGain(),o.gain.value=0,r.connect(o).connect(n),r.start(),u.push(r,o)}t.state==="suspended"&&t.resume().catch(()=>{m=!0})}catch{m=!0}}function M({mode:E,active:S=!1,recovered:A=0,removed:I=0,speed:w=0,part:v="",ambient:P=!0}={}){if(!t)return;let U=i(),O=Pd[E]||Pd.extract;d=E,f=S&&U.sound,_(e.gain,U.sound?1:0),_(n.gain,U.volume),_(s.gain,U.sound&&P?U.ambient*.055:0,.2);let G=E==="extract"||E==="suction"||E==="squeegee",V=E==="glass-wipe"||E==="wipe",q=Math.min(1,A*.055),$=Math.min(1,w/.12),B=/wheel|tire/.test(v)?-.25:/frame|handle/.test(v)?.2:0;_(r.frequency,Math.max(40,O.pitch+q*7),.09),_(o.gain,f?O.motor:0),_(a.frequency,O.hz*(1+B),.09),_(l.gain,f?O.flow*(G?q:1):0),_(c.frequency,V?500+$*1100:700+B*600,.08),_(h.gain,f?O.contact*(V?$:Math.min(1,.15+I*.03)):0)}function y(){t&&(f=!1,[o,l,h,s].forEach(E=>_(E.gain,0,.025)))}function x(E=!1){if(!t||!i().sound)return;(E?[523.25,659.25,783.99,1046.5]:[523.25,659.25,783.99]).forEach((A,I)=>{let w=t.createOscillator(),v=t.createGain(),P=t.currentTime+I*.085;w.type="sine",w.frequency.value=A,v.gain.setValueAtTime(1e-4,P),v.gain.exponentialRampToValueAtTime(.027,P+.025),v.gain.exponentialRampToValueAtTime(1e-4,P+.32),w.connect(v).connect(n),w.start(P),w.stop(P+.33),w.onended=()=>{w.disconnect(),v.disconnect()}})}return{unlock:p,update:M,pause:y,chime:x,get state(){return{initialized:!!t,context:t?.state||"locked",profile:d,active:f,error:m,layers:t?{motor:o.gain.value,flow:l.gain.value,contact:h.gain.value,pitch:r.frequency.value,flowHz:a.frequency.value}:null,design:"procedural-foley"}},dispose(){for(let E of u)try{E.stop?.(),E.disconnect()}catch{}t&&t.close().catch(()=>{})}}}var Dd="karcher-experience:v1",ue=i=>document.querySelector(i);function Ud({onPause:i,onChange:t}){let e={sound:!1,volume:.55,ambient:0,easy:!1,quality:"auto"},n=!0;try{let h=JSON.parse(localStorage.getItem(Dd)||"null");if(h){e.sound=h.sound===!0,e.easy=h.easy===!0;for(let u of["volume","ambient"])Number.isFinite(h[u])&&(e[u]=Math.max(0,Math.min(1,h[u])));e.quality=h.quality==="low"?"low":"auto"}}catch{n=!1}let s=document.createElement("details");s.className="library-details";let r=document.createElement("summary");r.textContent="\u59D4\u6258 \xB7 \u56FE\u6587\u5361\u518C \xB7 \u4EA7\u54C1\u8D44\u6599",s.append(r),ue(".sidebar").append(s);for(let h of["#save-status",".commission-entry",".story-entry",".product-card",".sidebar-note"])s.append(ue(h));let o=matchMedia("(max-width:800px)"),a=()=>s.open=!o.matches;a(),o.addEventListener("change",a),ue(".toolbar").after(ue(".progress-panel")),ue("#process-toggle").addEventListener("click",()=>{let h=ue("#process-panel").classList.toggle("compact")===!1;ue("#process-toggle").setAttribute("aria-expanded",String(h)),ue("#process-toggle").textContent=h?"\u6536\u8D77\u89C2\u5BDF \u2212":"\u5C55\u5F00\u89C2\u5BDF \uFF0B"});function l(){ue("#sound").textContent=e.sound?"\u58F0\u97F3\u5F00":"\u58F0\u97F3\u5173",ue("#sound").setAttribute("aria-pressed",String(e.sound)),ue("#sound").setAttribute("aria-label",e.sound?"\u5173\u95ED\u6E05\u6D01\u58F0\u97F3":"\u5F00\u542F\u6E05\u6D01\u58F0\u97F3"),ue("#settings-sound").checked=e.sound,ue("#device-volume").value=Math.round(e.volume*100),ue("#ambient-volume").value=Math.round(e.ambient*100),ue("#easy-clean").checked=e.easy,ue("#render-quality").value=e.quality,ue("#settings-status").textContent=n?"\u504F\u597D\u4FDD\u5B58\u5728\u672C\u673A\u3002":"\u6B64\u6D4F\u89C8\u5668\u6682\u65F6\u65E0\u6CD5\u4FDD\u5B58\u8BBE\u7F6E\uFF0C\u672C\u6B21\u64CD\u4F5C\u4ECD\u7136\u6709\u6548\u3002"}function c(h){Object.assign(e,h);try{localStorage.setItem(Dd,JSON.stringify(e))}catch{n=!1}l(),t({...e})}return ue("#sound").addEventListener("click",()=>c({sound:!e.sound})),ue("#settings-sound").addEventListener("change",h=>c({sound:h.target.checked})),ue("#device-volume").addEventListener("input",h=>c({volume:Number(h.target.value)/100})),ue("#ambient-volume").addEventListener("input",h=>c({ambient:Number(h.target.value)/100})),ue("#easy-clean").addEventListener("change",h=>c({easy:h.target.checked})),ue("#render-quality").addEventListener("change",h=>c({quality:h.target.value})),ue("#open-settings").addEventListener("click",()=>{i(),ue("#settings-dialog").showModal()}),ue("#close-settings").addEventListener("click",()=>ue("#settings-dialog").close()),ue("#settings-dialog").addEventListener("click",h=>{h.target===ue("#settings-dialog")&&ue("#settings-dialog").close()}),l(),{get prefs(){return{...e}},get active(){return ue("#settings-dialog").open},get reducedMotion(){return matchMedia("(prefers-reduced-motion:reduce)").matches}}}var rt=i=>document.querySelector(i),Qe=rt("#board"),rn=rt("#three-canvas"),de;try{de=new Js({canvas:rn,antialias:!0,alpha:!1})}catch(i){rt("#loading").hidden=!0,rt("#error").hidden=!1,rt("#error-text").textContent="\u6D4F\u89C8\u5668\u9700\u8981\u652F\u6301 WebGL\u3002\u8BF7\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\uFF0C\u6216\u4F7F\u7528 Chrome / Edge \u6253\u5F00\u672C\u9875\u3002",console.error(i)}de&&ex();function ex(){let i=dd(Qe),t=_d(rt("#save-status"));de.setPixelRatio(Math.min(devicePixelRatio,2)),de.outputColorSpace=ye,de.toneMapping=Hs,de.toneMappingExposure=1.22,de.shadowMap.enabled=!0,de.shadowMap.type=zs;let e=new ki;e.background=new jt(Jt[0].bg),e.add(new Yi(16776171,7701354,2.5));let n=new ei(16773847,4.2);n.position.set(-3,7,5),n.castShadow=!0,n.shadow.mapSize.set(1024,1024),n.shadow.camera.left=-5,n.shadow.camera.right=5,n.shadow.camera.top=5,n.shadow.camera.bottom=-5,n.shadow.normalBias=.035,n.shadow.bias=-2e-4,e.add(n),e.add(new Jr(14937325,.6));let s=new Zi(-4,4,3,-3,.1,80),r=new $s(s,rn);r.target.set(0,1.25,0),r.enableDamping=!0,r.enablePan=!1,r.enabled=!1,r.minPolarAngle=.55,r.maxPolarAngle=1.48,r.minAzimuthAngle=-.65,r.maxAzimuthAngle=.85,r.minZoom=.75,r.maxZoom=2.8;let o,a,l=0,c,h=!1,u=!1,d=!1,f=!1,m=null,_=!1,g=null,p=0,M=!1,y=0,x=0,E=null,S=!1,A=0,I=null,w=0,v=null,P=null,U=null,O=!1,G=null,V=null,q=null,$,B=new at,et=new $r,lt=new C,St=new C(0,0,1),Wt=new Kr,Yt=null,ie=Ld(()=>$?.prefs||{sound:!1,volume:.55,ambient:0}),Kt=!1,J=0,it=!1,Et=0;function Ut(){ie.unlock()}function ft(D,W={}){ie.update({mode:c?.id,active:D,...W})}function Lt(D=!1){ie.chime(D)}let Bt=150,L=new Float32Array(Bt*3),ot=new Float32Array(Bt),Q=new Float32Array(Bt*3),tt=0;for(let D=0;D<Bt;D++)L[D*3+1]=-50;let j=new ve;j.setAttribute("position",new Ee(L,3));let gt=new gi({color:15333620,size:.035,transparent:!0,opacity:.6,depthWrite:!1}),ht=new zi(j,gt);e.add(ht);let mt=ud();e.add(mt.group);let Vt=fd();e.add(Vt.group);let Tt=xd({scene:e,camera:s,controls:r,board:Qe,getWorld:()=>o,onFocusChange:D=>{rt("#detail-select").value=D===null?"":String(D),document.querySelectorAll("[data-focus]").forEach(W=>W.classList.toggle("focused",Number(W.dataset.focus)===D))}});function R(D,W=3){for(let _t=0;_t<W;_t++){let ee=tt++%Bt,zt=ee*3;L[zt]=D.point.x,L[zt+1]=D.point.y,L[zt+2]=D.point.z+.04;let Pe=c.id==="steam";ot[ee]=Pe?.7:.35,Q[zt]=(Math.random()-.5)*.7,Q[zt+1]=Pe?.7+Math.random()*.4:Math.random()*.4,Q[zt+2]=.2+Math.random()*.3}}function b(D){i.clear(),S=!0,c=Jt[l].modes.find(W=>W.id===D)||Jt[l].modes[0],a&&(e.remove(a),Xn(a)),a=ld(Jt[l],c.id),e.add(a),document.querySelectorAll("[data-mode]").forEach(W=>{let _t=W.dataset.mode===c.id;W.classList.toggle("active",_t),W.setAttribute("aria-pressed",String(_t))}),gt.color.set(c.id==="steam"?16777215:c.id==="extract"?14151143:12969716),rt("#tool-instruction").textContent={spray:"\u8F85\u52A9\u55B7\u74F6\u6DA6\u6E7F\u5E72\u624B\u5370\uFF1B\u6E7F\u6C61\u819C\u53EF\u76F4\u63A5\u5438\u9664","glass-wipe":"\u79FB\u52A8\u6E05\u6D01\u5E03\u64E6\u677E\u6E7F\u624B\u5370\uFF1B\u8F7B\u677E\u6A21\u5F0F\u53EF\u6309\u4F4F\u505C\u7559",squeegee:"\u5438\u8D70\u677E\u52A8\u6C61\u819C\u548C\u6C34\u75D5\uFF1B\u9644\u7740\u7684\u624B\u5370\u4ECD\u9700\u55B7\u6DA6\u3001\u64E6\u677E",extract:"\u55B7\u62BD\u5E26\u8D70\u7EC7\u7269\u6C61\u6E0D\uFF1B\u6DF1\u8272\u6E7F\u75D5\u9700\u8981\u968F\u540E\u62BD\u5438",suction:"\u505C\u6B62\u55B7\u6C34\uFF0C\u91CD\u590D\u62BD\u5438\u6536\u4F59\u6C34\uFF1B\u5B8C\u6210\u540E\u4ECD\u9700\u901A\u98CE\u667E\u5E72",steam:"\u5148\u677E\u52A8\u6CB9\u57A2\uFF0C\u989C\u8272\u53D8\u6D45\u540E\u5207\u6362\u64E6\u62ED",wipe:"\u6765\u56DE\u79FB\u52A8\u64E6\u53BB\u5DF2\u677E\u52A8\u7684\u6CB9\u57A2\uFF1B\u672A\u5904\u7406\u5904\u5148\u7528\u84B8\u6C7D"}[c.id]||Jt[l].hint,rt("#tool-title").textContent=c.id==="spray"?"\u8F85\u52A9\u55B7\u74F6":c.id==="glass-wipe"?"\u8F85\u52A9\u6E05\u6D01\u5E03":c.id==="squeegee"?"WV 2 \u522E\u5438\u5934":Jt[l].tool,g=null}function z(){Tt.cancel(),Jt[l].id==="outdoor"?s.position.set(1.4,3.45,8.4):s.position.set(3.7,4.4,7.3),r.target.copy(o.target),s.zoom=1,s.lookAt(r.target),r.update(),Y()}function Y(){let D=Qe.getBoundingClientRect(),W=D.width/D.height,_t=W<1?6.7:Jt[l].id==="outdoor"?4.5:5.3;s.left=-_t*W/2,s.right=_t*W/2,s.top=_t/2,s.bottom=-_t/2,s.updateProjectionMatrix(),de.setSize(D.width,D.height,!1)}function K(){Vt.hide(),i.release(),f=!1,g=null,J=0,m=null,ie.pause(),a&&(a.visible=!1),mt.group.visible=!1,rt("#brush-cursor").style.display="none"}function Z(D){U?.setBefore(D),Tt.clearHints(),i.clear(),u=D,rt("#compare").setAttribute("aria-pressed",String(D)),rt("#compare").textContent=D?"\u25E8 \u8FD4\u56DE\u73B0\u5728":"\u25E7 \u6E05\u6D01\u524D",o.surfaces.forEach(W=>{W.changed=!0,W.refresh(D)}),K()}function Rt(D){Tt.clearHints(),i.clear(),h=D,r.enabled=D,rt("#orbit-mode").classList.toggle("active",D),rt("#clean-mode").classList.toggle("active",!D),rt("#orbit-mode").setAttribute("aria-pressed",String(D)),rt("#clean-mode").setAttribute("aria-pressed",String(!D)),rn.style.cursor=D?"grab":"crosshair",K()}function dt(D,W=!1,_t=null){let ee=_t?"job:"+_t.id:Jt[D].id;o&&(!W||Dt()!==ee)&&Ie(!0),Tt.cancel(),it=!1,rt("#finish-reveal").hidden=!0,clearTimeout(E),clearTimeout(G),rt("#discovery-toast").hidden=!0,rt("#part-notice").hidden=!0,K(),i.clear(),o&&(e.remove(o.root),o.dispose()),a&&(e.remove(a),Xn(a),a=null),l=D;let zt=Jt[D];v=_t;let Pe=_t?"job:"+_t.id:zt.id,He=W?null:t.inspect(Pe);P=_t?Number.isInteger(He?.seed)&&He.seed>=0&&He.seed<=4294967295?He.seed:vd():null,o=ad(zt),U=_t?Md(o,_t,P):null,Qu(o.surfaces,zt.id,_t,P),O=!1,e.add(o.root),e.background.set(zt.bg),d=!1,u=!1,p=0,M=!1,I=null,w=0,A=0;let T=W?null:t.restore(Pe,o.surfaces);V=typeof T?.cleaningRunId=="string"&&T.cleaningRunId.length>0&&T.cleaningRunId.length<180?T.cleaningRunId:Rd(),q=ri.restore(T?.storyReceipt,V),T&&(p=T.elapsed,d=T.completed,M=T.started===!0,I=typeof T.middleSnapshot=="string"&&T.middleSnapshot.startsWith("data:image/jpeg;base64,")?T.middleSnapshot:null,w=Number.isFinite(T.middlePercent)?T.middlePercent:0),t.setActive(Pe),Yt=null,_=!1,rt("#result").hidden=!0,rt("#hint").classList.remove("faded"),rt("#compare").textContent="\u25E7 \u6E05\u6D01\u524D",rt("#compare").setAttribute("aria-pressed","false"),rt("#mission-count").textContent=String(D+1).padStart(2,"0")+" / 04",rt("#scene-kicker").textContent=zt.english,rt("#scene-title").textContent=v?v.title:zt.title,rt("#active-commission").hidden=!v,rt("#discovery-status").hidden=!v,rt("#commission-title").textContent=v?v.story:"",rt("#commission-task").textContent=v?v.task:"",rt("#next").hidden=!!v,rt("#commission-reward").hidden=!0,rt("#next-commission-panel").hidden=!0,rt("#result-collection").hidden=!0,rt("#product-name").textContent=zt.product,rt("#product-type").textContent=zt.type,rt("#product-fact").textContent=zt.fact,rt("#product-link").href=zt.link,rt("#product-art").innerHTML='<img src="'+tr[zt.id].thumbnail+'" alt="'+tr[zt.id].name+' \u4EA7\u54C1\u7167\u7247">',rt("#stage-label").textContent=zt.type+" \xB7 \u4E92\u52A8\u4F53\u9A8C",rt("#scene-caption").textContent=zt.caption,rt("#tool-title").textContent=zt.tool,rt("#tool-symbol").textContent=zt.symbol,rt("#task-text").textContent=v?v.task:zt.task,rt("#tool-modes").innerHTML=zt.modes.map(N=>'<button data-mode="'+N.id+'" aria-pressed="false">'+N.label+"</button>").join(""),document.querySelectorAll("[data-level]").forEach(N=>{let H=Number(N.dataset.level)===D;N.classList.toggle("active",H),N.setAttribute("aria-pressed",String(H))}),document.querySelectorAll("[data-mode]").forEach(N=>N.addEventListener("click",()=>{K(),b(N.dataset.mode)})),b((T?.mode==="detail"?"suction":T?.mode)||(v?.id==="rain-window"?"squeegee":zt.modes[0].id)),Rt(!1),z(),Nt(),$t(),Mt(),rt("#hint").classList.toggle("faded",M||d),rt("#hint strong").textContent=v?.id==="coffee-break"?"\u5148\u55B7\u62BD\u5DE6\u4FA7\u5496\u5561\u6E0D\uFF0C\u518D\u6536\u4F59\u6C34":"\u6309\u4F4F\uFF0C\u6162\u6162\u5212\u8FC7\u6C61\u6E0D",rt("#hint small").textContent=v?.id==="coffee-break"?"\u770B\u89C1\u6DF1\u8272\u6E7F\u75D5\u540E\uFF0C\u5207\u6362\u300C\u4EC5\u62BD\u5438\u300D":"\u8DDF\u7740\u6E05\u6D01\u8F68\u8FF9\uFF0C\u627E\u56DE\u539F\u672C\u7684\u989C\u8272",rt("#detail-status").textContent=d?"\u672C\u5173\u5DF2\u5B8C\u6210\uFF0C\u53EF\u67E5\u770B\u6210\u679C\u5361\u6216\u91CD\u65B0\u6E05\u6D01\u3002":"\u9009\u62E9\u90E8\u4F4D\u9760\u8FD1\u67E5\u770B\uFF1B\u6B8B\u7559\u63D0\u793A\u4F1A\u663E\u793A 4.5 \u79D2\u3002",S=W||!!v,U&&(U.update(),O=U.state.revealed,It()),(W||v)&&Ie(!0),de.render(e,s)}rt("#levels").innerHTML=Jt.map((D,W)=>'<button class="level" data-level="'+W+'" aria-pressed="false"><span class="level-art">'+D.icon+"</span><span><strong>"+D.name+"</strong><small>"+D.product+'</small></span><span class="level-arrow">\u2197</span></button>').join(""),document.querySelectorAll("[data-level]").forEach(D=>D.addEventListener("click",()=>dt(Number(D.dataset.level)))),rt("#source-list").innerHTML=Jt.map(D=>'<a href="'+D.link+'" target="_blank" rel="noopener noreferrer">'+D.product+" \xB7 "+D.type+" \u2197<small>"+D.fact+"</small></a>").join("");function Dt(){return v?"job:"+v.id:Jt[l].id}function It(){if(!U)return;let D=U.update();rt("#discovery-status").classList.toggle("revealed",D.revealed),rt("#discovery-status").textContent=D.revealed?"\u53D1\u73B0\u4E86\u300C"+v.reward+"\u300D\uFF01"+(d?"\u5DF2\u6536\u5165\u6E05\u6D01\u4EFB\u52A1\u8BB0\u5F55\u3002":"\u5B8C\u6210\u8FD9\u5355\uFF0C\u5C31\u80FD\u6536\u5165\u6E05\u6D01\u4EFB\u52A1\u8BB0\u5F55\u3002"):v.hint+" \xB7 \u5DF2\u63ED\u6653 "+Math.floor(D.progress*100)+"%",D.revealed&&!O&&(O=!0,rt("#discovery-toast").textContent="\u53D1\u73B0\u4E86\u300C"+v.reward+"\u300D\uFF01\u5B8C\u6210\u8FD9\u5355\uFF0C\u5E26\u56DE\u6536\u85CF\u518C\u3002",rt("#discovery-toast").hidden=!1,clearTimeout(G),G=setTimeout(()=>rt("#discovery-toast").hidden=!0,3800),Lt())}function ct(D=null){let W=0,_t=0,ee=0;return o.surfaces.forEach(zt=>{W+=zt.total,_t+=zt.left,ee+=zt.loosened}),o.surfaces.some(zt=>zt.process)?{total:W,left:_t,wet:ee,percent:(D||ns(o.surfaces)).percent}:{total:W,left:_t,wet:ee,percent:Math.max(0,Math.min(100,(W?1-_t/W:0)*100))}}function Mt(){let D=o.surfaces.some(Pe=>Pe.process)?ns(o.surfaces):null;wd(o.surfaces,Jt[l].id,c.id,d,_&&f?Yt:null,D);let W=ct(D),_t=d?100:Math.min(99,Math.floor(W.percent));rt("#score").textContent=_t,rt("#bar").style.width=_t+"%",rt("#progress-track").setAttribute("aria-valuenow",String(_t));let ee=d?"\u6BCF\u4E00\u5904\u7528\u5FC3\uFF0C\u90FD\u770B\u5F97\u89C1\u3002":_t===0?"\u8BA9\u7B2C\u4E00\u9053\u6E05\u6D01\u8F68\u8FF9\u51FA\u73B0":_t>90?"\u5FEB\u5B8C\u6210\u4E86\uFF0C\u67E5\u627E\u6B8B\u7559\u53EF\u5B9A\u4F4D\u8FB9\u89D2":"\u6CBF\u7740\u53D8\u5316\uFF0C\u6162\u6162\u6E05\u6D01";D&&!d&&(Jt[l].id==="fabric"?ee=D.dirt>.025?M?"\u55B7\u62BD\u53BB\u6C61\u4E2D \xB7 \u6DF1\u8272\u6E7F\u75D5\u968F\u540E\u56DE\u6536":"\u5C1A\u672A\u55B7\u62BD \xB7 \u4ECE\u5496\u5561\u6E0D\u6216\u722A\u5370\u5F00\u59CB":D.wet>.1?"\u6C61\u6E0D\u5DF2\u5904\u7406 \xB7 \u5207\u6362\u4EC5\u62BD\u5438\u6536\u4F59\u6C34":"\u6B63\u5728\u6536\u5C3E \xB7 \u5B8C\u6210\u540E\u901A\u98CE\u667E\u5E72":ee=D.bound>.025?D.ready>D.bound*.5?"\u624B\u5370\u5DF2\u6E7F\u6DA6 \xB7 \u79FB\u52A8\u6E05\u6D01\u5E03\u64E6\u677E":"\u4ECD\u6709\u5E72\u624B\u5370 \xB7 \u5148\u55B7\u6DA6\u518D\u64E6\u677E":D.dirt>.025||D.wet>.035?"\u6C61\u819C\u5DF2\u677E\u52A8 \xB7 WV 2 \u5438\u8D70\u6C34\u75D5":"\u901A\u900F\u4E86\uFF0C\u68C0\u67E5\u8FB9\u89D2\u5373\u53EF"),!d&&c.id==="steam"&&(ee="\u6CB9\u57A2\u5DF2\u677E\u52A8 "+Math.min(100,Math.round(W.wet/W.total*100))+"% \xB7 \u64E6\u62ED\u5E26\u8D70\u6B8B\u7559"),rt("#progress-detail").textContent=ee;let zt=Math.floor(p);return rt("#session-time").textContent=String(Math.floor(zt/60)).padStart(2,"0")+":"+String(zt%60).padStart(2,"0")+" \xB7 \u6162\u6162\u6765\uFF0C\u4E0D\u9650\u65F6",{...W,summary:D}}let kt={fabric:["\u5DE6\u4FA7\u5750\u57AB","\u5DE6\u4FA7\u9760\u80CC","\u53F3\u4FA7\u5750\u57AB","\u53F3\u4FA7\u9760\u80CC"],window:["\u5DE6\u4FA7\u73BB\u7483","\u53F3\u4FA7\u73BB\u7483"],steam:["\u53A8\u623F\u74F7\u7816"]};function Nt(){let D=o.surfaces.filter(W=>W.partId&&W.total>0);rt("#part-progress").hidden=!D.length,rt("#part-list").innerHTML=D.map(W=>'<button type="button" class="part-chip" data-part="'+W.partId+'" data-focus="'+o.surfaces.indexOf(W)+'" title="\u70B9\u51FB\u9760\u8FD1'+W.partLabel+'"><span>'+W.partLabel+"</span><strong>0%</strong><i></i></button>").join(""),rt("#detail-select").innerHTML='<option value="">\u5168\u666F</option>'+o.surfaces.map((W,_t)=>W.total>0?'<option value="'+_t+'">'+(W.partLabel||kt[Jt[l].id]?.[_t]||"\u6E05\u6D01\u533A\u57DF")+"</option>":"").join(""),document.querySelectorAll("[data-focus]").forEach(W=>W.addEventListener("click",()=>yt(Number(W.dataset.focus))))}function yt(D){K(),i.clear(),u&&Z(!1),h&&!d&&Rt(!1),Tt.focus(D),rt("#detail-status").textContent="\u6B63\u5728\u67E5\u770B "+(o.surfaces[D].partLabel||kt[Jt[l].id]?.[D]||"\u6E05\u6D01\u533A\u57DF")+(d?" \xB7 \u672C\u5173\u5DF2\u5B8C\u6210\uFF0C\u53EF\u67E5\u770B\u6210\u679C\u5361":" \xB7 \u53EF\u4EE5\u76F4\u63A5\u7EE7\u7EED\u6E05\u6D17")}function $t(){let D=[];for(let W of o.surfaces){if(!W.partId||!W.total)continue;!W.partDone&&W.left/W.total<=.035&&(W.partDone=!0,W.finish(),S=!0,D.push(W.partLabel));let _t=rt('[data-part="'+W.partId+'"]'),ee=W.partDone?100:Math.max(0,Math.min(99,Math.floor((1-W.left/W.total)*100)));_t.classList.toggle("done",W.partDone),_t.querySelector("strong").textContent=W.partDone?"\u2713":ee+"%",_t.style.setProperty("--part-progress",ee+"%")}D.length&&(rt("#part-notice").textContent=D.join("\u3001")+" \u7115\u65B0 \u2713",rt("#part-notice").hidden=!1,clearTimeout(E),E=setTimeout(()=>rt("#part-notice").hidden=!0,1900),o.surfaces.every(W=>W.partDone)||Lt())}function F(){if(d)return;i.clear(),d=!0,o.surfaces.forEach(W=>W.finish()),K(),Mt(),q=ri.draw(V,Jt[l].id),S=!0,Ie(!0),It();let D=v?Ti.award(v,P):!1;Ti.completed(v,D,Jt[l].id),rt("#result-text").textContent=(v?v.title+" \xB7 \u59D4\u6258\u5B8C\u6210\u3002":Jt[l].caption+" \u672C\u5173\u6E05\u6D01\u5B8C\u6210\u3002")+" \u7528\u65F6 "+Math.floor(p)+" \u79D2\u3002"+(Jt[l].id==="fabric"?" \u62BD\u5438\u56DE\u6536\u5DF2\u5B8C\u6210\uFF0C\u8BF7\u901A\u98CE\u667E\u5E72\u540E\u518D\u4F7F\u7528\u3002":""),ot.fill(0);for(let W=0;W<Bt;W++)L[W*3+1]=-50;j.attributes.position.needsUpdate=!0,Tt.showcase(Jt[l].id==="outdoor"?[1.4,3.45,8.4]:[3.7,4.4,7.3],o.target),it=!0,Et=$.reducedMotion?0:1.35,rt("#finish-message").textContent=Jt[l].id==="fabric"?"\u6C61\u6E0D\u4E0E\u4F59\u6C34\u5DF2\u56DE\u6536\uFF0C\u7EC7\u7269\u4ECD\u9700\u901A\u98CE\u667E\u5E72\u3002":"\u7115\u65B0\u5B8C\u6210\u3002\u8BA9\u773C\u524D\u7684\u5E72\u51C0\uFF0C\u591A\u505C\u7559\u4E00\u4F1A\u513F\u3002",rt("#finish-reveal").hidden=!1,rt("#hint").classList.add("faded"),Tt.clearHints(),Lt()}function pt(){!it||!d||(it=!1,rt("#finish-reveal").hidden=!0,rt("#part-notice").hidden=!0,rt("#result").hidden=!1,ri.showCurrent(),q?.gold&&Lt(!0))}rt("#reveal-now").addEventListener("click",pt);function xt(D,W){return B.set(D*2-1,1-W*2),et.setFromCamera(B,s),et.intersectObjects(o.surfaces.filter(_t=>_t.total>0).map(_t=>_t.hitMesh),!1).filter(_t=>{let ee=_t.object.userData.surface,zt=ee.mesh.getWorldScale(new C);return ee.acceptsUV(_t.uv,c.rx/zt.x,c.ry/zt.y)})}function At(D,W){return xt(D,W)[0]||null}let st={x:.5,y:.5};function nt(D){let W=rn.getBoundingClientRect();st={x:(D.clientX-W.left)/W.width,y:(D.clientY-W.top)/W.height},_=st.x>=0&&st.x<=1&&st.y>=0&&st.y<=1}function Pt(D){if(!D){a.visible=!1;return}lt.copy(D.face.normal).transformDirection(D.object.matrixWorld),Jt[l].id==="outdoor"?(lt.multiplyScalar(.9).add(new C(.65,-.25,0).applyQuaternion(s.quaternion)).normalize(),a.position.copy(D.point).addScaledVector(lt,.92)):a.position.copy(D.point).addScaledVector(lt,c.id==="steam"?.22:.08),a.quaternion.setFromUnitVectors(St,lt),a.visible=!0}function Zt(D,W){let _t=D.object.userData.surface,ee=_t.mesh.getWorldScale(new C),zt=new C((D.uv.x-.5)*_t.width,(D.uv.y-.5)*_t.height,0),Pe=zt.clone().add(new C(c.rx/ee.x,0,0)),He=zt.clone().add(new C(0,c.ry/ee.y,0));for(let H of[zt,Pe,He])H.applyMatrix4(_t.hitMesh.matrixWorld).project(s);let T=(Pe.x-zt.x)*Qe.clientWidth/2,N=-(Pe.y-zt.y)*Qe.clientHeight/2;W.style.width=Math.max(8,Math.hypot(T,N)*2)+"px",W.style.height=Math.max(6,Math.hypot((He.x-zt.x)*Qe.clientWidth,(He.y-zt.y)*Qe.clientHeight))+"px",W.style.setProperty("--brush-angle",Math.atan2(N,T)*180/Math.PI+"deg"),W.style.borderRadius=["fan","jet","steam","spray"].includes(c.id)?"50%":"5px"}function ge(D){if(!f||h||u||d||!_||Tt.moving){g=null,Vt.hide(),ft(!1),_||(a.visible=!1);return}let W={...st},_t=g?Math.hypot(W.x-g.x,W.y-g.y):0;J+=(_t/Math.max(D,.008)-J)*(1-Math.exp(-D*30)),J<.004&&(J=0);let ee=c.id==="glass-wipe"||c.id==="wipe",zt=ee&&!$.prefs.easy?Math.min(1,J/.11):1,Pe=g?Math.min(40,Math.max(1,Math.ceil(Math.hypot(W.x-g.x,W.y-g.y)*100))):1,He=!1,T=null,N=null,H=0,X=0;for(let k=1;k<=Pe;k++){let ut=k/Pe,vt=g?je.lerp(g.x,W.x,ut):W.x,Ct=g?je.lerp(g.y,W.y,ut):W.y,wt=xt(vt,Ct);if(wt.length){He=!0,Yt=wt[0],N=wt[0];for(let Ht of Jt[l].id==="outdoor"?wt:wt.slice(0,1)){let Ft=Ht.object.userData.surface,Ot=Ft.mesh.getWorldScale(new C),se=Ft.loosened,he=Ft.paint(Ht.uv,c.rx/Ot.x,c.ry/Ot.y,(c.speed||2.8)*D/Pe*zt,c.id);X+=he,Ft.process?(H+=Ft.lastAction.recovered,Ft.lastAction.changed&&(S=!0),Ft.lastAction.useful>.001&&(T={x:vt,y:Ct})):he+Math.max(0,Ft.loosened-se)>.001&&(T={x:vt,y:Ct})}}}N?(Pt(N),(!N.object.userData.surface.process||c.id==="spray")&&R(N,c.id==="steam"?5:3)):a.visible=!1,Vt.update(N,a,Jt[l],c,D,He,{recovered:H,removed:X}),T&&(S=!0,i.emit(T.x,T.y)),g=W,ft(He,{recovered:H/Math.max(D,.008),removed:X/Math.max(D,.008),speed:$.prefs.easy&&ee?Math.max(.09,J):J,part:N?.object.userData.surface.partId||""}),He&&(M=!0,rt("#hint").classList.add("faded"))}rn.addEventListener("pointerdown",D=>{D.button!==0||m!==null||h||u||d||(Qe.classList.toggle("touch-input",D.pointerType==="touch"),Qe.focus({preventScroll:!0}),nt(D),m=D.pointerId,f=!0,Tt.clearHints(),g=null,rn.setPointerCapture(D.pointerId),Kt&&Ut())}),rn.addEventListener("pointermove",D=>{if(!(m!==null&&m!==D.pointerId)&&(nt(D),!h&&!u&&!d&&_)){let W=At(st.x,st.y);Pt(W);let _t=rt("#brush-cursor");_t.style.display=W?"block":"none",_t.style.left=st.x*Qe.clientWidth+"px",_t.style.top=st.y*Qe.clientHeight+"px",W&&Zt(W,_t)}});let oe=D=>{m!==null&&D.pointerId!==m||(K(),Ie())};rn.addEventListener("pointerup",oe),rn.addEventListener("pointercancel",oe),rn.addEventListener("lostpointercapture",K),rn.addEventListener("pointerleave",()=>{_=!1,a.visible=!1}),window.addEventListener("blur",K),document.addEventListener("visibilitychange",()=>{document.hidden&&(K(),Ie())}),Qe.addEventListener("keydown",D=>{if(D.target===Qe){if(D.key==="Escape"){K(),Ie();return}if(!(h||u||d)){if(/^[1-3]$/.test(D.key)){let W=Jt[l].modes[Number(D.key)-1];W&&(D.preventDefault(),K(),b(W.id));return}["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"," "].includes(D.key)&&(D.preventDefault(),_=!0,D.key===" "?(f=!0,Kt&&Ut()):(st.x=je.clamp(st.x+(D.key==="ArrowRight"?.02:D.key==="ArrowLeft"?-.02:0),0,1),st.y=je.clamp(st.y+(D.key==="ArrowDown"?.02:D.key==="ArrowUp"?-.02:0),0,1)),Pt(At(st.x,st.y)))}}}),Qe.addEventListener("keyup",D=>{D.key===" "&&(K(),Ie())}),rt("#reset").addEventListener("click",()=>dt(l,!0,v)),rt("#free-clean").addEventListener("click",()=>dt(l)),rt("#next").addEventListener("click",()=>dt((l+1)%Jt.length)),rt("#admire").addEventListener("click",()=>{rt("#result").hidden=!0,Rt(!0)}),rt("#compare").addEventListener("click",()=>Z(!u)),rt("#clean-mode").addEventListener("click",()=>Rt(!1)),rt("#orbit-mode").addEventListener("click",()=>Rt(!0)),rt("#home-view").addEventListener("click",z);function pn(D){Tt.cancel(),K();let W=s.position.clone().sub(r.target);W.applyAxisAngle(new C(0,1,0),D),s.position.copy(r.target).add(W),s.lookAt(r.target),r.update()}rt("#rotate-left").addEventListener("click",()=>pn(-.18)),rt("#rotate-right").addEventListener("click",()=>pn(.18)),rt("#sources").addEventListener("click",()=>{K(),i.clear(),rt("#source-dialog").showModal()}),rt("#close-sources").addEventListener("click",()=>rt("#source-dialog").close()),rt("#source-dialog").addEventListener("click",D=>{D.target===rt("#source-dialog")&&rt("#source-dialog").close()});let tn=hd(D=>dt(D));rt("#inspect-product").addEventListener("click",()=>{K(),Ie(),Tt.clearHints(),i.clear(),tn.open(Jt[l].id)});function rr(D=!0){Tt.clearHints(),o.root.updateMatrixWorld(!0);let W=s.clone(),_t=Jt[l].id==="outdoor"?4.5:5.3;W.left=-_t*16/9/2,W.right=_t*16/9/2,W.top=_t/2,W.bottom=-_t/2,W.zoom=1,W.position.set(...Jt[l].id==="outdoor"?[1.4,3.45,8.4]:[3.7,4.4,7.3]),W.lookAt(o.target),W.updateProjectionMatrix();let ee=de.getSize(new at),zt=de.getPixelRatio(),Pe=[a,ht,Vt.group,mt.group],He=Pe.map(H=>H.visible),T=null,N=null;try{Pe.forEach(H=>H.visible=!1),de.setPixelRatio(1),de.setSize(960,540,!1),D&&(o.surfaces.forEach(H=>{H.changed=!0,H.refresh(!0)}),U?.setBefore(!0),de.render(e,W),T=rn.toDataURL("image/jpeg",.86)),o.surfaces.forEach(H=>{H.changed=!0,H.refresh(!1)}),U?.setBefore(!1),de.render(e,W),N=rn.toDataURL("image/jpeg",.86)}finally{o.surfaces.forEach(H=>{H.changed=!0,H.refresh(u)}),U?.setBefore(u),Pe.forEach((H,X)=>H.visible=He[X]),de.setPixelRatio(zt),de.setSize(ee.x,ee.y,!1),de.render(e,s)}return{before:T,after:N}}function Ie(D=!1){if(!o||!S&&!D)return;let W=ct().percent;!f&&W>=15&&W<85&&(!I||Math.abs(W-50)+10<Math.abs(w-50))&&(I=rr(!1).after,w=W),t.save(Dt(),o.surfaces,{elapsed:p,completed:d,started:M,mode:c.id,middleSnapshot:I,middlePercent:w,seed:P,percent:W,cleaningRunId:V,storyReceipt:q}),S=!1,A=0}let wi=yd(()=>(K(),i.clear(),Ie(),{...rr(),middle:I,middlePercent:w,percent:ct().percent,elapsed:p,completed:d,product:Jt[l].product,caption:v?v.title+" \xB7 "+(d?"\u6E05\u6D01\u7EAA\u5FF5\uFF1A"+v.reward:"\u5BFB\u627E\uFF1A"+v.reward):Jt[l].caption}));rt("#open-achievement").addEventListener("click",()=>wi.open()),rt("#result-achievement").addEventListener("click",()=>wi.open()),rt("#detail-select").addEventListener("change",D=>{D.target.value===""?z():yt(Number(D.target.value))}),rt("#detail-home").addEventListener("click",()=>{K(),z(),rt("#detail-status").textContent="\u5DF2\u8FD4\u56DE\u5168\u666F"}),rt("#show-residue").addEventListener("click",()=>{K(),i.clear(),u&&Z(!1);let D=Tt.nextResidue();rt("#detail-status").textContent=D?"\u5DF2\u5B9A\u4F4D "+(o.surfaces[D.index].partLabel||kt[Jt[l].id]?.[D.index]||"\u6E05\u6D01\u533A\u57DF")+" \u7684"+D.kind+" \xB7 \u5149\u5708\u4F1A\u6807\u51FA\u843D\u70B9\u3002":"\u6C61\u6E0D\u548C\u6C34\u75D5\u90FD\u5DF2\u5904\u7406\u597D\uFF0C\u53EF\u4EE5\u6B23\u8D4F\u6E05\u6D01\u6210\u679C\u3002"});let Ti=Ed({onStart:D=>{if(v?.id===D.id&&!d)return;let _t=t.inspect("job:"+D.id);dt(Jt.findIndex(ee=>ee.id===D.level),_t?.completed===!0,D)},onPause:()=>{K(),Ie(),Tt.clearHints(),i.clear()},getCurrent:()=>v?{id:v.id,completed:d}:null,getSave:D=>t.inspect("job:"+D)}),ri=Id(()=>{K(),Ie(),Tt.clearHints(),i.clear()}),Ai=new ResizeObserver(Y);Ai.observe(Qe),rn.addEventListener("webglcontextlost",D=>{D.preventDefault(),K(),rt("#error").hidden=!1,rt("#error-text").textContent="\u663E\u5361\u6E32\u67D3\u6682\u65F6\u4E2D\u65AD\uFF0C\u8BF7\u91CD\u65B0\u52A0\u8F7D\u6062\u590D\u573A\u666F\u3002"}),$=Ud({onPause:()=>{K(),Ie()},onChange:D=>{Kt=D.sound,Kt&&Ut(),ft(!1),de.setPixelRatio(D.quality==="low"?1:Math.min(devicePixelRatio,2)),de.shadowMap.enabled=D.quality!=="low",Y()}}),Kt=$.prefs.sound,de.setPixelRatio($.prefs.quality==="low"?1:Math.min(devicePixelRatio,2)),de.shadowMap.enabled=$.prefs.quality!=="low";let oi=t.active(),Ri=typeof oi=="string"&&oi.startsWith("job:")?ir(oi.slice(4)):!oi&&!Jt.some(D=>t.inspect(D.id))?ir("coffee-break"):null,or=Jt.findIndex(D=>D.id===(Ri?.level||oi));dt(or>=0?or:0,!1,Ri),rt("#loading").hidden=!0,document.body.dataset.ready="true",de.setAnimationLoop(()=>{let D=Math.min(Wt.getDelta(),.05);if(document.hidden||$.active||document.querySelector("#source-dialog").open||document.querySelector("#product-dialog").open||wi.active||Ti.active||ri.active){ie.pause();return}if(it&&(Et-=D,Et<=0)){pt();return}if(r.update(),Tt.update(D),M&&!d&&(p+=D),ge(D),A+=D,S&&A>2&&!f&&Ie(),y+=D,x+=D,y>.065&&(o.surfaces.forEach(W=>{W.changed&&W.refresh(u)}),y=0),x>.15){$t(),It();let W=Mt(),_t=Jt[l].id==="outdoor"?o.surfaces.every(ee=>ee.partDone):W.summary?W.summary.done:W.percent>=97.5;!d&&_t&&F(),x=0}for(let W=0;W<Bt;W++){if(ot[W]<=0)continue;ot[W]-=D;let _t=W*3;L[_t]+=Q[_t]*D,L[_t+1]+=Q[_t+1]*D,L[_t+2]+=Q[_t+2]*D,c.id!=="steam"&&(Q[_t+1]-=D*1.5),ot[W]<=0&&(L[_t+1]=-50)}j.attributes.position.needsUpdate=!0,mt.update(o.product,a,Jt[l].id),de.render(e,s)}),new URLSearchParams(location.search).has("test")&&Object.defineProperty(window,"__cleaningDebug",{get(){return e.updateMatrixWorld(!0),s.updateMatrixWorld(!0),{experience:$.prefs,audio:ie.state,revealPending:it,revealRemaining:Et,storyCards:ri.state,cleaningRunId:V,process:o.surfaces.some(D=>D.process)?ns(o.surfaces):null,commission:v?.id||null,commissionSeed:P,discovery:U?.state||null,collection:Ti.state,saveAvailable:t.available,elapsed:p,focus:Tt.active,focusMoving:Tt.moving,hintsVisible:Tt.hintsVisible,cameraZoom:s.zoom,middlePercent:w,waterVisible:Vt.group.visible,parts:o.surfaces.filter(D=>D.partId).map(D=>({id:D.partId,label:D.partLabel,done:D.partDone,percent:(D.total?1-D.left/D.total:1)*100})),productViewer:tn.state,toolMode:a.userData.mode,toolName:a.name,level:Jt[l].id,percent:ct().percent,completed:d,compare:u,orbit:h,triangles:de.info.render.triangles,geometries:de.info.memory.geometries,textures:de.info.memory.textures,surfaces:o.surfaces.map(D=>({id:D.partId,width:D.width,height:D.height,kind:D.kind,process:D.process?ns([D]):null,total:D.total,remaining:D.total?D.left/D.total:0,coverageProbes:D.probeUVs.map(({u:W,v:_t})=>{let ee=new C((W-.5)*D.width,(_t-.5)*D.height,0).applyMatrix4(D.hitMesh.matrixWorld).project(s);return{x:(ee.x+1)/2,y:(1-ee.y)/2,u:W,v:_t}}),probes:[.12,.3,.5,.7,.88].flatMap(W=>[.1,.25,.4,.55,.7,.85,.93].map(_t=>{let ee=new C((_t-.5)*D.width,(W-.5)*D.height,0).applyMatrix4(D.hitMesh.matrixWorld).project(s);return{x:(ee.x+1)/2,y:(1-ee.y)/2,u:_t,v:W}}))}))}}}),window.addEventListener("pagehide",()=>{K(),Ie(!0),clearTimeout(E),clearTimeout(G),Tt.dispose(),i.dispose(),Vt.dispose(),de.setAnimationLoop(null),r.dispose(),Ai.disconnect(),tn.dispose(),mt.dispose(),Xn(a),o.dispose(),j.dispose(),gt.dispose(),ie.dispose(),de.dispose()},{once:!0})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
