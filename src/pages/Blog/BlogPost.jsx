import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiArrowLeft } from 'react-icons/fi';
import Button from '../../components/Button/Button';
import blogPosts from '../../data/blogPosts';
import { formatDate } from '../../utils/formatDate';
import styles from './BlogPost.module.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Article Not Found</h2>
          <p style={{ margin: '1rem 0' }}>The article you are looking for does not exist.</p>
          <Button to="/blog">Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <Link to="/blog" className={styles.back}>
          <FiArrowLeft /> Back to Blog
        </Link>

        <article className={styles.article}>
          <div className={styles.header}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span>By {post.author}</span>
              <span><FiCalendar /> {formatDate(post.date)}</span>
              <span><FiClock /> {post.readTime}</span>
            </div>
          </div>

          <img src={post.image} alt={post.title} className={styles.image} />

          <div className={styles.content}>
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <h3 key={i}>{paragraph.replace(/\*\*/g, '')}</h3>;
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
