import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Mashujaa = () => {
  const scrollToArticle = () => {
    document.getElementById("article")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Happy Mashujaa Day from Ocearia Cruises | News</title>
        <meta
          name="description"
          content="Happy Mashujaa Day from Ocearia Cruises! Celebrating the heroes who have shaped Kenya with courage, resilience, and vision."
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
        style={{ backgroundImage: `url(${newsBg})` }}
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
            <p>Happy Mashujaa Day from Ocearia Cruises!</p>
            <p>
              Today, we proudly join the nation in celebrating the heroes — both
              past and present — who have shaped Kenya with courage, resilience,
              and vision. Mashujaa Day is a reminder of the sacrifices made for
              our freedom, and the continued efforts of everyday heroes who work
              tirelessly to uplift our communities.
            </p>
            <p>
              At Ocearia Cruises, we are inspired by this spirit of dedication
              and service. As we empower individuals to live their dreams, we
              honor those who have paved the way for a better tomorrow.
            </p>
            <p>
              To all our Mashujaa — we see you, we appreciate you, and we
              celebrate you.
            </p>
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
