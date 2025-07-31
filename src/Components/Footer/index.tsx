import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        Copyright © 2025 Distribuciones Pereira 2025. Prohibida la reproducción
        total o parcial sin autorización.
      </span>
    {/*
          <div className={styles.footer_container}>
        <div className={styles.links_container}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/form">Form</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className={styles.social_media_container}>
          <ul>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    */}
    </footer>
  );
}

export { Footer };
