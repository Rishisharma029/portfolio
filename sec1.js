/* globals: motion, AnimatePresence, useInView, useRef, useEffect, useState, useCallback, sv — from core.js */


/* ── Navbar ── */
function Navbar(){
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h);
  },[]);
  return(
    <nav style={{position:'fixed',top:16,left:0,right:0,padding:'0 4rem',zIndex:50,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <div className="liquid-glass" style={{width:48,height:48,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',transition:'box-shadow 0.3s',boxShadow:scrolled?'0 0 20px rgba(255,255,255,0.15)':''}}>
        <span style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:'1.25rem',color:'#fff'}}>r</span>
      </div>
      <div className="liquid-glass" style={{borderRadius:9999,padding:'6px 6px',display:'flex',alignItems:'center',gap:0}}>
        {['Home','Projects','Skills','Terminal','Journey','About','Contact'].map(l=>(
          <a key={l} href={'#'+l.toLowerCase()} style={{padding:'8px 12px',fontSize:'0.8rem',fontWeight:500,color:'rgba(255,255,255,0.85)',fontFamily:'Barlow,sans-serif',textDecoration:'none',transition:'color 0.2s'}}
            onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,0.85)'}>{l}</a>
        ))}
        <MagneticButton href="mailto:i.rishisharma2007@gmail.com"
          style={{background:'#fff',color:'#000',borderRadius:9999,padding:'8px 16px',fontSize:'0.8rem',fontWeight:600,fontFamily:'Barlow,sans-serif',whiteSpace:'nowrap',marginLeft:4,textDecoration:'none',display:'inline-flex',alignItems:'center',gap:4,border:'none',cursor:'none'}}>
          Hire Me <ArrowUpRight style={{width:14,height:14}}/>
        </MagneticButton>
      </div>
      <div style={{width:48,height:48}}/>
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

window.Navbar=Navbar; window.HeroSection=HeroSection; window.CapSection=CapSection;
window.ClassifiedCard=ClassifiedCard;
