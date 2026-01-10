import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Innovation = () => {
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
          Innovation and Technology at Sea with Oceara Cruises | News
        </title>
        <meta
          name="description"
          content="Innovation and technology play a central role in shaping the modern cruising experience, and Oceara Cruises continues to embrace advanced solutions to enhance safety, efficiency, and guest comfort."
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
            Innovation and Technology at Sea with Oceara Cruises!
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
            <p>Innovation and Technology at Sea with Oceara Cruises!</p>
            <p>
              Innovation and technology play a central role in shaping the
              modern cruising experience, and Oceara Cruises continues to
              embrace advanced solutions to enhance safety, efficiency, and
              guest comfort. By integrating cutting-edge maritime technology
              with refined hospitality, the company ensures that every voyage
              meets the highest operational standards while delivering a
              seamless and enjoyable experience at sea.
            </p>
            <p>
              At the foundation of Oceara Cruises’ technological approach is
              ship design and navigation. Modern vessels are equipped with
              advanced bridge systems, real-time monitoring tools, and automated
              navigation support that assist crews in making precise and
              informed decisions. These technologies improve route efficiency,
              fuel management, and situational awareness, contributing to safer
              and smoother journeys across global waters.
            </p>
            <p>
              Onboard systems are designed to support operational efficiency and
              sustainability. Smart energy management systems optimize power
              usage throughout the ship, reducing consumption without affecting
              guest comfort. Advanced climate control systems maintain ideal
              temperatures in cabins and public spaces, while intelligent
              lighting adapts to time of day and usage patterns. These
              innovations enhance comfort while supporting environmentally
              responsible operations.
            </p>
            <p>
              Guest-facing technology is equally important. Oceara Cruises
              integrates digital solutions that simplify and personalize the
              onboard experience. From seamless check-in processes to digital
              information platforms, guests can access schedules, services, and
              updates with ease. These tools reduce waiting times and allow
              travelers to focus on relaxation and enjoyment rather than
              logistics.
            </p>
            <p>
              Safety technology remains a top priority. Oceara Cruises utilizes
              advanced safety and emergency systems, including modern fire
              detection, surveillance, and communication networks. Regular
              testing and system upgrades ensure reliability and compliance with
              international maritime regulations. Combined with continuous crew
              training, these technologies provide a strong foundation for
              onboard safety and emergency preparedness.
            </p>
            <p>
              Technology also supports crew performance and development. Digital
              training platforms, performance monitoring systems, and
              communication tools enable efficient coordination across
              departments. Crew members can access up-to-date procedures,
              training materials, and operational guidelines, ensuring
              consistency and accuracy in daily operations. This integration
              enhances teamwork and service delivery across the fleet.
            </p>
            <p>
              Innovation extends to guest entertainment and wellness
              experiences. High-quality audio-visual systems support live
              performances and presentations, while modern fitness and wellness
              facilities incorporate technology to enhance relaxation and
              health. Whether enjoying onboard entertainment or participating in
              wellness programs, guests benefit from thoughtfully integrated
              technological features.
            </p>
            <p>
              Looking forward, Oceara Cruises remains committed to continuous
              innovation. The company actively explores emerging maritime
              technologies, cleaner energy solutions, and digital advancements
              that align with its long-term vision. Innovation is viewed not as
              a one-time investment but as an ongoing process that evolves
              alongside industry standards and guest expectations.
            </p>
            <p>
              Innovation and technology at sea with Oceara Cruises reflect a
              balanced approach where progress enhances, rather than replaces,
              the human element of cruising. By combining advanced systems with
              skilled professionals and personalized service, Oceara Cruises
              delivers voyages that are efficient, safe, and effortlessly
              enjoyable.
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
