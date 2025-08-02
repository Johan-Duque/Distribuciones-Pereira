import { type SubmitHandler, useForm } from "react-hook-form";
import { type type_form, schema_form } from "../../Types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContext } from "../../Context/FormContext";
import type { ReactNode } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Form.module.css";

interface FormProps {
  children: ReactNode;
  title: string,
  button_text: string
}

function Form({ children, title, button_text }: FormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<type_form>({
    resolver: zodResolver(schema_form),
    defaultValues: {
      name: "",
      last_name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<type_form> = (data) => {
    const serviceID = "service_h8mxhbs";
    const templateID = "template_bhizl3c";
    const publicKey = "P8gCZdcPlHFqKr5bx";

    emailjs.send(serviceID, templateID, data, publicKey).then(
      (result) => {
        console.log("Mensaje enviado con éxito!", result.text);
        alert("¡Mensaje enviado!");
      },
      (error) => {
        console.log("Error al enviar el mensaje:", error.text);
        alert("Error al enviar el mensaje.");
      }
    );
  };

  return (
    <div className={styles.form_container}>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContext.Provider value={{ control, errors }}>
          {children}
        </FormContext.Provider>
        <button type="submit" className={styles.button}>
          {button_text}
        </button>
      </form>
    </div>
  );
}

export { Form };
