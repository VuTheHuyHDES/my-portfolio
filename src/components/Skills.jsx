import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
    const { t } = useLanguage();

    const designTools = [
        {
            name: 'Altium Designer',
            description: t('pcbDesignSchematic'),
            icon: '/logos/altium.png',
            isImage: true
        },
        {
            name: 'AutoCAD Electrical',
            description: t('technicalDrawing'),
            icon: '/logos/autocad.png',
            isImage: true
        },
        {
            name: 'Saturn PCB',
            description: t('pcbToolkit'),
            icon: '/logos/saturn-pcb.png',
            isImage: true
        },
    ];

    const programmingSkills = [
        {
            name: 'C/C++',
            description: t('embeddedProgramming'),
            icon: 'bxl-c-plus-plus',
            isImage: false
        },
        {
            name: 'Arduino',
            description: t('rapidPrototyping'),
            icon: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg',
            isImage: true
        },
        {
            name: 'ESP-IDF',
            description: t('esp32Framework'),
            icon: '/logos/esp-idf.png',
            isImage: true
        },
    ];

    const hardwareSkills = [
        {
            name: t('smdSoldering'),
            description: t('smdDesc'),
            icon: 'bx-target-lock',
            isImage: false
        },
        {
            name: t('throughHole'),
            description: t('throughHoleDesc'),
            icon: 'bx-extension',
            isImage: false
        },
        {
            name: t('pcbAssembly'),
            description: t('pcbAssemblyDesc'),
            icon: 'bx-microchip',
            isImage: false
        },
        {
            name: t('rework'),
            description: t('reworkDesc'),
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
                        <span>{t('mySkills')}</span>
                    </div>
                    <h2 className="section-title">
                        {t('technicalExpertise').split(' ')[0]} <span className="highlight">{t('technicalExpertise').split(' ')[1] || ''}</span>
                    </h2>
                    <p className="section-subtitle">
                        {t('skillsSubtitle')}
                    </p>
                </div>

                <div className="skills-content">
                    <div className="skill-category">
                        <div className="category-header">
                            <i className='bx bx-chip'></i>
                            <h3>{t('designTools')}</h3>
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
                            <h3>{t('programming')}</h3>
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
                            <h3>{t('hardwareSoldering')}</h3>
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
