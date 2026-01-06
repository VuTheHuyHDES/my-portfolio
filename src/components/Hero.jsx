import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { t } = useLanguage();

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
                        <span>{t('available')}</span>
                    </div>

                    <h1 className="hero-title">
                        <span className="greeting">{t('greeting')}</span>
                        <span className="name">Vũ Thế Huy</span>
                        <span className="role">{t('role')}</span>
                    </h1>

                    <p className="hero-description">
                        {t('heroDescription')}
                    </p>

                    <div className="hero-stats">
                        <div className="stat">
                            <span className="stat-value">50+</span>
                            <span className="stat-label">{t('pcbDesigns')}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">1+</span>
                            <span className="stat-label">{t('yearsExp')}</span>
                        </div>
                        <div className="stat">
                            <span className="stat-value">10+</span>
                            <span className="stat-label">{t('happyClients')}</span>
                        </div>
                    </div>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            <span>{t('viewProjects')}</span>
                            <i className='bx bx-right-arrow-alt'></i>
                        </a>
                        <a href="/cv.pdf" download className="btn btn-secondary">
                            <span>{t('downloadCV')}</span>
                            <i className='bx bx-download'></i>
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <span>{t('getInTouch')}</span>
                            <i className='bx bx-envelope'></i>
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href="https://www.facebook.com/huko7141" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="https://www.instagram.com/_thhuy.vu/" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                            <i className='bx bxl-instagram'></i>
                        </a>
                        <a href="https://github.com/VuTheHuyHDES" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                            <i className='bx bxl-github'></i>
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
                <span>{t('scrollDown')}</span>
                <i className='bx bx-chevron-down'></i>
            </a>
        </section>
    );
};

export default Hero;
