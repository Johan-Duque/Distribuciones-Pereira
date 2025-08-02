import { type SubmitHandler, useForm, type Control, type FieldErrors} from "react-hook-form";
import { type type_form, schema_form } from "../../Types";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Form.module.css";

interface FormProps {
  children: (props: {
    control: Control<type_form>;
    errors: FieldErrors<type_form>;
  }) => ReactNode;
}

function Form({ children }: FormProps) {
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
      <h2 className={styles.title}>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children({ control, errors })}
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

export { Form };
