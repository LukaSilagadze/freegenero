import whiteLogo from "../../assets/white.png";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            <img src={whiteLogo} alt="logo" className={styles.logoImage} />
          </Link>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>სწრაფი ლინკები</h4>
          <ul>
            <li>
              <Link to="/about">ჩვენს შესახებ</Link>
            </li>
            <li>
              <Link to="/courses">კურსები</Link>
            </li>
            <li>
              <Link to="/news">სიახლეები</Link>
            </li>
            <li>
              <Link to="/gallery">გალერეა</Link>
            </li>
            <li>
              <Link to="/cooperation">თანამშრომლობა</Link>
            </li>
            <li>
              <Link to="/contact">კონტაქტი</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>კურსები</h4>
          <ul>
            <li>
              <Link to="/courses">გაიცანი პროფესია</Link>
            </li>
            <li>
              <Link to="/courses">მონაცემთა მეცნიერება</Link>
            </li>
            <li>
              <Link to="/courses">დიზაინი</Link>
            </li>
            <li>
              <Link to="/courses">მარკეტინგი</Link>
            </li>
            <li>
              <Link to="/courses">კიბერუსაფრთხოება</Link>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>საკონტაქტო ინფორმაცია</h4>
          <ul className={styles.contact}>
            <li>
              <FiMapPin /> თბილისი, საქართველო
            </li>
            <li>
              <FiPhone /> +995 555 123 456
            </li>
            <li>
              <FiMail /> hello@freegenero.com
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} FreeGenero. ყველა უფლება დაცულია.
          </p>
        </div>
      </div>
    </footer>
  );
}
