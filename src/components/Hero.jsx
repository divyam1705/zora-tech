import React from 'react';
import { Link } from 'react-router-dom';

import heroBg from '../assets/hero-cityscape.jpg';

const Hero = () => {
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
            }}
        >
            {/* Dark Overlay for Text Readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.6)',
                zIndex: 1
            }}></div>

            <div className="container hero-container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-content">
                    <h1 className="hero-headline" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        {/* Line 1 */}
                        <span
                            className="typing-container type-1"
                            style={{
                                animation: 'typing 1.5s steps(30, end) forwards',
                                animationDelay: '0s',
                                width: '0',
                            }}
                        >
                            Empowering Your Data,
                        </span>{' '}

                        {/* Line 2 */}
                        <span
                            className="typing-container type-2"
                            style={{
                                animation: 'typing 1.2s steps(25, end) forwards',
                                animationDelay: '1.5s', // Starts after Line 1
                                width: '0',
                            }}
                        >
                            Accelerating Your
                        </span>{' '}

                        {/* Line 3 */}
                        <span
                            className="typing-container hero-block type-3"
                            style={{
                                animation: 'typing 1s steps(20, end) forwards',
                                animationDelay: '2.7s', // Starts after Line 2
                                width: '0',
                                borderRight: 'none',
                                borderColor: '#ffffff' // Cursor color
                            }}
                        >
                            Transformation
                        </span>
                    </h1>

                    <Link to="/contact" className="cta-button" style={{ borderColor: '#fff' }}>
                        GET STARTED TODAY
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
