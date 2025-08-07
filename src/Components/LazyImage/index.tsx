import { useState, useRef, useEffect } from 'react';
import styles from './LazyImage.module.css';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

function LazyImage({ src, alt, className }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let isMounted = true; 
    const currentImgRef = imgRef.current; 

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              if (isMounted) { 
                setIsLoading(false);
                if (currentImgRef) {
                  currentImgRef.src = src;
                }
              }
            };
            img.onerror = () => {
              if (isMounted) { 
                setIsLoading(false);
                setIsError(true);
              }
            };
            observer.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px 200px 0px' }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      isMounted = false; 
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
      observer.disconnect();
    };
  }, [src]);

  return (
    <>
      {isLoading && (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}></div>
        </div>
      )}
      {isError && <div className={styles.error}>Error al cargar la imagen</div>}
      <img
        ref={imgRef}
        alt={alt}
        className={`${className || ''} ${styles.image} ${isLoading || isError ? styles.hidden : ''}`}
      />
    </>
  );
}

export { LazyImage };
