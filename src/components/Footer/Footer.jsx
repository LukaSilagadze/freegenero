import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            Free<span>Genero</span>
          </Link>
          <p className={styles.tagline}>
            Empowering learners worldwide with industry-leading courses and
            expert instructors. Your future starts here.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/cooperation">Cooperation</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Categories</h4>
          <ul>
            <li><Link to="/courses">Development</Link></li>
            <li><Link to="/courses">Data Science</Link></li>
            <li><Link to="/courses">Design</Link></li>
            <li><Link to="/courses">Marketing</Link></li>
            <li><Link to="/courses">Cybersecurity</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Contact Info</h4>
          <ul className={styles.contact}>
            <li><FiMapPin /> 123 Education Ave, San Francisco, CA</li>
            <li><FiPhone /> +1 (555) 123-4567</li>
            <li><FiMail /> hello@freegenero.com</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} FreeGenero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
