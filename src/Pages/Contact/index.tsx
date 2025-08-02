import { Header, Form, Input, TextArea } from "../../Components";
import { ContactInfo } from "../../Components/ContactInfo";
import styles from "./Contact.module.css";
import form_styles from "../../Components/Form/Form.module.css";

function Contact() {
  return (
    <>
      <Header
        title="Contactanos"
        text="¿Necesitas ayuda o más información? Aquí encontrarás todas las formas de comunicarte con nosotros. ¡Estamos listos para atenderte!"
        height={60}
      />

      <div className={styles.contact_page_container}>
        <Form>
          {({ control, errors }) => (
            <>
              <div className={form_styles.row}>
                <Input
                  name="name"
                  control={control}
                  label="Nombre"
                  type="text"
                  error={errors.name}
                  placeholder="Nombre"
                />
                <Input
                  name="last_name"
                  control={control}
                  label="Apellido"
                  type="text"
                  error={errors.last_name}
                  placeholder="Apellido"
                />
              </div>
              <div className={form_styles.row}>
                <Input
                  name="email"
                  control={control}
                  label="Correo Electronico"
                  type="email"
                  error={errors.email}
                  placeholder="ejemplo@gmail.com"
                />
                <Input
                  name="phone"
                  control={control}
                  label="Numero Telefonico"
                  type="text"
                  error={errors.phone}
                  placeholder="(0XXX) XXX-XXXX"
                />
              </div>
              <TextArea
                name="message"
                control={control}
                label="Mensaje"
                type="text"
                error={errors.message}
              />
            </>
          )}
        </Form>
        <ContactInfo />
      </div>
    </>
  );
}

export { Contact };