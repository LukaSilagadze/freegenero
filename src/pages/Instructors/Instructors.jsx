import { FiBookOpen, FiUsers } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Card from '../../components/Card/Card';
import instructors from '../../data/instructors';
import styles from './Instructors.module.css';

export default function Instructors() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="Our Team"
            title="Meet Our Instructors"
            subtitle="Learn from industry professionals who bring real-world experience and passion for teaching to every lesson."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {instructors.map((instructor) => (
              <Card key={instructor.id}>
                <div className={styles.card}>
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className={styles.avatar}
                  />
                  <h3 className={styles.name}>{instructor.name}</h3>
                  <p className={styles.role}>{instructor.role}</p>
                  <p className={styles.bio}>{instructor.bio}</p>
                  <div className={styles.specialties}>
                    {instructor.specialties.map((s) => (
                      <span key={s} className={styles.tag}>{s}</span>
                    ))}
                  </div>
                  <div className={styles.stats}>
                    <span><FiBookOpen /> {instructor.courses} Course{instructor.courses !== 1 ? 's' : ''}</span>
                    <span><FiUsers /> {instructor.students.toLocaleString()} Students</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
