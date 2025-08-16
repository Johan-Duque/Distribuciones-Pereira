import { type SubmitHandler, useForm } from "react-hook-form";
import { type type_form, schema_form } from "../../Types";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContext } from "../../Context/FormContext";
import { useState, type ReactNode } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Form.module.css";

interface FormProps {
  children: ReactNode;
  title: string;
  button_text: string;
  serviceID: string;
  templateID: string;
  publicKey: string;
}

function Form({
  children,
  title,
  button_text,
  serviceID,
  templateID,
  publicKey,
}: FormProps) {
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

  const [validation, setValidation] = useState<number>(0);

  const onSubmit: SubmitHandler<type_form> = (data) => {
    emailjs.send(serviceID, templateID, data, publicKey).then(
      () => {
        setValidation(1);
      },
      () => {
        setValidation(2);
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
        {validation === 0 ? (
          <button type="submit" className={styles.button}>
            {button_text}
          </button>
        ) : (
          <button
            type="submit"
            className={
              validation === 1
                ? `${styles["button-green"]}`
                : `${styles["button-red"]}`
            }
          >
            {validation === 1
              ? `¡Mensaje enviado!`
              : `Error al enviar el mensaje.`}
          </button>
        )}
      </form>
    </div>
  );
}

export { Form };
