import Link from 'next/link';

const AccordionContent = ({ expend, setExpend, children }) => {
  const handleExpend = (e) => {
    e.preventDefault();
    setExpend(!expend);
  };
  return (
    <div
      className="py-3 overflow-x-hidden"
      style={{
        boxShadow: !expend ? 'none' : '0px 3px 10px rgb(0 0 0/15%)',
        padding: expend ? '1rem' : '0',
        transform: 'scale(101%)',
        transition: 'all 0.3s ease-in-out',
        height: expend ? '400px' : '300px',
        overflowY: expend ? 'auto' : 'hidden',
        overflowX: 'hidden',
      }}
    >
      <div className="w-28 h-28 rounded-lg bg-slate-100 block float-left p-3 text-xs mr-4 mb-4">
        <span className="text-2xl text-red-500 block">01</span>
        <span className="block">
          Date: <span className="text-blue-500">12/12/2021</span>
        </span>
        <span className="block">
          Time: <span className="text-blue-500">12:00 PM</span>
        </span>
      </div>
      {children}
      <Link href="/" className="text-blue-500 ml-2" onClick={handleExpend}>
        Read full guideline
      </Link>
    </div>
  );
};

export default AccordionContent;
