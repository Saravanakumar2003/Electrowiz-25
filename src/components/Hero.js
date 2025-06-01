import React from "react";
import Countdown from "react-countdown";
import "../css/Hero.css";
import { Link } from "react-router-dom";

const CountdownTimer = () => {
  // Target date for countdown
  const targetDate = new Date("2025-02-01T09:00:00");

  // Renderer for the countdown timer
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="hero">
        <video autoPlay muted loop className="background-video">
        <source src="https://ik.imagekit.io/xd1ryjh3j/vec.mp4?updatedAt=1748781454190" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br /> <br />
        <div className="homeText">
          This event is over!! 
          <br/>
          Site is preserved for future reference.
        </div>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-number">{days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-number">{seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>
        <div className="links">
          <Link to="/events" className="button">View Events</Link>
          <Link to="/register" className="button">Register Now</Link>
        </div>
      </div>
    );
  };

  return (
    <div className="countdown">
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;