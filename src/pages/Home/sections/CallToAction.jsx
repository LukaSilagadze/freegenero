import Button from '../../../components/Button/Button';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Ready to Start Your Learning Journey?</h2>
        <p className={styles.subtitle}>
          Join thousands of learners who have transformed their careers with
          FreeGenero. Enroll today and take the first step toward your goals.
        </p>
        <div className={styles.actions}>
          <Button to="/courses" size="lg" variant="accent">
            Browse Courses
          </Button>
          <Button to="/contact" size="lg" variant="secondary" className={styles.secondaryBtn}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
