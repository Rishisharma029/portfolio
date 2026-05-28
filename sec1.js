var {motion, AnimatePresence} = window.Motion;
var {useRef, useEffect, useState, useCallback} = React;
const sv = {hidden:{opacity:0,y:40,filter:'blur(6px)'},visible:{opacity:1,y:0,filter:'blur(0px)'}};

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
              {Icon:ClockIcon,val:'5+',label:'Projects Built'},
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
const cards=[
  {I:ImgIcon,t:'EvacSync',tags:['Full Stack','React','Node.js','Real-Time'],d:'A complete evacuation-management platform with live dashboards, role-based access, and real-time sync across devices.'},
  {I:MovIcon,t:'Load Balancer',tags:['CBSE Approved','UP Board','Scalable','Production'],d:'Full load-balancer app approved for CBSE & UP Board — traffic distribution, health checks, and failover handling.'},
  {I:BulbIcon,t:'Cybersecurity',tags:['Ethical Hacking','Pen Testing','CTF','Network Sec'],d:'Actively exploring penetration testing, CTF challenges, and network security analysis as core learning focus.'}
];

function CapSection(){
  return(
    <section id="projects" style={{position:'relative',minHeight:'100vh',background:'#000',overflow:'hidden'}}>
      <FadingVideo src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',zIndex:0}}/>
      <div className="video-overlay"/>
      <div style={{position:'relative',zIndex:10,padding:'96px 5rem 40px',display:'flex',flexDirection:'column',minHeight:'100vh'}}>
        <div style={{marginBottom:'auto'}}>
          <ScrollReveal delay={0.1}>
            <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.7)',marginBottom:20,textShadow:'0 2px 8px rgba(0,0,0,0.9)'}}>// What I Build</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(3.5rem,8vw,6rem)',lineHeight:0.9,letterSpacing:'-3px',textShadow:'0 4px 24px rgba(0,0,0,0.9)'}}>Projects<br/>&amp; Skills</h2>
          </ScrollReveal>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:24,marginTop:64}}>
          {cards.map((c,i)=>(
            <ScrollReveal key={i} delay={0.15*i}>
              <div className="liquid-glass" style={{borderRadius:'1.25rem',padding:24,minHeight:360,display:'flex',flexDirection:'column',height:'100%'}}>
                <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:12}}>
                  <div className="liquid-glass" style={{borderRadius:12,width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><c.I/></div>
                  <div style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-end',gap:6,maxWidth:'70%'}}>
                    {c.tags.map(t=><span key={t} className="liquid-glass" style={{borderRadius:9999,padding:'4px 10px',fontSize:'0.68rem',color:'rgba(255,255,255,0.85)',fontFamily:'Barlow,sans-serif',whiteSpace:'nowrap'}}>{t}</span>)}
                  </div>
                </div>
                <div style={{flex:1}}/>
                <div style={{marginTop:24}}>
                  <h3 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'2rem',letterSpacing:'-1px',lineHeight:1}}>{c.t}</h3>
                  <p style={{marginTop:10,fontSize:'0.82rem',color:'rgba(255,255,255,0.85)',fontFamily:'Barlow,sans-serif',fontWeight:300,lineHeight:1.55,maxWidth:'28ch'}}>{c.d}</p>
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
