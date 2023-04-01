import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const AccordionCxt = React.createContext();

const AccordionContents = ({ children }) => {
  const [isExpended, setIsExpended] = React.useState(false);
  return (
    <AccordionCxt.Provider value={{ isExpended, setIsExpended }}>
      <div className={`relative overflow-hidden`}>
        {/* {isExpended ? (
          <div className="relative flex flex-col gap-5">{children}</div>
        ) : ( */}
        <PerfectScrollbar options={{ suppressScrollY: false }}>
          <div className={`flex flex-col gap-10 relative ${isExpended ? 'h-[500px]' : ''}`}>{children}</div>
        </PerfectScrollbar>
        {/* )} */}
      </div>
    </AccordionCxt.Provider>
  );
};
export default AccordionContents;
