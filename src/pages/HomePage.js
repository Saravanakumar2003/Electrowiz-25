import React, { useEffect } from "react";
import CountdownTimer from "../components/Hero";
import SVGAnimation from "../components/SVGAnimation";
import "../css/HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <CountdownTimer />

      {/* SVG Animation Section */}
      <section className="svg-animation">
        <SVGAnimation />
      </section>

      <section className="Instagram">
        <h2>Connect with US</h2>
        <iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/25502717' frameborder='0' width='100%' height='500px'></iframe>
      </section>

      <section className="sponsors">
        <h2>Our Sponsors</h2>
        <div class="logo-slider">
          <div class="logo-slide-track">
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Vec.png" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Vec.png" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Vec.png" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Vec.png" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Vec.png" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Vec.png" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Vec.png" alt="Sponsor 2" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Sponser2.jpeg" alt="Sponsor 1" className="sponsor-logo" />
            </div>
            <div className="slide">
              <img src="/img/Vec.png" alt="Sponsor 2" className="sponsor-logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>For more information, please contact us.</p>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section>
    </div>
  );
};

export default HomePage;