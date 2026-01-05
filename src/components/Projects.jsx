import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'IoT Sensor Hub',
            category: 'iot',
            description: 'Multi-sensor IoT hub with ESP32, supporting WiFi/BLE connectivity and MQTT protocol.',
            tags: ['Altium', '4-Layer', 'ESP32'],
            features: ['Low Power Design', 'Multiple Sensors', 'OTA Updates'],
        },
        {
            id: 2,
            title: 'Motor Driver Board',
            category: 'power',
            description: 'High-current BLDC motor driver with FOC control, supporting up to 48V and 30A.',
            tags: ['Altium', '6-Layer', 'Power Electronics'],
            features: ['FOC Control', 'Thermal Management', 'CAN Interface'],
        },
        {
            id: 3,
            title: 'RF Transceiver Module',
            category: 'rf',
            description: '2.4GHz RF transceiver module with integrated antenna matching and shielding.',
            tags: ['RF Design', 'Impedance Matching', 'EMC'],
            features: ['High Sensitivity', 'Low Power', 'FCC Certified'],
        },
        {
            id: 4,
            title: 'Industrial Controller',
            category: 'embedded',
            description: 'STM32-based industrial controller with multiple I/O channels and RS485.',
            tags: ['Altium', '4-Layer', 'STM32'],
            features: ['Rugged Design', 'Wide Voltage', 'ESD Protected'],
        },
        {
            id: 5,
            title: 'Power Supply Unit',
            category: 'power',
            description: 'Efficient 500W multi-output power supply with active PFC and digital control.',
            tags: ['Power Electronics', 'High Efficiency'],
            features: ['Active PFC', 'Digital Control', 'Hot-Swap'],
        },
        {
            id: 6,
            title: 'Wearable Health Monitor',
            category: 'iot',
            description: 'Compact wearable for heart rate, SpO2, and activity monitoring with BLE.',
            tags: ['Flex PCB', 'Low Power', 'BLE'],
            features: ['Flexible Design', 'Long Battery', 'Water Resistant'],
        },
    ];

    const categories = [
        { key: 'all', label: 'All Projects', icon: 'bx-grid-alt' },
        { key: 'iot', label: 'IoT', icon: 'bx-wifi' },
        { key: 'power', label: 'Power', icon: 'bx-bolt' },
        { key: 'rf', label: 'RF', icon: 'bx-signal-5' },
        { key: 'embedded', label: 'Embedded', icon: 'bx-chip' },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <div className="section-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>Portfolio</span>
                    </div>
                    <h2 className="section-title">
                        Featured <span className="highlight">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A showcase of PCB designs and hardware projects
                    </p>
                </div>

                <div className="project-filters">
                    {categories.map(cat => (
                        <button
                            key={cat.key}
                            className={`filter-btn ${filter === cat.key ? 'active' : ''}`}
                            onClick={() => setFilter(cat.key)}
                        >
                            <i className={`bx ${cat.icon}`}></i>
                            <span>{cat.label}</span>
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="project-image">
                                <div className="image-placeholder">
                                    <i className='bx bx-image'></i>
                                    <span>Project Image</span>
                                </div>
                                <div className="project-overlay">
                                    <a href="#" className="overlay-btn" title="View Details">
                                        <i className='bx bx-link-external'></i>
                                    </a>
                                    <a href="#" className="overlay-btn" title="View Gallery">
                                        <i className='bx bx-images'></i>
                                    </a>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-features">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="feature-item">
                                            <i className='bx bx-check'></i>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <a href="#" className="project-link">
                                    <span>View Details</span>
                                    <i className='bx bx-right-arrow-alt'></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <p>Interested in seeing more of my work?</p>
                    <a href="#contact" className="btn btn-primary">
                        <span>Get in Touch</span>
                        <i className='bx bx-envelope'></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
