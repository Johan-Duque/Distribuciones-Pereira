import { createContext } from "react";
import { type Control, type FieldErrors } from "react-hook-form";
import { type type_form } from "../Types";

interface FormContextProps{
  control: Control<type_form>;
  errors: FieldErrors<type_form>;
}

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);