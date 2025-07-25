import React from "react";
import "./Resume.css"; // Ensure to import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const educationData = [
    {
    period: "Completed in 2023",
    title: "C-DAC ( Full Stack Devloper )",
    institution: "Orlando C-DAC Training Center, Indore",
    bgClass: "bg-prink",
  },
  {
    period: "Completed in 2022",
    title: "Bachelor of Technology",
    institution: "SVERI Collage of Engineering, Pandharpur",
    bgClass: "bg-prink",
  },
  {
    period: "Completed in 2017",
    title: "HSC (Science)",
    institution: "Mahatma Gandhi Jr Collage, Karmala",
    bgClass: "bg-catkrill",
  },
  {
    period: "Completed in 2015",
    title: "SSC",
    institution: "Devi Vidyalay, karmala",
    bgClass: "bg-prink",
  },
];

const experienceData = [
  {
    period: "June 2024 - Present",
    title: "Full Stack Devloper / MERN Stack",
    company: "Bestowal Systems and SAP Services Private Limited",
    bgClass: "bg-catkrill",
    descrip: "I am a dedicated web developer with experience as a ReactJS Developer, where I honed my skills in building dynamic and responsive web applications. My expertise extends to the MERN stack, enabling me to create full-stack applications with MongoDB, Express.js, React, and Node.js. I have successfully developed several CRUD websites, demonstrating my ability to handle both frontend and backend development seamlessly. Additionally, I have learned React Native to venture into mobile app development, allowing me to create cross-platform applications with ease. I am always eager to learn and take on new challenges in the tech industry.",
  },
];

const skillsData = [
  { title: "Web Development", percentage: 90, bgClass: "progress-bg-1" },
  { title: "Databases", percentage: 80, bgClass: "progress-bg-2" },
  { title: "ReactJS", percentage: 70, bgClass: "progress-bg-3" },
  { title: "Java", percentage: 50, bgClass: "progress-bg-4" },
];

const knowledgeData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "ReactJS",
  "Java",
  "C Language",
  "JDBC",
  "SQL",
  "Mongodb"
];

export default function Resume() {
  return (
    <main className="resumepagemain">
      <section className="resumepagefirst wow fadeup">
        <div className="pl-60 pr-60 pt-60">
          <header className="mb-15">
            <h2 className="pagetitle">Resume</h2>
          </header>
        </div>
        <div className="section-wrapper pl-60 pr-60 mb-60 resumepage">
          <div className="row">
            <article className="col-xl-6 col-lg-7">
              <div className="bostami-section-title-wrap mb-20">
                <h4 className="section-title">
                  <span>
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  Education
                </h4>
              </div>

              {/* Add Education Container */}
              <div className="education-container">
                {/* Outer and Inner Circles */}
                <div className="outer-circle outer-circle-1">
                  <div className="inner-circle"></div>
                </div>
                <div className="outer-circle outer-circle-2">
                  <div className="inner-circle"></div>
                </div>
                <div className="outer-circle outer-circle-3">
                  <div className="inner-circle"></div>
                </div>
                <div className="outer-circle outer-circle-4">
                  <div className="inner-circle"></div>
                </div>
                {/* Lines connecting the circles */}
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                {/* Education Cards */}
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className={`bostami-card-item ${edu.bgClass} mb-20`}
                  >
                    <h6 className="card-title">{edu.title}</h6>
                    <p className="card-text">{edu.institution}</p>
                    <span className="card-subtitle">{edu.period}</span>
                  </div>
                ))}
              </div>
            </article>
            <article className="col-xl-6 col-lg-5">
              <div className="bostami-section-title-wrap mb-20">
                <h4 className="section-title">
                  <span>
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  Experience
                </h4>
              </div>
              <div className="bostami-card-wrap">
                {experienceData.map((exp, index) => (
                  <div
                    key={index}
                    className={`bostami-card-item ${exp.bgClass} mb-20`}
                  >
                    <span className="card-subtitle">{exp.period}</span>
                    <h6 className="card-title">{exp.title}</h6>
                    <p className="card-text">{exp.company}</p>
                    <p className="card-descrip">{exp.descrip}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-wrapper bg-light-white-2 pt-70 pb-60 pl-60 pr-60">
        <div className="row">
          <article className="col-xl-6 col-lg-7">
            <div className="bostami-section-title-wrap mb-20">
              <h4 className="section-title">Knowledge</h4>
            </div>
            <div className="skill-bar-wrap">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-bar-item mb-30">
                  <div className="title-wrap">
                    <h5 className="title">{skill.title}</h5>
                    <span className="count">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar-wrap">
                    <div
                      className={`progress-line ${skill.bgClass}`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </article>
          <article className="col-xl-6 col-lg-5">
            <div className="bostami-section-title-wrap mb-20">
              <h4 className="section-title">Skills</h4>
            </div>
            <div className="knowledeges-item-wrap">
              {knowledgeData.map((knowledge, index) => (
                <span key={index} className="gk-item">
                  {knowledge}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <footer className="footer-copyright text-center pt-25 pb-25">
        <span className="text-fs">© 2024 All Rights Reserved by Vaibhav Jagtap</span>
      </footer>
    </main>
  );
}


