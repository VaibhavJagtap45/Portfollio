import {
  knowledgeData,
  skillsData,
  timelineData,
} from "../data/portfolio";
import "./Resume.css";

export default function Resume() {
  const renderTimelineBlock = (title, items) => (
    <section className="page-panel timeline-panel">
      <p className="section-kicker">{title}</p>
      <h3 className="about-section__title">{title} journey</h3>

      <div className="timeline-list">
        {items.map((item) => (
          <article key={`${title}-${item.title}`} className="timeline-item">
            <span className="timeline-item__period">{item.period}</span>
            <h4>{item.title}</h4>
            <strong>{item.organization}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );

  return (
    <main className="page page-resume">
      <section className="page-panel">
        <p className="section-kicker">Resume</p>
        <h2 className="section-title">
          Experience, education, and the skills behind the work.
        </h2>
        <p className="section-copy">
          A practical mix of frontend development, MERN stack implementation,
          and product-focused problem solving supported by formal technical
          training.
        </p>
      </section>

      <section className="resume-grid">
        {renderTimelineBlock("Experience", timelineData.experience)}
        {renderTimelineBlock("Education", timelineData.education)}
      </section>

      <section className="resume-grid resume-grid--compact">
        <section className="page-panel skills-panel">
          <p className="section-kicker">Capabilities</p>
          <h3 className="about-section__title">Core strengths</h3>

          <div className="skills-list">
            {skillsData.map((skill) => (
              <article key={skill.title} className="skill-card">
                <div className="skill-card__meta">
                  <div>
                    <h4>{skill.title}</h4>
                    <p>{skill.description}</p>
                  </div>
                  <strong>{skill.percentage}%</strong>
                </div>

                <div className="skill-card__track">
                  <div
                    className="skill-card__fill"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-panel knowledge-panel">
          <p className="section-kicker">Knowledge</p>
          <h3 className="about-section__title">Technologies in rotation</h3>

          <div className="knowledge-cloud">
            {knowledgeData.map((item) => (
              <span key={item} className="knowledge-cloud__item">
                {item}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
