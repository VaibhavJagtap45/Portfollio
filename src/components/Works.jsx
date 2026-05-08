import { FiArrowUpRight, FiGlobe } from "react-icons/fi";
import { projectsData } from "../data/portfolio";
import "./Works.css";

export default function Works() {
  return (
    <main className="page page-works">
      <section className="page-panel works-hero">
        <div className="works-hero__copy">
          <p className="section-kicker">Portfolio</p>
          <h2 className="section-title">
            Selected projects shaped around usability, clarity, and product fit.
          </h2>
          <p className="section-copy">
            A snapshot of websites and product interfaces where responsive
            design, implementation quality, and frontend polish all mattered.
          </p>
        </div>

        <div className="pill-row">
          <span className="pill">
            <span className="accent-dot" />
            Web Products
          </span>
          <span className="pill">
            <span className="accent-dot" />
            Responsive UI
          </span>
          <span className="pill">
            <span className="accent-dot" />
            MERN Workflows
          </span>
        </div>
      </section>

      <section className="project-grid">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card__image">
              <img src={project.image} alt={project.title} />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-card__floating-link"
              >
                <FiArrowUpRight />
                Open
              </a>
            </div>

            <div className="project-card__body">
              <div className="project-card__meta">
                <span>{project.category}</span>
                <span>
                  <FiGlobe />
                  Live
                </span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <div className="project-card__tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-card__cta"
              >
                Visit Project
                <FiArrowUpRight />
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
