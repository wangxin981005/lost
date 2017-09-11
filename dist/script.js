function SfxrParams(){this.setSettings=function(e){for(var t=0;t<24;t++)this[String.fromCharCode(97+t)]=e[t]||0;this.c<.01&&(this.c=.01);var s=this.b+this.c+this.e;if(s<.18){var i=.18/s;this.b*=i,this.c*=i,this.e*=i}}}function SfxrSynth(){this._params=new SfxrParams;var e,t,s,i,h,r,n,o,a,c,l,d;this.reset=function(){var e=this._params;i=100/(e.f*e.f+.001),h=100/(e.g*e.g+.001),r=1-e.h*e.h*e.h*.01,n=-e.i*e.i*e.i*1e-6,e.a||(l=.5-e.n/2,d=5e-5*-e.o),o=1+e.l*e.l*(e.l>0?-.9:10),a=0,c=1==e.m?0:(1-e.m)*(1-e.m)*2e4+32},this.totalReset=function(){this.reset();var i=this._params;return e=i.b*i.b*1e5,t=i.c*i.c*1e5,s=i.e*i.e*1e5+12,3*((e+t+s)/3|0)},this.synthWave=function(p,m){var u=this._params,f=1!=u.s||u.v,w=u.v*u.v*.1,x=1+3e-4*u.w,g=u.s*u.s*u.s*.1,S=1+1e-4*u.t,y=1!=u.s,b=u.x*u.x,k=u.g,G=u.q||u.r,q=u.r*u.r*u.r*.2,v=u.q*u.q*(u.q<0?-1020:1020),R=u.p?32+((1-u.p)*(1-u.p)*2e4|0):0,B=u.d,M=u.j/2,j=u.k*u.k*.01,I=u.a,P=e,A=1/e,V=1/t,E=1/s,T=5/(1+u.u*u.u*20)*(.01+g);T>.8&&(T=.8),T=1-T;for(var K,Z,J,H,Y,Q,L=!1,D=0,O=0,F=0,C=0,X=0,U=0,W=0,N=0,z=0,_=0,$=new Array(1024),ee=new Array(32),te=$.length;te--;)$[te]=0;for(te=ee.length;te--;)ee[te]=2*Math.random()-1;for(te=0;te<m;te++){if(L)return te;if(R&&++z>=R&&(z=0,this.reset()),c&&++a>=c&&(c=0,i*=o),r+=n,(i*=r)>h&&(i=h,k>0&&(L=!0)),Z=i,M>0&&(_+=j,Z*=1+Math.sin(_)*M),(Z|=0)<8&&(Z=8),I||((l+=d)<0?l=0:l>.5&&(l=.5)),++O>P)switch(O=0,++D){case 1:P=t;break;case 2:P=s}switch(D){case 0:F=O*A;break;case 1:F=1+2*(1-O*V)*B;break;case 2:F=1-O*E;break;case 3:F=0,L=!0}G&&((J=0|(v+=q))<0?J=-J:J>1023&&(J=1023)),f&&x&&((w*=x)<1e-5?w=1e-5:w>.1&&(w=.1)),Q=0;for(var se=8;se--;){if(++W>=Z&&(W%=Z,3==I))for(var ie=ee.length;ie--;)ee[ie]=2*Math.random()-1;switch(I){case 0:Y=W/Z<l?.5:-.5;break;case 1:Y=1-W/Z*2;break;case 2:Y=.225*(((Y=1.27323954*(H=6.28318531*((H=W/Z)>.5?H-1:H))+.405284735*H*H*(H<0?1:-1))<0?-1:1)*Y*Y-Y)+Y;break;case 3:Y=ee[Math.abs(32*W/Z|0)]}f&&(K=U,(g*=S)<0?g=0:g>.1&&(g=.1),y?(X+=(Y-U)*g,X*=T):(U=Y,X=0),C+=(U+=X)-K,Y=C*=1-w),G&&($[N%1024]=Y,Y+=$[(N-J+1024)%1024],N++),Q+=Y}Q*=.125*F*b,p[te]=Q>=1?32767:Q<=-1?-32768:32767*Q|0}return m}}var synth=new SfxrSynth;window.jsfxr=function(e){synth._params.setSettings(e);var t=synth.totalReset(),s=new Uint8Array(4*((t+1)/2|0)+44),i=2*synth.synthWave(new Uint16Array(s.buffer,44),t),h=new Uint32Array(s.buffer,0,44);return h[0]=1179011410,h[1]=i+36,h[2]=1163280727,h[3]=544501094,h[4]=16,h[5]=65537,h[6]=44100,h[7]=88200,h[8]=1048578,h[9]=1635017060,h[10]=i,s.buffer};var Game;!function(e){class t{constructor(e,t,s){this.pos=e,this.w=t,this.h=s}test(e){return this.pos.x<e.pos.x+e.w&&this.pos.x+this.w>e.pos.x&&this.pos.y<e.pos.y+e.h&&this.h+this.pos.y>e.pos.y}contains(e){return this.pos.x<=e.pos.x&&this.pos.x+this.w>=e.pos.x+e.w&&this.pos.y<=e.pos.y&&this.pos.y+this.h>=e.pos.y+e.h}intersect(s){let i=Math.round(this.pos.x),h=Math.round(this.pos.y),r=i+this.w,n=h+this.h,o=Math.round(s.pos.x),a=Math.round(s.pos.y),c=o+s.w,l=a+s.h,d=i<o?o:i,p=h<a?a:h,m=r<c?r:c,u=n<l?n:l;return new t(new e.Vec(d,p),m-d,u-p)}clone(){return new t(this.pos.clone(),this.w,this.h)}}e.Box=t}(Game||(Game={}));var Game;!function(e){class t{constructor(s,i,h){this.tick=0,this.frame=0,this.end=!1,this.color=i,this.box=new e.Box(s,16,16),h&&t.sfx.play()}render(e){this.frame<3&&t.sprite.render(e,this.box,this.color,this.frame)}update(e){this.tick++%4==0&&(this.end=++this.frame>2)}}e.Bumm=t}(Game||(Game={}));var Game;!function(e){class t{constructor(s,i,h){this.collided=new e.Vec(0,0),this.frame=0,this.tick=0,this.flip=Math.random()<.5;let r=this.flip?240:0,n=Math.round(136*Math.random())+32;this.box=new e.Box(new e.Vec(r,n),16,16),this.speed=new e.Vec(this.flip?-s:s,i),this.color=t.count++%4+1,this.type=h}render(e){let s=2*this.type;String(this.speed.x).charAt(0);this.flip&&null!==t.sprites[s+1]&&s++,t.sprites[s].render(e,this.box,this.color,3!=this.frame?this.frame:1)}update(e){this.tick++%7==0&&(this.frame=++this.frame%3)}}t.sprites=[],t.count=0,e.Enemy=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s){this.face=0,this.lasers=[],this.jetSound=null,this.pos=new e.Vec(t,s),this.box=new e.Box(null,16,24),this.spawn()}spawn(t=-200){this.tick=t,this.walk=!0,this.pick=!1,this.face=0,this.frame=1,this.shoot=!1,this.speed=new e.Vec(0,1),this.collided=new e.Vec(0,1),this.box.pos=this.pos.clone()}mute(){this.jetSound&&(this.jetSound.stop(),this.jetSound=null)}inactive(){return this.tick<-100}spawning(){return this.tick<0}render(e){let s=this.box,i=this.frame;this.lasers.forEach(t=>{t.render(e)}),this.inactive()||(this.spawning()&&this.tick%30<-15&&(e.globalAlpha=.3),this.walk?(i=i<3?i:1,t.sprite.render(e,s,this.face,i+1)):t.sprite.render(e,s,this.face,0),this.walk||t.jetSprite.render(e,this.box,this.face+2,this.frame),e.globalAlpha=1)}update(e){e%8==0&&(this.shoot&&this.shot(),this.walk?0!=this.speed.x&&(this.frame=++this.frame%4):this.frame=++this.frame%3),this.walk&&this.mute(),this.walk||this.jetSound||(this.jetSound=t.jetSfx.play(.1,!0)),this.tick++}shot(){this.lasers.push(new e.Laser(this))}}e.Hero=t}(Game||(Game={}));var Game;!function(e){class t{constructor(s){this.collided=new e.Vec(0,0),this.speed=new e.Vec(-6,0),this.end=!1,this.add=5,this.width=112,this.tick=15;let i=s.box.clone(),h=i.pos;s.face?(this.speed.x=-this.speed.x,h.x+=i.w):h.x-=this.add,h.y+=12,i.h=1,i.w=this.add,this.box=i,this.color=Math.round(2*Math.random())+1,this.face=s.face,t.sfx.play(.5)}render(e){const s=this.box;this.face?t.sprite2.render(e,s,this.color,0,this.width-s.w):t.sprite1.render(e,s,this.color,0)}update(e){let t=this.box,s=--this.tick<0?-this.add:this.add;t.w+=s,this.face&&(t.pos.x-=s),this.end=t.w<=this.add}}e.Laser=t}(Game||(Game={}));var Game;!function(e){class t{constructor(){this.collided=new e.Vec(0,0),this.speed=new e.Vec(0,.5);let t=8*Math.round(30*Math.random());this.box=new e.Box(new e.Vec(t,16),16,12),this.type=Math.round(4*Math.random()),this.color=Math.round(2*Math.random())+1}render(e){t.sprite.render(e,this.box,this.color,this.type)}update(e){}}e.Loot=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s){this.tick=0,this.active=0,this.planet=new e.Planet,this.title=new e.Txt(128-3*t.length,56,t,0),this.items=[new e.Txt(86,80,"Start New Game"),new e.Txt(80,96,"Reset High Score"),new e.Txt(92,112)],this.hint=new e.Txt(8,184,"Move with Arrow keys and fire with Shift",2),this.onstart=s}stop(){}input(s,i){if("keydown"!==i.type)return;let h=!1;if(i.shiftKey||i.ctrlKey){switch(this.active){case 0:this.onstart();break;case 1:e.Session.get().clear();break;case 2:let t=e.Sfx.master.gain;t.value=t.value?0:1}h=!0}else s[38]||s[87]||s[90]?(--this.active<0&&(this.active+=this.items.length),h=!0):(s[40]||s[83])&&(++this.active>=this.items.length&&(this.active-=this.items.length),h=!0);h&&t.sfx.play()}render(e){this.planet.render(e),this.title.render(e),this.items.forEach(t=>{t.render(e)}),this.hint.render(e)}update(){this.items[2].text="Sound FX "+(e.Sfx.master.gain.value?" On":"Off"),this.items.forEach((e,t)=>{e.invert=t==this.active&&this.tick%50>25}),this.tick++}complete(){return!1}}e.Menu=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t=[],s=[32,32,64,0],i="#000",h=200,r=["#ccc"],n=0){this.sky=s,this.rocks=i,this.stars=h,this.moons=r,this.txts=[new e.Txt(0,0,"Score"),new e.Txt(120,0,"HP",2),new e.Txt(231,0,"High")],this.platforms=t,t.length&&t.unshift(new e.Platform(-50,184,350,n||t[0].color),new e.Platform(-50,8,350,-1))}render(t){if(this.cache)return void t.drawImage(this.cache,0,0);let s=t.canvas;t.fillStyle="#000",t.fillRect(0,0,s.width,s.height);for(let s=0;s<this.stars;s++){let s=e.Rand.get(.5);t.fillStyle=`rgba(255,255,255,${s})`,t.fillRect(Math.round(e.Rand.get(255)),Math.round(e.Rand.get(192)),1,1)}this.moons.forEach(s=>{let i=e.Rand.get(200,40),h=e.Rand.get(130,80),r=e.Rand.get(40,10);t.fillStyle=s,t.beginPath(),t.arc(i,h,r,0,2*Math.PI),t.closePath(),t.fill()});let i=t.createLinearGradient(0,0,0,s.height);i.addColorStop(0,`rgba(${this.sky.join(",")})`),i.addColorStop(1,`rgba(${this.sky.slice(0,3).join(",")},1)`),t.fillStyle=i,t.fillRect(0,0,s.width,s.height);let h=0,r=s.width,n=s.height,o=n/3*2;for(t.beginPath(),t.moveTo(h,o+e.Rand.get(30));h<r;){let s=h+e.Rand.get(30,20),i=s+e.Rand.get(30,20),n=o+e.Rand.get(20),a=o+e.Rand.get(20);t.lineTo(s<r?s:r,n),t.lineTo(i<r?i:r,a),h=i}t.lineTo(r,n),t.lineTo(0,n),t.closePath(),t.fillStyle=this.rocks,t.fill(),this.txts.forEach(e=>e.render(t)),this.platforms.forEach(e=>e.render(t)),this.cache=new Image,this.cache.src=t.canvas.toDataURL()}}e.Planet=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s,i,h=0){let r=Math.round(e.Rand.get(1,-1));s||(t-=8*r,s=8*Math.round(e.Rand.get(10,6))),this.box=new e.Box(new e.Vec(t,s),i||8*(r+5),8),this.color=h}render(e){if(this.color<0)return;let s=this.color,i=this.box.clone(),h=Math.round(i.w/8)-1;i.w=8,t.sprite.render(e,i,s,0);for(let r=1;r<h;r++)i.pos.x+=i.w,t.sprite.render(e,i,s,1);i.pos.x+=i.w,t.sprite.render(e,i,s,2)}}e.Platform=t}(Game||(Game={}));var Game;!function(e){class t{constructor(e){this.tick=1,this.loot=null,this.width=256,this.bumms=[],this.level=e}stop(){this.hero.mute()}complete(){return this.ship.gone()}ai(){this.enemies.items.forEach(e=>{e.collided.y&&(e.speed.y=-e.speed.y),e.collided.x&&(e.speed.x=-e.speed.x)})}render(e){this.planet.render(e),this.ship.render(e),this.loot&&this.loot.render(e),this.ship.go()||this.hero.render(e),this.enemies.render(e),this.bumms.forEach(t=>{t.render(e)})}input(e,t){const s=this.hero;s.inactive()||(s.shoot=t.shiftKey||t.ctrlKey,s.speed.y=e[38]||e[87]||e[90]?-1:1,e[37]||e[65]||e[81]?(s.speed.x=-1,s.face=0):e[39]||e[68]?(s.speed.x=1,s.face=1):s.speed.x=0)}update(){this.updateHero(),this.updateShip(),this.updateLoot(),this.updateEnemies(),this.updateBumms(),this.tick++}updateShip(){let t=this.ship,s=this.hero;if(t.update(this.tick),t.ready()&&t.box.contains(s.box)&&(t.status++,s.mute(),e.Ship.goSfx.play(),e.Session.get().add(250),this.level%4==3&&e.Session.get().inc()),t.go()||!t.land())return;let i=t.complete(),h=t.parts[i?0:t.status-1],r=i?t.fuel:t.parts[t.status],n=Math.abs(h.box.pos.x-r.box.pos.x);if(this.move(r),n<1)s.pick=!1,r.box.pos.x=h.box.pos.x,r.box.test(h.box)&&(i?t.fuel=new e.Fuel(t):r.box.pos=h.box.pos.clone().sub(0,r.box.h),t.status++,e.Ship.buildSfx.play(),e.Session.get().add(25));else if(!s.inactive()&&!t.ready()){let t=s.box.clone(),i=r.box.pos,h=this.width,n=t.test(r.box);n||(t.pos.x-=h,n=t.test(r.box)),n||(t.pos.x+=2*h,n=t.test(r.box)),n&&(s.pick||(e.Hero.pickSfx.play(),s.pick=!0),i.add(t.pos.add(0,8).sub(i).scale(.2)),i.x<0?i.x+=h:i.x>h&&(i.x-=h))}}updateHero(){let e=this.hero,t=this.ship;if(!t.land()||t.go())return;this.move(e);let s=e.collided.y&&e.speed.y>0;e.walk&&!s&&this.addBumm(e.box.pos.clone().add(e.face?-8:8,12),0,!1),e.walk=s,this.hero.update(this.tick);let i=0;for(;i<e.lasers.length;){let t=e.lasers[i];this.updateLaser(t),t.end?e.lasers.splice(i,1):i++}}updateLaser(t){let s=t.box.pos;if(s.x+=t.speed.x,s.x>this.width?s.x-=this.width:s.x<0&&(s.x+=this.width),t.update(this.tick),t.end)return;let i=0,h=this.enemies.items;for(;i<h.length;){let s=h[i];this.collide(t,s)?(h.splice(i,1),this.addBumm(s.box.pos.clone()),e.Session.get().add(15)):i++}}updateLoot(){if(null===this.loot)return void(this.tick%1e3==0&&(this.loot=new e.Loot));let t=this.loot;this.move(t),t.update(this.tick),!this.ship.go()&&this.collide(t,this.hero)&&(e.Loot.sfx.play(),e.Session.get().add(125),this.loot=null)}updateEnemies(){let t=this.hero,s=this.enemies;s.items.forEach(e=>{this.move(e)}),this.ai(),t.spawning()||this.ship.go()||s.items.forEach(s=>{this.collide(t,s)&&(this.addBumm(t.box.pos.clone()),this.addBumm(t.box.pos.clone().add(0,8),1,!1),e.Session.get().dec(),t.spawn())}),s.update(this.tick)}addBumm(t,s=1,i=!0){this.bumms.push(new e.Bumm(t,s,i))}updateBumms(){let e=0;for(;e<this.bumms.length;){let t=this.bumms[e];t.update(this),t.end?this.bumms.splice(e,1):e++}}collide(e,s){let i=t.sprite.ictx,h=this.width,r=e.box.clone(),n=s.box.clone(),o=!1;if(!r.test(n)&&(r.pos.x+r.w>=h&&(r.pos.x-=h,o=!0),n.pos.x+n.w>=h&&(n.pos.x-=h,o=!0),!o||!r.test(n)))return!1;let a=r.intersect(n),c=a.pos.x,l=a.pos.y,d=a.w+1,p=a.h+1;i.clearRect(c,l,d,p),e.render(i);let m=i.getImageData(c,l,d,p);i.clearRect(c,l,d,p),s.render(i);let u=i.getImageData(c,l,d,p),f=m.data.length;for(let e=3;e<f;e+=20)if(m.data[e]&&u.data[e])return!0;return!1}move(e){let t=this.planet.platforms,s=e.collided,i=e.speed,h=e.box.pos,r=h.clone();s.x=0,s.y=0,i.x&&(h.x+=i.x,h.x>=this.width?h.x-=this.width:h.x<0&&(h.x+=this.width),t.forEach(t=>{t.box.test(e.box)&&(h.x=r.x,s.x=1)})),i.y&&(h.y+=i.y,t.forEach(t=>{t.box.test(e.box)&&(h.y=r.y,s.y=1)}))}}e.Scene=t;class s extends t{constructor(t){super(t),this.hero=new e.Hero(96,160),this.ship=new e.Ship(t,new e.Vec(160,136),new e.Vec(128,80),new e.Vec(48,56)),this.planet=new e.Planet([new e.Platform(32,72,48,1),new e.Platform(120,96,32,1),new e.Platform(184,48,48,1)],[32,32,64,0],"#000",200,["#ccc"],2),this.enemies=new e.Spawner(()=>new e.Enemy(.5,Math.random()/2-.25,0),t)}ai(){let e=0,t=this.enemies.items;for(;e<t.length;){let s=t[e];s.collided.x||s.collided.y?(this.addBumm(s.box.pos),t.splice(e,1)):e++}}}e.Scene0=s;class i extends t{constructor(t){super(t),this.hero=new e.Hero(96,160),this.ship=new e.Ship(t,new e.Vec(136,-120)),this.planet=new e.Planet([new e.Platform(48,96,64,3),new e.Platform(200,48,32,3),new e.Platform(184,112,56,3)],[128,64,0,.5],"#500",0,["#cfc","#ccf"]),this.enemies=new e.Spawner(()=>new e.Enemy(.5,Math.random()<.5?-.5:.5,7),t)}}e.Scene1=i;class h extends t{constructor(t){super(t),this.hero=new e.Hero(160,160),this.ship=new e.Ship(t,new e.Vec(96,-120)),this.planet=new e.Planet([new e.Platform(32,48,48,4),new e.Platform(120,64,32,4),new e.Platform(192,96,48,4)],[40,40,40,0],"#555",200,["#06c"]),this.enemies=new e.Spawner(()=>new e.Enemy(.5,0,6),t)}ai(){super.ai(),this.enemies.items.forEach(e=>{e.tick%64==0&&(e.speed.y=(Math.round(2*Math.random())-1)/2)})}}e.Scene2=h;class r extends t{constructor(t){super(t),this.hero=new e.Hero(96,160),this.ship=new e.Ship(t,new e.Vec(160,-120)),this.planet=new e.Planet([new e.Platform(32,96,32,0),new e.Platform(96,48,48,0),new e.Platform(184,80,48,0)],[128,128,255,.5],"#ccc",200,[]),this.enemies=new e.Spawner(()=>new e.Enemy(0,0,1),t)}ai(){let e=0,t=this.hero,s=this.enemies.items;for(;e<s.length;){let i=s[e];i.tick%80==0&&0==i.speed.x&&(i.speed=t.box.pos.clone().sub(i.box.pos).normalize()),i.collided.x?(this.addBumm(i.box.pos),s.splice(e,1)):(i.collided.y&&(i.speed.y=-i.speed.y),e++)}}}e.Scene3=r;class n extends t{constructor(t){super(t),this.hero=new e.Hero(160,160),this.ship=new e.Ship(t,new e.Vec(120,136),new e.Vec(212,80),new e.Vec(48,64)),this.planet=new e.Planet([new e.Platform(32,80,56,1),new e.Platform(152,56,32,1),new e.Platform(204,96,32,1)],[40,160,160,.5],"#060",0,["#fff"]),this.enemies=new e.Spawner(()=>new e.Enemy(.5,-.5,4),t)}ai(){this.enemies.items.forEach(e=>{let t=this.hero;e.tick%80!=0||t.inactive()||(e.speed=t.box.pos.clone().sub(e.box.pos).normalize().scale(.7))})}}e.Scene4=n;class o extends t{constructor(t){super(t),this.hero=new e.Hero(160,160),this.ship=new e.Ship(t,new e.Vec(96,-120)),this.planet=new e.Planet([new e.Platform(32,48,48,2),new e.Platform(120,96,32,2),new e.Platform(192,72,48,2)],[240,160,40,.5],"#960",0,["#f90"]),this.enemies=new e.Spawner(()=>new e.Enemy(.5,Math.random()<.5?-.7:.7,5),t)}}e.Scene5=o;class a extends s{constructor(t){super(t),this.hero=new e.Hero(80,160),this.ship=new e.Ship(t,new e.Vec(135,-120)),this.planet=new e.Planet([new e.Platform(32,56,32,5),new e.Platform(56,104,48,5),new e.Platform(176,72,56,5)],[40,80,40,0],"#000",200,["#666","#999","#ccc"]),this.enemies=new e.Spawner(()=>new e.Enemy(.7,Math.random()/2-.25,2),t)}}e.Scene6=a;class c extends n{constructor(t){super(t),this.hero=new e.Hero(144,160),this.ship=new e.Ship(t,new e.Vec(80,-120)),this.planet=new e.Planet([new e.Platform(32,96,32,6),new e.Platform(104,80,48,6),new e.Platform(192,48,48,6)],[40,200,200,0],"#000",200,[]),this.enemies=new e.Spawner(()=>new e.Enemy(.5,-.5,3),t)}}e.Scene7=c}(Game||(Game={}));var Game;!function(e){class t{constructor(){this.lives=0,this.score=0,this.high=JSON.parse(localStorage.getItem(t.store))||0,this.livesTxt=new e.Txt(120,8,"",1),this.scoreTxt=new e.Txt(0,8,"",1),this.highTxt=new e.Txt(213,8,"",1)}static get(){return t.insta||(t.insta=new t),t.insta}init(){this.lives=3,this.score=0}clear(){this.high=0,localStorage.setItem(t.store,null)}add(e){this.score+=e,this.score>this.high&&(this.high=this.score,localStorage.setItem(t.store,JSON.stringify(this.high)))}inc(){this.lives++}dec(){this.lives&&this.lives--}render(e){this.scoreTxt.text=("000000"+this.score).slice(-7),this.scoreTxt.render(e),this.livesTxt.text=("0"+this.lives).slice(-2),this.livesTxt.render(e),this.highTxt.text=("000000"+this.high).slice(-7),this.highTxt.render(e)}}t.store="LoST_hi",e.Session=t}(Game||(Game={}));var Game;!function(e){class t{constructor(e){t.load++;const s=jsfxr(e);t.ctx||(t.ctx=new AudioContext,t.master=t.ctx.createGain(),t.master.connect(t.ctx.destination)),t.ctx.decodeAudioData(s,e=>{this.buffer=e,t.loaded++})}static ready(){return t.load==t.loaded}play(e=1,s=!1){const i=t.ctx.createGain(),h=t.ctx.createBufferSource();return i.connect(t.master),i.gain.value=e,h.loop=s,h.buffer=this.buffer,h.connect(i),h.start(t.ctx.currentTime),h}}t.load=0,t.loaded=0,e.Sfx=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s){this.collided=new e.Vec(0,0),this.speed=new e.Vec(0,.5),this.box=new e.Box(t,16,16),this.top=s}render(e){}update(e){}}class s{constructor(t){this.collided=new e.Vec(0,0),this.speed=new e.Vec(0,.5);let s;do{s=16*Math.round(15*Math.random())}while(s==t.box.pos.x);this.box=new e.Box(new e.Vec(s,16),16,12)}render(e){s.sprite.render(e,this.box,1,0)}update(e){}}e.Fuel=s;class i{constructor(h,r,n=null,o=null){this.collided=new e.Vec(0,0),this.speed=new e.Vec(0,-1),this.fuels=6,this.tick=0,this.box=new e.Box(r,16,48),n?this.status=1:(this.status=3,i.landSfx.play()),this.parts=[new t(r.clone().add(0,32),2),new t(n||r.clone().add(0,16),1),new t(o||r.clone(),0)],this.type=Math.floor(h/4)%4,this.fuel=new s(this)}complete(){return this.status>=this.parts.length}ready(){return this.status==this.parts.length+this.fuels}land(){return 136==this.box.pos.y}go(){return this.status>this.parts.length+this.fuels}gone(){return this.go()&&this.box.pos.y<=-120}render(e){let t=this.type;if(this.ready()||this.go())i.sprite.render(e,this.box,Math.floor(this.tick%4/2),t);else if(this.complete()){let s=this.box.clone(),h=this.fuels,r=h-(this.status-this.parts.length);s.h/=h;for(let n=0;n<h;n++){let o=r>n?n:n+h;i.sprite.render(e,s,o,t),s.pos.y+=s.h}this.land()&&this.fuel.render(e)}else this.parts.forEach((s,h)=>{i.sprite.render(e,s.box,s.top,t)});if(!this.land()||this.go()){let t=this.box.clone();t.pos.y+=t.h,t.h=16,i.jetSprite.render(e,t,1,this.tick%3)}}update(e){e%8==0&&this.tick++,this.go()?this.box.pos.add(this.speed):this.land()||(this.box.pos.sub(this.speed),this.parts[0].box.pos.sub(this.speed))}}e.Ship=i}(Game||(Game={}));var Game;!function(e){class t{constructor(e,t=0){this.items=[],this.index=0;let s=64-t,i=4+Math.floor(t/8);this.freq=s<8?8:s,this.limit=i<8?i:8,this.factory=e}update(e){if(e%this.freq==0&&this.items.length<this.limit){const e=this.factory.call(this,this.index++);this.items.push(e)}this.items.forEach(t=>{t.update(e)})}render(e){this.items.forEach(t=>{t.render(e)})}}e.Spawner=t}(Game||(Game={}));var Game;!function(e){class t{constructor(e,s,i,h=null){t.load++,this.img=new Image,this.img.onload=(()=>{t.loaded++,h&&h.call(this)}),this.img.src=s,this.ictx=e,this.width=i}static ready(){return t.load==t.loaded}render(e,t,s,i,h=0){let r=t.pos,n=Math.round(r.x),o=Math.round(r.y),a=t.w,c=t.h;s*=c,h+=a*i,e.drawImage(this.img,h,s,a,c,n,o,a,c),n+a>=this.width&&e.drawImage(this.img,h,s,a,c,n-this.width,o,a,c)}crop(e,s,i,h,r=[],n=!1,o=!1){let a=this.ictx,c=a.canvas,l=c.width,d=c.height,p=r.length,m=r.map(e=>{const t=[0,0,0,0];for(let s=0;s<e.length;s++){let i=parseInt(e.substr(s,1),16);t[s]=16*i+i}return t});if(c.width=i,c.height=h*(p+1),a.save(),a.translate(n?i:0,o?h:0),a.scale(n?-1:1,o?-1:1),a.drawImage(this.img,e,s,i,h,0,0,i,h),a.restore(),p>0){const e=a.getImageData(0,0,c.width,c.height),t=e.data.length/(p+1);for(let s=0;s<t;s+=4)if(e.data[s+3])for(let i=0;i<4;i++)for(let h=0;h<p;h++){let n=e.data[s+i];r[h].length>i&&(n-=255-m[h][i]);let o=(h+1)*t+s+i;e.data[o]=n>0?n:0}a.putImageData(e,0,0)}const u=new t(a,c.toDataURL(),this.width);return c.width=l,c.height=d,u}}t.load=0,t.loaded=0,e.Sprite=t}(Game||(Game={}));var Game;!function(e){class t{constructor(t,s,i="",h=0,r=!1){this.box=new e.Box(new e.Vec(t,s),6,7),this.text=i,this.color=h,this.invert=r}render(e){let s=this.box.clone(),i=s.pos,h=this.text.length;this.invert&&(e.fillStyle="#fff",e.fillRect(i.x,i.y,s.w*h+1,s.h+1));for(let i=0;i<h;i++){let h=this.text.charCodeAt(i),r=this.invert?6:2*this.color;h>=48&&h<=57&&t.sprite.render(e,s,r,h-48),h>=97&&h<=122&&(h-=32),h>=65&&h<=90&&((h-=55)>=18&&(h-=18,r++),t.sprite.render(e,s,r,h)),s.pos.x+=s.w}}}e.Txt=t}(Game||(Game={}));var Game;!function(e){class t{constructor(e,t){this.x=e,this.y=t}clone(){return new t(this.x,this.y)}add(e,s){return e instanceof t?(this.x+=e.x,this.y+=e.y):(this.x+=e,this.y+=s),this}sub(e,s){return e instanceof t?(this.x-=e.x,this.y-=e.y):(this.x-=e,this.y-=s),this}scale(e){return this.x*=e,this.y*=e,this}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}normalize(){var e=this.length();return e>0&&this.scale(1/e),this}}e.Vec=t}(Game||(Game={}));var Game;!function(e){function t(e,t){return(t||document).querySelector(e)}function s(e,t,s){e.addEventListener(t,s,!1)}function i(){let e=document.body,t=e.clientWidth/e.clientHeight<c.width/c.height;c.style.width=t?"100%":"",c.style.height=t?"":"100%"}function h(){const e={};s(document,"keydown",t=>{27!=t.keyCode?(e[t.keyCode]=!0,d.input(e,t)):r()}),s(document,"keyup",t=>{e[t.keyCode]=!1,d.input(e,t)}),s(window,"resize",i)}function r(t="L  o  S  T"){d&&d.stop(),d=new e.Menu(t,()=>{m.init(),p=parseInt(location.search.substr(1))||0,d=n(p)})}function n(t){switch(t%8){case 1:return new e.Scene1(t);case 2:return new e.Scene2(t);case 3:return new e.Scene3(t);case 4:return new e.Scene4(t);case 5:return new e.Scene5(t);case 6:return new e.Scene6(t);case 7:return new e.Scene7(t)}return new e.Scene0(t)}function o(){requestAnimationFrame(()=>{o()}),e.Sprite.ready()&&e.Sfx.ready()&&(d instanceof e.Scene&&!m.lives&&d.hero.tick>-120?r("Game Over"):d.complete()&&(d=n(++p)),d.update(),d.render(l),m.render(l))}class a{static get(e=1,t=0){return a.seed=(9301*a.seed+49297)%233280,t+a.seed/233280*(e-t)}}a.seed=Math.random(),e.Rand=a;let c,l,d,p,m;s(window,"load",()=>{c=t("#game"),l=c.getContext("2d"),m=e.Session.get();const s=t("#test").getContext("2d"),n=new e.Sprite(s,"data:image/gif;base64,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",c.width,()=>{e.Scene.sprite=n,e.Hero.sprite=n.crop(0,0,64,48),e.Hero.jetSprite=n.crop(64,0,48,48,["fc0"]),e.Bumm.sprite=n.crop(0,152,48,16,["fc0"]),e.Platform.sprite=n.crop(0,80,24,8,["0c0","fc0","930","999","0c9","c09"]),e.Laser.sprite1=n.crop(0,180,112,1,["f6f","f66","6ff"]),e.Laser.sprite2=n.crop(0,180,112,1,["f6f","f66","6ff"],!0),e.Loot.sprite=n.crop(16,168,80,12,["f00","0ff","ff0"]),e.Fuel.sprite=n.crop(0,168,16,12,["f0f"]),e.Ship.sprite=n.crop(0,88,64,48,["f6f"]),e.Ship.jetSprite=n.crop(0,136,48,16,["fc0"]),e.Txt.sprite=n.crop(0,181,108,14,["ff0","0ff","000"]),e.Hero.jetSfx=new e.Sfx([3,,1,,,.61,,1,1,,,-1,,,-1,,-.76,-.02,.456,0,.18,,-1,.5]),e.Hero.pickSfx=new e.Sfx([0,,.09,.37,.18,.47,,,,,,.42,.67,,,,,,1,,,,,.5]),e.Bumm.sfx=new e.Sfx([3,,.38,.47,.29,.09,,,,,,,,,,.55,.34,-.13,1,,,,,.5]),e.Laser.sfx=new e.Sfx([0,,.12,,.16,.3,.2,-.17,,,,,,.55,-.45,,,,1,,,,,.5]),e.Loot.sfx=new e.Sfx([0,,.11,,.19,.23,,.46,,,,,,.44,,.53,,,1,,,,,.5]),e.Ship.goSfx=new e.Sfx([3,,1,,1,.14,,.08,,,,,,,,,,,1,,,,,.5]),e.Ship.landSfx=new e.Sfx([3,,1,,1,.2,,.08,-.05,,,,,,,,,,1,,,,,.5]),e.Ship.buildSfx=e.Menu.sfx=new e.Sfx([0,,.07,.55,.1,.54,,,,,,.35,.69,,,,,,1,,,,,.5]);for(let t=48;t<=64;t+=16)e.Enemy.sprites.push(n.crop(0,t,48,16,["f66","f6f","66f","6ff"]),n.crop(0,t,48,16,["f66","f6f","66f","6ff"],!0));for(let t=48;t<=128;t+=16)e.Enemy.sprites.push(n.crop(64,t,48,16,["f66","f6f","66f","6ff"]),null);i(),r(),h(),o()})})}(Game||(Game={}));