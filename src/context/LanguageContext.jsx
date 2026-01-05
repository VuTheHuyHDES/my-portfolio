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
        heroDescription: 'Chuyên thiết kế mạch in hiệu suất cao và hệ thống nhúng sử dụng Altium Designer. Biến ý tưởng điện tử phức tạp thành sản phẩm phần cứng hoàn chỉnh.',
        pcbDesigns: 'Thiết kế PCB',
        yearsExp: 'Năm kinh nghiệm',
        happyClients: 'Khách hàng',
        viewProjects: 'Xem dự án',
        getInTouch: 'Liên hệ ngay',
        downloadCV: 'Tải CV',
        scrollDown: 'Cuộn xuống',

        // About
        aboutMe: 'Giới thiệu',
        aboutTitle: 'Kỹ sư phần cứng với đam mê sáng tạo',
        aboutDesc1: 'Tôi là một nhà thiết kế PCB và kỹ sư phần cứng với nhiều năm kinh nghiệm trong việc phát triển các giải pháp điện tử. Niềm đam mê với công nghệ đã thúc đẩy tôi không ngừng học hỏi và cải tiến.',
        aboutDesc2: 'Với chuyên môn về Altium Designer, tôi thiết kế PCB đa lớp cho nhiều ứng dụng: thiết bị IoT, điện tử công suất, hệ thống RF và vi điều khiển nhúng.',
        multiLayer: 'Thiết kế đa lớp',
        multiLayerDesc: 'Chuyên gia về stackup PCB nhiều lớp và đi dây tốc độ cao',
        dfm: 'Tối ưu sản xuất',
        dfmDesc: 'Thiết kế tối ưu cho sản xuất hàng loạt',
        signalIntegrity: 'Toàn vẹn tín hiệu',
        signalIntegrityDesc: 'Kiểm soát trở kháng và tuân thủ EMC',
        fullDev: 'Phát triển toàn diện',
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
        technicalDrawing: 'Bản vẽ kỹ thuật 2D/3D',
        pcbToolkit: 'Công cụ tính toán PCB',
        embeddedProgramming: 'Lập trình hệ thống nhúng',
        rapidPrototyping: 'Chế tạo mẫu nhanh & IoT',
        esp32Framework: 'Framework ESP32',
        smdSoldering: 'Hàn linh kiện SMD',
        smdDesc: 'Hàn linh kiện dán bề mặt',
        pcbAssembly: 'Lắp ráp PCB',
        pcbAssemblyDesc: 'Lắp ráp và kiểm tra mạch hoàn chỉnh',
        rework: 'Sửa chữa mạch',
        reworkDesc: 'Thay thế linh kiện và debug',

        // Projects
        portfolio: 'Dự án',
        featuredProjects: 'Dự án tiêu biểu',
        projectsSubtitle: 'Các thiết kế PCB và dự án phần cứng đã thực hiện',
        allProjects: 'Tất cả',
        iot: 'IoT',
        power: 'Nguồn',
        rf: 'RF',
        embedded: 'Nhúng',
        viewDetails: 'Xem chi tiết',
        interestedMore: 'Quan tâm đến các dự án khác?',

        // Contact
        letsConnect: 'Kết nối',
        contactSubtitle: 'Bạn có dự án cần thực hiện? Hãy liên hệ để trao đổi về giải pháp phần cứng phù hợp.',
        email: 'Email',
        phone: 'Điện thoại',
        location: 'Địa chỉ',
        followMe: 'Theo dõi',
        yourName: 'Họ và tên',
        yourEmail: 'Email của bạn',
        subject: 'Tiêu đề',
        message: 'Nội dung',
        sendMessage: 'Gửi tin nhắn',
        sending: 'Đang gửi...',
        messageSent: 'Đã gửi thành công!',
        messageError: 'Có lỗi xảy ra. Vui lòng thử lại.',
        messagePlaceholder: 'Mô tả dự án của bạn...',

        // Footer
        footerTagline: 'Biến ý tưởng điện tử thành sản phẩm thực tế.',
        quickLinks: 'Liên kết nhanh',
        services: 'Dịch vụ',
        pcbDesignService: 'Thiết kế PCB',
        schematicCapture: 'Vẽ Schematic',
        hardwareDev: 'Phát triển phần cứng',
        prototyping: 'Chế tạo mẫu',
        allRights: 'Bản quyền được bảo lưu.',
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
        heroDescription: 'Specialized in designing high-performance PCBs and embedded systems using Altium Designer. Transforming complex electronic concepts into production-ready hardware solutions.',
        pcbDesigns: 'PCB Designs',
        yearsExp: 'Years Experience',
        happyClients: 'Happy Clients',
        viewProjects: 'View Projects',
        getInTouch: 'Get in Touch',
        downloadCV: 'Download CV',
        scrollDown: 'Scroll Down',

        // About
        aboutMe: 'About Me',
        aboutTitle: 'Passionate Hardware Engineer',
        aboutDesc1: 'I am a PCB designer and hardware engineer with years of experience in developing electronic solutions. My passion for technology drives me to continuously learn and improve.',
        aboutDesc2: 'Specializing in Altium Designer, I create multi-layer PCBs for various applications including IoT devices, power electronics, RF systems, and embedded controllers.',
        multiLayer: 'Multi-Layer Design',
        multiLayerDesc: 'Expert in complex multilayer PCB stackups and high-speed routing',
        dfm: 'DFM Optimization',
        dfmDesc: 'Designs optimized for mass production',
        signalIntegrity: 'Signal Integrity',
        signalIntegrityDesc: 'Impedance control and EMC compliance',
        fullDev: 'Full Development',
        fullDevDesc: 'From schematic to testing and production',
        workTogether: "Let's Collaborate",
        experience: 'Years of Experience',

        // Skills
        mySkills: 'My Skills',
        technicalExpertise: 'Technical Expertise',
        skillsSubtitle: 'Tools, programming languages, and hands-on skills',
        designTools: 'Design Tools',
        programming: 'Programming',
        hardwareSoldering: 'Hardware & Soldering',
        pcbDesignSchematic: 'PCB Design & Schematic',
        technicalDrawing: '2D/3D Technical Drawing',
        pcbToolkit: 'PCB Calculation Toolkit',
        embeddedProgramming: 'Embedded Systems Programming',
        rapidPrototyping: 'Rapid Prototyping & IoT',
        esp32Framework: 'ESP32 Framework',
        smdSoldering: 'SMD Soldering',
        smdDesc: 'Surface mount component soldering',
        pcbAssembly: 'PCB Assembly',
        pcbAssemblyDesc: 'Full board assembly and testing',
        rework: 'Board Rework',
        reworkDesc: 'Component replacement and debugging',

        // Projects
        portfolio: 'Portfolio',
        featuredProjects: 'Featured Projects',
        projectsSubtitle: 'PCB designs and hardware projects showcase',
        allProjects: 'All Projects',
        iot: 'IoT',
        power: 'Power',
        rf: 'RF',
        embedded: 'Embedded',
        viewDetails: 'View Details',
        interestedMore: 'Interested in more projects?',

        // Contact
        letsConnect: 'Get in Touch',
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
        messageSent: 'Message sent!',
        messageError: 'Error. Please try again.',
        messagePlaceholder: 'Tell me about your project...',

        // Footer
        footerTagline: 'Transforming electronic ideas into real products.',
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
        return saved || 'vi';
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
