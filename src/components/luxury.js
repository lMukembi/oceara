import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Luxury = () => {
  const scrollToArticle = () => {
    document.getElementById("article")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Luxury Experiences in the Atlantic | News</title>
        <meta
          name="description"
          content="Luxury Experiences in the Atlantic define the essence of what Oceara Cruises offers to travelers seeking refinement, comfort, and unforgettable ocean journeys."
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
            Luxury Experiences in the Atlantic!
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
            <p>Luxury Experiences in the Atlantic!</p>
            <p>
              Luxury Experiences in the Atlantic define the essence of what
              Oceara Cruises offers to travelers seeking refinement, comfort,
              and unforgettable ocean journeys. Sailing across the vast Atlantic
              Ocean is more than a voyage between destinations; it is an
              experience shaped by elegance, world-class service, and the
              timeless beauty of the open sea. Oceara Cruises has carefully
              designed its Atlantic routes to blend sophisticated onboard living
              with the thrill of exploration, creating a seamless balance
              between relaxation and adventure.
            </p>
            <p>
              From the moment guests step onboard, luxury is evident in every
              detail. Spacious staterooms and suites are thoughtfully designed
              with modern finishes, panoramic ocean views, and private balconies
              that allow travelers to enjoy sunrise and sunset over endless blue
              horizons. Plush bedding, personalized service, and quiet elegance
              ensure that each guest feels at home while surrounded by the
              grandeur of the Atlantic. Every space onboard reflects Oceara
              Cruises’ commitment to comfort, privacy, and refined design.
            </p>
            <p>
              Dining aboard Oceara Cruises is a central part of the luxury
              experience. Guests can indulge in gourmet cuisine crafted by
              skilled chefs who draw inspiration from both international flavors
              and regional Atlantic influences. Fine dining restaurants offer
              carefully curated menus, premium wines, and impeccable service,
              while more relaxed venues provide casual elegance without
              compromising quality. Each meal becomes an experience in itself,
              whether enjoyed in an intimate dining room or on an open deck with
              ocean views.
            </p>
            <p>
              Entertainment and enrichment further elevate the Atlantic journey.
              Oceara Cruises offers a range of onboard activities designed to
              engage, inspire, and relax guests throughout the voyage. Live
              performances, cultural presentations, and expert-led talks provide
              insight into Atlantic history, maritime traditions, and upcoming
              destinations. For those seeking tranquility, luxury spas, wellness
              centers, and quiet lounges offer spaces to unwind while listening
              to the gentle rhythm of the sea.
            </p>
            <p>
              The Atlantic Ocean is known for its vastness and power, and Oceara
              Cruises ensures that every voyage prioritizes safety without
              compromising luxury. Modern ships are equipped with advanced
              navigation systems and operated by highly trained crews who uphold
              the highest international maritime standards. This commitment
              allows guests to relax fully, knowing they are in capable hands as
              they cross one of the world’s most iconic oceans.
            </p>
            <p>
              Beyond the ship itself, Oceara Cruises carefully curates shore
              experiences that complement the elegance of the onboard journey.
              Atlantic routes may include historic port cities, coastal towns,
              and culturally rich destinations, each offering guests the
              opportunity to explore local traditions, architecture, and
              cuisine. Guided excursions are designed to be immersive yet
              comfortable, allowing travelers to experience each destination
              without stress or crowds.
            </p>
            <p>
              What truly sets Oceara Cruises apart is its personalized approach
              to luxury. The crew-to-guest ratio ensures attentive service,
              where preferences are remembered and details are anticipated.
              Whether arranging private dining experiences, special
              celebrations, or tailored excursions, Oceara Cruises focuses on
              creating meaningful moments that go beyond standard cruising.
            </p>
            <p>
              Luxury Experiences in the Atlantic with Oceara Cruises are about
              more than reaching a destination. They represent a journey where
              time slows down, comfort is elevated, and the ocean becomes part
              of the experience rather than simply the route. Each voyage
              reflects Oceara Cruises’ dedication to excellence, offering
              travelers an opportunity to reconnect with the sea in an
              atmosphere of elegance, discovery, and enduring sophistication.
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
