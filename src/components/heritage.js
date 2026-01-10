import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Heritage = () => {
  const scrollToArticle = () => {
    document.getElementById("article")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>The Heritage and Vision of Oceara Cruises | News</title>
        <meta
          name="description"
          content="Oceara Cruises is built on a strong maritime heritage and a clear vision for the future of ocean travel."
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
        className="content-hero"
        style={{ backgroundImage: `url(${newsBg})` }}
      >
        <div className="content-hero-content">
          <h1 className="content-hero-title">
            The Heritage and Vision of Oceara Cruises!
          </h1>
          <p className="content-hero-date">07.11.2025</p>
          <Link to="/news">
            <button onClick={scrollToArticle} className="content-hero-btn">
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* Article Section */}
      <section id="article" className="content-article">
        <div className="content-article-grid">
          <div className="content-article-text">
            <p>The Heritage and Vision of Oceara Cruises!</p>
            <p>
              Oceara Cruises is built on a strong maritime heritage and a clear
              vision for the future of ocean travel. Rooted in a deep respect
              for the sea and inspired by generations of seafaring tradition,
              the company has grown into a trusted name in the cruise industry.
              This heritage shapes not only how Oceara Cruises operates but also
              how it connects people, cultures, and destinations across the
              world’s oceans.
            </p>
            <p>
              From its early beginnings, Oceara Cruises embraced the values of
              reliability, craftsmanship, and service excellence. These
              principles continue to guide daily operations, from ship
              management to guest experiences. The company’s long-standing
              relationships with clients, partners, and crew reflect a history
              built on trust and consistency. Many of these partnerships have
              endured for decades, reinforcing Oceara Cruises’ reputation as a
              dependable and forward-thinking cruise operator.
            </p>
            <p>
              While heritage provides a strong foundation, vision drives
              progress. Oceara Cruises looks toward the future with a commitment
              to innovation, sustainability, and evolving guest expectations.
              The company continuously evaluates new technologies, operational
              practices, and service models to ensure its cruises remain
              relevant in a rapidly changing industry. This forward-looking
              approach allows Oceara Cruises to adapt while preserving the
              timeless appeal of ocean travel.
            </p>
            <p>
              A key element of the company’s vision is responsible growth.
              Oceara Cruises focuses on expanding its routes and services
              thoughtfully, ensuring quality is never compromised. Each new
              itinerary is carefully planned to align with the company’s
              standards for safety, comfort, and cultural respect. This measured
              approach allows Oceara Cruises to maintain excellence while
              reaching new regions and travelers.
            </p>
            <p>
              People remain central to both heritage and vision. Oceara Cruises
              invests in long-term staff development, recognizing that
              experienced and motivated teams are essential to success. Crew
              members are encouraged to grow within the organization, preserving
              institutional knowledge while welcoming fresh perspectives. This
              balance strengthens operational stability and enhances the guest
              experience.
            </p>
            <p>
              Guest expectations also shape the company’s future direction.
              Oceara Cruises is committed to delivering meaningful, personalized
              journeys that go beyond traditional cruising. By listening to
              feedback and understanding evolving travel preferences, the
              company refines its offerings to create experiences that feel
              authentic, comfortable, and memorable.
            </p>
            <p>
              The heritage and vision of Oceara Cruises work together to define
              its identity. By honoring the past while embracing the future,
              Oceara Cruises continues to chart a course that values tradition,
              innovation, and human connection. Each voyage reflects this
              balance, offering travelers an experience shaped by experience,
              purpose, and a shared love of the sea.
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
        <p className="content-footer-text">© 2026 Copyright Ocearia Cruises</p>
      </footer>
    </>
  );
};
