import Button from './Button';
import { BsEye } from 'react-icons/bs';

const TaskActionCardItem = ({ text, onPreview, onEdit, showEditButton = true, showPreviewButton = true, children }) => {
  return (
    <div className="flex items-center gap-2 justify-between text-[#595C64] py-2 border-b-[2px] last:border-b-0 border-[#E7EFFC] text-sm">
      {children ? <>{children}</> : <p className="text-sm line-clamp-1">{text}</p>}
      <div className="flex items-center ml-auto">
        {showPreviewButton ? <Button icon={<BsEye />} className="border-0 px-1 py-1" /> : null}

        {showEditButton ? (
          <Button className="border-0 px-1 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.361" height="9.487" viewBox="0 0 10.361 9.487">
              <path
                id="drive_file_rename_outline_FILL0_wght400_GRAD0_opsz48"
                d="M84.067,212.973l1.813-1.813h4.481v1.813Zm-3.29-.777h.57l5.738-5.738-.57-.57-5.738,5.738Zm7.952-6.295-1.658-1.658.544-.544a.725.725,0,0,1,.55-.214.769.769,0,0,1,.55.227l.557.557a.782.782,0,0,1,0,1.088Zm-.544.544-6.528,6.528H80v-1.658l6.528-6.528Zm-1.386-.272-.285-.285.57.57Z"
                transform="translate(-80 -203.486)"
              />
            </svg>
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default TaskActionCardItem;
