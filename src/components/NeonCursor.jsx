// @ts-nocheck
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import './NeonCursor.css';

const NeonCursor = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
    });
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Default hidden until interaction
    const lastTouchTime = useRef(0);
    const trailControls = useAnimation();
    const glowControls = useAnimation();

    const handleMouseMove = useCallback((e) => {
        // Ignore mouse events if touch was recent (avoids double firing on mobile)
        if (Date.now() - lastTouchTime.current < 2000) return;

        setIsVisible(true);
        setPosition((prev) => ({
            ...prev,
            x: e.clientX,
            y: e.clientY,
        }));
    }, []);

    const handleTouchStart = useCallback((e) => {
        lastTouchTime.current = Date.now();
        setIsVisible(true);
        const touch = e.touches[0];
        setPosition((prev) => ({
            ...prev,
            x: touch.clientX,
            y: touch.clientY,
        }));
    }, []);

    const handleTouchMove = useCallback((e) => {
        lastTouchTime.current = Date.now();
        const touch = e.touches[0];
        setPosition((prev) => ({
            ...prev,
            x: touch.clientX,
            y: touch.clientY,
        }));
    }, []);

    const handleTouchEnd = useCallback(() => {
        lastTouchTime.current = Date.now();
        setIsVisible(false);
    }, []);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = useCallback(
        (e) => {
            const target = e.target;
            if (target.matches('a, button, input, [data-hover="true"]')) {
                setIsHovering(true);
                void trailControls.start({
                    scale: 1.5,
                    borderColor: 'rgb(255, 150, 50)',
                    borderWidth: '3px',
                });
                void glowControls.start({
                    scale: 2,
                    opacity: 0.8,
                });
            }
        },
        [trailControls, glowControls]
    );

    const handleMouseOut = useCallback(() => {
        setIsHovering(false);
        void trailControls.start({
            scale: 1,
            borderColor: 'rgb(236, 101, 23)',
            borderWidth: '2px',
        });
        void glowControls.start({
            scale: 1,
            opacity: 0.4,
        });
    }, [trailControls, glowControls]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mouseout', handleMouseOut);

        // Touch events
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mouseout', handleMouseOut);

            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleMouseMove, handleMouseOver, handleMouseOut, handleTouchStart, handleTouchMove, handleTouchEnd]);

    return (
        <div className='neon-cursor-container' style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.2s ease' }}>
            {/* Main cursor dot */}
            <motion.div
                className='cursor-main'
                animate={{
                    x: position.x - 10,
                    y: position.y - 10,
                    scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
                }}
                transition={{
                    type: 'spring',
                    damping: 20,
                    stiffness: 400,
                    mass: 0.5,
                }}
            />

            {/* Trailing circle */}
            <motion.div
                className='cursor-trail'
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                }}
                transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 200,
                    mass: 0.8,
                }}
                initial={false}
            />

            {/* Outer glow */}
            <motion.div
                className='cursor-glow'
                animate={{
                    x: position.x - 30,
                    y: position.y - 30,
                }}
                transition={{
                    type: 'spring',
                    damping: 40,
                    stiffness: 150,
                    mass: 1,
                }}
                initial={false}
            />
        </div>
    );
};

export default NeonCursor;
