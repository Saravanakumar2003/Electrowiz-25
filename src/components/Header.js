import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <header className="transparent-header">
            <nav className="navbar">
                <img src="https://i.postimg.cc/Jz2KwSSq/logo192.png" alt="Electrowiz'25" className="navbar-logo" />
                <Link to="/" className="navbar-brand">ELECTROWIZ'25</Link>
                <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className="navbar-link" onClick={closeNavbar}>Home</Link>
                    <Link to="/events" className="navbar-link" onClick={closeNavbar}>Events</Link>
                    <Link to="/register" className="navbar-link" onClick={closeNavbar}>Register</Link>
                    <Link to="/contact" className="navbar-link" onClick={closeNavbar}>Contact</Link>
                    <Link to="/credits" className="navbar-link" onClick={closeNavbar}>Credits</Link>
                </div>
                <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                </div>
            </nav>
        </header>
    );
};

export default Header;