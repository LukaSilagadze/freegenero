import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiArrowLeft } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import news from '../../data/news';
import { formatDate } from '../../utils/formatDate';
import styles from './NewsArticle.module.css';

export default function NewsArticle() {
  const { slug } = useParams();
  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return (
      <div className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Article Not Found</h2>
          <p style={{ margin: '1rem 0' }}>The news article you are looking for does not exist.</p>
          <Button to="/news">Back to News</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <Link to="/news" className={styles.back}>
          <FiArrowLeft /> Back to News
        </Link>

        <article className={styles.article}>
          <div className={styles.header}>
            <span className={styles.category}>{article.category}</span>
            <h1 className={styles.title}>{article.title}</h1>
            <div className={styles.meta}>
              <span><FiCalendar /> {formatDate(article.date)}</span>
            </div>
          </div>

          <img src={article.image} alt={article.title} className={styles.image} />

          <div className={styles.content}>
            {article.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={i}>{paragraph.replace(/\*\*/g, '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').map((line) => line.replace(/^- /, ''));
                return (
                  <ul key={i}>
                    {items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </ul>
                );
              }
              const formatted = paragraph.replace(
                /\*\*(.*?)\*\*/g,
                '<strong>$1</strong>'
              );
              return (
                <p key={i} dangerouslySetInnerHTML={{ __html: formatted }} />
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
