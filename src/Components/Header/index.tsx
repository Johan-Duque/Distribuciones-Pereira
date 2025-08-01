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
      <section className={styles.Header} style={height == 100 ? { marginBottom: 'calc(2 * var(--margin-bottom))' , height: `${height}vh`} : {height: `${height}vh`}}>
        <div className={styles.Header__div_content}>
          <Title text={title} type={1} color="white" align="center" />
          <p>
            {text}
          </p>
        </div>
      </section>
    </>
  );
}

export { Header };
