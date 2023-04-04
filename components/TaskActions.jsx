import Image from 'next/image';
import React from 'react';
import TaskActionCard from './TaskActionCard';
import TaskActionCardItem from './TaskActionCardItem';
import CommentEditorModal from './ModalWrapper/CommentEditorModal';
import CommentDetailsModal from './ModalWrapper/CommentDetailsModal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '@/services/features/comment/modalControl';

const TaskActions = () => {
  const { isOpen } = useSelector((state) => state.commentModal);
  const [commentDetailsModalIsOpen, setCommentDetailsModalIsOpen] = React.useState(false);
  const [commentDetailsButtonRef, setCommentDetailsButtonRef] = React.useState(null);
  const dispatch = useDispatch();
  

  // open comment modal
  const openCommentModal = (type) => {
    console.log(type);
    dispatch(openModal(type));
  };

  // close comment modal
  const closeCommentModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="bg-[#E7EFFC] p-4 rounded-lg flex flex-col gap-4">
      {/* doing */}
      <div className="p-3 rounded-md bg-white">
        {/* Card title */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="font-medium text-sm aline-center -mt-0.5">Doing</span>
        </div>
        {/* card body */}
        <div>
          <table>
            <tbody className="text-sm">
              <tr>
                <td className="py-2 pr-2">Start Date:</td>
                <td className="py-2 pl-2">28-02-2023</td>
              </tr>
              <tr>
                <td className="py-2 pr-2">Due Date:</td>
                <td className="py-2 pl-2">28-02-2023</td>
              </tr>
              <tr>
                <td className="py-2 pr-2"> Time Estimate: </td>
                <td className="py-2 pl-2"> 8 hour 25 min</td>
              </tr>
              <tr>
                <td className="py-2 pr-2"> Hours Logged: </td>
                <td className="py-2 pl-2">5 hour 25 min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Comment card */}
      <>
        <TaskActionCard
          title="Comment"
          href="/"
          ref={setCommentDetailsButtonRef}
          linkText="Add Comment"
          isOpen={commentDetailsModalIsOpen}
          onAddButtonClick={() => openCommentModal('comment')}
          onArrowClick={() => setCommentDetailsModalIsOpen(true)}
        >
          <TaskActionCardItem text="123456kufvbuialehnlamwe" />
          <TaskActionCardItem text="123456kufvbuialehnlamwe" />
          <TaskActionCardItem text="123456kufvbuialehnlamwe" />
        </TaskActionCard>
        <CommentEditorModal isOpen={isOpen} close={closeCommentModal} />
        <CommentDetailsModal 
          elementRef={commentDetailsButtonRef}
          isOpen={commentDetailsModalIsOpen} 
          close={() => setCommentDetailsModalIsOpen(false)} 
        />
      </>
      {/* Sub task card */}
      <TaskActionCard title="Sub Task" href="/" linkText="Add Sub Task" leftChevronIcon={false}>
        <TaskActionCardItem text="123456kufvbuialehnlamwe" />
        <TaskActionCardItem text="123456kufvbuialehnlamwe" />
        <TaskActionCardItem text="123456kufvbuialehnlamwe" />
      </TaskActionCard>
      {/* Note  */}
      <TaskActionCard title="Notes" href="/" linkText="Add Notes">
        <TaskActionCardItem text="123456kufvbuialehnlamwe" />
        <TaskActionCardItem text="123456kufvbuialehnlamwe" />
        <TaskActionCardItem text="123456kufvbuialehnlamwe" />
      </TaskActionCard>

      {/* Submitted works */}
      <TaskActionCard title="Submitted Works" scrollHeight="130px">
        <TaskActionCardItem showEditButton={false}>
          <div className="flex items-center justify-between gap-2">
            <span className="line-clamp-1">Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
            <span className="">20/03/23</span>
          </div>
        </TaskActionCardItem>

        <TaskActionCardItem showEditButton={false}>
          <div className="flex items-center justify-between gap-2">
            <span className="line-clamp-1">Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
            <span className="">20/03/23</span>
          </div>
        </TaskActionCardItem>
        <TaskActionCardItem showEditButton={false}>
          <div className="flex items-center justify-between gap-2">
            <span className="line-clamp-1">Lorem Ipsum Lorem Ipsum Lorem Ipsum</span>
            <span className="">20/03/23</span>
          </div>
        </TaskActionCardItem>
      </TaskActionCard>

      {/* Submitted works */}
      <TaskActionCard title="Time Logs" scrollHeight="120px">
        <TaskActionCardItem showEditButton={false} showPreviewButton={false}>
          <div className="w-full flex items-center justify-between">
            <div>
              <Image src="/icons/avatar2.png" alt="avatar 1" width={32} height={32} className="rounded-full" />
            </div>
            <div className="block">20/03/23</div>
            <div className="line-clamp-1">5 Hours 30 Min</div>
          </div>
        </TaskActionCardItem>

        <TaskActionCardItem showEditButton={false} showPreviewButton={false}>
          <div className="w-full flex items-center justify-between">
            <div>
              <Image src="/icons/avatar2.png" alt="avatar 1" width={32} height={32} className="rounded-full" />
            </div>
            <div className="block">20/03/23</div>
            <div className="line-clamp-1">5 Hours 30 Min</div>
          </div>
        </TaskActionCardItem>

        <TaskActionCardItem showEditButton={false} showPreviewButton={false}>
          <div className="w-full flex items-center justify-between">
            <div>
              <Image src="/icons/avatar2.png" alt="avatar 1" width={32} height={32} className="rounded-full" />
            </div>
            <div className="block">20/03/23</div>
            <div className="line-clamp-1">5 Hours 30 Min</div>
          </div>
        </TaskActionCardItem>

        <TaskActionCardItem showEditButton={false} showPreviewButton={false}>
          <div className="w-full flex items-center justify-between">
            <div>
              <Image src="/icons/avatar2.png" alt="avatar 1" width={32} height={32} className="rounded-full" />
            </div>
            <div className="block">20/03/23</div>
            <div className="line-clamp-1">5 Hours 30 Min</div>
          </div>
        </TaskActionCardItem>
      </TaskActionCard>

      {/* History  */}
      <TaskActionCard title="History" scrollHeight={120}>
        {[...Array(7)].map((_, i) => (
          <TaskActionCardItem key={i} text="123456kufvbuialehnlamwe" showEditButton={false} showPreviewButton={false} />
        ))}
      </TaskActionCard>
    </div>
  );
};

export default TaskActions;
