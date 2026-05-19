import styles from './SkillTag.module.css';

type SkillTagProps = {
  label: string;
};

export default function SkillTag({ label }: SkillTagProps) {
  return <span className={styles.tag}>{label}</span>;
}
