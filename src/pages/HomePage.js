import React from "react";
import CountdownTimer from "../components/Hero";
import SVGAnimation  from "../components/SVGAnimation";
import "../css/HomePage.css";

const HomePage = () => {
  

  return (
    <div className="homepage">
      <CountdownTimer />

      {/* SVG Animation Section */}
      <section className="svg-animation">
        <SVGAnimation />
      </section>
      {/* 
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
      </section> */}
    </div>
  );
};

export default HomePage;
