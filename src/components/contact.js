import React, { useState } from "react";
import { Helmet } from "react-helmet";
import contactHero from "../assets/contact-hero.jpg";
import "../css/contact.css";
import { Link } from "react-router-dom";
import OcearaLogo from "../assets/oceara-logo.jpeg";
// import ContactHero from "../assets/contact-hero.jpeg";

import emailjs from "@emailjs/browser";

const countries = [
  { name: "Macedonia", main: true },
  { name: "Albania" },
  { name: "Bosnia" },
  { name: "Bulgaria" },
  { name: "Cyprus" },
  { name: "Czech" },
  { name: "El Salvador" },
  { name: "Greece" },
  { name: "Honduras" },
  { name: "Italy" },
  { name: "Kenya" },
  { name: "Kosovo" },
  { name: "Montenegro" },
  { name: "Morocco" },
  { name: "Serbia" },
  { name: "Tunisia" },
  { name: "Turkey" },
  { name: "Ukraine" },
  { name: "Vietnam" },
  { name: "Zimbabwe" },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send
    emailjs
      .send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Oceara Cruises | Maritime Recruitment Agency</title>
        <meta
          name="description"
          content="Get in touch with Oceara Cruises. Contact our team for maritime recruitment inquiries, job applications, and partnership opportunities."
        />
      </Helmet>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <img src={OcearaLogo} alt="Oceara Cruises" />
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/news">News</Link>
            <Link to="/about-us">About Us</Link>
            {/* <Link to="/stcw-training">STCW Training</Link> */}
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="contact-hero"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact</h1>
          <p className="contact-hero-subtitle">Where Careers Set Sail!</p>
          <div className="contact-hero-buttons">
            <a href="#get" className="contact-hero-btn primary">
              Let's Connect
            </a>
            <a href="#network" className="contact-hero-btn secondary">
              Our Network
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="get" className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            {/* <img src={} alt="Contact Oceara Cruises" /> */}
          </div>
          <div className="contact-form-container">
            <h2 className="contact-form-title">Contact Form</h2>
            <p className="contact-form-subtitle">
              Send us a message, let's work together!
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    className="form-input"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-submit">
                Send Message
              </button>
              {statusMessage && (
                <p className="status-message">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section id="network" className="network-section">
        <div className="network-container">
          <h2 className="network-title">Our Network</h2>
          <p className="network-description">
            Operating across 20 countries, our company not only employs
            individuals from every continent but also prioritizes their personal
            development, fostering growth and opportunity worldwide.
          </p>

          <div className="network-content">
            <div className="network-countries">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className={`network-country ${country.main ? "main" : ""}`}
                >
                  {country.name}
                </div>
              ))}
            </div>
            <div className="network-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8193073946485!2d36.78219131475403!3d-1.2841669990630444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22ba26445%3A0x9d8e89f65e1d0f7c!2sMirage%20Towers!5e0!3m2!1sen!2ske!4v1703349123456!5m2!1sen!2ske"
                title="Mirage Towers – Tower 2 M2 unit 15A, Nairobi"
                aria-label="Mirage Towers – Tower 2 M2 unit 15A, Nairobi"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of successful candidates who have launched their cruise
          ship careers with Oceara Cruises.
        </p>
        <a href="/apply" className="contact-cta-btn">
          Apply Now
        </a>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <p className="contact-footer-text">© 2024 Copyright Oceara Cruises</p>
      </footer>
    </>
  );
};
