import { useForm, type SubmitHandler } from "react-hook-form";
import { type type_form, schema_form } from "../../Types";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from './Form.module.css';
import { Input, TextArea } from "../../Components";
import emailjs from "@emailjs/browser";

function Form() {
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
    <div className={styles.contact_container}>
      <div className={styles.form_container}>
        <h2 className={styles.title}>Contact Us</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <Input
              name="name"
              control={control}
              label="Nombre"
              type="text"
              error={errors.name}
            />
            <Input
              name="last_name"
              control={control}
              label="Apellido"
              type="text"
              error={errors.last_name}
            />
          </div>
          <div className={styles.row}>
            <Input
              name="email"
              control={control}
              label="Correo Electronico"
              type="email"
              error={errors.email}
            />
            <Input
              name="phone"
              control={control}
              label="Numero Telefonico"
              type="text"
              error={errors.phone}
            />
          </div>
          <TextArea
            name="message"
            control={control}
            label="Mensaje"
            type="text"
            error={errors.message}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>

      <div className={styles.info_container}>
        <h2 className={styles.info_title}>Información de Contacto</h2>
        <div className={styles.info_item}>
          <h4>Ubicacion</h4>
          <p>Estado Tachira - San Cristobal</p>
        </div>
        <div className={styles.info_item}>
          <h4>Dirreccion</h4>
          <p>La Concordia - Calle 1 con calle 0</p>
        </div>
        <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7906.648200715754!2d-72.23650750942225!3d7.755408969054159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666cae72d72479%3A0x53a9410365c243b1!2sHospital%20Central%20de%20San%20Crist%C3%B3bal.!5e0!3m2!1ses!2sve!4v1754008954106!5m2!1ses!2sve" width="100%"></iframe>
      </div>
    </div>
  );
}

export { Form };

/*

servide_id: service_h8mxhbs
template_id: template_fc9zjv9
public_key: P8gCZdcPlHFqKr5bx

*/
