import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

const translations = {
    vi: {
        // Navbar
        home: 'Trang chủ',
        about: 'Giới thiệu',
        skills: 'Kỹ năng',
        projects: 'Dự án',
        contact: 'Liên hệ',

        // Hero
        greeting: 'Xin chào, tôi là',
        role: 'Thiết kế PCB & Phần cứng',
        available: 'Sẵn sàng nhận dự án',
        heroDescription: 'Chuyên thiết kế mạch in hiệu suất cao và hệ thống nhúng sử dụng Altium Designer. Biến các khái niệm điện tử phức tạp thành giải pháp phần cứng sẵn sàng sản xuất.',
        pcbDesigns: 'Thiết kế PCB',
        yearsExp: 'Năm kinh nghiệm',
        happyClients: 'Khách hàng',
        viewProjects: 'Xem dự án',
        getInTouch: 'Liên hệ ngay',
        scrollDown: 'Cuộn xuống',

        // About
        aboutMe: 'Về tôi',
        aboutTitle: 'Kỹ sư phần cứng đam mê tạo ra điện tử tương lai',
        aboutDesc1: 'Tôi là một nhà thiết kế PCB và kỹ sư phần cứng với chuyên môn trong việc tạo ra các giải pháp điện tử sáng tạo. Hành trình của tôi trong điện tử bắt đầu từ niềm đam mê tìm hiểu cách mọi thứ hoạt động.',
        aboutDesc2: 'Chuyên về Altium Designer, tôi tạo ra PCB đa lớp cho nhiều ứng dụng bao gồm thiết bị IoT, điện tử công suất, hệ thống RF và bộ điều khiển nhúng.',
        multiLayer: 'Thiết kế đa lớp',
        multiLayerDesc: 'Chuyên gia về stackup PCB đa lớp và routing tốc độ cao',
        dfm: 'Tối ưu DFM',
        dfmDesc: 'Thiết kế tối ưu cho sản xuất với ít sửa đổi',
        signalIntegrity: 'Toàn vẹn tín hiệu',
        signalIntegrityDesc: 'Thiết kế tốc độ cao với kiểm soát trở kháng',
        fullDev: 'Phát triển đầy đủ',
        fullDevDesc: 'Từ schematic đến thử nghiệm và sản xuất',
        workTogether: 'Hợp tác ngay',
        experience: 'Năm kinh nghiệm',

        // Skills
        mySkills: 'Kỹ năng',
        technicalExpertise: 'Chuyên môn kỹ thuật',
        skillsSubtitle: 'Công cụ, ngôn ngữ lập trình và kỹ năng thực hành',
        designTools: 'Công cụ thiết kế',
        programming: 'Lập trình',
        hardwareSoldering: 'Phần cứng & Hàn mạch',
        pcbDesignSchematic: 'Thiết kế PCB & Schematic',
        technicalDrawing: 'Bản vẽ kỹ thuật & 2D/3D',
        pcbToolkit: 'Bộ công cụ PCB',
        embeddedProgramming: 'Lập trình hệ thống nhúng',
        rapidPrototyping: 'Chế tạo nhanh & IoT',
        esp32Framework: 'Framework phát triển ESP32',
        smdSoldering: 'Hàn SMD',
        smdDesc: 'Linh kiện dán bề mặt',
        throughHole: 'Hàn xuyên lỗ',
        throughHoleDesc: 'Lắp ráp linh kiện truyền thống',
        pcbAssembly: 'Lắp ráp PCB',
        pcbAssemblyDesc: 'Lắp ráp & kiểm tra toàn bộ board',
        rework: 'Sửa chữa & Rework',
        reworkDesc: 'Thay thế linh kiện & debug',

        // Projects
        portfolio: 'Danh mục',
        featuredProjects: 'Dự án nổi bật',
        projectsSubtitle: 'Trưng bày các thiết kế PCB và dự án phần cứng',
        allProjects: 'Tất cả',
        iot: 'IoT',
        power: 'Nguồn',
        rf: 'RF',
        embedded: 'Nhúng',
        viewDetails: 'Xem chi tiết',
        interestedMore: 'Quan tâm đến các dự án khác?',

        // Contact
        letsConnect: 'Kết nối',
        contactSubtitle: 'Có dự án cần thực hiện? Hãy thảo luận cách tôi có thể giúp hiện thực hóa ý tưởng phần cứng của bạn.',
        email: 'Email',
        phone: 'Điện thoại',
        location: 'Địa chỉ',
        followMe: 'Theo dõi tôi',
        yourName: 'Tên của bạn',
        yourEmail: 'Email của bạn',
        subject: 'Tiêu đề',
        message: 'Nội dung',
        sendMessage: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
        messageSent: 'Tin nhắn đã được gửi!',
        messageError: 'Có lỗi xảy ra. Vui lòng thử lại.',

        // Footer
        footerTagline: 'Biến ý tưởng điện tử thành giải pháp PCB sẵn sàng sản xuất.',
        quickLinks: 'Liên kết nhanh',
        services: 'Dịch vụ',
        pcbDesignService: 'Thiết kế PCB',
        schematicCapture: 'Vẽ Schematic',
        hardwareDev: 'Phát triển phần cứng',
        prototyping: 'Chế tạo mẫu',
        allRights: 'Bản quyền thuộc về',
    },
    en: {
        // Navbar
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',

        // Hero
        greeting: "Hello, I'm",
        role: 'PCB & Hardware Designer',
        available: 'Available for Projects',
        heroDescription: 'Specialized in designing high-performance printed circuit boards and embedded systems using Altium Designer. Transforming complex electronic concepts into production-ready hardware solutions.',
        pcbDesigns: 'PCB Designs',
        yearsExp: 'Years Experience',
        happyClients: 'Happy Clients',
        viewProjects: 'View Projects',
        getInTouch: 'Get in Touch',
        scrollDown: 'Scroll Down',

        // About
        aboutMe: 'About Me',
        aboutTitle: 'Passionate Hardware Engineer Crafting Tomorrow\'s Electronics',
        aboutDesc1: 'I\'m a dedicated PCB designer and hardware engineer with expertise in creating innovative electronic solutions. My journey in electronics started with a fascination for how things work.',
        aboutDesc2: 'Specializing in Altium Designer, I create multi-layer PCBs for various applications including IoT devices, power electronics, RF systems, and embedded controllers.',
        multiLayer: 'Multi-Layer Design',
        multiLayerDesc: 'Expert in complex multilayer PCB stackups and high-speed routing',
        dfm: 'DFM Optimization',
        dfmDesc: 'Designs optimized for manufacturing with minimal revisions',
        signalIntegrity: 'Signal Integrity',
        signalIntegrityDesc: 'High-speed design with impedance control and EMC compliance',
        fullDev: 'Full Development',
        fullDevDesc: 'From schematic capture to prototype testing and production',
        workTogether: "Let's Work Together",
        experience: 'Years of Experience',

        // Skills
        mySkills: 'My Skills',
        technicalExpertise: 'Technical Expertise',
        skillsSubtitle: 'Tools, programming languages, and hands-on skills I use daily',
        designTools: 'Design Tools',
        programming: 'Programming',
        hardwareSoldering: 'Hardware & Soldering',
        pcbDesignSchematic: 'PCB Design & Schematic',
        technicalDrawing: 'Technical Drawing & 2D/3D Design',
        pcbToolkit: 'PCB Design Toolkit',
        embeddedProgramming: 'Embedded Systems Programming',
        rapidPrototyping: 'Rapid Prototyping & IoT',
        esp32Framework: 'ESP32 Development Framework',
        smdSoldering: 'SMD Soldering',
        smdDesc: 'Surface Mount Components',
        throughHole: 'Through-Hole Soldering',
        throughHoleDesc: 'Traditional Component Assembly',
        pcbAssembly: 'PCB Assembly',
        pcbAssemblyDesc: 'Full Board Assembly & Testing',
        rework: 'Rework & Repair',
        reworkDesc: 'Component Replacement & Debugging',

        // Projects
        portfolio: 'Portfolio',
        featuredProjects: 'Featured Projects',
        projectsSubtitle: 'A showcase of PCB designs and hardware projects',
        allProjects: 'All Projects',
        iot: 'IoT',
        power: 'Power',
        rf: 'RF',
        embedded: 'Embedded',
        viewDetails: 'View Details',
        interestedMore: 'Interested in seeing more of my work?',

        // Contact
        letsConnect: "Let's Connect",
        contactSubtitle: 'Have a project in mind? Let\'s discuss how I can help bring your hardware ideas to life.',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        followMe: 'Follow Me',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        subject: 'Subject',
        message: 'Message',
        sendMessage: 'Send Message',
        sending: 'Sending...',
        messageSent: 'Message sent successfully!',
        messageError: 'Something went wrong. Please try again.',

        // Footer
        footerTagline: 'Transforming electronic concepts into production-ready PCB solutions.',
        quickLinks: 'Quick Links',
        services: 'Services',
        pcbDesignService: 'PCB Design',
        schematicCapture: 'Schematic Capture',
        hardwareDev: 'Hardware Development',
        prototyping: 'Prototyping',
        allRights: 'All rights reserved.',
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved || 'vi'; // Default to Vietnamese
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.setAttribute('lang', language);
    }, [language]);

    const t = (key) => translations[language][key] || key;
    const toggleLanguage = () => setLanguage(language === 'vi' ? 'en' : 'vi');

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
