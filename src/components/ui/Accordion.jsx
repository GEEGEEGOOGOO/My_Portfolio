import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "../Icon";

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div className="accordion-item" key={item.q}>
            <button className="accordion-trigger" onClick={() => setOpen(active ? -1 : index)}>
              <span>{item.q}</span>
              <motion.span animate={{ rotate: active ? 180 : 0 }}><Icon name="ChevronDown" size={18} /></motion.span>
            </button>
            <AnimatePresence initial={false}>
              {active && (
                <motion.div className="accordion-content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
