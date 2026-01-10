import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import applyBg from "../assets/apply.jpg";
import emailjs from "@emailjs/browser";
import "../css/apply.css";
import OcearaLogo from "../assets/oceara-logo.png";

const positions = [
  "Select Position",
  "Bartender",
  "Waiter/Waitress",
  "Housekeeper",
  "Cook/Chef",
  "Deck Crew",
  "Entertainment Staff",
  "Spa Therapist",
  "Retail Sales",
  "Customer Service",
  "Other",
];

const partnerLogos = [
  "https://cruise.mk/wp-content/uploads/2023/08/princess-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/p0-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/royal.png",
  "https://cruise.mk/wp-content/uploads/2023/08/viking-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/cunard-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/cel-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/carnival-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/ncl-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/dufry.png",
];

export const Apply = () => {
  const [formData, setFormData] = useState({
    position: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cvName: "",
    cvLink: "",
    agreeToPrivacy: false,
  });

  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    emailjs.init("T65KM733oiQKMSHWO");
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert("CV must be under 5MB");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("upload_preset", "YOUR_UPLOAD_PRESET");
    uploadData.append("folder", "cv_uploads");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/auto/upload",
        { method: "POST", body: uploadData }
      );
      const data = await response.json();
      setFormData((prev) => ({
        ...prev,
        cvName: file.name,
        cvLink: data.secure_url,
      }));
    } catch (error) {
      console.error(error);
      alert("CV upload failed. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!formData.cvLink) {
    //   alert("Please upload your CV first");
    //   return;
    // }

    const templateParams = {
      position: formData.position,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      cv_link: formData.cvLink,
    };

    emailjs
      .send("service_j2mtlq9", "template_lws4wtf", templateParams)
      .then(() => {
        setStatusMessage("Application submited successfully!");
        setFormData({
          position: "",
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          cvName: "",
          cvLink: "",
        });
      })
      .catch((error) => {
        console.error("ERROR:", error);
        setStatusMessage(error?.text || "Failed to submit. Please try again.");
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Apply Now - Oceara Cruises | Start Your Cruise Career</title>
        <meta
          name="description"
          content="Apply for cruise ship jobs with Oceara Cruises. Free application process. Submit your CV and start your career adventure today."
        />
      </Helmet>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <Link to="/">
              <img src={OcearaLogo} alt="Oceara Cruises" />
            </Link>
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
        className="apply-hero"
        style={{ backgroundImage: `url(${applyBg})` }}
      >
        <div className="apply-hero-content">
          <h1 className="apply-hero-title">Apply</h1>
          <p className="apply-hero-subtitle">
            Our application process is FREE for any applicants.
          </p>
          <a href="#apply" className="apply-hero-btn">
            Apply Now
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section id="apply-form" className="apply-form-section">
        <div className="apply-form-header">
          <p className="apply-form-tagline">
            Your Next Career Adventure Begins Here!
          </p>
          <h2 className="apply-form-title">Send your CV</h2>
        </div>

        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="apply-form-group">
            <select
              name="position"
              className="apply-form-select"
              value={formData.position}
              onChange={handleChange}
              required
            >
              {positions.map((pos) => (
                <option key={pos} value={pos === "Select Position" ? "" : pos}>
                  {pos}
                </option>
              ))}
            </select>
          </div>

          <div className="apply-form-group">
            <input
              type="text"
              name="name"
              className="apply-form-input"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-form-group">
            <input
              type="email"
              name="email"
              className="apply-form-input"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-form-group">
            <input
              type="tel"
              name="phone"
              className="apply-form-input"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="apply-form-group">
            <input
              type="text"
              name="subject"
              className="apply-form-input"
              placeholder="Subject *"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-form-group">
            <textarea
              name="message"
              className="apply-form-textarea"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-form-group">
            <label className="apply-file-upload">
              <input
                type="file"
                className="apply-file-input"
                accept=".pdf,.doc,.docx,.jpg,.png"
                onChange={handleFileChange}
              />
              <svg
                className="apply-file-upload-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="apply-file-upload-text">
                {formData.cvName || "Upload your CV"}
              </p>
              {formData.cvLink && (
                <small style={{ color: "green" }}>CV uploaded ✓</small>
              )}
            </label>
          </div>

          <div className="apply-checkbox-group">
            <input
              type="checkbox"
              id="privacy"
              name="agreeToPrivacy"
              className="apply-checkbox"
              checked={formData.agreeToPrivacy}
              onChange={handleChange}
              required
            />
            <label htmlFor="privacy" className="apply-checkbox-label">
              I agree to the <a href="/privacy">privacy policy</a>.
            </label>
          </div>

          <button
            type="submit"
            className="apply-submit-btn"
            disabled={!formData.agreeToPrivacy}
          >
            Submit Application
          </button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </form>
      </section>

      {/* Partners Section */}
      <section className="apply-partners">
        <div className="apply-partners-container">
          <h2 className="apply-partners-title">Our Partners</h2>
          <p className="apply-partners-description">
            We greatly appreciate the collaborative efforts and valuable
            contributions of our partners.
          </p>
          <div className="partners-slider">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div key={index} className="partner-logo">
                <img
                  src={logo}
                  alt={`Partner ${(index % partnerLogos.length) + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="apply-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of successful candidates who have launched their cruise
          ship careers with Oceara Cruises.
        </p>
        <Link to="/contact" className="apply-cta-btn">
          Contact Us
        </Link>
      </section>

      {/* Footer */}
      <footer className="apply-footer">
        <p className="apply-footer-text">© 2026 Copyright Oceara Cruises</p>
      </footer>
    </>
  );
};
