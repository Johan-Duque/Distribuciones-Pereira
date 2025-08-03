import styles from './Error.module.css';

interface ErrorProps {
  message: string ;
}

function Error({ message }: ErrorProps) {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorMessage}>
        <strong>Error:</strong> {message}
      </div>
    </div>
  );
}

export { Error };
