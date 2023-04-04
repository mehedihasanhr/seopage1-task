import * as React from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { usePopper } from 'react-popper';
import { motion, AnimatePresence } from 'framer-motion';

export const DropdownContext = React.createContext();

// toggle
const Toggle = ({ children, className, icon = true }) => {
  const { isOpen, toggle, setRefElement } = React.useContext(DropdownContext);

  return (
    <div ref={setRefElement} onClick={toggle} className={`flex items-center gap-2 ${className}`}>
      {children}
      {icon && isOpen ? <BiChevronUp /> : <BiChevronDown />}
    </div>
  );
};

// menu
const Menu = ({ children, className, selection = true, placement = 'bottom-start', ...props }) => {
  const { close, toggle, isOpen, refElement, popperElement, setPopperElement } = React.useContext(DropdownContext);

  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    let timeout;
    const handleOutSideClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        close();
        clearTimeout(timeout);
        window.addEventListener('click', handleOutSideClick);
      }
    };

    if (isOpen) {
      timeout = setTimeout(() => {
        window.addEventListener('click', handleOutSideClick);
      }, 100);
    }
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('click', handleOutSideClick);
    };
  }, [isOpen]);

  const { styles, attributes } = usePopper(refElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['top', 'bottom', 'right', 'left'],
        },
      },
    ],
  });

  return (
    <div ref={wrapperRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'fit-content' }}
            exit={{ opacity: 0, height: 0 }}
            ref={setPopperElement}
            style={styles.popper}
            className={`overflow-hidden z-[1000] bg-white rounded-md shadow-lg ${className}`}
            onMouseUp={selection ? null : close}
            {...attributes}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Dropdown = ({ children, className }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [refElement, setRefElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);

  //   toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // close
  const close = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggle,
        close,
        refElement,
        setRefElement,
        popperElement,
        setPopperElement,
      }}
    >
      <div className="relative">{children}</div>
    </DropdownContext.Provider>
  );
};

Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;

export default Dropdown;
