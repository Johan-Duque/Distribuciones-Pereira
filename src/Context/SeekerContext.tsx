import { createContext, useState, type ReactNode } from "react";

interface SeekerContextProps {
  LoadingSeeker: boolean;
  setLoadingSeeker: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SeekerContext = createContext<SeekerContextProps | null>(null);

export const SeekerProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [LoadingSeeker, setLoadingSeeker] = useState<boolean>(false);
  const value = {
    LoadingSeeker,
    setLoadingSeeker,
  };
  return (
    <SeekerContext.Provider value={value}>{children}</SeekerContext.Provider>
  );
};
