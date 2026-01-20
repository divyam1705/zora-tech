import React from 'react';
import { FaDatabase, FaArchive, FaNetworkWired, FaProjectDiagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SapDataManagement = () => {
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
                        src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=2000"
                        alt="SAP Data Management"
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
                            SAP Data Management
                        </h1>
                        <p style={{
                            fontSize: '1.25rem',
                            lineHeight: '1.6',
                            marginBottom: '2.5rem',
                            color: '#e0e0e0',
                            fontWeight: '400'
                        }}>
                            Architecting the foundation of your digital enterprise with precision, scale, and intelligence.
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
                            Consult an Expert
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
                        <span style={{ color: '#6b7280' }}>SAP Data Management</span>
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
                            Data: The Lifeblood of Your Enterprise
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#444',
                            marginBottom: '2rem'
                        }}>
                            In the digital age, effective data management is not just an IT task—it's a strategic imperative. Zora Technologies provides comprehensive SAP Data Management solutions that ensure your data is clean, consistent, secure, and available when you need it. From seamless migrations to S/4HANA to ongoing master data governance, we empower your business to make data-driven decisions with confidence.
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
                        {/* Card 1: S/4 HANA Migration */}
                        <Link to="/services/s4-hana-migration" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                alt="S/4 HANA Migration"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>S/4 HANA Migration</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Risk-free transition protocol. Seamlessly move your legacy systems to the modern S/4HANA landscape with minimal downtime.
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

                        {/* Card 2: Active Archiving */}
                        <Link to="/services/data-archiving" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                                alt="Active Archiving"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Active Archiving</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Intelligent lifecycle management. Reduce database growth, improve system performance, and ensure compliance with automated archiving.
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

                        {/* Card 3: Master Data Management */}
                        <Link to="/services/master-data-management" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                alt="Master Data Management"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Master Data Management</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Single source of truth governance. Establish consistent, accurate, and accountable data across your entire enterprise.
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

                        {/* Card 4: Data Integration */}
                        <Link to="/services/data-integration" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                alt="Data Integration"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Data Integration</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Seamless system unification. Connect disparate systems, applications, and data sources to create a unified, real-time ecosystem.
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

export default SapDataManagement;
