import React, { useEffect, useRef } from 'react';

const Interactive3DBox = () => {
    const containerRef = useRef(null);
    const buttonRef = useRef(null);
    const glowRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const button = buttonRef.current;
        const buttonGlow = glowRef.current;

        if (!container || !button || !buttonGlow) return;

        // Config
        const rotationForce = 0.01; // Increased sensitivity (lower value = faster rotation)

        // Initial Position calculation
        // We need to recalculate this if the window resizes or layout changes, 
        // but for now simple offset gets us started.
        let buttonPos = {
            x: container.getBoundingClientRect().left + container.offsetWidth / 2,
            y: container.getBoundingClientRect().top + container.offsetHeight / 2
        };

        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Recalculate pos on move to be safer with scrolls
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate rotation based on cursor distance from center of the button
            const rotateX = (mouseY - centerY) / (window.innerHeight * rotationForce);
            const rotateY = (mouseX - centerX) / (window.innerWidth * rotationForce);

            // Apply transforms
            // Note: The user snippet used specific +/- signs. 
            // -1 * rotateX typically feels like "looking at" the 3D object (inverse control).
            // Let's stick to the snippet's logic roughly but ensure it feels right.

            button.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
            buttonGlow.style.transform = `rotateX(${rotateX}deg) rotateY(${-rotateY}deg)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="box-container" ref={containerRef}>
            <div className="button-3d" ref={buttonRef}>
                <div className="button_glow" ref={glowRef}></div>

                {/* Faces */}
                {/* Faces */}
                <div className="button_side button_front"></div>
                <div className="button_side button_back"></div>
                <div className="button_side button_right"></div>
                <div className="button_side button_left"></div>
                <div className="button_side button_top"></div>
                <div className="button_side button_bottom"></div>
            </div>
        </div>
    );
};

export default Interactive3DBox;
