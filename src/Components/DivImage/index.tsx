import { Title } from "../";
import styles from "./DivImage.module.css";

interface DivImageProps {
  src: string;
  alt: string;
  text: string;
}

function DivImage ({ src, alt, text }: DivImageProps)  {
  return (
    <div className={styles.locationCard}>
      <img src={src} alt={alt} className={styles.locationImage} />
      <div className={styles.locationDescription}>
        <Title text={text} type={3} color="white" align="center" />
      </div>
    </div>
  );
};

export { DivImage }