import { ReactNode } from 'react';
import styles from './InfoCard.module.css';

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export default function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.body}>{children}</p>
    </div>
  );
}
