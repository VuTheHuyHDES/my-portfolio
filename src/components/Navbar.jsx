import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('home'), href: '#home' },
        { name: t('about'), href: '#about' },
        { name: t('skills'), href: '#skills' },
        { name: t('projects'), href: '#projects' },
        { name: t('contact'), href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="logo">
                    <img src="/logo.png" alt="HΩY" className="logo-img" />
                </a>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="nav-controls">
                    <button className="control-btn" onClick={toggleLanguage} title="Switch Language">
                        <span className="lang-text">{language === 'vi' ? 'EN' : 'VI'}</span>
                    </button>

                    <button className="control-btn" onClick={toggleTheme} title="Toggle Theme">
                        <i className={`bx ${isDark ? 'bx-sun' : 'bx-moon'}`}></i>
                    </button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
