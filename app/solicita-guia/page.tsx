'use client';

import { useState } from 'react';
import GuideForm from '@/components/GuideForm';
import styles from '@/styles/pages/solicita-guia.module.css';
import { FiChevronDown, FiShield, FiStar, FiClock, FiUsers } from 'react-icons/fi';

export default function SolicitaGuia() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Cuánto cuesta contratar un guía?',
      answer: 'Los precios varían según la duración del tour y el número de personas. Desde $20 por persona para tours de medio día, con descuentos para grupos.'
    },
    {
      question: '¿Los guías hablan otros idiomas?',
      answer: 'Sí, contamos con guías bilingües (inglés) y algunos con conocimiento de otros idiomas. Indícalo en tu solicitud.'
    },
    {
      question: '¿Qué incluye el servicio de guía?',
      answer: 'Incluye acompañamiento experto, conocimiento histórico y cultural, asistencia en rutas, y recomendaciones personalizadas.'
    },
    {
      question: '¿Puedo cancelar mi reserva?',
      answer: 'Sí, con 48 horas de anticipación sin cargo. Cancelaciones posteriores pueden tener un cargo del 50%.'
    }
  ];

  const guides = [
    { name: 'Carlos Méndez', experience: '10 años', specialty: 'Pozo Azul', rating: 4.9 },
    { name: 'María Pérez', experience: '8 años', specialty: 'Ruta del Café', rating: 5.0 },
    { name: 'José Rojas', experience: '12 años', specialty: 'Avistamiento de aves', rating: 4.8 }
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Solicita un Guía</h1>
          <p className={styles.heroSubtitle}>
            Explora Zea con un experto local que te mostrará los mejores rincones
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Panel de información */}
            <div className={styles.infoPanel}>
              <h2>¿Por qué contratar un guía local?</h2>
              
              <div className={styles.benefits}>
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon}>🗺️</span>
                  <div>
                    <h3>Conocimiento profundo</h3>
                    <p>Los guías locales conocen cada rincón, historia y secreto de Zea.</p>
                  </div>
                </div>
                
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon}>🔒</span>
                  <div>
                    <h3>Seguridad</h3>
                    <p>Recorre senderos y lugares remotos con total tranquilidad.</p>
                  </div>
                </div>
                
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon}>💰</span>
                  <div>
                    <h3>Apoyo a la economía local</h3>
                    <p>Contribuyes directamente al desarrollo de las familias de Zea.</p>
                  </div>
                </div>
                
                <div className={styles.benefit}>
                  <span className={styles.benefitIcon}>📸</span>
                  <div>
                    <h3>Experiencias personalizadas</h3>
                    <p>Rutas adaptadas a tus intereses y nivel de experiencia.</p>
                  </div>
                </div>
              </div>

              {/* Guías destacados */}
              <div className={styles.guidePreview}>
                <h3>Nuestros guías destacados</h3>
                <p>Profesionales certificados con años de experiencia</p>
                
                <div className={styles.guideStats}>
                  {guides.map((guide, index) => (
                    <div key={index} className={styles.guideStat}>
                      <div className={styles.guideStatValue}>{guide.rating}</div>
                      <div className={styles.guideStatLabel}>⭐ {guide.specialty}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tarjeta de precios */}
              <div className={styles.priceCard}>
                <div className={styles.priceHeader}>
                  <span className={styles.priceTitle}>Tour privado</span>
                  <span className={styles.priceValue}>
                    $25 <small>/persona</small>
                  </span>
                </div>
                <ul className={styles.priceFeatures}>
                  <li>Guía experto certificado</li>
                  <li>Rutas personalizadas</li>
                  <li>Equipo de seguridad</li>
                  <li>Asistencia 24/7</li>
                </ul>
              </div>

              {/* Contacto de emergencia */}
              <div className={styles.emergencyContact}>
                <h4>📞 Contacto de emergencia</h4>
                <p>+58 414-1234567</p>
                <small>Disponible 24/7 para emergencias</small>
              </div>

              {/* Preguntas frecuentes */}

            {/* Formulario de solicitud */}
            <GuideForm />
          </div>
        </div>
              <div className={styles.faqSection}>
                <h3 className={styles.faqTitle}>Preguntas frecuentes</h3>
                
                {faqs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <div
                      className={`${styles.faqQuestion} ${openFaq === index ? styles.open : ''}`}
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      {faq.question}
                      <FiChevronDown />
                    </div>
                    {openFaq === index && (
                      <div className={styles.faqAnswer}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Sellos de confianza */}
              <div className={styles.trustBadges}>
                <div className={styles.trustBadge}>
                  <FiShield /> <span>100%</span> Seguro
                </div>
                <div className={styles.trustBadge}>
                  <FiStar /> <span>4.9</span> Calificación
                </div>
                <div className={styles.trustBadge}>
                  <FiUsers /> <span>500+</span> Clientes
                </div>
                <div className={styles.trustBadge}>
                  <FiClock /> <span>15</span> años
                </div>
              </div>
            </div>
      </section>
    </div>
  );
}