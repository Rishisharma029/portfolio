/* globals: motion, AnimatePresence, useInView, useRef, useEffect, useState, useCallback, sv — from core.js */


/* ── Navbar (with hamburger for mobile) ── */
function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const links = ['Home','Projects','Demos','Skills','Terminal','Journey','About','Contact'];
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    const r=()=>setIsMobile(window.innerWidth<768);
    window.addEventListener('scroll',h);
    window.addEventListener('resize',r);
    return()=>{
      window.removeEventListener('scroll',h);
      window.removeEventListener('resize',r);
    };
  },[]);
  return(
    <nav style={{position:'fixed',top:16,left:0,right:0,padding:'0 clamp(1rem,4vw,4rem)',zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div className="liquid-glass" style={{width:48,height:48,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',transition:'box-shadow 0.3s',boxShadow:scrolled?'0 0 20px rgba(255,255,255,0.15)':''}}>
        <span style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:'1.25rem',color:'#fff'}}>r</span>
      </div>

      {isMobile ? (
        <>
          <button onClick={()=>setMenuOpen(o=>!o)} className="liquid-glass"
            style={{width:44,height:44,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',border:'none',background:'transparent',cursor:'none',flexDirection:'column',gap:5,padding:12}}>
            <motion.div animate={{rotate:menuOpen?45:0,y:menuOpen?7:0}} style={{width:18,height:1.5,background:'#fff',borderRadius:2,transformOrigin:'center'}}/>
            <motion.div animate={{opacity:menuOpen?0:1,x:menuOpen?-8:0}} style={{width:18,height:1.5,background:'#fff',borderRadius:2}}/>
            <motion.div animate={{rotate:menuOpen?-45:0,y:menuOpen?-7:0}} style={{width:18,height:1.5,background:'#fff',borderRadius:2,transformOrigin:'center'}}/>
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div initial={{opacity:0,y:-16,scale:0.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-16,scale:0.96}}
                transition={{duration:0.25,ease:'easeOut'}}
                className="liquid-glass"
                style={{position:'absolute',top:'calc(100% + 8px)',left:16,right:16,borderRadius:'1.25rem',padding:'16px 8px',display:'flex',flexDirection:'column',gap:4,zIndex:100}}>
                {links.map(l=>(
                  <a key={l} href={'#'+l.toLowerCase()} onClick={()=>setMenuOpen(false)}
                    style={{padding:'12px 16px',fontSize:'0.9rem',fontWeight:500,color:'rgba(255,255,255,0.9)',fontFamily:'Barlow,sans-serif',textDecoration:'none',borderRadius:8,transition:'background 0.15s'}}
                    onMouseEnter={e=>e.currentTarget.style.background='rgba(255,255,255,0.05)'}
                    onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
                    {l}
                  </a>
                ))}
                <a href="mailto:i.rishisharma2007@gmail.com"
                  style={{margin:'8px 8px 0',padding:'12px 16px',background:'#fff',color:'#000',borderRadius:9999,fontSize:'0.85rem',fontWeight:600,fontFamily:'Barlow,sans-serif',textDecoration:'none',textAlign:'center',cursor:'none'}}>
                  Hire Me
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <div className="liquid-glass" style={{borderRadius:9999,padding:'6px 6px',display:'flex',alignItems:'center',gap:0}}>
            {links.map(l=>(
              <a key={l} href={'#'+l.toLowerCase()} style={{padding:'8px 12px',fontSize:'0.8rem',fontWeight:500,color:'rgba(255,255,255,0.85)',fontFamily:'Barlow,sans-serif',textDecoration:'none',transition:'color 0.2s'}}
                onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.85)'}>{l}</a>
            ))}
            <MagneticButton href="mailto:i.rishisharma2007@gmail.com"
              style={{background:'#fff',color:'#000',borderRadius:9999,padding:'8px 16px',fontSize:'0.8rem',fontWeight:600,fontFamily:'Barlow,sans-serif',whiteSpace:'nowrap',marginLeft:4,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:4,border:'none',cursor:'none'}}>
              Hire Me <ArrowUpRight style={{width:14,height:14}}/>
            </MagneticButton>
          </div>
          <div style={{width:48,height:48}}/>
        </>
      )}
    </nav>
  );
}


/* ── Hero ── */
function HeroSection(){
  return(
    <section id="home" style={{position:'relative',height:'100vh',background:'#000',display:'flex',flexDirection:'column',overflow:'hidden'}}>
      <FadingVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        style={{position:'absolute',left:'50%',top:0,transform:'translateX(-50%)',width:'120%',height:'120%',objectFit:'cover',objectPosition:'top',zIndex:0}}/>
      <div className="video-overlay"/>
      <div style={{position:'relative',zIndex:10,display:'flex',flexDirection:'column',height:'100%'}}>
        <Navbar/>
        <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingTop:96,paddingLeft:16,paddingRight:16,textAlign:'center'}}>
          <motion.div initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0px)',opacity:1,y:0}} transition={{duration:0.8,delay:0.4,ease:'easeOut'}}
            className="liquid-glass" style={{borderRadius:9999,display:'inline-flex',alignItems:'center',gap:8,paddingRight:12,marginBottom:32}}>
            <span style={{background:'#fff',color:'#000',borderRadius:9999,padding:'4px 12px',fontSize:'0.7rem',fontWeight:700,fontFamily:'Barlow,sans-serif'}}>2026</span>
            <span style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.9)',fontFamily:'Barlow,sans-serif'}}>BCA Student · Builder · Cybersecurity Enthusiast</span>
          </motion.div>
          <BlurText text="Building the Future One Line of Code"
            style={{display:'flex',flexWrap:'wrap',justifyContent:'center',rowGap:'0.1em',fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(3rem,8vw,5.5rem)',lineHeight:0.85,letterSpacing:'-4px',maxWidth:'720px'}}/>
          <motion.p initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0px)',opacity:1,y:0}} transition={{duration:0.8,delay:0.8,ease:'easeOut'}}
            style={{marginTop:20,fontSize:'0.9rem',color:'rgba(255,255,255,0.92)',maxWidth:560,fontFamily:'Barlow,sans-serif',fontWeight:300,lineHeight:1.55,textShadow:'0 2px 12px rgba(0,0,0,0.8)'}}>
            Hi, I'm Rishi Sharma — a BCA student passionate about building real-world applications, ethical hacking, and cybersecurity. From load balancers to full-stack platforms, I turn ideas into impact.
          </motion.p>
          <motion.div initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0px)',opacity:1,y:0}} transition={{duration:0.8,delay:1.1,ease:'easeOut'}}
            style={{display:'flex',alignItems:'center',gap:24,marginTop:28}}>
            <MagneticButton href="mailto:i.rishisharma2007@gmail.com" className="liquid-glass-strong"
              style={{borderRadius:9999,padding:'10px 20px',fontSize:'0.85rem',fontWeight:500,color:'#fff',display:'inline-flex',alignItems:'center',gap:8,textDecoration:'none',cursor:'none'}}>
              Get in Touch <ArrowUpRight style={{width:18,height:18}}/>
            </MagneticButton>
            <MagneticButton href="#projects"
              style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:'0.85rem',color:'#fff',fontFamily:'Barlow,sans-serif',fontWeight:500,textDecoration:'none',cursor:'none'}}>
              View Projects <PlayIcon style={{width:14,height:14}}/>
            </MagneticButton>
          </motion.div>
          <motion.div initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0px)',opacity:1,y:0}} transition={{duration:0.8,delay:1.3,ease:'easeOut'}}
            style={{display:'flex',gap:16,marginTop:32}}>
            {[
              {Icon:ClockIcon,val:'8+',label:'Projects Built'},
              {Icon:GlobeIcon,val:'7',label:'Hackathons'},
            ].map(({Icon,val,label},i)=>(
              <div key={i} className="liquid-glass" style={{borderRadius:'1.25rem',padding:20,width:200,display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                <Icon/><span style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:'2.2rem',letterSpacing:'-1px',lineHeight:1,color:'#fff',marginTop:12}}>{val}</span>
                <span style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.8)',fontFamily:'Barlow,sans-serif',fontWeight:300,marginTop:6}}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{filter:'blur(10px)',opacity:0,y:20}} animate={{filter:'blur(0px)',opacity:1,y:0}} transition={{duration:0.8,delay:1.4,ease:'easeOut'}}
          style={{display:'flex',flexDirection:'column',alignItems:'center',gap:16,paddingBottom:32}}>
          <span className="liquid-glass" style={{borderRadius:9999,padding:'4px 14px',fontSize:'0.72rem',fontWeight:500,color:'#fff',fontFamily:'Barlow,sans-serif'}}>Technologies &amp; interests that drive my work</span>
          <div style={{display:'flex',alignItems:'center',gap:48}}>
            {['React','Node','Python','Cyber','Linux'].map(n=>(
              <span key={n} style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(1.1rem,3vw,1.6rem)',letterSpacing:'-0.5px'}}>{n}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Capabilities / Projects ── */

/* Main project icon set */
function BrainIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>}
function CodeIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>}
function ResumeIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>}
function ShieldIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>}
function DisasterIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>}
function BugIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C13 5.06 12.51 5 12 5c-.51 0-1 .06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/></svg>}
function WorkshopIcon(){return<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white h-6 w-6"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>}

const cards=[
  /* ── Main Projects ── */
  {I:BrainIcon, t:'Visuals AI System Designer', tags:['AI','System Architecture','Diagramming','Full Stack'], d:'AI-powered system architecture and diagramming platform that auto-generates visual infrastructure diagrams from natural language input.', badge:'Main'},
  {I:CodeIcon,  t:'DevInspect-AI',             tags:['AI','Code Analysis','Developer Tools','Node.js'],  d:'AI-powered developer assistant and code analysis tool. Performs deep inspection, error detection, and code quality insights in real-time.', badge:'Main'},
  {I:ResumeIcon,t:'AI Resume Roaster',          tags:['AI','Resume Analysis','NLP','React'],              d:'Intelligent resume feedback and analysis platform using AI — gives brutally honest, actionable critique to help candidates stand out.', badge:'Main'},
  {I:ImgIcon,   t:'EvalSync System',            tags:['Full Stack','Real-Time','Dashboard','Management'],  d:'A complete evaluation and management platform with live sync, role-based dashboards, and automated reporting workflows.', badge:'Main'},
  {I:MovIcon,   t:'Load Balancer App',          tags:['CBSE Approved','UP Board','Production','Network'],  d:'Production-grade load balancer approved for CBSE & UP Board — traffic distribution, health checks, and automatic failover.', badge:'Main'},
  {I:BugIcon,      t:'BugHunter-AI',         tags:['AI','Security','Bug Detection','Vulnerability'],    d:'AI-powered bug and vulnerability detection system. Statically and dynamically analyzes codebases to surface hidden security issues.', badge:'Lab'},
  {I:DisasterIcon, t:'ResqNet',              tags:['Disaster Tech','Coordination','Real-Time','Emergency'], d:'A disaster and emergency coordination platform for real-time response management, team dispatch, and incident tracking during crisis events.', badge:'Lab'},
  {I:WorkshopIcon, t:'AI Engineering Workshop', tags:['AI','Experiments','Learning','Open Source'],    d:'Repository of AI experiments, workshop code, and research projects exploring cutting-edge machine learning concepts and implementations.', badge:'Lab'},
];

/* Badge color helper */
const BADGE_STYLE = {
  Main: {color:'#6ee7b7', border:'rgba(110,231,183,0.3)', bg:'rgba(110,231,183,0.08)'},
  Lab:  {color:'#a78bfa', border:'rgba(167,139,250,0.3)', bg:'rgba(167,139,250,0.08)'},
};

function CapSection(){
  return(
    <section id="projects" style={{position:'relative',minHeight:'100vh',background:'#000',overflow:'hidden'}}>
      <FadingVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0}}/>
      <div className="video-overlay"/>
      <div style={{position:'relative',zIndex:10,padding:'96px 5rem 80px',display:'flex',flexDirection:'column'}}>

        {/* Section header */}
        <div style={{marginBottom:64}}>
          <ScrollReveal delay={0.1}>
            <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.7)',marginBottom:20,textShadow:'0 2px 8px rgba(0,0,0,0.9)'}}>// What I Build</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(3.5rem,8vw,6rem)',lineHeight:0.9,letterSpacing:'-3px',textShadow:'0 4px 24px rgba(0,0,0,0.9)'}}>Projects<br/>& Work</h2>
          </ScrollReveal>
        </div>

        {/* Main Projects label */}
        <ScrollReveal delay={0.25}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:28}}>
            <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.62rem',letterSpacing:'0.25em',color:'#6ee7b7',textTransform:'uppercase'}}>● Main Projects</span>
            <div style={{flex:1,height:1,background:'linear-gradient(90deg,rgba(110,231,183,0.3),transparent)'}}/>
          </div>
        </ScrollReveal>

        {/* Main Projects grid (first 5) */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:24,marginBottom:60}}>
          {cards.filter(c=>c.badge==='Main').map((c,i)=>(
            <ScrollReveal key={c.t} delay={0.1*i}>
              <div className="liquid-glass" style={{borderRadius:'1.25rem',padding:24,minHeight:340,display:'flex',flexDirection:'column',height:'100%',position:'relative'}}>
                {/* Badge */}
                <span style={{position:'absolute',top:16,right:16,fontFamily:'JetBrains Mono,monospace',fontSize:'0.55rem',letterSpacing:'0.2em',
                  color:BADGE_STYLE[c.badge].color,background:BADGE_STYLE[c.badge].bg,
                  border:`1px solid ${BADGE_STYLE[c.badge].border}`,borderRadius:4,padding:'2px 8px',textTransform:'uppercase'}}>Main</span>
                <div style={{display:'flex',alignItems:'flex-start',gap:12}}>
                  <div className="liquid-glass" style={{borderRadius:12,width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><c.I/></div>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:14,maxWidth:'90%'}}>
                  {c.tags.map(t=><span key={t} className="liquid-glass" style={{borderRadius:9999,padding:'4px 10px',fontSize:'0.68rem',color:'rgba(255,255,255,0.85)',fontFamily:'Barlow,sans-serif',whiteSpace:'nowrap'}}>{t}</span>)}
                </div>
                <div style={{flex:1}}/>
                <div style={{marginTop:20}}>
                  <h3 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'1.7rem',letterSpacing:'-1px',lineHeight:1.1}}>{c.t}</h3>
                  <p style={{marginTop:10,fontSize:'0.82rem',color:'rgba(255,255,255,0.8)',fontFamily:'Barlow,sans-serif',fontWeight:300,lineHeight:1.6}}>{c.d}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional / Lab Projects label */}
        <ScrollReveal delay={0.1}>
          <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:28}}>
            <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.62rem',letterSpacing:'0.25em',color:'#a78bfa',textTransform:'uppercase'}}>● Lab & Research</span>
            <div style={{flex:1,height:1,background:'linear-gradient(90deg,rgba(167,139,250,0.3),transparent)'}}/>
          </div>
        </ScrollReveal>

        {/* Lab projects grid + Classified card */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:24}}>
          {cards.filter(c=>c.badge==='Lab').map((c,i)=>(
            <ScrollReveal key={c.t} delay={0.1*i}>
              <div className="liquid-glass" style={{borderRadius:'1.25rem',padding:24,minHeight:280,display:'flex',flexDirection:'column',height:'100%',position:'relative'}}>
                <span style={{position:'absolute',top:16,right:16,fontFamily:'JetBrains Mono,monospace',fontSize:'0.55rem',letterSpacing:'0.2em',
                  color:BADGE_STYLE[c.badge].color,background:BADGE_STYLE[c.badge].bg,
                  border:`1px solid ${BADGE_STYLE[c.badge].border}`,borderRadius:4,padding:'2px 8px',textTransform:'uppercase'}}>Lab</span>
                <div style={{display:'flex',alignItems:'flex-start',gap:12}}>
                  <div className="liquid-glass" style={{borderRadius:12,width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><c.I/></div>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:14,maxWidth:'90%'}}>
                  {c.tags.map(t=><span key={t} className="liquid-glass" style={{borderRadius:9999,padding:'4px 10px',fontSize:'0.68rem',color:'rgba(255,255,255,0.85)',fontFamily:'Barlow,sans-serif',whiteSpace:'nowrap'}}>{t}</span>)}
                </div>
                <div style={{flex:1}}/>
                <div style={{marginTop:20}}>
                  <h3 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'1.7rem',letterSpacing:'-1px',lineHeight:1.1}}>{c.t}</h3>
                  <p style={{marginTop:10,fontSize:'0.82rem',color:'rgba(255,255,255,0.8)',fontFamily:'Barlow,sans-serif',fontWeight:300,lineHeight:1.6}}>{c.d}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
          <ClassifiedCard/>
        </div>

      </div>
    </section>
  );
}

/* ── Classified Card ── */
const REDACTED_LINES=[
  '████████████  v2.0-alpha',
  'Stack:  ████ / █████ / ███',
  'Status: Active deployment',
  'Access: CLEARANCE REQUIRED',
];

function ClassifiedCard(){
  const[revealed,setRevealed]=useState(false);
  const[glitching,setGlitching]=useState(false);
  const[scanline,setScanline]=useState(0);

  const handleClick=()=>{
    if(revealed)return;
    setGlitching(true);
    let s=0;
    const id=setInterval(()=>{setScanline(s++);if(s>12){clearInterval(id);setGlitching(false);setRevealed(true);}},60);
  };

  return(
    <ScrollReveal delay={0.45}>
      <div className="liquid-glass" onClick={handleClick}
        style={{borderRadius:'1.25rem',padding:24,minHeight:360,display:'flex',flexDirection:'column',cursor:revealed?'default':'none',position:'relative',overflow:'hidden',
          border:revealed?'none':'1px solid rgba(255,60,60,0.15)',transition:'border 0.5s'}}>

        {/* Scanline sweep during glitch */}
        {glitching&&<div style={{position:'absolute',left:0,right:0,height:3,background:'rgba(110,231,183,0.6)',top:(scanline/12)*100+'%',transition:'top 0.06s linear',zIndex:5,boxShadow:'0 0 12px #6ee7b7'}}/>}

        {!revealed?(
          /* LOCKED state */
          <>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div style={{display:'flex',flexDirection:'column',gap:6}}>
                {['CRYPTO','STEALTH','v2.0'].map(t=>(
                  <span key={t} style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.62rem',letterSpacing:'0.15em',color:'rgba(255,60,60,0.7)',background:'rgba(255,60,60,0.06)',border:'1px solid rgba(255,60,60,0.15)',borderRadius:4,padding:'2px 8px',display:'inline-block'}}>{t}</span>
                ))}
              </div>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',color:'rgba(255,255,255,0.2)',textAlign:'right',lineHeight:1.8}}>
                {REDACTED_LINES.map((l,i)=><div key={i}>{l}</div>)}
              </div>
            </div>
            <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:12,marginTop:16}}>
              <div style={{width:40,height:40,border:'1.5px solid rgba(255,60,60,0.4)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,60,60,0.7)" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.25em',color:'rgba(255,60,60,0.6)',textAlign:'center'}}>[ CLASSIFIED PROJECT ]</div>
              <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:'1.5rem',color:'rgba(255,255,255,0.4)',letterSpacing:'-0.5px'}}>Access Restricted.</div>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.62rem',color:'rgba(255,255,255,0.25)',letterSpacing:'0.1em'}}>CLEARANCE LEVEL: NONE</div>
            </div>
            <motion.div animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity}}
              style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.65rem',color:'rgba(255,60,60,0.5)',letterSpacing:'0.15em',textAlign:'center',marginTop:12}}>▶ CLICK TO REQUEST ACCESS ◀</motion.div>
          </>
        ):(
          /* REVEALED state */
          <motion.div initial={{opacity:0,filter:'blur(8px)'}} animate={{opacity:1,filter:'blur(0px)'}} transition={{duration:0.6}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:16}}>
              <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',letterSpacing:'0.2em',color:'#6ee7b7'}}>ACCESS GRANTED ✓</div>
              {['Stealth','React','Node'].map(t=><span key={t} className="liquid-glass" style={{borderRadius:9999,padding:'3px 10px',fontSize:'0.65rem',color:'rgba(255,255,255,0.7)',fontFamily:'Barlow,sans-serif'}}>{t}</span>)}
            </div>
            <div style={{flex:1,marginTop:8}}>
              <h3 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'2rem',letterSpacing:'-1px',lineHeight:1}}>Project Phantom</h3>
              <p style={{marginTop:10,fontSize:'0.82rem',color:'rgba(255,255,255,0.8)',fontFamily:'Barlow,sans-serif',fontWeight:300,lineHeight:1.6}}>
                A stealth-mode platform currently in active development. Full-stack architecture with encrypted data flows and zero-knowledge design patterns. <span style={{color:'#6ee7b7'}}>Shipping 2026.</span>
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </ScrollReveal>
  );
}

/* ── Live Demo Hub Data & Components ── */

const demoProjects = [
  {
    id: 'visuals-ai',
    name: 'Visuals AI System Designer',
    url: 'https://rishisharma029.github.io/visuals-ai-system-design-visualizer/',
    badge: 'Main',
    tagline: 'AI system architecture and diagramming platform.',
    stats: {
      'Modules': '14',
      'AI Enabled': 'Yes',
      'Realtime': 'Planned',
      'Version': '0.3 Alpha'
    },
    terminalBoot: [
      '$ launch visuals-ai',
      'Initializing canvas...',
      'Loading graph engine...',
      'AI connected.',
      'Ready.'
    ]
  },
  {
    id: 'devinspect',
    name: 'DevInspect-AI',
    url: 'https://rishisharma029.github.io/DevInspect-AI/',
    badge: 'Main',
    tagline: 'Developer code analyzer and real-time audit tools.',
    stats: {
      'Diagnostics': '120+',
      'Language Support': 'JS, TS',
      'AI Powered': '✓'
    },
    terminalBoot: [
      '> Booting DevInspect-AI...',
      '> Loading code engine...',
      '> Initializing diagnostics...',
      '> Ready ✓'
    ]
  },
  {
    id: 'resume-roaster',
    name: 'AI Resume Roaster',
    url: 'https://rishisharma029.github.io/ai-resume-roaster/',
    badge: 'Main',
    tagline: 'Brutally honest resume review and grading engine.',
    stats: {
      'Roast Templates': '12 Styles',
      'NLP Parser': 'Custom RegEx',
      'Humor Level': 'Brutal',
      'Version': '1.1 Stable'
    },
    terminalBoot: [
      '$ roast resume.pdf --brutal',
      'Extracting PDF text structures...',
      'Analyzing buzzword density (94%)...',
      'Running AI critique engine...',
      'Ready ✓ Roast score generated: 38/100.'
    ]
  },
  {
    id: 'evalsync',
    name: 'EvalSync System',
    url: 'https://rishisharma029.github.io/EvalSync-System/',
    badge: 'Main',
    tagline: 'Evaluation platform with live dashboard and reporting.',
    stats: {
      'Database': 'PostgreSQL & Redis',
      'Latency': '< 45ms',
      'Auth Type': 'OAuth2 / JWT',
      'Role Engines': 'Admin, Assessor'
    },
    terminalBoot: [
      '$ evalsync-admin --connect',
      'Spawning database pool connections...',
      'Checking cache nodes (Redis cluster)...',
      'Syncing web sockets with client nodes...',
      'Ready ✓ Core admin control panel active.'
    ]
  },
  {
    id: 'bughunter',
    name: 'BugHunter-AI',
    url: 'https://rishisharma029.github.io/bughunter-ai/',
    badge: 'Lab',
    tagline: 'Vulnerability detection and threat logs explorer.',
    stats: {
      'Scan Speed': '800 LOC/sec',
      'Database': 'CVE 2026 Registry',
      'False Positives': '< 4.2%',
      'Scanner': 'AST + Control Flow'
    },
    terminalBoot: [
      '$ bughunter --scan ./src',
      'Indexing codebase file trees...',
      'Building semantic control flow graph...',
      'Running CVE pattern matcher...',
      'Ready ✓ Found 1 security issue (SQL Injection).'
    ]
  },
  {
    id: 'resqnet',
    name: 'ResqNet',
    url: 'https://rishisharma029.github.io/resqnet/',
    badge: 'Lab',
    tagline: 'Emergency coordination map and dispatch board.',
    stats: {
      'Mesh Sync': 'UDP broadcast',
      'Encryption': 'AES-256 GCM',
      'Active Pings': '12 Nodes',
      'Protocol': 'ResqNet v2.1'
    },
    terminalBoot: [
      '$ resqnet-node listen --port 443',
      'Opening UDP socket broadcast listeners...',
      'Establishing AES-256 secure session keys...',
      'Listening for mesh heartbeat pings...',
      'Ready ✓ Connected to disaster dispatch.'
    ]
  },
  {
    id: 'ai-workshop',
    name: 'AI Engineering Workshop',
    url: 'https://rishisharma029.github.io/ai-engineering-workshop/',
    badge: 'Lab',
    tagline: 'Open-source PyTorch notebook experiments list.',
    stats: {
      'Frameworks': 'PyTorch, Transformers',
      'Hardware': 'CUDA Enabled',
      'Notebooks': '6 Experiments',
      'Status': 'Open Source'
    },
    terminalBoot: [
      '$ jupyter notebook --allow-root',
      'Starting Jupyter server backend...',
      'Importing PyTorch CUDA drivers...',
      'Loading training datasets (MNIST/IMDB)...',
      'Ready ✓ Live notebooks loaded successfully.'
    ]
  }
];


/* ── Interactive Simulations for Browser View ── */

/* VISUALS-AI: Animated architecture graph with nodes drawing SVG connections */
function VisualsAISim() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1200);
    return () => clearInterval(id);
  }, []);
  const nodes = [
    { x: 50, y: 30, label: 'Client', color: '#6ee7b7' },
    { x: 180, y: 80, label: 'API GW', color: '#60a5fa' },
    { x: 310, y: 30, label: 'Auth', color: '#a78bfa' },
    { x: 310, y: 120, label: 'DB', color: '#f59e0b' },
    { x: 180, y: 150, label: 'Cache', color: '#f87171' },
  ];
  const edges = [[0,1],[1,2],[1,3],[1,4],[2,3]];
  const activeEdge = tick % edges.length;
  return (
    <div style={{width:'100%',height:'100%',background:'linear-gradient(135deg,#050510 0%,#0a0a1a 100%)',display:'flex',flexDirection:'column',padding:16,overflow:'hidden',position:'relative'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
        <div style={{display:'flex',alignItems:'center',gap:8}}>
          <div style={{width:6,height:6,borderRadius:'50%',background:'#6ee7b7',boxShadow:'0 0 8px #6ee7b7'}}/>
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',color:'#6ee7b7',letterSpacing:'0.15em'}}>VISUALS-AI</span>
        </div>
        <div style={{display:'flex',gap:4}}>
          {['LAYOUT','SCHEMA','EXPORT'].map(t=>(
            <span key={t} style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.45rem',color:'rgba(255,255,255,0.25)',padding:'2px 6px',border:'1px solid rgba(255,255,255,0.06)',borderRadius:3}}>{t}</span>
          ))}
        </div>
      </div>
      <div style={{flex:1,position:'relative',border:'1px solid rgba(255,255,255,0.05)',borderRadius:8,overflow:'hidden',background:'rgba(0,0,0,0.3)'}}>
        <svg width="100%" height="100%" viewBox="0 0 370 175" style={{position:'absolute',inset:0}}>
          <defs>
            <pattern id="vgrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vgrid)"/>
          {edges.map(([a,b],i) => (
            <line key={i}
              x1={nodes[a].x+28} y1={nodes[a].y+14}
              x2={nodes[b].x+28} y2={nodes[b].y+14}
              stroke={i === activeEdge ? '#fff' : 'rgba(255,255,255,0.08)'}
              strokeWidth={i === activeEdge ? 1.5 : 0.8}
              strokeDasharray={i === activeEdge ? '0' : '4 4'}
              style={{transition:'all 0.6s'}}
            />
          ))}
          {nodes.map((n,i) => (
            <g key={i}>
              <rect x={n.x} y={n.y} width={56} height={28} rx={5}
                fill={n.color+'08'} stroke={n.color} strokeWidth="0.8" style={{filter:'drop-shadow(0 0 6px '+n.color+'44)'}}/>
              <text x={n.x+28} y={n.y+17} textAnchor="middle" fill={n.color} fontSize="7" fontFamily="JetBrains Mono,monospace">{n.label}</text>
            </g>
          ))}
          <motion.circle
            r="4" fill="#fff" style={{filter:'drop-shadow(0 0 4px #fff)'}}
            animate={{
              cx:[nodes[edges[activeEdge][0]].x+28, nodes[edges[activeEdge][1]].x+28],
              cy:[nodes[edges[activeEdge][0]].y+14, nodes[edges[activeEdge][1]].y+14],
            }}
            transition={{duration:1.0, ease:'easeInOut'}}
          />
        </svg>
      </div>
      <div style={{marginTop:10,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.55rem',color:'rgba(255,255,255,0.25)'}}>5 nodes · {edges.length} connections</span>
        <motion.span animate={{opacity:[0.4,1,0.4]}} transition={{duration:2,repeat:Infinity}}
          style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.55rem',color:'#6ee7b7'}}>● LIVE RENDERING</motion.span>
      </div>
    </div>
  );
}

/* DEVINSPECT-AI: Code editor with syntax highlight + animated scan overlay */
function DevInspectSim() {
  const [scanLine, setScanLine] = useState(0);
  const [found, setFound] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setScanLine(l => {
        if (l >= 7) { setFound(true); return 0; }
        setFound(false);
        return l + 1;
      });
    }, 350);
    return () => clearInterval(id);
  }, []);
  const lines = [
    { n:1, tokens:[{c:'#a78bfa',t:'function '},{c:'#60a5fa',t:'authenticate'},{c:'#fff',t:'(req) {'}] },
    { n:2, tokens:[{c:'rgba(255,255,255,0.3)',t:'  // verify JWT token'}] },
    { n:3, tokens:[{c:'#a78bfa',t:'  const '},{c:'#6ee7b7',t:'token '},{c:'#fff',t:'= req.headers.auth'}] },
    { n:4, tokens:[{c:'#a78bfa',t:'  if '},{c:'#fff',t:'(!token) {'},{c:'#f87171',t:' // MISSING'}] },
    { n:5, tokens:[{c:'#f87171',t:'    console'},{c:'#fff',t:'.'},{c:'#f87171',t:'log'},{c:'#fff',t:'('},{c:'#fbbf24',t:'"pass:"'},{c:'#fff',t:', password)'}] },
    { n:6, tokens:[{c:'#fff',t:'  }'}] },
    { n:7, tokens:[{c:'#a78bfa',t:'  return '},{c:'#60a5fa',t:'jwt'},{c:'#fff',t:'.verify(token, SECRET)'}] },
    { n:8, tokens:[{c:'#fff',t:'}'}] },
  ];
  return (
    <div style={{width:'100%',height:'100%',background:'#0d0d14',display:'flex',flexDirection:'column',overflow:'hidden'}}>
      <div style={{display:'flex',alignItems:'center',gap:0,background:'#0a0a10',borderBottom:'1px solid rgba(255,255,255,0.06)',padding:'6px 14px'}}>
        {['auth.js','server.js','db.js'].map((f,i)=>(
          <div key={f} style={{padding:'4px 14px',fontSize:'0.6rem',fontFamily:'JetBrains Mono,monospace',color: i===0 ? '#fff' : 'rgba(255,255,255,0.3)',borderBottom: i===0 ? '1px solid #6ee7b7' : 'none',marginRight:4}}>
            {i===0 && <span style={{color:'#f87171',marginRight:4}}>●</span>}{f}
          </div>
        ))}
      </div>
      <div style={{flex:1,padding:'12px 0',fontFamily:'JetBrains Mono,monospace',fontSize:'0.62rem',lineHeight:1.9,overflow:'hidden',position:'relative'}}>
        {lines.map((line,i) => (
          <div key={i} style={{display:'flex',alignItems:'center',position:'relative',background: i===4 ? 'rgba(248,113,113,0.06)' : (scanLine===i ? 'rgba(255,255,255,0.03)' : 'transparent'),transition:'background 0.2s'}}>
            <span style={{width:32,textAlign:'right',color:'rgba(255,255,255,0.15)',paddingRight:12,flexShrink:0}}>{line.n}</span>
            {scanLine===i && <motion.div animate={{scaleX:[0,1]}} transition={{duration:0.3}} style={{position:'absolute',left:32,right:0,height:'100%',background:'rgba(96,165,250,0.04)',transformOrigin:'left'}}/>}
            <span>{line.tokens.map((tk,j)=><span key={j} style={{color:tk.c}}>{tk.t}</span>)}</span>
          </div>
        ))}
        <motion.div
          style={{position:'absolute',left:32,right:0,height:1,background:'linear-gradient(90deg,transparent,rgba(96,165,250,0.6),transparent)',pointerEvents:'none'}}
          animate={{top: (scanLine*24+12)+'px'}} transition={{duration:0.3,ease:'linear'}}
        />
      </div>
      <motion.div animate={{opacity: found ? 1 : 0}} transition={{duration:0.3}}
        style={{padding:'7px 14px',background:'rgba(248,113,113,0.08)',borderTop:'1px solid rgba(248,113,113,0.2)',display:'flex',alignItems:'center',gap:8}}>
        <span style={{color:'#f87171',fontSize:'0.6rem',fontFamily:'JetBrains Mono,monospace'}}>⚠ auth.js:5 · Plaintext password in console.log</span>
      </motion.div>
    </div>
  );
}

/* RESUME ROASTER: Animated resume card with critique callouts */
function ResumeRoasterSim() {
  const [activeNote, setActiveNote] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveNote(n => (n+1)%3), 2400);
    return () => clearInterval(id);
  }, []);
  const critiques = [
    { pos:{top:'18%',left:'61%'}, color:'#f87171', text:'"Synergized KPIs" — what?' },
    { pos:{top:'46%',left:'61%'}, color:'#fbbf24', text:'3 jobs in 1 year 🤔' },
    { pos:{top:'68%',left:'61%'}, color:'#a78bfa', text:'No GitHub link??' },
  ];
  return (
    <div style={{width:'100%',height:'100%',background:'linear-gradient(135deg,#0c0005,#12000a)',display:'flex',alignItems:'center',justifyContent:'flex-start',padding:'16px 0 16px 16px',position:'relative',overflow:'hidden'}}>
      <div style={{width:'52%',height:'88%',background:'#0f0f12',border:'1px solid rgba(255,255,255,0.1)',borderRadius:6,padding:'14px 12px',display:'flex',flexDirection:'column',gap:8,flexShrink:0,zIndex:2}}>
        <div style={{textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.07)',paddingBottom:8}}>
          <div style={{fontFamily:'Barlow,sans-serif',fontWeight:700,color:'#fff',fontSize:'0.85rem'}}>John D. Overqualified</div>
          <div style={{fontSize:'0.52rem',color:'rgba(255,255,255,0.4)',marginTop:2}}>Sr. Synergy Officer · no portfolio</div>
        </div>
        <div style={{fontSize:'0.52rem',color:'rgba(255,255,255,0.6)',lineHeight:1.6}}>
          <div style={{color:'rgba(255,255,255,0.3)',fontSize:'0.48rem',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:3}}>Summary</div>
          Results-driven innovator who <span style={{color:'#f87171',textDecoration:'underline wavy',textDecorationColor:'rgba(248,113,113,0.5)'}}>synergized KPIs</span> to maximize stakeholder value.
        </div>
        <div style={{fontSize:'0.52rem',color:'rgba(255,255,255,0.6)',lineHeight:1.6}}>
          <div style={{color:'rgba(255,255,255,0.3)',fontSize:'0.48rem',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:3}}>Experience</div>
          <div>CTO @ StartupXYZ <span style={{color:'rgba(255,255,255,0.25)'}}>2023–2024</span></div>
          <div style={{color:'rgba(255,255,255,0.3)',marginLeft:8}}>Led a team of 1 intern.</div>
          <div style={{marginTop:3}}>CEO @ MyVision <span style={{color:'rgba(255,255,255,0.25)'}}>2022–2023</span></div>
        </div>
        <div style={{fontSize:'0.52rem',color:'rgba(255,255,255,0.6)'}}>
          <div style={{color:'rgba(255,255,255,0.3)',fontSize:'0.48rem',textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:3}}>Skills</div>
          Excel, PowerPoint, Synergy
        </div>
        <div style={{marginTop:'auto',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <div style={{background:'rgba(248,113,113,0.1)',border:'1px solid rgba(248,113,113,0.3)',borderRadius:20,padding:'3px 10px',fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',color:'#f87171'}}>Score: 38 / 100</div>
        </div>
      </div>
      {critiques.map((c,i) => (
        <motion.div key={i} animate={{opacity: activeNote===i ? 1 : 0.12, x: activeNote===i ? 0 : 8}} transition={{duration:0.4}}
          style={{position:'absolute',top:c.pos.top,left:c.pos.left,background:'rgba(0,0,0,0.85)',border:'1px solid '+c.color+'55',borderRadius:6,padding:'5px 9px',display:'flex',alignItems:'center',gap:5,whiteSpace:'nowrap',zIndex:3}}>
          <span style={{color:c.color,fontFamily:'JetBrains Mono,monospace',fontSize:'0.55rem'}}>←</span>
          <span style={{fontFamily:'Barlow,sans-serif',fontSize:'0.58rem',color:'rgba(255,255,255,0.9)'}}>{c.text}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* EVALSYNC: Live dashboard with animated sparkline charts */
function EvalSyncSim() {
  const [chartData, setChartData] = useState(() => Array.from({length:20},(_,i)=>30+Math.sin(i*0.6)*20+Math.random()*10));
  const [submissions, setSubmissions] = useState(247);
  useEffect(() => {
    const id = setInterval(() => {
      setChartData(d => [...d.slice(1), 30+Math.sin(Date.now()/600)*20+Math.random()*10]);
      setSubmissions(s => s + Math.floor(Math.random()*3));
    }, 800);
    return () => clearInterval(id);
  }, []);
  const maxV = Math.max(...chartData); const minV = Math.min(...chartData);
  const pts = chartData.map((v,i) => ((i/19)*100)+','+(100-((v-minV)/(maxV-minV||1))*80)).join(' ');
  return (
    <div style={{width:'100%',height:'100%',background:'linear-gradient(135deg,#020a06,#030d08)',display:'flex',flexDirection:'column',padding:14,gap:10}}>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
        {[
          {label:'Submissions',value:String(submissions),color:'#34d399'},
          {label:'Avg Score',value:'74.2%',color:'#60a5fa'},
          {label:'Completion',value:'91%',color:'#a78bfa'},
        ].map(k=>(
          <div key={k.label} style={{background:'rgba(255,255,255,0.03)',border:'1px solid rgba(255,255,255,0.06)',borderRadius:6,padding:'8px 10px'}}>
            <div style={{fontSize:'0.45rem',color:'rgba(255,255,255,0.35)',fontFamily:'Barlow,sans-serif',textTransform:'uppercase',letterSpacing:'0.1em'}}>{k.label}</div>
            <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'1rem',color:k.color,fontWeight:700,marginTop:2}}>{k.value}</div>
          </div>
        ))}
      </div>
      <div style={{flex:1,background:'rgba(0,0,0,0.3)',border:'1px solid rgba(255,255,255,0.05)',borderRadius:8,padding:'10px 12px',display:'flex',flexDirection:'column',gap:6}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <span style={{fontFamily:'Barlow,sans-serif',fontSize:'0.52rem',color:'rgba(255,255,255,0.4)'}}>Live Submission Rate</span>
          <motion.span animate={{opacity:[1,0.3,1]}} transition={{duration:1.5,repeat:Infinity}}
            style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.48rem',color:'#34d399'}}>● LIVE</motion.span>
        </div>
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" style={{flex:1,display:'block'}}>
          <defs>
            <linearGradient id="chartgrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#34d399" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <polyline points={pts} fill="none" stroke="#34d399" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>
          <polygon points={'0,100 '+pts+' 100,100'} fill="url(#chartgrad)"/>
        </svg>
      </div>
      <div style={{display:'flex',gap:6}}>
        {[{l:'DB',v:'ONLINE',c:'#34d399'},{l:'Redis',v:'42ms',c:'#34d399'},{l:'Auth',v:'JWT ✓',c:'#60a5fa'},{l:'WS',v:'140 conn',c:'#a78bfa'}].map(s=>(
          <div key={s.l} style={{flex:1,textAlign:'center',padding:'4px 0',background:'rgba(255,255,255,0.02)',borderRadius:4,border:'1px solid rgba(255,255,255,0.05)'}}>
            <div style={{fontSize:'0.42rem',color:'rgba(255,255,255,0.3)',fontFamily:'Barlow,sans-serif'}}>{s.l}</div>
            <div style={{fontSize:'0.55rem',color:s.c,fontFamily:'JetBrains Mono,monospace',fontWeight:600}}>{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* BUGHUNTER: Visual file tree with animated pulsing threat highlights */
function BugHunterSim() {
  const [scanIdx, setScanIdx] = useState(0);
  const [pulseVuln, setPulseVuln] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setScanIdx(i => {
        if (i >= 5) { setPulseVuln(true); return 0; }
        setPulseVuln(false);
        return i+1;
      });
    }, 600);
    return () => clearInterval(id);
  }, []);
  const files = [
    {name:'index.js', size:'4.2kb', status:'clean'},
    {name:'auth.js', size:'8.1kb', status:'critical'},
    {name:'server.js', size:'12kb', status:'warn'},
    {name:'database.js', size:'6.8kb', status:'critical'},
    {name:'utils.js', size:'3.1kb', status:'clean'},
    {name:'routes.js', size:'5.5kb', status:'clean'},
  ];
  const statusColor = {clean:'#34d399', warn:'#fbbf24', critical:'#f87171'};
  const statusLabel = {clean:'●', warn:'⚠', critical:'✕'};
  return (
    <div style={{width:'100%',height:'100%',background:'linear-gradient(135deg,#08020c,#0c040d)',display:'flex',flexDirection:'column',padding:14,gap:10}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',color:'#a78bfa',letterSpacing:'0.12em'}}>BUGHUNTER-AI</span>
        <div style={{display:'flex',gap:6,alignItems:'center'}}>
          <motion.div animate={{scaleX: scanIdx > 0 ? scanIdx/6 : 0.02}} style={{width:60,height:3,background:'linear-gradient(90deg,#a78bfa,#f87171)',borderRadius:9999,transformOrigin:'left'}} transition={{duration:0.5}}/>
          <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.48rem',color:'rgba(255,255,255,0.3)'}}>{Math.round((scanIdx/6)*100)}%</span>
        </div>
      </div>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:5}}>
        {files.map((f,i) => {
          const isScanning = i === scanIdx;
          const isDone = i < scanIdx;
          const col = statusColor[f.status];
          return (
            <motion.div key={f.name}
              animate={{background: isScanning ? 'rgba(167,139,250,0.07)' : (f.status==='critical' && pulseVuln ? col+'08' : 'rgba(255,255,255,0.02)')}}
              transition={{duration:0.3}}
              style={{borderRadius:6,padding:'7px 10px',border:'1px solid '+(isScanning ? 'rgba(167,139,250,0.25)' : (isDone && f.status!=='clean' ? col+'22' : 'rgba(255,255,255,0.04)')),display:'flex',alignItems:'center',gap:8}}>
              <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.58rem',color: isScanning ? '#fff' : (isDone ? col : 'rgba(255,255,255,0.3)')}}>{isDone ? statusLabel[f.status] : (isScanning ? '→' : '·')}</span>
              <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.6rem',color: isScanning ? '#fff' : (isDone ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)'),flex:1}}>{f.name}</span>
              <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.48rem',color:'rgba(255,255,255,0.2)'}}>{f.size}</span>
              {isDone && f.status !== 'clean' && (
                <motion.span animate={{opacity: pulseVuln ? [1,0.4,1] : [1]}} transition={{duration:0.8,repeat:Infinity}}
                  style={{fontFamily:'Barlow,sans-serif',fontSize:'0.48rem',color:col,padding:'1px 5px',background:col+'15',borderRadius:3}}>
                  {f.status}
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
      <div style={{display:'flex',gap:8,padding:'6px 0',borderTop:'1px solid rgba(255,255,255,0.06)'}}>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.52rem',color:'#f87171'}}>2 Critical</span>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.52rem',color:'#fbbf24'}}>1 Warning</span>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.52rem',color:'#34d399',marginLeft:'auto'}}>3 Clean</span>
      </div>
    </div>
  );
}

/* RESQNET: Radar dispatch map with animated response units */
function ResqNetSim() {
  const [radarAngle, setRadarAngle] = useState(0);
  const [activeUnit, setActiveUnit] = useState(0);
  useEffect(() => {
    const id1 = setInterval(() => setRadarAngle(a => (a + 3) % 360), 50);
    const id2 = setInterval(() => setActiveUnit(u => (u+1)%3), 2000);
    return () => { clearInterval(id1); clearInterval(id2); };
  }, []);
  const incidents = [
    { cx:100, cy:85, r:5, color:'#ef4444', label:'FIRE', unit:'R-1' },
    { cx:220, cy:60, r:4, color:'#fbbf24', label:'FLOOD', unit:'R-2' },
    { cx:170, cy:130, r:4, color:'#f87171', label:'CRASH', unit:'R-3' },
  ];
  const bcx = 170, bcy = 95;
  const radarX = bcx + Math.cos((radarAngle-90)*Math.PI/180)*90;
  const radarY = bcy + Math.sin((radarAngle-90)*Math.PI/180)*90;
  return (
    <div style={{width:'100%',height:'100%',background:'#020308',display:'flex',flexDirection:'column',overflow:'hidden'}}>
      <div style={{padding:'8px 14px',borderBottom:'1px solid rgba(103,232,249,0.1)',display:'flex',alignItems:'center',justifyContent:'space-between',background:'rgba(0,0,0,0.4)'}}>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.58rem',color:'#67e8f9',letterSpacing:'0.15em'}}>RESQNET DISPATCH</span>
        <motion.span animate={{opacity:[1,0.3,1]}} transition={{duration:1.2,repeat:Infinity}}
          style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.48rem',color:'#ef4444'}}>● 3 ACTIVE INCIDENTS</motion.span>
      </div>
      <div style={{flex:1,position:'relative',overflow:'hidden'}}>
        <svg width="100%" height="100%" viewBox="0 0 340 175" style={{position:'absolute',inset:0}}>
          {Array.from({length:15}).map((_,x)=>Array.from({length:9}).map((_,y)=>(
            <circle key={x+'-'+y} cx={x*24+8} cy={y*20+8} r="0.8" fill="rgba(103,232,249,0.06)"/>
          )))}
          {[30,60,90].map(r=>(
            <circle key={r} cx={bcx} cy={bcy} r={r} fill="none" stroke="rgba(103,232,249,0.08)" strokeWidth="0.8"/>
          ))}
          <line x1={bcx} y1={bcy} x2={radarX} y2={radarY} stroke="rgba(103,232,249,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
          {incidents.map((inc,i) => (
            <g key={i}>
              <motion.circle cx={inc.cx} cy={inc.cy} r={inc.r+4} fill={inc.color} opacity="0.15"
                animate={{r:[inc.r+4,inc.r+10,inc.r+4]}} transition={{duration:1.5,repeat:Infinity,delay:i*0.5}}/>
              <circle cx={inc.cx} cy={inc.cy} r={inc.r} fill={inc.color} style={{filter:'drop-shadow(0 0 5px '+inc.color+')'}}/>
              <text x={inc.cx+8} y={inc.cy+4} fill={inc.color} fontSize="5.5" fontFamily="JetBrains Mono,monospace">{inc.label}</text>
              <motion.line x1={inc.cx} y1={inc.cy} x2={bcx} y2={bcy} stroke={inc.color} strokeWidth="0.5" strokeDasharray="3 3"
                animate={{opacity: activeUnit===i ? [0.2,0.8,0.2] : [0.08]}} transition={{duration:0.8,repeat:Infinity}}/>
            </g>
          ))}
          <circle cx={bcx} cy={bcy} r="6" fill="none" stroke="#67e8f9" strokeWidth="1.2"/>
          <text x={bcx} y={bcy+16} textAnchor="middle" fill="#67e8f9" fontSize="5" fontFamily="JetBrains Mono,monospace">BASE</text>
        </svg>
      </div>
      <div style={{padding:'6px 14px',borderTop:'1px solid rgba(103,232,249,0.08)',display:'flex',gap:8}}>
        {incidents.map((inc,i)=>(
          <motion.div key={i} animate={{borderColor: activeUnit===i ? inc.color : 'rgba(255,255,255,0.05)'}} transition={{duration:0.3}}
            style={{flex:1,padding:'4px 6px',borderRadius:4,border:'1px solid rgba(255,255,255,0.05)',background:'rgba(255,255,255,0.02)'}}>
            <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.48rem',color:'rgba(255,255,255,0.35)'}}>{inc.unit}</div>
            <div style={{fontFamily:'Barlow,sans-serif',fontSize:'0.52rem',color:inc.color}}>→ {inc.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* AI WORKSHOP: Neural network diagram with animated forward-pass signal */
function AIWorkshopSim() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 90);
    return () => clearInterval(id);
  }, []);
  const layers = [
    { x:45, ys:[25,60,95,130] },
    { x:135, ys:[15,50,85,120,155] },
    { x:225, ys:[35,80,125] },
    { x:305, ys:[55,105] },
  ];
  const CYCLE = 60;
  const phase = tick % CYCLE;
  const activeLayer = Math.floor((phase / CYCLE) * (layers.length-1));
  const loss = (0.9 - Math.min(tick/400,1)*0.85).toFixed(4);
  const acc = (60 + Math.min(tick/400,1)*35).toFixed(1);
  return (
    <div style={{width:'100%',height:'100%',background:'linear-gradient(135deg,#030608,#040a06)',display:'flex',flexDirection:'column',padding:14,gap:10}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.58rem',color:'#10b981',letterSpacing:'0.1em'}}>NEURAL NETWORK · FORWARD PASS</span>
        <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.48rem',color:'rgba(255,255,255,0.3)'}}>epoch {Math.floor(tick/CYCLE)+1}</span>
      </div>
      <div style={{flex:1,position:'relative'}}>
        <svg width="100%" height="100%" viewBox="0 0 340 180" style={{position:'absolute',inset:0}}>
          {[{x:45,l:'Input'},{x:135,l:'Hidden 1'},{x:225,l:'Hidden 2'},{x:305,l:'Output'}].map(({x,l})=>(
            <text key={l} x={x} y={172} textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="5" fontFamily="Barlow,sans-serif">{l}</text>
          ))}
          {layers.slice(0,-1).map((fromLayer, li) =>
            fromLayer.ys.map(fy =>
              layers[li+1].ys.map((ty,ti) => (
                <line key={li+'-'+fy+'-'+ti}
                  x1={fromLayer.x} y1={fy}
                  x2={layers[li+1].x} y2={ty}
                  stroke={li === activeLayer ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.03)'}
                  strokeWidth={li === activeLayer ? 0.7 : 0.4}
                  style={{transition:'all 0.25s'}}
                />
              ))
            )
          )}
          {layers.map((layer, li) =>
            layer.ys.map((y,ni) => {
              const isActive = li <= activeLayer;
              const isCurrent = li === activeLayer;
              const col = isCurrent ? '#10b981' : (isActive ? '#6ee7b7' : 'rgba(255,255,255,0.12)');
              return (
                <g key={li+'-'+ni}>
                  {isCurrent && <circle cx={layer.x} cy={y} r={9} fill="#10b981" opacity="0.08"/>}
                  <circle cx={layer.x} cy={y} r={5}
                    fill={isActive ? col+'22' : 'transparent'}
                    stroke={col} strokeWidth={isCurrent ? 1.2 : 0.7}
                    style={{filter: isCurrent ? 'drop-shadow(0 0 4px #10b981)' : 'none', transition:'all 0.25s'}}/>
                </g>
              );
            })
          )}
          {activeLayer < layers.length-1 && layers[activeLayer].ys.map((fy,i)=>{
            const progress = (phase % (CYCLE/layers.length)) / (CYCLE/layers.length);
            const nextLayer = layers[activeLayer+1];
            const ty_target = nextLayer.ys[i % nextLayer.ys.length];
            const tx = layers[activeLayer].x + (nextLayer.x - layers[activeLayer].x)*progress;
            const ty = fy + (ty_target - fy)*progress;
            return <circle key={i} cx={tx} cy={ty} r={2} fill="#10b981" style={{filter:'drop-shadow(0 0 3px #10b981)'}}/>;
          })}
        </svg>
      </div>
      <div style={{display:'flex',gap:8}}>
        {[
          {label:'Loss',value:loss,color:'#f87171'},
          {label:'Accuracy',value:acc+'%',color:'#10b981'},
          {label:'LR',value:'0.001',color:'rgba(255,255,255,0.4)'},
          {label:'GPU',value:'CUDA ✓',color:'#60a5fa'},
        ].map(m=>(
          <div key={m.label} style={{flex:1,background:'rgba(255,255,255,0.02)',borderRadius:5,padding:'5px 8px',border:'1px solid rgba(255,255,255,0.05)'}}>
            <div style={{fontFamily:'Barlow,sans-serif',fontSize:'0.42rem',color:'rgba(255,255,255,0.3)',textTransform:'uppercase'}}>{m.label}</div>
            <div style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.65rem',color:m.color,fontWeight:700,marginTop:1}}>{m.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const simulations = {
  'visuals-ai': VisualsAISim,
  'devinspect': DevInspectSim,
  'resume-roaster': ResumeRoasterSim,
  'evalsync': EvalSyncSim,
  'bughunter': BugHunterSim,
  'resqnet': ResqNetSim,
  'ai-workshop': AIWorkshopSim
};


/* ── LiveDemosSection component ── */

/* ── LiveDemosSection — upgraded with grid BG, particles, mouse-glow, card depth, animated counters, mobile ── */

/* Floating particle inside the demo hub section */
function DemoParticle({x,y,size,dur,delay,color}){
  return(
    <motion.div
      style={{position:'absolute',left:x+'%',top:y+'%',width:size,height:size,borderRadius:'50%',background:color,filter:'blur(1px)',pointerEvents:'none'}}
      animate={{y:[-12,12,-12],opacity:[0.15,0.55,0.15],scale:[0.8,1.2,0.8]}}
      transition={{duration:dur,repeat:Infinity,delay:delay,ease:'easeInOut'}}
    />
  );
}

/* Animated stat counter that counts up from 0 */
function AnimStat({value,label}){
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const [displayed, setDisplayed] = useState('0');
  useEffect(()=>{
    if(!isInView) return;
    const num = parseFloat(value);
    if(isNaN(num)){setDisplayed(value);return;}
    const suffix = value.replace(String(Math.floor(num)),'');
    let start=0; const dur=900; const step=16;
    const inc = num/(dur/step);
    const id=setInterval(()=>{
      start+=inc;
      if(start>=num){setDisplayed(value);clearInterval(id);}
      else setDisplayed(Math.floor(start)+suffix);
    },step);
    return()=>clearInterval(id);
  },[isInView,value]);
  return(
    <div ref={ref} style={{display:'flex',justifyContent:'space-between',borderBottom:'1px solid rgba(255,255,255,0.06)',paddingBottom:7,alignItems:'baseline'}}>
      <span style={{fontSize:'0.75rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.5)'}}>{label}</span>
      <motion.span
        key={displayed}
        initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} transition={{duration:0.25}}
        style={{fontSize:'0.78rem',fontFamily:'JetBrains Mono,monospace',color:'#fff',fontWeight:600}}>
        {displayed}
      </motion.span>
    </div>
  );
}

function LiveDemosSection() {
  const [selectedId, setSelectedId] = useState('visuals-ai');
  const [mode, setMode] = useState('browser');
  const [termOutput, setTermOutput] = useState([]);
  const [mousePos, setMousePos] = useState({x:0,y:0});
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const sectionRef = useRef(null);

  useEffect(()=>{
    const r=()=>setIsMobile(window.innerWidth<1024);
    window.addEventListener('resize',r);
    return()=>window.removeEventListener('resize',r);
  },[]);

  const activeProj = demoProjects.find(p => p.id === selectedId);

  /* Terminal typing */
  useEffect(() => {
    if (mode !== 'terminal') return;
    setTermOutput([]);
    const logs = activeProj.terminalBoot;
    let i = 0;
    const interval = setInterval(() => {
      if (i < logs.length) { setTermOutput(prev => [...prev, logs[i]]); i++; }
      else clearInterval(interval);
    }, 600);
    return () => clearInterval(interval);
  }, [selectedId, mode]);

  /* Mouse-follow glow */
  useEffect(()=>{
    const onMove = e => {
      if(!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({x:e.clientX-rect.left, y:e.clientY-rect.top});
    };
    const el = sectionRef.current;
    if(el) el.addEventListener('mousemove', onMove);
    return ()=>{ if(el) el.removeEventListener('mousemove', onMove); };
  },[]);

  const ActiveSim = simulations[selectedId];

  /* Floating particles config */
  const particles = [
    {x:5,  y:15, size:3, dur:6.2, delay:0,    color:'rgba(110,231,183,0.6)'},
    {x:88, y:30, size:2, dur:7.8, delay:1.2,  color:'rgba(96,165,250,0.5)'},
    {x:15, y:75, size:4, dur:5.5, delay:2.1,  color:'rgba(167,139,250,0.5)'},
    {x:92, y:80, size:2, dur:8.1, delay:0.7,  color:'rgba(110,231,183,0.4)'},
    {x:48, y:5,  size:3, dur:6.9, delay:3.0,  color:'rgba(251,191,36,0.4)'},
    {x:70, y:92, size:2, dur:7.3, delay:1.8,  color:'rgba(96,165,250,0.4)'},
    {x:30, y:45, size:2, dur:9.0, delay:4.2,  color:'rgba(167,139,250,0.3)'},
  ];

  return (
    <section id="demos" ref={sectionRef} style={{position:'relative',background:'#000',padding:isMobile?'80px 1.25rem 60px':'96px 5rem 80px',minHeight:'100vh',display:'flex',flexDirection:'column',overflow:'hidden'}}>

      {/* ── Animated grid background ── */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:0,overflow:'hidden'}}>
        {/* Static SVG dot grid */}
        <svg width="100%" height="100%" style={{position:'absolute',inset:0,opacity:0.18}}>
          <defs>
            <pattern id="demogrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="0.8" fill="rgba(255,255,255,0.8)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#demogrid)"/>
        </svg>
        {/* Animated sweep line across the grid */}
        <motion.div
          style={{position:'absolute',top:0,bottom:0,width:1,background:'linear-gradient(to bottom,transparent,rgba(110,231,183,0.3),transparent)',left:0}}
          animate={{left:['0%','100%']}}
          transition={{duration:8,repeat:Infinity,ease:'linear'}}
        />
        {/* Radial fade from centre so grid doesn't overpower content */}
        <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 20%, #000 100%)'}}/>
      </div>

      {/* ── Mouse-follow glow ── */}
      <div style={{
        position:'absolute',
        width:600,height:600,
        borderRadius:'50%',
        background:'radial-gradient(circle, rgba(110,231,183,0.06) 0%, transparent 70%)',
        pointerEvents:'none',
        left:mousePos.x-300,
        top:mousePos.y-300,
        zIndex:0,
        transition:'left 0.12s ease,top 0.12s ease',
      }}/>

      {/* ── Floating particles ── */}
      {particles.map((p,i)=><DemoParticle key={i} {...p}/>)}

      {/* ── Section header ── */}
      <div style={{marginBottom:48,position:'relative',zIndex:2}}>
        <ScrollReveal delay={0.1}>
          <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.5)',marginBottom:14,letterSpacing:'0.15em',textTransform:'uppercase'}}>// Active Prototypes</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.9,letterSpacing:'-3px'}}>
            Live Demos &amp;<br/>Sandbox Hub
          </h2>
        </ScrollReveal>
        {/* Animated underline */}
        <ScrollReveal delay={0.35}>
          <motion.div
            initial={{scaleX:0}} whileInView={{scaleX:1}} viewport={{once:true}}
            transition={{duration:0.9,ease:'easeOut',delay:0.4}}
            style={{height:1,background:'linear-gradient(90deg,rgba(110,231,183,0.6),rgba(96,165,250,0.3),transparent)',width:'clamp(200px,40%,400px)',marginTop:16,transformOrigin:'left'}}
          />
        </ScrollReveal>
      </div>

      {/* ── Main layout ── */}
      <div style={{display:'flex',flexDirection:isMobile?'column':'row',gap:isMobile?24:32,flex:1,position:'relative',zIndex:2}}>

        {/* ── LEFT: Project list ── */}
        <div style={{flex:1,display:'flex',flexDirection:'column',gap:12,maxHeight:isMobile?'auto':'640px',overflowY:isMobile?'visible':'auto',paddingRight:isMobile?0:6}}>
          {demoProjects.map((p, i) => {
            const isActive = selectedId === p.id;
            const accentColor = p.badge === 'Main' ? '#6ee7b7' : '#a78bfa';
            return (
              <ScrollReveal key={p.id} delay={0.06 * i}>
                <motion.div
                  onClick={() => setSelectedId(p.id)}
                  whileHover={{scale:1.018, y:-2, boxShadow: isActive ? `0 8px 32px ${accentColor}18` : '0 4px 20px rgba(0,0,0,0.4)'}}
                  whileTap={{scale:0.98}}
                  animate={{
                    borderColor: isActive ? `${accentColor}55` : 'rgba(255,255,255,0.06)',
                    background: isActive ? `${accentColor}06` : 'rgba(255,255,255,0.01)',
                    boxShadow: isActive ? `0 0 0 1px ${accentColor}22, 0 8px 32px ${accentColor}10` : 'none',
                  }}
                  transition={{duration:0.3}}
                  className="liquid-glass"
                  style={{borderRadius:'1.25rem',padding:isMobile?'14px 16px':'18px 20px',cursor:'none',border:'1px solid',overflow:'hidden',position:'relative'}}>

                  {/* Active left bar indicator */}
                  {isActive && (
                    <motion.div layoutId="active-bar"
                      style={{position:'absolute',left:0,top:'20%',bottom:'20%',width:2,borderRadius:2,background:accentColor,boxShadow:`0 0 8px ${accentColor}`}}
                    />
                  )}

                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
                    <div style={{display:'flex',alignItems:'center',gap:10}}>
                      {/* Active pulse dot */}
                      {isActive && (
                        <motion.div animate={{scale:[1,1.4,1],opacity:[1,0.5,1]}} transition={{duration:1.5,repeat:Infinity}}
                          style={{width:6,height:6,borderRadius:'50%',background:accentColor,boxShadow:`0 0 6px ${accentColor}`,flexShrink:0}}/>
                      )}
                      <h3 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:isMobile?'1.1rem':'1.3rem',color:'#fff',lineHeight:1.2}}>{p.name}</h3>
                    </div>
                    <span style={{
                      fontFamily:'JetBrains Mono,monospace',fontSize:'0.5rem',letterSpacing:'0.15em',textTransform:'uppercase',
                      color:accentColor,border:`1px solid ${accentColor}44`,background:`${accentColor}08`,
                      padding:'2px 7px',borderRadius:4,flexShrink:0
                    }}>{p.badge}</span>
                  </div>
                  <p style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.5)',fontFamily:'Barlow,sans-serif',fontWeight:300,marginTop:6,lineHeight:1.5}}>{p.tagline}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── RIGHT: Preview + Stats ── */}
        <div style={{flex:isMobile?'none':'1.2',display:'flex',flexDirection:'column',gap:16}}>

          {/* Viewport frame */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="liquid-glass"
              whileHover={{boxShadow:'0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)'}}
              transition={{duration:0.3}}
              style={{borderRadius:'1.25rem',border:'1px solid rgba(255,255,255,0.1)',background:'rgba(0,0,0,0.4)',display:'flex',flexDirection:'column',height:isMobile?'320px':'440px',overflow:'hidden'}}>

              {/* Frame chrome bar */}
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 16px',borderBottom:'1px solid rgba(255,255,255,0.07)',background:'rgba(255,255,255,0.02)',flexShrink:0}}>
                <div style={{display:'flex',gap:6,alignItems:'center'}}>
                  {[['#f87171','close'],['#fbbf24','min'],['#34d399','max']].map(([c,k])=>(
                    <motion.div key={k} whileHover={{scale:1.3}} style={{width:8,height:8,borderRadius:'50%',background:c,cursor:'none'}}/>
                  ))}
                  <span style={{fontFamily:'JetBrains Mono,monospace',fontSize:'0.5rem',color:'rgba(255,255,255,0.2)',marginLeft:8,letterSpacing:'0.1em'}}>
                    {activeProj.name.toLowerCase().replace(/ /g,'-')}.dev
                  </span>
                </div>

                {/* Mode switcher */}
                <div style={{display:'flex',background:'rgba(255,255,255,0.05)',borderRadius:9999,padding:2}}>
                  {['browser','terminal'].map(m=>(
                    <motion.button key={m} onClick={()=>setMode(m)}
                      animate={{background:mode===m?'#fff':'transparent',color:mode===m?'#000':'rgba(255,255,255,0.6)'}}
                      whileHover={mode!==m?{background:'rgba(255,255,255,0.08)'}:{}}
                      transition={{duration:0.2}}
                      style={{border:'none',fontSize:'0.6rem',fontFamily:'Barlow,sans-serif',fontWeight:600,padding:'4px 12px',borderRadius:9999,cursor:'none',textTransform:'capitalize'}}>
                      {m==='browser'?'Browser':'Terminal'}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div key={selectedId+mode}
                  initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.01}}
                  transition={{duration:0.3,ease:'easeOut'}}
                  style={{flex:1,position:'relative',overflow:'hidden'}}>
                  {mode === 'browser' ? (
                    <ActiveSim/>
                  ) : (
                    <div style={{width:'100%',height:'100%',background:'#050508',padding:'16px 20px',fontFamily:'JetBrains Mono,monospace',fontSize:'0.72rem',lineHeight:2,color:'#34d399',overflowY:'auto'}}>
                      {termOutput.map((log, idx) => (
                        <motion.div key={idx} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{duration:0.3}}
                          style={{color:log.startsWith('$')||log.startsWith('>')?'#67e8f9':'rgba(52,211,153,0.85)'}}>
                          {log}
                        </motion.div>
                      ))}
                      <span className="cursor-blink"/>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </ScrollReveal>

          {/* Stats card */}
          <ScrollReveal delay={0.3}>
            <motion.div className="liquid-glass"
              whileHover={{y:-3,boxShadow:'0 12px 40px rgba(0,0,0,0.5)'}}
              transition={{duration:0.3}}
              style={{borderRadius:'1.25rem',padding:isMobile?'16px':'22px',display:'flex',flexDirection:'column',gap:14,border:'1px solid rgba(255,255,255,0.06)'}}>

              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <h4 style={{fontSize:'0.58rem',fontFamily:'JetBrains Mono,monospace',color:'rgba(255,255,255,0.3)',textTransform:'uppercase',letterSpacing:'0.22em'}}>// Active Statistics</h4>
                <motion.div animate={{opacity:[0.3,1,0.3]}} transition={{duration:2.5,repeat:Infinity}}
                  style={{width:5,height:5,borderRadius:'50%',background:'#6ee7b7',boxShadow:'0 0 6px #6ee7b7'}}/>
              </div>

              <div style={{display:'grid',gridTemplateColumns:'repeat(2, 1fr)',gap:10}}>
                {Object.entries(activeProj.stats).map(([k,v])=>(
                  <AnimStat key={selectedId+k} value={v} label={k}/>
                ))}
              </div>

              {/* Launch CTA */}
              <div style={{display:'flex',justifyContent:'flex-end',marginTop:4}}>
                <motion.a href={activeProj.url} target="_blank" rel="noopener noreferrer"
                  className="liquid-glass-strong"
                  whileHover={{scale:1.04,boxShadow:'0 0 24px rgba(110,231,183,0.15)'}}
                  whileTap={{scale:0.97}}
                  style={{borderRadius:9999,padding:'10px 22px',fontSize:'0.78rem',fontWeight:600,color:'#fff',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:7,cursor:'none'}}>
                  <motion.span animate={{x:[0,2,0]}} transition={{duration:1.5,repeat:Infinity}}>
                    Launch Live Application
                  </motion.span>
                  <ArrowUpRight style={{width:14,height:14}}/>
                </motion.a>
              </div>
            </motion.div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}


window.Navbar=Navbar; window.HeroSection=HeroSection; window.CapSection=CapSection;
window.ClassifiedCard=ClassifiedCard; window.LiveDemosSection=LiveDemosSection;
