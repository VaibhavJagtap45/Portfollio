import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiBookOpen,
  FiBriefcase,
  FiFileText,
  FiMail,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";
import "./Section2.css";

const navItems = [
  { label: "About", to: "/", icon: <FiUser /> },
  { label: "Works", to: "/portfolio", icon: <FiBriefcase /> },
  { label: "Resources", to: "/blogs", icon: <FiBookOpen /> },
  { label: "Contact", to: "/contact", icon: <FiMail /> },
];

export default function Section2() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <section className="nav-shell page-panel">
      <div className="nav-shell__header">
        <div>
          <p className="section-kicker">Navigation</p>
          <h2 className="nav-shell__title">Explore the portfolio</h2>
        </div>

        <button
          type="button"
          className="nav-shell__toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <nav className={`nav-shell__panel ${isMenuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `nav-shell__link ${isActive ? "is-active" : ""}`
            }
          >
            <span className="nav-shell__icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </section>
  );
}
