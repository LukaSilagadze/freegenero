import { FiTarget, FiHeart, FiTrendingUp, FiUsers } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import styles from './About.module.css';

const values = [
  {
    icon: <FiTarget />,
    title: 'Mission-Driven',
    description:
      'We believe quality education should be accessible to everyone, regardless of background or location.',
  },
  {
    icon: <FiHeart />,
    title: 'Student-First',
    description:
      'Every decision we make starts with a simple question: will this make our students more successful?',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Industry-Relevant',
    description:
      'Our curriculum is continuously updated with input from hiring managers and industry leaders.',
  },
  {
    icon: <FiUsers />,
    title: 'Community-Powered',
    description:
      'Learning is better together. Our community of learners, mentors, and alumni supports every student.',
  },
];

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="About Us"
            title="Empowering Learners Since 2020"
            subtitle="FreeGenero was founded with a simple mission: make world-class education accessible to everyone, everywhere."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyContent}>
              <h2 className={styles.storyTitle}>Our Story</h2>
              <p>
                FreeGenero started as a small group of educators and technologists
                who saw a gap in the market for practical, career-focused online
                education. Traditional universities were slow to adapt to the
                rapidly changing tech landscape, and existing online platforms
                often prioritized quantity over quality.
              </p>
              <p>
                We set out to build something different — a learning platform
                where every course is crafted by industry practitioners, every
                project mirrors real-world challenges, and every student receives
                the support they need to succeed.
              </p>
              <p>
                Today, FreeGenero serves over 10,000 students across 30+
                countries, with a 95% course completion rate and an extensive
                alumni network working at leading companies worldwide.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=450&fit=crop"
                alt="Team collaborating in a modern office"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Values"
            subtitle="These principles guide everything we do at FreeGenero."
          />
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.numbers}>
            <div className={styles.numberItem}>
              <span className={styles.numberValue}>10,000+</span>
              <span className={styles.numberLabel}>Students Enrolled</span>
            </div>
            <div className={styles.numberItem}>
              <span className={styles.numberValue}>50+</span>
              <span className={styles.numberLabel}>Expert-Led Courses</span>
            </div>
            <div className={styles.numberItem}>
              <span className={styles.numberValue}>95%</span>
              <span className={styles.numberLabel}>Completion Rate</span>
            </div>
            <div className={styles.numberItem}>
              <span className={styles.numberValue}>30+</span>
              <span className={styles.numberLabel}>Countries Served</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
