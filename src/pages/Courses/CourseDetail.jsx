import { useParams, Link } from 'react-router-dom';
import { FiClock, FiUsers, FiStar, FiArrowLeft, FiCheck } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import courses from '../../data/courses';
import styles from './CourseDetail.module.css';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Course Not Found</h2>
          <p style={{ margin: '1rem 0' }}>The course you are looking for does not exist.</p>
          <Button to="/courses">Back to Courses</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <Link to="/courses" className={styles.back}>
          <FiArrowLeft /> Back to Courses
        </Link>

        <div className={styles.layout}>
          <div className={styles.main}>
            <span className={styles.category}>{course.category}</span>
            <h1 className={styles.title}>{course.title}</h1>
            <p className={styles.description}>{course.description}</p>

            <div className={styles.meta}>
              <span><FiClock /> {course.duration}</span>
              <span><FiUsers /> {course.students.toLocaleString()} students</span>
              <span><FiStar /> {course.rating} rating</span>
              <span>Level: {course.level}</span>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>What You Will Learn</h2>
              <ul className={styles.highlights}>
                {course.highlights.map((item) => (
                  <li key={item}>
                    <FiCheck className={styles.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Instructor</h2>
              <p className={styles.instructor}>{course.instructor}</p>
            </div>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.card}>
              <img src={course.image} alt={course.title} className={styles.cardImage} />
              <div className={styles.cardBody}>
                <div className={styles.priceRow}>
                  <span className={styles.price}>${course.price}</span>
                </div>
                <Button className={styles.enrollBtn}>Enroll Now</Button>
                <ul className={styles.details}>
                  <li><strong>Duration:</strong> {course.duration}</li>
                  <li><strong>Level:</strong> {course.level}</li>
                  <li><strong>Category:</strong> {course.category}</li>
                  <li><strong>Students:</strong> {course.students.toLocaleString()}</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
