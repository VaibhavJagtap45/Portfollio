import { Link } from "react-router-dom";
import {
  aboutCopy,
  knowledgeData,
  profileData,
  serviceHighlights,
} from "../data/portfolio";
import "./About.css";

export default function About() {
  return (
    <main className="page page-about">
      <section className="page-panel about-hero">
        <div className="about-hero__copy">
          <p className="section-kicker">{aboutCopy.eyebrow}</p>
          <h2 className="section-title">{aboutCopy.title}</h2>
          <p className="section-copy">{aboutCopy.description}</p>
          <p className="section-copy about-hero__secondary">
            {aboutCopy.secondary}
          </p>

          <div className="button-row">
            <Link to="/portfolio" className="button button--primary">
              View Projects
            </Link>
            <Link to="/resume" className="button button--ghost">
              Explore Resume
            </Link>
          </div>

          <div className="pill-row about-hero__roles">
            {profileData.roles.map((role) => (
              <span key={role} className="pill">
                <span className="accent-dot" />
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="about-hero__metrics">
          {profileData.stats.map((stat) => (
            <article key={stat.label} className="about-metric-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}

          <article className="about-highlight-card">
            <p className="section-kicker">Current Focus</p>
            <h3>React, MERN, and product-facing UI detail.</h3>
            <p className="section-copy">
              I enjoy improving business websites, shaping usable application
              flows, and giving interfaces the level of polish users actually
              notice.
            </p>
          </article>
        </div>
      </section>

      <section className="page-panel">
        <div className="about-section__header">
          <p className="section-kicker">What I Do</p>
          <h3 className="about-section__title">
            Services and technical strengths
          </h3>
          <p className="section-copy">
            The goal is not only to write working code, but to shape experiences
            that feel intentional, responsive, and trustworthy.
          </p>
        </div>

        <div className="service-grid">
          {serviceHighlights.map((service) => (
            <article
              key={service.title}
              className={`service-card service-card--${service.accent}`}
            >
              <div className="service-card__icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="page-panel about-toolkit">
        <div className="about-toolkit__copy">
          <p className="section-kicker">Toolkit</p>
          <h3 className="about-section__title">
            Technologies I use to move projects forward
          </h3>
          <p className="section-copy">
            A mix of frontend, backend, and database tools that support
            day-to-day delivery across modern product work.
          </p>
        </div>

        <div className="about-toolkit__chips">
          {knowledgeData.map((item) => (
            <span key={item} className="about-toolkit__chip">
              {item}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
