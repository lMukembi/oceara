import React, { useState } from "react";
import { Helmet } from "react-helmet";
import contactHero from "../assets/contact-hero.jpg";
import "../css/contact.css";
import { Link } from "react-router-dom";
import { CruiseLogo } from "./logo";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
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
            <CruiseLogo />
            <span className="logo-text">Oceara Cruises</span>
            <span className="logo-tagline">live your dream</span>
          </div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/jobs" activeClassName="active">
              Jobs
            </Link>
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
            <a href="#contact" className="contact-hero-btn primary">
              Let's Connect
            </a>
            <a href="#contact" className="contact-hero-btn secondary">
              Our Network
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="get" className="contact-section">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="contact-info-title">Contact Information</h2>

            <div className="contact-info-block">
              <h4 className="contact-info-label">Emergencies Contact:</h4>
              <div className="contact-info-item">
                <svg
                  className="contact-info-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Mr.ZORAN KOCOSKI</span>
              </div>
              <div className="contact-info-item">
                <svg
                  className="contact-info-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+38970206108" className="contact-info-link">
                  +389 70 206 108
                </a>
              </div>
              <div className="contact-info-item">
                <svg
                  className="contact-info-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+38978454426" className="contact-info-link">
                  +389 78 454 426
                </a>
              </div>
            </div>

            <div className="contact-info-block">
              <h4 className="contact-info-label">Head Office:</h4>
              <div className="contact-info-item">
                <svg
                  className="contact-info-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <a href="tel:+254791044712" className="contact-info-link">
                  +254 791044712
                </a>
              </div>
              <div className="contact-info-item">
                <svg
                  className="contact-info-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:ocearacruises.kenya@gmail.com"
                  className="contact-info-link"
                >
                  ocearacruises.kenya@gmail.com
                </a>
              </div>
              <div className="contact-info-item">
                <svg
                  className="contact-info-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>Mirage Towers – Tower 2 M2 unit 15A, Nairobi</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
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
          ship careers with Oceara Cruises
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
