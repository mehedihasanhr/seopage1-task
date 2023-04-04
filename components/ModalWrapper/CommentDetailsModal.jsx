import React from 'react';
import Modal from './Modal';
import { usePopper } from 'react-popper';
import Image from 'next/image';
import { AiFillCheckCircle } from 'react-icons/ai';
import CommentRender from '../Comment/CommentRender';
import CustomScrollbar from '../CustomScrollbar';

import Button from '../Button';
import dynamic from 'next/dynamic';
const isMobile = dynamic(() => import('@/utils/isMobileDevice'), {
  ssr: false,
});

const comments = [
  {
    id: 1,
    text: 'First comment',
    replies: [
      {
        id: 1,
        text: 'nested 1',
        replies: [
          {
            id: 1,
            text: 'nested-2',
            replies: [
              {
                id: 1,
                text: 'nested 3',
                replies: [{ id: 1, text: 'nested-2', replies: [] }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    text: 'Comment 2',
    replies: [
      {
        id: 1,
        text: 'nested 1',
        replies: [{ id: 1, text: 'nested-2', replies: [] }],
      },
    ],
  },
  {
    id: 3,
    text: 'comment 3',
    replies: [
      {
        id: 1,
        text: 'nested 1',
        replies: [{ id: 1, text: 'nested-2', replies: [] }],
      },
    ],
  },

  {
    id: 4,
    text: 'comment 4',
    replies: [
      {
        id: 1,
        text: 'nested 1',
        replies: [{ id: 1, text: 'nested-2', replies: [] }],
      },
    ],
  },

  {
    id: 5,
    text: 'comment 5',
    replies: [
      {
        id: 1,
        text: 'nested 1',
        replies: [{ id: 1, text: 'nested-2', replies: [] }],
      },
    ],
  },
];

const CommentDetailsModal = ({ isOpen, close, elementRef }) => {
  const [menuRef, setMenuRef] = React.useState(null);
  const [editMode, setEditMode] = React.useState(false);
  const [arrowElement, setArrowElement] = React.useState(null);

  const { styles, attributes } = usePopper(elementRef, menuRef, {
    placement: 'left',

    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      // {
      //   name: 'flip',
      //   options: {
      //     fallbackPlacements: ['top', 'bottom', 'right', 'left'],
      //   },
      // },
    ],
  });

  return (
    <Modal isOpen={isOpen} close={close} className="bg-black/10">
      <div
        // ref={setMenuRef}
        // style={styles.popper}
        // {...attributes}
        className="w-full lg:max-w-[80%] h-full md:h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="bg-[#F4F5F7] p-4 md:p-10 rounded-xl w-full h-full md:max-h-[600px] lg:max-w-[80%] -mr-3.5 flex flex-col gap-5">
          {/* comment box  */}

          <div className="flex gap-3">
            {/* avatar */}
            <div>
              <Image
                src="/icons/avatar1.png"
                alt=""
                width={45}
                height={45}
                className="rounded-full"
              />
            </div>

            <div className="w-full flex flex-col gap-2">
              <div
                onClick={() => setEditMode(true)}
                className={`bg-white border border-gray-300 py-2.5 px-4 rounded-md w-full flex items-center justify-between gap-3 ${
                  editMode ? 'h-[200px]' : ''
                }`}
              >
                <span className="text-slate-400">Write a Comment...</span>
                <AiFillCheckCircle className="text-blue-500 text-2xl" />
              </div>

              {editMode ? (
                <div className="flex items-center gap-2">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white border-0">
                    Send
                  </Button>
                  <Button
                    onMouseDown={() => setEditMode(false)}
                    className=" bg-black/70 hover:bg-black/80 text-white border-0"
                  >
                    Close
                  </Button>
                </div>
              ) : null}
            </div>
          </div>

          <CustomScrollbar maxH={400}>
            {/* comments and replies */}
            <div className="flex flex-col gap-4 pl-3 pr-5">
              {comments.map((comment) => (
                <CommentRender key={comment.id} comment={comment} />
              ))}
            </div>
          </CustomScrollbar>
        </div>
        <div
          ref={setArrowElement}
          style={styles.arrow}
          className="bg-red-500"
        />
      </div>
    </Modal>
  );
};

export default CommentDetailsModal;
