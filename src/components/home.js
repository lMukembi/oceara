import React, { useState, useEffect } from "react";
import "../css/home.css";
import heroBg from "../assets/hero-bg.jpg";
import OcearaLogo from "../assets/oceara-logo.jpeg";

// Hero slide data
const heroSlides = [
  {
    subtitle: "SET SAIL TO YOUR DREAM CAREER!",
    description: "Final hiring decisions are not made by Oceara Cruises staff.",
  },
  {
    subtitle: "SET SAIL TO YOUR DREAM CAREER!",
    description:
      "All recruitment decisions are solely made by the cruise lines.",
  },
  {
    subtitle: "SET SAIL TO YOUR DREAM CAREER!",
    description: "Our application process is FREE for any applicants.",
  },
];

// News data
const newsItems = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
    date: "12.11.2025",
    title:
      "Oceara Cruises Reaches Over Half a Million Emails in Just 316 Days!",
    excerpt:
      "Our general inbox has received more than 500,000 emails from applicants across the globe!",
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400",
    date: "07.11.2025",
    title: "Happy Mashujaa Day from all of us at Oceara Cruises!",
    excerpt:
      "To all our Mashujaa — we see you, we appreciate you, and we celebrate you.",
  },
  {
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400",
    date: "07.11.2025",
    title: "Cruise Ship Jobs 2025 – Apply Now with Oceara Cruises",
    excerpt:
      "Explore global career opportunities with Royal Caribbean, Carnival Cruise Line & Princess Cruises.",
  },
  {
    image: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=400",
    date: "07.07.2025",
    title: "Employment Presentation for Zimbabwe",
    excerpt: "Are you a Zimbabwean dreaming of working on a cruise ship?",
  },
];

// Jobs data
const jobItems = [
  {
    category: "Casino",
    title: "Casino Dealer",
    company: "Royal Caribbean Group",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
  },
  {
    category: "Galley",
    title: "Galley",
    company: "Princess Cruises",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
  },
  {
    category: "Restaurant",
    title: "Waiter",
    company: "Celebrity Cruises",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400",
  },
  {
    category: "Shop",
    title: "Sales Associate",
    company: "Effy Jewelry",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400",
  },
  {
    category: "Galley",
    title: "Butcher",
    company: "Norwegian Cruise Line",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400",
  },
  {
    category: "Beverage",
    title: "Wine Steward",
    company: "Norwegian Cruise Line",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400",
  },
  {
    category: "Beverage",
    title: "Bartender",
    company: "Norwegian Cruise Line",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400",
  },
  {
    category: "Engine",
    title: "Assistant Electrician",
    company: "Carnival Cruise Line",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
  },
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

export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={OcearaLogo} alt="Oceara Cruises" />
        </div>
        <nav className="nav">
          <a href="/" className="nav-link active">
            Home
          </a>
          <a href="/jobs" className="nav-link">
            Jobs
          </a>
          <a href="/news" className="nav-link">
            News
          </a>
          <a href="/about-us" className="nav-link">
            About Us
          </a>
          <a href="/stcw-training" className="nav-link">
            STCW Training
          </a>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="hero-content">
          <p className="hero-subtitle">{heroSlides[activeSlide].subtitle}</p>
          <h1 className="hero-title">Oceara Cruises</h1>
          <p className="hero-description">
            {heroSlides[activeSlide].description}
          </p>
          <div className="hero-buttons">
            <a href="/apply" className="btn btn-primary">
              Apply Now
            </a>
            <a href="#jobs" className="btn btn-secondary">
              Find Jobs
            </a>
            {/* <a href="/stcw-training" className="btn btn-secondary">
              STCW Training
            </a> */}
          </div>
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <span
              key={index}
              className={`hero-dot ${index === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-header">
          <p className="stats-label">Leading cruise ship hiring agency</p>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">35000</div>
            <div className="stat-label">Employed candidates</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20</div>
            <div className="stat-label">Countries</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25</div>
            <div className="stat-label">Years in operation</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">12</div>
            <div className="stat-label">Exclusive hiring partner</div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news" id="news">
        <div className="section-header">
          <p className="section-subtitle">
            Stay Informed, Stay Ahead in Cruise Employment!
          </p>
          <h2 className="section-title">News</h2>
        </div>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article className="news-card" key={index}>
              <img src={item.image} alt={item.title} className="news-image" />
              <div className="news-content">
                <p className="news-date">{item.date}</p>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <a href="#news" className="news-link">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="view-all">
          <a href="/news">View all news</a>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="process">
        <div className="section-header">
          <p className="section-subtitle">Find out how our system works</p>
          <h2 className="section-title">Oceara Cruises recruitment system</h2>
        </div>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <p className="step-title">Find a job</p>
            <p className="step-subtitle">you want</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <p className="step-title">Apply for</p>
            <p className="step-subtitle">a job</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <p className="step-title">Our team will</p>
            <p className="step-subtitle">contact you shortly</p>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="jobs" id="jobs">
        <div className="section-header">
          <p className="section-subtitle">
            Find your favourite jobs and get the benefits of yourself
          </p>
          <h2 className="section-title">Open positions</h2>
        </div>
        <div className="jobs-grid">
          {jobItems.map((job, index) => (
            <article className="job-card" key={index}>
              <img src={job.image} alt={job.title} className="job-image" />
              <div className="job-overlay">
                <p className="job-category">- {job.category}</p>
                <h3 className="job-title">{job.title}</h3>
              </div>
              <div className="job-footer">
                <span className="job-company">{job.company}</span>
                <a href="/apply" className="job-link">
                  Apply now
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="view-all">
          <a href="/jobs">View all jobs</a>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="section-header">
          <h2 className="section-title">Our Partners</h2>
          <p className="partners-subtitle">
            Embark on a Career Voyage with Us and Our Partners!
          </p>
        </div>
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
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of successful candidates who have launched their cruise
          ship careers with Oceara Cruises.
        </p>
        <a href="/apply" className="btn btn-primary">
          Apply Now
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Copyright Oceara Cruises</p>
      </footer>
    </div>
  );
};

export default Home;
