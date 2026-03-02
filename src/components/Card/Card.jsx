import styles from './Card.module.css';

export default function Card({ children, className = '', hoverable = true, ...props }) {
  return (
    <div
      className={`${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
