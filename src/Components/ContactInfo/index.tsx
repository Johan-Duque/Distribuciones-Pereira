import styles from './ContactInfo.module.css';

function ContactInfo() {
  return (
    <div className={styles.info_container}>
      <h2 className={styles.info_title}>Información de Contacto</h2>
      <div className={styles.info_item}>
        <h3>Ubicacion</h3>
        <p>Estado Tachira - San Cristobal</p>
      </div>
      <div className={styles.info_item}>
        <h3>Dirreccion</h3>
        <p>La Concordia - Calle 1 con calle 0</p>
      </div>
      <iframe className={styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7906.648200715754!2d-72.23650750942225!3d7.755408969054159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666cae72d72479%3A0x53a9410365c243b1!2sHospital%20Central%20de%20San%20Crist%C3%B3bal.!5e0!3m2!1ses!2sve!4v1754008954106!5m2!1ses!2sve" width="100%"></iframe>
    </div>
  );
}

export { ContactInfo };
