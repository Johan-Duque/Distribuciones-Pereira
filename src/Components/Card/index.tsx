import { MdCategory } from "react-icons/md";
import styles from "./Card.module.css";

interface props {
  img: string;
  alt_img: string; 
  title: string;
  text: string;
  category: string;
}

function Card ({img, alt_img, title, text, category} : props) {

  return (
    <div className={styles.card}>

      <div className={styles["image-container"]}>
        <img src={img} alt={alt_img} className={styles["card-image"]}/>
      </div>

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>
        {text}
      </p>

      <div className={styles.details}>
        <div className={styles.price}>
          <span>Categoria: </span>
        </div>
        <div className={styles.countdown}>
          <MdCategory />
          <span>{category}</span>
        </div>
      </div>


    </div>
  );
};

export { Card };
