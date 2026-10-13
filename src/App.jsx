import { useEffect, useRef, useState } from "react";
import { motion, MotionConfig, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import CapsuleButton from "./components/CapsuleButton";
import FloatingSticker from "./components/FloatingSticker";
import ProjectVisual from "./components/ProjectVisual";
import { MotionPreferences, usePortfolioMotion } from "./components/MotionPreferences";
import { EyeIcon, ChatBubbleIcon, BookIcon, SketchArrowDown, HandDrawnArrowOutline } from "./components/Icons";
import { projects, processSteps, skillsMarqueeRow1, skillsMarqueeRow2, profile, metrics, stackGroups } from "./data/portfolio";
import "./styles.css";

const easing = [.35, .755, .42, .95];
const projectIdentity = [
  { name: "SAFAR", type: "systems", color: "pink", label: "PEOPLE, NOT JUST REQUESTS" },
  { name: "VOICE PLATEAU", type: "voice", color: "yellow", label: "FROM VOICE TO RESPONSE" },
  { name: "GRAPH RESEARCH", type: "graph", color: "green", label: "CONTEXT, CONNECTED" },
  { name: "PARACLETUS", type: "desktop", color: "salmon", label: "A LITTLE MORE AWARE" }
];

function Reveal({ children, className = "", delay = 0 }) {
  const enabled = usePortfolioMotion();
  return <motion.div className={className}
    initial={enabled ? { opacity: 0, y: 35 } : { opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }}
    transition={{ duration: enabled ? .65 : .15, ease: easing, delay: enabled ? delay : 0 }}>
    {children}
  </motion.div>;
}

function Header({ paused, setPaused, reduced }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const burger = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (open && !element.open) element.showModal();
    if (!open && element.open) element.close();
    if (!open) return;
    const previous = document.documentElement.style.overflowY;
    document.documentElement.style.overflowY = "hidden";
    return () => { document.documentElement.style.overflowY = previous; };
  }, [open]);
  const close = () => { setOpen(false); burger.current?.focus(); };
  return <>
    <header className="c-header">
      <div className="c-header_circle" aria-hidden="true"/>
      <div className="c-header_left">
        <button ref={burger} type="button" className="c-header_burger" aria-label="Open menu"
          aria-expanded={open} aria-controls="portfolio-menu" onClick={() => setOpen(true)}>
          <span/><span/><span/>
        </button>
        <a href="#top" className="c-header_logo" aria-label="Shashank Kumar, back to top">
          <span className="c-header_logo_bubble">SK</span>
          <span className="c-header_logo_title">Shashank Kumar<br/><span>Product engineer</span></span>
        </a>
      </div>
      <div className="c-header_right">
        <button className="motion-control" aria-pressed={paused || reduced} disabled={reduced} onClick={() => setPaused(!paused)}
          aria-label={reduced ? "Reduced motion is enabled" : paused ? "Resume animations" : "Pause animations"}>
          <span aria-hidden="true">{reduced ? "◦" : paused ? "▶" : "Ⅱ"}</span><span>{reduced ? "STATIC" : paused ? "PLAY" : "MOTION"}</span>
        </button>
        <CapsuleButton variant="pink" circleColor="yellow" icon={<BookIcon/>} label="My toolkit" href="#stack" className="header-toolkit"/>
        <CapsuleButton variant="green" circleColor="yellow" icon={<ChatBubbleIcon/>} label="Let's talk" href="#contact"/>
      </div>
    </header>
    <dialog ref={dialog} id="portfolio-menu" className="portfolio-menu" aria-labelledby="menu-title"
      onCancel={close} onClose={() => setOpen(false)} onClick={e => { if(e.target === e.currentTarget) close(); }}>
      <div className="menu-topline"><span id="menu-title">PICK A DIRECTION</span><button onClick={close} className="menu-close" aria-label="Close menu">Close <span aria-hidden="true">×</span></button></div>
      <nav aria-label="Main navigation">
        {[["work","The work"],["manifesto","The engineer"],["process","The method"],["stack","The toolkit"],["contact","Let's talk"]].map(([id,label],i)=>
          <a key={id} href={`#${id}`} onClick={close}><span className="menu-number">0{i+1}</span><span>{label}</span><span aria-hidden="true">↗</span></a>)}
      </nav>
      <p className="menu-footnote">Bengaluru, India · Open to product engineering roles</p>
    </dialog>
  </>;
}

function Hero() {
  const ref = useRef(null);
  const enabled = usePortfolioMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });
  const y = useTransform(progress, [0,1], [0,100]);
  const sealsY = useTransform(progress, [0,1], [0,-80]);
  const railX = useTransform(progress, [0,1], [0,-200]);
  return <section ref={ref} id="top" className="s-hero-stickers">
    <div className="hero-topline"><span>INDEPENDENT MIND. END-TO-END BUILDER.</span><span>BENGALURU / INDIA</span></div>
    <motion.div className="hero-copy" style={enabled ? { y } : {}}>
      <p className="hero-eyebrow">Shashank Kumar — Product engineer</p>
      <h1><span className="hero-title-line">MAKE IT</span><span className="hero-title-line hero-last-line">WORK<span className="hero-period">.</span><span className="hero-annotation">AND MAKE<br/>IT MATTER.</span></span></h1>
      <p className="hero-intro">From the first idea to the last millisecond.<br/>I build AI products that hold up in the real world.</p>
      <div className="hero-actions"><CapsuleButton variant="green-eye" circleColor="pink" icon={<EyeIcon/>} label="See the work" href="#work" size="large"/><a href="#manifesto" className="text-link">Meet the engineer ↗</a></div>
    </motion.div>
    <motion.div className="hero-stickers-container" style={enabled ? { y: sealsY } : {}}>
      <span className="hero-seal-caption">LESS TALK. MORE PROOF.</span>
      <FloatingSticker type="systems" className="sticker-pos-systems"/>
      <FloatingSticker type="voice" className="sticker-pos-voice"/>
      <FloatingSticker type="graph" className="sticker-pos-graph"/>
    </motion.div>
    <div className="hero-bottomline"><span><i/> OPEN TO PRODUCT ENGINEERING ROLES</span><a href="#work" aria-label="Scroll to selected work"><SketchArrowDown/></a><span>SCROLL TO GET INTO IT</span></div>
    <div className="hero-rail" aria-hidden="true"><motion.div style={enabled ? {x: railX} : {}}>IDEA → INTERFACE → INFRASTRUCTURE → IMPACT → IDEA → INTERFACE → INFRASTRUCTURE</motion.div></div>
  </section>;
}

function ProjectCard({ project, index }) {
  const identity = projectIdentity[index];
  const ref = useRef(null);
  const enabled = usePortfolioMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] });
  const rotation = useTransform(scrollYProgress,[0,.5,1],[index%2 ? 3 : -3,0,index%2 ? -1 : 1]);
  const y = useTransform(scrollYProgress,[0,1],[35,-35]);
  return <article ref={ref} id={`project-${project.number}`} className={`project-block-card project-${identity.color}`}>
    <div className="project-block-left">
      <Reveal><div className="project-card-num-badge"><span className="card-num-circle">{project.number}</span><span className="card-category-text">{project.category}</span></div>
        <h3 className="project-block-title">{identity.name}</h3><p className="project-premise">{project.title}</p>
        <p className="project-block-desc">{project.description}</p>
        <div className="project-tech-pills">{project.stack.map(tag=><span key={tag} className="tech-tag-pill">{tag}</span>)}</div>
        <CapsuleButton variant="black" icon={<span>↗</span>} circleColor={identity.color === "salmon" ? "pink" : identity.color} href={project.link} label={index === 0 ? "Visit the live product" : "Explore the project"} target="_blank" rel="noreferrer"/>
      </Reveal>
    </div>
    <motion.div className="project-frame" style={enabled ? { rotate: rotation, y } : {}}>
      <div className="project-frame-top"><span>FIELD NOTES / {project.number}</span><span aria-hidden="true">✳</span></div>
      <ProjectVisual type={identity.type}/>
      <span className="project-frame-caption">{identity.label}</span>
      <div className="project-impact-bubble"><span>{project.impact}</span></div>
    </motion.div>
  </article>;
}

function StackRail({ items, reverse = false }) {
  return <div className={`marquee-window ${reverse ? "-reverse" : ""}`} aria-hidden="true"><div className="marquee-stream-track">
    {[0,1].map(copy=><div className="marquee-group" key={copy}>{items.map((skill,i)=><span key={skill} className={`marquee-capsule-badge badge-${reverse ? "outline" : ["green","pink","yellow"][i%3]}`}>{skill}<span>✳</span></span>)}</div>)}
  </div></div>;
}

export default function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    let cancelled = false;
    const frame = requestAnimationFrame(() => {
      document.fonts.ready.then(() => {
        if (!cancelled && window.location.hash === hash) {
          document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" });
        }
      });
    });
    return () => { cancelled = true; cancelAnimationFrame(frame); };
  }, []);

  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const enabled = !reduced && !paused;
  const { scrollYProgress } = useScroll();
  return <MotionPreferences.Provider value={enabled}><MotionConfig reducedMotion={enabled ? "never" : "always"}>
    <div className="page-shell" data-motion={enabled ? "on" : "off"}>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <motion.div className="reading-progress" style={{scaleX:scrollYProgress}} aria-hidden="true"/>
      <Header paused={paused} setPaused={setPaused} reduced={reduced}/>
      <main id="main-content">
        <Hero/>
        <section id="manifesto" className="s-white-editorial">
          <div className="white-editorial-container">
            <Reveal className="white-editorial-left"><span className="section-eyebrow">01 / THE ENGINEER</span><h2 className="white-editorial-heading">GOOD IDEAS.<br/>REAL <span className="highlight-underline">SYSTEMS.</span></h2></Reveal>
            <Reveal className="white-editorial-right" delay={.1}><p className="white-editorial-text">{profile.manifesto}</p><p className="editorial-small">Product thinking. Interface craft. Infrastructure that holds. I like owning the thread all the way through.</p><div className="white-editorial-buttons"><CapsuleButton variant="black" href="#work" label="Selected projects" icon={<EyeIcon/>} circleColor="pink"/><a className="text-link" href={`mailto:${profile.email}`}>Write to me ↗</a></div><HandDrawnArrowOutline className="editorial-arrow"/></Reveal>
          </div>
          <div className="proof-strip">{metrics.map((item,i)=><Reveal className="proof-item" key={item.label} delay={i*.06}><strong>{item.value}</strong><span>{item.label}</span><small>{item.note}</small></Reveal>)}</div>
        </section>
        <section id="work" className="s-projects-section">
          <div className="projects-container"><Reveal className="section-title-badge-row"><div><span className="section-eyebrow">02 / SELECTED WORK</span><h2 className="section-huge-title">OUT IN THE<br/><span className="outline-type">REAL WORLD.</span></h2></div><p className="section-side-note">Four builds. Different problems.<br/>The same end-to-end ownership.</p></Reveal><div className="projects-grid">{projects.map((project,index)=><ProjectCard key={project.number} project={project} index={index}/>)}</div></div>
        </section>
        <section id="process" className="s-method-section">
          <div className="method-container"><Reveal className="section-title-badge-row"><div><span className="section-eyebrow">03 / THE METHOD</span><h2 className="section-huge-title">THINK. BUILD.<br/>BREAK. <span className="highlight-underline">BETTER.</span></h2></div><span className="method-loop" aria-hidden="true">↻</span></Reveal>
          <div className="method-cards-grid">{processSteps.map((step,i)=><Reveal className="method-step-card" key={step.num} delay={i*.09}><span className="method-step-num">{step.num}<span aria-hidden="true">↗</span></span><h3 className="method-step-title">{step.title}</h3><p className="method-step-body">{step.body}</p></Reveal>)}</div></div>
        </section>
        <section id="stack" className="s-stack-marquee-section">
          <Reveal className="stack-heading"><span className="section-eyebrow">04 / THE TOOLKIT</span><h2 className="section-huge-title">RIGHT TOOL.<br/>REAL PURPOSE.</h2><p>Tools change. Knowing what to build with them is the point.</p></Reveal>
          <div className="stack-rails"><StackRail items={skillsMarqueeRow1}/><StackRail items={skillsMarqueeRow2} reverse/></div>
          <div className="stack-groups">{stackGroups.map(group=><div key={group.label}><h3>{group.label}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div>
        </section>
        <section id="contact" className="s-contact-section">
          <Reveal className="contact-card-box"><div className="contact-topline"><span className="section-eyebrow">05 / YOUR NEXT BUILD?</span><span className="contact-star" aria-hidden="true">✳</span></div><h2 className="contact-huge-title">LET'S MAKE<br/>SOMETHING<br/><span>THAT MATTERS.</span></h2><div className="contact-bottom"><p className="contact-sub-text">Open to product engineering, full-stack, and AI roles.<br/>Bengaluru or remote. A good problem is a good start.</p><CapsuleButton variant="green" circleColor="yellow" icon={<ChatBubbleIcon/>} label="Start a conversation" href={`mailto:${profile.email}`} size="large"/></div><div className="contact-action-row"><a href={`mailto:${profile.email}`}>{profile.email} ↗</a><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div><footer className="contact-footer-bar"><span>© {new Date().getFullYear()} Shashank Kumar</span><span>BUILT WITH INTENT.</span><a href="#top">Back to top ↑</a></footer></Reveal>
        </section>
      </main>
    </div>
  </MotionConfig></MotionPreferences.Provider>;
}
