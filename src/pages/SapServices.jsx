import React from 'react';
import { FaAward, FaHandshake, FaCertificate, FaMedal } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SapServices = () => {
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
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2000"
                        alt="SAP Professional"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)'
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
                            SAP Services and Support
                        </h1>

                        <p style={{
                            fontSize: '1.25rem',
                            lineHeight: '1.6',
                            marginBottom: '2.5rem',
                            color: '#e0e0e0',
                            fontWeight: '400'
                        }}>
                            Jumpstart your SAP implementation journey or improve current SAP workflows.
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
                            Expert Consultation
                        </Link>

                        {/* Badges Section */}
                        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            {/* Badge 1: Gold Partner */}
                            <div className="badge-item" style={{ textAlign: 'center', opacity: 0.9 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ccc' }}><FaMedal /></div>
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#ccc' }}>SAP<br />Gold Partner</div>
                            </div>

                            {/* Badge 2: Certified */}
                            <div className="badge-item" style={{ textAlign: 'center', opacity: 0.9 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ccc' }}><FaCertificate /></div>
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#ccc' }}>Certified<br />Company</div>
                            </div>

                            {/* Badge 3: Partners */}
                            <div className="badge-item" style={{ textAlign: 'center', opacity: 0.9 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ccc' }}><FaHandshake /></div>
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#ccc' }}>Strategic<br />Partners</div>
                            </div>

                            {/* Badge 4: Awards */}
                            <div className="badge-item" style={{ textAlign: 'center', opacity: 0.9 }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ccc' }}><FaAward /></div>
                                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 'bold', color: '#ccc' }}>Industry<br />Awards</div>
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
                        <span style={{ color: '#6b7280' }}>SAP services</span>
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
                            Maximize Performance via Zora’s End-To-End SAP Expertise
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#444',
                            marginBottom: '2rem'
                        }}>
                            Operating as an SAP Gold Partner, Zora provides extensive, field-tested knowledge in SAP ERP. For over 20 years, our team has partnered with SAP to deliver complex solutions for elite international firms. Furthermore, we facilitate collaborative software deployment and visionary design thinking workshops. Through this long-term, synergistic relationship, we have emerged as a premier full-cycle SAP authority. Utilize Zora’s elite services to optimize your operations and drive lasting commercial success!
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
                        {/* Card 1: Implementation */}
                        <Link to="/services/sap-implementation" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                                alt="Implementation"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Implementation</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Seamlessly integrate SAP ERP into existing business operations with our team of certified SAP professionals. We work closely with you throughout the implementation to understand your unique needs and transform them into an actionable delivery plan.
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

                        {/* Card 2: Integration */}
                        <Link to="/services/sap-integration" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                alt="Integration"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Integration</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Connect SAP with the current IT landscape while maintaining uninterrupted data flows and integrity. Whether you need to integrate SAP with third-party applications, a legacy system, or a cloud-based platform, we will successfully perform any of these tasks with data security in mind.
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

                        {/* Card 3: Migration */}
                        <Link to="/services/sap-migration" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                alt="Migration"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP S/4HANA migration</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Leverage the latest SAP solutions by migrating to SAP S/4HANA with confidence! We make the migration process smooth by thoroughly assessing the current data infrastructure and creating a step-by-step, risk-free migration roadmap.
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

                        {/* Card 4: SAP Consulting */}
                        <Link to="/services/sap-consulting" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                                alt="SAP Consulting"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP consulting</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Effortlessly navigate the complexities of SAP solutions and maximize their value for your business with LeverX's insightful business knowledge of the industry and hands-on technical expertise, which we combine to define your SAP implementation strategy. We support you at every step of the process, from discovery and software design to delivery and support. We support your business growth with SAP ERP.
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

                        {/* Card 5: SAP Security Services */}
                        <Link to="/services/sap-security" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                                alt="SAP Security Services"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP security services</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Protect your SAP system from cyber threats and vulnerabilities with our end-to-end security services, which include real-time risk assessment, vulnerability management, and the implementation of robust security solutions. We safeguard your mission-critical information and achieve full and ongoing compliance of your SAP environment with industry standards.
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

                        {/* Card 6: RISE with SAP */}
                        <Link to="/services/rise-with-sap" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                alt="RISE with SAP"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>RISE with SAP</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Step into the future with RISE with SAP, a solution that fosters digital transformation. We help you modernize the existing SAP ERP with a cloud-based solution to enable better business agility and scalability. Our services cover strategy, implementation and post-release support to ensure you can continuously harness the full potential of RISE with SAP.
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

                        {/* Card 7: SAP Application Management Services */}
                        <Link to="/services/sap-ams" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                alt="SAP Application Management Services"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP Application Management Services</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    We provide proactive and continuous support for your SAP applications through their constant performance monitoring, quality assurance, maintenance, and optimization. With our services, you can reduce downtime, boost productivity, and focus on your core business while we handle the complexities of your SAP environment.
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

                        {/* Card 8: SAP Support */}
                        <Link to="/services/sap-support" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="SAP support"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP support</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    With our timely assistance, keep your SAP systems running flawlessly! The LeverX team will resolve your issues by providing ongoing system maintenance. Ensure stable, uninterrupted performance of your SAP ERP and quickly solve any business challenges.
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

                        {/* Card 9: SAP Rollout */}
                        <Link to="/services/sap-rollout" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                                alt="SAP rollout"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP rollout</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Seamlessly extend your existing SAP configuration from a distinct unit or location within the organization to its other parts. We provide dedicated SAP Implementation Rollout services to deliver a consistent SAP environment at the enterprise scale.
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

                        {/* Card 10: SAP managed services */}
                        <Link to="/services/sap-managed-services" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"
                                alt="SAP managed services"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP managed services</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Ensure the seamless operation of your SAP systems with our proactive managed services. We take care of your system's maintenance, upgrades, and performance optimization, allowing you to focus on strategic business goals while we handle the technical complexities. Count on LeverX for 24/7 support and uninterrupted performance of your SAP systems.
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

                        {/* Card 11: SAP licenses */}
                        <Link to="/services/sap-licenses" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
                                alt="SAP licenses"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP licenses</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    LeverX helps you choose the right SAP licenses for your business needs, while ensuring compliance and cost-effectiveness. We guide you every step of the way, from license selection to implementation, so you can confidently use SAP solutions without worrying about legal issues.
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

                        {/* Card 12: SAP BTP Integration */}
                        <Link to="/services/sap-on-cloud" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                alt="SAP on Cloud"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP on Cloud</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Running SAP on the cloud offers unparalleled agility and innovation potential. Whether you are considering a greenfield implementation or migrating an existing landscape, Zora Technologies provides the expertise to ensure a smooth journey.
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

                        {/* Card 13: SAP Fiori */}
                        <Link to="/services/sap-fiori" className="sap-service-card" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                            <img
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                                alt="SAP Fiori"
                                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                            />
                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>SAP on Cloud</h3>
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2rem', flex: 1 }}>
                                    Employees today expect their work software to be as intuitive as the apps they use at home. SAP Fiori delivers this promise by reimagining the SAP user experience. It shifts the focus from functions to roles, giving users exactly what they need to do their job in a simple, tiled interface.
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

export default SapServices;
