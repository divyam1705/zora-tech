import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

// --- Services Menu Data ---
const SERVICE_MENU_DATA = {
    "SAP Data Management": [
        { title: "S/4 HANA Data Migration", desc: "Seamless migration to SAP S/4 HANA ensuring data integrity and compliance.", link: "/services/s4-hana-migration" },
        { title: "Data Archiving", desc: "Efficient data storage and management for legacy and inactive data.", link: "/services/data-archiving" },
        { title: "Master Data Management", desc: "Maintain consistent and centralized master data across the organization.", link: "/services/master-data-management" },
        { title: "Data Integration", desc: "Connect and unify data from multiple systems to enhance decision-making.", link: "/services/data-integration" }
    ],
    "SAP Services": [
        { title: "SAP on Cloud", desc: "Migration and management on major cloud platforms", link: "/services/sap-on-cloud" },
        { title: "SAP Implementation", desc: "Deploy SAP solutions and turnkey systems", link: "/services/sap-implementation" },
        { title: "SAP Integration", desc: "Have a unified ecosystem of solutions", link: "/services/sap-integration" },
        { title: "SAP S/4HANA Migration", desc: "Migrate from legacy SAP systems to S/4HANA", link: "/services/s4-hana-migration" },
        { title: "SAP Consulting", desc: "Take full advantage of SAP solutions", link: "/services/sap-consulting" },
        { title: "SAP Security Services", desc: "Protect, optimize, and manage your SAP landscape", link: "/services/sap-security" },
        { title: "SAP Rollout", desc: "SAP implementation rollout", link: "/services/sap-rollout" },
        { title: "GROW with SAP", desc: "ERP implementation bundle for SMEs", link: "/services/grow-with-sap" },
        { title: "RISE with SAP", desc: "All-inclusive business transformation", link: "/services/rise-with-sap" },
        { title: "SAP Application Management Services", desc: "SAP solutions support and maintenance", link: "/services/sap-ams" },
        { title: "SAP Managed Services", desc: "Seamless operation of your SAP environment", link: "/services/sap-managed-services" },
        { title: "SAP Licenses", desc: "SAP License sales", link: "/services/sap-licenses" },
        { title: "SAP Fiori", desc: "Provide intuitive user experiences with SAP", link: "/services/sap-fiori" }
    ],
    "Software Engineering": [
        { title: ".NET development", desc: "Robust and scalable .NET solutions", link: "/services/dotnet-development" },
        { title: "ASP.NET development", desc: "High-performance web applications", link: "/services/asp-net-development" },
        { title: "Web development services", desc: "Modern, responsive websites", link: "/services/web-development" },
        { title: "Mobile development (iOS, Android)", desc: "Native and cross-platform apps", link: "/services/mobile-development" },
        { title: "Cloud software development", desc: "Scalable cloud-native architectures", link: "/services/cloud-digital-transformation" },
        { title: "Custom software product development", desc: "Tailored solutions for your business", link: "/services/custom-software" }
    ],
    "AI & Innovation": [
        { title: "AI development services", desc: "Intelligent solutions for complex problems", link: "/services/ai-development" },
        { title: "Military drone R&D services", desc: "Advanced aerial technology research", link: "/services/drone-rnd" },
        { title: "ML/AI development", desc: "Machine learning models and integration", link: "/services/ai-development" },
        { title: "Computer Vision solutions", desc: "Image and video analysis systems", link: "/services/computer-vision" },
        { title: "Medical device integration", desc: "IoT and connectivity for healthcare", link: "/services/medical-device-integration" },
        { title: "AI agent development services", desc: "Autonomous intelligent agents", link: "/services/ai-agent-development" }
    ]
};

const LINK_TO_CATEGORY = {};
Object.keys(SERVICE_MENU_DATA).forEach(category => {
    SERVICE_MENU_DATA[category].forEach(item => {
        LINK_TO_CATEGORY[item.link] = category;
    });
});

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeServiceCategory, setActiveServiceCategory] = useState("SAP Data Management");

    // Mobile Detection
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setMobileMenuOpen(false); // Close mobile menu on desktop switch
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // 1. Exact match from menu items
        if (LINK_TO_CATEGORY[location.pathname]) {
            setActiveServiceCategory(LINK_TO_CATEGORY[location.pathname]);
            return;
        }

        // 2. Hub page matches
        if (location.pathname.includes('/sap-data-management-hub')) {
            setActiveServiceCategory("SAP Data Management");
        } else if (location.pathname.includes('/software-engineering-hub')) {
            setActiveServiceCategory("Software Engineering");
        } else if (location.pathname.includes('/ai-innovation-services')) {
            setActiveServiceCategory("AI & Innovation");
        } else if (location.pathname.includes('/sap-services')) {
            setActiveServiceCategory("SAP Services");
        }
    }, [location.pathname]);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setIsServicesOpen(false); // Reset services expansion on toggle
        setActiveServiceCategory("SAP Data Management"); // Reset to default
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        setIsServicesOpen(false);
    };

    // Mobile Service Accordion State
    const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);

    const toggleMobileCategory = (category) => {
        if (mobileExpandedCategory === category) {
            setMobileExpandedCategory(null);
        } else {
            setMobileExpandedCategory(category);
        }
    };

    return (
        <header className="header" onMouseLeave={() => !isMobile && setIsServicesOpen(false)}>
            <div className="container header-container">
                <div className="logo-container">
                    <img src="/zora-logo.png" alt="Zora Logo" className="logo-image" />
                    <Link to="/" className="logo-text">Zora Technologies</Link>
                </div>

                <nav>
                    <div className="mobile-menu-btn" onClick={toggleMenu}>
                        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={`nav-list ${mobileMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link></li>

                        <li
                            onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
                            className="nav-item-has-submenu"
                        >
                            <div
                                className={`nav-link ${location.pathname.includes('/services') ? 'active' : ''}`}
                                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                                onClick={(e) => {
                                    if (isMobile) {
                                        e.preventDefault();
                                        setIsServicesOpen(!isServicesOpen);
                                    } else {
                                        closeMenu();
                                        navigate('/services');
                                    }
                                }}
                            >
                                Services {isMobile && <FaChevronRight style={{ transform: isServicesOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} size={12} />}
                            </div>

                            {/* Mobile Accordion for Services */}
                            {isMobile && isServicesOpen && (
                                <div className="mobile-services-accordion" style={{
                                    width: '100%',
                                    paddingLeft: '1rem',
                                    marginTop: '1rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                    alignItems: 'flex-start'
                                }}>
                                    {Object.keys(SERVICE_MENU_DATA).map((category) => {
                                        const categoryLink = {
                                            "SAP Data Management": "/services/sap-data-management-hub",
                                            "SAP Services": "/services/sap-services",
                                            "Software Engineering": "/services/software-engineering-hub",
                                            "AI & Innovation": "/services/ai-innovation-services"
                                        }[category] || "/services";

                                        return (
                                            <div key={category} style={{ width: '100%' }}>
                                                <div
                                                    style={{
                                                        color: '#fff',
                                                        fontWeight: '700',
                                                        fontSize: '1.1rem',
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        marginBottom: '0.5rem'
                                                    }}
                                                >
                                                    <Link
                                                        to={categoryLink}
                                                        onClick={closeMenu}
                                                        style={{
                                                            color: 'inherit',
                                                            textDecoration: 'none',
                                                            flex: 1,
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        {category}
                                                    </Link>
                                                    <div
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleMobileCategory(category);
                                                        }}
                                                        style={{
                                                            padding: '0.5rem',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <FaChevronRight size={14} style={{ transform: mobileExpandedCategory === category ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                                                    </div>
                                                </div>

                                                {mobileExpandedCategory === category && (
                                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1rem', borderLeft: '1px solid #333', marginTop: '0.5rem' }}>
                                                        {SERVICE_MENU_DATA[category].map((item, idx) => (
                                                            <Link
                                                                key={idx}
                                                                to={item.link}
                                                                onClick={closeMenu}
                                                                style={{ color: '#ccc', fontSize: '0.9rem', textDecoration: 'none' }}
                                                            >
                                                                {item.title}
                                                            </Link>
                                                        ))}
                                                        {(() => {
                                                            let hubLink = "/services";
                                                            switch (category) {
                                                                case "SAP Services": hubLink = "/services/sap-services"; break;
                                                                case "AI & Innovation": hubLink = "/services/ai-innovation-services"; break;
                                                                case "SAP Data Management": hubLink = "/services/sap-data-management-hub"; break;
                                                                case "Software Engineering": hubLink = "/services/software-engineering-hub"; break;
                                                                default: hubLink = "/services";
                                                            }
                                                            return (
                                                                <Link to={hubLink} onClick={closeMenu} style={{ color: '#ff8163', fontWeight: 'bold', fontSize: '0.8rem', marginTop: '0.5rem', textTransform: 'uppercase' }}>
                                                                    ALL {category} &rarr;
                                                                </Link>
                                                            );
                                                        })()}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </li>

                        <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeMenu}>About Us</Link></li>
                        <li>
                            <Link
                                to="/contact"
                                className={location.pathname === '/contact' ? "cta-button small" : "cta-button small"}
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mega Menu Dropdown (Desktop Only) */}
            {!isMobile && (
                <AnimatePresence>
                    {isServicesOpen && (
                        <motion.div
                            className="mega-menu-container"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                        >
                            {/* Sidebar */}
                            <div className="mega-menu-sidebar">
                                {Object.keys(SERVICE_MENU_DATA).map((category) => (
                                    <div
                                        key={category}
                                        className={`mega-menu-category ${activeServiceCategory === category ? 'active' : ''}`}
                                        onMouseEnter={() => setActiveServiceCategory(category)}
                                    >
                                        {category}
                                        {activeServiceCategory === category && <FaChevronRight size={12} />}
                                    </div>
                                ))}
                            </div>

                            {/* Content Area */}
                            <div className="mega-menu-content">
                                <h3 className="tech-mono" style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>
                                    {activeServiceCategory}
                                </h3>
                                <div className="mega-menu-grid">
                                    {SERVICE_MENU_DATA[activeServiceCategory].map((item, index) => (
                                        <Link to={item.link} key={index} className="mega-link-item" onClick={closeMenu}>
                                            <div className="mega-link-title">{item.title}</div>
                                            <div className="mega-link-desc">{item.desc}</div>
                                        </Link>
                                    ))}
                                </div>
                                {(() => {
                                    let hubLink = "/services";
                                    switch (activeServiceCategory) {
                                        case "SAP Services":
                                            hubLink = "/services/sap-services";
                                            break;
                                        case "AI & Innovation":
                                            hubLink = "/services/ai-innovation-services";
                                            break;
                                        case "SAP Data Management":
                                            hubLink = "/services/sap-data-management-hub";
                                            break;
                                        case "Software Engineering":
                                            hubLink = "/services/software-engineering-hub";
                                            break;
                                        default:
                                            hubLink = "/services";
                                    }
                                    return (
                                        <Link to={hubLink} className="mega-menu-footer-link" onClick={closeMenu}>
                                            ALL {activeServiceCategory} &rarr;
                                        </Link>
                                    );
                                })()}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </header>
    );
};

export default Header;
