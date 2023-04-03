import { outsideClick } from '@/utils/outSideClick';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Modal = ({ isOpen, close, children, className }) => {
  const [render, setRender] = React.useState(false);
  const modalRef = React.useRef(null);

  React.useEffect(() => {
    setRender(true);
    return () => setRender(false);
  }, []);

  // if click outside of child then close modal
  // React.useEffect(() => {
  //   let timeout;
  //   const handleOutSideClick = (e) => {
  //     if (modalRef.current && !modalRef.current.contains(e.target)) {
  //       close();
  //       clearTimeout(timeout);
  //       window.addEventListener('click', handleOutSideClick);
  //     }
  //   };

  //   if (isOpen) {
  //     timeout = setTimeout(() => {
  //       window.addEventListener('click', handleOutSideClick);
  //     }, 100);
  //   }
  //   return () => {
  //     clearTimeout(timeout);
  //     window.removeEventListener('click', handleOutSideClick);
  //   };
  // }, [isOpen]);

  if (!isOpen || !render) return null;

  return ReactDOM.createPortal(
    <div className={`fixed top-0 left-0 w-screen h-screen bg-black/50 ${className}`}>
      <div ref={modalRef}>{children}</div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;
