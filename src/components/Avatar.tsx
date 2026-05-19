import styles from './Avatar.module.css';

export default function Avatar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.ring}>
        <img
          className={styles.image}
          src="https://ewbgpvlexeafgpwsjqei.supabase.co/storage/v1/object/public/prompt-images/build-images/1779195141589-WhatsApp-Image-2026-04-15-at-10.02.47-PM.jpeg"
          alt="Profile avatar"
        />
      </div>
      <span className={styles.status} aria-label="Available" />
    </div>
  );
}
