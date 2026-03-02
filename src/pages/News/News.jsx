import { Link } from 'react-router-dom';
import { FiCalendar } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Card from '../../components/Card/Card';
import news from '../../data/news';
import { formatDate } from '../../utils/formatDate';
import styles from './News.module.css';

export default function News() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="Stay Updated"
            title="News"
            subtitle="The latest updates about our courses, events, partnerships, and student achievements at FreeGenero."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          {news.length > 0 && (
            <Card className={styles.featured}>
              <Link to={`/news/${news[0].slug}`} className={styles.featuredLink}>
                <div className={styles.featuredImage}>
                  <img src={news[0].image} alt={news[0].title} />
                </div>
                <div className={styles.featuredBody}>
                  <span className={styles.category}>{news[0].category}</span>
                  <h2 className={styles.featuredTitle}>{news[0].title}</h2>
                  <p className={styles.featuredExcerpt}>{news[0].excerpt}</p>
                  <div className={styles.meta}>
                    <FiCalendar /> {formatDate(news[0].date)}
                  </div>
                </div>
              </Link>
            </Card>
          )}

          <div className={styles.grid}>
            {news.slice(1).map((item) => (
              <Card key={item.id}>
                <Link to={`/news/${item.slug}`} className={styles.postLink}>
                  <div className={styles.imageWrap}>
                    <img src={item.image} alt={item.title} />
                    <span className={styles.badge}>{item.category}</span>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.meta}>
                      <FiCalendar /> {formatDate(item.date)}
                    </div>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.excerpt}>{item.excerpt}</p>
                    <span className={styles.readMore}>Read More &rarr;</span>
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
