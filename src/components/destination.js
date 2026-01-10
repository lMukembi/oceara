import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Destination = () => {
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
          Global Routes and Destination Experiences with Oceara Cruises | News
        </title>
        <meta
          name="description"
          content="Oceara Cruises is dedicated to connecting travelers with the world’s most captivating destinations through carefully designed global routes. "
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
            Global Routes and Destination Experiences with Oceara Cruises!
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
              Global Routes and Destination Experiences with Oceara Cruises!
            </p>
            <p>
              Oceara Cruises is dedicated to connecting travelers with the
              world’s most captivating destinations through carefully designed
              global routes. Each itinerary is crafted to offer more than
              transportation between ports; it delivers immersive experiences
              that reflect the culture, history, and natural beauty of every
              region visited. From vast oceans to iconic coastlines, Oceara
              Cruises transforms global travel into a journey of discovery and
              comfort.
            </p>
            <p>
              The company’s routes span major oceans and seas, allowing guests
              to experience diverse environments within a single voyage. Whether
              sailing across the Atlantic, navigating the Pacific, or exploring
              coastal regions, Oceara Cruises emphasizes smooth transitions and
              scenic journeys. Time at sea is balanced with enriching port
              visits, ensuring that travelers enjoy both relaxation and
              exploration throughout their cruise.
            </p>
            <p>
              Destination selection is guided by cultural significance and guest
              interest. Oceara Cruises prioritizes ports known for historical
              landmarks, vibrant traditions, and unique local character. Shore
              excursions are designed to offer authentic experiences, including
              guided city tours, cultural performances, culinary tastings, and
              nature-based activities. These experiences allow guests to engage
              meaningfully with each destination while maintaining comfort and
              organization.
            </p>
            <p>
              Partnerships with local guides and operators play a key role in
              delivering high-quality destination experiences. Oceara Cruises
              collaborates with trusted local professionals who provide in-depth
              knowledge and insight. This approach not only enhances the guest
              experience but also supports local economies and promotes
              responsible tourism. Guests benefit from expert guidance while
              enjoying respectful and well-managed excursions.
            </p>
            <p>
              Flexibility is an important feature of Oceara Cruises’
              itineraries. Travelers can choose from a variety of excursion
              options or explore independently, depending on their preferences.
              For those seeking deeper immersion, extended port stays and
              overnight visits offer additional time to experience local life,
              cuisine, and entertainment. This flexibility allows guests to
              personalize their journey without sacrificing structure or safety.
            </p>
            <p>
              Onboard enrichment programs complement destination experiences.
              Lectures, presentations, and cultural workshops introduce guests
              to upcoming ports before arrival. These sessions provide
              historical context, cultural understanding, and practical
              information, allowing travelers to fully appreciate each
              destination. By blending education with exploration, Oceara
              Cruises enhances the overall value of every itinerary.
            </p>
            <p>
              Comfort and efficiency remain central throughout global routes.
              Oceara Cruises ensures smooth embarkation, disembarkation, and
              transit processes, minimizing delays and maximizing enjoyment.
              Experienced navigation teams carefully plan routes to ensure
              safety, optimal travel times, and scenic value. Guests can relax
              knowing that every detail has been thoughtfully managed.
            </p>
            <p>
              Global routes and destination experiences with Oceara Cruises
              reflect the company’s commitment to meaningful travel. By
              combining carefully planned itineraries, authentic shore
              experiences, and refined onboard service, Oceara Cruises offers
              journeys that go beyond sightseeing. Each voyage becomes an
              opportunity to connect with the world, experience diverse
              cultures, and explore new horizons in comfort and style.
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
