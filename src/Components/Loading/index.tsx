import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading_overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export { Loading };
