import { useState } from 'react';
import AccordionContentItem from './AccordionContentItem';
import AccordionContents from './AccordionContents';
import Link from 'next/link';
import Button from './Button';

const GeneralGuideLine = ({ title, text = '' }) => {
  const [expend, setExpend] = useState(false);

  const handleExpend = (e) => {
    e.preventDefault();
    setExpend(true);
  };

  return (
    <div>
      <div className="p-3 rounded-t-lg bg-blue-50">
        <span>{title}</span>
      </div>

      <div className="p-4 text-sm">
        {expend ? text : text.slice(0, 700)}
        {expend ? null : (
          <Link href="/" className="text-blue-500 ml-2" onClick={handleExpend}>
            Read full guideline
          </Link>
        )}

        {expend ? (
          <Button
            type="button"
            className="border-none bg-blue-50 text-blue-500 w-fit ml-auto"
            onClick={() => setExpend(false)}
          >
            Close
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default GeneralGuideLine;
