import React, { useState } from 'react';
import { IoChevronBackCircleSharp, IoChevronDownCircleSharp } from 'react-icons/io5';

export const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`py-2.5 px-4 bg-red-500 text-white flex items-center justify-between hover:cursor-pointer ${
          open ? 'rounded-t-lg' : 'rounded-lg'
        }`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <div className={`w-fit h-fit rounded-full hover:cursor-pointer ${open ? 'rotate-[180deg]' : ''}`}>
          <IoChevronDownCircleSharp className="text-3xl text-[#fff]" />
        </div>
      </div>
      <div
        className={`flex flex-col gap-4 ${
          open ? 'h-[450px] shadow-lg rounded-b-lg pb-8' : 'h-0 overflow-hidden'
        } transition-all duration-150`}
      >
        {children}
      </div>
    </>
  );
};

const Accordion = ({ children }) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

export default Accordion;
