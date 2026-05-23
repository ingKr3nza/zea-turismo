'use client';

import { useState } from 'react';
import styles from '@/styles/components/cards/transport-card.module.css'
import { FiInfo } from 'react-icons/fi';

interface TransportCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accent?: boolean;
  details?: string[];
}

export default function TransportCard({ 
  title, 
  description, 
  icon, 
  accent = false,
  details = []
}: TransportCardProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`${styles.card} ${accent ? styles.accent : ''}`}>
      <div className={styles.iconWrapper}>{icon}</div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {details.length > 0 && (
          <>
            <button 
              onClick={() => setShowDetails(!showDetails)}
              className={styles.detailsButton}
            >
              <FiInfo /> {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
            </button>
            
            {showDetails && (
              <ul className={styles.detailsList}>
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}