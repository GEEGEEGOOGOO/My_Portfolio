import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MODES = [
  { id: "SYSTEMS", label: "SYSTEMS", stat: "35K+ USERS", note: "Distributed cache & CDN routing" },
  { id: "VOICE", label: "VOICE", stat: "<800ms", note: "Realtime STT → LLM → TTS stream" },
  { id: "GRAPH", label: "GRAPH", stat: "GraphRAG", note: "Knowledge graph entity traversal" },
  { id: "SCALE", label: "SCALE", stat: "18% CPU", note: "Optimized from 64% under load" }
];

export default function Editorial3D() {
  const [activeMode, setActiveMode] = useState("SYSTEMS");
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 140, damping: 20 });
  const sy = useSpring(my, { stiffness: 140, damping: 20 });

  const rotateY = useTransform(sx, [-0.5, 0.5], [-16, 16]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [16, -16]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  const currentMode = MODES.find((m) => m.id === activeMode) || MODES[0];

  return (
    <motion.div
      className="editorial-3d-card"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="card-ambient-glow" />

      {/* Card Header */}
      <div className="card-header-bar">
        <div className="window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="card-tagline">AI // FULL-STACK // PRODUCTION</span>
      </div>

      {/* 3D Visual Centerpiece */}
      <div className="scene-viewport" aria-hidden="true">
        <div className="cube-wrapper">
          <div className="type-cube">
            <div className="cube-face face-front">AI</div>
            <div className="cube-face face-back">UX</div>
            <div className="cube-face face-right">API</div>
            <div className="cube-face face-left">DB</div>
            <div className="cube-face face-top">RAG</div>
            <div className="cube-face face-bottom">SCALE</div>
          </div>
        </div>
      </div>

      {/* Dynamic Content Display */}
      <div className="card-info-pane">
        <div className="mode-badge-row">
          <span className="status-live-dot" />
          <span className="active-mode-title">{currentMode.label}</span>
          <span className="mode-stat">{currentMode.stat}</span>
        </div>
        <p className="mode-description">{currentMode.note}</p>
      </div>

      {/* Mode Switcher Buttons */}
      <div className="mode-controls">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActiveMode(m.id)}
            className={`mode-btn${activeMode === m.id ? " active" : ""}`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
