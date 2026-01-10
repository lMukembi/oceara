import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Professional = () => {
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
          Professional Crew Training and Career Development at Oceara Cruises |
          News
        </title>
        <meta
          name="description"
          content="A successful cruise experience begins with the people who operate the ship, and Oceara Cruises places exceptional importance on professional crew training and long-term career development."
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
            Professional Crew Training and Career Development at Oceara Cruises!
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
            <p>
              Professional Crew Training and Career Development at Oceara
              Cruises!
            </p>
            <p>
              A successful cruise experience begins with the people who operate
              the ship, and Oceara Cruises places exceptional importance on
              professional crew training and long-term career development. From
              onboard service teams to technical and safety personnel, every
              role plays a critical part in delivering safe, seamless, and
              memorable journeys. Oceara Cruises believes that investing in its
              workforce is essential to maintaining high standards across all
              operations.
            </p>
            <p>
              Crew members at Oceara Cruises undergo comprehensive training
              before stepping onboard. This preparation ensures that all
              personnel are fully qualified for their specific occupations and
              familiar with international maritime regulations. Mandatory safety
              and emergency training, including STCW certification, equips crew
              members with the skills required to respond effectively to onboard
              situations while prioritizing passenger safety. This structured
              approach ensures consistency, confidence, and professionalism
              throughout the fleet.
            </p>
            <p>
              Beyond safety, service excellence is a key focus of training
              programs. Hospitality staff receive specialized instruction in
              guest relations, cultural awareness, and service etiquette. This
              enables crew members to anticipate guest needs, communicate
              effectively, and provide personalized experiences. Whether
              assisting in dining venues, guest services, or entertainment
              spaces, crew members are trained to uphold the refined standards
              associated with Oceara Cruises.
            </p>
            <p>
              Career development is deeply embedded in the company’s culture.
              Oceara Cruises actively supports long-term employment by offering
              clear progression pathways for crew members. Performance-based
              promotions, ongoing skills development, and leadership training
              allow individuals to grow within the organization. Many senior
              crew members began their careers in entry-level roles,
              demonstrating the company’s commitment to internal advancement and
              professional growth.
            </p>
            <p>
              Continuous training is essential in an industry shaped by evolving
              regulations and technology. Oceara Cruises regularly updates its
              training programs to reflect new safety standards, operational
              procedures, and technological advancements. Refresher courses,
              onboard drills, and specialized workshops ensure that crew members
              remain current, capable, and confident in their roles. This
              proactive approach enhances operational efficiency while
              maintaining compliance with international maritime requirements.
            </p>
            <p>
              Well-being and work-life balance are also prioritized as part of
              crew development. Oceara Cruises recognizes that a supported and
              motivated workforce delivers better service. Crew members are
              provided with structured schedules, access to wellness resources,
              and opportunities for rest and recreation while onboard. A
              positive working environment contributes to higher morale,
              stronger teamwork, and improved guest satisfaction.
            </p>
            <p>
              Cultural diversity is another strength of Oceara Cruises’
              workforce. Crew members from different countries and backgrounds
              bring unique perspectives, skills, and experiences. Training
              programs emphasize inclusivity, teamwork, and mutual respect,
              ensuring smooth collaboration in a multicultural environment. This
              diversity enriches onboard culture and allows Oceara Cruises to
              serve an international guest base with sensitivity and
              understanding.
            </p>
            <p>
              By combining rigorous training, career development opportunities,
              and a supportive work environment, Oceara Cruises builds a
              workforce defined by professionalism and dedication. The company’s
              long-standing employee retention reflects this commitment, with
              many crew members choosing to build lasting careers within the
              organization. Professional crew training and development are not
              just operational priorities but fundamental pillars of Oceara
              Cruises’ success at sea.
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
        <p className="content-footer-text">© 2026 Copyright Oceara Cruises</p>
      </footer>
    </>
  );
};
