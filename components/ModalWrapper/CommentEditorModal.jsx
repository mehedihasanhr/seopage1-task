import Image from 'next/image';
import * as React from 'react';
import Modal from './Modal';
import { IoMdAttach } from 'react-icons/io';
import { AiOutlinePlusSquare } from 'react-icons/ai';
import { CiSquarePlus } from 'react-icons/ci';
import Button from '../Button';
import dynamic from 'next/dynamic';
import CustomScrollbar from '../CustomScrollbar';
import RichEditor from '../Editor/Editor';
import { isMobile } from '@/utils/isMobileDevice';

const CommentEditorModal = ({ isOpen, close }) => {
  const [attachFiles, setAttachFiles] = React.useState([]);
  const [editorData, setEditorData] = React.useState();

  // const handle upload
  const handleAttachFilesChange = (e) => {
    let files = e.target.files;
    setAttachFiles((prevState) => [...prevState, ...files]);
  };

  const getFileExtension = (file) => {
    const arr = file.name.split('.');
    const ext = arr[arr.length - 1];
    return ext;
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:flex-row gap-5 bg-white w-full h-full max-w-[750px] md:max-h-[550px] md:rounded-lg p-4">
        <div>
          <Image src="/icons/avatar1.png" alt="" width={72} height={72} className="rounded-full" />
        </div>

        <CustomScrollbar maxH={500}>
          <div className="flex-1 flex flex-col gap-5 md:pr-4 pb-10">
            <div className="border px-2 w-full h-[280px] overflow-hidden">{RichEditor && <RichEditor />}</div>

            {/* attach files sections */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-medium text-slate-500">
                Attach Files here (if need)
                <IoMdAttach className="text-blue-500" />
              </div>

              {/* attach files */}
              <div className="flex items-center flex-wrap gap-3">
                {/* file upload control */}
                <div className="relative bg-[#F8F8F8] hover:bg-zinc-100 rounded-md p-4 w-24 h-24">
                  <input
                    type="file"
                    multiple
                    onChange={handleAttachFilesChange}
                    className="absolute top-0 left-0 w-full h-full opacity-0 z-10"
                  />

                  <div className="flex items-center flex-col gap-1 text-sm text-slate-700">
                    <CiSquarePlus className="text-gray-400 text-5xl" />
                    <p className="font-medium whitespace-nowrap">Add New File</p>
                  </div>
                </div>

                {/* uploaded files */}
                {Array.from(attachFiles).map((file) => (
                  <div
                    key={Math.random()}
                    className="text-sm flex flex-col items-center gap-2 relative group hover:bg-zinc-100 rounded-md bg-[#F8F8F8] p-3 w-fit min-w-[96px] min-h-[96px] text-slate-600"
                  >
                    <div className="relative w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="52"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                      </svg>

                      <span className="font-bold uppercase block bg-[#f9f9fa] group-hover:bg-zinc-100 px-0.5 absolute bottom-0 origin-center left-0">
                        {getFileExtension(file).slice(0, 6)}
                      </span>
                    </div>

                    <span className="line-clamp-1">{file.name}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button className="bg-[#1D82F5] hover:bg-blue-600 border-0 w-fit rounded-md text-white">
                  Add Comment
                </Button>
                <Button onClick={close} className="bg-black/80 hover:bg-black/90 border-0 w-fit rounded-md text-white">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </CustomScrollbar>
      </div>
    </Modal>
  );
};

export default CommentEditorModal;
