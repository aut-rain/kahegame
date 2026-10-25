// Procedural game foley. These are designed sounds, not official equipment recordings.
const PROFILES={
 spray:{motor:0,pitch:0,flow:.10,hz:3300,contact:0},
 'glass-wipe':{motor:0,pitch:0,flow:0,hz:900,contact:.15},
 squeegee:{motor:.022,pitch:158,flow:.08,hz:1100,contact:.025},
 extract:{motor:.038,pitch:94,flow:.12,hz:1450,contact:.028},
 suction:{motor:.037,pitch:88,flow:.085,hz:780,contact:.02},
 steam:{motor:0,pitch:0,flow:.11,hz:3100,contact:.018},
 wipe:{motor:0,pitch:0,flow:0,hz:650,contact:.13},
 fan:{motor:.022,pitch:122,flow:.13,hz:2400,contact:.035},
 jet:{motor:.027,pitch:139,flow:.12,hz:3600,contact:.045}
};
export function createCleaningAudio(getPrefs){
 let ctx=null,master,device,ambientGain,motor,motorGain,flow,flowGain,contact,contactGain,nodes=[],profile=null,active=false,error=false;
 const target=(param,value,time=.055)=>param.setTargetAtTime(value,ctx.currentTime,time);
 function noiseLayer(buffer,type,hz,bus){const source=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),gain=ctx.createGain();source.buffer=buffer;source.loop=true;filter.type=type;filter.frequency.value=hz;filter.Q.value=.5;gain.gain.value=0;source.connect(filter).connect(gain).connect(bus);source.start();nodes.push(source,filter,gain);return {filter,gain};}
 function unlock(){try{if(!ctx){ctx=new(window.AudioContext||window.webkitAudioContext)();master=ctx.createGain();master.gain.value=0;const limiter=ctx.createDynamicsCompressor();limiter.threshold.value=-12;limiter.knee.value=18;limiter.ratio.value=4;master.connect(limiter).connect(ctx.destination);device=ctx.createGain();device.connect(master);nodes.push(master,limiter,device);
  const buffer=ctx.createBuffer(1,ctx.sampleRate*5,ctx.sampleRate),data=buffer.getChannelData(0);for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
  const a=noiseLayer(buffer,'bandpass',1200,device);flow=a.filter;flowGain=a.gain;
  const b=noiseLayer(buffer,'lowpass',800,device);contact=b.filter;contactGain=b.gain;
  const ambient=noiseLayer(buffer,'lowpass',180,master);ambientGain=ambient.gain;
  motor=ctx.createOscillator();motor.type='triangle';motor.frequency.value=94;motorGain=ctx.createGain();motorGain.gain.value=0;motor.connect(motorGain).connect(device);motor.start();nodes.push(motor,motorGain);
 }if(ctx.state==='suspended')ctx.resume().catch(()=>{error=true;});}catch{error=true;}}
 function update({mode,active:working=false,recovered=0,removed=0,speed=0,part='',ambient=true}={}){if(!ctx)return;const prefs=getPrefs(),p=PROFILES[mode]||PROFILES.extract;profile=mode;active=working&&prefs.sound;target(master.gain,prefs.sound?1:0);target(device.gain,prefs.volume);target(ambientGain.gain,prefs.sound&&ambient?prefs.ambient*.055:0,.2);
  const absorbing=mode==='extract'||mode==='suction'||mode==='squeegee',cloth=mode==='glass-wipe'||mode==='wipe',liquid=Math.min(1,recovered*.055),motion=Math.min(1,speed/.12),impact=/wheel|tire/.test(part)?-.25:/frame|handle/.test(part)?.2:0;
  target(motor.frequency,Math.max(40,p.pitch+liquid*7),.09);target(motorGain.gain,active?p.motor:0);
  target(flow.frequency,p.hz*(1+impact),.09);target(flowGain.gain,active?p.flow*(absorbing?liquid:1):0);
  target(contact.frequency,cloth?500+motion*1100:700+impact*600,.08);target(contactGain.gain,active?p.contact*(cloth?motion:Math.min(1,.15+removed*.03)):0);
 }
 function pause(){if(!ctx)return;active=false;[motorGain,flowGain,contactGain,ambientGain].forEach(n=>target(n.gain,0,.025));}
 function chime(gold=false){if(!ctx||!getPrefs().sound)return;const frequencies=gold?[523.25,659.25,783.99,1046.5]:[523.25,659.25,783.99];frequencies.forEach((f,i)=>{const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime+i*.085;o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.027,t+.025);g.gain.exponentialRampToValueAtTime(.0001,t+.32);o.connect(g).connect(device);o.start(t);o.stop(t+.33);o.onended=()=>{o.disconnect();g.disconnect();};});}
 return {unlock,update,pause,chime,get state(){return {initialized:!!ctx,context:ctx?.state||'locked',profile,active,error,layers:ctx?{motor:motorGain.gain.value,flow:flowGain.gain.value,contact:contactGain.gain.value,pitch:motor.frequency.value,flowHz:flow.frequency.value}:null,design:'procedural-foley'};},dispose(){for(const n of nodes){try{n.stop?.();n.disconnect();}catch{}}if(ctx)ctx.close().catch(()=>{});}};
}
