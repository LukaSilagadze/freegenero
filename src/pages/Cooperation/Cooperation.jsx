import { FiUsers, FiAward, FiHeart, FiMail } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import styles from './Cooperation.module.css';

const roles = [
  {
    icon: <FiUsers />,
    title: 'Become a FriGenero',
    description:
      'Join us, become a FriGenero, tell us your story and inspire your peers that they too can find a field they love.',
    cta: 'Share Your Story',
  },
  {
    icon: <FiAward />,
    title: 'Become a FriGenero Mentor',
    description:
      'If you want to share your experience with young people who are now choosing a profession, are confused, have many questions and have difficulty making a decision, then definitely write to us!',
    cta: 'Become a Mentor',
  },
  {
    icon: <FiHeart />,
    title: 'Become a FriGenero Sponsor',
    description:
      'FriGenero is a new and innovative project that is still being run without funding. All types of support are important to us — whether it is monetary or resourceful (conference space for courses, course inventory, creation of social media content, etc.). If you think you can support us in any way, be sure to contact us, you will help Georgian youth find themselves and do work that will create great value for both them and the country!',
    cta: 'Support Us',
  },
];

export default function Cooperation() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>Cooperation</h1>
          <p className={styles.heroSubtitle}>
            Become a FriGenero. Join us, become a FriGenero, tell us your story
            and inspire your peers that they too can find a field they love.
          </p>
          <p className={styles.heroNote}>
            <FiMail /> For details, write to us
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="Get Involved"
            title="Ways to Cooperate"
            subtitle="There are many ways you can join the FriGenero mission and make a difference in the lives of Georgian youth."
          />

          <div className={styles.grid}>
            {roles.map((role) => (
              <div key={role.title} className={styles.card}>
                <div className={styles.cardIcon}>{role.icon}</div>
                <h3 className={styles.cardTitle}>{role.title}</h3>
                <p className={styles.cardDescription}>{role.description}</p>
                <Button to="/contact" size="md">
                  {role.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Ready to Make a Difference?</h2>
          <p className={styles.ctaSubtitle}>
            Whether you want to inspire, mentor, or support — every
            contribution helps Georgian youth discover their passion and build
            their future.
          </p>
          <Button to="/contact" size="lg" variant="accent">
            <FiMail /> Contact Us Today
          </Button>
        </div>
      </section>
    </>
  );
}
