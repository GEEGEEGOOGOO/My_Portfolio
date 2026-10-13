export const profile = {
  name: "Shashank Kumar",
  title: "Product Engineer",
  email: "shashank181002@gmail.com",
  phone: "+91 83105 94471",
  github: "https://github.com/GEEGEEGOOGOO",
  linkedin: "https://linkedin.com/in/shashank1810",
  location: "Bengaluru, India",
  manifesto: "I build interfaces, backend services, and AI workflows. My work includes SAFAR, a student platform serving 35,000+ registered users.",
  availabilityNote: "Open to product engineering roles"
};

export const metrics = [
  { value: "35K+", label: "Registered users", note: "SAFAR, live in production" },
  { value: "8K+", label: "Monthly active", note: "Sustained high engagement" },
  { value: "437 GB", label: "Bandwidth saved", note: "Traced, diagnosed & optimized" },
  { value: "64% → 18%", label: "CPU after tuning", note: "Caching, CDN & query refactoring" }
];

export const projects = [
  {
    image: { src: "/images/safar.png", alt: "SAFAR student platform homepage with study tools and dashboard navigation", caption: "SAFAR, the student platform I work on", width: 1440, height: 960 },
    number: "01",
    category: "Production Platform",
    title: "Scaling a student productivity system to 35K users.",
    impact: "35,000+ registered · 8,000+ active · Live",
    description: "Owned end-to-end execution on a live platform: feature workflows, interface planning, backend and API decisions, database flow, and the performance work that kept it stable as usage grew.",
    stack: ["React", "Node", "Express", "MongoDB", "Redis", "Cloudflare", "Vite"],
    link: "https://safar.parmarssc.in",
    highlight: "Real-time traffic scaling & 64% → 18% CPU reduction"
  },
  {
    image: { src: "/images/voice-plateau.png", alt: "Voice Plateau agent dashboard showing three configured agents, active sessions, and API status", caption: "Manage agents, sessions, and provider connections", width: 1024, height: 485 },
    number: "02",
    category: "Voice AI Platform",
    title: "A realtime voice agent pipeline with visible latency budgets.",
    impact: "STT → LLM → TTS · WebSocket streaming · Live captions",
    description: "Full-stack voice application with JWT auth, agent management, provider switching, chunked audio streaming, and transcript highlighting synced to playback.",
    stack: ["React", "FastAPI", "MongoDB", "WebSockets", "Docker", "Groq", "ElevenLabs"],
    link: "https://github.com/GEEGEEGOOGOO/Voice_Plateau",
    highlight: "Sub-second voice turn latency & audio chunk stream"
  },
  {
    image: { src: "/images/graph-research.png", alt: "Graph research assistant terminal showing a RAG query and the retrieved response", caption: "A real query and retrieval response from the research tool", width: 1513, height: 304 },
    number: "03",
    category: "GraphRAG / Knowledge AI",
    title: "Turning scattered documents into a traversable graph brain.",
    impact: "Entity extraction · Multi-hop retrieval · D3 graph view",
    description: "A research assistant that reads source documents, extracts entities and relationships into a persistent knowledge graph, then answers by walking the graph instead of stuffing a context window.",
    stack: ["LangGraph", "Gemini", "NetworkX", "React", "D3.js", "Python"],
    link: "https://github.com/GEEGEEGOOGOO/LangGraph-Research-Assistant",
    highlight: "Multi-hop graph traversal over static vector similarity"
  },
  {
    number: "04",
    category: "Desktop AI Assistant",
    title: "A desktop assistant that reads the screen, not just the prompt.",
    impact: "Local Whisper · Vision routing · PDF analysis",
    description: "An Electron assistant handling voice queries, screen analysis, code mode, and document understanding, with explicit routing between local and hosted models depending on the task.",
    stack: ["Electron", "Node", "Gemini", "Groq", "Whisper", "WebSockets"],
    link: "https://github.com/GEEGEEGOOGOO/Paracletus",
    highlight: "Decoupled voice capture with explicit vision triggering"
  }
];

export const processSteps = [
  {
    num: "01",
    title: "Think & Frame",
    body: "I start by understanding the problem, the people using the product, and what a useful outcome looks like."
  },
  {
    num: "02",
    title: "Shape & Architect",
    body: "I plan the interface, data flow, and service boundaries before committing to an implementation."
  },
  {
    num: "03",
    title: "Build & Integrate",
    body: "I build the frontend and backend, connect the AI workflows, and handle deployment."
  },
  {
    num: "04",
    title: "Tune & Scale",
    body: "I look at production behaviour, investigate slow requests, and improve caching, queries, and resource use."
  }
];

export const skillsMarqueeRow1 = [
  "React", "Node.js", "Express", "FastAPI", "Gemini 2.5",
  "LangGraph", "GraphRAG", "Voice AI", "Docker", "MongoDB",
  "Redis", "Cloudflare", "Electron", "D3.js", "Whisper", "Vite"
];

export const skillsMarqueeRow2 = [
  "System Architecture", "UI/UX Craft", "Prompt Engineering", "WebSocket Streaming",
  "Knowledge Graphs", "Performance Profiling", "Multi-Modal Routing", "State Machines",
  "CDN Optimization", "Full-Stack Ownership", "API Design", "Distributed Caching"
];

export const stackGroups = [
  {
    label: "Product",
    items: [
      "Requirement breakdown",
      "UX and flow design",
      "Interface architecture",
      "Scope and sequencing"
    ]
  },
  {
    label: "Engineering",
    items: [
      "React · Vite",
      "Node · Express · FastAPI",
      "MongoDB · Redis",
      "Docker · Cloudflare"
    ]
  },
  {
    label: "AI systems",
    items: [
      "RAG and GraphRAG",
      "LangGraph orchestration",
      "Prompt and eval design",
      "Realtime voice pipelines"
    ]
  },
  {
    label: "Operations",
    items: [
      "Performance profiling",
      "Deployment coordination",
      "Incident diagnosis",
      "Cost and bandwidth tuning"
    ]
  }
];

export const faqs = [
  {
    q: "What kind of engineer is this?",
    a: "I work across product decisions, interfaces, backend services, AI workflows, and deployment. I am interested in teams where I can take a product from an idea to production."
  },
  {
    q: "What is the strongest proof point?",
    a: "SAFAR: A live student productivity platform serving 35,000+ registered accounts and 8,000+ monthly active users, where I handled feature workflows, database and API decisions, and the performance work that took CPU from ~64% to 15–20%."
  },
  {
    q: "How do you actually use AI in the work?",
    a: "As reliable infrastructure, not decorative gimmicks. I build retrieval pipelines, knowledge graphs, realtime voice workflows, and vision tools with fallbacks and clear error handling."
  },
  {
    q: "What roles are the right fit?",
    a: "Product Engineer, Full-Stack Engineer, AI Engineer, or the first technical operator at a startup that needs shipping speed, high craft, and cross-stack execution."
  }
];
