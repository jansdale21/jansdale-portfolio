export const profile = {
    name: "Jansdale S. Yusi",
    tagline: ["Building connected systems across", "IoT, networking and software."],
    location: "Mexico, Pampanga, Philippines",
    section: "BSIT 4-A",
    university: "Angeles University Foundation",
    photo: "/profile/profile-photo.jpg",
    cvUrl: "/profile/Jansdale_Yusi_Resume.pdf",
    about:
        "BSIT student with academic project experience in network simulation, IoT device integration, backend development, and web applications. Interested in networking and cloud systems.",
    email: "jansdaleyusi@gmail.com",
    github: "https://github.com/jansdale21",
    linkedin: "https://www.linkedin.com/in/jansdaleyusi/",
};

export const heroStats = [
    { value: "05", label: "academic projects designed, managed and built" },
    { value: "06", label: "Cisco Networking Academy & AWS courses completed" },
    { value: "08", label: "milestones in my prompt engineering journey" },
];

export const typedPrompt = "whoami";

export const marqueeItems = [
    "Full-stack web development",
    "Laravel · PHP · MySQL",
    "IoT asset tracking",
    "ESP32 · C++",
    "NFC & e-paper",
    "GNSS/GSM · Traccar",
    "REST APIs",
    "Cisco networking",
    "Routing & switching",
    "AWS Cloud Foundations",
    "Flutter",
    "Prompt engineering",
];

export const education = [
    {
        school: "Angeles University Foundation",
        degree: "BS Information Technology",
        period: "2023 — Present",
        details: [
            "Academic recognitions: DOST-JLSS, CHED Merit, E-APA",
            "Consistent University Scholar",
        ],
    },
    {
        school: "Our Lady of Fatima University, Pampanga Campus",
        degree: "Senior High School — STEM strand",
        period: "Graduated",
        details: ["With High Honors", "Batch Valedictorian"],
    },
];

export const skills = [
    {
        group: "Networking",
        items: [
            "Cisco Packet Tracer",
            "Routing",
            "Switching",
            "Network configuration",
            "Network security",
        ],
    },
    {
        group: "Cloud & Databases",
        items: ["AWS Cloud Foundations coursework", "MySQL", "PostgreSQL", "Redis"],
    },
    {
        group: "Programming & Web",
        items: [
            "PHP",
            "Laravel",
            "Python",
            "JavaScript",
            "HTML",
            "CSS",
            "REST APIs",
            "WordPress",
        ],
    },
    {
        group: "Devices & Platforms",
        items: [
            "ESP32",
            "C++",
            "NFC",
            "GNSS/GSM",
            "Traccar",
            "Flutter",
            "n8n",
            "Make.com",
        ],
    },
];

export const projects = [
    {
        name: "LATCH",
        repo: "https://github.com/jansdale21/latch",
        flow: ["GNSS/GSM tracker", "Traccar server", "Laravel backend", "Mobile app"],
        flowNote: "Plus an NFC-powered e-paper display that keeps the asset ID visible without power or a live connection.",
        contribution: "Managed the project and worked on device integration (ESP32/C++) and the Laravel backend services.",
        subtitle: "Connected Asset Tracking",
        year: "2026",
        role: "Project Manager · Hardware & Backend Developer",
        summary: "Layered asset tracking and persistent identification for physical assets.",
        stack: ["ESP32", "C++", "GNSS/GSM", "Traccar", "Laravel", "MySQL", "Flutter", "NFC"],
        images: [
            { src: "/projects/latch_01_mobile-app_location-view.jpg", caption: "LATCH mobile app — live location view" },
            { src: "/projects/latch_02_mobile-app_e-paper-update.jpg", caption: "NFC e-paper display update" },
        ],
        featured: true,
    },
    {
        name: "Kumachi Coffee Shop",
        repo: "https://github.com/jansdale21/kumachi-shop",
        contribution: "Managed the project and developed the Laravel platform and the WordPress site.",
        subtitle: "Ordering & Café Operations",
        year: "2026",
        role: "Project Manager · Full-Stack Developer",
        summary:
            "Customer ordering and café operations on a Laravel/MySQL platform — customer menus, ordering and administrative workflows — with a separate WordPress site presenting the café.",
        stack: ["Laravel", "PHP", "MySQL", "WordPress", "JavaScript"],
        images: [
            { src: "/projects/kumachi_01_laravel_customer-home.jpg", caption: "Laravel customer home" },
            { src: "/projects/kumachi_02_laravel_menu.jpg", caption: "Laravel ordering menu" },
            { src: "/projects/kumachi_03_wordpress_home.jpg", caption: "WordPress site home" },
            { src: "/projects/kumachi_04_wordpress_menu.jpg", caption: "WordPress café menu" },
        ],
    },
    {
        name: "Trusticle",
        repo: "https://github.com/jansdaleyusi/TRUSTICLE-appdev",
        contribution: "Managed the project and built the article assessment workflow and web interface.",
        subtitle: "Article Assessment & Analytics",
        year: "2025",
        role: "Project Manager · Full-Stack Developer",
        summary:
            "A PHP/MySQL application for assessing online articles, with an analytics dashboard showing article counts, status distribution and keyword trends.",
        stack: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
        images: [
            { src: "/projects/trusticle_01_analytics-dashboard.png", caption: "Analytics dashboard" },
            { src: "/projects/trusticle_02_sign-in.jpg", caption: "Sign-in" },
        ],
    },
    {
        name: "Lifetag",
        repo: "https://github.com/jansdale21/lifetag",
        contribution: "Built the Laravel/MySQL web app and coordinated development.",
        subtitle: "NFC Clinical Workflow",
        year: "2025",
        role: "Project Manager · Full-Stack Developer",
        summary:
            "A Laravel/MySQL web application for NFC-supported clinical information access and traceable workflows — patient, visit, queue, appointment and NFC tag views in one dashboard.",
        stack: ["NFC", "Laravel", "PHP", "MySQL", "JavaScript"],
        images: [{ src: "/projects/lifetag_01_clinical-dashboard.jpg", caption: "Clinical dashboard" }],
    },
    {
        name: "Cisco Packet Tracer Simulations",
        contribution: "Completed the Cisco coursework simulations covering routing, switching and network configuration.",
        subtitle: "Networking Coursework",
        year: "2024 — 2026",
        role: "Simulation Work",
        summary:
            "Completed networking simulations covering fundamentals, routing, switching and network configuration.",
        stack: ["Cisco Packet Tracer", "Routing", "Switching"],
        images: [],
        textOnly: true,
    },
];

export const achievements = [
    "Champion — RAITE 2026 Quiz Bee",
    "Second Place — On-Campus Front-End Competition",
    "Second Place — On-Campus Quiz Bee",
    "Thesis paper accepted at CISCOM 2026",
];

export const certifications = [
    { name: "CCNA: Introduction to Networks", org: "Cisco Networking Academy", year: "2024" },
    { name: "CCNA: Switching, Routing, and Wireless Essentials", org: "Cisco Networking Academy", year: "2025" },
    { name: "CCNA: Enterprise Networking, Security, and Automation", org: "Cisco Networking Academy", year: "2025" },
    { name: "Introduction to Cybersecurity", org: "Cisco", year: "2025" },
    { name: "Junior Cybersecurity Analyst Career Path", org: "Cisco", year: "2026" },
    { name: "Cloud Foundations", org: "AWS Academy", year: "2025" },
];

export const leadership = [
    "Class Secretary · Academic Year 2025–2026",
    "AJPC NetAcad Rider · Participant",
];
