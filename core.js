/* Suppress Framer Motion key warnings */
const _origErr=console.error;
console.error=(...a)=>{if(typeof a[0]==='string'&&a[0].includes('unique "key"'))return;_origErr(...a)};

var{useRef,useEffect,useState,useCallback}=React;
var{motion,AnimatePresence,useInView}=window.Motion;

/* ═══════════════════════════════════════
   FadingVideo — rAF-driven crossfade
   ═══════════════════════════════════════ */
const FADE_MS=500,FADE_OUT_LEAD=0.55;
function FadingVideo({src,className,style}){
  const vRef=useRef(null),rafRef=useRef(null),foRef=useRef(false);
  const fadeTo=useCallback((t,d)=>{
    if(rafRef.current)cancelAnimationFrame(rafRef.current);
    const v=vRef.current;if(!v)return;
    const s=parseFloat(v.style.opacity)||0,st=performance.now();
    const step=now=>{const p=Math.min((now-st)/d,1);v.style.opacity=s+(t-s)*p;if(p<1)rafRef.current=requestAnimationFrame(step)};
    rafRef.current=requestAnimationFrame(step);
  },[]);
  useEffect(()=>{
    const v=vRef.current;if(!v)return;
    const onL=()=>{v.style.opacity='0';v.play();fadeTo(1,FADE_MS)};
    const onT=()=>{if(!foRef.current&&v.duration-v.currentTime<=FADE_OUT_LEAD&&v.duration-v.currentTime>0){foRef.current=true;fadeTo(0,FADE_MS)}};
    const onE=()=>{v.style.opacity='0';setTimeout(()=>{v.currentTime=0;v.play();foRef.current=false;fadeTo(1,FADE_MS)},100)};
    v.addEventListener('loadeddata',onL);v.addEventListener('timeupdate',onT);v.addEventListener('ended',onE);
    return()=>{if(rafRef.current)cancelAnimationFrame(rafRef.current);v.removeEventListener('loadeddata',onL);v.removeEventListener('timeupdate',onT);v.removeEventListener('ended',onE)};
  },[fadeTo]);
  return <video ref={vRef} src={src} autoPlay muted playsInline preload="auto" className={className} style={{...style,opacity:0}}/>;
}

/* ═══════════════════════════════════════
   BlurText — word-by-word blur-in
   ═══════════════════════════════════════ */
function BlurText({text,className,style}){
  const ref=useRef(null);const[go,setGo]=useState(false);
  useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){setGo(true);o.disconnect()}},{threshold:0.1});if(ref.current)o.observe(ref.current);return()=>o.disconnect()},[]);
  return(
    <p ref={ref} className={className} style={{display:'flex',flexWrap:'wrap',justifyContent:'center',rowGap:'0.1em',...(style||{})}}>
      {text.split(' ').map((w,i)=>(
        <motion.span key={i} style={{display:'inline-block',marginRight:'0.28em'}}
          initial={{filter:'blur(10px)',opacity:0,y:50}}
          animate={go?{filter:['blur(10px)','blur(5px)','blur(0px)'],opacity:[0,0.5,1],y:[50,-5,0]}:{}}
          transition={{duration:0.7,times:[0,0.5,1],ease:'easeOut',delay:(i*100)/1000}}>
          {w}
        </motion.span>
      ))}
    </p>
  );
}

/* ═══════════════════════════════════════
   Scroll-triggered animation helpers
   ═══════════════════════════════════════ */
const sv={hidden:{opacity:0,y:40,filter:'blur(6px)'},visible:{opacity:1,y:0,filter:'blur(0px)'}};
function ScrollReveal({children,className,delay=0,style}){
  return(
    <motion.div className={className} style={style}
      initial="hidden" whileInView="visible" viewport={{once:true,amount:0.15}}
      variants={sv} transition={{duration:0.7,delay,ease:'easeOut'}}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   Animated Counter (for stats)
   ═══════════════════════════════════════ */
function AnimatedCounter({end,suffix='',duration=2000}){
  const[count,setCount]=useState(0);
  const ref=useRef(null);
  const inView=useInView(ref,{once:true,amount:0.5});
  useEffect(()=>{
    if(!inView)return;
    const start=performance.now();
    const step=now=>{
      const p=Math.min((now-start)/duration,1);
      const eased=1-Math.pow(1-p,3);
      setCount(Math.floor(eased*end));
      if(p<1)requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  },[inView,end,duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ═══════════════════════════════════════
   Magnetic Button
   ═══════════════════════════════════════ */
function MagneticButton({children,className,href,onClick,target,rel}){
  const ref=useRef(null);
  const[offset,setOffset]=useState({x:0,y:0});
  const handleMove=useCallback(e=>{
    const rect=ref.current.getBoundingClientRect();
    const cx=rect.left+rect.width/2,cy=rect.top+rect.height/2;
    setOffset({x:(e.clientX-cx)*0.15,y:(e.clientY-cy)*0.15});
  },[]);
  const handleLeave=useCallback(()=>setOffset({x:0,y:0}),[]);
  const Tag=href?'a':'button';
  const props=href?{href,target,rel}:{onClick};
  return(
    <Tag ref={ref} {...props} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{transform:`translate(${offset.x}px,${offset.y}px)`,transition:'transform 0.25s cubic-bezier(0.23,1,0.32,1)',display:'inline-flex',alignItems:'center'}}>
      {children}
    </Tag>
  );
}

/* ═══════════════════════════════════════
   Icons (SVG)
   ═══════════════════════════════════════ */
function ArrowUpRight({className}){return<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>}
function PlayIcon({className}){return<svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>}
function ClockIcon(){return<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
function GlobeIcon(){return<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>}
function ImgIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21H5Zm1-4h12l-3.75-5-3 4L9 13l-3 4Z"/></svg>}
function MovIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M4 6.47 5.76 10H20v8H4V6.47M22 4h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.89-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4Z"/></svg>}
function BulbIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1Zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7Z"/></svg>}
function ChevronDown({className,style}){return<svg className={className} style={style} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>}

/* Tech stack icons */
function ReactIcon(){return<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1"><circle cx="12" cy="12" r="2.5" fill="#61DAFB" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>}
function NodeIcon(){return<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#68A063" strokeWidth="1.2" strokeLinejoin="round"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/><path d="M12 22V12"/><path d="M3 7l9 5 9-5"/></svg>}
function PythonIcon(){return<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FFD43B" strokeWidth="1.2"><path d="M12 2C8 2 8 4 8 4v3h4v1H6s-4 0-4 4 2 4 2 4h2v-3s0-2 2-2h5s2 0 2-2V4s0-2-4-2zm-1 1.5a.75.75 0 110 1.5.75.75 0 010-1.5z"/><path d="M12 22c4 0 4-2 4-2v-3h-4v-1h6s4 0 4-4-2-4-2-4h-2v3s0 2-2 2h-5s-2 0-2 2v4s0 2 4 2zm1-1.5a.75.75 0 110-1.5.75.75 0 010 1.5z" stroke="#3776AB"/></svg>}
function NextIcon(){return<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2"><circle cx="12" cy="12" r="10"/><path d="M8 8v8"/><path d="M8 8l8 10"/><path d="M16 8v4" strokeDasharray="0 4 4"/></svg>}
function LinuxIcon(){return<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FCC624" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9 2 7 5 7 9c0 2 .5 3 1 4l-2 5c0 1 1 2 3 2h6c2 0 3-1 3-2l-2-5c.5-1 1-2 1-4 0-4-2-7-5-7z"/><circle cx="10" cy="8" r="0.8" fill="#FCC624"/><circle cx="14" cy="8" r="0.8" fill="#FCC624"/><path d="M10 11c0 1 1 1.5 2 1.5s2-.5 2-1.5"/></svg>}
function GitIcon(){return<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F05032" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M12 8v4"/><path d="M12 12c-3 0-6 3-6 6"/><path d="M12 12c3 0 6 3 6 6"/></svg>}

/* ═══════════════════════════════════════
   Particle Canvas
   ═══════════════════════════════════════ */
function ParticleSystem(){
  useEffect(()=>{
    const canvas=document.getElementById('particles-canvas');
    if(!canvas)return;
    const ctx=canvas.getContext('2d');
    let w,h,particles=[],raf;
    const resize=()=>{w=canvas.width=window.innerWidth;h=canvas.height=window.innerHeight};
    resize();window.addEventListener('resize',resize);
    for(let i=0;i<60;i++){
      particles.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.3,vy:(Math.random()-0.5)*0.3,r:Math.random()*1.5+0.5});
    }
    const draw=()=>{
      ctx.clearRect(0,0,w,h);
      particles.forEach((p,i)=>{
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=w;if(p.x>w)p.x=0;if(p.y<0)p.y=h;if(p.y>h)p.y=0;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(255,255,255,0.6)';ctx.fill();
        for(let j=i+1;j<particles.length;j++){
          const dx=p.x-particles[j].x,dy=p.y-particles[j].y,dist=Math.sqrt(dx*dx+dy*dy);
          if(dist<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=`rgba(255,255,255,${0.15*(1-dist/120)})`;ctx.lineWidth=0.5;ctx.stroke();}
        }
      });
      raf=requestAnimationFrame(draw);
    };
    draw();
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('resize',resize)};
  },[]);
  return null;
}

/* ═══════════════════════════════════════
   Custom Cursor with Glow Trail
   ═══════════════════════════════════════ */
function CustomCursor(){
  const dotRef=useRef(null),ringRef=useRef(null);
  const mouse=useRef({x:0,y:0}),ring=useRef({x:0,y:0});
  const trails=useRef([]);
  const canvasRef=useRef(null);
  useEffect(()=>{
    if(window.matchMedia('(hover:none)').matches)return;
    const onMove=e=>{mouse.current={x:e.clientX,y:e.clientY}};
    const onOver=e=>{
      const t=e.target.closest('a,button,[data-magnetic]');
      if(t&&ringRef.current){ringRef.current.style.width='56px';ringRef.current.style.height='56px';ringRef.current.style.borderColor='rgba(255,255,255,0.7)'}
    };
    const onOut=e=>{
      if(ringRef.current){ringRef.current.style.width='40px';ringRef.current.style.height='40px';ringRef.current.style.borderColor='rgba(255,255,255,0.4)'}
    };
    window.addEventListener('mousemove',onMove);
    document.addEventListener('mouseover',onOver);
    document.addEventListener('mouseout',onOut);
    const canvas=canvasRef.current;
    const ctx=canvas?canvas.getContext('2d'):null;
    const resizeCanvas=()=>{if(canvas){canvas.width=window.innerWidth;canvas.height=window.innerHeight}};
    resizeCanvas();window.addEventListener('resize',resizeCanvas);
    let raf;
    const loop=()=>{
      const m=mouse.current;
      ring.current.x+=(m.x-ring.current.x)*0.12;
      ring.current.y+=(m.y-ring.current.y)*0.12;
      if(dotRef.current){dotRef.current.style.left=(m.x-4)+'px';dotRef.current.style.top=(m.y-4)+'px'}
      if(ringRef.current){ringRef.current.style.left=(ring.current.x-20)+'px';ringRef.current.style.top=(ring.current.y-20)+'px'}
      trails.current.push({x:m.x,y:m.y,life:1});
      if(trails.current.length>30)trails.current.shift();
      if(ctx&&canvas){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        trails.current.forEach((t,i)=>{
          t.life-=0.04;
          if(t.life>0){ctx.beginPath();ctx.arc(t.x,t.y,t.life*12,0,Math.PI*2);ctx.fillStyle=`rgba(255,255,255,${t.life*0.08})`;ctx.fill()}
        });
        trails.current=trails.current.filter(t=>t.life>0);
      }
      raf=requestAnimationFrame(loop);
    };
    loop();
    return()=>{cancelAnimationFrame(raf);window.removeEventListener('mousemove',onMove);document.removeEventListener('mouseover',onOver);document.removeEventListener('mouseout',onOut);window.removeEventListener('resize',resizeCanvas)};
  },[]);
  if(typeof window!=='undefined'&&window.matchMedia('(hover:none)').matches)return null;
  return(
    <>
      <canvas ref={canvasRef} style={{position:'fixed',inset:0,zIndex:9996,pointerEvents:'none'}}/>
      <div ref={dotRef} className="cursor-dot"/>
      <div ref={ringRef} className="cursor-ring"/>
    </>
  );
}

/* ═══════════════════════════════════════
   Loading Screen Controller
   ═══════════════════════════════════════ */
function LoadingScreen(){
  useEffect(()=>{
    const loader=document.getElementById('loader');
    const authText=document.getElementById('auth-text');
    const accessEl=document.getElementById('access-granted');
    const barFill=document.getElementById('auth-bar-fill');
    if(!loader||!authText)return;

    const AUTH_MSG='Authenticating user...  ██████████  100%';
    let i=0,barW=0,rafBar,dismissed=false;

    /* Animate progress bar in parallel */
    const startTime=performance.now();
    const barDuration=1800;
    const animBar=now=>{
      const p=Math.min((now-startTime)/barDuration,1);
      barW=p*100;
      if(barFill)barFill.style.width=barW+'%';
      if(p<1)rafBar=requestAnimationFrame(animBar);
    };
    rafBar=requestAnimationFrame(animBar);

    /* Typewriter for auth message */
    const typeTimer=setInterval(()=>{
      if(i<=AUTH_MSG.length){
        authText.textContent=AUTH_MSG.slice(0,i)+(i<AUTH_MSG.length?'▌':'');
        i++;
      } else {
        clearInterval(typeTimer);
        /* Show Access Granted */
        setTimeout(()=>{
          authText.textContent='Identity Verified ✓';
          authText.style.color='rgba(110,231,183,0.9)';
          setTimeout(()=>{
            if(accessEl)accessEl.classList.add('show');
            setTimeout(()=>{
              if(!dismissed){
                dismissed=true;
                loader.classList.add('hide');
                setTimeout(()=>{if(loader.parentNode)loader.parentNode.removeChild(loader);},1000);
              }
            },900);
          },300);
        },200);
      }
    },38);

    return()=>{
      clearInterval(typeTimer);
      if(rafBar)cancelAnimationFrame(rafBar);
    };
  },[]);
  return null;
}

/* ═══════════════════════════════════════
   LiveClock — IST time + system status
   ═══════════════════════════════════════ */
function LiveClock(){
  const[time,setTime]=useState('');
  const[date,setDate]=useState('');
  useEffect(()=>{
    const tick=()=>{
      const now=new Date();
      const opts={timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:true};
      const dOpts={timeZone:'Asia/Kolkata',weekday:'short',month:'short',day:'numeric'};
      setTime(now.toLocaleTimeString('en-IN',opts).toUpperCase());
      setDate(now.toLocaleDateString('en-IN',dOpts).toUpperCase());
    };
    tick();
    const id=setInterval(tick,1000);
    return()=>clearInterval(id);
  },[]);
  return(
    <div style={{position:'fixed',top:20,right:24,zIndex:49,display:'flex',flexDirection:'column',alignItems:'flex-end',gap:3,pointerEvents:'none'}}>
      <div style={{display:'flex',alignItems:'center',gap:6}}>
        <span style={{width:6,height:6,borderRadius:'50%',background:'#6ee7b7',boxShadow:'0 0 8px #6ee7b7',display:'inline-block',animation:'pulse-dot 2s ease-in-out infinite'}}></span>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.15em',color:'rgba(110,231,183,0.85)',textTransform:'uppercase'}}>SYSTEM ONLINE</span>
      </div>
      <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.72rem',letterSpacing:'0.1em',color:'rgba(255,255,255,0.75)'}}>{time} IST</span>
      <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.58rem',letterSpacing:'0.1em',color:'rgba(255,255,255,0.3)'}}>{date}</span>
    </div>
  );
}

/* ═══════════════════════════════════════
   GhostCursors — real BroadcastChannel
   sync + 2 simulated ghost visitors
   ═══════════════════════════════════════ */
const GHOST_NAMES=['v_0x7f','anon_42','dev_k9','user_rx','guest_77','r_watcher'];
const GHOST_COLORS=['#6ee7b7','#a78bfa','#67e8f9','#fb923c'];

function GhostCursors(){
  const myId=useRef(Math.random().toString(36).substr(2,5));
  const [peers,setPeers]=useState({});
  const [simCursors,setSimCursors]=useState([]);
  const [onlineCount,setOnlineCount]=useState(()=>Math.floor(Math.random()*6)+2);
  const ch=useRef(null);

  /* BroadcastChannel — real cross-tab sync */
  useEffect(()=>{
    if(!window.BroadcastChannel)return;
    const name=GHOST_NAMES[Math.floor(Math.random()*GHOST_NAMES.length)];
    const color=GHOST_COLORS[Math.floor(Math.random()*GHOST_COLORS.length)];
    ch.current=new BroadcastChannel('rishi-portfolio-live');
    ch.current.onmessage=e=>{
      const{id,x,y,n,c,gone}=e.data;
      if(id===myId.current)return;
      setPeers(prev=>{
        if(gone){const nx={...prev};delete nx[id];return nx;}
        return{...prev,[id]:{x,y,n,c,id}};
      });
    };
    const onMove=e=>{
      if(!ch.current)return;
      ch.current.postMessage({id:myId.current,x:e.clientX/window.innerWidth,y:e.clientY/window.innerHeight,n:name,c:color});
    };
    window.addEventListener('mousemove',onMove);
    window.addEventListener('beforeunload',()=>ch.current&&ch.current.postMessage({id:myId.current,gone:true}));
    return()=>{window.removeEventListener('mousemove',onMove);if(ch.current)ch.current.close();};
  },[]);

  /* Simulated ghost visitors */
  useEffect(()=>{
    const ghosts=[
      {id:'sim_a',name:'anon_42',color:'#a78bfa',delay:1200},
      {id:'sim_b',name:'v_0x7f',color:'#6ee7b7',delay:3500},
    ];
    const states={};
    const targets={};

    const randTarget=()=>({x:0.1+Math.random()*0.8,y:0.1+Math.random()*0.8});
    ghosts.forEach(g=>{
      states[g.id]={x:Math.random(),y:Math.random(),active:false};
      targets[g.id]=randTarget();
    });
    const timers=[];
    ghosts.forEach(g=>{
      timers.push(setTimeout(()=>{
        states[g.id].active=true;
        const changeTarget=()=>{
          targets[g.id]=randTarget();
          timers.push(setTimeout(changeTarget,2000+Math.random()*4000));
        };
        changeTarget();
      },g.delay));
    });
    let raf;
    const tick=()=>{
      ghosts.forEach(g=>{
        if(!states[g.id].active)return;
        const s=states[g.id],t=targets[g.id];
        s.x+=(t.x-s.x)*0.018;
        s.y+=(t.y-s.y)*0.018;
      });
      setSimCursors(ghosts.filter(g=>states[g.id].active).map(g=>({...g,x:states[g.id].x,y:states[g.id].y})));
      raf=requestAnimationFrame(tick);
    };
    raf=requestAnimationFrame(tick);
    return()=>{cancelAnimationFrame(raf);timers.forEach(clearTimeout);};
  },[]);

  const allCursors=[...Object.values(peers),...simCursors];
  const total=onlineCount+Object.keys(peers).length;

  return(
    <>
      {/* Visitor counter top-left */}
      <div style={{position:'fixed',top:20,left:20,zIndex:49,display:'flex',alignItems:'center',gap:8,pointerEvents:'none'}}>
        <div style={{display:'flex',alignItems:'center',gap:5,background:'rgba(0,0,0,0.5)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:9999,padding:'5px 10px',backdropFilter:'blur(8px)'}}>
          <span style={{width:6,height:6,borderRadius:'50%',background:'#6ee7b7',boxShadow:'0 0 8px #6ee7b7',display:'inline-block',animation:'pulse-dot 2s ease-in-out infinite'}}></span>
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.58rem',letterSpacing:'0.12em',color:'rgba(255,255,255,0.6)'}}>{total} ONLINE</span>
        </div>
      </div>
      {/* Render all cursors */}
      {allCursors.map(c=>(
        <div key={c.id} style={{position:'fixed',left:c.x*window.innerWidth,top:c.y*window.innerHeight,zIndex:9990,pointerEvents:'none',transform:'translate(-2px,-2px)'}}>
          <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
            <path d="M0 0L0 16L4 12L7 20L10 19L7 11L12 11Z" fill={c.color} fillOpacity="0.9" stroke="rgba(0,0,0,0.4)" strokeWidth="1"/>
          </svg>
          <div style={{marginTop:2,marginLeft:14,background:'rgba(0,0,0,0.75)',border:`1px solid ${c.color}55`,borderRadius:4,padding:'2px 6px',fontSize:'0.6rem',fontFamily:'JetBrains Mono,monospace',color:c.color,whiteSpace:'nowrap'}}>{c.n||c.name}</div>
        </div>
      ))}
    </>
  );
}

/* ═══════════════════════════════════════
   ClassifiedReveal — locked overlay that
   sweeps away when section scrolls in
   ═══════════════════════════════════════ */
function ClassifiedReveal({children,label='CLASSIFIED'}){
  const ref=useRef(null);
  const [unlocked,setUnlocked]=useState(false);
  const [sweeping,setSweeping]=useState(false);
  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!unlocked){
        setSweeping(true);
        setTimeout(()=>setUnlocked(true),700);
        obs.disconnect();
      }
    },{threshold:0.25});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[unlocked]);
  return(
    <div ref={ref} style={{position:'relative',overflow:'hidden'}}>
      {children}
      {!unlocked&&(
        <div style={
          {position:'absolute',inset:0,zIndex:20,background:sweeping?'transparent':'rgba(0,0,0,0.88)',
          display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12,
          transition:'background 0.5s ease',backdropFilter:sweeping?'none':'blur(4px)'}
        }>
          {/* Sweep line */}
          {sweeping&&<div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,transparent 0%,rgba(110,231,183,0.15) 50%,transparent 100%)',animation:'sweep-reveal 0.7s ease forwards'}}/>}
          {!sweeping&&(
            <>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.3em',color:'rgba(255,255,255,0.25)',textTransform:'uppercase'}}>⬛⬛⬛ {label} ⬛⬛⬛</div>
              <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:'2rem',color:'rgba(255,255,255,0.5)',letterSpacing:'-1px'}}>Access Restricted.</div>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.62rem',color:'rgba(110,231,183,0.5)',letterSpacing:'0.15em',animation:'pulse-dot 2s ease-in-out infinite'}}>▼ SCROLL TO UNLOCK ▼</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

/* Export all to window for sections.js */
window.FadingVideo=FadingVideo;window.BlurText=BlurText;window.ScrollReveal=ScrollReveal;
window.AnimatedCounter=AnimatedCounter;window.MagneticButton=MagneticButton;
window.ArrowUpRight=ArrowUpRight;window.PlayIcon=PlayIcon;window.ClockIcon=ClockIcon;
window.GlobeIcon=GlobeIcon;window.ImgIcon=ImgIcon;window.MovIcon=MovIcon;window.BulbIcon=BulbIcon;
window.ChevronDown=ChevronDown;
window.ReactIcon=ReactIcon;window.NodeIcon=NodeIcon;window.PythonIcon=PythonIcon;
window.NextIcon=NextIcon;window.LinuxIcon=LinuxIcon;window.GitIcon=GitIcon;
window.ParticleSystem=ParticleSystem;window.CustomCursor=CustomCursor;
window.LoadingScreen=LoadingScreen;window.LiveClock=LiveClock;
window.GhostCursors=GhostCursors;window.ClassifiedReveal=ClassifiedReveal;
