// components/VerticalImageSlider.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/vertical-slider.module.css';

interface VerticalImageSliderProps {
  images: string[];
  alt: string;
  interval?: number; // Tiempo entre cambios en ms
}

export default function VerticalImageSlider({ 
  images, 
  alt, 
  interval = 4000 
}: VerticalImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  
  const prevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToImage = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.sliderWrapper}>
        <div 
          className={`${styles.sliderTrack} ${isTransitioning ? styles.transitioning : ''}`}
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={src}
                alt={`${alt} - Imagen ${index + 1}`}
                fill
                className={styles.slideImage}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.slideOverlay}>
                <span className={styles.slideCounter}>
                  {index + 1} / {images.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de navegación */}
      <button 
        onClick={prevImage} 
        className={`${styles.navButton} ${styles.navPrev}`}
        aria-label="Imagen anterior"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8L6 14L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 14H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      <button 
        onClick={nextImage} 
        className={`${styles.navButton} ${styles.navNext}`}
        aria-label="Imagen siguiente"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16L18 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Indicadores de progreso */}
      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Barra de progreso */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ 
            animation: `progress ${interval}ms linear forwards`,
            animationPlayState: isTransitioning ? 'paused' : 'running'
          }}
        />
      </div>
    </div>
  );
}