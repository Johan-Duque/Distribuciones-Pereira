import styles from './DistributionNetwork.module.css';
import { LazyComponent } from '../../Components';

interface props {
  img: string;
  title: string;
  text_1: string;
  text_2: string;
}

function DistributionNetwork ({img, title, text_1, text_2 }: props) {
 
 return (
 
    <div className={styles.container}> 

   <div className={styles.flex_box}>
      <div className={styles.textSection}>
        <h2 className={styles.title}> {title} </h2>
        <p className={styles.description}>
         {text_1} 
        </p>

        <p className={styles.description}>
          {text_2} 
        </p>

      </div>
      <div className={styles.mapSection}>
       <LazyComponent>
         <img src={img} alt='Venezuela' className={styles["mapSection-img"]}/>
       </LazyComponent>
      </div>
    </div>

    </div>
  
  );

};

export { DistributionNetwork };
