'use client';

import { useState } from 'react';
import TransportCard from '@/components/cards/TransportCard';
import styles from '@/styles/pages/como-llegar.module.css';
import { 
  FiMapPin, 
  FiClock, 
  FiNavigation, 
  FiInfo, 
  FiTarget,
  FiDroplet,
  FiSmartphone,
  FiDollarSign,
  FiCalendar,
  FiThermometer,
  FiUsers,
  FiUser,
  FiTruck,
  FiWind,
  FiMap
} from 'react-icons/fi';
import Image from 'next/image';

export default function ComoLlegar() {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const [origin, setOrigin] = useState('');

  const routes = [
    {
      id: 'merida',
      city: 'Desde Mérida',
      icon: <FiMap />,
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
      icon: <FiNavigation />,
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
      icon: <FiTruck />,
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
      icon: <FiUser />,
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
      icon: <FiUsers />,
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
      icon: <FiCalendar />,
      title: 'Mejor época',
      description: 'Diciembre a abril (temporada seca) para mejor acceso a senderos'
    },
    {
      icon: <FiThermometer />,
      title: 'Clima',
      description: 'Temperatura promedio 15-20°C. Lleva ropa de abrigo y impermeable'
    },
    {
      icon: <FiDroplet />,
      title: 'Hidratación',
      description: 'Lleva agua y snacks. Hay pocos negocios en el camino'
    },
    {
      icon: <FiSmartphone />,
      title: 'Comunicación',
      description: 'Señal de Movilnet y Movistar en la mayoría del trayecto'
    },
    {
      icon: <FiWind />,
      title: 'Combustible',
      description: 'Llena el tanque en Mérida o El Vigía antes de salir'
    },
    {
      icon: <FiDollarSign />,
      title: 'Dinero',
      description: 'Lleva efectivo o tarjeta, no hay cajeros automáticos en Zea'
    }
  ];

  const handlePlanRoute = (e: React.FormEvent) => {
    e.preventDefault();
    if (origin.trim()) {
      const destination = 'Zea, Mérida, Venezuela';
      const mapsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(origin)}/${encodeURIComponent(destination)}`;
      window.open(mapsUrl, '_blank');
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <Image 
            src="/images/hero-como-llega.jpg" 
            alt="Cómo llegar a Zea" 
            fill
            className={styles.heroImage}
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Rutas y Transporte • Zea • Mérida</span>
          <h1 className={styles.heroTitle}>
            Cómo llegar a <span className={styles.heroHighlight}>Zea</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Tu guía completa para llegar al Rinconcito Encantado de los Andes
          </p>
          <div className={styles.heroButtons}>
            <a href="#routes" className={styles.heroButtonPrimary}>
              Ver rutas
            </a>
            <a href="/solicita-guia" className={styles.heroButtonSecondary}>
              Solicitar guía
            </a>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span className={styles.scrollText}>Desliza para explorar</span>
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
            <div className={styles.routesSection} id="routes">
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
                      <span className={styles.routeIcon}>{route.icon}</span> {route.city}
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
              <FiTarget /> Ubicación en el mapa
            </h2>
            
            {/* Planificador de ruta */}
            <div className={styles.routePlanner}>
              <h3 className={styles.routePlannerTitle}>Planifica tu ruta</h3>
              <p className={styles.routePlannerDesc}>
                Ingresa tu ubicación de origen y te mostraremos la mejor ruta hacia Zea
              </p>
              <form onSubmit={handlePlanRoute} className={styles.routeForm}>
                <div className={styles.routeInputGroup}>
                  <input
                    type="text"
                    placeholder="Ej: Mérida, Venezuela"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className={styles.routeInput}
                  />
                  <button type="submit" className={styles.routeButton}>
                    Trazar ruta
                  </button>
                </div>
              </form>
            </div>

            {/* Mapa embebido */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126291.35203245812!2d-71.76298395!3d8.44041705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e64226963cc46c7%3A0x2c45a78c21dd89cb!2zWmVhLCA1MTQ0LCBNw6lyaWRh!5e0!3m2!1ses!2sve!4v1779573866707!5m2!1ses!2sve"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Zea"
              />
            </div>
            
            <div className={styles.mapCoordinates}>
              <p>
                <FiMapPin style={{ marginRight: '0.5rem', color: 'var(--color-accent2)' }} />
                Coordenadas: <strong>8°22′N 71°46′O</strong>
              </p>
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