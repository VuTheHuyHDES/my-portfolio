import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { t, language } = useLanguage();
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 1,
            title: 'IoT Sensor Hub',
            category: 'iot',
            description: language === 'vi'
                ? 'Hub cảm biến IoT với ESP32, hỗ trợ kết nối WiFi/BLE và giao thức MQTT.'
                : 'Multi-sensor IoT hub with ESP32, supporting WiFi/BLE connectivity and MQTT protocol.',
            tags: ['Altium', '4-Layer', 'ESP32'],
            features: language === 'vi'
                ? ['Thiết kế tiết kiệm năng lượng', 'Đa cảm biến', 'Cập nhật OTA']
                : ['Low Power Design', 'Multiple Sensors', 'OTA Updates'],
        },
        {
            id: 2,
            title: 'Motor Driver Board',
            category: 'power',
            description: language === 'vi'
                ? 'Driver động cơ BLDC công suất cao với điều khiển FOC, hỗ trợ đến 48V và 30A.'
                : 'High-current BLDC motor driver with FOC control, supporting up to 48V and 30A.',
            tags: ['Altium', '6-Layer', 'Power Electronics'],
            features: language === 'vi'
                ? ['Điều khiển FOC', 'Quản lý nhiệt', 'Giao tiếp CAN']
                : ['FOC Control', 'Thermal Management', 'CAN Interface'],
        },
        {
            id: 3,
            title: 'RF Transceiver Module',
            category: 'rf',
            description: language === 'vi'
                ? 'Module thu phát RF 2.4GHz với matching antenna tích hợp và shielding.'
                : '2.4GHz RF transceiver module with integrated antenna matching and shielding.',
            tags: ['RF Design', 'Impedance Matching', 'EMC'],
            features: language === 'vi'
                ? ['Độ nhạy cao', 'Công suất thấp', 'Chứng nhận FCC']
                : ['High Sensitivity', 'Low Power', 'FCC Certified'],
        },
        {
            id: 4,
            title: 'Industrial Controller',
            category: 'embedded',
            description: language === 'vi'
                ? 'Bộ điều khiển công nghiệp STM32 với nhiều kênh I/O và RS485.'
                : 'STM32-based industrial controller with multiple I/O channels and RS485.',
            tags: ['Altium', '4-Layer', 'STM32'],
            features: language === 'vi'
                ? ['Thiết kế bền bỉ', 'Điện áp rộng', 'Bảo vệ ESD']
                : ['Rugged Design', 'Wide Voltage', 'ESD Protected'],
        },
        {
            id: 5,
            title: 'Power Supply Unit',
            category: 'power',
            description: language === 'vi'
                ? 'Bộ nguồn 500W hiệu suất cao với PFC chủ động và điều khiển số.'
                : 'Efficient 500W multi-output power supply with active PFC and digital control.',
            tags: ['Power Electronics', 'High Efficiency'],
            features: language === 'vi'
                ? ['PFC chủ động', 'Điều khiển số', 'Hot-Swap']
                : ['Active PFC', 'Digital Control', 'Hot-Swap'],
        },
        {
            id: 6,
            title: 'Wearable Health Monitor',
            category: 'iot',
            description: language === 'vi'
                ? 'Thiết bị đeo nhỏ gọn theo dõi nhịp tim, SpO2 với kết nối BLE.'
                : 'Compact wearable for heart rate, SpO2, and activity monitoring with BLE.',
            tags: ['Flex PCB', 'Low Power', 'BLE'],
            features: language === 'vi'
                ? ['Thiết kế linh hoạt', 'Pin lâu', 'Chống nước']
                : ['Flexible Design', 'Long Battery', 'Water Resistant'],
        },
    ];

    const categories = [
        { key: 'all', label: t('allProjects'), icon: 'bx-grid-alt' },
        { key: 'iot', label: t('iot'), icon: 'bx-wifi' },
        { key: 'power', label: t('power'), icon: 'bx-bolt' },
        { key: 'rf', label: t('rf'), icon: 'bx-signal-5' },
        { key: 'embedded', label: t('embedded'), icon: 'bx-chip' },
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
                        <span>{t('portfolio')}</span>
                    </div>
                    <h2 className="section-title">
                        {t('featuredProjects').split(' ')[0]} <span className="highlight">{t('featuredProjects').split(' ')[1] || ''}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t('projectsSubtitle')}
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
                                    <span>{t('viewDetails')}</span>
                                    <i className='bx bx-right-arrow-alt'></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <p>{t('interestedMore')}</p>
                    <a href="#contact" className="btn btn-primary">
                        <span>{t('getInTouch')}</span>
                        <i className='bx bx-envelope'></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
