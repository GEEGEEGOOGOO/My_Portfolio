export const profile = {
  email: "shashank181002@gmail.com",
  phone: "+91 83105 94471",
  github: "https://github.com/GEEGEEGOOGOO",
  linkedin: "https://linkedin.com/in/shashank1810",
  location: "Bengaluru, India",
  manifesto: "I build the product, the interface, and the infrastructure underneath it — then stay on to find out what breaks at scale.",
  availabilityNote: "Open to product engineering roles"
};

export const metrics = [
  { value: "35K+", label: "Registered users", note: "SAFAR, in production" },
  { value: "8K+", label: "Monthly active", note: "Sustained usage" },
  { value: "437 GB", label: "Bandwidth diagnosed", note: "Traced and reduced" },
  { value: "64% → 18%", label: "CPU after tuning", note: "Caching, CDN, lazy loads" }
];

export const projects = [
  {
    number: "01",
    category: "Production platform",
    title: "Scaling a student productivity system to 35K users.",
    impact: "35,000+ registered · 8,000+ active · Live",
    description: "Owned end-to-end execution on a live platform: feature workflows, interface planning, backend and API decisions, database flow, and the performance work that kept it stable as usage grew.",
    stack: ["React", "Node", "Express", "MongoDB", "Redis", "Cloudflare"],
    link: "https://safar.parmarssc.in"
  },
  {
    number: "02",
    category: "Voice AI",
    title: "A realtime voice agent pipeline with visible latency budgets.",
    impact: "STT → LLM → TTS · WebSocket streaming · Live captions",
    description: "Full-stack voice application with JWT auth, agent management, provider switching, chunked audio streaming, and transcript highlighting synced to playback.",
    stack: ["React", "FastAPI", "MongoDB", "WebSockets", "Docker", "Groq"],
    link: "https://github.com/GEEGEEGOOGOO/Voice_Plateau"
  },
  {
    number: "03",
    category: "GraphRAG",
    title: "Turning scattered documents into a traversable graph.",
    impact: "Entity extraction · Multi-hop retrieval · D3 graph view",
    description: "A research assistant that reads source documents, extracts entities and relationships into a persistent knowledge graph, then answers by walking the graph instead of stuffing a context window.",
    stack: ["LangGraph", "Gemini", "NetworkX", "React", "D3.js"],
    link: "https://github.com/GEEGEEGOOGOO/LangGraph-Research-Assistant"
  },
  {
    number: "04",
    category: "Desktop application",
    title: "A desktop assistant that reads the screen, not just the prompt.",
    impact: "Local Whisper · Vision routing · PDF analysis",
    description: "An Electron assistant handling voice queries, screen analysis, code mode, and document understanding, with explicit routing between local and hosted models depending on the task.",
    stack: ["Electron", "Node", "Gemini", "Groq", "Whisper"],
    link: "https://github.com/GEEGEEGOOGOO/Paracletus"
  }
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
    a: "A product engineer: I own the whole line — product logic, interface decisions, backend flow, AI orchestration, and the deploy. Most useful on small teams where one person has to hold the thread end to end."
  },
  {
    q: "What is the strongest proof point?",
    a: "SAFAR. A live student platform with 35,000+ registered accounts and 8,000+ active users, where I handled feature workflows, database and API decisions, and the performance work that took CPU from ~64% to 15–20%."
  },
  {
    q: "How do you actually use AI in the work?",
    a: "As infrastructure, not decoration. Retrieval pipelines, knowledge graphs, realtime voice loops, and vision routing — built with explicit fallbacks, because model output is a dependency like any other."
  },
  {
    q: "What roles are the right fit?",
    a: "Product Engineer, Full-Stack Engineer, AI Engineer, or the first technical hire at a startup that needs shipping speed more than specialization."
  }
];
