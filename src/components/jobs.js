import React from "react";
import { Helmet } from "react-helmet";
import jobsHero from "../assets/jobs-hero.jpeg";
import "../css/jobs.css";
import { Link } from "react-router-dom";
import OcearaLogo from "../assets/oceara-logo.jpeg";

// Cruise lines data
const cruiseLines = [
  { name: "Norwegian Cruise Line", color: "#1e3a5f" },
  { name: "Royal Caribbean", color: "#003366" },
  { name: "Carnival Cruise Line", color: "#cc0000" },
  { name: "Princess Cruises", color: "#00457c" },
  { name: "Celebrity Cruises", color: "#1a1a1a" },
];

// Partners logo
const partnerLogos = [
  "https://cruise.mk/wp-content/uploads/2023/08/princess-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/p0-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/royal.png",
  "https://cruise.mk/wp-content/uploads/2023/08/viking-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/cunard-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/cel-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/carnival-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/ncl-1.png",
  "https://cruise.mk/wp-content/uploads/2023/08/dufry.png",
];

// Job positions data
const jobPositions = [
  {
    id: 1,
    category: "Casino",
    title: "Casino Dealer",
    company: "Royal Caribbean Group",
    image:
      "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=500&fit=crop",
  },
  {
    id: 2,
    category: "Galley",
    title: "Galley",
    company: "Princess Cruises",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=500&fit=crop",
  },
  {
    id: 3,
    category: "Restaurant",
    title: "Waiter",
    company: "Celebrity Cruises",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop",
  },
  {
    id: 4,
    category: "Shop",
    title: "Sales Associate",
    company: "Effy Jewelry",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=500&fit=crop",
  },
  {
    id: 5,
    category: "Galley",
    title: "Butcher",
    company: "Norwegian Cruise Line",
    image:
      "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=500&fit=crop",
  },
  {
    id: 6,
    category: "Beverage",
    title: "Wine Steward",
    company: "Norwegian Cruise Line",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=500&fit=crop",
  },
  {
    id: 7,
    category: "Beverage",
    title: "Bartender",
    company: "Norwegian Cruise Line",
    image:
      "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=400&h=500&fit=crop",
  },
  {
    id: 8,
    category: "Engine Department",
    title: "Assistant Fitter Mechanic",
    company: "Carnival Cruise Line",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=500&fit=crop",
  },
  {
    id: 9,
    category: "Guest Services",
    title: "Guest Services Officer",
    company: "Royal Caribbean",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
  },
  {
    id: 10,
    category: "Guest Services",
    title: "Guest Relations Officer",
    company: "Celebrity Cruises",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
  },
  {
    id: 11,
    category: "Photo Department",
    title: "Photographer",
    company: "Royal Caribbean",
    image:
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=500&fit=crop",
  },
  {
    id: 12,
    category: "Housekeeping",
    title: "Floor Supervisor Trainee",
    company: "Carnival Cruise Line",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop",
  },
];

const Jobs = () => {
  return (
    <>
      <Helmet>
        <title>Jobs - Cruise Ship Careers | Oceara Cruises</title>
        <meta
          name="description"
          content="Explore exciting cruise ship job opportunities with Oceara Cruises. Find positions in casino, hospitality, culinary, and more."
        />
      </Helmet>

      <div className="jobs-page">
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
        <section className="jobs-hero">
          <img src={jobsHero} alt="Cruise ship jobs" className="jobs-hero-bg" />
          <div className="jobs-hero-overlay"></div>
          <div className="jobs-hero-content">
            <h1>Jobs</h1>
            <p>All Aboard for Exciting Job Opportunities!</p>
            <div className="jobs-hero-buttons">
              <a href="/apply" className="btn-primary">
                Apply Now
              </a>
              <a href="#positions" className="btn-secondary">
                Open Positions
              </a>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="jobs-departments">
          <div className="jobs-departments-inner">
            <span className="section-subtitle">
              Your Next Career Adventure Begins Here!
            </span>
            <h2>Departments and Position on Cruise ships</h2>
            <p>
              Embark on your journey to a rewarding career at sea with our
              comprehensive listing of open vacancies. As a premier cruise ship
              employment agency, we're thrilled to present a myriad of exciting
              opportunities aboard some of the world's most luxurious and
              renowned cruise liners. Whether you dream of providing exceptional
              guest service, showcasing your culinary talents, or navigating the
              high seas, our diverse range of positions caters to individuals of
              all backgrounds and skill sets.
            </p>

            <div className="cruise-lines-grid">
              {cruiseLines.map((line, index) => (
                <div key={index} className="cruise-line-card">
                  <span>{line.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="jobs-positions" id="positions">
          <div className="jobs-positions-inner">
            <div className="section-header">
              <div className="section-header-left">
                <div>
                  <span className="section-subtitle">
                    Your Next Career Adventure Begins Here!
                  </span>
                  <h2>Open Positions</h2>
                </div>
              </div>
            </div>

            <div className="positions-grid">
              {jobPositions.map((position) => (
                <div key={position.id} className="position-card">
                  <div className="position-card-image">
                    <img src={position.image} alt={position.title} />
                    <span className="position-category">
                      {position.category}
                    </span>
                  </div>
                  <div className="position-card-content">
                    <h3>{position.title}</h3>
                    <p className="position-company">{position.company}</p>
                    <a href="/apply" className="read-more">
                      Apply now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="jobs-partners">
          <div className="jobs-partners-inner">
            <h2>Our Partners</h2>
            <p>
              We greatly appreciate the collaborative efforts and valuable
              contributions of our partners.
            </p>
            <div className="partners-slider">
              {/* Double the logos for seamless infinite scroll */}
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div key={index} className="partner-logo">
                  <img
                    src={logo}
                    alt={`Partner ${(index % partnerLogos.length) + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="jobs-cta">
          <div className="jobs-cta-inner">
            <h2>Ready to Start Your Journey?</h2>
            <p>
              Join thousands of successful candidates who have launched their
              cruise ship careers with Oceara Cruises.
            </p>
            <a href="/apply" className="btn-apply">
              Apply Now
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="jobs-footer">
          <p>© 2024 Copyright Oceara Cruises</p>
        </footer>
      </div>
    </>
  );
};

export default Jobs;
