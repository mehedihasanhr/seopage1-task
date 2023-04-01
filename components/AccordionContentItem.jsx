import React, { useState } from 'react';
import { AccordionCxt } from './AccordionContents';
import Button from './Button';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const CustomScrollbar = dynamic(() => import('./CustomScrollbar'), { ssr: false });

const AccordionContentItem = ({ text, index, time, date }) => {
  const { modal, open, close } = React.useContext(AccordionCxt);
  const ref = React.useRef(null);

  const expend = modal.isOpen;

  const handleExpend = (e) => {
    e.preventDefault();
    open({ text, index, time, date });
  };

  // control outside click
  React.useEffect(() => {
    let timeout;

    const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
        window.removeEventListener('click', handleOutsideClick);
        clearTimeout(timeout);
      }
    };

    if (expend) {
      timeout = setTimeout(() => {
        window.addEventListener('click', handleOutsideClick);
      }, 300);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      clearTimeout(timeout);
    };
  }, [expend]);

  return (
    <div ref={ref} className={`relative `}>
      <div className={`flex flex-col gap-4 bg-white`}>
        <>
          <CustomScrollbar minH={100} maxH={350}>
            <div className="px-4 text-sm">
              {index && time && date ? (
                <div className="bg-[#E7EFFC] rounded-md float-left w-32 h-32 mr-4">
                  <div className="flex flex-col p-3">
                    <span className="text-3xl text-red-500">{index < 10 ? '0' + index : index}</span>
                    <span className="text-sm ">Date: {date}</span>
                    <span className="text-sm ">Time: {time}</span>
                  </div>
                </div>
              ) : null}
              {text.slice(0, 700)}
              <Link href="/" className="text-blue-500 ml-2" onClick={handleExpend}>
                Read full guideline
              </Link>
            </div>
          </CustomScrollbar>
        </>
      </div>
    </div>
  );
};

export default AccordionContentItem;
