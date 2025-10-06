import React, { useState } from 'react';
import '../styles/Header.css';

// react icon
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";




const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (<>
        <header className="header">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-content">
                        <div className="contact-info">
                            <span>Call Us: +10 (87) 263 3567</span>
                            <span className='border-right'></span>
                            <span>info@gardening.com</span>
                            <span className='border-right'></span>
                            <span>Mon - Fri: 9:00 - 19:00</span>
                        </div>
                        <div className="icon-box">
                            <span><FaFacebook /></span>
                            <span><FaInstagram /></span>
                            <span><FaLinkedinIn /></span>
                            <span><FaYoutube /></span>
                        </div>
                    </div>
                </div>
            </div>

            
        </header>
        {/* Main Navigation */}
            <nav className="main-nav">
                <div className="container">
                    <div className="nav-content">
                        <div className="logo">
                        
                            <img src='/image/logo.png.webp' alt='logo'></img>
                        </div>

                        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
                            <a href="#home">Home</a>
                            <a href="#services">Services</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#blog">Blog</a>
                            <a href="#contact">Contact</a>
                            <div className="nav-actions">
                                <button className="search-btn"><FaSearch /></button>
                                <button className="quote-btn">Get Free Quote</button>
                            </div>
                        </div>

                        <button className="menu-toggle" onClick={toggleMenu}>
                            ☰
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;