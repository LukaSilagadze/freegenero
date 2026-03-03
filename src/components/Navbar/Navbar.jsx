import blueLogo from "../../assets/logo_blue2.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import styles from "./Navbar.module.css";

import { FiChevronDown } from "react-icons/fi";

const navLinks = [
  { path: "/", label: "მთავარი" },
  { path: "/about", label: "ჩვენს შესახებ" },
  {
    path: "/courses",
    label: "კურსები",
    subItems: [
      { path: "/courses/intro", label: "გაიცანი პროფესია" },
      { path: "/courses/all", label: "სხვა კურსები" },
    ],
  },
  { path: "/news", label: "სიახლეები" },
  { path: "/gallery", label: "გალერეა" },
  {
    path: "/cooperation",
    label: "თანამშრომლობა",
    subItems: [
      { path: "/cooperation/join", label: "გახდი ფრიჯენერო" },
      { path: "/cooperation/mentor", label: "გახდი ფრიჯენეროს მენტორი" },
      { path: "/cooperation/sponsor", label: "გახდი ფრიჯენეროს სპონსორი" },
    ],
  },
  { path: "/contact", label: "კონტაქტი" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/" className={styles.logo}>
          <img src={blueLogo} alt="logo" className={styles.logoImage} />
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map(({ path, label, subItems }) => (
            <li key={path} className={subItems ? styles.dropdownContainer : ""}>
              {subItems ? (
                <>
                  <div className={styles.link}>
                    {label} <FiChevronDown className={styles.chevron} />
                  </div>
                  <ul className={styles.dropdown}>
                    {subItems.map((sub) => (
                      <li key={sub.path}>
                        <Link
                          to={sub.path}
                          className={styles.dropdownLink}
                          onClick={() => setMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ""}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              )}
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
