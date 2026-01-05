import React from 'react';
import './Skills.css';

const Skills = () => {
    const designTools = [
        {
            name: 'Altium Designer',
            description: 'PCB Design & Schematic',
            icon: '/logos/altium.png',
            isImage: true
        },
        {
            name: 'AutoCAD Electrical',
            description: 'Technical Drawing & 2D/3D Design',
            icon: '/logos/autocad.png',
            isImage: true
        },
        {
            name: 'Saturn PCB',
            description: 'PCB Design Toolkit',
            icon: '/logos/saturn-pcb.png',
            isImage: true
        },
    ];

    const programmingSkills = [
        {
            name: 'C/C++',
            description: 'Embedded Systems Programming',
            icon: 'bxl-c-plus-plus',
            isImage: false
        },
        {
            name: 'Arduino',
            description: 'Rapid Prototyping & IoT',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg',
            isImage: true
        },
        {
            name: 'ESP-IDF',
            description: 'ESP32 Development Framework',
            icon: '/logos/esp-idf.png',
            isImage: true
        },
    ];

    const hardwareSkills = [
        {
            name: 'SMD Soldering',
            description: 'Surface Mount Components',
            icon: 'bx-target-lock',
            isImage: false
        },
        {
            name: 'Through-Hole Soldering',
            description: 'Traditional Component Assembly',
            icon: 'bx-extension',
            isImage: false
        },
        {
            name: 'PCB Assembly',
            description: 'Full Board Assembly & Testing',
            icon: 'bx-microchip',
            isImage: false
        },
        {
            name: 'Rework & Repair',
            description: 'Component Replacement & Debugging',
            icon: 'bx-wrench',
            isImage: false
        },
    ];

    const SkillCard = ({ skill }) => (
        <div className="skill-card">
            <div className="skill-icon">
                {skill.isImage ? (
                    <img src={skill.icon} alt={skill.name} />
                ) : (
                    <i className={`bx ${skill.icon}`}></i>
                )}
            </div>
            <div className="skill-info">
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
            </div>
        </div>
    );

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="section-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>My Skills</span>
                    </div>
                    <h2 className="section-title">
                        Technical <span className="highlight">Expertise</span>
                    </h2>
                    <p className="section-subtitle">
                        Tools, programming languages, and hands-on skills I use daily
                    </p>
                </div>

                <div className="skills-content">
                    <div className="skill-category">
                        <div className="category-header">
                            <i className='bx bx-chip'></i>
                            <h3>Design Tools</h3>
                        </div>
                        <div className="skill-grid">
                            {designTools.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <div className="category-header">
                            <i className='bx bx-code-alt'></i>
                            <h3>Programming</h3>
                        </div>
                        <div className="skill-grid">
                            {programmingSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="skill-category">
                        <div className="category-header">
                            <i className='bx bx-wrench'></i>
                            <h3>Hardware & Soldering</h3>
                        </div>
                        <div className="skill-grid">
                            {hardwareSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
