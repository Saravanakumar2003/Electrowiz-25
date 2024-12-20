import React from "react";
import CountdownTimer from "../components/Hero";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <CountdownTimer />
    </div>
  );
};

export default HomePage;
