import React from 'react';
import { FaAward, FaHandshake, FaCertificate, FaMedal } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AiInnovationServices = () => {
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
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
                        alt="AI & Innovation"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                    />
                    {/* Gradient Overlay for Text Readability */}
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
                            AI & Innovation Services
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            lineHeight: '1.6',
                            marginBottom: '2.5rem',
                            color: '#e0e0e0',
                            fontWeight: '400'
                        }}>
                            Unlock the future of business with cutting-edge Artificial Intelligence and innovative technology solutions.
                        </p>

                        <Link to="/contact" style={{
                            display: 'inline-block',
                            backgroundColor: '#fff',
                            color: '#000',
                            padding: '1rem 2rem',
                            borderRadius: '50px', // Pill shape
                            fontSize: '1rem',
                            fontWeight: '800',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                            marginBottom: '4rem',
                            transition: 'transform 0.2s ease'
                        }}>
                            Talk to an AI Architect
                        </Link>

                        {/* Badges Section - Adapted for AI */}
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            {/* Badge 1 */}
                            <div className="badge-item" style={{ textAlign: 'center', opacity: 0.9 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ccc' }}><FaMedal /></div>
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#ccc' }}>AI<br />Pioneers</div>
                            </div>

                            {/* Badge 2 */}
                            <div className="badge-item" style={{ textAlign: 'center', opacity: 0.9 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ccc' }}><FaCertificate /></div>
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#ccc' }}>Top Rated<br />Innovators</div>
                            </div>

                            {/* Badge 3 */}
                            <div className="badge-item" style={{ textAlign: 'center', opacity: 0.9 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ccc' }}><FaHandshake /></div>
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#ccc' }}>Industry<br />Leaders</div>
                            </div>
                        </div>

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
                        <span style={{ color: '#6b7280' }}>AI & Innovation</span>
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
                            Transforming Industries with Intelligent Solutions
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#444',
                            marginBottom: '2rem'
                        }}>
                            At Zora Technologies, we don't just follow trends; we set them. Our AI & Innovation Hub is dedicated to helping businesses harness the transformative power of Artificial Intelligence, Machine Learning, and Data Analytics. From automating complex workflows to generating creative content and predicting market shifts, our solutions are designed to give you a definitive competitive edge in the digital era.
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
                        {/* Card 1: AI Development Services */}
                        <Link to="/services/ai-development" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
                                alt="AI Development Services"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>AI development services</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Comprehensive AI development solutions tailored to your business needs, from concept to deployment.
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

                        {/* Card 2: Military Drone R&D Services */}
                        <Link to="/services/drone-rnd" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800"
                                alt="Military Drone R&D"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Military drone R&D services</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Advanced research and development for autonomous aerial systems and strategic defense applications.
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

                        {/* Card 3: ML/AI Development */}
                        <Link to="/services/ai-development" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800"
                                alt="ML/AI Development"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>ML/Ai development</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Build predictive models and neural networks that learn from your data to drive intelligent decision-making.
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

                        {/* Card 4: Computer Vision Solutions */}
                        <Link to="/services/computer-vision" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
                                alt="Computer Vision Solutions"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Computer vision solutions</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Enable systems to interpret visual data with high accuracy for security, quality control, and analysis.
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

                        {/* Card 5: Medical Device Integration */}
                        <Link to="/services/medical-device-integration" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                alt="Medical Device Integration"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Medical device integration</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Seamlessly connect medical devices with software ecosystems to enhance data flow and patient care.
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

                        {/* Card 6: AI Agent Development Services */}
                        <Link to="/services/ai-agent-development" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800"
                                alt="AI Agent Development"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Ai agent development services</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Create intelligent agents capable of autonomous decision-making and complex task execution.
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

export default AiInnovationServices;
