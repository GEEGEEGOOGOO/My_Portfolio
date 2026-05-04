import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Editorial3D() {
  const [word, setWord] = useState("SYSTEMS");
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 160, damping: 18 });
  const sy = useSpring(my, { stiffness: 160, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [14, -14]);

  function move(e) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function reset() { mx.set(0); my.set(0); }

  return (
    <motion.div className="editorial-3d" style={{ rotateX, rotateY }} onMouseMove={move} onMouseLeave={reset} initial={{ opacity: 0, y: 28, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, delay: 0.15 }}>
      <div className="poster-noise" />
      <div className="poster-number">AI/UX<br/>OPS</div>
      <div className="rotating-object" aria-hidden="true">
        <div className="type-cube">
          <div className="cube-face face-front">AI</div>
          <div className="cube-face face-back">UX</div>
          <div className="cube-face face-right">API</div>
          <div className="cube-face face-left">DB</div>
          <div className="cube-face face-top">RAG</div>
          <div className="cube-face face-bottom">OPS</div>
        </div>
      </div>
      <div className="poster-word">{word}</div>
      <div className="poster-controls">
        {["SYSTEMS", "VOICE", "GRAPH", "SCALE"].map((item) => (
          <button key={item} onClick={() => setWord(item)} className={word === item ? "active" : ""}>{item}</button>
        ))}
      </div>
    </motion.div>
  );
}
