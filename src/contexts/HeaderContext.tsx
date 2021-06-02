import { createContext, useState, ReactNode, useContext } from 'react';

interface HeaderContextData {
  showBackButton: boolean;
  setShowBackButton: (show: boolean) => void;
}

export const HeaderContext = createContext({} as HeaderContextData);

type HeaderContextProviderProps = {
  children: ReactNode;
}

export function HeaderContextProvider({ children }: HeaderContextProviderProps) {
  const [showBackButton, setShowBackButton] = useState(false);

  return (
    <HeaderContext.Provider 
      value={{
        showBackButton,
        setShowBackButton
      }}
    >
      { children }
    </HeaderContext.Provider>
  );
}

export const useHeader = () => useContext(HeaderContext);