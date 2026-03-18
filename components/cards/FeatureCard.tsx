import styles from '@/styles/components/cards/feature-card.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  accent?: boolean;
}

export default function FeatureCard({ title, description, icon, accent = false }: FeatureCardProps) {
  return (
    <div className={`${styles.card} ${accent ? styles.accent : ''}`}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.link}>
        <span>Descubrir más →</span>
      </div>
    </div>
  );
}