import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <div className="section-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>Contact</span>
                    </div>
                    <h2 className="section-title">
                        Let's <span className="highlight">Connect</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's discuss how I can help bring your hardware ideas to life.
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-card-contact">
                            <div className="info-icon-contact">
                                <i className='bx bx-envelope'></i>
                            </div>
                            <div className="info-details">
                                <h4>Email</h4>
                                <a href="mailto:huyyu987@gmail.com">huyyu987@gmail.com</a>
                            </div>
                        </div>

                        <div className="info-card-contact">
                            <div className="info-icon-contact">
                                <i className='bx bx-phone'></i>
                            </div>
                            <div className="info-details">
                                <h4>Phone</h4>
                                <a href="tel:0383049145">0383049145</a>
                            </div>
                        </div>

                        <div className="info-card-contact">
                            <div className="info-icon-contact">
                                <i className='bx bx-map'></i>
                            </div>
                            <div className="info-details">
                                <h4>Location</h4>
                                <span>Vietnam</span>
                            </div>
                        </div>

                        <div className="social-links-contact">
                            <h4>Follow Me</h4>
                            <div className="social-icons">
                                {/* PLACEHOLDER: Replace # with your social media links */}
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
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
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
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            <span>Send Message</span>
                            <i className='bx bx-send'></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
