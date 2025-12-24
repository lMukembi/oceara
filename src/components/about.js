import "../css/about.css";
import heroCruise from "../assets/hero-cruise.jpg";
import managerPortrait from "../assets/manager-portrait.jpg";
import trainingClassroom from "../assets/training-classroom.jpg";
import crewService from "../assets/crew-service.jpg";
import { Link } from "react-router-dom";
import { CruiseLogo } from "./logo";

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

export const About = () => {
  return (
    <div className="about-page">
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
        className="about-hero"
        style={{ backgroundImage: `url(${heroCruise})` }}
      >
        <div className="about-hero-content">
          <h1 className="about-hero-title">About us</h1>
          <p className="about-hero-subtitle">Live Your Dream!</p>
          <div className="about-hero-buttons">
            <a href="#about" className="about-hero-btn primary">
              Explore More
            </a>
            <a href="#about" className="about-hero-btn secondary">
              FAQs
            </a>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <p className="welcome-subtitle fade-up">Welcome to Oceara Cruises</p>
          <h2 className="welcome-title fade-up fade-up-delay-1">About us</h2>
          <p className="welcome-description fade-up fade-up-delay-2">
            Welcome to Oceara Cruises, where we hire quality talent, build
            lasting relationships, and strive for excellence in the global
            hospitality industry.
          </p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about-content-section" id="get">
        <div className="container">
          <div className="about-content-card fade-up">
            <p className="about-content-text">
              Founded in October 1997 as Oceara Cruises and Co. in Vienna,
              Austria, we swiftly evolved into a premier tour operator in the
              Balkans. Recognizing the demand, we expanded our services to
              include student programs and recruitment for global cruise lines.
            </p>
            <p className="about-content-text">
              Today, as Oceara Cruises, headquartered in Skopje, Macedonia,
              we're proud to be{" "}
              <strong>the largest recruitment agency in the Balkans</strong>,
              with a presence in multiple countries. Annually, we employ over
              1,200 individuals for leading cruise companies and are the
              preferred agency for top hospitality brands in the Middle East.
            </p>
            <ul className="about-stats-list">
              <li className="about-stat-item">
                <span className="stat-text">
                  Over 85% of our clients have trusted us for more than 25
                  years, a testament to our commitment to excellence.
                </span>
              </li>
              <li className="about-stat-item">
                <span className="stat-text">
                  Around 70% of our staff have been with us for over 15 years,
                  ensuring continuity and expertise in the services we offer.
                </span>
              </li>
            </ul>
            <p className="about-content-text" style={{ marginTop: "1.5rem" }}>
              With a keen understanding of the hospitality industry's dynamics,
              we provide tailored solutions that meet the unique needs of each
              client.
            </p>
          </div>
        </div>
      </section>

      {/* Manager Section */}
      <section className="manager-section">
        <div className="container">
          <div className="manager-grid">
            <div className="manager-image-wrapper fade-up">
              <img
                src={managerPortrait}
                alt="Zoran Kochoski"
                className="manager-image"
              />
            </div>
            <div className="manager-content fade-up fade-up-delay-1">
              <p className="manager-label">Message</p>
              <h3 className="manager-name">
                Zoran Kochoski - Manager of Oceara Cruises
              </h3>
              <p className="manager-quote">
                <strong>
                  Oceara Cruises is present with its own offices in 18 countries
                  on 4 continents
                </strong>{" "}
                – We create a global recruitment chain and crewing support 24/7
              </p>
              <p className="manager-quote">
                Our strive is to help young people improve their lives by
                traveling and working abroad, living far from home in the open
                seas of the world.
              </p>
              <p className="manager-quote">
                Our multicultural team is trained to offer the highest quality
                in maritime services, ship and cargo recruitment, and offshore
                platforms.
              </p>
              <p className="manager-quote">
                We work 7 days a week, 24 hours a day, and 365 days a year. In
                every moment of the day or the night, on a working or festive
                day, the Oceara Cruises team is there for your needs.
              </p>
              <p className="manager-quote">
                <strong>
                  Wherever you are, the Oceara Cruises team is with you.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="services-title fade-up">
            We Serve The World of Cruise Industry – Oceara Cruises Professional
            Recruitment Services
          </h2>
          <div className="services-grid">
            <div className="service-card fade-up fade-up-delay-1">
              <h3 className="service-title">
                Oceara Cruises Hospitality Academy
              </h3>
              <p className="service-description">
                Our "Oceara Cruises Hospitality Academy" aims to nurture the
                next generation of hospitality professionals from the Balkans,
                furthering our commitment to excellence in service.
              </p>
            </div>
            <div className="service-card fade-up fade-up-delay-2">
              <h3 className="service-title">Oceara Cruises STCW Training</h3>
              <p className="service-description">
                Our "Oceara Cruises STCW Training" is an approved training
                providing instruction and practical training in relevant safety
                skills necessary to work onboard a vessel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column - Developing People */}
      <section className="two-column-section">
        <img
          src={trainingClassroom}
          alt="Training"
          className="two-column-image"
        />
        <div className="two-column-content">
          <h2 className="two-column-title fade-up">
            Developing People, Nurturing Excellence
          </h2>
          <p className="two-column-text fade-up fade-up-delay-1">
            At our cruise ship employment agency, training embodies more than
            just skill development—it's about fostering a culture of growth
            deeply intertwined with our vision, values, and mission. Our
            training programs are meticulously crafted to encompass technical
            knowledge, competencies, behaviors, and cultural alignment.
          </p>
          <p className="two-column-text fade-up fade-up-delay-2">
            We believe that investing in people development yields tangible
            business results, empowering individuals and teams, fostering
            positivity, and reflecting our commitment to continuous improvement.
          </p>
        </div>
      </section>

      {/* Two Column - Navigating Careers (Reversed) */}
      <section className="two-column-section" style={{ direction: "rtl" }}>
        <img
          src={crewService}
          alt="Crew Service"
          className="two-column-image"
          style={{ direction: "ltr" }}
        />
        <div className="two-column-content" style={{ direction: "ltr" }}>
          <h2 className="two-column-title fade-up">
            Navigating Careers, Guiding Futures!
          </h2>
          <p className="two-column-text fade-up fade-up-delay-1">
            Aligning employees with our organization's vision, values, and
            mission is paramount. Our employee branding efforts serve as an
            internal communication strategy, motivating our team to embody our
            corporate ethos in interactions with customers, stakeholders, and
            peers.
          </p>
          <p className="two-column-text fade-up fade-up-delay-2">
            At our agency, we provide{" "}
            <span className="two-column-highlight">FREE</span> training for
            recruited candidates, ensuring that each individual embodies our
            values and contributes to our shared vision of excellence in the
            cruise industry.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="partners-header">
          <h2 className="partners-title fade-up">Our Partners</h2>
          <p className="partners-description fade-up fade-up-delay-1">
            We greatly appreciate the collaborative efforts and valuable
            contributions of our partners.
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
      <section className="about-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of successful candidates who have launched their cruise
          ship careers with Oceara Cruises
        </p>
        <button className="about-cta-btn ">Apply Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2024 Copyright Oceara Cruises</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
