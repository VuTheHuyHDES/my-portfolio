import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

const Contact = () => {
    const { t, language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Using EmailJS - you need to set up your own account at emailjs.com
        // Replace these with your actual EmailJS credentials
        const serviceId = 'service_portfolio';
        const templateId = 'template_contact';
        const publicKey = 'YOUR_PUBLIC_KEY'; // Get this from EmailJS

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: 'huyyu987@gmail.com'
        };

        try {
            // For now, using mailto as fallback since EmailJS needs setup
            const mailtoLink = `mailto:huyyu987@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
                `Từ: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
            )}`;
            window.open(mailtoLink, '_blank');

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="section-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>{t('contact')}</span>
                    </div>
                    <h2 className="section-title">
                        {t('letsConnect').split(' ')[0]} <span className="highlight">{t('letsConnect').split(' ')[1] || ''}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t('contactSubtitle')}
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card-contact">
                            <div className="info-icon-contact">
                                <i className='bx bx-envelope'></i>
                            </div>
                            <div className="info-details">
                                <h4>{t('email')}</h4>
                                <a href="mailto:huyyu987@gmail.com">huyyu987@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-card-contact">
                            <div className="info-icon-contact">
                                <i className='bx bx-phone'></i>
                            </div>
                            <div className="info-details">
                                <h4>{t('phone')}</h4>
                                <a href="tel:0383049145">0383049145</a>
                            </div>
                        </div>

                        <div className="info-card-contact">
                            <div className="info-icon-contact">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="info-details">
                                <h4>{t('location')}</h4>
                                <span>Số 3 Cầu Giấy, Hà Nội</span>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0968454960814!2d105.79513257508028!3d21.028511980620567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd376479b%3A0xbc2e0fc4f8c2d68!2zMyBDw6J1IEdp4bqleSwgUXVhbiBIb2EsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1704494000000!5m2!1svi!2s"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '15px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>
                        </div>

                        <div className="social-links-contact">
                            <h4>{t('followMe')}</h4>
                            <div className="social-icons">
                                <a href="#" className="social-icon" title="Facebook">
                                    <i className='bx bxl-facebook'></i>
                                </a>
                                <a href="#" className="social-icon" title="Instagram">
                                    <i className='bx bxl-instagram'></i>
                                </a>
                                <a href="#" className="social-icon" title="GitHub">
                                    <i className='bx bxl-github'></i>
                                </a>
                                <a href="#" className="social-icon" title="LinkedIn">
                                    <i className='bx bxl-linkedin'></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">{t('yourName')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nguyễn Văn A"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('yourEmail')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">{t('subject')}</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="PCB Design Project"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">{t('message')}</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder={language === 'vi' ? 'Mô tả dự án của bạn...' : 'Tell me about your project...'}
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`btn btn-primary submit-btn ${status}`}
                            disabled={status === 'sending'}
                        >
                            <span>
                                {status === 'sending' ? t('sending') :
                                    status === 'success' ? t('messageSent') :
                                        status === 'error' ? t('messageError') : t('sendMessage')}
                            </span>
                            <i className={`bx ${status === 'success' ? 'bx-check' : status === 'error' ? 'bx-x' : 'bx-send'}`}></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
