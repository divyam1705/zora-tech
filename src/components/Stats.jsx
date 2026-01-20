import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
    const statsData = [
        { number: 10, suffix: "+", label: "Years of Digital Innovation" },
        { number: 100, suffix: "+", label: "Successful Projects" },
        { number: 10, suffix: "+", label: "Technology Experts" },
        { number: 10, suffix: "+", label: "Specialized Domains" }
    ];

    // Counter component with animation
    const Counter = ({ target, suffix, duration = 2 }) => {
        const [count, setCount] = useState(0);
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        useEffect(() => {
            if (!isInView) return;

            let startTime;
            let animationFrame;

            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(easeOutQuart * target);

                setCount(currentCount);

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(target);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        }, [isInView, target, duration]);

        return (
            <span ref={ref}>
                {count}{suffix}
            </span>
        );
    };

    return (
        <>
            <section className="premium-stats-section">
                <div className="container">
                    {/* Top Row: Split Headline & Description */}
                    <div className="stats-grid-top">
                        <motion.h2
                            className="stats-headline-large"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            Zora Technologies Inc. is a <span style={{ color: '#ff8163' }}>Trusted Partner</span> for Digital Transformation
                        </motion.h2>

                        <motion.div
                            className="stats-description-text"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p>
                                Zora Technologies is a global system integrator and a top-tier consultancy dedicated to delivering professional, customer-centric solutions and services. Founded on the principles of technological excellence and personalized service, Zora Technologies has established itself as a trusted partner in the digital transformation journey of our clients worldwide.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom Row: Stats Grid */}
                    <div className="stats-grid-bottom">
                        {statsData.map((stat, index) => (
                            <motion.div
                                className="stat-item"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <div className="stat-number">
                                    <Counter target={stat.number} suffix={stat.suffix} duration={2} />
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Expertise Section */}
                    <motion.div
                        style={{
                            marginTop: '6rem',
                            textAlign: 'center',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            paddingTop: '4rem'
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="stats-headline-large" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                            Expertise We Bring to the <span style={{ color: '#ff8163' }}>Table</span>
                        </h3>
                        <p className="stats-description-text" style={{ margin: '0 auto' }}>
                            We've accumulated a wealth of knowledge in both SAP and custom software development areas to support you every step of the way. No matter how complex your project is.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Caution Tape */}
            <div className="caution-tape-container" style={{ width: '100%', overflow: 'hidden' }}>
                <div className="caution-tape-pattern"></div>
                <div className="caution-tape-content">
                    <div className="caution-text">ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING •</div>
                    <div className="caution-text">ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING •</div>
                </div>
            </div>
        </>
    );
};

export default Stats;
