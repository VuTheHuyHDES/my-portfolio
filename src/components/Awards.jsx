import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Awards.css';

const Awards = () => {
    const { language } = useLanguage();

    const awards = [
        {
            id: 1,
            titleVi: 'Giải Ba Samsung Tech Challenge 2024',
            titleEn: 'Third Prize Samsung Tech Challenge 2024',
            organizationVi: 'Samsung Vietnam',
            organizationEn: 'Samsung Vietnam',
            year: '2024',
            icon: 'bx-trophy',
            descriptionVi: 'Cuộc thi công nghệ quy mô toàn quốc do Samsung tổ chức',
            descriptionEn: 'National technology competition organized by Samsung'
        },
        {
            id: 2,
            titleVi: 'Giải Nhất Robocon vòng trường',
            titleEn: 'First Prize Robocon University Round',
            organizationVi: 'Đại học Giao thông Vận tải',
            organizationEn: 'University of Transport and Communications',
            year: '2025',
            icon: 'bx-bot',
            descriptionVi: 'Giải nhất cuộc thi Robocon cấp trường',
            descriptionEn: 'First place in university-level Robocon competition'
        },
        {
            id: 3,
            titleVi: 'Giải Nhì Nghiên cứu Khoa học Sinh viên',
            titleEn: 'Second Prize Student Scientific Research',
            organizationVi: 'Đại học Giao thông Vận tải',
            organizationEn: 'University of Transport and Communications',
            year: '2025',
            icon: 'bx-bulb',
            descriptionVi: 'Cuộc thi nghiên cứu khoa học sinh viên cấp trường',
            descriptionEn: 'University-level student scientific research competition'
        },
        {
            id: 4,
            titleVi: 'Chứng chỉ SIC - Samsung Innovation Campus',
            titleEn: 'SIC - Samsung Innovation Campus Certificate',
            organizationVi: 'Samsung Vietnam - Chuyên ngành IoT',
            organizationEn: 'Samsung Vietnam - IoT Track',
            year: '2024',
            icon: 'bx-certification',
            descriptionVi: 'Chứng chỉ đào tạo chuyên sâu về IoT từ Samsung',
            descriptionEn: 'Professional IoT training certification from Samsung'
        },
        {
            id: 5,
            titleVi: 'Gemini Certified Educator',
            titleEn: 'Gemini Certified Educator',
            organizationVi: 'Google for Education',
            organizationEn: 'Google for Education',
            year: '2026',
            icon: 'bx-bot',
            image: '/certificates/gemini-badge.png',
            descriptionVi: 'Chứng chỉ Google AI trong giáo dục - Có hiệu lực đến 2029',
            descriptionEn: 'Google AI in Education certification - Valid through 2029'
        },
        {
            id: 6,
            titleVi: 'Altium PCB Basic Design Course',
            titleEn: 'Altium PCB Basic Design Course',
            organizationVi: 'Altium Education',
            organizationEn: 'Altium Education',
            year: '2026',
            icon: 'bx-chip',
            descriptionVi: 'Chứng chỉ hoàn thành khóa học thiết kế PCB cơ bản',
            descriptionEn: 'Certificate of completion for PCB basic design course'
        },
    ];

    const education = [
        {
            id: 1,
            degreeVi: 'Kỹ sư Điện tử - Viễn thông',
            degreeEn: 'Bachelor of Electronics & Telecommunications',
            schoolVi: 'Trường Đại học Giao thông Vận tải',
            schoolEn: 'University of Transport and Communications (UTC)',
            period: '2022 - 2026',
            icon: 'bx-book-reader',
            descriptionVi: 'Chuyên ngành Điện tử - Viễn thông, chuyên sâu về thiết kế phần cứng và hệ thống nhúng',
            descriptionEn: 'Major in Electronics & Telecommunications, specializing in hardware design and embedded systems'
        },
    ];

    return (
        <section id="awards" className="awards">
            <div className="awards-container">
                {/* Education Section */}
                <div className="section-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>{language === 'vi' ? 'Học vấn' : 'Education'}</span>
                    </div>
                    <h2 className="section-title">
                        {language === 'vi' ? 'Trình độ học vấn' : 'Educational Background'}
                    </h2>
                </div>

                <div className="education-grid">
                    {education.map((edu) => (
                        <div key={edu.id} className="education-card">
                            <div className="education-icon">
                                <i className={`bx ${edu.icon}`}></i>
                            </div>
                            <div className="education-content">
                                <div className="education-period">{edu.period}</div>
                                <h3 className="education-degree">
                                    {language === 'vi' ? edu.degreeVi : edu.degreeEn}
                                </h3>
                                <p className="education-school">
                                    <i className='bx bx-buildings'></i>
                                    {language === 'vi' ? edu.schoolVi : edu.schoolEn}
                                </p>
                                <p className="education-description">
                                    {language === 'vi' ? edu.descriptionVi : edu.descriptionEn}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Awards Section */}
                <div className="section-header awards-header">
                    <div className="section-label">
                        <span className="label-line"></span>
                        <span>{language === 'vi' ? 'Thành tựu' : 'Achievements'}</span>
                    </div>
                    <h2 className="section-title">
                        {language === 'vi' ? 'Giải thưởng & Chứng chỉ' : 'Awards & Certificates'}
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
