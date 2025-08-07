import type { ReactNode } from 'react';
import styles from './ContactInfo.module.css';

interface props {
  title: string, 
  subTitle_1: string | ReactNode,
  subTitle_2: string | ReactNode,
  description_1: string,
  description_2: string,
  svg1?: ReactNode,
  svg2?: ReactNode,
  url?: string,
  iframe?: string,
}

function ContactInfo({title, subTitle_1, subTitle_2, description_1, description_2, svg1, svg2, url, iframe} : props) {
  return (
    <div className={styles.info_container}>
      <h2 className={styles.info_title}>{title}</h2>
      <div className={styles.info_item}>
        <h3>{subTitle_1} {svg1}</h3>
        <p>{description_1}</p>
      </div>
      <div className={styles.info_item}>
        <h3>{subTitle_2} {svg2}</h3>
        { url ? <a href={url} target='blank'>{description_2}</a> : <p>{description_2}</p>} 
      </div>
      <iframe className={styles.iframe} src={iframe} width="100%"></iframe>
    </div>

  );
}

export { ContactInfo };
