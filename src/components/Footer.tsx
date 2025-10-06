import React from 'react';
import "../styles/Footer.css"

// react icon
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Main Footer Content */}
                <div className="footer-content">

                    {/* Gardening Section */}
                    <div className="footer-section1">
                        <h2 className="footer-logo">
                            <img src="public/image/logo.png.webp" alt="" />
                        </h2>
                        <div className="section-title1">
                            <p>Get the breathing space now, and we’ll extend your term at the other end.</p>
                        </div>
                        <div className="icon-box-footer">
                            <span><FaFacebook /></span>
                            <span><FaInstagram /></span>
                            <span><FaLinkedinIn /></span>
                            <span><FaYoutube /></span>
                        </div>
                    </div>


                    <section className='footer-section-content'>
                        <div className="footer-section2">
                            <div className="services-section">
                                <h3 className="section-title2">Services</h3>
                                <ul className="footer-list">
                                    <li>Lawn removal</li>
                                    <li>Landscaping</li>
                                    <li>Planting</li>
                                    <li>Watering</li>
                                </ul>
                            </div>
                        </div>
                        {/* Navigation Section */}
                        <div className="footer-section3">
                            <h3 className="section-title3">Navigation</h3>
                            <ul className="footer-list">
                                <li className="nav-item">Home</li>
                                <li className="nav-item">Services</li>
                                <li className="nav-item">About</li>
                                <li className="nav-item">Projects</li>
                                <li className="nav-item">Contact</li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="footer-section4">
                            <h3 className="section-title4">Contact us</h3>
                            <ul className="footer-list">
                                <li>comauto88@gmail.com</li>
                                <li>76/A, Green road, NYC</li>
                                <li>(80) 783 367-3904</li>
                            </ul>
                        </div>
                    </section>

                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="footer-quote">
                        Get the breathing space now, and we'll extend your term at the other end.
                    </p>
                    <p className="footer-copyright">
                        Copyright ©2025 All rights reserved | This template is made with by Colorlib
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;