import { useState } from "react";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/contact", formData);
      console.log("Form submitted:", response.data);
      alert("Form has been submitted successfully!");
      
      // Clear the form after successful submission
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error.response?.data || error.message);
      alert("Error submitting the form. Please try again later.");
    }
  };
  

  return (
    <div className="col-12 aboutpage">
      <section className="section-wrapper pl-60 pr-60 pt-60">
        <header className="bostami-page-title-wrap mb-15">
          <h2 className="pagetitle">Contact</h2>
        </header>
      </section>
      <section className="section-wrapper pr-60 pl-60 mb-60">
        <article className="contact-area ">
          <h5 className="contact-title">
            I'm always open to discussing product
          </h5>
          <h5 className="contact-title-b">design work or partnerships.</h5>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-input-item mb-60">
              <label className="input-label name" htmlFor="name">Name *</label>
              <input
                className="input-box name"
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-input-item mb-60">
              <label className="input-label email" htmlFor="email">Email *</label>
              <input
                className="input-box email"
                required
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-input-item mb-40">
              <label className="input-label message" htmlFor="message">Message *</label>
              <textarea
                name="message"
                id="message"
                className="input-box message"
                cols="30"
                rows="10"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-btn-wrap">
              <button type="submit" value="Send" className="form-btn">
                Submit
              </button>
            </div>
          </form>
        </article>
      </section>
      <footer className="footer-copyright text-center pt-25 pb-25">
        <span className="text-fs">© 2024 All Rights Reserved by Vaibhav Jagtap</span>
      </footer>
    </div>
  );
};

export default Contact;
