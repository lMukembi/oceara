import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Sustainability = () => {
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
          Sustainability and Responsible Cruising with Oceara Cruises | News
        </title>
        <meta
          name="description"
          content="Sustainability has become a defining priority in modern maritime travel, and Oceara Cruises is committed to shaping a future where luxury cruising and environmental responsibility move forward together."
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
            Sustainability and Responsible Cruising with Oceara Cruises!
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
            <p>Sustainability and Responsible Cruising with Oceara Cruises!</p>
            <p>
              Sustainability has become a defining priority in modern maritime
              travel, and Oceara Cruises is committed to shaping a future where
              luxury cruising and environmental responsibility move forward
              together. As global awareness of ocean conservation grows, Oceara
              Cruises recognizes its role in protecting marine ecosystems while
              continuing to deliver exceptional travel experiences. Responsible
              cruising is not a trend for the company; it is a long-term
              commitment rooted in respect for the sea.
            </p>
            <p>
              At the core of Oceara Cruises’ sustainability approach is
              efficient ship design and operation. Modern vessels are equipped
              with advanced technologies that reduce fuel consumption and
              emissions, helping to minimize the environmental footprint of each
              voyage. Optimized navigation routes, energy-efficient systems, and
              continuous monitoring of onboard operations ensure that resources
              are used responsibly without compromising safety or comfort. These
              measures allow Oceara Cruises to operate efficiently while
              preserving the natural beauty of the oceans it sails.
            </p>
            <p>
              Waste management is another key pillar of sustainable cruising.
              Oceara Cruises follows strict international standards for waste
              reduction, recycling, and disposal. Onboard systems are designed
              to minimize waste generation, while recycling programs ensure that
              materials such as paper, glass, and plastics are properly handled.
              Food waste is carefully managed to reduce excess and support
              environmentally responsible practices. By prioritizing waste
              reduction at every stage, Oceara Cruises contributes to cleaner
              oceans and healthier marine environments.
            </p>
            <p>
              Water conservation also plays a critical role in responsible
              cruise operations. Oceara Cruises utilizes advanced water
              treatment and purification systems that allow ships to produce
              fresh water efficiently while reducing reliance on external
              sources. These systems ensure that wastewater is treated to the
              highest standards before being released, protecting marine life
              and coastal ecosystems. Through careful monitoring and innovation,
              the company works to reduce water consumption across all onboard
              services.
            </p>
            <p>
              Sustainability extends beyond technology to include people and
              communities. Oceara Cruises is committed to ethical labor
              practices, fair employment, and continuous training for crew
              members. By investing in long-term staff development, the company
              ensures skilled operations while fostering a culture of
              responsibility and professionalism. A well-trained crew is
              essential not only for guest experience but also for maintaining
              high environmental and safety standards onboard.
            </p>
            <p>
              Responsible cruising also means supporting local economies at
              destinations. Oceara Cruises collaborates with local tour
              operators, guides, and suppliers to ensure that shore excursions
              benefit host communities. These partnerships encourage cultural
              exchange, preserve local traditions, and promote sustainable
              tourism practices. Guests are offered authentic experiences that
              respect local environments and cultures, reinforcing the idea that
              travel should be mutually beneficial.
            </p>
            <p>
              Education and awareness are vital components of Oceara Cruises’
              sustainability mission. Guests are encouraged to engage with
              environmental initiatives through onboard programs, informational
              sessions, and responsible travel guidelines. By fostering
              awareness, Oceara Cruises empowers travelers to make
              environmentally conscious choices both during their voyage and
              beyond. Small actions, when multiplied across thousands of guests,
              can create meaningful impact.
            </p>
            <p>
              Looking ahead, Oceara Cruises continues to explore innovative
              solutions to further enhance sustainability across its fleet. From
              cleaner energy alternatives to improved operational efficiencies,
              the company remains focused on progress and accountability.
              Sustainability is viewed as an evolving journey, requiring
              continuous learning, adaptation, and investment.
            </p>
            <p>
              Sustainability and responsible cruising with Oceara Cruises
              represent a promise to future generations. By protecting the
              oceans that inspire its voyages, Oceara Cruises ensures that the
              beauty, diversity, and wonder of the sea remain accessible for
              years to come. Through thoughtful practices and long-term
              commitment, the company proves that luxury and responsibility can
              coexist at sea.
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
