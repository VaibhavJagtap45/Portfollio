import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faBriefcase,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook as farAddressBook } from "@fortawesome/free-regular-svg-icons";
import "./Section2.css";
import { NavLink } from "react-router-dom";

const Section2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 400); // Delay to match the CSS transition duration
  };

  return (
    <div className="container section2main">
      <button
        className="hamburger-menu"
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
      </button>
      <div className={`menu ${isMenuOpen ? "open" : ""}`}>
        <nav className="section2nav">
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-link"
                onClick={closeMenu}
                title="Navigate to About section" // Add a title for the NavLink
              >
                <FontAwesomeIcon
                  icon={farUser}
                  title="User Icon" // Title for the FontAwesomeIcon (tooltip)
                  aria-label="About User" // Alternative text for accessibility
                />
                <span title="Go to About Page">About</span>{" "}
                {/* Title for the span */}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/Resume"
                activeClassName="active"
                className="nav-link"
                onClick={closeMenu}
                title="Navigate to Resume section" 
              >
                <FontAwesomeIcon icon={faFileAlt} />
                <span>Resume</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                activeClassName="active"
                className="nav-link"
                onClick={closeMenu}
                title="Navigate to Work section" 
              >
                <FontAwesomeIcon icon={faBriefcase} />
                <span>Works</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                activeClassName="active"
                className="nav-link"
                onClick={closeMenu}
                title="Navigate to Contact section" 
              >
                <FontAwesomeIcon icon={farAddressBook} />
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Section2;
