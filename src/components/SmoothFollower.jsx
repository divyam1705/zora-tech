import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function SmoothFollower() {
    const mousePosition = useRef({ x: 0, y: 0 });

    const dotPosition = useRef({ x: 0, y: 0 });
    const borderDotPosition = useRef({ x: 0, y: 0 });

    const [renderPos, setRenderPos] = useState({
        dot: { x: 0, y: 0 },
        border: { x: 0, y: 0 },
    });
    const [isHovering, setIsHovering] = useState(false);

    // Smoothness factors
    const DOT_SMOOTHNESS = 0.2;
    const BORDER_DOT_SMOOTHNESS = 0.1;

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePosition.current = { x: e.clientX, y: e.clientY };

            // Check if hovering over the restricted area (Specialized Expertise section)
            // We use document.elementFromPoint or check the target path if available, 
            // but simply checking the target's closest ancestor is efficient.
            const target = e.target;
            // The user specifically mentioned "software animation and AI innovation container"
            // We'll target the common class for both cards: .expertise-card
            if (target && target.closest('.expertise-card')) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add event listeners
        window.addEventListener("mousemove", handleMouseMove);

        // Attach hover listeners to interactive elements
        // We'll use a MutationObserver or just run this periodically if DOM changes,
        // but for now, we'll just run it on mount and maybe use a delegation approach or global selector.
        // A more robust way is to use event delegation on document.body for 'mouseover'
        // but we'll stick to the user's logic pattern for now.
        const addHoverListeners = () => {
            const interactiveElements = document.querySelectorAll("a, button, img, input, textarea, select, .clickable");
            interactiveElements.forEach((element) => {
                element.addEventListener("mouseenter", handleMouseEnter);
                element.addEventListener("mouseleave", handleMouseLeave);
            });
            return interactiveElements; // to clean up
        };

        // Initial attach
        let elements = addHoverListeners();

        // Animation function for smooth movement
        let animationId;
        const animate = () => {
            const lerp = (start, end, factor) => {
                return start + (end - start) * factor;
            };

            dotPosition.current.x = lerp(
                dotPosition.current.x,
                mousePosition.current.x,
                DOT_SMOOTHNESS
            );
            dotPosition.current.y = lerp(
                dotPosition.current.y,
                mousePosition.current.y,
                DOT_SMOOTHNESS
            );

            borderDotPosition.current.x = lerp(
                borderDotPosition.current.x,
                mousePosition.current.x,
                BORDER_DOT_SMOOTHNESS
            );
            borderDotPosition.current.y = lerp(
                borderDotPosition.current.y,
                mousePosition.current.y,
                BORDER_DOT_SMOOTHNESS
            );

            setRenderPos({
                dot: { x: dotPosition.current.x, y: dotPosition.current.y },
                border: { x: borderDotPosition.current.x, y: borderDotPosition.current.y },
            });

            animationId = requestAnimationFrame(animate);
        };

        // Start animation loop
        animate();

        // Clean up
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (elements) {
                elements.forEach((element) => {
                    element.removeEventListener("mouseenter", handleMouseEnter);
                    element.removeEventListener("mouseleave", handleMouseLeave);
                });
            }
            cancelAnimationFrame(animationId);
        };
    }, []);

    return createPortal(
        <div
            style={{
                pointerEvents: "none",
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                width: "100%",
                height: "100%",
                opacity: isHidden ? 0 : 1,
                transition: "opacity 0.2s ease",
                mixBlendMode: "difference", // Crucial for the requested effect
            }}
        >
            <div
                style={{
                    position: "absolute",
                    borderRadius: "50%",
                    // border: "3px solid white", // scaling border might be redundant if filled
                    backgroundColor: "white", // Solid white for difference effect
                    width: "50px",
                    height: "50px",
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`, // Reduced scale slightly for solid circle
                    left: `${renderPos.dot.x}px`,
                    top: `${renderPos.dot.y}px`,
                    transition: "transform 0.3s ease",
                }}
            />
        </div>,
        document.body
    );
}
