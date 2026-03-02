import { Link } from 'react-router-dom';
import { FiClock, FiUsers, FiStar } from 'react-icons/fi';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import Card from '../../../components/Card/Card';
import Button from '../../../components/Button/Button';
import courses from '../../../data/courses';
import styles from './FeaturedCourses.module.css';

export default function FeaturedCourses() {
  const featured = courses.slice(0, 3);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Our Courses"
          title="Featured Programs"
          subtitle="Explore our most popular courses designed by industry experts to get you job-ready."
        />

        <div className={styles.grid}>
          {featured.map((course) => (
            <Card key={course.id}>
              <Link to={`/courses/${course.id}`} className={styles.courseLink}>
                <div className={styles.imageWrap}>
                  <img src={course.image} alt={course.title} />
                  <span className={styles.category}>{course.category}</span>
                </div>
                <div className={styles.body}>
                  <h3 className={styles.title}>{course.title}</h3>
                  <p className={styles.description}>{course.description}</p>
                  <div className={styles.meta}>
                    <span><FiClock /> {course.duration}</span>
                    <span><FiUsers /> {course.students.toLocaleString()}</span>
                    <span><FiStar /> {course.rating}</span>
                  </div>
                  <div className={styles.footer}>
                    <span className={styles.level}>{course.level}</span>
                    <span className={styles.price}>${course.price}</span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>

        <div className={styles.cta}>
          <Button to="/courses" variant="secondary">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}
