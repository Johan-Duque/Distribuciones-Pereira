import { useContext } from 'react';
import { SeekerContext } from '../Context/SeekerContext';

export const useSeekerContext = () => {
  const context = useContext(SeekerContext);

  if (context === null) {
    throw new Error("useSeekerContext debe ser usado dentro de un SeekerProvider");
  }

  return context;
};