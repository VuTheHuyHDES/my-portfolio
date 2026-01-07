import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image-section">
                    <div className="about-image-wrapper">
                        <div className="about-image-glow"></div>
                        <img src="/workspace.png" alt="Electronics Workspace" className="about-image" />
                    </div>
                </div>

                <div className="about-content">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>{t('aboutMe')}</span>
                    </div>

                    <h2 className="about-title">
                        {t('aboutTitle')}
                    </h2>

                    <p className="about-description">
                        {t('aboutDesc1')}
                    </p>

                    <p className="about-description">
                        {t('aboutDesc2')}
                    </p>

                    <div className="about-features">
                        <div className="feature">
                            <div className="feature-icon">
                                <i className='bx bx-layer'></i>
                            </div>
                            <div className="feature-content">
                                <h4>{t('multiLayer')}</h4>
                                <p>{t('multiLayerDesc')}</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <i className='bx bx-check-shield'></i>
                            </div>
                            <div className="feature-content">
                                <h4>{t('dfm')}</h4>
                                <p>{t('dfmDesc')}</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <i className='bx bx-bolt-circle'></i>
                            </div>
                            <div className="feature-content">
                                <h4>{t('signalIntegrity')}</h4>
                                <p>{t('signalIntegrityDesc')}</p>
                            </div>
                        </div>

                        <div className="feature">
                            <div className="feature-icon">
                                <i className='bx bx-cog'></i>
                            </div>
                            <div className="feature-content">
                                <h4>{t('fullDev')}</h4>
                                <p>{t('fullDevDesc')}</p>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" className="btn btn-primary about-btn">
                        <span>{t('workTogether')}</span>
                        <i className='bx bx-right-arrow-alt'></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
