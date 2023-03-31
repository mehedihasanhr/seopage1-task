import React, { useState } from 'react';

export const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const [expend, setExpend] = useState(false);
  return (
    <div className="flex flex-col shadow-lg rounded-b-lg">
      <div
        className={`py-3 px-3 bg-[#E33E4F] text-white ${open ? 'rounded-t-lg' : 'rounded-lg'}`}
        onClick={() => setOpen(!open)}
      >
        {title}
      </div>
      <div
        className="duration-300 ease-in-out"
        style={{
          height: open ? (expend ? '500px ' : '300px') : 0,
          overflowY: open ? 'auto' : 'hidden',
          padding: open ? '1rem' : '0 1rem',
          transform: 'transition: height 0.3s ease-in-out',
        }}
      >
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, { expend, setExpend });
        })}
      </div>
    </div>
  );
};

const Accordion = ({ children }) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

export default Accordion;
