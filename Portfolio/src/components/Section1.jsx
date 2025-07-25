import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarDay,
  faDownload,
  faEnvelopeOpenText,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import TypingEffect from "react-typing-effect"; // Import the typing effect component
import "./Section1.css";
import profilePic from "../assets/Vaibhav.jpg";

export default function Section1() {
  const googleCalendarLink =
"https://calendar.google.com/calendar/u/0/r/eventedit/duplicate/NXAxOG80bWs0bHNvNzNocXRsdHVxNTZzNHMgdmozMDMyMDAwQG0?pli=1"
  return (
    <section className="section123">
      <div className="container section1">
        <figure className="bostami-parsonal-info-img">
          <img
            className="profilepic"
            src={profilePic}
            alt="Profile"
            title="Profile_Image"
          />
        </figure>
        <h1 className="tracking-in-contract">Vaibhav Sambhaji Jagtap</h1>

        {/* Typewriter effect */}
        <p>
          <TypingEffect
            className="typing-effect" // Added className here
            text={[
              "Software Developer",
              "Frontend Developer",
              "React Developer",
            ]}
            speed={100} // typing speed in ms
            eraseSpeed={50} // backspace speed
            eraseDelay={2000} // time to wait before starting to erase
            typingDelay={500} // delay before typing starts
          />
        </p>

        <nav>
          <ul className="socialaccount">
            <li className="social-icon">
              <a
                href="https://www.linkedin.com/in/vaibhav-jagtap-983476226/"
                target="_blank"
                style={{ color: "rgba(0, 119, 181, 1)" }}
                rel="noopener noreferrer"
                alt="Vaibhav_Linkedin"
                title="Vaibhav_Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="social-icon">
              <a
                href="https://github.com/VaibhavJagtap45"
                target="_blank"
                style={{ color: "#333333" }}
                rel="noopener noreferrer"
                alt="Vaibhav_Github"
                title="Vaibhav_Github"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="social-icon">
              <a
                href="https://www.instagram.com/vaibhav.jagtap_45/"
                target="_blank"
                style={{ color: "rgb(225, 42, 114)" }}
                rel="noopener noreferrer"
                alt="Vaibhav_Instagram"
                title="Vaibhav_Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="social-icon">
              <a
                href="https://www.facebook.com/vaibhav.jagtap.311493"
                target="_blank"
                style={{ color: "hsl(214, 83.40%, 50.40%)" }}
                rel="noopener noreferrer"
                alt="Vaibhav_Facebook"
                title="Vaibhav_Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>


          </ul>
        </nav>

        <address className="contact">
          <a
            href="tel:+919511871680"
            className="contactlist"
            style={{ textDecoration: "none" }}
            alt="Mobile No"
            title="Mobile No"
          >
            <div
              className="icon"
              style={{ color: "rgb(233, 59, 129)", fontSize: "22px" }}
            >
              <FontAwesomeIcon icon={faMobile} />
            </div>
            <div className="text">
              <span>Phone</span>
              <p>+919511871680</p>
            </div>
          </a>

          <a
            href="mailto:vj30320000@gmail.com"
            className="contactlist"
            style={{ textDecoration: "none" }}
            alt='email'
            title="email"
          >
            <div
              className="icon"
              style={{ color: "rgb(106, 181, 185)", fontSize: "22px" }}
            >
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </div>
            <div className="text">
              <span>Email</span>
              <p>vj30320000@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Pune,India"
            className="contactlist"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            alt='Location'
            title="Location"
          >
            <div
              className="icon"
              style={{ color: "rgb(253, 117, 144)", fontSize: "22px" }}
            >
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="text">
              <span>Location</span>
              <p>Pune, India</p>
            </div>
          </a>

          <a
            href={googleCalendarLink}
            className="contactlist"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            alt='DOB'
            title="DOB"
          >
            <div
              className="icon"
              style={{ color: "rgb(193, 124, 235)", fontSize: "22px" }}
            >
              <FontAwesomeIcon icon={faCalendarDay} />
            </div>
            <div className="text">
              <span>Birthday</span>
              <p>Jan 30, 2000</p>
            </div>
          </a>
        </address>

        <div className="Button1">
  <FontAwesomeIcon icon={faDownload} />
  <a
  href="/VaibhavJagtap.pdf"
  download="VaibhavJagtap.pdf"
  title="Download CV"
  className="download-button"
  style={{color:'white',textDecoration:'none'}}
>
  Download CV
</a>

</div>

      </div>
    </section>
  );
}
