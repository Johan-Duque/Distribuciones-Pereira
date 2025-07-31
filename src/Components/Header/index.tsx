import { Title } from "../index";
import styles from './Header.module.css'

interface props {
    title: string;
    text: string;
    height: number;
}

function Header({title, text, height} : props) {
  return (
    <>
      <section className={styles.Header} style={{height: `${height}vh`}}>
        <div className={styles.Header__div_content}>
          <Title text={title} type={1} color="white" align="left" />
          <p>
            {text}
          </p>
        </div>
      </section>
    </>
  );
}

export { Header };
