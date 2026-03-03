import blueLogo from '../../assets/logo_blue2.png';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';

const navLinks = [
  { path: '/', label: 'მთავარი' },
  { path: '/about', label: 'ჩვენს შესახებ' },
  { path: '/courses', label: 'კურსები' },
  // { path: '/instructors', label: 'Instructors' },
  // { path: '/blog', label: 'Blog' },
  { path: '/news', label: 'სიახლეები' },
  { path: '/gallery', label: 'გალერეა' },
  { path: '/cooperation', label: 'თანამშრომლობა' },
  { path: '/contact', label: 'კონტაქტი' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" className={styles.logo}>
          <img src={blueLogo} alt="logo" className={styles.logoImage}/>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={styles.toggle}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>
    </header>
  );
}
