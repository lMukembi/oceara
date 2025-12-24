import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import newsHero from "../assets/news-hero.jpeg";
import "../css/news.css";
import { Link } from "react-router-dom";
import { CruiseLogo } from "./logo";

const newsArticles = [
  {
    id: 1,
    title:
      "Oceara Cruises Reaches Over Half a Million Emails in Just 316 Days!",
    excerpt:
      "As 2025 draws to a close, in only 316 days, our general inbox - info@ocearacruises.com.mk - has received more than 500,000 emails from applicants across the globe!",
    date: "12.11.2025",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Happy Mashujaa Day from all of us at Oceara Cruises!",
    excerpt:
      "To all our Mashujaa — we see you, we appreciate you, and we celebrate you.",
    date: "07.11.2025",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Cruise Ship Jobs 2025 – Apply Now with Oceara Cruises",
    excerpt:
      "Explore global career opportunities with Royal Caribbean, Carnival Cruise Line & Princess Cruises. Apply now for cruise ship jobs via Oceara Cruises!",
    date: "07.11.2025",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Employment Presentation for Zimbabwe",
    excerpt: "Are you a Zimbabwean dreaming of working on a cruise ship?",
    date: "07.07.2025",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Important Notice for All candidates from Kenya",
    excerpt:
      "Oceara Cruises - Important notice for all candidates regarding application procedures.",
    date: "03.07.2025",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Oceara Cruises Launches Global Initiative: Working with the Youth",
    excerpt:
      "Oceara Cruises proudly launches a new global initiative – Working with the Youth – Shaping the Future.",
    date: "02.07.2025",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title:
      "Celebrating Our Heroes at Sea – Happy International Seafarer's Day!",
    excerpt:
      "Oceara Cruises celebrates International Seafarer's Day by honoring the brave men and women who work at sea.",
    date: "25.06.2025",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "Happy Madaraka Day from Oceara Cruises",
    excerpt:
      "Today, on June 1st, we join all Kenyans in commemorating Madaraka Day—a momentous occasion.",
    date: "02.06.2025",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    title: "Employment Opportunities with Royal Caribbean Cruise Line",
    excerpt:
      "Are you seeking a new challenge and a remarkable opportunity to travel the World and make money?",
    date: "20.05.2025",
    image:
      "https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    title: "Important Reminder – Oceara Cruises Head Office",
    excerpt:
      "We are currently receiving over 2,000 applications per day via our official email and website.",
    date: "24.04.2025",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    title: "Work for Royal Caribbean Group",
    excerpt:
      "Launch Your Career at Sea with exciting culinary and F&B opportunities.",
    date: "11.04.2025",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    title: "CARNIVAL CRUISE LINE – NEW VARIOUS OPEN POSITIONS",
    excerpt:
      "Explore new job openings with Carnival Cruise Line across multiple departments.",
    date: "04.04.2025",
    image:
      "https://images.unsplash.com/photo-1559599746-c0f31be35dcd?w=400&h=300&fit=crop",
  },
];

export const News = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalPages = Math.ceil(newsArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const displayedArticles = newsArticles.slice(
    startIndex,
    startIndex + articlesPerPage
  );

  return (
    <div className="news-page">
      <Helmet>
        <title>News - Oceara Cruises | Cruise Industry Updates</title>
        <meta
          name="description"
          content="Stay informed with the latest cruise industry updates, employment opportunities, and news from Oceara Cruises."
        />
      </Helmet>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <CruiseLogo />
            <span className="logo-text">Oceara Cruises</span>
            <span className="logo-tagline">live your dream</span>
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
        className="news-hero"
        style={{ backgroundImage: `url(${newsHero})` }}
      >
        <div className="news-hero-overlay"></div>
        <div className="news-hero-content">
          <h1>News</h1>
          <p>Stay Afloat with the Latest Cruise Industry Updates!</p>
          <a href="#news-grid" className="news-hero-btn">
            Explore More
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="news-intro">
        <p className="news-intro-tagline">
          Stay Informed, Stay Ahead in Cruise Employment!
        </p>
        <h2>News</h2>
        <p>
          From exciting events and exclusive interviews to cutting-edge training
          opportunities, our platform keeps you informed and engaged every step
          of the way. Whether you're a seasoned maritime professional or a
          newcomer eager to embark on a career at sea, our curated content
          offers valuable resources and inspiration to fuel your journey.
          Explore our dynamic news feed and discover the pulse of the cruise
          ship employment industry.
        </p>
      </section>

      {/* News Grid */}
      <section className="news-grid-section" id="news-grid">
        <div className="news-grid">
          {displayedArticles.map((article) => (
            <article key={article.id} className="news-card">
              <div className="news-card-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="news-card-content">
                <span className="news-card-date">{article.date}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a href="#news" className="news-card-link">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="news-pagination">
          <button
            className="pagination-btn arrow"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`pagination-btn ${
                currentPage === page ? "active" : ""
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-btn arrow"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="news-newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest news and updates delivered to your inbox</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* CTA Section */}
      <section className="news-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of successful candidates who have launched their cruise
          ship careers with Oceara Cruises.
        </p>
        <Link to="/apply" className="news-cta-btn">
          Apply Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="news-footer">
        <div className="news-footer-content">
          <div className="news-footer-brand">
            <img
              src="https://ocearacruises.com/wp-content/uploads/2024/12/ocearacruises.webp"
              alt="Oceara Cruises"
            />
            <p>
              Your gateway to exciting cruise ship career opportunities. We
              connect talented individuals with world-class cruise lines.
            </p>
          </div>
          <div className="news-footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="news-footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#apply">Application Guide</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#training">Training Programs</a>
              </li>
              <li>
                <a href="#career">Career Advice</a>
              </li>
            </ul>
          </div>
          <div className="news-footer-column">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="mailto:info@ocearacruises.co.ke">
                  info@ocearacruises.co.ke
                </a>
              </li>
              <li>
                <a href="tel:+254700000000">+254 700 000 000</a>
              </li>
              <li>
                <a href="#nairobi">Nairobi, Kenya</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="news-footer-bottom">
          <p>&copy; 2025 Oceara Cruises. All rights reserved.</p>
          <div className="news-footer-social">
            <a href="https://facebook.com" aria-label="Facebook">
              f
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              in
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              Li
            </a>
            <a href="https://x.com" aria-label="Twitter">
              X
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
