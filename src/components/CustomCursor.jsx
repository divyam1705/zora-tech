import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [cursorType, setCursorType] = useState('default'); // default, pointer, text
    const [isClicking, setIsClicking] = useState(false);

    // We use refs for position to avoid re-renders on every mousemove
    const position = useRef({ x: -100, y: -100 });

    // Mobile Touch Handling
    const [isVisible, setIsVisible] = useState(false); // Default hidden
    const isMobile = useRef(false);

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => {
            isMobile.current = window.innerWidth <= 768;
            // On desktop, always visible (unless cursor:none logic fails, but CSS handles that)
            if (!isMobile.current) setIsVisible(true);
            else setIsVisible(false); // Start hidden on mobile
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const onMouseMove = (e) => {
            if (isMobile.current) return; // Ignore mouse on mobile (touch handles it)
            position.current = { x: e.clientX, y: e.clientY };
            setIsVisible(true);
        };

        const onTouchStart = (e) => {
            if (!isMobile.current) return;
            const touch = e.touches[0];
            position.current = { x: touch.clientX, y: touch.clientY };
            setIsVisible(true);
            setIsClicking(true);
        };

        const onTouchMove = (e) => {
            if (!isMobile.current) return;
            const touch = e.touches[0];
            position.current = { x: touch.clientX, y: touch.clientY };
        };

        const onTouchEnd = () => {
            if (!isMobile.current) return;
            setIsVisible(false);
            setIsClicking(false);
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const onMouseOver = (e) => {
            if (isMobile.current) return; // Skip hover logic on mobile
            // Determine cursor type based on computed style or element type
            // ... (rest of logic same as before) ...

            // Optimization: First check tag/attributes, then computed style if needed
            const target = e.target;
            const tagName = target.tagName.toLowerCase();

            // Text Input / TextArea
            if (tagName === 'input' || tagName === 'textarea' || target.isContentEditable) {
                const type = target.getAttribute('type');
                if (!type || ['text', 'email', 'number', 'search', 'tel', 'url', 'password'].includes(type)) {
                    setCursorType('text');
                    return;
                }
            }

            // Explicit CSS cursor: text
            const compStyle = window.getComputedStyle(target).cursor;
            if (compStyle === 'text') {
                setCursorType('text');
                return;
            }

            // Clickable (Pointer)
            if (
                tagName === 'a' ||
                tagName === 'button' ||
                tagName === 'select' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button' ||
                compStyle === 'pointer'
            ) {
                setCursorType('pointer');
                return;
            }

            // Default
            setCursorType('default');
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('mouseover', onMouseOver);

        // Touch Events
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        window.addEventListener('touchend', onTouchEnd);

        let rafId;
        const animate = () => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
                // Toggle visibility
                cursorRef.current.style.opacity = isVisible ? 1 : 0;
            }
            rafId = requestAnimationFrame(animate);
        };
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseover', onMouseOver);

            window.removeEventListener('touchstart', onTouchStart);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);

            cancelAnimationFrame(rafId);
        };
    }, [isVisible]); // Re-bind if isVisible changes (though mostly for state updates)

    return (
        <div
            ref={cursorRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 99999,
                willChange: 'transform',
            }}
        >
            <div style={{
                transform: `
                    scale(${isClicking ? 0.9 : 1}) 
                    translate(${cursorType === 'text' ? '-50%' : '-2px'}, ${cursorType === 'text' ? '-50%' : '-2px'}) 
                `,
                transition: 'transform 0.1s ease-out'
            }}>

                {/* 1. DEFAULT: BOLD ARROW */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        display: cursorType === 'default' ? 'block' : 'none',
                        filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))'
                    }}
                >
                    <path
                        d="M21.5 12.5L2 2L12.5 21.5L14.5 14.5L21.5 12.5Z"
                        fill="#ff8163"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    <circle cx="8" cy="8" r="1.5" fill="black" />
                </svg>

                {/* 2. POINTER: BOLD HAND */}
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        display: cursorType === 'pointer' ? 'block' : 'none',
                        filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))'
                    }}
                >
                    {/* Index Finger Pointing Hand */}
                    {/* Simplified blocky tech style */}
                    <path
                        d="M10 16V4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V12H15V6C15 4.9 15.9 4 17 4C18.1 4 19 4.9 19 6V12H20V7C20 5.9 20.9 5 22 5C23.1 5 24 5.9 24 7V17C24 22.5 19.5 27 14 27C11 27 4.5 23  4.5 18C4.5 16 6 15 7 15L10 16Z"
                        fill="#ff8163"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    />
                    {/* Cuff */}
                    <path d="M10 27H18" stroke="black" strokeWidth="2" />
                </svg>

                {/* 3. TEXT: BOLD I-BEAM */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        display: cursorType === 'text' ? 'block' : 'none',
                        filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))'
                    }}
                >
                    {/* Top Bar */}
                    <rect x="6" y="2" width="12" height="4" fill="#ff8163" stroke="black" strokeWidth="2" />
                    {/* Bottom Bar */}
                    <rect x="6" y="18" width="12" height="4" fill="#ff8163" stroke="black" strokeWidth="2" />
                    {/* Center Column */}
                    <rect x="10" y="6" width="4" height="12" fill="#ff8163" stroke="black" strokeWidth="0" />
                    <line x1="10" y1="6" x2="10" y2="18" stroke="black" strokeWidth="2" />
                    <line x1="14" y1="6" x2="14" y2="18" stroke="black" strokeWidth="2" />
                </svg>

            </div>
        </div>
    );
};

export default CustomCursor;
