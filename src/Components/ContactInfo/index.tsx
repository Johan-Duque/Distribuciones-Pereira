import styles from './ContactInfo.module.css';

interface props {
  title: string, 
  subTitle_1: string,
  subTitle_2: string,
  description_1: string,
  description_2: string,
  iframe?: string,
}

function ContactInfo({title, subTitle_1, subTitle_2, description_1, description_2, iframe} : props) {
  return (
    <div className={styles.info_container}>
      <h2 className={styles.info_title}>{title}</h2>
      <div className={styles.info_item}>
        <h3>{subTitle_1}</h3>
        <p>{description_1}</p>
      </div>
      <div className={styles.info_item}>
        <h3>{subTitle_2}</h3>
        <p>{description_2}</p>
      </div>
      <iframe className={styles.iframe} src={iframe} width="100%"></iframe>
    </div>

  );
}

export { ContactInfo };
