# Implementation Plan — Port Portfolio.dc.html redesign into the React app

## Goal
Update the Vite/React portfolio in `src/` so it matches the current Claude Design mockup
(project a31a93bc-93e5-4d58-859c-679385f5f11e, file `Portfolio.dc.html`). The local copy at
`design-mockup/Portfolio.dc.html` is STALE — do not use it as the source of truth. Follow the
spec below, which is transcribed directly from the current remote version.

## Files to change
- `src/styles.css`      — main work: new tokens, delete marquee/orb/gradient styles, new section styles
- `src/App.jsx`         — section structure, ids, nav labels, hero/stack/contact markup
- `src/data/portfolio.js` — rewritten copy; `skills` array replaced by `stackGroups`
- `src/components/ui/Accordion.jsx` — restyle to the new "+ / rotate-45" hairline pattern
- `index.html`          — `theme-color` and inline body background to `#0c0e13`

Do NOT touch: `design-mockup/`, `dist/`, `node_modules/`, `server/`, `package.json`.
Do not add or remove npm dependencies. Do not run `npm install`.

## Design tokens (replace the current ones in :root)
- bg `#0c0e13`, text `#e9eaee`, heading white `#f4f5f7`
- accent `#6d5ff9`; muted accent for numbers `#8b7dff`; status green `#22c9a6`
- hairline `rgba(255,255,255,.09)`; header border `rgba(255,255,255,.07)`
- body copy `rgba(233,234,238,.55–.62)`; mono meta `rgba(233,234,238,.38–.45)`
- Fonts: Space Grotesk (500/600/700) for headings, Inter (400/500/600) for body,
  JetBrains Mono (400/500) for meta/labels. Add JetBrains Mono to the @import in styles.css.
- Content max-width 1180px; horizontal padding `clamp(20px,4vw,44px)`; section padding
  `clamp(64px,9vw,104px)` top.
- `::selection{background:#6d5ff9;color:#fff}` and a
  `@media (prefers-reduced-motion:reduce){*{transition:none!important}}` block.

REMOVE entirely: purple/teal gradient text, gradient buttons and their box-shadows, the
floating `.orb` elements and `floatOrb` keyframes, `.marquee-*` rows and `marquee-l/r`
keyframes, `.brand-badge`, `.metric-card` card chrome, `.skill-pill`.

## Section-by-section spec

### 1. Header / nav
- Sticky, `backdrop-filter: blur(16px)`, `background: rgba(12,14,19,.8)`, bottom hairline.
- Brand: "Shashank Kumar" (Space Grotesk 600, 15px) + "Product Engineer"
  (JetBrains Mono 11px, 42% opacity). No SK badge.
- Links, lowercase JetBrains Mono 12px: work / process / stack / notes / contact.
  `contact` is full-opacity with a 1px `#6d5ff9` bottom border.
- Keep the mouse-follow spotlight, but change it to a single-colour radial:
  `radial-gradient(320px circle at Xpx Ypx, <accent>1f, transparent 68%)`, opacity 0→1
  with `transition: opacity .4s ease`.

### 2. Hero (`id="top"`)
Two-column grid, `repeat(auto-fit,minmax(280px,1fr))`, `align-items:end`, gap `clamp(28px,5vw,72px)`.
- Left (spans 2 cols): h1, Space Grotesk **weight 500**, `clamp(34px,5.4vw,64px)`,
  line-height 1.08, letter-spacing -.025em, `max-width:16ch`, text:
  "Product engineering for systems that have to work in production."
  No kicker, no gradient span.
- Right column: manifesto paragraph (15.5px, line-height 1.62, `max-width:38ch`):
  "I build the product, the interface, and the infrastructure underneath it — then stay on
  to find out what breaks at scale."
  Below it, an availability line in JetBrains Mono 11.5px preceded by a 6px `#22c9a6` dot
  with `box-shadow:0 0 0 3px rgba(34,201,166,.16)`, text: "Open to product engineering roles".
- Buttons below the grid: "Selected work" → `#work`, solid `#6d5ff9`, radius 6px,
  padding 12px 22px, hover `#7c6ffb`. "Get in touch" → `#contact`, transparent with
  `1px solid rgba(255,255,255,.14)`, hover border `rgba(255,255,255,.3)`. No shadows.

### 3. Metrics strip (its own section, directly under hero, no top padding)
Grid `repeat(auto-fit,minmax(170px,1fr))`, hairline border-top AND border-bottom,
padding `clamp(24px,3.5vw,34px) 0`. No cards, no backgrounds.
Each item: value (Space Grotesk 500, `clamp(26px,3.2vw,34px)`, `#f4f5f7`), label (13.5px,
78% opacity), note (JetBrains Mono 11px, 40% opacity).
New values:
1. `35K+` / Registered users / SAFAR, in production
2. `8K+` / Monthly active / Sustained usage
3. `437 GB` / Bandwidth diagnosed / Traced and reduced
4. `64% → 18%` / CPU after tuning / Caching, CDN, lazy loads

### 4. Selected work (`id="work"`)
Header row: h2 "Selected work" (Space Grotesk 500, `clamp(22px,2.6vw,28px)`) on the left,
JetBrains Mono 11.5px meta on the right: `2023 — 2026 · 4 projects` (derive the count from
projects.length). Remove the giant ghost "WORK" wordmark.
Each project is an `<a>` with `border-top` hairline, padding `clamp(24px,3.2vw,32px) 0`,
hover `background: rgba(255,255,255,.018)`. Close the list with a final hairline div.
Inner grid `repeat(auto-fit,minmax(260px,1fr))`, `align-items:start`:
- Left: mono row of number (`#8b7dff`) + category; h3 (Space Grotesk 500,
  `clamp(19px,2.2vw,25px)`, `max-width:20ch`); impact line in JetBrains Mono 11.5px.
- Right: description (14.5px, line-height 1.66, `max-width:56ch`) and stack tags rendered
  as PLAIN mono text at 11px/45% opacity with `gap:8px 18px` — not pills, no borders.

Updated project copy in `src/data/portfolio.js`:
01 · Production platform · "Scaling a student productivity system to 35K users."
   impact: "35,000+ registered · 8,000+ active · Live"
   desc: "Owned end-to-end execution on a live platform: feature workflows, interface
   planning, backend and API decisions, database flow, and the performance work that kept
   it stable as usage grew."
   stack: React, Node, Express, MongoDB, Redis, Cloudflare — link https://safar.parmarssc.in
02 · Voice AI · "A realtime voice agent pipeline with visible latency budgets."
   impact: "STT → LLM → TTS · WebSocket streaming · Live captions"
   desc: "Full-stack voice application with JWT auth, agent management, provider switching,
   chunked audio streaming, and transcript highlighting synced to playback."
   stack: React, FastAPI, MongoDB, WebSockets, Docker, Groq
   link https://github.com/GEEGEEGOOGOO/Voice_Plateau
03 · GraphRAG · "Turning scattered documents into a traversable graph."
   impact: "Entity extraction · Multi-hop retrieval · D3 graph view"
   desc: "A research assistant that reads source documents, extracts entities and
   relationships into a persistent knowledge graph, then answers by walking the graph
   instead of stuffing a context window."
   stack: LangGraph, Gemini, NetworkX, React, D3.js
   link https://github.com/GEEGEEGOOGOO/LangGraph-Research-Assistant
04 · Desktop application · "A desktop assistant that reads the screen, not just the prompt."
   impact: "Local Whisper · Vision routing · PDF analysis"
   desc: "An Electron assistant handling voice queries, screen analysis, code mode, and
   document understanding, with explicit routing between local and hosted models depending
   on the task."
   stack: Electron, Node, Gemini, Groq, Whisper
   link https://github.com/GEEGEEGOOGOO/Paracletus
The `icon`, `splineUrl`, and `motionProps` fields are unused by the new design — leave them
in place or drop them, but do not introduce framer-motion or Spline usage.

### 5. Process (`id="process"`, replaces the old `#work` Method section)
Two-column: left is h2 "How the work happens" + 14.5px sub-copy (`max-width:34ch`):
"Same four moves on every project, whether it ships to eight thousand people or eight."
Right column spans 2 and is a stack of hairline-separated rows, each a grid of
`minmax(0,140px) minmax(0,1fr)`, padding 22px 0, ending with a closing hairline.
Row left: mono number in `#8b7dff` + Space Grotesk 500 16px title. Row right: body copy,
`max-width:58ch`. Replace the current Think/Design/Build/Optimize cards with:
01 Frame — "Break the requirement down to the decision that actually matters, then agree on
   what a good outcome measures like before any code exists."
02 Shape — "Interface architecture, layout logic, component behaviour, and the hierarchy of
   what a user should notice first, second, and never."
03 Build — "Frontend, backend, APIs, database flow, AI pipeline wiring, and deployment —
   kept in one head so the seams stay honest."
04 Tune — "Caching, CDN, request-flow cleanup, lazy loading, and diagnosing the production
   issues nobody saw in staging."

### 6. Stack (`id="stack"`)
DELETE the marquee entirely. h2 "Tools I reach for", then a grid
`repeat(auto-fit,minmax(220px,1fr))` of four groups. Each group: an uppercase mono label
(11px, letter-spacing .06em, 38% opacity) with a hairline border-bottom and 12px bottom
padding, then plain 14.5px items at 72% opacity, line-height 1.5, stacked with 12px gaps.
Replace the `skills` export with `stackGroups`:
- Product — Requirement breakdown / UX and flow design / Interface architecture / Scope and sequencing
- Engineering — React · Vite / Node · Express · FastAPI / MongoDB · Redis / Docker · Cloudflare
- AI systems — RAG and GraphRAG / LangGraph orchestration / Prompt and eval design / Realtime voice pipelines
- Operations — Performance profiling / Deployment coordination / Incident diagnosis / Cost and bandwidth tuning

### 7. Notes for hiring teams (`id="notes"`, replaces `#faq`)
Two-column: h2 "Notes for hiring teams" left; accordion spans 2 columns on the right.
Restyle `Accordion.jsx`: each item has a hairline border-top; the trigger is a full-width
borderless button, Inter 15.5px weight 500, padding 20px 0, `justify-content:space-between`,
hover colour `#fff`. The right-hand mark is a JetBrains Mono "+" at 15px that rotates 45deg
and turns accent-coloured when open, `transition: transform .22s cubic-bezier(.4,0,.2,1),
color .22s ease`. Answer paragraph: 14.5px, line-height 1.68, 58% opacity, `max-width:62ch`,
22px bottom padding. Only one item open at a time; **item 0 is open by default**; clicking
the open item closes it. Close the list with a trailing hairline.
Replace the four FAQ entries with:
- "What kind of engineer is this?" — "A product engineer: I own the whole line — product
  logic, interface decisions, backend flow, AI orchestration, and the deploy. Most useful on
  small teams where one person has to hold the thread end to end."
- "What is the strongest proof point?" — "SAFAR. A live student platform with 35,000+
  registered accounts and 8,000+ active users, where I handled feature workflows, database
  and API decisions, and the performance work that took CPU from ~64% to 15–20%."
- "How do you actually use AI in the work?" — "As infrastructure, not decoration. Retrieval
  pipelines, knowledge graphs, realtime voice loops, and vision routing — built with explicit
  fallbacks, because model output is a dependency like any other."
- "What roles are the right fit?" — "Product Engineer, Full-Stack Engineer, AI Engineer, or
  the first technical hire at a startup that needs shipping speed more than specialization."

### 8. Contact (`id="contact"`)
Two-column, `align-items:end`. Left (spans 2): uppercase mono "Contact" label, then the
email as a huge mailto link — Space Grotesk 500, `clamp(24px,4vw,44px)`, letter-spacing
-.02em, `border-bottom:1px solid rgba(109,95,249,.6)` (hover → solid `#6d5ff9`, colour #fff),
`word-break:break-word`. Right: mono 12.5px column — "GitHub ↗", "LinkedIn ↗", and the phone
number rendered as `+91 83105 94471` (note the spacing change from the current `+91-8310594471`).
Remove the old contact panel chrome.

### 9. Footer
Hairline top border; flex row inside the 1180px container, mono 11.5px at 35% opacity:
`© <current year> Shashank Kumar` on the left, `Bengaluru, India` on the right.

### 10. index.html
Update `<meta name="theme-color">` and the inline `body{background:...}` from `#0b0d12`
to `#0c0e13` so the first paint matches.

## Constraints and gotchas
- The mockup expresses everything as inline styles because of the Claude Design format.
  Do NOT copy inline styles into JSX wholesale — translate them into semantic classes in
  `src/styles.css`, matching how the app is already organised. Keep copy in
  `src/data/portfolio.js`, keep the Accordion as a component.
- The mockup exposes two authorable props: `accent` (default `#6d5ff9`, alternatives
  `#22c9a6`, `#e0755c`, `#5b8def`) and `availabilityNote`. Express `accent` as the
  `--accent` CSS custom property so it can be swapped in one place; `availabilityNote` can
  live as a field on `profile`.
- Every section id changed. Update the nav hrefs and the section ids together, or in-page
  navigation silently breaks.
- `src/components/Editorial3D.jsx` and `src/components/Icon.jsx` may become unused. Leave
  them on disk; just stop importing them if nothing references them.
- Verify responsiveness: the hero, work rows, process rows, and contact all rely on
  `auto-fit`/`minmax` and must collapse cleanly at mobile widths without horizontal scroll.
- Do not delete or regenerate `design-mockup/` or `dist/`.

## Verification
1. `npm run build` must succeed with no errors.
2. Confirm all five nav anchors point at real section ids, the accordion opens/closes with
   item 0 open by default, and the nav spotlight logic still compiles.
3. No unused imports left behind in `App.jsx`.
