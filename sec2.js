/* globals: motion, AnimatePresence, useInView, useRef, useEffect, useState, useCallback — from core.js */

/* ── Tech Stack Section ── */
const techStack = [
  {Icon:ReactIcon, name:'React',       color:'#61DAFB', level:85},
  {Icon:NextIcon,  name:'Next.js',     color:'#fff',    level:70},
  {Icon:NodeIcon,  name:'Node.js',     color:'#68A063', level:78},
  {Icon:PythonIcon,name:'Python',      color:'#FFD43B', level:72},
  {Icon:LinuxIcon, name:'Linux',       color:'#FCC624', level:80},
  {Icon:GitIcon,   name:'Git',         color:'#F05032', level:88},
];

function TechSection(){
  return(
    <section id="skills" style={{position:'relative',background:'#000',padding:'100px 5rem'}}>
      <ScrollReveal delay={0.1}>
        <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.6)',marginBottom:16}}>// Tech Arsenal</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(3rem,7vw,5.5rem)',lineHeight:0.9,letterSpacing:'-3px',marginBottom:64}}>My Stack</h2>
      </ScrollReveal>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
        {techStack.map((t,i)=>(
          <ScrollReveal key={t.name} delay={0.08*i}>
            <motion.div className="liquid-glass"
              whileHover={{scale:1.03,boxShadow:`0 0 30px ${t.color}22`}}
              transition={{duration:0.3}}
              style={{borderRadius:'1.25rem',padding:24,display:'flex',flexDirection:'column',gap:16}}>
              <div style={{display:'flex',alignItems:'center',gap:16}}>
                <motion.div animate={{rotate:[0,5,-5,0]}} transition={{duration:4,repeat:Infinity,delay:i*0.5}}>
                  <t.Icon/>
                </motion.div>
                <span style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'1.4rem',letterSpacing:'-0.5px'}}>{t.name}</span>
              </div>
              <div style={{background:'rgba(255,255,255,0.08)',borderRadius:9999,height:4,overflow:'hidden'}}>
                <motion.div
                  initial={{width:0}} whileInView={{width:t.level+'%'}} viewport={{once:true}}
                  transition={{duration:1.2,delay:0.2+i*0.1,ease:'easeOut'}}
                  style={{height:'100%',borderRadius:9999,background:`linear-gradient(90deg,${t.color}88,${t.color})`}}/>
              </div>
              <span style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.5)',fontFamily:'Barlow,sans-serif',fontWeight:300}}>{t.level}% proficiency</span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

/* ── Interactive Terminal ── */
const COMMANDS = {
  whoami: ['Rishi Sharma','──────────────────────','Role     : BCA Student, Year 2','Focus    : Full-Stack Dev + Cybersecurity','School   : Aggarwal Public School (CBSE)','College  : BCA General CS (2025 – Present)','Dream    : Multi-national business empire 🚀'],
  'skills --list': ['SKILL              LEVEL','──────────────────────','React / Next.js    ████████░░  85%','Node.js            ███████░░░  78%','Python             ███████░░░  72%','Linux              ████████░░  80%','Ethical Hacking    ██████░░░░  65%','Git / DevOps       █████████░  88%'],
  'projects --count': ['PROJECTS SHIPPED  : 5','HACKATHONS        : 7','NOTABLE           : EvacSync, Load Balancer App','STATUS            : 2 more in stealth mode... 🕵️'],
  help: ['Available commands:','  whoami          — about me','  skills --list   — tech proficiency','  projects --count — project stats','  clear           — clear terminal'],
  clear: ['__CLEAR__'],
};

const AUTOSEQ = ['whoami','skills --list','projects --count'];

function Terminal(){
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [autoIdx, setAutoIdx] = useState(0);
  const [autoDone, setAutoDone] = useState(false);
  const [cmdBuf, setCmdBuf] = useState('');
  const ref = useRef(null);
  const bodyRef = useRef(null);
  const triggered = useRef(false);

  const pushLines = useCallback((cmd, output) => {
    if(output[0]==='__CLEAR__'){setLines([]);return;}
    setLines(prev=>[...prev,{type:'cmd',text:`$ ${cmd}`},...output.map(t=>({type:'out',text:t}))]);
  },[]);

  const typeCmd = useCallback((cmd, onDone)=>{
    setTyping(true); setCmdBuf('');
    let i=0;
    const t=setInterval(()=>{
      setCmdBuf(cmd.slice(0,i+1)); i++;
      if(i>=cmd.length){clearInterval(t);setTimeout(()=>{setTyping(false);setCmdBuf('');const out=COMMANDS[cmd]||[`command not found: ${cmd}`];pushLines(cmd,out);onDone&&onDone();},400);}
    },60);
    return()=>clearInterval(t);
  },[pushLines]);

  useEffect(()=>{
    const obs=new IntersectionObserver(([e])=>{
      if(e.isIntersecting&&!triggered.current){triggered.current=true;obs.disconnect();
        setTimeout(()=>typeCmd(AUTOSEQ[0],()=>{setAutoIdx(1);}),600);
      }
    },{threshold:0.3});
    if(ref.current)obs.observe(ref.current);
    return()=>obs.disconnect();
  },[typeCmd]);

  useEffect(()=>{
    if(autoIdx===0||autoDone)return;
    if(autoIdx>=AUTOSEQ.length){setAutoDone(true);return;}
    const t=setTimeout(()=>typeCmd(AUTOSEQ[autoIdx],()=>setAutoIdx(i=>i+1)),800);
    return()=>clearTimeout(t);
  },[autoIdx,autoDone,typeCmd]);

  useEffect(()=>{if(bodyRef.current)bodyRef.current.scrollTop=bodyRef.current.scrollHeight;},[lines,cmdBuf]);

  const handleKey=e=>{
    if(e.key==='Enter'&&input.trim()){
      const cmd=input.trim().toLowerCase();
      setInput('');
      const out=COMMANDS[cmd]||[`command not found: ${cmd}`,'type "help" for available commands'];
      pushLines(cmd,out);
    }
  };

  return(
    <section id="terminal" style={{position:'relative',background:'#000',padding:'80px 5rem'}}>
      <ScrollReveal delay={0.1}>
        <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.6)',marginBottom:16}}>// Interactive Terminal</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.9,letterSpacing:'-3px',marginBottom:40}}>root@rishi:~$</h2>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div ref={ref} className="terminal-window" style={{maxWidth:760}}>
          <div className="terminal-header">
            <div className="terminal-dot" style={{background:'#ff5f57'}}/>
            <div className="terminal-dot" style={{background:'#febc2e'}}/>
            <div className="terminal-dot" style={{background:'#28c840'}}/>
            <span style={{marginLeft:8,fontSize:'0.75rem',color:'rgba(255,255,255,0.4)',fontFamily:'JetBrains Mono,monospace'}}>rishi@portfolio ~ bash</span>
          </div>
          <div ref={bodyRef} className="terminal-body" style={{maxHeight:360,overflowY:'auto'}}>
            <div style={{marginBottom:12,color:'rgba(255,255,255,0.5)',fontSize:'0.8rem'}}>Welcome to Rishi's terminal. Commands auto-run, or type your own.</div>
            {lines.map((l,i)=>(
              <div key={i} style={{color:l.type==='cmd'?'#6ee7b7':'rgba(255,255,255,0.75)'}}>{l.text}</div>
            ))}
            {typing&&<div className="t-green">{`$ ${cmdBuf}`}<span className="cursor-blink"/></div>}
            {!typing&&(
              <div style={{display:'flex',alignItems:'center',gap:4,marginTop:4}}>
                <span className="t-green">$</span>
                <input value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKey}
                  placeholder="type a command..." autoComplete="off" spellCheck="false"
                  style={{background:'transparent',border:'none',outline:'none',color:'rgba(255,255,255,0.9)',fontFamily:'JetBrains Mono,monospace',fontSize:'13px',flex:1,caretColor:'#6ee7b7',cursor:'none'}}/>
                <span className="cursor-blink"/>
              </div>
            )}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ── Stats Section ── */
const stats=[
  {val:5,suffix:'+',label:'Projects Shipped',sub:'Real-world production apps'},
  {val:7,suffix:'',label:'Hackathons',sub:'Competed & built under pressure'},
  {val:2,suffix:'',label:'Board Approvals',sub:'CBSE & UP Board approved'},
  {val:2025,suffix:'',label:'Year Started BCA',sub:'Aggarwal Public School → BCA'},
];

function StatsSection(){
  return(
    <section style={{position:'relative',background:'#000',padding:'80px 5rem'}}>
      <ScrollReveal delay={0.1}>
        <p style={{fontSize:'0.8rem',fontFamily:'Barlow,sans-serif',color:'rgba(255,255,255,0.6)',marginBottom:16}}>// By the Numbers</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <h2 style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',color:'#fff',fontSize:'clamp(2.5rem,6vw,5rem)',lineHeight:0.9,letterSpacing:'-3px',marginBottom:48}}>Impact So Far</h2>
      </ScrollReveal>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20}}>
        {stats.map((s,i)=>(
          <ScrollReveal key={i} delay={0.1*i}>
            <div className="liquid-glass" style={{borderRadius:'1.25rem',padding:28,position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 50% 0%,rgba(255,255,255,0.04),transparent 70%)',pointerEvents:'none'}}/>
              <div style={{fontFamily:'"Instrument Serif",serif',fontStyle:'italic',fontSize:'3.2rem',letterSpacing:'-2px',color:'#fff',lineHeight:1}}>
                <AnimatedCounter end={s.val} suffix={s.suffix} duration={2000}/>
              </div>
              <div style={{marginTop:8,fontSize:'0.9rem',color:'#fff',fontFamily:'Barlow,sans-serif',fontWeight:500}}>{s.label}</div>
              <div style={{marginTop:4,fontSize:'0.75rem',color:'rgba(255,255,255,0.5)',fontFamily:'Barlow,sans-serif',fontWeight:300}}>{s.sub}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

window.TechSection=TechSection; window.Terminal=Terminal; window.StatsSection=StatsSection;
