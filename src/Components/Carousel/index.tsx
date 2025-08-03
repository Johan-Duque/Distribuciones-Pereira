import React, { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: CarouselProps) {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  // Cambiamos el nombre a 'hideButtons' para mayor claridad
  const [hideButtons, setHideButtons] = useState(false);
  const carouselContentRef = useRef<HTMLDivElement>(null);

  // Estados para la funcionalidad de swipe
  const [touchStartX, setTouchStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const totalItems = React.Children.count(children);
  const itemsArray = React.Children.toArray(children);

  useEffect(() => {
    const handleResize = () => {
      // Si el ancho de la ventana es menor a 900px, ocultamos los botones
      if (window.innerWidth < 900) {
        setItemsPerPage(2); // Para tablets o móviles grandes (900px a 500px)
        setHideButtons(true);
      }
      // Si el ancho de la ventana es menor a 500px, mostramos solo 1 item y ocultamos botones
      if (window.innerWidth < 500) {
        setItemsPerPage(1); // Para móviles pequeños (<500px)
        setHideButtons(true); // Se mantienen ocultos
      }
      // Si el ancho de la ventana es 900px o más, mostramos los botones
      else if (window.innerWidth >= 900) {
        setItemsPerPage(3);
        setHideButtons(false);
      }
      // Siempre resetear el índice al reajustar para evitar estados inconsistentes
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llama al montar para establecer el valor inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(totalItems / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
    if (carouselContentRef.current) {
      carouselContentRef.current.style.transition = 'none';
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentTouchX = e.touches[0].clientX;
    const diff = touchStartX - currentTouchX;
    
    if (carouselContentRef.current) {
      const slideWidth = carouselContentRef.current.clientWidth;
      const targetTranslateX = -currentIndex * slideWidth;
      carouselContentRef.current.style.transform = `translateX(${targetTranslateX - diff}px)`;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || touchStartX === 0) {
        setIsDragging(false);
        if (carouselContentRef.current) {
            carouselContentRef.current.style.transition = 'transform 0.5s ease-in-out';
            const slideWidth = carouselContentRef.current.clientWidth;
            carouselContentRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
        return;
    }

    setIsDragging(false);
    const endTouchX = e.changedTouches[0].clientX;
    const diff = touchStartX - endTouchX;

    const threshold = 50; // Distancia mínima de deslizamiento para cambiar de slide

    if (diff > threshold) {
      goToNext();
    } else if (diff < -threshold) {
      goToPrevious();
    } else {
        if (carouselContentRef.current) {
            carouselContentRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
    }
    
    if (carouselContentRef.current) {
      carouselContentRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
    
    setTouchStartX(0);
  };


  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        {/* Renderiza los botones solo si hideButtons es false (pantalla >= 900px) */}
        {!hideButtons && (
          <button onClick={goToPrevious} className={styles.carouselButton}>
            &#8249;
          </button>
        )}
        <div className={styles.carouselContentWrapper}>
          <div
            ref={carouselContentRef}
            className={styles.carouselContent}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const slideStart = slideIndex * itemsPerPage;
              const slideEnd = Math.min(slideStart + itemsPerPage, totalItems);
              const slideItems = itemsArray.slice(slideStart, slideEnd);

              return (
                <div key={slideIndex} className={styles.carouselSlide}>
                  {slideItems.map((item, index) => (
                    <div key={index} className={styles.carouselChildWrapper}>
                      {item}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        {/* Renderiza los botones solo si hideButtons es false (pantalla >= 900px) */}
        {!hideButtons && (
          <button onClick={goToNext} className={styles.carouselButton}>
            &#8250;
          </button>
        )}
      </div>
      <div className={styles.carouselDots}>
        {Array.from({ length: totalSlides }).map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`${styles.dot} ${dotIndex === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(dotIndex)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export { Carousel };
