import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <p className="footer-text">© 2025 Electrowiz. All rights reserved.</p>
      <div className="developer">
        <p>Developed by <Link style={{color: 'red'}} to="https://saravanakumar.enginner" target="_blank">Saravanakumar R</Link></p>
      </div>
    </footer>
  );
};

export default Footer;