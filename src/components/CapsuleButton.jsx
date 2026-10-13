import { motion } from "framer-motion";
import { usePortfolioMotion } from "./MotionPreferences";

export default function CapsuleButton({
  children, label, variant = "black", circleColor = "yellow", icon = null,
  href, onClick, className = "", size = "normal", style, ...props
}) {
  const enabled = usePortfolioMotion();
  const Component = href ? motion.a : motion.button;
  const badge = icon && <span className={`c-capsule-circle -${circleColor}`} aria-hidden="true"><span className="c-capsule-icon-wrap">{icon}</span></span>;
  return (
    <Component {...props} {...(href ? { href } : { type: "button" })} onClick={onClick}
      className={`c-capsule-button -${variant} -size-${size} ${className}`} style={style}
      whileHover={enabled ? { scale: 1.025 } : undefined}
      whileTap={enabled ? { scale: 0.97 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}>
      {variant === "green-eye" && badge}
      <span className="c-capsule-label">{label || children}</span>
      {variant !== "green-eye" && badge}
    </Component>
  );
}
