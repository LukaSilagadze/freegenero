import { FiArrowRight } from 'react-icons/fi';
import Button from '../../../components/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <span className={styles.badge}>Trusted by 10,000+ learners worldwide</span>
        <h1 className={styles.title}>
          Unlock Your Potential with <span>World-Class</span> Education
        </h1>
        <p className={styles.subtitle}>
          FreeGenero offers expert-led courses in technology, design, and
          business. Build real skills, earn credentials, and advance your
          career — on your schedule.
        </p>
        <div className={styles.actions}>
          <Button to="/courses" size="lg" variant="accent">
            Explore Courses <FiArrowRight />
          </Button>
          <Button to="/about" variant="secondary" size="lg" className={styles.outlineBtn}>
            Learn More
          </Button>
        </div>
        <div className={styles.stats}>
          <div>
            <strong>50+</strong>
            <span>Courses</span>
          </div>
          <div>
            <strong>10K+</strong>
            <span>Students</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>Expert Instructors</span>
          </div>
        </div>
      </div>
    </section>
  );
}
