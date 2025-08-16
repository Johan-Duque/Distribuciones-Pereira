import { Header, Form, Input, TextArea } from "../../Components";
import { ContactInfo } from "../../Components/ContactInfo";
import { formService } from "../../Services";
import { FaInstagram } from "react-icons/fa";
import { FaDirections } from "react-icons/fa";
import form_styles from "../../Components/Form/Form.module.css";
import styles from "../Pages.module.css";

function Contact() {
  return (
    <>
      <Header
        title="Contactanos"
        text="¿Necesitas ayuda o más información? Aquí encontrarás todas las formas de comunicarte con nosotros. ¡Estamos listos para atenderte!"
        height={60}
      />

      <div className={styles.contact_page_container}>
        <Form title="Formulario de Contacto" button_text="Enviar" serviceID={formService.serviceID} templateID={formService.templateID} publicKey={formService.publicKey}>
          <div className={form_styles.row}>
            <Input
              name="name"
              label="Nombre"
              type="text"
              placeholder="Nombre"
            />
            <Input
              name="last_name"
              label="Apellido"
              type="text"
              placeholder="Apellido"
            />
          </div>
          <div className={form_styles.row}>
            <Input
              name="email"
              label="Correo Electronico"
              type="email"
              placeholder="ejemplo@gmail.com"
            />
            <Input
              name="phone"
              label="Numero Telefonico"
              type="text"
              placeholder="(0xxx) xxx-xxxx"
            />
          </div>
          <TextArea
            name="message"
            label="Mensaje"
            type="text"
          />
        </Form>

        <ContactInfo 
          title="Información de Contacto"
          subTitle_1="Dirreccion"
          svg1={<FaDirections />}
          description_1="Calle 2 con carrera 9 N° 9- 66 | La Concordia"
          subTitle_2={`Instagram`}
          svg2={<FaInstagram />}
          description_2={`distribuciones_pereira2025`}
          url="https://www.instagram.com/distribuciones_pereira2025/"
          iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1175.3457485145284!2d-72.23460011862618!3d7.7498726305980465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e661355278f0801%3A0xe0a0649230ad3f90!2sCalle%202%20%26%20Carrera%209%2C%20San%20Crist%C3%B3bal%205001%2C%20T%C3%A1chira!5e0!3m2!1ses!2sve!4v1754168441622!5m2!1ses!2sve"
        />
      </div>
    </>
  );
}

export default Contact;