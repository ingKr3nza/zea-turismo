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
              iconSrc="/icon/park.svg"
              iconAlt="Paisajes"
            />
            <FeatureCard
              title="Turismo Religioso"
              description="Descubre la riqueza espiritual de Zea, sus iglesias coloniales y tradiciones religiosas únicas."
              iconSrc="/icon/church.svg"
              iconAlt="Iglesia"
              accent
            />
            <FeatureCard
              title="Cultura Cafetera"
              description="Conoce el proceso del café de altura y degusta el mejor café de la región, reconocido mundialmente."
              iconSrc="/icon/coffee.svg"
              iconAlt="Café"
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
              <span className={styles.aboutBadge}>Historia y Tradición</span>
              <h3>El Rinconcito Encantado de los Andes</h3>
              <p>
                Zea es una localidad del estado Mérida, enclavada entre las montañas del parque nacional general 
                &ldquo;Juan Pablo Peñaloza&ldquo; (páramos &ldquo;El Batallón&ldquo; y &ldquo;La Negra&ldquo;) y los ríos &ldquo;Escalante&ldquo; y &ldquo;Guaruríes&ldquo;, 
                al sur-oeste del mencionado estado. Su nombre se debe en honor al prócer y vicepresidente de la 
                Gran Colombia, Francisco Antonio Zea.
              </p>
              <p>
                Este hermoso pueblo, gracias a su formación geográfica, disfruta de un agradable clima de templado 
                a frío. Además, cuenta con hermosos riachuelos que brindan a la población agua de manantial para su 
                consumo. Los habitantes mantienen vivas las tradiciones gastronómicas, culturales y religiosas, 
                ofreciendo una experiencia auténtica a sus visitantes.
              </p>
              <div className={styles.aboutFeatures}>
                <div className={styles.aboutFeature}>
                  <div className={styles.aboutFeatureIcon}>
                    <Image 
                      src="/icon/colonial.svg" 
                      alt="Arquitectura Colonial" 
                      width={24} 
                      height={24}
                    />
                  </div>
                  <span>Arquitectura Colonial</span>
                </div>
                <div className={styles.aboutFeature}>
                  <div className={styles.aboutFeatureIcon}>
                    <Image 
                      src="/icon/church.svg" 
                      alt="Tradiciones Religiosas" 
                      width={24} 
                      height={24}
                    />
                  </div>
                  <span>Tradiciones Religiosas</span>
                </div>
                <div className={styles.aboutFeature}>
                  <div className={styles.aboutFeatureIcon}>
                    <Image 
                      src="/icon/coffee.svg" 
                      alt="Producción de Café" 
                      width={24} 
                      height={24}
                    />
                  </div>
                  <span>Producción de Café</span>
                </div>
                <div className={styles.aboutFeature}>
                  <div className={styles.aboutFeatureIcon}>
                    <Image 
                      src="/icon/park.svg" 
                      alt="Parque Nacional" 
                      width={24} 
                      height={24}
                    />
                  </div>
                  <span>Parque Nacional</span>
                </div>
              </div>
              <Button href="/conoce-zea" variant="secondary" size="large">
                Conoce nuestra historia
              </Button>
            </div>
            
            <div className={styles.aboutImageContainer}>
              {/* Imagen principal */}
              <div className={styles.aboutImageMain}>
                <Image 
                  src="/images/zeaHorizontal.jpg" 
                  width={500} 
                  height={350} 
                  alt="Vista panorámica de Zea"
                  className={styles.aboutImage}
                />
                <div className={styles.aboutImageOverlay}>
                  <span className={styles.aboutImageText}>Municipio Zea • Fundado en 1786</span>
                </div>
              </div>
              
              {/* Imágenes secundarias */}
              <div className={styles.aboutImagesGrid}>
                <div className={styles.aboutImageSmall}>
                  <Image 
                    src="/images/mirador.jpg" 
                    width={240} 
                    height={160} 
                    alt="Mirador de Zea"
                    className={styles.aboutImage}
                  />
                  <div className={styles.aboutImageSmallOverlay}>
                    <span>Mirador</span>
                  </div>
                </div>
                <div className={styles.aboutImageSmall}>
                  <Image 
                    src="/images/plaza1.jpg" 
                    width={240} 
                    height={160} 
                    alt="Plaza Bolívar de Zea"
                    className={styles.aboutImage}
                  />
                  <div className={styles.aboutImageSmallOverlay}>
                    <span>Plaza Bolívar</span>
                  </div>
                </div>
              </div>
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