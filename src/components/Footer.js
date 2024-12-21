import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms-of-use" className="footer-link">Terms of Use</Link>
          <Link to="/refund-policy" className="footer-link">Refund Policy</Link>
        </div>
        <p className="footer-text">© 2025 Electrowiz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;