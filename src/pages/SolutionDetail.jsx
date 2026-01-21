import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import {
    FaIndustry, FaCogs, FaChartLine, FaRobot, FaNetworkWired,
    FaShoppingCart, FaTags, FaUsers, FaCreditCard, FaShieldAlt,
    FaHeartbeat, FaNotesMedical, FaLock, FaCheckCircle, FaSearch,
    FaLongArrowAltRight, FaMicrochip, FaCube
} from 'react-icons/fa';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';


const solutionData = {
    manufacturing: {
        title: "Smart Manufacturing",
        subtitle: "The Future of Industry 4.0",
        tagline: "Intelligent. Autonomous. Connected.",
        description: "Transforming traditional production lines into self-optimizing ecosystems involved with AI and IoT.",
        // color: "#00E5FF", // Removed to enforce brand consistency
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Efficiency", value: "35%" },
            { label: "Downtime", value: "-90%" },
            { label: "ROI", value: "3x" }
        ],
        approachSteps: [
            { title: "Assessment", text: "OT/IT Gap Analysis", icon: <FaSearch /> },
            { title: "Connectivity", text: "IoT Sensor Mesh", icon: <FaNetworkWired /> },
            { title: "Intelligence", text: "AI Diagnostic Models", icon: <FaMicrochip /> },
            { title: "Automation", text: "Robotic Process Control", icon: <FaRobot /> }
        ],
        benefits: ["Predictive Maintenance", "Real-time Visibility", "Automated QC", "Worker Safety", "Data-Driven Planning"],
        tools: ["SAP Digital Manufacturing", "Siemens MindSphere", "Azure IoT", "AWS Industrial", "Ignition SCADA", "UiPath"],
        ctaText: "Start Industry 4.0 Journey"
    },
    retail: {
        title: "Retail Intelligence",
        subtitle: "Unified Commerce Redefined",
        tagline: "Seamless. Personalized. Omnichannel.",
        description: "Unifying the digital and physical shopping experience with data precision.",
        // color: "#FF0055", // Removed to enforce brand consistency
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Sales Uplift", value: "20%" },
            { label: "Inventory", value: "99.9%" },
            { label: "Retention", value: "+40%" }
        ],
        approachSteps: [
            { title: "Unify", text: "Customer Data Platform", icon: <FaUsers /> },
            { title: "Optimize", text: "AI Inventory Mgmt", icon: <FaTags /> },
            { title: "Engage", text: "Personalized Outreach", icon: <FaShoppingCart /> },
            { title: "Scale", text: "Cloud Commerce", icon: <FaChartLine /> }
        ],
        benefits: ["Unified Commerce", "Inventory Precision", "360° Customer View", "Dynamic Pricing", "Loyalty Automation"],
        tools: ["SAP CAR", "Salesforce Commerce", "Tableau", "Snowflake", "LS Retail"],
        ctaText: "Optimize Retail Operations"
    },
    financial: {
        title: "FinTech Modernization",
        subtitle: "Secure. Compliant. Fast.",
        tagline: "Trust at the Speed of Light.",
        description: "Modernizing legacy financial backbones for the digital-first economy.",
        // color: "#FFD700", // Removed to enforce brand consistency
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Fraud Blocked", value: "$50M+" },
            { label: "Speed", value: "10ms" },
            { label: "Compliance", value: "100%" }
        ],
        approachSteps: [
            { title: "Audit", text: "Legacy Risk Analysis", icon: <FaSearch /> },
            { title: "Migrate", text: "Secure Cloud Shift", icon: <FaShieldAlt /> },
            { title: "Secure", text: "Real-time Fraud AI", icon: <FaLock /> },
            { title: "Comply", text: "Automated Reporting", icon: <FaCheckCircle /> }
        ],
        benefits: ["Reduced Risk", "Real-time Fraud Ops", "Instant Settlements", "SOX/PCI Compliance", "Mobile-First Banking"],
        tools: ["SAP S/4HANA Finance", "Temenos", "Oracle FS", "Splunk", "Blockchain"],
        ctaText: "Secure Financial Future"
    },
    healthcare: {
        title: "Connected Healthcare",
        subtitle: "Data Saving Lives",
        tagline: "Secure. Interoperable. Human.",
        description: "Breaking down data silos to improve patient outcomes and operational efficiency.",
        // color: "#00FF9D", // Removed to enforce brand consistency
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        stats: [
            { label: "Retrieval", value: "<1s" },
            { label: "Errors", value: "-60%" },
            { label: "Security", value: "HIPAA" }
        ],
        approachSteps: [
            { title: "Connect", text: "HL7/FHIR Integration", icon: <FaNetworkWired /> },
            { title: "Secure", text: "End-to-End Encrypt", icon: <FaLock /> },
            { title: "Analyze", text: "Diagnostic AI", icon: <FaNotesMedical /> },
            { title: "Care", text: "Remote Monitoring", icon: <FaHeartbeat /> }
        ],
        benefits: ["HIPAA Compliance", "Unified Records", "Admin Efficiency", "AI Diagnostics", "Telemedicine Ready"],
        tools: ["Epic/Cerner APIs", "Mirth Connect", "Azure Health", "Google Health", "Tableau"],
        ctaText: "Improve Patient Care"
    }
};

const TiltCard = ({ children, color }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    return (
        <motion.div
            style={{ x, y, rotateX, rotateY, z: 100 }}
            drag
            dragElastic={0.16}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileHover={{ cursor: "grab" }}
            whileTap={{ cursor: "grabbing" }}
            className="tilt-card-container"
        >
            {children}
            <style>{`
                .tilt-card-container {
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
            `}</style>
        </motion.div>
    );
}

const SolutionDetail = () => {
    const { id } = useParams();
    const solution = solutionData[id?.toLowerCase()];
    const { scrollYProgress } = useScroll();
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    // Spring animation for hero image
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityRange = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!solution) return <Navigate to="/services" replace />;

    const accentColor = '#ff8163';

    return (
        <div style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#fff', fontFamily: '"Inter", sans-serif', overflowX: 'hidden' }}>


            {/* Dynamic Styles */}
            <style>{`
                .holo-card {
                    background: rgba(20, 20, 20, 0.6);
                    border: 1px solid ${accentColor}40;
                    backdrop-filter: blur(10px);
                    transition: all 0.4s ease;
                    position: relative;
                    overflow: hidden;
                }
                .holo-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: -100%;
                    width: 50%; height: 100%;
                    background: linear-gradient(90deg, transparent, ${accentColor}30, transparent);
                    transform: skewX(-25deg);
                    transition: 0.5s;
                }
                .holo-card:hover::before {
                    left: 150%;
                }
                .holo-card:hover {
                    border-color: ${accentColor};
                    box-shadow: 0 0 30px ${accentColor}40;
                    transform: translateY(-5px) scale(1.02);
                }
                .grid-bg {
                    background-image: 
                        linear-gradient(${accentColor}10 1px, transparent 1px),
                        linear-gradient(90deg, ${accentColor}10 1px, transparent 1px);
                    background-size: 50px 50px;
                    opacity: 0.3;
                    mask-image: radial-gradient(circle, black 40%, transparent 80%);
                }
                .neon-text-glow {
                    text-shadow: 0 0 20px ${accentColor}80;
                }
                .floating-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.4;
                    z-index: 0;
                    background: ${accentColor};
                    animation: float 10s infinite ease-in-out;
                }
                @keyframes float {
                    0% { transform: translateY(0px) scale(1); }
                    50% { transform: translateY(-30px) scale(1.1); }
                    100% { transform: translateY(0px) scale(1); }
                }
            `}</style>

            {/* Progress Bar */}
            <motion.div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '4px', background: accentColor, transformOrigin: '0%', scaleX, zIndex: 100 }} />

            {/* 1. IMMERSIVE HERO WITH 3D IMAGE */}
            <section style={{ minHeight: '80vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: '4rem', paddingBottom: '2rem' }}>
                <div className="grid-bg" style={{ position: 'absolute', inset: 0 }}></div>
                <div className="floating-orb" style={{ top: '20%', left: '20%', width: '300px', height: '300px' }}></div>
                <div className="floating-orb" style={{ bottom: '20%', right: '20%', width: '400px', height: '400px', animationDelay: '2s' }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                        {/* Left: Text Content */}
                        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <span style={{ color: accentColor, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.9rem', border: `1px solid ${accentColor}`, padding: '0.5rem 1rem', borderRadius: '4px' }}>
                                {solution.tagline}
                            </span>
                            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: '900', margin: '2rem 0', lineHeight: '1', letterSpacing: '-2px' }}>
                                <span style={{ color: '#fff' }}>{solution.title.split(' ')[0]}</span> <br />
                                <span className="neon-text-glow" style={{ color: accentColor }}>{solution.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p style={{ fontSize: '1.2rem', color: '#ccc', maxWidth: '600px', marginBottom: '3rem', lineHeight: '1.6' }}>
                                {solution.description}
                            </p>

                            <div style={{ display: 'flex', gap: '3rem', borderTop: '1px solid #333', paddingTop: '2rem' }}>
                                {solution.stats.map((stat, i) => (
                                    <div key={i}>
                                        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff' }}>{stat.value}</div>
                                        <div style={{ fontSize: '0.8rem', color: accentColor, textTransform: 'uppercase', marginTop: '0.5rem' }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: 3D Image Card */}
                        <div style={{ perspective: '1000px' }}>
                            <TiltCard color={accentColor}>
                                <motion.div
                                    style={{
                                        borderRadius: '20px', overflow: 'hidden',
                                        border: `1px solid ${accentColor}50`,
                                        boxShadow: `0 20px 50px ${accentColor}20`,
                                        background: '#000',
                                        position: 'relative',
                                        opacity: opacityRange,
                                        y: yRange
                                    }}
                                    initial={{ opacity: 0, rotateY: 15, rotateX: 5 }}
                                    animate={{ opacity: 1, rotateY: 0, rotateX: 0 }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                >
                                    <img src={solution.image} alt={solution.title} style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.8 }} />
                                    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, #000 0%, transparent 50%)` }}></div>

                                    {/* Floating Badge on Image */}
                                    <div style={{
                                        position: 'absolute', bottom: '2rem', left: '2rem',
                                        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)',
                                        padding: '1rem', borderRadius: '12px', border: `1px solid ${accentColor}40`
                                    }}>
                                        <FaCube style={{ color: accentColor, fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                                        <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Enterprise Grade</div>
                                    </div>
                                </motion.div>
                            </TiltCard>
                        </div>

                    </div>
                </div>
            </section>

            {/* 2. HOLOGRAPHIC BENEFITS GRID */}
            <section style={{ padding: '4rem 0', background: '#0a0a0a' }}>
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '4rem', textAlign: 'center' }}
                    >
                        Redefining <span style={{ color: accentColor }}>Capabilities</span>
                    </motion.h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {solution.benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                className="holo-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                style={{ padding: '2.5rem 2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1rem' }}
                            >
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `${accentColor}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: accentColor }}>
                                    {i + 1}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{benefit}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. APPROACH TIMELINE BLUEPRINT */}
            <section style={{ padding: '4rem 0', background: '#000', position: 'relative' }}>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>Our <span style={{ color: accentColor }}>Blueprint</span></h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative' }}>
                        {/* Connecting Line */}
                        <div style={{
                            position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px',
                            background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
                            transform: 'translateX(-50%)'
                        }} className="d-none d-md-block"></div>

                        {solution.approachSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                style={{
                                    display: 'flex',
                                    justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                                    alignItems: 'center',
                                    position: 'relative'
                                }}
                            >
                                {/* Content Card */}
                                <div className="holo-card" style={{
                                    width: '100%', maxWidth: '450px', padding: '2rem', borderRadius: '20px',
                                    margin: i % 2 === 0 ? '0 3rem 0 0' : '0 0 0 3rem',
                                    textAlign: i % 2 === 0 ? 'right' : 'left',
                                    zIndex: 2,
                                    border: `1px solid ${accentColor}30`,
                                    background: '#050505'
                                }}>
                                    <div style={{ fontSize: '2.5rem', color: accentColor, marginBottom: '1rem', display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                                        {step.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{step.title}</h3>
                                    <p style={{ color: '#888', fontSize: '1rem' }}>{step.text}</p>
                                </div>

                                {/* Center Node */}
                                <div style={{
                                    width: '16px', height: '16px', background: '#000', border: `2px solid ${accentColor}`, borderRadius: '50%',
                                    position: 'absolute', left: '50%', transform: 'translateX(-50%)',
                                    zIndex: 3, boxShadow: `0 0 10px ${accentColor}`
                                }}></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TECH STACK & CTA */}
            <section style={{ padding: '4rem 0', background: `radial-gradient(circle at 50% 100%, ${accentColor}10, #000 60%)`, textAlign: 'center' }}>
                <div className="container">
                    <div style={{ marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '1.5rem', color: '#666', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Powered By</h2>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {solution.tools.map((tool, i) => (
                                <div key={i} style={{
                                    border: `1px solid #333`, padding: '0.8rem 1.8rem', borderRadius: '50px',
                                    color: '#ccc', fontSize: '1rem', background: 'rgba(0,0,0,0.5)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                                }}>
                                    {tool}
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} style={{ display: 'inline-block' }}>
                        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '2rem' }}>
                            Ready to <span style={{ color: accentColor }}>Transform?</span>
                        </h2>
                        <Link to="/contact">
                            <button style={{
                                padding: '1.2rem 3.5rem', fontSize: '1.2rem', fontWeight: 'bold',
                                background: accentColor, color: '#000', border: 'none', borderRadius: '8px',
                                cursor: 'pointer', boxShadow: `0 0 40px ${accentColor}50`
                            }}>
                                {solution.ctaText}
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SolutionDetail;
