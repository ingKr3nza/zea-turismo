import styles from '@/styles/components/cards/attraction-card.module.css';
import { FiMapPin, FiClock, FiUsers } from 'react-icons/fi';
import Image from 'next/image';

interface AttractionCardProps {
  name: string;
  location: string;
  imageUrl: string;
  badgeText?: string;
  price?: string;
  duration?: string;
  maxPeople?: number;
}

export default function AttractionCard({
  name,
  location,
  imageUrl,
  badgeText,
  price,
  duration,
  maxPeople
}: AttractionCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={name} className={styles.image} width={400} height={400} />
        <div className={styles.overlay} />
      </div>
      
      {price && <div className={styles.price}>{price}</div>}
      
      <div className={styles.content}>
        {badgeText && <span className={styles.badge}>{badgeText}</span>}
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.location}>
          <FiMapPin /> {location}
        </div>
        
        <div className={styles.stats}>
          {duration && (
            <div className={styles.stat}>
              <FiClock /> {duration}
            </div>
          )}
          {maxPeople && (
            <div className={styles.stat}>
              <FiUsers /> Hasta {maxPeople} personas
            </div>
          )}
        </div>
      </div>
    </div>
  );
}