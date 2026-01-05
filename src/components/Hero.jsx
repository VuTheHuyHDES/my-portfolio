import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="circuit-pattern"></div>
                <div className="floating-chip chip-1"><i className='bx bx-chip'></i></div>
                <div className="floating-chip chip-2"><i className='bx bxs-microchip'></i></div>
                <div className="floating-chip chip-3"><i className='bx bx-memory-card'></i></div>
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <i className='bx bx-check-circle'></i>
                        <span>Available for Projects</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name">
                            Vũ Thế Huy
                        </span>
                        <span className="role">
                            <span className="accent">PCB</span> & Hardware Designer
                        </span>
                    </h1>

                    <p className="hero-description">
                        Specialized in designing high-performance printed circuit boards and
                        embedded systems using <strong>Altium Designer</strong>. Transforming
                        complex electronic concepts into production-ready hardware solutions.
                    </p>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-value">50+</span>
                            <span className="stat-label">PCB Designs</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">30+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <i className='bx bx-right-arrow-alt'></i>
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <span>Get in Touch</span>
                            <i className='bx bx-envelope'></i>
                        </a>
                    </div>

                    <div className="hero-social">
                        {/* PLACEHOLDER: Replace # with your actual social media links */}
                        <a href="#" className="social-link" title="Facebook">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="#" className="social-link" title="Instagram">
                            <i className='bx bxl-instagram'></i>
                        </a>
                        <a href="#" className="social-link" title="GitHub">
                            <i className='bx bxl-github'></i>
                        </a>
                        <a href="#" className="social-link" title="LinkedIn">
                            <i className='bx bxl-linkedin'></i>
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-wrapper">
                        <div className="image-glow"></div>
                        <img src="/profile.png" alt="Vũ Thế Huy" className="profile-image" />
                        <div className="image-border"></div>
                    </div>
                    <div className="tech-badge badge-1">
                        <i className='bx bxl-react'></i>
                    </div>
                    <div className="tech-badge badge-2">
                        <i className='bx bx-chip'></i>
                    </div>
                    <div className="tech-badge badge-3">
                        <i className='bx bx-code-alt'></i>
                    </div>
                </div>
            </div>

            <a href="#about" className="scroll-indicator">
                <span>Scroll Down</span>
                <i className='bx bx-chevron-down'></i>
            </a>
        </section>
    );
};

export default Hero;
