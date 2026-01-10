import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Maritime = () => {
  const scrollToArticle = () => {
    document.getElementById("article")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Maritime Safety and Operational Excellence at Oceara Cruises | News
        </title>
        <meta
          name="description"
          content="Maritime safety is the foundation upon which every Oceara Cruises voyage is built. Operating across major oceans requires precision, expertise, and unwavering commitment to international standards."
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
            Maritime Safety and Operational Excellence at Oceara Cruises!
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
            <p>Maritime Safety and Operational Excellence at Oceara Cruises!</p>
            <p>
              Maritime safety is the foundation upon which every Oceara Cruises
              voyage is built. Operating across major oceans requires precision,
              expertise, and unwavering commitment to international standards.
              Oceara Cruises places safety and operational excellence at the
              core of its mission, ensuring that every journey is conducted with
              the highest levels of professionalism, preparedness, and care.
            </p>
            <p>
              All vessels operated by Oceara Cruises comply fully with
              international maritime regulations, including those set by the
              International Maritime Organization. Ships are maintained through
              rigorous inspection schedules, regular audits, and preventative
              maintenance programs. These measures ensure that all mechanical,
              navigational, and safety systems function reliably throughout each
              voyage.
            </p>
            <p>
              Crew training is central to operational excellence. Every crew
              member undergoes mandatory certification and safety training
              relevant to their specific role before joining a vessel. This
              includes emergency response procedures, fire prevention, crowd
              management, and lifesaving techniques. Continuous drills and
              refresher courses are conducted onboard to maintain readiness and
              reinforce best practices across all departments.
            </p>
            <p>
              Advanced technology further strengthens safety operations. Oceara
              Cruises vessels are equipped with modern navigation systems,
              weather monitoring tools, and communication networks that support
              real-time decision-making. These systems enable bridge officers to
              anticipate and respond effectively to changing sea conditions,
              ensuring smooth and secure passage across all routes.
            </p>
            <p>
              Emergency preparedness is a priority throughout every voyage.
              Clear procedures, well-marked safety equipment, and comprehensive
              evacuation plans are in place on all ships. Guests participate in
              mandatory safety briefings, ensuring they understand onboard
              protocols and feel confident during their journey. Transparency
              and communication are key elements of Oceara Cruises’ safety
              culture.
            </p>
            <p>
              Operational excellence extends beyond safety to include efficiency
              and reliability. Careful voyage planning, coordinated port
              operations, and skilled crew coordination allow Oceara Cruises to
              maintain punctual schedules while minimizing disruptions. This
              consistency enhances guest trust and supports a seamless travel
              experience.
            </p>
            <p>
              Health and hygiene standards are also strictly enforced. Oceara
              Cruises follows comprehensive sanitation protocols across all
              onboard areas, including cabins, dining venues, and public spaces.
              These measures protect both guests and crew while supporting
              overall operational stability.
            </p>
            <p>
              Maritime safety and operational excellence at Oceara Cruises
              reflect a long-standing commitment to responsibility and trust. By
              combining skilled professionals, advanced technology, and strict
              compliance, Oceara Cruises ensures that every voyage is conducted
              with confidence, reliability, and care—allowing guests to relax
              and enjoy the journey with complete peace of mind.
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
