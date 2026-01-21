// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';


import dotnetLogo from '../assets/dotnet.png';
import aspnetLogo from '../assets/aspnet.png';
import webdevLogo from '../assets/webdev.png';
import mobiledevLogo from '../assets/mobiledev.jpg';
import clouddevLogo from '../assets/clouddev.png';

const ServicesPage = () => {
    const [activeTab, setActiveTab] = useState('software'); // 'software' or 'ai'

    // Data -----------------------------------------------------------------------
    const mainServices = [
        { title: "S/4 HANA Data Migration", desc: "Comprehensive migration strategies ensuring minimal disruption.", link: "/services/s4-hana-migration", size: "large" },
        { title: "Data Archiving", desc: "Securely archive historical data to improve performance.", link: "/services/data-archiving", size: "normal" },
        { title: "Data Integration", desc: "Unified data ecosystems ensuring seamless connectivity.", link: "/services/data-integration", size: "normal" },
        { title: "Master Data Management", desc: "Architecting a single source of truth.", link: "/services/master-data-management", size: "wide" }
    ];

    const sapServices = [
        { title: "SAP S/4HANA Migration", desc: "Global data migration services", link: "/services/s4-hana-migration" },
        { title: "SAP Implementation", desc: "Deploy SAP solutions and turnkey systems", link: "/services/sap-implementation" },
        { title: "SAP Integration", desc: "Unified ecosystem of solutions", link: "/services/sap-integration" },
        { title: "SAP Consulting", desc: "Expert strategic guidance", link: "/services/sap-consulting" },
        { title: "SAP Security", desc: "Protect and optimize landscapes", link: "/services/sap-security" },
        { title: "SAP Rollout", desc: "Global implementation rollout", link: "/services/sap-rollout" },
        { title: "GROW with SAP", desc: "ERP bundle for SMEs", link: "/services/grow-with-sap" },
        { title: "RISE with SAP", desc: "Business transformation suite", link: "/services/rise-with-sap" },
        { title: "SAP AMS", desc: "Support and maintenance", link: "/services/sap-ams" },
        { title: "SAP Managed Services", desc: "Seamless operations", link: "/services/sap-managed-services" },
        { title: "SAP Licenses", desc: "Optimization and cost reduction", link: "/services/sap-licenses" },
        { title: "SAP Fiori", desc: "Intuitive user experiences", link: "/services/sap-fiori" }
    ];

    const softwareExpertise = [
        '.NET development', 'ASP.NET development', 'Web development services',
        'Mobile development (iOS, Android)', 'Cloud software development',
        'Custom software product development'
    ];

    const aiExpertise = [
        'AI development services', 'Military drone R&D services', 'ML/AI development',
        'Computer Vision solutions', 'Medical device integration', 'AI agent development services'
    ];

    const expertiseIcons = {
        '.NET development': <img src={dotnetLogo} alt=".NET" className="tech-icon" />,
        'ASP.NET development': <img src={aspnetLogo} alt="ASP.NET" className="tech-icon" />,
        'Web development services': <img src={webdevLogo} alt="Web Development" className="tech-icon" />,
        'Mobile development (iOS, Android)': <img src={mobiledevLogo} alt="Mobile App" className="tech-icon" />,
        'Cloud software development': <img src={clouddevLogo} alt="Cloud" className="tech-icon" />,
        'Custom software product development': <span className="emoji-icon">⚙️</span>,
        'AI development services': <span className="emoji-icon">🤖</span>,
        'Military drone R&D services': <span className="emoji-icon">🚁</span>,
        'ML/AI development': <span className="emoji-icon">🧠</span>,
        'Computer Vision solutions': <span className="emoji-icon">👁️</span>,
        'Medical device integration': <span className="emoji-icon">⚕️</span>,
        'AI agent development services': <span className="emoji-icon">🕵️</span>
    };

    const linkMap = {
        '.NET development': '/services/dotnet-development',
        'ASP.NET development': '/services/asp-net-development',
        'Web development services': '/services/web-development',
        'Mobile development (iOS, Android)': '/services/mobile-development',
        'Cloud software development': '/services/cloud-digital-transformation',
        'Custom software product development': '/services/custom-software',
        'AI development services': '/services/ai-development',
        'Military drone R&D services': '/services/drone-rnd',
        'ML/AI development': '/services/ai-development',
        'Computer Vision solutions': '/services/computer-vision',
        'Medical device integration': '/services/medical-device-integration',
        'AI agent development services': '/services/ai-agent-development'
    };

    // Helper Components -----------------------------------------------------------

    const SectionHeader = ({ title, subtitle }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff', marginBottom: '0.5rem' }}>
                {title} <span style={{ color: '#ff8163' }}>.</span>
            </h2>
            {subtitle && <p style={{ color: '#888', fontSize: '1.1rem' }}>{subtitle}</p>}
        </motion.div>
    );

    const ExpertiseCard = ({ item }) => {
        const link = linkMap[item] || '#';
        const hasLink = link !== '#';
        const icon = expertiseIcons[item];

        const cardContent = (
            <div className="expert-card" style={{
                backgroundColor: '#111',
                border: '1px solid #222',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                height: '100%',
                transition: 'all 0.3s ease'
            }}>
                <div style={{
                    width: '60px', height: '60px', backgroundColor: '#050505', borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #333'
                }}>
                    {icon}
                </div>
                <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', margin: 0 }}>{item}</h3>
                    {hasLink && <span style={{ fontSize: '0.8rem', color: '#ff8163', marginTop: '0.2rem', display: 'block' }}>View Solution →</span>}
                </div>
            </div>
        );

        if (hasLink) {
            return <Link to={link} style={{ textDecoration: 'none' }}>{cardContent}</Link>;
        }
        return cardContent;
    };

    // Render ----------------------------------------------------------------------
    return (
        <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff', position: 'relative', overflowX: 'hidden' }}>
            <NeonCursor />

            <style>{`
                .tech-icon { width: 32px; height: 32px; object-fit: contain; }
                .emoji-icon { fontSize: 1.8rem; }
                .expert-card:hover { transform: translateY(-5px); border-color: #ff8163 !important; box-shadow: 0 10px 30px rgba(255,129,99,0.1); }
                .tab-btn { padding: 1rem 2rem; border-radius: 99px; border: 1px solid #333; background: transparent; color: #888; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
                .tab-btn.active { background: #ff8163; color: #000; border-color: #ff8163; box-shadow: 0 0 20px rgba(255,129,99,0.4); }
                .tab-btn:hover:not(.active) { color: #fff; border-color: #fff; }
            `}</style>

            {/* 1. HERO SECTION */}
            <section style={{ height: '40vh', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', paddingTop: '80px' }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'radial-gradient(circle at 50% 0%, rgba(255,129,99,0.05) 0%, rgba(5,5,5,0) 70%)', zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-2px' }}>
                            Future-Ready <br />
                            <span style={{
                                background: 'linear-gradient(to right, #fff, #ff8163)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>Digital Services</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.25rem', color: '#999', maxWidth: '600px', margin: '0 auto' }}
                    >
                        Architecting the enterprise of tomorrow with SAP expertise, AI innovation, and high-performance software engineering.
                    </motion.p>
                </div>
            </section>

            {/* 2. CORE SERVICES (BENTO GRID) */}
            <section style={{ padding: '2rem 1rem' }}>
                <div className="container">
                    <SectionHeader title="Core Competencies" subtitle="Strategic foundations for digital transformation." />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gridAutoRows: '250px',
                        gap: '1rem'
                    }}>
                        {mainServices.map((service, i) => (
                            <Link to={service.link} key={i} style={{ textDecoration: 'none', gridColumn: service.size === 'wide' ? 'span 2' : 'span 1' }}>
                                <motion.div
                                    whileHover={{ scale: 1.02, backgroundColor: '#1a1a1a', borderColor: '#ff8163', boxShadow: '0 10px 30px rgba(255, 129, 99, 0.15)' }}
                                    style={{
                                        height: '100%',
                                        backgroundColor: '#0e0e0e',
                                        borderRadius: '20px',
                                        padding: '2rem',
                                        border: '1px solid #222',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'background-color 0.3s ease'
                                    }}
                                >
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: 'radial-gradient(circle, rgba(255,129,99,0.1) 0%, transparent 70%)' }} />
                                    <div>
                                        <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', marginBottom: '1rem' }}>{service.title}</h3>
                                        <p style={{ color: '#888', fontSize: '1rem', lineHeight: 1.5 }}>{service.desc}</p>
                                    </div>
                                    <div style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', borderRadius: '50px', border: '1px solid #333', color: '#fff', fontSize: '0.9rem' }}>
                                        Explore
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. EXPERTISE TABS (INTERACTIVE) */}
            <section style={{ padding: '2rem 1rem', backgroundColor: '#020202' }}>
                <div className="container">
                    <SectionHeader title="Technological Expertise" subtitle="Cutting-edge tools for modern challenges." />

                    {/* Tab Controls */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <button
                            className={`tab-btn ${activeTab === 'software' ? 'active' : ''}`}
                            onClick={() => setActiveTab('software')}
                        >
                            Software Engineering
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
                            onClick={() => setActiveTab('ai')}
                        >
                            AI & Innovation
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div style={{ minHeight: '400px' }}>
                        <AnimatePresence mode="wait">
                            {activeTab === 'software' ? (
                                <motion.div
                                    key="software"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}
                                >
                                    {softwareExpertise.map((item, i) => <ExpertiseCard key={i} item={item} />)}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="ai"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}
                                >
                                    {aiExpertise.map((item, i) => <ExpertiseCard key={i} item={item} />)}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>


            {/* 4. SAP CENTER (MASONRY/GRID) */}
            <section style={{ padding: '2rem 1rem' }}>
                <div className="container">
                    <SectionHeader title="SAP Center of Excellence" subtitle="Your partner for end-to-end SAP transformation." />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {sapServices.map((service, i) => (
                            <Link to={service.link} key={i} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ y: -5, backgroundColor: '#111' }}
                                    style={{
                                        backgroundColor: '#0a0a0a',
                                        padding: '1.5rem',
                                        borderRadius: '8px',
                                        borderLeft: '2px solid #333',
                                        height: '100%',
                                        transition: 'border-color 0.3s'
                                    }}
                                    className="sap-card"
                                >
                                    <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{service.title}</h4>
                                    <p style={{ color: '#666', fontSize: '0.95rem', margin: 0 }}>{service.desc}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                    {/* Add hover effect for sap-card here via inline style injection or global css used previously. 
                        We can add a small style block for the specific border color change on hover 
                    */}
                    <style>{`
                        .sap-card:hover { border-left-color: #ff8163 !important; }
                    `}</style>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;
