import { createContext, useState, type ReactNode } from "react";

// Define las interfaces para los tipos de datos que se usarán en el contexto
interface Product {
  img: string;
  alt_img: string;
  title: string;
  text: string;
  category: string;
}

interface SeekerContextProps {
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  methodRender: number;
  setMethodRender: React.Dispatch<React.SetStateAction<number>>;
  LoadingSeeker: boolean;
  setLoadingSeeker: React.Dispatch<React.SetStateAction<boolean>>;
}

// Crea el contexto con un valor inicial que coincida con la interfaz SeekerContextProps
export const SeekerContext = createContext<SeekerContextProps | null>(null);

export const SeekerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [methodRender, setMethodRender] = useState<number>(0);
  const [LoadingSeeker, setLoadingSeeker] = useState<boolean>(false);

  // El objeto de valor para el Provider debe coincidir con la interfaz SeekerContextProps
  const value = {
    filteredProducts,
    setFilteredProducts,
    methodRender,
    setMethodRender,
    LoadingSeeker,
    setLoadingSeeker,
  };

  return (
    <SeekerContext.Provider value={value}>
      {children}
    </SeekerContext.Provider>
  );
};