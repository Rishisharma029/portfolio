/* globals: motion, AnimatePresence, useInView, useRef, useEffect, useState, useCallback — from core.js */

/* ── Journey Timeline ── */
const journey = [
  /* ── Early Start ── */
  {year:'2023', title:'First Line of Code', desc:'Picked up programming — HTML, CSS, JavaScript. Built first pages and fell in love with the craft.', side:'left', tag:null},
  {year:'2025', title:'Completed 12th Grade', desc:'Graduated from Aggarwal Public School, CBSE board. Decided to pursue BCA to go all-in on computer science.', side:'right', tag:null},
  {year:'2025', title:'Joined BCA', desc:'Enrolled in BCA (General CS). Started exploring React, Node.js, and building real applications from day one.', side:'left', tag:null},

  /* ── Main Projects ── */
  {year:'2026', title:'Load Balancer App', desc:'Production-grade load balancer approved for CBSE & UP Board — traffic distribution, health checks, and automatic failover built from scratch.', side:'right', tag:'Main'},
  {year:'2026', title:'EvalSync System', desc:'A complete evaluation and management platform with live sync, role-based dashboards, and automated reporting workflows.', side:'left', tag:'Main'},
  {year:'2026', title:'Visuals AI System Designer', desc:'AI-powered platform that auto-generates visual system architecture and infrastructure diagrams from natural language input.', side:'right', tag:'Main'},
  {year:'2026', title:'DevInspect-AI', desc:'AI-powered developer assistant — deep code inspection, real-time error detection, and code quality insights for any codebase.', side:'left', tag:'Main'},
  {year:'2026', title:'AI Resume Roaster', desc:'Brutally honest, AI-driven resume feedback platform — actionable critique and scoring to help candidates stand out in any job market.', side:'right', tag:'Main'},
  {year:'2026', title:'CampusOS', desc:'Comprehensive campus governance portal managing real-time student profiling, automated gatepass, attendance trackers, and grade sheets.', side:'left', tag:'Main'},
  {year:'2026', title:'Handwritten Text OCR', desc:'Neural network-driven handwriting recognition system utilizing ResNet and CTC loss to parse and extract plaintext from offline scripts.', side:'right', tag:'Main'},
  {year:'2026', title:'Crop Disease Classifier', desc:'Deep learning mobile diagnostic classifier using MobileNetV2 to identify 38 leaf disease strains with 12ms inference speed.', side:'left', tag:'Main'},

  /* ── Lab & Research ── */
  {year:'2026', title:'BugHunter-AI', desc:'AI-powered vulnerability scanner that statically and dynamically analyzes codebases to surface hidden security bugs and exploits.', side:'left', tag:'Lab'},
  {year:'2026', title:'ResqNet', desc:'Disaster and emergency coordination platform for real-time response management, team dispatch, and incident tracking during crisis events.', side:'right', tag:'Lab'},
  {year:'2026', title:'AI Engineering Workshop', desc:'Open-source repo of AI experiments, workshop code, and research projects exploring cutting-edge machine learning concepts and implementations.', side:'left', tag:'Lab'},
  {year:'2026', title:'AGRIVISION', desc:'Smart agriculture dashboard mapping real-time drone telemetry, crop moisture ratings, and multispectral vegetation indices.', side:'right', tag:'Lab'},
  {year:'2026', title:'SOLARFLARE AI', desc:'Predictive LSTM and 3D CNN network monitoring solar radiation storms and forecasting critical weather alerts for spacecraft telemetry.', side:'left', tag:'Lab'},
  {year:'2026', title:'LeetCodes Solutions', desc:'Algorithmic codex mapping optimized data structures and competitive programming solutions in C++, Java, and Python.', side:'right', tag:'Lab'},

  /* ── Deep Focus ── */
  {year:'2026', title:'Deep-Diving into Cybersecurity', desc:'Actively learning ethical hacking, penetration testing, CTF challenges, and network security. Building toward mastery.', side:'right', tag:null},
  {year:'Now →', title:'Building What\'s Next', desc:'2nd year BCA underway. New projects, new skills, new domains. The empire is being built — one system at a time.', side:'left', tag:null},
];

function TimelineSection(){
  return(
    <section id="journey" style={{position:'relative',background:'#000',padding:'80px 5rem'}}>
      <ScrollReveal delay={0.1}>
        <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.6)',marginBottom:16}}>// The Journey</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.9,letterSpacing:'-3px',marginBottom:64}}>How It Started</h2>
      </ScrollReveal>
      <div style={{position:'relative',maxWidth:800,margin:'0 auto'}}>
        {/* Vertical line */}
        <div style={{position:'absolute',left:'50%',top:0,bottom:0,width:2,background:'linear-gradient(to bottom,transparent,rgba(255,255,255,0.12),rgba(255,255,255,0.12),transparent)',transform:'translateX(-50%)'}}/>
        {journey.map((j,i)=>{
          const dotColor = j.tag==='Main'?'#6ee7b7':j.tag==='Lab'?'#a78bfa':'#fff';
          const dotShadow = j.tag==='Main'?'0 0 14px rgba(110,231,183,0.6)':j.tag==='Lab'?'0 0 14px rgba(167,139,250,0.6)':'0 0 16px rgba(255,255,255,0.4)';
          const badgeStyle = j.tag==='Main'
            ? {color:'#6ee7b7',background:'rgba(110,231,183,0.08)',border:'1px solid rgba(110,231,183,0.3)'}
            : j.tag==='Lab'
            ? {color:'#a78bfa',background:'rgba(167,139,250,0.08)',border:'1px solid rgba(167,139,250,0.3)'}
            : null;
          return(
          <ScrollReveal key={i} delay={0.08*i}>
            <div style={{display:'flex',justifyContent:j.side==='left'?'flex-start':'flex-end',marginBottom:36,position:'relative'}}>
              {/* Spine dot — colored for project entries */}
              <div style={{position:'absolute',left:'50%',top:22,transform:'translateX(-50%)',width:14,height:14,borderRadius:'50%',background:dotColor,boxShadow:dotShadow,zIndex:2}}/>
              {/* Card */}
              <div className="liquid-glass"
                style={{borderRadius:'1.25rem',padding:24,width:'44%',position:'relative'}}>
                {/* Project type badge */}
                {j.tag&&(
                  <span style={{position:'absolute',top:14,right:14,fontFamily:'JetBrains Mono,monospace',fontSize:'0.52rem',letterSpacing:'0.18em',textTransform:'uppercase',borderRadius:4,padding:'2px 7px',...badgeStyle}}>{j.tag}</span>
                )}
                <span style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'rgba(255,255,255,0.4)',fontSize:'0.82rem',letterSpacing:'1px'}}>{j.year}</span>
                <h3 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'1.25rem',lineHeight:1.1,marginTop:4,letterSpacing:'-0.5px',paddingRight:j.tag?48:0}}>{j.title}</h3>
                <p style={{marginTop:8,fontSize:'0.79rem',color:'rgba(255,255,255,0.7)',fontFamily:'Barlow,sans-serif',fontWeight:300,lineHeight:1.65}}>{j.desc}</p>
              </div>
            </div>
          </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

/* ── About Section ── */
function AboutSection(){
  return(
    <section id="about" style={{position:'relative',background:'#000',padding:'80px 5rem'}}>
      <div style={{maxWidth:760,margin:'0 auto'}}>
        <ScrollReveal delay={0.1}>
          <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.6)',marginBottom:16}}>// About Me</p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.9,letterSpacing:'-3px',marginBottom:32}}>The Story<br/>So Far</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="liquid-glass" style={{borderRadius:'1.25rem',padding:40}}>
            <div style={{display:'flex',flexDirection:'column',gap:16,fontFamily:'Barlow,sans-serif',fontWeight:300,color:'rgba(255,255,255,0.85)',fontSize:'0.9rem',lineHeight:1.75}}>
              <p>I'm <strong style={{fontWeight:600,color:'#fff'}}>Rishi Sharma</strong> — currently in my second year of BCA (General CS). I completed my 12th from <strong style={{fontWeight:600,color:'#fff'}}>Aggarwal Public School</strong>, affiliated with CBSE in 2025.</p>
              <p>In 2026, during my first year at college, I built a <strong style={{fontWeight:600,color:'#fff'}}>load balancer application</strong> approved for CBSE and UP Board, and launched <strong style={{fontWeight:600,color:'#fff'}}>EvacSync</strong> — a full-featured evacuation management platform.</p>
              <p>I'm deeply interested in <strong style={{fontWeight:600,color:'#fff'}}>ethical hacking and cybersecurity</strong> — exploring penetration testing, network security analysis, and CTF challenges as my next frontier.</p>
              <p>My dream? To build a <strong style={{fontWeight:600,color:'#fff'}}>multi-national business empire</strong> — yes, the BMW is on the vision board. Always learning, always building.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ── FAQ Section ── */
const faqs = [
  {q:'What technologies do you work with?', a:'I primarily work with React, Next.js, Node.js, and Python. On the infrastructure side, I use Linux, Git, and am comfortable with Docker basics. Cybersecurity tools are an ongoing area of exploration.'},
  {q:"What is EvacSync?", a:'EvacSync is a full-stack evacuation management platform I built — featuring real-time data sync, live dashboards, role-based access control, and multi-device support. It handles emergency coordination scenarios.'},
  {q:'Are you open to freelance or collaboration?', a:'Absolutely. Whether it\'s a startup, a project, or a hackathon team — reach out via email. I\'m always excited by interesting problems and ambitious builds.'},
  {q:'What are your long-term goals?', a:'Building a multi-national tech business, mastering cybersecurity and ethical hacking, and contributing to impactful software at scale. The vision is big — and the work ethic matches it.'},
  {q:'How can I contact you?', a:'Email: i.rishisharma2007@gmail.com | Instagram: @_rishi_sharma28 — response is usually quick.'},
];

function FAQ(){
  const [open, setOpen] = useState(null);
  return(
    <section style={{position:'relative',background:'#000',padding:'80px 5rem 40px'}}>
      <ScrollReveal delay={0.1}>
        <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.6)',marginBottom:16}}>// Q&amp;A</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.9,letterSpacing:'-3px',marginBottom:40}}>Questions &amp;<br/>Answers</h2>
      </ScrollReveal>
      <div style={{maxWidth:760,display:'flex',flexDirection:'column',gap:12}}>
        {faqs.map((f,i)=>(
          <ScrollReveal key={i} delay={0.08*i}>
            <div className="liquid-glass" style={{borderRadius:'1.25rem',overflow:'hidden'}}>
              <button onClick={()=>setOpen(open===i?null:i)}
                style={{width:'100%',padding:'20px 24px',display:'flex',alignItems:'center',justifyContent:'space-between',background:'transparent',border:'none',color:'#fff',cursor:'none',textAlign:'left',gap:16}}>
                <span style={{fontFamily:'Barlow,sans-serif',fontWeight:500,fontSize:'0.92rem',lineHeight:1.4}}>{f.q}</span>
                <motion.div animate={{rotate:open===i?180:0}} transition={{duration:0.3}}>
                  <ChevronDown style={{flexShrink:0,opacity:0.6}}/>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open===i&&(
                  <motion.div key="ans" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}
                    transition={{duration:0.35,ease:'easeInOut'}} style={{overflow:'hidden'}}>
                    <div style={{padding:'0 24px 20px',fontSize:'0.84rem',color:'rgba(255,255,255,0.75)',fontFamily:'Barlow,sans-serif',fontWeight:300,lineHeight:1.7}}>
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ── Contact Footer ── */
function ContactSection(){
  return(
    <section id="contact" style={{position:'relative',background:'#000',padding:'60px 5rem 80px'}}>
      <ScrollReveal delay={0.1}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',maxWidth:600,margin:'0 auto'}}>
          <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.6)',marginBottom:16}}>// Let's Connect</p>
          <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.9,letterSpacing:'-3px',marginBottom:40}}>Get in Touch</h2>
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:16}}>
            <MagneticButton href="mailto:i.rishisharma2007@gmail.com" className="liquid-glass-strong"
              style={{borderRadius:9999,padding:'12px 24px',fontSize:'0.84rem',fontWeight:500,color:'#fff',display:'inline-flex',alignItems:'center',gap:8,textDecoration:'none',cursor:'none'}}>
              i.rishisharma2007@gmail.com <ArrowUpRight style={{width:16,height:16}}/>
            </MagneticButton>
            <MagneticButton href="https://instagram.com/_rishi_sharma28" target="_blank" rel="noopener noreferrer" className="liquid-glass"
              style={{borderRadius:9999,padding:'12px 24px',fontSize:'0.84rem',fontWeight:500,color:'#fff',display:'inline-flex',alignItems:'center',gap:8,textDecoration:'none',cursor:'none'}}>
              @_rishi_sharma28 <ArrowUpRight style={{width:16,height:16}}/>
            </MagneticButton>
          </div>
          <p style={{marginTop:48,fontSize:'0.72rem',color:'rgba(255,255,255,0.25)',fontFamily:'Barlow,sans-serif',fontWeight:300}}>
            © 2026 Rishi Sharma. Built with ambition.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ── App Root ── */
function App(){
  return(
    <>
      <LoadingScreen/>
      <LiveClock/>
      <GhostCursors/>
      <ParticleSystem/>
      <CustomCursor/>
      <HeroSection/>
      <CapSection/>
      <LiveDemosSection/>
      <TechSection/>
      <Terminal/>
      <StatsSection/>
      <TimelineSection/>
      <AboutSection/>
      <FAQ/>
      <ContactSection/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
