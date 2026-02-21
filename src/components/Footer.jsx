import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content glass-panel">

                    <div className="footer-top">
                        <div className="footer-brand">
                            <Tilt
                                tiltMaxAngleX={8}
                                tiltMaxAngleY={8}
                                perspective={1000}
                                scale={1.02}
                                transitionSpeed={1000}
                                gyroscope={true}
                            >
                                <div className="footer-portrait-card glass-panel">
                                    <div className="portrait-image-wrapper">
                                        <img src="/footer image.webp" alt="Professional Portrait" className="portrait-image" />
                                    </div>
                                    <div className="portrait-info">
                                        <h3 className="portrait-name">Let's Create Together</h3>
                                        <p className="portrait-cta">Available for new opportunities</p>
                                        <a href="#contact" className="contact-btn-mini">Get In Touch</a>
                                    </div>
                                </div>
                            </Tilt>
                            <a href="#home" className="footer-logo-container">
                                <div className="text-logo cinematic-logo">
                                    SABBIR <span className="logo-divider">|</span> HOSEN
                                </div>
                            </a>
                            <p className="footer-tagline">Crafting digital experiences with cinematic precision and modern aesthetics.</p>
                        </div>

                        <div className="footer-right-column">
                            <div className="footer-links-container">
                                <div className="footer-column">
                                    <h4 className="footer-heading">Navigation</h4>
                                    <ul className="footer-links">
                                        <li><a href="#home" className="footer-link hover-slide">Home</a></li>
                                        <li><a href="#expertise" className="footer-link hover-slide">Expertise</a></li>
                                        <li><a href="#showreel" className="footer-link hover-slide">Showreel</a></li>
                                        <li><a href="#process" className="footer-link hover-slide">Process</a></li>
                                    </ul>
                                </div>

                                <div className="footer-column">
                                    <h4 className="footer-heading">Services</h4>
                                    <ul className="footer-links">
                                        <li><a href="#services" className="footer-link hover-slide">AI Automation</a></li>
                                        <li><a href="#services" className="footer-link hover-slide">Web Development</a></li>
                                        <li><a href="#services" className="footer-link hover-slide">Video Production</a></li>
                                        <li><a href="#services" className="footer-link hover-slide">Brand Strategy</a></li>
                                    </ul>
                                </div>

                                <div className="footer-column">
                                    <h4 className="footer-heading">Socials</h4>
                                    <ul className="footer-links">
                                        <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-link pop-icon">Twitter / X</a></li>
                                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link pop-icon">LinkedIn</a></li>
                                        <li><a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link pop-icon">GitHub</a></li>
                                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link pop-icon">Instagram</a></li>
                                    </ul>
                                </div>
                            </div>

                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                perspective={1000}
                                scale={1.01}
                                transitionSpeed={1000}
                                gyroscope={true}
                            >
                                <div className="footer-middle-content">
                                    <div className="footer-stat-card">
                                        <span className="stat-number">50+</span>
                                        <span className="stat-label">Projects Completed</span>
                                    </div>
                                    <div className="footer-stat-card">
                                        <span className="stat-number">20+</span>
                                        <span className="stat-label">Global Clients</span>
                                    </div>
                                    <div className="footer-stat-card">
                                        <span className="stat-number">100%</span>
                                        <span className="stat-label">Client Satisfaction</span>
                                    </div>
                                </div>
                            </Tilt>

                            <div className="footer-extra-content">
                                <div className="stat-pulse-box">
                                    <div className="pulse-indicator">
                                        <span className="pulse-dot"></span>
                                        <span className="pulse-text">Available for Worldwide Collaboration</span>
                                    </div>
                                    <div className="location-info">
                                        <span className="loc-label">Base Location:</span>
                                        <span className="loc-value">Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                                <div className="vision-statement">
                                    <span className="vision-quote">"Transforming abstract concepts into high-fidelity digital experiences."</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="copyright">&copy; {currentYear} Modern Portfolio. All rights reserved.</p>
                        <div className="footer-legal">
                            <a href="#privacy" className="footer-link-small">Privacy Policy</a>
                            <a href="#terms" className="footer-link-small">Terms of Service</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
