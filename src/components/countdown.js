import React from "react";
import Countdown from "react-countdown";
import "../css/CountdownTimer.css";

const CountdownTimer = () => {
  // Target date for countdown
  const targetDate = new Date("2025-02-11T00:00:00");

  // Renderer for the countdown timer
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div>
        <div className="homeText">
          Welcome to Electrowhiz 2K25!
        </div>

        <div className="flip-clock">
          <div className="flip-clock__piece">
            <span className="flip-clock__card flip-card">
              <b className="flip-card__top">{String(days).padStart(2, "0")}</b>
              <b className="flip-card__bottom">{String(days).padStart(2, "0")}</b>
            </span>
            <span className="flip-clock__slot">Days</span>
          </div>
          <div className="flip-clock__piece">
            <span className="flip-clock__card flip-card">
              <b className="flip-card__top">{String(hours).padStart(2, "0")}</b>
              <b className="flip-card__bottom">{String(hours).padStart(2, "0")}</b>
            </span>
            <span className="flip-clock__slot">Hours</span>
          </div>
          <div className="flip-clock__piece">
            <span className="flip-clock__card flip-card">
              <b className="flip-card__top">{String(minutes).padStart(2, "0")}</b>
              <b className="flip-card__bottom">{String(minutes).padStart(2, "0")}</b>
            </span>
            <span className="flip-clock__slot">Minutes</span>
          </div>
          <div className="flip-clock__piece">
            <span className="flip-clock__card flip-card">
              <b className="flip-card__top">{String(seconds).padStart(2, "0")}</b>
              <b className="flip-card__bottom">{String(seconds).padStart(2, "0")}</b>
            </span>
            <span className="flip-clock__slot">Seconds</span>
          </div>
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
