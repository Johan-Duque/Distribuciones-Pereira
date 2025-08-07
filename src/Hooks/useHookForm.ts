import { useContext } from "react";
import { FormContext } from "../Context/FormContext";

export const useHookForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useHookForm esta siendo usado sin un provedor");
  }
  return context;
};