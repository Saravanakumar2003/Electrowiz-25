import React from "react";
import CountdownTimer from "../components/countdown";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to the Symposium</h1>
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
