import { useState } from "react";

export function Accordion({ items }) {
  const [openItems, setOpenItems] = useState({});

  const toggle = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = !!openItems[index];
        return (
          <div className="accordion-item" key={item.q}>
            <button className="accordion-trigger" onClick={() => toggle(index)}>
              <span>{item.q}</span>
              <span className="accordion-mark">{open ? "−" : "+"}</span>
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
