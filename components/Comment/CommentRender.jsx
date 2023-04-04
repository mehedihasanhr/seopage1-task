import Image from 'next/image';
import Link from 'next/link';
import { BsDot, BsEmojiSmile } from 'react-icons/bs';
import { IoMdAttach } from 'react-icons/io';

const CommentRender = ({ comment }) => {
  return (
    <div>
      <div className="relative flex gap-2 w-full">
        <div>
          <Image
            src="/icons/avatar1.png"
            alt=""
            width={24}
            height={24}
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          {/* name and time */}
          <div className="flex flex-wrap items-center gap-x-3 text-xs md:text-sm">
            <strong className="line-clamp-1">
              Md Abu Sayeed Laravel Development
            </strong>
            <span className="text-[10px] md:text-sm">
              Sep 30, 2022 at 4:32 PM
            </span>
          </div>

          <div className="bg-white border border-gray-300 py-1 md:py-2.5 px-4 rounded-md w-full ">
            <span className="text-slate-600 text-xs md:text-sm">
              {comment.text}
            </span>
          </div>
          <div className="flex items-center gap-1 py-1 text-xs md:text-sm">
            <Link
              href="/"
              className="block  text-slate-500 hover:underline hover:text-blue-500"
            >
              <BsEmojiSmile className="text-lg" />
            </Link>
            <BsDot />
            <Link
              href="/"
              className="text-slate-500 hover:underline hover:text-blue-500"
            >
              Reply
            </Link>
            <BsDot />
            <Link
              href="/"
              className="text-slate-500 hover:underline hover:text-blue-500"
            >
              Delete
            </Link>
            <BsDot />

            <Link
              href="/"
              className="text-slate-500 hover:underline hover:text-blue-500"
            >
              <IoMdAttach className="text-lg" />
            </Link>
          </div>
        </div>
      </div>

      <div className="ml-3 pl-3 flex flex-col gap-1 md:gap-4 mt-2.5 md:mt-6 border-l">
        {comment?.replies?.map((r, i) => (
          <CommentRender key={i} comment={r} />
        ))}
      </div>
    </div>
  );
};

export default CommentRender;
