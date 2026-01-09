import { useEffect } from "react";
import "../css/about.css";
import aboutBg from "../assets/about.jpg";
import managerPortrait from "../assets/manager-portrait.jpg";
import trainingClassroom from "../assets/training-classroom.jpg";
import crewService from "../assets/crew-service.jpg";
import { Link } from "react-router-dom";
import OcearaLogo from "../assets/oceara-logo.png";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-page">
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
        className="about-hero"
        style={{ backgroundImage: `url(${aboutBg})` }}
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
              Founded in October 1997, Oceara Cruises began its journey in
              Norway, inspired by the country’s deep maritime heritage and
              strong connection to the sea. What started as a bold vision
              quickly grew into a trusted name in cruise operations, expanding
              beyond traditional travel to offer specialized programs, including
              student opportunities and international recruitment for leading
              global cruise lines. This evolution reflects our commitment to
              connecting people, cultures, and oceans worldwide.
            </p>
            <p className="about-content-text">
              Today, as Oceara Cruises, headquartered in Bergen, Norway, we're
              proud to be{" "}
              <strong>the largest cruise line in the Balkans</strong>, with a
              presence in multiple countries. Annually, we employ over 1,200
              individuals and are the preferred agency for top hospitality
              brands in Europe and the Middle East.
            </p>
            <ul className="about-stats-list">
              <li className="about-stat-item">
                <span className="stat-text">
                  For more than 25 years, Oceara Cruises has built strong and
                  lasting relationships with our clients, grounded in trust,
                  reliability, and exceptional service. Today, over 85% of those
                  we work with have remained loyal to us for more than two
                  decades, choosing to sail with us time and time again. This
                  long-standing confidence reflects our unwavering commitment to
                  excellence, personalized experiences, and consistent quality
                  across every journey we offer. Our clients’ continued trust
                  motivates us to innovate, improve, and uphold the high
                  standards that have defined Oceara Cruises throughout our
                  history.
                </span>
              </li>
              <li className="about-stat-item">
                <span className="stat-text">
                  Nearly 70% of our team members have been part of Oceara
                  Cruises for more than 15 years, providing exceptional
                  continuity, deep industry knowledge, and proven expertise.
                  Their long-term dedication ensures consistent service quality,
                  strong operational experience, and a trusted, professional
                  approach across all areas of our operations.
                </span>
              </li>
            </ul>
            <p className="about-content-text" style={{ marginTop: "1.5rem" }}>
              With a deep understanding of the hospitality industry’s evolving
              landscape, we deliver customized solutions designed to address the
              specific goals and challenges of every client. Our flexible
              approach ensures efficient, practical, and results-driven services
              that align seamlessly with each client’s unique operational and
              business needs.
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
                Sammy Tyler - CEO of Oceara Cruises
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
                The Oceara Cruises Hospitality Academy is designed to nurture
                and develop the next generation of hospitality professionals
                from the Balkans, reflecting our strong commitment to service
                excellence. Through focused training, mentorship, and real-world
                experience, the academy equips aspiring talent with the skills,
                knowledge, and professionalism required to succeed in the global
                hospitality industry. By investing in education and career
                growth, we aim to empower individuals, elevate regional talent,
                and uphold the highest standards of guest experience across our
                operations.
              </p>
            </div>
            <div className="service-card fade-up fade-up-delay-2">
              <h3 className="service-title">Oceara Cruises STCW Training</h3>
              <p className="service-description">
                The Oceara Cruises STCW Training Program is an approved and
                comprehensive certification initiative created to prepare
                individuals for their specific roles onboard cruise vessels. The
                program is carefully structured to meet international maritime
                standards and combines in-depth classroom instruction with
                hands-on practical training. This balanced approach ensures
                participants gain both theoretical knowledge and real-world
                skills essential for working at sea. Before joining a vessel,
                all trainees are fully certified in safety procedures, emergency
                response, and professional competencies required for their
                positions. Through this program, Oceara Cruises ensures every
                crew member is well prepared, confident, and equipped to uphold
                the highest standards of safety and service.
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
            At our cruise ship employment agency, training represents far more
            than simple skill development; it is a foundation for long-term
            growth and professional excellence. Our approach is deeply connected
            to our vision, values, and mission, ensuring every individual
            develops not only technical expertise but also the mindset required
            to thrive in the cruise industry. Each training program is
            meticulously designed to cover essential knowledge, practical
            competencies, professional behaviors, and strong cultural alignment.
            By focusing on both performance and personal development, we
            cultivate confident, adaptable professionals who are prepared to
            meet industry demands while consistently delivering exceptional
            service and upholding the highest standards onboard.
          </p>
          <p className="two-column-text fade-up fade-up-delay-2">
            We believe that investing in people development delivers meaningful
            and measurable business results while creating a strong foundation
            for long-term success. By empowering individuals and teams through
            continuous learning, mentorship, and growth opportunities, we
            cultivate confidence, accountability, and high performance. This
            investment fosters a positive and motivating work environment where
            employees feel valued and inspired to contribute their best efforts.
            Our focus on development also strengthens collaboration, innovation,
            and adaptability across the organization. Ultimately, our commitment
            to people development reflects our dedication to continuous
            improvement, ensuring both our workforce and our business evolve
            together while consistently meeting the highest standards of
            excellence.
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
            Aligning employees with our organization’s vision, values, and
            mission is essential to our success. Our employee branding
            initiatives function as a powerful internal communication strategy,
            inspiring team members to fully embrace and represent our corporate
            ethos. By reinforcing shared principles and purpose, we motivate
            employees to consistently reflect our values in their interactions
            with customers, stakeholders, and colleagues, strengthening trust,
            engagement, and a unified organizational culture.
          </p>
          <p className="two-column-text fade-up fade-up-delay-2">
            At our agency, we provide training for recruited candidates,
            ensuring that each individual embodies our values and contributes to
            our shared vision of excellence in the cruise industry.
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
        <Link to="/apply" className="about-cta-btn">
          Apply Now
        </Link>
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
