import styles from './Avatar.module.css';

export default function Avatar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.ring}>
        <img
          className={styles.image}
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=faces"
          alt="Profile avatar"
        />
      </div>
      <span className={styles.status} aria-label="Available" />
    </div>
  );
}
