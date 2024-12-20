import React from "react";
import CountdownTimer from "../components/countdown";
import SliderNotification from "../components/SlideNotification"
import Slider2 from "../components/Slider2";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <Slider2 />
      <CountdownTimer />
      <div className="links">
        <Link to="/events" className="button">View Events</Link>
        <Link to="/register" className="button">Register Now</Link>
      </div>
    </div>
  );
};

export default HomePage;
