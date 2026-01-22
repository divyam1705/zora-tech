import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaMapMarkerAlt, FaEnvelope, FaPlus, FaMinus, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';


const Contact = () => {
    const navigate = useNavigate();
    // Map Location State
    const [activeLocation, setActiveLocation] = useState('usa');

    // Form Details State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [focusedInput, setFocusedInput] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(null);
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 200;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const subject = `New Inquiry from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        window.location.href = `mailto:aravinth@keerainnovations.com?subject=${encodeURIComponent(subject)}&body=${body}`;

        setShowToast(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowToast(false), 3000);
    };

    const flags = {
        usa: (
            <svg width="20" height="15" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', marginRight: '8px' }}>
                <rect width="24" height="18" rx="2" fill="#fff" />
                <rect y="2" width="24" height="2" fill="#B22234" />
                <rect y="6" width="24" height="2" fill="#B22234" />
                <rect y="10" width="24" height="2" fill="#B22234" />
                <rect y="14" width="24" height="2" fill="#B22234" />
                <rect width="10" height="9" rx="1" fill="#3C3B6E" />
                <path d="M2 2L8 7M8 2L2 7" stroke="#fff" strokeWidth="1.5" opacity="0.5" />
            </svg>
        ),
        canada: (
            <svg width="20" height="15" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', marginRight: '8px' }}>
                <rect width="24" height="18" rx="2" fill="#fff" />
                <rect x="0" width="6" height="18" fill="#FF0000" />
                <rect x="18" width="6" height="18" fill="#FF0000" />
                <path d="M12 4L14 8H16L13 10L14 14L12 12L10 14L11 10L8 8H10L12 4Z" fill="#FF0000" />
            </svg>
        ),
        india: (
            <svg width="20" height="15" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '2px', marginRight: '8px' }}>
                <rect width="24" height="18" rx="2" fill="#fff" />
                <rect width="24" height="6" fill="#FF9933" />
                <rect y="12" width="24" height="6" fill="#138808" />
                <circle cx="12" cy="9" r="2.5" stroke="#000080" strokeWidth="1.5" />
                <circle cx="12" cy="9" r="0.5" fill="#000080" />
            </svg>
        )
    };

    const locations = {
        usa: {
            title: "USA - Corporate Office",
            flag: flags.usa,
            src: "https://maps.google.com/maps?q=9516%20Lee%20Highway%2C%20Suite%20C%2C%20Fairfax%2C%20VA%2022031&t=k&z=17&output=embed&iwloc=near",
            address: "9516 Lee Highway, Suite C, Fairfax, VA 22031",
            phone: "+1-512-394-9384"
        },
        canada: {
            title: "Canada Office",
            flag: flags.canada,
            src: "https://maps.google.com/maps?q=13494%20Innis%20Lake%20Road%2C%20Caledon%2C%20ON%2C%20Canada%2C%20L7C%202Y5&t=k&z=17&output=embed&iwloc=near",
            address: "13494 Innis Lake Road, Caledon, ON, Canada, L7C 2Y5",
            phone: ""
        },
        punjab: {
            title: "Punjab Office",
            flag: flags.india,
            src: "https://maps.google.com/maps?q=Grand%20City%20Plaza%2C%20Lodhi%20Club%20Road%2C%20Ludhiana&t=k&z=17&output=embed&iwloc=near",
            address: "BU 15-17, Grand City Plaza, Lodhi Club Road, Ludhiana - 141002",
            phone: "+91-987-654-3210"
        },
        tamilnadu: {
            title: "Tamilnadu Office",
            flag: flags.india,
            src: "https://maps.google.com/maps?q=54%2C%20NRS%20Garden%2C%20Shenbakkam%2C%20Vellore&t=k&z=17&output=embed&iwloc=near",
            address: "54, NRS Garden, Shenbakkam, Vellore - 632008",
            phone: "+91-123-456-7890"
        }
    };

    const faqs = [
        { q: "What services do you offer?", a: "We offer end-to-end digital transformation, SAP services, custom software development, and AI solutions." },
        { q: "Do you work with startups?", a: "Yes, we help startups scale with robust technology foundations and MVP development." },
        { q: "How can I apply for a job?", a: "Visit our Careers page or send your resume to careers@zoratechinc.com." },
        { q: "What is your pricing model?", a: "We offer flexible engagement models including fixed-cost, time & material, and dedicated teams." },
        { q: "Do you provide post-launch support?", a: "Absolutely. We offer comprehensive AMC and managed services packages." }
    ];

    return (
        <section className="contact-section" style={{ backgroundColor: '#ffeeeaff', minHeight: '100vh', position: 'relative', overflowX: 'hidden', paddingBottom: '4rem' }}>
            {/* Mobile Back Button */}
            <div className="mobile-back-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft /> Back
            </div>



            {/* Subtle Gradient Spots for Highlight */}
            <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(127,255,0,0.05) 0%, rgba(255,255,255,0) 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

            <div className="container" style={{ paddingTop: '140px', position: 'relative', zIndex: 1 }}>

                {/* 1. HEADER */}
                <motion.div
                    className="contact-header-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h1 className="contact-main-title" style={{ fontSize: '4.5rem', fontWeight: '900', color: '#000', letterSpacing: '-2px', lineHeight: '1', marginBottom: '1rem' }}>
                        Let's Create <br />
                        <span style={{ color: '#ff8163', textShadow: '0 0 1px rgba(0,0,0,0.1)', WebkitTextStroke: '1px #000' }}>Something Unique</span>
                    </h1>
                    <p className="contact-sub-text" style={{ fontSize: '1.2rem', color: '#000', maxWidth: '600px', margin: '0 auto' }}>
                        Ready to transform your business? Drop us a line, visit our offices, or send a smoke signal. We're here to help.
                    </p>
                </motion.div>

                {/* 2. SPLIT GLASS LAYOUT (High Contrast) */}
                <div className="contact-content-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>

                    {/* LEFT: Contact Info */}
                    <motion.div
                        className="contact-info-card"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            background: '#fff',
                            border: '1px solid #ff8163',
                            borderRadius: '24px',
                            padding: '3rem',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                            fontFamily: 'inherit'
                        }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#000', marginBottom: '2rem' }}>Get in Touch</h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: '#000', padding: '1rem', borderRadius: '12px', color: '#ff8163', fontSize: '1.5rem' }}><FaPhone /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#000', margin: '0 0 0.5rem 0' }}>Call Us</h3>
                                    <p style={{ color: '#000', margin: 0, fontSize: '1.1rem' }}>(571) 481-8861</p>
                                    <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>Mon-Fri, 8am-5:30pm CT</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: '#000', padding: '1rem', borderRadius: '12px', color: '#ff8163', fontSize: '1.5rem' }}><FaEnvelope /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#000', margin: '0 0 0.5rem 0' }}>Email Us</h3>
                                    <p style={{ color: '#000', margin: 0, fontSize: '1.1rem' }}>contact@zoratechnologies.com</p>
                                    <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.2rem 0 0 0' }}>We typically reply within 2 hours.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ background: '#000', padding: '1rem', borderRadius: '12px', color: '#ff8163', fontSize: '1.5rem' }}><FaMapMarkerAlt /></div>
                                <div>
                                    <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#000', margin: '0 0 0.5rem 0' }}>Visit Us</h3>
                                    <p style={{ color: '#000', margin: 0, fontSize: '1.1rem' }}>9516 Lee Highway, Suite C</p>
                                    <p style={{ color: '#000', margin: 0, fontSize: '1.1rem' }}>Fairfax, VA 22031</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '3rem', borderTop: '1px solid #eee', paddingTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#000', marginBottom: '1rem' }}>Follow Us</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                                    <a key={i} href="#" style={{
                                        width: '45px', height: '45px', borderRadius: '50%', background: '#fff',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: '#000', border: '2px solid #000', textDecoration: 'none', transition: 'all 0.3s'
                                    }}
                                        onMouseOver={(e) => { e.currentTarget.style.background = '#ff8163'; e.currentTarget.style.borderColor = '#ff8163'; }}
                                        onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#000'; }}
                                    >
                                        <Icon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Form */}
                    <motion.div
                        className="contact-form-card"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{
                            background: '#fff',
                            borderRadius: '24px',
                            padding: '3rem',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid #f0f0f0'
                        }}
                    >
                        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#000', marginBottom: '2rem' }}>Send a Message</h2>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#000', fontWeight: '700', fontSize: '0.9rem' }}>YOUR NAME</label>
                                <input
                                    type="text" name="name" required value={formData.name} onChange={handleChange}
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '12px', border: '2px solid #ccc',
                                        background: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s', color: '#000', fontFamily: 'inherit'
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = '#ff8163'; e.target.style.background = '#ffeeeaff'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#ccc'; e.target.style.background = '#fff'; }}
                                    placeholder="e.g. John Doe"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#000', fontWeight: '700', fontSize: '0.9rem' }}>YOUR EMAIL</label>
                                <input
                                    type="email" name="email" required value={formData.email} onChange={handleChange}
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '12px', border: '2px solid #ccc',
                                        background: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s', color: '#000', fontFamily: 'inherit'
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = '#ff8163'; e.target.style.background = '#ffeeeaff'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#ccc'; e.target.style.background = '#fff'; }}
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#000', fontWeight: '700', fontSize: '0.9rem' }}>MESSAGE</label>
                                <textarea
                                    name="message" required value={formData.message} onChange={handleChange} rows="4"
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '12px', border: '2px solid #ccc',
                                        background: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s', color: '#000', fontFamily: 'inherit'
                                    }}
                                    onFocus={(e) => { e.target.style.borderColor = '#ff8163'; e.target.style.background = '#ffeeeaff'; }}
                                    onBlur={(e) => { e.target.style.borderColor = '#ccc'; e.target.style.background = '#fff'; }}
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button type="submit" style={{
                                background: '#000', color: '#ff8163', padding: '1.2rem', borderRadius: '50px',
                                border: '2px solid #000', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)', marginTop: '1rem', transition: 'all 0.2s'
                            }}
                                onMouseOver={(e) => { e.target.style.background = '#ff8163'; e.target.style.color = '#000'; }}
                                onMouseOut={(e) => { e.target.style.background = '#000'; e.target.style.color = '#ff8163'; }}
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* 3. MAP SECTION */}
                <motion.div
                    className="contact-map-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{
                        background: '#fff', borderRadius: '24px', overflow: 'hidden',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.05)', border: '1px solid #ff8163'
                    }}
                >
                    <div className="map-locations-container" style={{ position: 'relative' }}>
                        {/* Scroll Buttons (Mobile Only via CSS) */}
                        <button className="map-scroll-btn map-scroll-left" onClick={() => scroll('left')}><FaChevronLeft /></button>
                        <button className="map-scroll-btn map-scroll-right" onClick={() => scroll('right')}><FaChevronRight /></button>

                        <div ref={scrollRef} style={{ padding: '2rem', display: 'flex', gap: '1rem', borderBottom: '1px solid #f0f0f0', overflowX: 'auto', scrollBehavior: 'smooth', scrollbarWidth: 'none' }}>
                            {Object.keys(locations).map((loc) => (
                                <button
                                    key={loc}
                                    onClick={() => setActiveLocation(loc)}
                                    style={{
                                        padding: '0.8rem 2rem', borderRadius: '50px', border: 'none', cursor: 'pointer', fontWeight: '700',
                                        background: activeLocation === loc ? '#ff8163' : '#f0f0f0',
                                        color: activeLocation === loc ? '#000' : '#888',
                                        transition: 'all 0.3s',
                                        display: 'flex', alignItems: 'center', gap: '0.5rem'
                                    }}
                                >
                                    {locations[loc].flag}
                                    {locations[loc].title.split(' - ')[0]}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ height: '400px', width: '100%', position: 'relative' }}>
                        <iframe
                            src={locations[activeLocation].src}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }} /* Normal Map Colors */
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </motion.div>

                {/* 4. FAQ SECTION */}
                <div className="contact-faq-section" style={{ marginTop: '5rem', maxWidth: '800px', margin: '5rem auto 0' }}>
                    <h2 className="contact-faq-title" style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#000' }}>Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {faqs.map((faq, i) => (
                            <div key={i} style={{ paddingBottom: '0.5rem' }}>
                                <div
                                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                                    style={{
                                        cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'
                                    }}>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#000', margin: 0 }}>{faq.q}</h3>
                                    <div style={{
                                        color: '#ff8163', fontSize: '1.5rem', fontWeight: '300',
                                        transform: openFAQ === i ? 'rotate(45deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        <FaPlus />
                                    </div>
                                </div>

                                {/* Custom Line with Dots (Black dots, Green line) */}
                                <div style={{ position: 'relative', height: '1px', background: '#ff8163', width: '100%', margin: '0.5rem 0 1rem' }}>
                                    <div style={{ position: 'absolute', left: 0, top: '-2px', width: '5px', height: '5px', background: '#000', borderRadius: '1px' }}></div>
                                    <div style={{ position: 'absolute', right: 0, top: '-2px', width: '5px', height: '5px', background: '#000', borderRadius: '1px' }}></div>
                                </div>

                                <AnimatePresence>
                                    {openFAQ === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            style={{ overflow: 'hidden' }}>
                                            <div style={{ padding: '0.5rem 0 0', color: '#333', lineHeight: '1.6', fontSize: '1.05rem' }}>
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Toast Notification */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        style={{
                            position: 'fixed', bottom: '2rem', right: '2rem',
                            background: '#ff8163', color: '#000', padding: '1rem 2rem',
                            borderRadius: '50px', fontWeight: 'bold', boxShadow: '0 10px 30px rgba(196, 111, 15, 0.4)',
                            zIndex: 100
                        }}
                    >
                        Message Sent Successfully! 🚀
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
