import React from "react";
import CountdownTimer from "../components/Hero";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <CountdownTimer />

      {/* About College Section */}
      <section className="about-college">
        <div className="content">
          <h2>About Our College</h2>
          <p>
            Our college is a premier institution known for its academic excellence, fostering innovation and a strong sense of community.
            We focus on providing a well-rounded education that combines theory with practical skills.
          </p>
        </div>
        <div className="image">
          <img src="/img/college.png" alt="College" />
        </div>
      </section>

      {/* About Electrowiz Section */}
      <section className="about-electrowiz">
        <div className="content">
          <h2>About Electrowiz</h2>
          <p>
            Electrowiz is an annual event that brings together students, professionals, and experts in the field of electrical and electronics.
            It is a platform for innovation, learning, and showcasing cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Events Conducted Section */}
      <section className="events-conducted">
        <h2>Events Conducted</h2>
        <ul>
          <li>1. Idea ignition</li>
          <li>2. Imaginarium</li>
          <li>3. Quiztronics </li>
          <li>4. Byte and breakthrough </li>
          <li>5. Infinity squad</li>
          <li>6. Melody madness</li>
          <li>7. Pixel perfect</li>
          <li>8. Linked up </li>
          <li>9. Mystery matters</li>
          <li>10. Workshop</li>
        </ul>
      </section>

      {/* Event Coordinators and Faculty Details Section */}
      <section className="event-coordinators">
        <h2>Event Coordinators and Faculty</h2>
        <div className="coordinators">
          <div className="coordinator">
            <h3>Coordinator 1: Dr. John Doe</h3>
            <p>Assistant Professor, Department of Electrical Engineering</p>
          </div>
          <div className="coordinator">
            <h3>Coordinator 2: Dr. Jane Smith</h3>
            <p>Professor, Department of Electronics</p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors">
        <h2>Our Sponsors</h2>
        <div class="logo-slider">
          <div class="logo-slide-track">
            <div className="slide">
              <img src="/img/Sponser1.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser1.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser1.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser1.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser1.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 2" className="sponsor-logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
