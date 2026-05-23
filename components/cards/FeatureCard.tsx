import styles from '@/styles/components/cards/feature-card.module.css';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  accent?: boolean;
}

export default function FeatureCard({ title, description, iconSrc, iconAlt, accent = false }: FeatureCardProps) {
  return (
    <div className={`${styles.card} ${accent ? styles.accent : ''}`}>
      <div className={styles.iconWrapper}>
        <Image 
          src={iconSrc} 
          alt={iconAlt} 
          width={40} 
          height={40}
          className={styles.icon}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.link}>
        <span>Descubrir más →</span>
      </div>
    </div>
  );
}