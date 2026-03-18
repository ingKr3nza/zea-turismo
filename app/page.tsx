'use client';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/cards/FeatureCard';
import AttractionCard from '@/components/cards/AttractionCard';
import Button from '@/components/Button';
import styles from '@/styles/pages/home.module.css';
import Image from 'next/image';

export default function Home() {
  const [stats, setStats] = useState({
    visitantes: 0,
    guias: 0,
    rutas: 0,
    añosHistoria: 0
  });

  useEffect(() => {
    // Animación de números
    const animateValue = (start: number, end: number, duration: number, key: keyof typeof stats) => {
      const increment = (end - start) / (duration / 10);
      let current = start;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setStats(prev => ({ ...prev, [key]: Math.round(current) }));
      }, 10);
    };

    animateValue(0, 15000, 2000, 'visitantes');
    animateValue(0, 25, 2000, 'guias');
    animateValue(0, 12, 2000, 'rutas');
    animateValue(0, 238, 2000, 'añosHistoria');
  }, []);

  return (
    <div className={styles.page}>
      <Hero />

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>¿Por qué visitar Zea?</h2>
            <p>Descubre las experiencias únicas que te esperan en el Rinconcito Encantado</p>
          </div>

          <div className={styles.grid}>
            <FeatureCard
              title="Paisajes Andinos"
              description="Disfruta de vistas espectaculares de los Andes venezolanos, con montañas verdes y clima perfecto."
              icon="🏔️"
            />
            <FeatureCard
              title="Pozo Azul"
              description="Un paraíso natural de aguas cristalinas turquesa, ideal para senderismo y fotografía."
              icon="💧"
              accent
            />
            <FeatureCard
              title="Cultura Cafetera"
              description="Conoce el proceso del café de altura y degusta el mejor café de la región."
              icon="☕"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{stats.visitantes}+</div>
              <div className={styles.statLabel}>Visitantes al año</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{stats.guias}</div>
              <div className={styles.statLabel}>Guías locales</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{stats.rutas}</div>
              <div className={styles.statLabel}>Rutas turísticas</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{stats.añosHistoria}</div>
              <div className={styles.statLabel}>Años de historia</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h3>El Rinconcito Encantado de los Andes</h3>
              <p>
                Zea es un municipio con una rica historia que data de 1786, cuando fue formalmente poblado. 
                Sus tierras, habitadas inicialmente por los indios motilones, hoy albergan un pueblo lleno 
                de encanto colonial y tradiciones vivas.
              </p>
              <p>
                La economía local gira en torno a la producción de café de altura, considerado uno de los 
                mejores de Venezuela. Además, su principal atractivo turístico, Pozo Azul, atrae visitantes 
                de todo el país buscando aventura y contacto con la naturaleza.
              </p>
              <Button href="/conoce-zea" variant="secondary" size="large">
                Conoce nuestra historia
              </Button>
            </div>
            <div className={styles.aboutImage}>
              <Image src="/zeaHorizontal.jpg" width={400} height={400} alt="Vista panorámica de Zea" />
            </div>
          </div>
        </div>
      </section>

      {/* Attractions Preview */}
      <section className={styles.featuresSection} style={{ background: '#f5f5f5' }}>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <h2>Atracciones destacadas</h2>
            <p>Lugares que no puedes dejar de visitar en Zea</p>
          </div>

          <div className={styles.grid}>
            <AttractionCard
              name="Pozo Azul"
              location="Aldea Los Giros"
              imageUrl="/pozo_azul.jpg"
              badgeText="Imperdible"
              price="Entrada: $5"
              duration="Todo el día"
              maxPeople={15}
            />
            <AttractionCard
              name="Mirador de Zea"
              location="Parroquia Zea"
              imageUrl="/zea.jpg"
              price="Gratis"
              duration="1-2 horas"
              maxPeople={20}
            />
            <AttractionCard
              name="Recorrido al casco histórico"
              location="Parroquia Zea"
              imageUrl="/iglesia.jpg"
              badgeText="Aventura"
              duration="4 horas"
              maxPeople={8}
            />
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button href="/conoce-zea" variant="primary" size="large">
              Ver todas las atracciones
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}