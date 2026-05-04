export const profile = {
  email: "shashank181002@gmail.com",
  phone: "+91-8310594471",
  github: "https://github.com/GEEGEEGOOGOO",
  linkedin: "https://linkedin.com/in/shashank1810",
  location: "India · Remote-friendly",
  manifesto: "Product thinking, system design, UI/UX judgment, backend flow, and AI-assisted execution — compressed into one builder."
};

export const metrics = [
  { value: "35K+", label: "Registered users", note: "SAFAR production platform" },
  { value: "8K+", label: "Active users", note: "Real product usage" },
  { value: "437GB", label: "Bandwidth diagnosed", note: "Performance work" },
  { value: "15–20%", label: "CPU after optimization", note: "Down from around 64%" }
];

export const projects = [
  {
    number: "01",
    icon: "Boxes",
    name: "SAFAR",
    category: "Production Platform",
    title: "Scaling a student productivity system to 35K+ users.",
    impact: "35K+ registered users · 8K+ active users",
    description: "Owned end-to-end product execution for a live student platform, from feature workflows and UI/UX planning to backend/API decisions, database flows, performance improvements, and deployment coordination.",
    stack: ["React", "Node", "Express", "MongoDB", "Redis", "Cloudflare", "Vite"],
    link: "https://safar.parmarssc.in",
    splineUrl: "", // Add your public Spline URL here
    motionProps: {
      initial: { opacity: 0, x: -50, scale: 0.95 },
      whileInView: { opacity: 1, x: 0, scale: 1 },
      whileHover: { scale: 1.02, rotateY: 2 }
    }
  },
  {
    number: "02",
    icon: "Mic2",
    name: "Voice Plateau",
    category: "Voice AI Platform",
    title: "Designing a realtime voice-agent pipeline.",
    impact: "STT → LLM → TTS · WebSocket streaming · Real-time captions",
    description: "Full-stack voice AI app with JWT auth, agent management, provider selection, WebSocket support, streamed audio chunks, and transcript highlighting.",
    stack: ["React", "FastAPI", "MongoDB", "WebSockets", "Docker", "Groq", "ElevenLabs"],
    link: "https://github.com/GEEGEEGOOGOO/Voice_Plateau",
    splineUrl: "", // Add your public Spline URL here
    motionProps: {
      initial: { opacity: 0, y: 50, scale: 0.9 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      whileHover: { y: -8, boxShadow: "8px 8px 0 var(--black)" }
    }
  },
  {
    number: "03",
    icon: "Network",
    name: "LangGraph Research Assistant",
    category: "GraphRAG / Research AI",
    title: "Turning scattered documents into a graph brain.",
    impact: "Knowledge graph · Multi-hop retrieval · D3 visualization",
    description: "GraphRAG system that reads documents, extracts entities and relationships, builds a persistent knowledge graph, and synthesizes answers through graph traversal.",
    stack: ["LangGraph", "Gemini", "NetworkX", "React", "D3.js", "Python"],
    link: "https://github.com/GEEGEEGOOGOO/LangGraph-Research-Assistant",
    splineUrl: "", // Add your public Spline URL here
    motionProps: {
      initial: { opacity: 0, scale: 0.8, rotate: -5 },
      whileInView: { opacity: 1, scale: 1, rotate: 0 },
      whileHover: { scale: 1.03, rotate: 1 }
    }
  },
  {
    number: "04",
    icon: "Cpu",
    name: "Paracletus / Adilectus",
    category: "Desktop AI Assistant",
    title: "A desktop AI assistant with voice, vision, and documents.",
    impact: "Local Whisper · Gemini Vision · Groq routing · PDF analysis",
    description: "Desktop AI assistant for voice queries, smart chat, screen analysis, code mode, and document understanding with explicit vision-mode routing.",
    stack: ["Electron", "Node", "Gemini", "Groq", "Whisper", "WebSockets"],
    link: "https://github.com/GEEGEEGOOGOO/Paracletus",
    splineUrl: "", // Add your public Spline URL here
    motionProps: {
      initial: { opacity: 0, x: 50 },
      whileInView: { opacity: 1, x: 0 },
      whileHover: { scale: 1.02, x: 5 }
    }
  }
];

export const skills = [
  "System Design",
  "UI/UX Planning",
  "Prompt Engineering",
  "AI Orchestration",
  "Knowledge Graph Design",
  "RAG Workflows",
  "Product Execution",
  "Voice AI Architecture",
  "Multi-Modal Data Strategy"
];

export const faqs = [
  { q: "What is the positioning?", a: "AI-augmented product engineer: a builder who can own product logic, UI/UX planning, backend architecture, AI orchestration, and deployment." },
  { q: "What is the strongest proof point?", a: "SAFAR: production platform serving 35K+ registered users and 8K+ active users, with real performance and infrastructure work." },
  { q: "What systems has Shashank built?", a: "Voice AI agents, GraphRAG assistants, desktop AI copilots, semantic retrieval flows, and high-scale student productivity systems." },
  { q: "What roles fit best?", a: "Product Engineer, Full-Stack Engineer, AI Engineer, Associate Software Engineer, or startup technical operator roles." }
];
