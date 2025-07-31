import styles from "./Card.module.css";
import { GiShop } from "react-icons/gi";

interface props {
  img: string;
  alt_img: string; 
  title: string;
  text: string;
  company: string;
}

function Card ({img, alt_img, title, text, company} : props) {

  return (
    <div className={styles.card}>

      <div className={styles["image-container"]}>
        <img
          src={img}
          alt={alt_img}
          className={styles["card-image"]}
        />
      </div>

      <h2 className={styles.title}>{title}</h2>{" "}
      <p className={styles.description}>
        {text}
      </p>

      <div className={styles.details}>
        <div className={styles.price}>
          <span>Empresa: </span>
        </div>
        <div className={styles.countdown}>
          <GiShop></GiShop>
          <span>{company}</span>
        </div>
      </div>


    </div>
  );
};

export { Card };
