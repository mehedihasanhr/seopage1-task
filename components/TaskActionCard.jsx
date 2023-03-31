import { AiOutlinePlus } from 'react-icons/ai';
import { IoChevronBackCircleSharp } from 'react-icons/io5';
import Link from 'next/link';
import PerfectScrollbar from 'react-perfect-scrollbar';

const TaskActionCard = ({ href = '/', children, linkText, title, leftChevronIcon = true, scrollHeight = 100 }) => {
  return (
    <div className="rounded-md p-3 pr-2 bg-white h-[200px] relative">
      {/* left chevron */}
      {leftChevronIcon ? (
        <div className="absolute -left-[3%] top-1/2 transform -translate-y-1/2 w-fit h-fit rounded-full">
          <IoChevronBackCircleSharp className="text-3xl text-[#1D82F5]" />
        </div>
      ) : null}
      <div className="h-[160px] overflow-hidden thin-scrollbar pl-6">
        <div className="overflow-hidden">
          {/* Card title */}
          <div className="flex flex-col text-[#283151]">
            <span className="font-medium text-sm block aline-center py-1">{title}</span>
            {linkText ? (
              <Link
                href={href}
                className="flex items-center gap-1.5 text-sm text-[#1D82F5] py-2 border-b-[2px] last:border-b-0 border-[#E7EFFC] mr-4"
              >
                <AiOutlinePlus className="text-base" /> {linkText}
              </Link>
            ) : null}
          </div>
          {/* card body */}

          <>
            <div style={{ height: scrollHeight }}>
              <PerfectScrollbar>
                <div className="pr-3">{children}</div>
              </PerfectScrollbar>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default TaskActionCard;
