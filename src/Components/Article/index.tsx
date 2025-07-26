import styles from "./Article.module.css";

interface props {
  img?: string;
  title: string;
  children: string;
  heightImg?: number;
  backgroundColor?: string;
}

function Article({ title, img, heightImg, backgroundColor, children }: props ) {
  return (
    <section
      className={styles.article_container}
      style={{ backgroundColor: backgroundColor }}
    >
      {img && (
        <img
          src={img}
          alt="Img"
          className={styles.article_img}
          style={{ height: heightImg }}
        />
      )}
      <h3 className={styles.article_title}> {title} </h3>
      <p className={styles.article_text}> {children} </p>
    </section>
  );
}

export { Article };
