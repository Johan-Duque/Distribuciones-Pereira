import styles from "./Article.module.css";

interface props {
  title: string;
  text: string;
  src: string;
}

function Article({ title, text, src }: props) {
  return (
    <div className={styles.articleCard}>
      <div className={styles.containerImage}>
        <img src={src} alt={title} className={styles.articleImage} />
      </div>
      <div className={styles.articleContent}>
        <h2 className={styles.articleTitle}>{title}</h2>
        <p className={styles.articleText}>{text}</p>
      </div>
    </div>
  );
}

export { Article };
