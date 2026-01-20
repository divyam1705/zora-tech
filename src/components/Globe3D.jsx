import React from 'react';
import './Globe3D.css';

const Globe3D = () => {
    // Configuration
    const R = 18; // Radius
    const U = 10; // Unit size

    // Generate rings (latitude lines)
    const rings = Array.from({ length: 15 }, (_, i) => {
        // -0.9 to 0.9 coverage
        const dp = (i - 7) / 8;

        // d is vertical distance from center
        const d = R * dp;

        // r_ring is radius of the ring at this latitude
        // r_ring = sqrt(R^2 - d^2)
        const ringRadius = Math.sqrt(Math.pow(R, 2) - Math.pow(d, 2));
        const diameter = 2 * ringRadius * U;

        const translateY = d * U;

        return {
            id: i,
            diameter, // Width & Height
            translateY,
            delay: i * -0.5 // Stagger dot animation
        };
    });

    return (
        <div className="globe-container">
            <div className="globe">
                {rings.map((ring) => (
                    <div
                        key={ring.id}
                        className="ring"
                        style={{
                            width: `${ring.diameter}px`,
                            height: `${ring.diameter}px`,
                            transform: `translate(-50%, -50%) translateY(${ring.translateY}px) rotateX(90deg)`,
                        }}
                    >
                        {/* Dot container rotates to move the dot */}
                        <div
                            className="dot-wrapper"
                            style={{ animationDelay: `${ring.delay}s` }}
                        >
                            <div className="dot"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Globe3D;
