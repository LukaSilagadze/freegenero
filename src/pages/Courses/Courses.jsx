import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUsers, FiStar, FiSearch } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Card from '../../components/Card/Card';
import courses from '../../data/courses';
import styles from './Courses.module.css';

const categories = ['All', ...new Set(courses.map((c) => c.category))];

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = courses.filter((course) => {
    const matchesCategory =
      activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Learn & Grow"
          title="All Courses"
          subtitle="Browse our comprehensive catalog of courses designed to take you from beginner to professional."
        />

        <div className={styles.controls}>
          <div className={styles.searchWrap}>
            <FiSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.search}
            />
          </div>

          <div className={styles.filters}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>
            No courses found matching your criteria. Try a different search or filter.
          </p>
        ) : (
          <div className={styles.grid}>
            {filtered.map((course) => (
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
        )}
      </div>
    </section>
  );
}
