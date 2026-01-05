import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image-section">
                    <div className="about-image-wrapper">
                        <div className="about-image-glow"></div>
                        {/* PLACEHOLDER: Replace this with your actual about/workspace image */}
                        <div className="about-image-placeholder">
                            <i className='bx bx-image'></i>
                            <span>Your Workspace Image</span>
                        </div>
                    </div>
                    <div className="experience-card">
                        <div className="experience-icon">
                            <i className='bx bx-medal'></i>
                        </div>
                        <div className="experience-content">
                            <span className="experience-years">5+</span>
                            <span className="experience-label">Years of Experience</span>
                        </div>
                    </div>
                </div>

                <div className="about-content">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>About Me</span>
                    </div>

                    <h2 className="about-title">
                        Passionate <span className="highlight">Hardware Engineer</span> Crafting
                        Tomorrow's Electronics
                    </h2>

                    <p className="about-description">
                        I'm a dedicated PCB designer and hardware engineer with expertise in creating
                        innovative electronic solutions. My journey in electronics started with a
                        fascination for how things work, leading me to master the art of translating
                        complex circuit designs into manufacturable PCBs.
                    </p>

                    <p className="about-description">
                        Specializing in <strong>Altium Designer</strong>, I create multi-layer PCBs
                        for various applications including IoT devices, power electronics, RF systems,
                        and embedded controllers. I focus on signal integrity, EMC compliance, and
                        design for manufacturability.
                    </p>

                    <div className="about-features">
                        <div className="feature">
                            <div className="feature-icon">
                                <i className='bx bx-layer'></i>
                            </div>
                            <div className="feature-content">
                                <h4>Multi-Layer Design</h4>
                                <p>Expert in complex multilayer PCB stackups and high-speed routing</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <i className='bx bx-check-shield'></i>
                            </div>
                            <div className="feature-content">
                                <h4>DFM Optimization</h4>
                                <p>Designs optimized for manufacturing with minimal revisions</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <i className='bx bx-bolt-circle'></i>
                            </div>
                            <div className="feature-content">
                                <h4>Signal Integrity</h4>
                                <p>High-speed design with impedance control and EMC compliance</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <i className='bx bx-cog'></i>
                            </div>
                            <div className="feature-content">
                                <h4>Full Development</h4>
                                <p>From schematic capture to prototype testing and production</p>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" className="btn btn-primary about-btn">
                        <span>Let's Work Together</span>
                        <i className='bx bx-right-arrow-alt'></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
