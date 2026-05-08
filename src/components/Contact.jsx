import { useState } from "react";
import axios from "axios";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { profileData } from "../data/portfolio";
import "./Contact.css";

const contactCards = [
  {
    label: "Email",
    value: profileData.email,
    href: profileData.emailHref,
    icon: <FiMail />,
  },
  {
    label: "Phone",
    value: profileData.phone,
    href: profileData.phoneHref,
    icon: <FiPhone />,
  },
  {
    label: "Location",
    value: profileData.location,
    href: profileData.mapHref,
    icon: <FiMapPin />,
    external: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const apiBaseUrl =
      import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

    try {
      await axios.post(`${apiBaseUrl}/api/contact`, formData);
      setFormData({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        message: "Your message was sent successfully. I will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "The message could not be sent right now. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page page-contact">
      <section className="page-panel contact-hero">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Let&apos;s discuss product work, frontend builds, or new opportunities.
        </h2>
        <p className="section-copy">
          If you have an idea, a role, or a project that needs thoughtful
          implementation and better UI quality, I would be happy to connect.
        </p>
      </section>

      <section className="contact-layout">
        <aside className="page-panel contact-details">
          <div className="contact-details__intro">
            <h3>Reach out directly</h3>
            <p className="section-copy">
              Prefer email, phone, or a quick location reference? All the key
              contact details are here.
            </p>
          </div>

          <div className="contact-details__list">
            {contactCards.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-details__card"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <span className="contact-details__icon">{item.icon}</span>
                <span>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </span>
              </a>
            ))}
          </div>
        </aside>

        <section className="page-panel contact-form-panel" id="contact-form">
          <div className="contact-form-panel__header">
            <h3>Send a message</h3>
            <p className="section-copy">
              Share a quick brief and I will respond as soon as possible.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label className="contact-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </label>

            <label className="contact-field">
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about the project or role."
                required
              />
            </label>

            {status.message ? (
              <p
                className={
                  status.type === "success" ? "status-text" : "error-text"
                }
              >
                {status.message}
              </p>
            ) : null}

            <button
              type="submit"
              className="button button--primary"
              disabled={isSubmitting}
            >
              <FiSend />
              {isSubmitting ? "Sending..." : "Submit Message"}
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
