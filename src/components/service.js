import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import newsBg from "../assets/news.jpg";
import "../css/content.css";
import OcearaLogo from "../assets/oceara-logo.png";

export const Service = () => {
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
          Personalized Service and Guest Satisfaction at Oceara Cruises | News
        </title>
        <meta
          name="description"
          content="Personalized service lies at the heart of every voyage with Oceara Cruises. The company believes that true luxury is defined not only by elegant surroundings but by the way guests are cared for throughout their journey."
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
            Personalized Service and Guest Satisfaction at Oceara Cruises!
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
              Personalized Service and Guest Satisfaction at Oceara Cruises!
            </p>
            <p>
              Personalized service lies at the heart of every voyage with Oceara
              Cruises. The company believes that true luxury is defined not only
              by elegant surroundings but by the way guests are cared for
              throughout their journey. By focusing on attention to detail,
              consistency, and genuine hospitality, Oceara Cruises creates
              experiences that feel tailored to each individual traveler.
            </p>
            <p>
              From the first point of contact, guests are treated with care and
              professionalism. The embarkation process is designed to be smooth
              and welcoming, allowing travelers to begin their journey with
              ease. Once onboard, dedicated guest service teams are available to
              assist with special requests, preferences, and travel
              arrangements. This proactive approach ensures that guests feel
              supported from start to finish.
            </p>
            <p>
              One of the defining features of personalized service at Oceara
              Cruises is the strong connection between crew and guests. With a
              favorable crew-to-guest ratio, staff members are able to provide
              attentive and meaningful service. Preferences such as dining
              choices, cabin arrangements, and activity interests are noted and
              remembered, allowing the crew to anticipate needs and create a
              more intimate cruise experience.
            </p>
            <p>
              Dining service reflects this commitment to personalization. Guests
              can enjoy flexible dining options, customized meal selections, and
              attentive table service. Special dietary requirements and personal
              preferences are carefully accommodated, ensuring that every guest
              feels valued and included. This level of attention transforms
              meals into memorable experiences rather than routine services.
            </p>
            <p>
              Onboard activities and entertainment are also designed with guest
              satisfaction in mind. Oceara Cruises offers a variety of programs
              that cater to different interests, from cultural enrichment and
              wellness activities to live entertainment and social events.
              Guests have the freedom to engage at their own pace, creating a
              journey that aligns with their personal travel style.
            </p>
            <p>
              Feedback plays an essential role in maintaining high service
              standards. Oceara Cruises actively listens to guest input during
              and after each voyage, using insights to refine services and
              improve future experiences. This commitment to continuous
              improvement demonstrates respect for guest opinions and a
              dedication to excellence.
            </p>
            <p>
              Comfort and privacy are equally prioritized. Cabins and public
              spaces are designed to offer both social interaction and quiet
              relaxation. Whether guests prefer vibrant social settings or
              peaceful retreats, Oceara Cruises ensures that every traveler can
              enjoy the cruise in their own way.
            </p>
            <p>
              Personalized service and guest satisfaction at Oceara Cruises are
              the result of thoughtful planning, experienced staff, and a
              culture of genuine care. By treating each guest as an individual
              rather than a number, Oceara Cruises delivers journeys that are
              not only luxurious but deeply memorable.
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
