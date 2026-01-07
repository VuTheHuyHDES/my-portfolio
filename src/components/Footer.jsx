import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

const Footer = () => {
    const { t } = useLanguage();
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
                            {t('footerTagline')}
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>{t('quickLinks')}</h4>
                            <a href="#home">{t('home')}</a>
                            <a href="#about">{t('about')}</a>
                            <a href="#skills">{t('skills')}</a>
                            <a href="#projects">{t('projects')}</a>
                            <a href="#contact">{t('contact')}</a>
                        </div>

                        <div className="footer-column">
                            <h4>{t('services')}</h4>
                            <a href="#projects">{t('pcbDesignService')}</a>
                            <a href="#projects">{t('schematicCapture')}</a>
                            <a href="#projects">{t('hardwareDev')}</a>
                            <a href="#projects">{t('prototyping')}</a>
                        </div>

                        <div className="footer-column">
                            <h4>{t('contact')}</h4>
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
                        © {currentYear} Vũ Thế Huy. {t('allRights')}
                    </p>
                    <div className="footer-social">
                        <a href="https://www.facebook.com/huko7141" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <i className='bx bxl-facebook'></i>
                        </a>
                        <a href="https://www.instagram.com/_thhuy.vu/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <i className='bx bxl-instagram'></i>
                        </a>
                        <a href="https://github.com/VuTheHuyHDES" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <i className='bx bxl-github'></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
