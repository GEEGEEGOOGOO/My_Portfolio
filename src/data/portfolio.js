export const profile = {
  name: "Shashank Kumar",
  title: "Product Engineer",
  email: "shashank181002@gmail.com",
  phone: "+91 83105 94471",
  github: "https://github.com/GEEGEEGOOGOO",
  linkedin: "https://linkedin.com/in/shashank1810",
  location: "Bengaluru, India",
  manifesto: "I build the product, the interface, and the infrastructure underneath it — then stay on to find out what breaks at scale.",
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
    body: "Break the requirement down to the decision that actually matters, then agree on what a good outcome measures like before any code exists."
  },
  {
    num: "02",
    title: "Shape & Architect",
    body: "Interface architecture, layout logic, component behaviour, and the hierarchy of what a user should notice first, second, and never."
  },
  {
    num: "03",
    title: "Build & Integrate",
    body: "Frontend, backend, APIs, database flow, AI pipeline wiring, and deployment — kept in one head so the seams stay honest."
  },
  {
    num: "04",
    title: "Tune & Scale",
    body: "Caching, CDN, request-flow cleanup, lazy loading, and diagnosing the production issues nobody saw in staging."
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
    a: "An AI-augmented product engineer: I own the whole line — product logic, interface decisions, backend flow, AI orchestration, and the deploy. Most useful on fast-moving teams where one person has to hold the thread end-to-end."
  },
  {
    q: "What is the strongest proof point?",
    a: "SAFAR: A live student productivity platform serving 35,000+ registered accounts and 8,000+ monthly active users, where I handled feature workflows, database and API decisions, and the performance work that took CPU from ~64% to 15–20%."
  },
  {
    q: "How do you actually use AI in the work?",
    a: "As reliable infrastructure, not decorative gimmicks. Retrieval pipelines, knowledge graphs, realtime voice loops, and vision routing — built with explicit fallbacks and error boundaries, because model output is a network dependency like any other."
  },
  {
    q: "What roles are the right fit?",
    a: "Product Engineer, Full-Stack Engineer, AI Engineer, or the first technical operator at a startup that needs shipping speed, high craft, and cross-stack execution."
  }
];
