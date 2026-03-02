import { FiBookOpen, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import styles from './Stats.module.css';

const stats = [
  { icon: <FiBookOpen />, value: '50+', label: 'Courses Available' },
  { icon: <FiUsers />, value: '10,000+', label: 'Active Students' },
  { icon: <FiAward />, value: '95%', label: 'Completion Rate' },
  { icon: <FiGlobe />, value: '30+', label: 'Countries Reached' },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <div className={styles.icon}>{stat.icon}</div>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
