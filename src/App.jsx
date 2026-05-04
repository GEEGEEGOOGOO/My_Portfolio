import { motion } from "framer-motion";
import { Accordion } from "./components/ui/Accordion";
import Editorial3D from "./components/Editorial3D";
import Icon from "./components/Icon";
import { faqs, metrics, profile, projects, skills } from "./data/portfolio";
import Spline from '@splinetool/react-spline';
import "./styles.css";

function Navbar() {
  return (
    <header className="nav-shell">
      <nav className="nav">
        <a href="#top" className="brand">SHASHANK<br/>KUMAR</a>
        <div className="nav-links">
          <a href="#projects">Projects</a><a href="#work">Method</a><a href="#stack">Stack</a><a href="#faq">FAQ</a><a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero section">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
        <p className="kicker">AI-Augmented Product Engineer</p>
        <h1>Building systems that think, speak, connect dots, and scale.</h1>
        <p className="hero-subtitle">{profile.manifesto}</p>
        <div className="hero-actions">
          <a className="btn black" href="#projects">See Work <Icon name="ArrowUpRight" size={18} /></a>
          <a className="btn outline" href="#contact">Contact</a>
        </div>
      </motion.div>
      <Editorial3D />
      <div className="metric-strip">
        {metrics.map((item, index) => (
          <motion.article key={item.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
            <strong>{item.value}</strong><span>{item.label}</span><p>{item.note}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="big-label">WORK</motion.div>
      {projects.map((project, index) => (
        <motion.a href={project.link} target="_blank" rel="noreferrer" className="case-row" key={project.name} 
          initial={project.motionProps?.initial || { opacity: 0, y: 38 }} 
          whileInView={project.motionProps?.whileInView || { opacity: 1, y: 0 }} 
          whileHover={project.motionProps?.whileHover || {}}
          viewport={{ once: true, margin: "-80px" }} 
          transition={{ duration: 0.58, delay: index * 0.04 }}>
          <div className="case-number">{project.number}</div>
          <div className="case-main">
            <p>{project.category}</p>
            <h2>{project.title}</h2>
            <div className="case-impact">{project.impact}</div>
          </div>
          <div className="case-side">
            {project.splineUrl && (
              <div className="spline-container" style={{ height: '220px', width: '100%', marginBottom: '20px', borderRadius: '16px', overflow: 'hidden', border: '2px solid var(--black)', pointerEvents: 'none' }}>
                <Spline scene={project.splineUrl} />
              </div>
            )}
            <p>{project.description}</p>
            <div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
          <Icon name="ArrowUpRight" className="case-arrow" size={30} />
        </motion.a>
      ))}
    </section>
  );
}

function Work() {
  const method = [
    ["01", "Think", "Requirement breakdown, product logic, user-flow decisions, and success metrics."],
    ["02", "Design", "Interface architecture, layout logic, component behavior, and interaction hierarchy."],
    ["03", "Build", "Frontend, backend, APIs, database flows, AI pipeline wiring, and deployment."],
    ["04", "Optimize", "Caching, CDN, request-flow refinements, lazy loading, and production issue diagnosis."]
  ];
  return (
    <section id="work" className="section method-section">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="section-head"><p className="kicker">Method</p><h2>From idea to shipped system.</h2></motion.div>
      <div className="method-grid">
        {method.map(([num, title, body], index) => (
          <motion.article className="method-card" key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
            <span>{num}</span><h3>{title}</h3><p>{body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  const loopSkills1 = [...skills, ...skills]; 
  const loopSkills2 = [...skills].reverse().concat([...skills].reverse());
  const loopSkills3 = [...skills.slice(5), ...skills.slice(0, 5)].concat([...skills.slice(5), ...skills.slice(0, 5)]);

  return (
    <section id="stack" className="section stack-section" style={{ overflow: "hidden", paddingBottom: "120px" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="section-head">
        <p className="kicker">Stack</p><h2>AI Product Builder Toolkit.</h2>
      </motion.div>
      <div className="carousel-container" style={{ display: 'flex', flexDirection: 'column', gap: '32px', overflow: 'hidden', whiteSpace: 'nowrap', width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '20px 0' }}>
        
        {/* Row 1 - Left */}
        <motion.div 
          style={{ display: 'flex', gap: '32px', width: 'max-content' }}
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        >
          {loopSkills1.map((skill, index) => <span key={index} className="skill-pill">{skill}</span>)}
        </motion.div>

        {/* Row 2 - Right */}
        <motion.div 
          style={{ display: 'flex', gap: '32px', width: 'max-content' }}
          animate={{ x: ["-50%", "0%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
        >
          {loopSkills2.map((skill, index) => <span key={index} className="skill-pill">{skill}</span>)}
        </motion.div>

        {/* Row 3 - Left */}
        <motion.div 
          style={{ display: 'flex', gap: '32px', width: 'max-content' }}
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {loopSkills3.map((skill, index) => <span key={index} className="skill-pill">{skill}</span>)}
        </motion.div>

      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="section-head"><p className="kicker">Accordion</p><h2>Recruiter notes.</h2></motion.div>
      <Accordion items={faqs} />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
        <p className="kicker">Contact</p><h2>Let’s build AI products with taste and speed.</h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="contact-panel">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <span>{profile.phone}</span>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main><Hero /><Projects /><Work /><Stack /><FAQ /><Contact /></main>
      <footer><span>© {new Date().getFullYear()} Shashank Kumar</span></footer>
    </>
  );
}
