/* globals: motion, AnimatePresence, useInView, useRef, useEffect, useState, useCallback — from core.js */

/* ── Journey Timeline ── */
const journey = [
  {year:'2023', title:'First Line of Code', desc:'Picked up programming — HTML, CSS, JavaScript. Built first pages and fell in love with the craft.', side:'left'},
  {year:'2025', title:'Completed 12th Grade', desc:'Graduated from Aggarwal Public School, CBSE board. Decided to pursue BCA to go all-in on computer science.', side:'right'},
  {year:'2025', title:'Joined BCA', desc:'Enrolled in BCA (General CS). Started exploring React, Node.js, and building real applications from day one.', side:'left'},
  {year:'2026', title:'Built Load Balancer App', desc:'Engineered a complete load balancer approved for CBSE & UP Board — production-grade with health checks and failover.', side:'right'},
  {year:'2026', title:'Launched EvacSync', desc:'Built and launched EvacSync — a full evacuation management platform with real-time sync, dashboards, and role-based access.', side:'left'},
  {year:'2026', title:'Deep-Diving into Cybersecurity', desc:'Actively learning ethical hacking, penetration testing, CTF challenges, and network security. Building toward mastery.', side:'right'},
  {year:'Now →', title:'Building What\'s Next', desc:'2nd year BCA underway. New projects, new skills, new domains. The empire is being built — one system at a time.', side:'left'},
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
        {journey.map((j,i)=>(
          <ScrollReveal key={i} delay={0.1*i}>
            <div style={{display:'flex',justifyContent:j.side==='left'?'flex-start':'flex-end',marginBottom:40,position:'relative'}}>
              {/* Dot */}
              <div style={{position:'absolute',left:'50%',top:20,transform:'translateX(-50%)',width:14,height:14,borderRadius:'50%',background:'#fff',boxShadow:'0 0 16px rgba(255,255,255,0.4)',zIndex:2}}/>
              {/* Card */}
              <div className="liquid-glass"
                style={{borderRadius:'1.25rem',padding:24,width:'44%',position:'relative'}}>
                <span style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'rgba(255,255,255,0.4)',fontSize:'0.85rem',letterSpacing:'1px'}}>{j.year}</span>
                <h3 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'1.3rem',lineHeight:1.1,marginTop:4,letterSpacing:'-0.5px'}}>{j.title}</h3>
                <p style={{marginTop:8,fontSize:'0.8rem',color:'rgba(255,255,255,0.7)',fontFamily:'Barlow,sans-serif',fontWeight:300,lineHeight:1.6}}>{j.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
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
      <TechSection/>
      <Terminal/>
      <StatsSection/>
      <ClassifiedReveal label="JOURNEY DATA">
        <TimelineSection/>
      </ClassifiedReveal>
      <ClassifiedReveal label="PERSONAL RECORD">
        <AboutSection/>
      </ClassifiedReveal>
      <FAQ/>
      <ContactSection/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
