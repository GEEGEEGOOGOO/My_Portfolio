import { useState } from "react";
import { Accordion } from "./components/ui/Accordion";
import { faqs, metrics, profile, projects, stackGroups } from "./data/portfolio";
import "./styles.css";

const processSteps = [
  {
    num: "01",
    title: "Frame",
    body: "Break the requirement down to the decision that actually matters, then agree on what a good outcome measures like before any code exists."
  },
  {
    num: "02",
    title: "Shape",
    body: "Interface architecture, layout logic, component behaviour, and the hierarchy of what a user should notice first, second, and never."
  },
  {
    num: "03",
    title: "Build",
    body: "Frontend, backend, APIs, database flow, AI pipeline wiring, and deployment — kept in one head so the seams stay honest."
  },
  {
    num: "04",
    title: "Tune",
    body: "Caching, CDN, request-flow cleanup, lazy loading, and diagnosing the production issues nobody saw in staging."
  }
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
          background: `radial-gradient(320px circle at ${navSpot.x}px ${navSpot.y}px, rgba(109,95,249,0.12), transparent 68%)`
        }}
      />
      <nav className="nav">
        <a href="#top" className="brand">
          <span className="brand-name">Shashank Kumar</span>
          <span className="brand-title">Product Engineer</span>
        </a>
        <div className="nav-links">
          <a href="#work">work</a>
          <a href="#process">process</a>
          <a href="#stack">stack</a>
          <a href="#notes">notes</a>
          <a href="#contact" className="nav-contact">contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-grid">
        <div className="hero-left">
          <h1>Product engineering for systems that have to work in production.</h1>
        </div>
        <div className="hero-right">
          <p className="hero-manifesto">{profile.manifesto}</p>
          <div className="hero-availability">
            <span className="status-dot" />
            <span>{profile.availabilityNote}</span>
          </div>
        </div>
      </div>
      <div className="hero-actions">
        <a href="#work" className="btn-primary">Selected work</a>
        <a href="#contact" className="btn-outline">Get in touch</a>
      </div>
    </section>
  );
}

function MetricsStrip() {
  return (
    <section className="metrics-section">
      <div className="metrics-grid">
        {metrics.map((item) => (
          <div className="metric-item" key={item.label}>
            <span className="metric-value">{item.value}</span>
            <span className="metric-label">{item.label}</span>
            <span className="metric-note">{item.note}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="section-header-row">
        <h2>Selected work</h2>
        <span className="meta-text">2023 — 2026 · {projects.length} projects</span>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-row"
            key={project.title}
          >
            <div className="project-grid">
              <div className="project-left">
                <div className="project-category-row">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category"> · {project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-impact">{project.impact}</p>
              </div>
              <div className="project-right">
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
        <div className="hairline-divider" />
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="two-column-layout">
        <div className="column-left">
          <h2>How the work happens</h2>
          <p className="section-subcopy">
            Same four moves on every project, whether it ships to eight thousand people or eight.
          </p>
        </div>
        <div className="column-right">
          <div className="process-rows">
            {processSteps.map((step) => (
              <div className="process-row" key={step.num}>
                <div className="process-row-left">
                  <span className="process-number">{step.num}</span>
                  <span className="process-title">{step.title}</span>
                </div>
                <div className="process-row-right">
                  <p>{step.body}</p>
                </div>
              </div>
            ))}
            <div className="hairline-divider" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section id="stack" className="section stack-section">
      <h2>Tools I reach for</h2>
      <div className="stack-grid">
        {stackGroups.map((group) => (
          <div className="stack-group" key={group.label}>
            <div className="stack-group-header">
              <span className="stack-group-label">{group.label}</span>
            </div>
            <ul className="stack-group-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section id="notes" className="section notes-section">
      <div className="two-column-layout">
        <div className="column-left">
          <h2>Notes for hiring teams</h2>
        </div>
        <div className="column-right">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-grid">
        <div className="contact-left">
          <span className="contact-label">CONTACT</span>
          <a href={`mailto:${profile.email}`} className="contact-email">
            {profile.email}
          </a>
        </div>
        <div className="contact-right">
          <a href={profile.github} target="_blank" rel="noreferrer" className="contact-meta-link">
            GitHub ↗
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-meta-link">
            LinkedIn ↗
          </a>
          <span className="contact-phone">{profile.phone}</span>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <MetricsStrip />
        <Work />
        <Process />
        <Stack />
        <Notes />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <span>© {new Date().getFullYear()} Shashank Kumar</span>
          <span>Bengaluru, India</span>
        </div>
      </footer>
    </div>
  );
}
