
import React from 'react';
import { motion } from 'motion/react';
import { FaCheckCircle, FaRocket, FaDatabase, FaCogs, FaNetworkWired, FaShieldAlt, FaLightbulb, FaChartLine } from 'react-icons/fa';
import Interactive3DBox from '../components/Interactive3DBox';
import digitalTransformImg from '../assets/digital-transform-visual.png';
import rocketMissionImg from '../assets/rocket-mission.png';
import sapHeroBg from '../assets/sap-hero-bg.png';

const About = () => {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    // Process Steps Data
    const processSteps = [
        { icon: FaLightbulb, title: 'Discover', desc: 'Understanding your unique challenges.' },
        { icon: FaNetworkWired, title: 'Design', desc: 'Architecting scalable solutions.' },
        { icon: FaCogs, title: 'Build', desc: 'Precision engineering & configuration.' },
        { icon: FaRocket, title: 'Scale', desc: 'Deployment & continuous optimization.' }
    ];

    return (
        <div className="about-page-enterprise" style={{ fontFamily: 'outfit' }}>

            {/* 1. HERO SECTION */}
            <section className="about-section about-hero-section">
                <div className="container grid-2-col">
                    {/* Left: Content (Black Card) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="about-container-black"
                    >
                        <span className="about-label">ABOUT ZORA TECH</span>
                        <h1 className="about-heading-primary">
                            Building Intelligent,<br />Data-Driven Enterprises
                        </h1>
                        <h2 className="about-subheading">
                            Enterprise technology solutions designed for scale, stability, and long-term value.
                        </h2>
                        <p className="about-text">
                            Zora Tech is a technology consulting and engineering company specializing in SAP implementation, enterprise data management, and intelligent digital transformation. We partner with organizations to modernize their systems, strengthen data foundations, and enable smarter decision-making across the enterprise.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <button className="cta-btn-primary">Learn More About Our Expertise</button>
                        </div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        className="about-visual-abstract"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={sapHeroBg}
                            alt="Enterprise Architecture"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                borderRadius: '20px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                                // transform: 'rotate(2deg)' // Removed to make it straight
                            }}
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. WHO WE ARE */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="container grid-2-col">
                    {/* Left: Visual */}
                    <div className="about-visual-abstract">
                        <img
                            src={digitalTransformImg}
                            alt="Digital Transformation"
                            style={{
                                width: '100%',
                                maxWidth: '450px',
                                borderRadius: '20px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.15)'
                            }}
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="about-container-black">
                        <h2 className="about-heading-secondary">Who We Are</h2>
                        <p className="about-text">
                            Zora Tech is built by experienced SAP consultants, solution architects, and data specialists who have delivered enterprise programs across complex business environments. Our teams combine technical depth with operational insight, ensuring solutions are not only technically sound but also aligned with real business objectives.
                        </p>
                        <p className="about-text">
                            We focus on clarity, governance, and execution excellence—helping organizations reduce risk, improve efficiency, and achieve predictable transformation outcomes.
                        </p>
                    </div>
                </div>
            </motion.section>


            {/* 2.5. OUR MISSION */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="container grid-2-col">
                    {/* Left: Mission Content */}
                    <div className="about-container-black">
                        <span className="about-label">OUR MISSION</span>
                        <h2 className="about-heading-secondary">Driving Digital Excellence</h2>
                        <p className="about-text">
                            To empower businesses with intelligent technology solutions that drive efficiency, growth, and sustainable innovation. We guide organizations through complex digital transformations, ensuring they thrive in an evolving data-driven world.
                        </p>
                        <ul className="about-text" style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '8px', height: '8px', background: '#ff8163', borderRadius: '50%' }}></span>
                                Innovation
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '8px', height: '8px', background: '#ff8163', borderRadius: '50%' }}></span>
                                Growth
                            </li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span style={{ width: '8px', height: '8px', background: '#ff8163', borderRadius: '50%' }}></span>
                                Momentum
                            </li>
                        </ul>
                    </div>

                    {/* Right: Interactive 3D Visual */}
                    <div className="about-visual-abstract" style={{ minHeight: '400px' }}>
                        <img
                            src={rocketMissionImg}
                            alt="Mission of Growth"
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                borderRadius: '24px',
                                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))',
                                animation: 'float 6s ease-in-out infinite'
                            }}
                        />
                    </div>
                </div>
            </motion.section>

            {/* 3. WHAT WE DO */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="container grid-2-col" style={{ alignItems: 'start' }}>
                    {/* Left: Content */}
                    <div style={{ position: 'sticky', top: '100px' }}>
                        <span className="about-label" style={{ color: '#1a3300' }}>OUR SERVICES</span>
                        <h2 className="about-heading-secondary" style={{ color: '#1a1a1a' }}>What We Do</h2>
                        <p className="about-text" style={{ color: '#555' }}>
                            We deliver end-to-end enterprise technology services that support organizations throughout their transformation journey—from strategy and design to implementation and optimization.
                        </p>
                    </div>

                    {/* Right: Capability Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
                        <div className="capability-card">
                            <FaCogs className="capability-icon" />
                            <h3 className="capability-title">SAP Implementation & Modernization</h3>
                            <p className="capability-desc">Secure, scalable SAP solutions aligned with business processes.</p>
                        </div>
                        <div className="capability-card">
                            <FaDatabase className="capability-icon" />
                            <h3 className="capability-title">Enterprise Data Management</h3>
                            <p className="capability-desc">Strong data governance, quality, and lifecycle control.</p>
                        </div>
                        <div className="capability-card">
                            <FaNetworkWired className="capability-icon" />
                            <h3 className="capability-title">System Integration</h3>
                            <p className="capability-desc">Seamless connectivity across SAP and non-SAP landscapes.</p>
                        </div>
                        <div className="capability-card">
                            <FaRocket className="capability-icon" />
                            <h3 className="capability-title">Intelligent Automation & Analytics</h3>
                            <p className="capability-desc">Insights and automation that enable informed decision-making.</p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* 4. OUR DELIVERY APPROACH */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="container grid-2-col">
                    {/* Left: Visual Process Timeline */}
                    <div className="about-visual-abstract" style={{ flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', paddingLeft: '2rem' }}>
                        {processSteps.map((step, idx) => (
                            <div key={idx} style={{ display: 'flex', gap: '1.5rem', marginBottom: idx !== processSteps.length - 1 ? '0' : '0', position: 'relative', paddingBottom: idx !== processSteps.length - 1 ? '2.5rem' : '0' }}>
                                {/* Connecting Line */}
                                {idx !== processSteps.length - 1 && (
                                    <div style={{
                                        position: 'absolute',
                                        left: '20px',
                                        top: '40px',
                                        bottom: '0',
                                        width: '2px',
                                        background: 'linear-gradient(to bottom, #ff8163 50%, transparent)'
                                    }}></div>
                                )}

                                {/* Icon Circle */}
                                <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '50%',
                                    background: '#0a0a0a',
                                    border: '2px solid #ff8163',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 2,
                                    flexShrink: 0
                                }}>
                                    <step.icon color="#ff8163" size={18} />
                                </div>

                                {/* Text */}
                                <div>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1a1a1a', marginBottom: '0.25rem' }}>{step.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: '#555', margin: 0 }}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Content */}
                    <div className="about-container-black">
                        <h2 className="about-heading-secondary">Our Approach</h2>
                        <p className="about-text">
                            Our delivery model is structured, transparent, and outcome-focused. We apply industry best practices, rigorous governance, and proven methodologies to ensure quality and consistency across every engagement.
                        </p>
                        <h4 className="about-label" style={{ marginTop: '2rem' }}>CORE PRINCIPLES</h4>
                        <ul className="about-text" style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaCheckCircle className="accent-neon" /> Business-aligned solution architecture</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaCheckCircle className="accent-neon" /> Data accuracy and compliance by design</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaCheckCircle className="accent-neon" /> Risk-aware project execution</li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><FaCheckCircle className="accent-neon" /> Strong stakeholder collaboration</li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* 5. WHY ZORA TECH */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="container grid-2-col">
                    {/* Left: Content */}
                    <div>
                        <h2 className="about-heading-secondary" style={{ color: '#1a1a1a' }}>Why Zora Tech</h2>
                        <p className="about-text" style={{ color: '#555' }}>
                            Clients choose Zora Tech for our reliability, depth of expertise, and long-term partnership mindset. We work as an extension of internal teams—bringing clarity, accountability, and technical excellence to every engagement.
                        </p>
                    </div>

                    {/* Right: Highlight Tiles */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {['Proven SAP delivery capability', 'Strong data governance focus', 'Enterprise-grade security standards', 'Scalable and future-ready solutions'].map((item, idx) => (
                            <div key={idx} className="highlight-tile">
                                <FaShieldAlt color="#ff8163" size={20} />
                                <span className="highlight-text">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 6. VISION & COMMITMENT */}
            <motion.section
                className="about-section"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="container grid-2-col">
                    {/* Vision */}
                    <div className="about-container-black">
                        <h2 className="about-heading-secondary">Our Vision</h2>
                        <p className="about-text">
                            To be a trusted enterprise technology partner, enabling organizations to operate with intelligence, confidence, and agility in a data-driven world.
                        </p>
                    </div>

                    {/* Commitment */}
                    <div className="about-container-black">
                        <h2 className="about-heading-secondary">Our Commitment</h2>
                        <p className="about-text">
                            We are committed to delivering solutions that are robust, compliant, and aligned with long-term business goals—supported by continuous improvement and transparent collaboration.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* 7. CTA SECTION */}
            <section className="footer-cta-container">
                <div className="container">
                    <h2 className="about-heading-secondary">Let’s Build the Future Together</h2>
                    <p className="about-subheading" style={{ color: '#ccc', marginBottom: '3rem' }}>
                        Partner with Zora Tech to drive sustainable enterprise transformation.
                    </p>
                    <button className="cta-btn-primary">Contact Our Experts</button>
                </div>
            </section>

        </div>
    );
};

export default About;
