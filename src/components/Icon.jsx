import * as Icons from "lucide-react";
export default function Icon({ name = "Circle", size = 22, className = "" }) {
  const LucideIcon = Icons[name] || Icons.Circle;
  return <LucideIcon size={size} className={className} aria-hidden="true" />;
}
