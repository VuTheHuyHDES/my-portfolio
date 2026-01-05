import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <i className='bx bx-chip'></i>
                            <span>Vũ Thế <span className="highlight">Huy</span></span>
                        </a>
                        <p className="footer-tagline">
                            Transforming electronic concepts into production-ready PCB solutions.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#projects">Projects</a>
                            <a href="#contact">Contact</a>
                        </div>

                        <div className="footer-column">
                            <h4>Services</h4>
                            <a href="#projects">PCB Design</a>
                            <a href="#projects">Schematic Capture</a>
                            <a href="#projects">Hardware Development</a>
                            <a href="#projects">Prototyping</a>
                        </div>

                        <div className="footer-column">
                            <h4>Contact</h4>
                            <a href="mailto:huyyu987@gmail.com">
                                <i className='bx bx-envelope'></i>
                                huyyu987@gmail.com
                            </a>
                            <a href="tel:0383049145">
                                <i className='bx bx-phone'></i>
                                0383049145
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Vũ Thế Huy. All rights reserved.
                    </p>
                    <div className="footer-social">
                        {/* PLACEHOLDER: Replace # with your social links */}
                        <a href="#" title="Facebook"><i className='bx bxl-facebook'></i></a>
                        <a href="#" title="Instagram"><i className='bx bxl-instagram'></i></a>
                        <a href="#" title="GitHub"><i className='bx bxl-github'></i></a>
                        <a href="#" title="LinkedIn"><i className='bx bxl-linkedin'></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
