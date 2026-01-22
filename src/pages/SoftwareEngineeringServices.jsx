import React from 'react';
import { FaCode, FaLaptopCode, FaCloud, FaApple, FaAndroid, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import cardWebDevelopment from '../assets/web-development.jpg';
import cardAndroidDevelopment from '../assets/Android-development.jpg';
import cardCloudSoftware from '../assets/card-cloud-software.jpg';

import cardDotNetDevelopment from '../assets/card-dotnet-development.jpg';

const SoftwareEngineeringServices = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '100vh',
                minHeight: '600px',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                color: '#fff'
            }}>
                {/* ... (existing hero content) ... */}
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}>
                    <img
                        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=2000"
                        alt="Software Engineering"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                    />
                    {/* Gradient Overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)'
                    }}></div>
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, padding: '0 2rem' }}>
                    <div style={{ maxWidth: '650px' }}>
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: '700',
                            lineHeight: '1.1',
                            marginBottom: '1.5rem',
                            letterSpacing: '-0.02em',
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                        }}>
                            Software Engineering
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            lineHeight: '1.6',
                            marginBottom: '2.5rem',
                            color: '#e0e0e0',
                            fontWeight: '400'
                        }}>
                            Comprehensive enterprise services of any type and scale for your effective digital transformation and IT infrastructure optimization.
                        </p>
                        <Link to="/contact" style={{
                            display: 'inline-block',
                            backgroundColor: '#fff',
                            color: '#000',
                            padding: '1rem 2rem',
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: '800',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            marginBottom: '4rem',
                            transition: 'transform 0.2s ease'
                        }}>
                            Start a Project
                        </Link>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section style={{ padding: '4rem 2rem', background: '#fff', color: '#000' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Breadcrumbs */}
                    <div style={{
                        fontSize: '0.9rem',
                        color: '#666',
                        marginBottom: '2rem',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <Link to="/" style={{ color: '#ff8163', textDecoration: 'none' }}>Home</Link>
                        <span style={{ color: '#9ca3af' }}>•</span>
                        <Link to="/services" style={{ color: '#ff8163', textDecoration: 'none' }}>Services</Link>
                        <span style={{ color: '#9ca3af' }}>•</span>
                        <span style={{ color: '#6b7280' }}>Software Engineering</span>
                    </div>

                    {/* Content */}
                    <div style={{ maxWidth: '900px' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: '800',
                            marginBottom: '1.5rem',
                            color: '#1a1a1a',
                            lineHeight: '1.2'
                        }}>
                            Building the Digital Future
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#444',
                            marginBottom: '2rem'
                        }}>
                            Our software engineering principles are rooted in scalability, security, and performance. Whether you need a robust .NET enterprise application, a high-performance mobile app, or a custom solution built from the ground up, Zora Technologies delivers code that drives business value. We leverage the latest frameworks and cloud technologies to ensure your software is future-proof and ready for growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Cards Section */}
            <section style={{ padding: '0 2rem 6rem 2rem', background: '#fff' }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {/* Card 1: .NET Development */}
                        <Link to="/services/dotnet-development" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src={cardDotNetDevelopment}
                                alt=".NET Development"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>.NET Development</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Build powerful, secure, and scalable enterprise applications with our expert .NET services.
                                </p>
                                <div style={{
                                    textDecoration: 'none',
                                    color: '#ff8163',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: 'auto'
                                }}>
                                    VIEW MORE <span style={{ fontSize: '1.1rem' }}>→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2: Custom Products */}
                        <Link to="/services/custom-software" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
                                alt="Custom Products"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Custom Products</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Build an innovative enterprise solution from scratch or enhance an ongoing project with tailored software.
                                </p>
                                <div style={{
                                    textDecoration: 'none',
                                    color: '#ff8163',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: 'auto'
                                }}>
                                    VIEW MORE <span style={{ fontSize: '1.1rem' }}>→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 3: Cloud Software */}
                        <Link to="/services/cloud-digital-transformation" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src={cardCloudSoftware}
                                alt="Cloud Software"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Cloud Software</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Accelerate your digital transformation with secure and scalable cloud infrastructure solutions.
                                </p>
                                <div style={{
                                    textDecoration: 'none',
                                    color: '#ff8163',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: 'auto'
                                }}>
                                    VIEW MORE <span style={{ fontSize: '1.1rem' }}>→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 4: Web Development */}
                        <Link to="/services/web-development" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src={cardWebDevelopment}
                                alt="Web Development"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Web Development</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Create stunning, responsive, and high-performance websites that engage users and drive conversions.
                                </p>
                                <div style={{
                                    textDecoration: 'none',
                                    color: '#ff8163',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: 'auto'
                                }}>
                                    VIEW MORE <span style={{ fontSize: '1.1rem' }}>→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 5: iOS Development */}
                        <Link to="/services/mobile-development" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                                alt="iOS Development"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>iOS Development</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Native iOS applications designed for performance and specific to the Apple ecosystem.
                                </p>
                                <div style={{
                                    textDecoration: 'none',
                                    color: '#ff8163',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: 'auto'
                                }}>
                                    VIEW MORE <span style={{ fontSize: '1.1rem' }}>→</span>
                                </div>
                            </div>
                        </Link>

                        {/* Card 6: Android Development */}
                        <Link to="/services/mobile-development" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src={cardAndroidDevelopment}
                                alt="Android Development"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Android Development</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Scalable Android apps that reach a wide audience with robust functionality and design.
                                </p>
                                <div style={{
                                    textDecoration: 'none',
                                    color: '#ff8163',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginTop: 'auto'
                                }}>
                                    VIEW MORE <span style={{ fontSize: '1.1rem' }}>→</span>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default SoftwareEngineeringServices;
