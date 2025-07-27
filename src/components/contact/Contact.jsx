import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return toast.error("Please complete the form above");
    }

    setLoading(true);

    const data = {
      name,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        "service_dvhrnjs",
        "template_2hvfeb4",
        data,
        "49tzSpnGDEu1C3v8S"
      )
      .then(
        (_result) => {
          setLoading(false);
          toast.success(`Successfully sent email.`);
        },
        (error) => {
          setLoading(false);
          console.log(error);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>
        </div>

        <form onSubmit={submitHandler} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <br />
      <br />
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Me</h3>
            <p>
              Hi, I'm Skina Adonai, a web developer passionate about creating
              dynamic and user-friendly applications.
            </p>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/skina.adonai_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>{" "}
              <br />
              <a
                href="https://github.com/SkinaAdonai"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              <br />
              <a
                href="https://www.linkedin.com/in/skina-adonai/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <div className="resource-links">
              <a href="#home">Home</a> <br />
              <a href="#about">About</a> <br />
              <a href="#services">Service</a> <br />
              <a href="#education">Education</a> <br />
              <a href="#portfolio">Portfolio</a> <br />
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p>&copy; 2024 Skina Adonai. All rights reserved.</p>
        </div>
      </footer>
      <ToastContainer position="bottom-right" theme={props.theme} />
    </section>
  );
};

export default Contact;
