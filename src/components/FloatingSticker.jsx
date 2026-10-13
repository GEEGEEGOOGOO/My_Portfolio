import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";
import { usePortfolioMotion } from "./MotionPreferences";

const seals = {
  systems: { label: "SAFAR", note: "35K+ USERS", href: "#project-01", rotation: -12, color: "pink" },
  voice: { label: "VOICE AI", note: "REALTIME PIPELINES", href: "#project-02", rotation: 12, color: "yellow" },
  graph: { label: "GRAPH RAG", note: "CONNECTED THINKING", href: "#project-03", rotation: -8, color: "green" }
};
export default function FloatingSticker({ type = "systems", className = "" }) {
  const data = seals[type] || seals.systems;
  const enabled = usePortfolioMotion();
  return (
    <motion.a href={data.href} className={`floating-sticker-wrapper seal-${data.color} ${className}`}
      initial={enabled ? { opacity: 0, y: 45, rotate: data.rotation - 15, scale: 0.85 } : false}
      animate={{ opacity: 1, y: 0, rotate: data.rotation, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 18, delay: type === "voice" ? .2 : .1 }}
      whileHover={enabled ? { scale: 1.08, rotate: 0, zIndex: 12 } : undefined}
      whileFocus={enabled ? { scale: 1.08, rotate: 0, zIndex: 12 } : undefined}
      whileTap={enabled ? { scale: .97 } : undefined}
      aria-label={`Explore ${data.label}: ${data.note}`}>
      <span className="seal-heading">{data.label}<span aria-hidden="true">↗</span></span>
      <ProjectVisual type={type}/>
      <span className="seal-note">{data.note}</span>
    </motion.a>
  );
}
