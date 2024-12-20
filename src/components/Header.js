import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="transparent-header">
            <nav className="navbar">
                <img src="/logo192.png" alt="Electrowiz'25" className="navbar-logo" />
                <Link to="/" className="navbar-brand">Electrowiz'25</Link>
                <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                    <Link to="/events" className="navbar-link">Events</Link>
                    <Link to="/register" className="navbar-link">Register</Link>
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;