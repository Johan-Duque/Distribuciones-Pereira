import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>
        Copyright © 2025 Distribuciones Pereira 2025. Prohibida la reproducción
        total o parcial sin autorización.
      </span>
    </footer>
  );
}

export { Footer };
