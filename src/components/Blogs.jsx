import { FiArrowDownCircle, FiExternalLink } from "react-icons/fi";
import { resourcesData } from "../data/portfolio";
import "./Blogs.css";

export default function Blogs() {
  return (
    <main className="page page-resources">
      <section className="page-panel resources-hero">
        <p className="section-kicker">Resources</p>
        <h2 className="section-title">
          Quick reference material for everyday frontend work.
        </h2>
        <p className="section-copy">
          Downloadable guides that help with HTML, CSS, and JavaScript basics
          when you need a compact refresher during development.
        </p>
      </section>

      <section className="resource-grid">
        {resourcesData.map((resource) => (
          <article key={resource.id} className="resource-card">
            <div className="resource-card__icon">
              <img src={resource.image} alt={resource.title} />
            </div>

            <span className="resource-card__type">{resource.type}</span>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>

            <div className="resource-card__actions">
              <a
                href={resource.file}
                target="_blank"
                rel="noreferrer"
                className="button button--ghost"
              >
                <FiExternalLink />
                Preview
              </a>
              <a href={resource.file} download className="button button--primary">
                <FiArrowDownCircle />
                Download
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
