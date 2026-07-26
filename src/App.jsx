import { useState } from "react";
import { Accordion } from "./components/ui/Accordion";
import { faqs, metrics, profile, projects, skills } from "./data/portfolio";
import "./styles.css";

const method = [
  ["01", "Think", "Requirement breakdown, product logic, user-flow decisions, and success metrics."],
  ["02", "Design", "Interface architecture, layout logic, component behavior, and interaction hierarchy."],
  ["03", "Build", "Frontend, backend, APIs, database flows, AI pipeline wiring, and deployment."],
  ["04", "Optimize", "Caching, CDN, request-flow refinements, lazy loading, and production issue diagnosis."]
];

function Navbar() {
  const [navSpot, setNavSpot] = useState({ active: false, x: 0, y: 0 });

  const onNavMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setNavSpot({
      active: true,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const onNavLeave = () => setNavSpot((s) => ({ ...s, active: false }));

  return (
    <header className="site-header" onMouseMove={onNavMove} onMouseLeave={onNavLeave}>
      <div
        className={`nav-spotlight${navSpot.active ? " active" : ""}`}
        style={{
          background: `radial-gradient(280px circle at ${navSpot.x}px ${navSpot.y}px, rgba(139,92,246,.22), rgba(34,211,201,.1) 45%, transparent 70%)`
        }}
      />
      <nav className="nav">
        <a href="#top" className="brand">
          <span className="brand-badge">SK</span>
          Shashank Kumar
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#work">Method</a>
          <a href="#stack">Stack</a>
          <a href="#faq">FAQ</a>
          <a href="#contact" className="nav-contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="section hero">
      <p className="kicker">AI-Augmented Product Engineer</p>
      <h1>
        Building systems that{" "}
        <span className="gradient-text">think, speak,</span> connect dots, and scale.
      </h1>
      <p className="hero-subtitle">{profile.manifesto}</p>
      <div className="hero-actions">
        <a className="btn-primary" href="#projects">See Work →</a>
        <a className="btn-outline" href="#contact">Contact</a>
      </div>
      <div className="metric-grid">
        {metrics.map((item) => (
          <article className="metric-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="work-label">WORK</div>
      {projects.map((project) => (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="case-row"
          key={project.name}
        >
          <div className="case-number">{project.number}</div>
          <div>
            <p className="case-category">{project.category}</p>
            <h2 className="case-title">{project.title}</h2>
            <div className="case-impact">{project.impact}</div>
          </div>
          <div className="case-panel">
            <p>{project.description}</p>
            <div className="tag-row">
              {project.stack.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section">
      <p className="kicker">Method</p>
      <div className="section-head">
        <h2>From idea to shipped system.</h2>
      </div>
      <div className="method-grid">
        {method.map(([num, title, body]) => (
          <article className="method-card" key={title}>
            <span>{num}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stack() {
  const skillsRow1 = [...skills, ...skills];
  const skillsRow2 = [...skills].reverse().concat([...skills].reverse());

  return (
    <section id="stack" className="section stack-section">
      <div className="stack-head">
        <p className="kicker">Stack</p>
        <div className="section-head">
          <h2>AI product builder toolkit.</h2>
        </div>
      </div>
      <div className="marquee-wrap">
        <div className="marquee-row left">
          {skillsRow1.map((skill, index) => (
            <span key={`r1-${index}`} className="skill-pill">{skill}</span>
          ))}
        </div>
        <div className="marquee-row right">
          {skillsRow2.map((skill, index) => (
            <span key={`r2-${index}`} className="skill-pill gradient">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <p className="kicker">FAQ</p>
      <div className="section-head">
        <h2>Recruiter notes.</h2>
      </div>
      <Accordion items={faqs} />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="kicker">Contact</p>
      <div className="section-head">
        <h2>Let's build AI products with taste and speed.</h2>
      </div>
      <div className="contact-panel">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
        <span className="contact-phone">{profile.phone}</span>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <div className="orb orb-purple" />
      <div className="orb orb-teal" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Work />
        <Stack />
        <FAQ />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Shashank Kumar</span>
      </footer>
    </div>
  );
}
