import { useState, useEffect, useRef, Children, type TouchEvent, type ReactNode } from 'react';
import styles from './Carousel.module.css';
import { useSeekerContext } from '../../Hooks';
import { Loading } from '../Loading';

interface CarouselProps {
  children: ReactNode;
}

function Carousel({ children }: CarouselProps) {
  const { LoadingSeeker } = useSeekerContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const [hideButtons, setHideButtons] = useState(false);
  const carouselContentRef = useRef<HTMLDivElement>(null);

  const [touchStartX, setTouchStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const totalItems = Children.count(children);
  const itemsArray = Children.toArray(children);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setItemsPerPage(2);
        setHideButtons(true);
      }
      if (window.innerWidth < 500) {
        setItemsPerPage(1);
        setHideButtons(true);
      }
      else if (window.innerWidth >= 900) {
        setItemsPerPage(3);
        setHideButtons(false);
      }
      setCurrentIndex(0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    goToStart();
  }, [LoadingSeeker])

  const totalSlides = Math.ceil(totalItems / itemsPerPage);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToStart = () => {
  setCurrentIndex(0);
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
    setIsDragging(true);
    if (carouselContentRef.current) {
      carouselContentRef.current.style.transition = 'none';
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentTouchX = e.touches[0].clientX;
    const diff = touchStartX - currentTouchX;

    if (carouselContentRef.current) {
      const slideWidth = carouselContentRef.current.clientWidth;
      const targetTranslateX = -currentIndex * slideWidth;
      carouselContentRef.current.style.transform = `translateX(${targetTranslateX - diff}px)`;
    }
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
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

    const threshold = 50;

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
            {LoadingSeeker ? (
              <div className={styles.loadingContainer}>
                <Loading />
              </div>
            ) : (
              Array.from({ length: totalSlides }).map((_, slideIndex) => {
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
              })
            )}
          </div>
        </div>

        {!hideButtons && (
          <button onClick={goToNext} className={styles.carouselButton}>
            &#8250;
          </button>
        )}
      </div>
      <div className={styles.carouselPagination}>
        Página {currentIndex + 1} de {totalSlides}
      </div>
    </div>
  );
};

export { Carousel };