import TypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import {
  FiCalendar,
  FiDownload,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { profileData } from "../data/portfolio";
import "./Section1.css";

const socialIcons = {
  LinkedIn: <FaLinkedinIn />,
  GitHub: <FaGithub />,
  Instagram: <FaInstagram />,
  Facebook: <FaFacebookF />,
};

export default function Section1() {
  return (
    <section className="profile-card">
      <div className="profile-card__visual">
        <div className="profile-card__halo" />
        <div className="profile-card__orbit profile-card__orbit--one" />
        <div className="profile-card__orbit profile-card__orbit--two" />
        <div className="profile-card__image-wrap">
          <img
            className="profile-card__image"
            src={profileData.image}
            alt={profileData.name}
          />
        </div>
      </div>

      <div className="profile-card__body">
        <div className="profile-card__availability">
          <span className="accent-dot" />
          <span>{profileData.availability}</span>
        </div>

        <p className="profile-card__eyebrow">Hello, I am</p>
        <h2 className="profile-card__name">{profileData.name}</h2>
        <p className="profile-card__tagline">{profileData.tagline}</p>

        <div className="profile-card__typing-wrap">
          <TypingEffect
            className="profile-card__typing"
            text={profileData.roles}
            speed={70}
            eraseSpeed={40}
            eraseDelay={1400}
            typingDelay={300}
          />
        </div>

        <p className="profile-card__summary">{profileData.intro}</p>

        <div className="profile-card__stats">
          {profileData.stats.map((stat) => (
            <article key={stat.label} className="profile-card__stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="profile-card__socials">
          {profileData.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="profile-card__social-link"
              aria-label={social.label}
              title={social.label}
            >
              {socialIcons[social.label]}
            </a>
          ))}
        </div>

        <div className="profile-card__contact-list">
          <a
            className="profile-card__contact-item"
            href={profileData.phoneHref}
            title={profileData.phone}
          >
            <span className="profile-card__contact-icon">
              <FiPhone />
            </span>
            <span>
              <small>Phone</small>
              <strong>{profileData.phone}</strong>
            </span>
          </a>

          <a
            className="profile-card__contact-item"
            href={profileData.emailHref}
            title={profileData.email}
          >
            <span className="profile-card__contact-icon">
              <FiMail />
            </span>
            <span>
              <small>Email</small>
              <strong>{profileData.email}</strong>
            </span>
          </a>

          <a
            className="profile-card__contact-item"
            href={profileData.mapHref}
            target="_blank"
            rel="noreferrer"
            title={profileData.location}
          >
            <span className="profile-card__contact-icon">
              <FiMapPin />
            </span>
            <span>
              <small>Location</small>
              <strong>{profileData.location}</strong>
            </span>
          </a>

          <div className="profile-card__contact-item">
            <span className="profile-card__contact-icon">
              <FiCalendar />
            </span>
            <span>
              <small>Birthday</small>
              <strong>{profileData.birthday}</strong>
            </span>
          </div>
        </div>

        <div className="profile-card__actions">
          <a
            href={profileData.resumeHref}
            download="VaibhavJagtap_Resume.pdf"
            className="button button--primary"
          >
            <FiDownload />
            Download Resume
          </a>
          <Link to="/contact" className="button button--ghost">
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
