import { FiArrowRight } from 'react-icons/fi';
import Button from '../../../components/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <h1 className={styles.title}>
        აღმოაჩინე <span>პროფესიები</span> და იპოვე საყვარელი საქმე ჩვენთან ერთად
        </h1>
        <p className={styles.subtitle}>
        ფრიჯენერო გთავაზობთ მოკლე კურსებს პროფესიების შესახებ, რომლებსაც უძღვებიან შესაბამის სფეროში დასაქმებული წარმატებული ადამიანები 
        </p>
        <div className={styles.actions}>
          <Button to="/courses" size="lg" variant="accent">
            კურსების ნახვა <FiArrowRight />
          </Button>
          <Button to="/about" variant="secondary" size="lg" className={styles.outlineBtn}>
            მეტის ნახვა
          </Button>
        </div>
      </div>
    </section>
  );
}
