import { createContext } from 'react';

export const ModalContext = createContext();

// context provider
export default function ModalContextProvider({ children }) {
  return <ModalContext.Provider>{children}</ModalContext.Provider>;
}
