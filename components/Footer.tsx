'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/footer.module.css';
import { colors } from '@/components/theme';
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiArrowRight, 
  FiArrowUp,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiClock 
} from 'react-icons/fi';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de suscripción
    alert(`¡Gracias por suscribirte! Te contactaremos en ${email}`);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '/conoce-zea', label: 'Conoce a Zea' },
    { href: '/como-llegar', label: 'Cómo llegar' },
    { href: '/solicita-guia', label: 'Solicita un guía' },
  ];

  const contactInfo = [
    { icon: <FiMapPin />, text: 'Zea, Estado Mérida, Venezuela', link: null },
    { icon: <FiMail />, text: 'info@zeaturismo.com', link: 'mailto:info@zeaturismo.com' },
    { icon: <FiPhone />, text: '+58 412-1234567', link: 'tel:+584121234567' },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <FiInstagram />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  const hours = [
    { day: 'Lunes a Viernes', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sábados', hours: '9:00 AM - 4:00 PM' },
    { day: 'Domingos', hours: '9:00 AM - 2:00 PM' },
  ];

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* Grid principal */}
          <div className={styles.grid}>
            {/* Columna 1: Marca y descripción */}
            <div className={styles.brandSection}>
              <div className={styles.logo}>
                <span className={styles.logoIcon}>🏔️</span>
                <span className={styles.logoText}>Zea Turismo</span>
              </div>
              
              <p className={styles.description}>
                Promoviendo el turismo sostenible en el &quot;Rinconcito Encantado&quot; 
                de los Andes Venezolanos. Descubre la magia de nuestras montañas, 
                café y tradiciones.
              </p>

              {/* Redes sociales */}
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Badge de ubicación */}
              <div className={styles.locationBadge}>
                🌎 Patrimonio Cultural de los Andes
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div className={styles.quickLinks}>
              <h3 className={styles.sectionTitle}>Enlaces rápidos</h3>
              
              <ul className={styles.linksList}>
                {quickLinks.map((link, index) => (
                  <li key={index} className={styles.linkItem}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                      <FiArrowRight className={styles.linkIcon} />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className={styles.newsletter}>
                <h4 className={styles.newsletterTitle}>
                  Recibe nuestras novedades
                </h4>
                <form onSubmit={handleNewsletterSubmit} className={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={styles.newsletterInput}
                    required
                  />
                  <button type="submit" className={styles.newsletterButton}>
                    <FiArrowRight />
                  </button>
                </form>
              </div>
            </div>

            {/* Columna 3: Contacto y horarios */}
            <div className={styles.contactSection}>
              <h3 className={styles.sectionTitle}>Contacto</h3>
              
              <ul className={styles.contactList}>
                {contactInfo.map((item, index) => (
                  <li key={index} className={styles.contactItem}>
                    <span className={styles.contactIcon}>{item.icon}</span>
                    {item.link ? (
                      <a href={item.link} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* Horario de atención */}
              <div className={styles.hours}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#e6a36a' }}>
                  <FiClock /> Horario de atención
                </h4>
                {hours.map((item, index) => (
                  <div key={index} className={styles.hoursItem}>
                    <span className={styles.hoursDay}>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Barra inferior */}
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              ©2026 CIDDRAS. Todos los derechos reservados.
              <br />
              <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>
                Diseñado con ❤️ para promover el turismo en Zea
              </span>
            </div>
            
            <div className={styles.legalLinks}>
              <Link href="/terminos" className={styles.legalLink}>
                Términos y condiciones
              </Link>
              <Link href="/privacidad" className={styles.legalLink}>
                Política de privacidad
              </Link>
              <Link href="/cookies" className={styles.legalLink}>
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón Volver arriba */}
      <button
        onClick={scrollToTop}
        className={styles.visible}
        aria-label="Volver arriba"
      >
        <FiArrowUp />
      </button>
    </>
  );
}