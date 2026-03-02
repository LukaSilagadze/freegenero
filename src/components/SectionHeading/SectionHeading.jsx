import styles from './SectionHeading.module.css';

export default function SectionHeading({ label, title, subtitle, align = 'center' }) {
  return (
    <div className={`${styles.heading} ${styles[align]}`}>
      {label && <span className={styles.label}>{label}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
