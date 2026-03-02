import { Link } from 'react-router-dom';
import { FiClock, FiCalendar } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Card from '../../components/Card/Card';
import blogPosts from '../../data/blogPosts';
import { formatDate } from '../../utils/formatDate';
import styles from './Blog.module.css';

export default function Blog() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="Our Blog"
            title="Insights & Resources"
            subtitle="Stay up to date with the latest trends in education, career tips, and industry insights from our expert team."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <Card key={post.id}>
                <Link to={`/blog/${post.slug}`} className={styles.postLink}>
                  <div className={styles.imageWrap}>
                    <img src={post.image} alt={post.title} />
                    <span className={styles.category}>{post.category}</span>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <span><FiCalendar /> {formatDate(post.date)}</span>
                      <span><FiClock /> {post.readTime}</span>
                    </div>
                    <h3 className={styles.title}>{post.title}</h3>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <div className={styles.footer}>
                      <span className={styles.author}>By {post.author}</span>
                      <span className={styles.readMore}>Read More &rarr;</span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
