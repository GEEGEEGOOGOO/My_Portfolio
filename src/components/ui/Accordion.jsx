import { useState } from "react";

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
          <div className="accordion-item" key={item.q}>
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => toggle(index)}
              aria-expanded={open}
            >
              <span className="accordion-title">{item.q}</span>
              <span className={`accordion-mark${open ? " open" : ""}`}>+</span>
            </button>
            {open && (
              <div className="accordion-content">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
