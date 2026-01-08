import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsHero from "../assets/news-hero.jpeg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.jpeg";

export const HeadOffice = () => {
  const scrollToArticle = () => {
    document.getElementById("article")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Important Reminder – Oceara Cruises Head Office | News</title>
        <meta
          name="description"
          content="Important Reminder – Oceara Cruises Head Office! We are currently receiving over 2,000 applications per day via our official email and website."
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
        className="content-hero"
        style={{ backgroundImage: `url(${newsHero})` }}
      >
        <div className="content-hero-content">
          <h1 className="content-hero-title">
            Happy Mashujaa Day from Ocearia Cruises!
          </h1>
          <p className="content-hero-date">07.11.2025</p>
          <button onClick={scrollToArticle} className="content-hero-btn">
            Explore More
          </button>
        </div>
      </section>

      {/* Article Section */}
      <section id="article" className="content-article">
        <div className="content-article-grid">
          <div className="content-article-text">
            <p>Dear Applicants</p>
            <p>
              With sincere respect for all of you who show interest in cruise
              ship employment, we would like to share the following information.
            </p>
            <p>
              We are currently receiving over 2,000 applications per day via our
              official email and website. Please rest assured that every
              application is registered and reviewed through these official
              channels.
            </p>
            <p>
              To all our Mashujaa — we see you, we appreciate you, and we
              celebrate you.
            </p>
          </div>
          <div className="content-article-image">
            <img
              src="https://kouzonkenya.com/wp-content/uploads/2025/11/565158941_793355540197666_3302103674543682761_n-819x1024.webp"
              alt="Happy Mashujaa Day - Ocearia Cruises celebration graphic with Kenyan flag colors"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of successful candidates who have launched their cruise
          ship careers with Oceara Cruises.
        </p>
        <Link to="/apply" className="content-cta-btn">
          Apply Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="content-footer">
        <p className="content-footer-text">© 2024 Copyright Ocearia Cruises</p>
      </footer>
    </>
  );
};
