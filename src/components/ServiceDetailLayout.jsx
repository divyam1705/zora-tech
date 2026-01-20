// @ts-nocheck
'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import NeonCursor from './NeonCursor';
import Globe3D from './Globe3D';
import Interactive3DBox from './Interactive3DBox';
import { FaPlus, FaMinus, FaArrowRight } from 'react-icons/fa';

import heroBg from '../assets/hero-cityscape.jpg'; // Import the hero image

const ServiceDetailLayout = ({
    title,
    subtitle,
    description,
    heroImage,
    overview,
    approachSteps = [],
    benefits = [],
    tools = [],
    idealFor = [],
    faqs = [],
    ctaText = "Start Your Project",
    // New structured data props
    overviewSection,     // { heading, paragraphs[], buttonText, buttonLink, image, showInteractive3D }
    challengesSection,   // { heading, subtitle, challenges[], ctaHeading, ctaButtonText, ctaButtonLink }
    costsSection,        // { heading, paragraphs[], buttonText, buttonLink, image }
    children
}) => {
    // FAQ State
    const [openFAQ, setOpenFAQ] = useState(null);

    return (
        <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#0a1f00', position: 'relative', overflowX: 'hidden' }}>
            <NeonCursor />
            <style>{`
                /* Light Green Theme Styles */
                .glass-card {
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 129, 99, 0.3);
                    border-radius: 16px;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 20px rgba(255, 129, 99, 0.1);
                }
                .glass-card:hover {
                    border-color: #ff8163; /* Darker green for visibility */
                    box-shadow: 0 10px 40px rgba(255, 129, 99, 0.25);
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.85);
                }
                .text-gradient {
                    background: linear-gradient(to right, #000000, #ff8163); /* Darker gradient for light bg */
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .tool-pill {
                    padding: 0.8rem 1.5rem;
                    background: #fff0eb;
                    border: 1px solid #ffccbb;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    color: #000000;
                    display: inline-block;
                    transition: all 0.2s;
                }
                .tool-pill:hover {
                    border-color: #ff8163;
                    color: #000;
                    background: #ffccbb;
                    box-shadow: 0 0 15px rgba(255, 129, 99, 0.3);
                }
                
                /* Text Matching */
                h1, h2, h3 { color: #1a3300; }
                p, li { color: #333333; }
                
                .faq-item {
                    background: #ffffff;
                    border: 1px solid #ffccbb;
                }
                .faq-active {
                    background: #f9fff0;
                    border-color: #ff8163;
                }
                
                @media (max-width: 768px) {
                    section {
                        padding: 2.5rem 0 !important;
                    }
                    .container {
                        padding: 0 1.5rem !important;
                    }
                    h1 {
                        font-size: 2.5rem !important;
                    }
                    h2 {
                        font-size: 2rem !important;
                    }
                    .glass-card {
                        padding: 1.5rem !important;
                    }
                }
            `}</style>

            {/* 1. HERO SECTION (Redesigned) */}
            <section style={{
                minHeight: '100vh',
                padding: '0',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                backgroundImage: heroImage === 'none' ? 'none' : (heroImage ? `url(${heroImage})` : `url(${heroBg})`),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.4) 100%)', zIndex: 0
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', paddingTop: '80px' }}>

                    {/* Breadcrumbs */}
                    <div style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.9rem',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
                        <span style={{ margin: '0 10px' }}>•</span>
                        <Link to="/services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</Link>
                        <span style={{ margin: '0 10px' }}>•</span>
                        <span style={{ color: '#fff' }}>{title}</span>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        {/* Title */}
                        <h1 style={{
                            fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                            fontWeight: '800',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            color: '#ffffff',
                            maxWidth: '900px'
                        }}>
                            {title}
                        </h1>

                        {/* Description */}
                        <h2 style={{
                            fontSize: '1.2rem',
                            fontWeight: '400',
                            color: 'rgba(255,255,255,0.9)',
                            maxWidth: '700px',
                            marginBottom: '3rem',
                            lineHeight: '1.6'
                        }}>
                            {description || subtitle}
                        </h2>

                        {/* CTA Buttons - Portfolio Removed */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <Link to="/contact" style={{ textDecoration: 'none' }}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    style={{
                                        padding: '1rem 2rem',
                                        borderRadius: '6px',
                                        background: '#ffffff',
                                        color: '#000000',
                                        fontSize: '0.9rem',
                                        fontWeight: '800',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    Contact Us
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. OVERVIEW SECTION (Digital Transformation / Custom Content) */}
            {overviewSection && (
                <section style={{ padding: '4rem 0', background: '#f5f7fa' }}>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        {/* Left: Content */}
                        <div>
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: '800',
                                color: '#000000',
                                marginBottom: '1.5rem',
                                lineHeight: '1.2'
                            }}>
                                {overviewSection.heading}
                            </h2>
                            <div style={{ fontSize: '1.1rem', color: '#4a4a4a', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {overviewSection.paragraphs && overviewSection.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                            {overviewSection.buttonText && overviewSection.buttonLink && (
                                <div style={{ marginTop: '2.5rem' }}>
                                    <Link
                                        to={overviewSection.buttonLink}
                                        style={{
                                            display: 'inline-block',
                                            padding: '1rem 2.5rem',
                                            backgroundColor: '#ff8163',
                                            color: '#ffffff',
                                            fontWeight: '700',
                                            textTransform: 'uppercase',
                                            textDecoration: 'none',
                                            borderRadius: '6px',
                                            letterSpacing: '0.5px',
                                            boxShadow: '0 4px 15px rgba(255, 129, 99, 0.3)'
                                        }}
                                    >
                                        {overviewSection.buttonText}
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Right: Visual */}
                        <div style={{ position: 'relative', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                minHeight: '400px',
                                background: 'linear-gradient(135deg, #e0f7fa 0%, #e8eaf6 100%)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #cceeff',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                            }}>
                                {overviewSection.image && (
                                    <img
                                        src={overviewSection.image}
                                        alt={overviewSection.heading}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: 1,
                                            zIndex: 0
                                        }}
                                    />
                                )}

                                {overviewSection.showInteractive3D && (
                                    <div style={{ position: 'relative', zIndex: 10 }}>
                                        <Interactive3DBox />
                                    </div>
                                )}

                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'transparent',
                                    zIndex: 5,
                                    pointerEvents: 'none'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* 3. APPROACH (Grid) */}
            {approachSteps.length > 0 && (
                <section style={{ padding: '4rem 0' }}>
                    <div className="container">
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Our Approach <span style={{ color: '#ff8163' }}>.</span></h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {approachSteps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-card"
                                    style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
                                >
                                    <div style={{ fontSize: '2rem', color: '#ff8163', marginBottom: '1rem' }}>{step.icon}</div>
                                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.8rem' }}>{step.title}</h3>
                                    <p style={{ lineHeight: '1.6' }}>{step.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CHALLENGES SECTION (After Approach) */}
            {challengesSection && (
                <section style={{ padding: '4rem 0', background: '#ffffff' }}>
                    <div className="container">
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#1a3300' }}>
                                {challengesSection.heading}
                            </h2>
                            {challengesSection.subtitle && (
                                <p style={{ fontSize: '1.2rem', color: '#4a4a4a', maxWidth: '800px', lineHeight: '1.6' }}>
                                    {challengesSection.subtitle}
                                </p>
                            )}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            {challengesSection.challenges && challengesSection.challenges.map((item, i) => (
                                <div key={i} style={{
                                    padding: '2.5rem',
                                    backgroundColor: '#ffffff',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 20px rgba(255, 129, 99, 0.08)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 129, 99, 0.25)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 129, 99, 0.08)';
                                    }}
                                >
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#000000' }}>{item.title}</h3>
                                    <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#555' }}>{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Project Challenge CTA with ZORA Watermark */}
                        {challengesSection.ctaHeading && (
                            <div style={{
                                marginTop: '6rem',
                                textAlign: 'center',
                                position: 'relative',
                                padding: '4rem 1rem',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    fontSize: 'clamp(8rem, 20vw, 15rem)',
                                    fontWeight: '900',
                                    color: '#f0f0f0',
                                    zIndex: 0,
                                    opacity: 0.5,
                                    userSelect: 'none',
                                    pointerEvents: 'none',
                                    whiteSpace: 'nowrap'
                                }}>
                                    ZORA
                                </div>

                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <h2 style={{
                                        fontSize: '2.5rem',
                                        fontWeight: '800',
                                        marginBottom: '2rem',
                                        color: '#1a3300'
                                    }}>
                                        {challengesSection.ctaHeading}
                                    </h2>
                                    {challengesSection.ctaButtonText && challengesSection.ctaButtonLink && (
                                        <Link
                                            to={challengesSection.ctaButtonLink}
                                            style={{
                                                display: 'inline-block',
                                                padding: '1rem 3rem',
                                                backgroundColor: '#ff8163',
                                                color: '#ffffff',
                                                fontWeight: '700',
                                                textTransform: 'uppercase',
                                                textDecoration: 'none',
                                                borderRadius: '6px',
                                                letterSpacing: '0.5px',
                                                boxShadow: '0 4px 15px rgba(255, 129, 99, 0.3)',
                                                transition: 'transform 0.2s, box-shadow 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 129, 99, 0.4)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 129, 99, 0.3)';
                                            }}
                                        >
                                            {challengesSection.ctaButtonText}
                                        </Link>
                                    )}
                                    <div style={{
                                        marginTop: '1.5rem',
                                        width: '60px',
                                        height: '4px',
                                        background: 'linear-gradient(to right, #ff8163, #ff8163)',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        borderRadius: '2px'
                                    }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* 4. BENEFITS (Bento-lite) */}
            {benefits.length > 0 && (
                <section style={{ padding: '4rem 0', backgroundColor: '#f9e6e0' }}>
                    <div className="container">
                        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Key Benefits</h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
                            {benefits.map((benefit, i) => (
                                <div key={i} style={{
                                    padding: '1.5rem', borderLeft: '3px solid #ff8163', background: '#fff',
                                    display: 'flex', alignItems: 'center', fontSize: '1.1rem', color: '#000000',
                                    borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                                }}>
                                    {benefit}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* COSTS SECTION (After Benefits) */}
            {costsSection && (
                <section style={{ padding: '4rem 0', background: '#f8f9fa' }}>
                    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        {/* Left: Text Content */}
                        <div>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem', color: '#1a3300' }}>
                                {costsSection.heading}
                            </h2>
                            {costsSection.paragraphs && costsSection.paragraphs.map((p, i) => (
                                <p key={i} style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a4a4a', marginBottom: '1.5rem' }}>
                                    {p}
                                </p>
                            ))}
                            {costsSection.buttonText && costsSection.buttonLink && (
                                <Link
                                    to={costsSection.buttonLink}
                                    style={{
                                        display: 'inline-block',
                                        padding: '1rem 2.5rem',
                                        backgroundColor: '#ff8163',
                                        color: '#ffffff',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        textDecoration: 'none',
                                        borderRadius: '6px',
                                        letterSpacing: '0.5px',
                                        boxShadow: '0 4px 15px rgba(153, 51, 0, 0.3)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#ff9e85';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#ff8163';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    {costsSection.buttonText}
                                </Link>
                            )}
                        </div>

                        {/* Right: Visual */}
                        {costsSection.image && (
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    maxWidth: '80%',
                                    margin: '0 auto'
                                }}>
                                    <img
                                        src={costsSection.image}
                                        alt={costsSection.heading}
                                        style={{ width: '100%', height: 'auto', display: 'block' }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* CUSTOM CHILDREN SECTION */}
            {children}

            {/* 5. TOOLS & TECH */}
            {tools.length > 0 && (
                <section style={{ padding: '4rem 0' }}>
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>Tools We Use</h2>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                            {tools.map((tool, i) => (
                                <span key={i} className="tool-pill">{tool}</span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 6. WHO IT IS FOR */}
            {idealFor.length > 0 && (
                <section style={{ padding: '4rem 0', borderTop: '1px solid #ffe0d6' }}>
                    <div className="container">
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '2rem' }}>Ideal For Organizations That:</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                            {idealFor.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                                    <div style={{ color: '#ff8163', marginTop: '4px' }}><FaArrowRight /></div>
                                    <p style={{ fontSize: '1.1rem', margin: 0 }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* 7. FAQ */}
            {faqs.length > 0 && (
                <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }}>
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', textAlign: 'center', color: '#1a3300' }}>FAQ</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {faqs.map((faq, i) => (
                                <div key={i} style={{ paddingBottom: '1rem' }}>
                                    <div
                                        onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                        style={{
                                            cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'
                                        }}
                                    >
                                        <h3 style={{ fontSize: '1.2rem', fontWeight: '600', margin: 0, color: '#1a3300' }}>{faq.q}</h3>
                                        <div style={{
                                            color: '#ff8163', fontSize: '1.5rem', fontWeight: '300',
                                            transform: openFAQ === i ? 'rotate(45deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.3s ease'
                                        }}>
                                            <FaPlus />
                                        </div>
                                    </div>

                                    {/* Custom Line with Dots */}
                                    <div style={{ position: 'relative', height: '1px', background: '#ff8163', width: '100%', margin: '0.5rem 0 1rem' }}>
                                        <div style={{ position: 'absolute', left: 0, top: '-2px', width: '5px', height: '5px', background: '#666', borderRadius: '1px' }}></div>
                                        <div style={{ position: 'absolute', right: 0, top: '-2px', width: '5px', height: '5px', background: '#666', borderRadius: '1px' }}></div>
                                    </div>

                                    <AnimatePresence>
                                        {openFAQ === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div style={{ padding: '0.5rem 0 0', lineHeight: '1.7', color: '#333333', fontSize: '1.05rem' }}>
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

        </div>
    );
};

export default ServiceDetailLayout;
