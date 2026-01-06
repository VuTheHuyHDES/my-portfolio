import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Awards.css';

const Awards = () => {
    const { t, language } = useLanguage();

    const awards = [
        {
            id: 1,
            titleVi: 'Giải Nhất Cuộc thi Thiết kế PCB',
            titleEn: 'First Prize PCB Design Competition',
            organizationVi: 'Trường Đại học Bách khoa',
            organizationEn: 'Polytechnic University',
            year: '2024',
            icon: 'bx-trophy',
            descriptionVi: 'Giải nhất cuộc thi thiết kế mạch in cấp trường',
            descriptionEn: 'First place in university-level PCB design competition'
        },
        {
            id: 2,
            titleVi: 'Sinh viên xuất sắc ngành Điện tử',
            titleEn: 'Outstanding Electronics Student',
            organizationVi: 'Khoa Điện - Điện tử',
            organizationEn: 'Faculty of Electrical Engineering',
            year: '2024',
            icon: 'bx-star',
            descriptionVi: 'Sinh viên có thành tích học tập và nghiên cứu xuất sắc',
            descriptionEn: 'Student with excellent academic and research achievements'
        },
        {
            id: 3,
            titleVi: 'Chứng chỉ Altium Designer',
            titleEn: 'Altium Designer Certification',
            organizationVi: 'Altium Education',
            organizationEn: 'Altium Education',
            year: '2023',
            icon: 'bx-certification',
            descriptionVi: 'Chứng chỉ chuyên nghiệp về thiết kế PCB',
            descriptionEn: 'Professional certification in PCB design'
        },
    ];

    return (
        <section id="awards" className="awards">
            <div className="awards-container">
                <div className="section-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>{language === 'vi' ? 'Thành tựu' : 'Achievements'}</span>
                    </div>
                    <h2 className="section-title">
                        {language === 'vi' ? 'Giải thưởng & Danh hiệu' : 'Awards & Honors'}
                    </h2>
                    <p className="section-subtitle">
                        {language === 'vi'
                            ? 'Các giải thưởng và chứng nhận đã đạt được'
                            : 'Recognitions and certifications achieved'}
                    </p>
                </div>

                <div className="awards-grid">
                    {awards.map((award) => (
                        <div key={award.id} className="award-card">
                            <div className="award-icon">
                                <i className={`bx ${award.icon}`}></i>
                            </div>
                            <div className="award-content">
                                <div className="award-year">{award.year}</div>
                                <h3 className="award-title">
                                    {language === 'vi' ? award.titleVi : award.titleEn}
                                </h3>
                                <p className="award-organization">
                                    {language === 'vi' ? award.organizationVi : award.organizationEn}
                                </p>
                                <p className="award-description">
                                    {language === 'vi' ? award.descriptionVi : award.descriptionEn}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
