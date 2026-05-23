'use client';
import styles from '@/styles/components/hero.module.css';
import Image from 'next/image';

export default function Hero() {
  
  return (
    <section className={styles.hero}>
      <div className={styles.videoBackground}>
        <Image
          className={styles.videoIframe}
          src="/zeaHero.jpg"
          width={1200}
          height={1200}
          alt=''
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Descubre el <span className={styles.highlight}>Rinconcito Encantado</span> de los Andes
        </h1>
        <p className={styles.subtitle}>
          Zea: Paisajes de ensueño, Pozo Azul, café de altura y la calidez de su gente te esperan para una experiencia inolvidable.
        </p>
        <div className={styles.buttonGroup}>
          <a href="/conoce-zea" className={styles.button}>
            Explorar Zea
          </a>
          <a href="/solicita-guia" className={`${styles.button} ${styles.buttonOutline}`}>
            Solicitar Guía
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}