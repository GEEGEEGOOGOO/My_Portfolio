import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordion-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div className={`accordion-item${open ? " is-open" : ""}`} key={item.q}>
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => toggle(index)}
              aria-expanded={open}
            >
              <span className="accordion-title">{item.q}</span>
              <span className={`accordion-mark${open ? " open" : ""}`}>
                {open ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  className="accordion-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
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
