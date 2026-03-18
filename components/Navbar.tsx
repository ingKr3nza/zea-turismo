'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const navbarClass = `
    ${styles.navbar} 
    ${scrolled || !isHomePage ? styles.navbarSolid : styles.navbarTransparent}
  `;

  const menuItemClass = (isHomePage && !scrolled) ? styles.menuItemLight : styles.menuItemDark;

  return (
    <>
      <nav className={navbarClass}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            <Link href="/" className={`${styles.logo} ${isHomePage && !scrolled ? styles.logoWhite : ''}`}>
              <span className={styles.logoIcon}>🏔️</span>
              Zea Turismo
            </Link>

            <div className={styles.menu}>
              <Link href="/" className={`${styles.menuItem} ${menuItemClass}`}>Inicio</Link>
              <Link href="/conoce-zea" className={`${styles.menuItem} ${menuItemClass}`}>Conoce a Zea</Link>
              <Link href="/como-llegar" className={`${styles.menuItem} ${menuItemClass}`}>Cómo llegar</Link>
              <Link href="/solicita-guia" className={`${styles.menuItem} ${menuItemClass}`}>Solicita un guía</Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${styles.mobileButton} ${isHomePage && !scrolled ? styles.logoWhite : ''}`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}