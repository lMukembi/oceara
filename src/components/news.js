import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import newsBg from "../assets/news.jpg";
import "../css/news.css";
import { Link } from "react-router-dom";
import OcearaLogo from "../assets/oceara-logo.png";
import emailjs from "@emailjs/browser";

const newsArticles = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1667412319085-144022cc8df6?q=80 ",
    url: "/news/luxury-experiences-in-the-atlantic",
    date: "12.11.2025",
    title: "Luxury Experiences in the Atlantic!",
    excerpt:
      "Luxury Experiences in the Atlantic define the essence of what Oceara Cruises offers to travelers seeking refinement, comfort, and unforgettable ocean journeys.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400",
    url: "/news/sustainability-and-responsible-cruising-with-oceara-cruises",
    date: "07.11.2025",
    title: "Sustainability and Responsible Cruising with Oceara Cruises!",
    excerpt:
      "Sustainability has become a defining priority in modern maritime travel, and Oceara Cruises is committed to shaping a future where luxury cruising and environmental responsibility move forward together.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=400",
    url: "/news/professional-crew-training-and-career-development-at-oceara-cruises",
    date: "07.11.2025",
    title:
      "Professional Crew Training and Career Development at Oceara Cruises!",
    excerpt:
      "A successful cruise experience begins with the people who operate the ship, and Oceara Cruises places exceptional importance on professional crew training and long-term career development.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1762228015770-abd70f88c4c0?q=80",
    url: "/news/global-routes-and-destination-experiences-with-oceara-cruises",
    date: "07.07.2025",
    title: "Global Routes and Destination Experiences with Oceara Cruises!",
    excerpt:
      "Oceara Cruises is dedicated to connecting travelers with the world’s most captivating destinations through carefully designed global routes.",
  },
  {
    id: 5,
    title: "Innovation and Technology at Sea with Oceara Cruises",
    excerpt:
      "Innovation and technology play a central role in shaping the modern cruising experience, and Oceara Cruises continues to embrace advanced solutions to enhance safety, efficiency, and guest comfort.",
    date: "03.07.2025",
    url: "/news/innovation-and-technology-at-sea-with-oceara-cruises",
    image:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "Personalized Service and Guest Satisfaction at Oceara Cruises.",
    excerpt:
      "Personalized service lies at the heart of every voyage with Oceara Cruises.",
    date: "02.07.2025",
    url: "/news/personalized-service-and-guest-satisfaction-at-oceara-cruises",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    title: "Maritime Safety and Operational Excellence at Oceara Cruises.",
    excerpt:
      "Maritime safety is the foundation upon which every Oceara Cruises voyage is built.",
    date: "25.06.2025",
    url: "/news/maritime-safety-and-operational-excellence-at-oceara-cruises",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    title: "The Heritage and Vision of Oceara Cruises.",
    excerpt:
      "Oceara Cruises is built on a strong maritime heritage and a clear vision for the future of ocean travel.",
    date: "02.06.2025",
    url: "/news/the-heritage-and-vision-of-oceara-cruises",
    image:
      "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&h=300&fit=crop",
  },
];

export const News = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 8;

  const [formData, setFormData] = useState({
    email: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    emailjs.init("T65KM733oiQKMSHWO");
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    const templateParams = {
      email: formData.email,
    };

    emailjs
      .send("service_j2mtlq9", "template_lws4wtf", templateParams)
      .then(() => {
        setStatusMessage("Subscribed successfully!");
        setFormData({
          email: "",
        });
      })
      .catch((error) => {
        console.error("ERROR:", error);
        setStatusMessage(error?.text || "Failed. Please try again.");
      });
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
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
        className="news-hero"
        style={{ backgroundImage: `url(${newsBg})` }}
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
                <a href={article.url} className="news-card-link">
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
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            onChange={handleChange}
            placeholder="Enter your email address"
          />
          <button type="submit">Subscribe</button>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
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
      <footer className="content-footer">
        <p className="content-footer-text">© 2026 Copyright Oceara Cruises</p>
      </footer>
    </div>
  );
};
