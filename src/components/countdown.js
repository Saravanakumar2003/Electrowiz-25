import React from "react";
import Countdown from "react-countdown";
import "../css/CountdownTimer.css";

const CountdownTimer = () => {
  const targetDate = new Date("2025-02-01T00:09:00")

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
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
    );
  };

  return (
    <div className="countdown">
      <h2>Time Left Until Electrowhiz 2K25</h2>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;