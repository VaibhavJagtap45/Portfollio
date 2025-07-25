

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCamera,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

export default function About() {
  const services = [
    {
      title: "Frontend Development",
      icon: "/htmlcssjs.png",
      clicon: "#DE3163",
      bg: "#73b1f4ff",
      para: "I specialize in designing responsive and interactive user interfaces using HTML, CSS, and JavaScript, with a passion for creating intuitive and engaging experiences. With deep expertise in React.js, I build efficient and seamless web applications that perform flawlessly. I harness tools like Bootstrap and SASS to refine styling and elevate the overall user experience. Driven by a love for innovation, I thrive on tackling complex challenges and delivering user-friendly solutions that stand out.",
      
    },
    {
      title: "MERN Stack Development",
      icon: "/mern.png",
      clicon: "#7E098E",
      bg: "#72fbe6ff",
      para: "I build robust full-stack applications with the MERN stack (MongoDB, Express.js, React.js, Node.js), turning ideas into seamless digital realities. I design efficient APIs and implement secure user authentication, ensuring every connection is rock-solid and safe. My knack for creating dynamic web applications with smooth frontend-backend integration delivers an optimal user experience that’s as intuitive as it is impressive. Fueled by a passion for problem-solving, I craft solutions that don’t just work—they shine.",
    },
    {
      title: "Mobile Development with React Native",
      icon: "/reactnative.png",
      clicon: "#192C85",
      bg: "#ed81feff",
      para: "I build cross-platform mobile apps with React Native, delivering smooth, standout performance on both iOS and Android. Whether it’s weaving in notifications or streamlining task management, I craft features that don’t just function—they spark joy. My drive? Creating intuitive, user-friendly experiences that feel seamless and leave users coming back for more.",
    },
    {
      title:"Java Developer",
      icon:"/java.png",
      clicon: "#192C85",
      bg: "#ffc773ff",
      para:"I craft powerful web applications with Java, turning ideas into reality through code. With JDBC, I ensure lightning-fast database interactions, while Servlets let me deliver dynamic, real-time content that keeps users hooked. Using Hibernate, I achieve seamless data persistence, safeguarding every detail with precision. And with JSP, I design interfaces that are not just intuitive but delightful, creating experiences users can’t help but love. Fueled by a passion for innovation, I turn complex challenges into elegant solutions that stand out."
    }
  ];

  return (
    <div className="col-12 aboutpage wow fadeup">
      <div className="section-wrapper pl-60 pr-60 pt-60">
        <div className="bostami-page-title-wrap mb-15 about">
          <h2 className="pagetitle">About</h2>
          <p>
            Aspiring for a career in a professional organization where I can
            apply my varied skills to fulfill the organization's objectives and
            scale greater heights along with the organization.
          </p>
          <p>
          A passionate and dedicated professional seeking an entry-level position to leverage my skills in Frontend, MERN stack, and React Native development. Eager to contribute to a dynamic team while advancing my career."
          </p>
        </div>
      </div>

      <div className="section-wrapper pl-60 pr-60 whatido">
        <div className="bostami-section-title-wrap mb-30">
          <h3 className="section-title">What I Do!</h3>
        </div>
        <div className="bostami-what-do-wrap mb-30">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-xxl-6 col-xl-6 col-lg-6" key={index}>
                <div
                  className={`bostami-what-do-item abtbox`}
                  style={{ backgroundColor: service.bg }}
                >
                  <div className="icon1" style={{ margin: "0px auto" }}>
                    <img
                      src={service.icon}
                      className="product-img"
                      style={{
                        color: service.clicon,
                        fontSize: "20px",
                        width: "100px",
                        paddingBottom: "10px",
                      }}
                    />
                    {/* <FontAwesomeIcon icon={service.icon} className="product-img" style={{ color: service.clicon ,fontSize:'20px' }} /> */}
                  </div>
                  <div className="text">
                    <h4 className="title">{service.title}</h4>
                    <p className="">{service.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer-copyright text-center pt-25 pb-25">
        <span className="text-fs">© 2024 All Rights Reserved by Vaibhav Jagtap</span>
      </footer>
    </div>
  );
}
