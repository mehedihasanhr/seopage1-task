import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Button from './Button';
const CustomScrollbar = dynamic(() => import('./CustomScrollbar'), { ssr: false });
export const AccordionCxt = React.createContext();

const AccordionContents = ({ children }) => {
  const [isExpended, setIsExpended] = React.useState(false);
  const [modal, setModal] = React.useState({
    isOpen: false,
    item: null,
  });

  // open modal
  const open = (value) => {
    setModal({
      isOpen: true,
      item: value,
    });
  };

  // close modal
  const close = (value) => {
    setModal({
      isOpen: false,
      item: null,
    });
  };

  return (
    <AccordionCxt.Provider value={{ modal, open, close }}>
      <div className={`relative overflow-hidden py-4`}>
        <CustomScrollbar minH={200} maxH={400}>
          <div className={`flex flex-col gap-6 pb-10`}>{children}</div>
        </CustomScrollbar>

        {modal.isOpen ? (
          <div className="absolute top-0 left-0 w-full h-full bg-white/50">
            <div className={`flex flex-col gap-4 bg-white p-4 shadow-xl rounded-b-lg`}>
              <CustomScrollbar minH={100} maxH={280}>
                <div className="px-4 text-sm">
                  <div className="bg-[#E7EFFC] rounded-md float-left w-32 h-32 mr-4">
                    <div className="flex flex-col p-3">
                      <span className="text-3xl text-red-500">
                        {modal.item?.index < 10 ? '0' + modal.item?.index : modal.item?.index}
                      </span>
                      <span className="text-sm ">Date: {modal.item?.date}</span>
                      <span className="text-sm ">Time: {modal.item?.time}</span>
                    </div>
                  </div>
                  {modal.item?.text}
                </div>
              </CustomScrollbar>

              <Button className="border-none bg-blue-50 text-blue-500 w-fit ml-auto" onClick={close}>
                Close
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </AccordionCxt.Provider>
  );
};
export default AccordionContents;
