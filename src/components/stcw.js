import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import stcwHero from "../assets/stcw-hero.jpg";
import stcwFacility from "../assets/stcw-facility.jpg";
import stcwPool from "../assets/stcw-pool.jpg";
import stcwClassroom from "../assets/stcw-classroom.jpg";
import OcearaLogo from "../assets/oceara-logo.jpeg";
import "../css/stcw.css";

const courses = [
  "STCW Personal Survival Techniques (STCW A-VI/1-1)",
  "STCW Fire Fighting and Fire Prevention (STCW A-VI/1-2)",
  "STCW Elementary First Aid (STCW A-VI/1-3)",
  "STCW Personal Safety and Social Responsibility (STCW A-VI/1-4)",
  "Proficiency in Security Awareness (STCW code Reg A-VI/6-1)",
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

const galleryImages = [
  { src: stcwHero, alt: "STCW Training Classroom" },
  { src: stcwFacility, alt: "Training Facility" },
  { src: stcwPool, alt: "Olympic Swimming Pool" },
  { src: stcwClassroom, alt: "Theory Session" },
  { src: stcwFacility, alt: "Fire Training Container" },
  { src: stcwPool, alt: "Water Safety Training" },
];

export const STCW = () => {
  return (
    <>
      <Helmet>
        <title>
          STCW Training Centre - Ocearia Cruises | Maritime Safety Certification
        </title>
        <meta
          name="description"
          content="Ocearia Cruises STCW Training Centre offers comprehensive maritime safety courses including Fire Fighting, First Aid, Personal Survival, and Security Awareness. MCA UK certified."
        />
        <meta
          name="keywords"
          content="STCW training, maritime safety, fire fighting course, first aid certification, Kenya, cruise ship training"
        />
      </Helmet>

      {/* Header */}
      <header className="stcw-header">
        <div className="stcw-header-inner">
          <div className="logo">
            <img src={OcearaLogo} alt="Oceara Cruises" />
          </div>
          <nav className="stcw-nav">
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
        className="stcw-hero"
        style={{ backgroundImage: `url(${stcwHero})` }}
      >
        <div className="stcw-hero-content">
          <h1 className="stcw-hero-title">
            Ocearia Cruises STCW Training Centre
          </h1>
          <p className="stcw-hero-subtitle">
            Working together – we are stronger!
          </p>
          <a href="#about" className="stcw-hero-btn">
            Explore More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="stcw-about">
        <p className="stcw-about-intro">
          Ocearia Cruises is the only HP agency in Eastern Europe that has its
          training center for training to obtain the so-called STCW
          certificates.
        </p>
        <p className="stcw-about-text">
          In cooperation with our partners from England, Fire Aid, we can
          organize training for all certificates of the STCW convention.
        </p>

        <p className="stcw-about-highlight">
          OCEARIA CRUISES HAS BEEN CONDUCTING THESE TRAININGS SINCE 2009.
        </p>
        <p className="stcw-about-text">
          Our Training Center offers the most competitive range of comprehensive
          courses needed to upgrade the knowledge, skills, and competencies of
          Seafarers/Crew Members, all while maintaining compliance with the
          amended STCW.
        </p>
        <p className="stcw-about-text">
          The dynamics of the training depends on the needs of our sailors and,
          above all, on the demands of our partners.
        </p>

        <p className="stcw-clients">
          In the past years, we have successfully organized and realized
          corporate training for STCW certificates for{" "}
          <strong>
            MSC Cruises, Viking Ocean Cruises, and MSC Cruises and many
            individuals who are working all over the cruise companies and bulk
            carrier ships.
          </strong>
        </p>

        <ul className="stcw-courses-list">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        <div className="stcw-certifications">
          <div className="stcw-certification-item">
            <span>
              <span className="important">IMPORTANT</span> – Our certificates
              are certified by MCA UK and the Marshall Islands
            </span>
          </div>
          <div className="stcw-certification-item">
            <span>We are ISO certified * 9001-2015</span>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="stcw-facility">
        <div className="stcw-facility-container">
          <h2 className="stcw-facility-title">Our Training Facility</h2>
          <p className="stcw-facility-description">
            The Ocearia Cruises Training Center has an office space of 5,100 m²
            – a training building with a cafeteria, a training ground, a
            two-story container for fire protection training, and a swimming
            pool of Olympic dimensions.
            <br />
          </p>

          <div className="stcw-facility-stats">
            <div className="stcw-stat">
              <div className="stcw-stat-value">5,100 m²</div>
              <div className="stcw-stat-label">Office Space</div>
            </div>
            <div className="stcw-stat">
              <div className="stcw-stat-value">2-Story</div>
              <div className="stcw-stat-label">Fire Training Container</div>
            </div>
            <div className="stcw-stat">
              <div className="stcw-stat-value">Olympic</div>
              <div className="stcw-stat-label">Swimming Pool</div>
            </div>
            <div className="stcw-stat">
              <div className="stcw-stat-value">Since 2009</div>
              <div className="stcw-stat-label">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="stcw-gallery">
        <div className="stcw-gallery-container">
          <h2 className="stcw-gallery-title">Training Gallery</h2>
          <div className="stcw-gallery-grid">
            {galleryImages.map((image, index) => (
              <div key={index} className="stcw-gallery-item">
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="partners-header">
          <h2 className="partners-title fade-up">Our Partners</h2>
          <p className="partners-description fade-up fade-up-delay-1">
            We greatly appreciate the collaborative efforts and valuable
            contributions of our partners.
          </p>
        </div>
        <div className="partners-slider">
          {/* Double the logos for seamless infinite scroll */}
          {[...partnerLogos, ...partnerLogos].map((logo, index) => (
            <div key={index} className="partner-logo">
              <img
                src={logo}
                alt={`Partner ${(index % partnerLogos.length) + 1}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="stcw-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of successful candidates who have launched their cruise
          ship careers with Oceara Cruises.
        </p>
        <Link to="/apply" className="stcw-cta-btn">
          Apply Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="stcw-footer">
        <p className="stcw-footer-text">© 2024 Copyright Ocearia Cruises</p>
      </footer>
    </>
  );
};
