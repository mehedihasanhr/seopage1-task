import React from 'react';
import dynamic from 'next/dynamic';
const CustomScrollbar = dynamic(() => import('./CustomScrollbar'), { ssr: false });
export const AccordionCxt = React.createContext();

const AccordionContents = ({ children }) => {
  const [isExpended, setIsExpended] = React.useState(false);
  return (
    <AccordionCxt.Provider value={{ isExpended, setIsExpended }}>
      <div className={`relative overflow-hidden py-4`}>
        <CustomScrollbar minH={200} maxH={550}>
          <div className={`flex flex-col gap-6 pb-10`}>{children}</div>
        </CustomScrollbar>
      </div>
    </AccordionCxt.Provider>
  );
};
export default AccordionContents;
