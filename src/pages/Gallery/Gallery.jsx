import { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import gallery from '../../data/gallery';
import styles from './Gallery.module.css';

const categories = ['All', ...new Set(gallery.map((img) => img.category))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? gallery
      : gallery.filter((img) => img.category === activeCategory);

  function openLightbox(index) {
    setLightbox(index);
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    setLightbox(null);
    document.body.style.overflow = '';
  }

  function navigate(direction) {
    setLightbox((prev) => {
      const next = prev + direction;
      if (next < 0) return filtered.length - 1;
      if (next >= filtered.length) return 0;
      return next;
    });
  }

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <SectionHeading
            label="Our Gallery"
            title="Life at FreeGenero"
            subtitle="A glimpse into our classes, courses, events, and the vibrant community that makes FreeGenero special."
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
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

          <div className={styles.grid}>
            {filtered.map((image, index) => (
              <div
                key={image.id}
                className={styles.item}
                onClick={() => openLightbox(index)}
              >
                <img src={image.src} alt={image.alt} />
                <div className={styles.itemOverlay}>
                  <span className={styles.itemCategory}>{image.category}</span>
                  <p className={styles.itemAlt}>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button
            className={styles.lbClose}
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <FiX />
          </button>
          <button
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          <div className={styles.lbContent} onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightbox].src.replace('w=600&h=400', 'w=1200&h=800')}
              alt={filtered[lightbox].alt}
            />
            <p className={styles.lbCaption}>{filtered[lightbox].alt}</p>
          </div>
          <button
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
