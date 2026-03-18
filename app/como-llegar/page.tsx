'use client';

import { useState } from 'react';
import TransportCard from '@/components/cards/TransportCard';
import styles from '@/styles/pages/como-llegar.module.css';
import { FiMapPin, FiClock, FiNavigation, FiInfo } from 'react-icons/fi';

export default function ComoLlegar() {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  const routes = [
    {
      id: 'merida',
      city: 'Desde Mérida',
      icon: '🏔️',
      distance: '120 km',
      time: '2.5 - 3 horas',
      route: 'Carretera Trasandina vía El Vigía, desvío a Santa Cruz de Mora',
      details: [
        'Ruta panorámica con vistas a los Andes',
        'Carretera mayormente asfaltada',
        'Recomendable vehículo 4x4 en temporada de lluvias',
        'Hay paradas para fotos y descanso'
      ]
    },
    {
      id: 'vigia',
      city: 'Desde El Vigía',
      icon: '🚗',
      distance: '60 km',
      time: '1.5 horas',
      route: 'Vía Santa Cruz de Mora, continuar por carretera principal',
      details: [
        'Ruta más corta y directa',
        'Buenas condiciones de carretera',
        'Pasas por plantaciones de café',
        'Opción de transporte público disponible'
      ]
    }
  ];

  const transportOptions = [
    {
      title: 'Transporte Público',
      description: 'Autobuses y por puestos desde terminales de Mérida y El Vigía',
      icon: '🚌',
      details: [
        'Salidas cada hora desde Mérida',
        'Pasaje aproximadamente $3-5',
        'Empresas: Expressos Zea, Los Andes',
        'Duración: 3-4 horas'
      ]
    },
    {
      title: 'Vehículo Particular',
      description: 'Ideal para libertad de horarios y paradas en el camino',
      icon: '🚗',
      details: [
        'Carretera principal en buen estado',
        'Estacionamiento en el pueblo',
        'Recomendable vehículo alto',
        'Gasolinera en Santa Cruz de Mora'
      ]
    },
    {
      title: 'Servicio de Guías',
      description: 'Transporte incluido con guía local que conoce la zona',
      icon: '🧭',
      accent: true,
      details: [
        'Pick up en tu hospedaje',
        'Paradas en miradores',
        'Explicación de la historia local',
        'Incluye visita a Pozo Azul'
      ]
    }
  ];

  const tips = [
    {
      icon: '⏰',
      title: 'Mejor época',
      description: 'Diciembre a abril (temporada seca) para mejor acceso a senderos',
      color: '#ecc9bd'
    },
    {
      icon: '🧥',
      title: 'Clima',
      description: 'Temperatura promedio 15-20°C. Lleva ropa de abrigo y impermeable',
      color: '#dea080'
    },
    {
      icon: '💧',
      title: 'Hidratación',
      description: 'Lleva agua y snacks. Hay pocos negocios en el camino',
      color: '#db4b4e'
    },
    {
      icon: '📱',
      title: 'Comunicación',
      description: 'Señal de Movilnet y Movistar en la mayoría del trayecto',
      color: '#e6a36a'
    },
    {
      icon: '⛽',
      title: 'Combustible',
      description: 'Llena el tanque en Mérida o El Vigía antes de salir',
      color: '#394a34'
    },
    {
      icon: '💰',
      title: 'Efectivo',
      description: 'Lleva efectivo, no hay cajeros automáticos en Zea',
      color: '#ecc9bd'
    }
  ];

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Cómo llegar a Zea</h1>
          <p className={styles.heroSubtitle}>
            Tu guía completa para llegar al Rinconcito Encantado de los Andes
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.section}>
        <div className={styles.container}>
          {/* Quick Info Stats */}
          <div className={styles.quickInfo}>
            <div className={styles.quickInfoItem}>
              <div className={styles.quickInfoValue}>2.5h</div>
              <div className={styles.quickInfoLabel}>Desde Mérida</div>
            </div>
            <div className={styles.quickInfoItem}>
              <div className={styles.quickInfoValue}>1.5h</div>
              <div className={styles.quickInfoLabel}>Desde El Vigía</div>
            </div>
            <div className={styles.quickInfoItem}>
              <div className={styles.quickInfoValue}>3</div>
              <div className={styles.quickInfoLabel}>Rutas disponibles</div>
            </div>
            <div className={styles.quickInfoItem}>
              <div className={styles.quickInfoValue}>15°C</div>
              <div className={styles.quickInfoLabel}>Clima promedio</div>
            </div>
          </div>

          {/* Routes and Transport Grid */}
          <div className={styles.grid}>
            {/* Routes Section */}
            <div className={styles.routesSection}>
              <h2 className={styles.sectionTitle}>
                <FiMapPin style={{ marginRight: '0.5rem', display: 'inline' }} />
                Rutas de Acceso
              </h2>
              
              <div className={styles.routeCards}>
                {routes.map((route) => (
                  <div
                    key={route.id}
                    className={`${styles.routeCard} ${
                      route.id === 'merida' ? styles.merida : styles.vigia
                    } ${activeRoute === route.id ? styles.active : ''}`}
                    onMouseEnter={() => setActiveRoute(route.id)}
                    onMouseLeave={() => setActiveRoute(null)}
                  >
                    <h3 className={styles.routeTitle}>
                      <span>{route.icon}</span> {route.city}
                    </h3>
                    
                    <div className={styles.routeInfo}>
                      <div className={styles.routeInfoItem}>
                        <FiNavigation className={styles.routeInfoIcon} />
                        <strong>Distancia:</strong> {route.distance}
                      </div>
                      <div className={styles.routeInfoItem}>
                        <FiClock className={styles.routeInfoIcon} />
                        <strong>Tiempo:</strong> {route.time}
                      </div>
                    </div>
                    
                    <p className={styles.routeDescription}>
                      <strong>Ruta:</strong> {route.route}
                    </p>
                    
                    {activeRoute === route.id && (
                      <div className={styles.routeDetails}>
                        <h4>Detalles:</h4>
                        <ul>
                          {route.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation Section */}
            <div className={styles.transportSection}>
              <h2 className={styles.sectionTitle}>
                <FiInfo style={{ marginRight: '0.5rem', display: 'inline' }} />
                Opciones de Transporte
              </h2>
              
              <div className={styles.transportGrid}>
                {transportOptions.map((option, index) => (
                  <TransportCard
                    key={index}
                    title={option.title}
                    description={option.description}
                    icon={option.icon}
                    accent={option.accent}
                    details={option.details}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className={styles.tipsSection}>
            <h2 className={styles.tipsTitle}>
              Recomendaciones para tu viaje
            </h2>
            
            <div className={styles.tipsGrid}>
              {tips.map((tip, index) => (
                <div key={index} className={styles.tipCard}>
                  <div className={styles.tipIcon}>{tip.icon}</div>
                  <h3 className={styles.tipTitle}>{tip.title}</h3>
                  <p className={styles.tipDescription}>{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className={styles.mapSection}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>
              <FiMapPin /> Ubicación en el mapa
            </h2>
            
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <span>🗺️ Mapa interactivo de Zea - Próximamente</span>
              </div>
            </div>
            
            <div style={{ marginTop: '1rem', textAlign: 'center', color: '#666' }}>
              <p>Coordenadas: 8°22′N 71°46′O</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>¿Listo para tu aventura?</h2>
            <p className={styles.ctaDescription}>
              Un guía local puede hacer tu experiencia más segura y enriquecedora. 
              Te llevarán a los mejores lugares y compartirán historias fascinantes.
            </p>
            <a href="/solicita-guia" className={styles.ctaButton}>
              Solicita un guía ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}