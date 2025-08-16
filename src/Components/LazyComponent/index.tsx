import { useState, useRef, useEffect, type ReactNode } from "react";
import styles from "./LazyComponent.module.css";

interface LazyComponentProps {
  children: ReactNode;
}

function LazyComponent({ children }: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = placeholderRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        rootMargin: "0px 200px 200px 200px",
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      {isVisible ? (
        children
      ) : (
        <div ref={placeholderRef} className={styles.lazyComponent}>
          <div className={styles.loader}></div>
        </div>
      )}
    </>
  );
}

export { LazyComponent };