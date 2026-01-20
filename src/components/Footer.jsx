import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer" style={{ backgroundColor: '#1a1b1e', color: '#fff', paddingTop: '4rem', paddingBottom: '2rem', fontFamily: 'Outfit' }}>
            <div className="container">
                <style>{`
                    .footer-grid {
                        display: grid;
                        grid-template-columns: repeat(6, 1fr);
                        gap: 2rem;
                        margin-bottom: 4rem;
                    }
                    .footer-col h4 {
                        font-size: 0.9rem;
                        font-weight: 700;
                        text-transform: uppercase;
                        margin-bottom: 1.5rem;
                        color: #fff;
                        letter-spacing: 0.5px;
                    }
                    .footer-col ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }
                    .footer-col li {
                        margin-bottom: 0.8rem;
                    }
                    .footer-col a {
                        color: #b0b0b0;
                        text-decoration: none;
                        font-size: 0.9rem;
                        transition: color 0.2s;
                    }
                    .footer-col a:hover {
                        color: #fff;
                    }
                    .footer-divider {
                        height: 1px;
                        background-color: #333;
                        margin: 4rem 0;
                        width: 100%;
                    }
                    .locations-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 2rem;
                        margin-bottom: 4rem;
                    }
                    .location-item h4 {
                        font-size: 0.9rem;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: #fff;
                        margin-bottom: 1rem;
                    }
                    .location-item p {
                        font-size: 0.85rem;
                        color: #b0b0b0;
                        line-height: 1.6;
                        margin: 0;
                    }
                    @media (max-width: 1024px) {
                        .footer-grid { grid-template-columns: repeat(3, 1fr); }
                        .locations-grid { grid-template-columns: repeat(2, 1fr); }
                    }
                    @media (max-width: 768px) {
                        .footer-grid { grid-template-columns: repeat(2, 1fr); }
                        .locations-grid { grid-template-columns: 1fr; }
                    }
                `}</style>

                {/* Top Links Section */}
                <div className="footer-grid">
                    {/* Column 1: SAP Data Management */}
                    <div className="footer-col">
                        <h4>SAP DATA MANAGEMENT</h4>
                        <ul>
                            <li><Link to="/services/s4-hana-migration">S/4 HANA Data Migration</Link></li>
                            <li><Link to="/services/data-archiving">Data Archiving</Link></li>
                            <li><Link to="/services/master-data-management">Master Data Management</Link></li>
                            <li><Link to="/services/data-integration">Data Integration</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: SAP Services */}
                    <div className="footer-col">
                        <h4>SAP SERVICES</h4>
                        <ul>
                            <li><Link to="/services/sap-implementation">SAP Implementation</Link></li>
                            <li><Link to="/services/s4-hana-migration">S/4HANA Migration</Link></li>
                            <li><Link to="/services/sap-consulting">SAP Consulting</Link></li>
                            <li><Link to="/services/sap-managed-services">Managed Services</Link></li>
                            <li><Link to="/services/sap-security">SAP Security</Link></li>
                            <li><Link to="/services/rise-with-sap">RISE with SAP</Link></li>
                            <li><Link to="/services/sap-fiori">SAP Fiori</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Software Engineering */}
                    <div className="footer-col">
                        <h4>SOFTWARE ENGINEERING</h4>
                        <ul>
                            <li><Link to="/services/dotnet-development">.NET Development</Link></li>
                            <li><Link to="/services/asp-net-development">ASP.NET Development</Link></li>
                            <li><Link to="/services/web-development">Web Development</Link></li>
                            <li><Link to="/services/mobile-development">Mobile Development</Link></li>
                            <li><Link to="/services/cloud-digital-transformation">Cloud Software</Link></li>
                            <li><Link to="/services/custom-software">Custom Software</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: AI & Innovation */}
                    <div className="footer-col">
                        <h4>AI & INNOVATION</h4>
                        <ul>
                            <li><Link to="/services/ai-development">AI Development</Link></li>
                            <li><Link to="/services/drone-rnd">Drone R&D</Link></li>
                            <li><Link to="/services/ai-development">ML/AI Development</Link></li>
                            <li><Link to="/services/computer-vision">Computer Vision</Link></li>
                            <li><Link to="/services/medical-device-integration">Medical Device Integration</Link></li>
                            <li><Link to="/services/ai-agent-development">AI Agents</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Industries */}
                    <div className="footer-col">
                        <h4>INDUSTRIES</h4>
                        <ul>
                            <li><Link to="/solution/manufacturing">Manufacturing</Link></li>
                            <li><Link to="/solution/retail">Retail</Link></li>
                            <li><Link to="/solution/financial">Banking & Finance</Link></li>
                            <li><Link to="/solution/healthcare">Healthcare</Link></li>
                            <li><Link to="/solution/automotive">Automotive</Link></li>
                            <li><Link to="/solution/logistics">Logistics</Link></li>
                            <li><Link to="/solution/oil-gas">Oil & Gas</Link></li>
                        </ul>
                    </div>

                    {/* Column 6: Company & Connect */}
                    <div className="footer-col">
                        <h4>COMPANY</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/career">Careers</Link></li>
                            <li><Link to="/partnership">Partners</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Use</Link></li>
                        </ul>

                        <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>CONNECT</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#b0b0b0'}>
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#b0b0b0', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#b0b0b0'}>
                                <FaTwitter size={24} />
                            </a>
                            <a href="mailto:hello@zoratech.com" style={{ color: '#b0b0b0', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#b0b0b0'}>
                                <FaEnvelope size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                {/* Locations Section */}
                <div className="locations-grid">
                    <div className="location-item">
                        <h4>USA</h4>
                        <p>9516 Lee Highway, Suite C,<br />Fairfax, VA 22031</p>
                    </div>
                    <div className="location-item">
                        <h4>PUNJAB, INDIA</h4>
                        <p>BU 15-17, Grand City Plaza,<br />Lodhi Club Road, Ludhiana - 141002</p>
                    </div>
                    <div className="location-item">
                        <h4>TAMILNADU, INDIA</h4>
                        <p>54, NRS Garden,<br />Shenbakkam, Vellore - 632008</p>
                    </div>
                </div>

                <div className="footer-divider" style={{ margin: '2rem 0' }}></div>

                {/* Bottom Branding */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <img
                            src="/zora-logo.png"
                            alt="Zora Logo"
                            style={{ height: '40px', width: 'auto', filter: 'invert(1) brightness(2)', borderRadius: '6px' }}
                        />
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Zora Technologies</span>
                    </div>
                    <p style={{ color: '#666', fontSize: '0.8rem', margin: 0 }}>&copy; {new Date().getFullYear()} Zora Technologies Inc. All rights reserved.</p>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
