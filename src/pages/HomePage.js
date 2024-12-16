import React from "react";
import CountdownTimer from "../components/countdown";
import SliderNotification from "../components/SlideNotification"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <SliderNotification />
      <header>
        <h1>Welcome to the Electrowhiz 2K25</h1>
      </header>
      <CountdownTimer />
      <div className="links">
        <Link to="/events" className="button">View Events</Link>
        <Link to="/register" className="button">Register Now</Link>
      </div>
    </div>
  );
};

export default HomePage;
