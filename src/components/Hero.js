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
        <source src="https://media-hosting.imagekit.io//ed8aa8ace2244980/vec.mp4?Expires=1831446257&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZyOPbwtyWHNym2x4YILt0MwACMTn4MZZWYb4YNLFacGuOuCDvjLfm0~MZB4emKKK8nL3Gi~Xa1GTy2OKowHlor1IAlACVxZGOP-FZjLbWgPzby2kz9x2cpABxJWKkKo-3AZizI8-bgBzWAYhTemDKES9dzptgrBOTKSBNLHHZ9zIN8vaULlY431GTRSNnWz8fWoHFxp4wKHwcdoGYw0Q8-gG8UD3BnUcLim2kI5DfJ1qwG6jz1uQ5XZDrNM93x~jPkBMgbYRFR90aGTc06fMeqKG-Dkqm05RKsGt0fYHSHP8hFkP5m1XEjPusZgDt~~~Ot7h0DhJ1oT1f1qChs7mYw__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br /> <br />
        <div className="homeText">
          Registration Ends On: 
          <br/>
          28th January 2025
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