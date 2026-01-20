import { useEffect, useRef } from 'react';

const useSpotlightEffect = ({
    radius = 200,
    brightness = 0.15,
    color = '#ffffff',
    smoothing = 0.1,
} = {}) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const spotRef = useRef({ x: 0, y: 0 });
    const frameRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        // Initial resize
        handleResize();

        // Start slightly off-screen or center? Let's start center to test appearance
        spotRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

        const render = () => {
            // Smooth movement
            const dx = mouseRef.current.x - spotRef.current.x;
            const dy = mouseRef.current.y - spotRef.current.y;

            spotRef.current.x += dx * smoothing;
            spotRef.current.y += dy * smoothing;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Create radial gradient
            // We want a dark overlay with a "hole" or "light" at the cursor.
            // Usually "spotlight" means standard dark mask with transparent hole OR additive light.
            // The user code suggests a "brightness" and "color".
            // Let's assume an additive light effect or a mask reveal. 
            // Given "brightness = 0.15", it might be a subtle glow on top of existing content.
            // However, typical "spotlight" on text-heavy pages often darkens everything else.
            // Let's implement a standard "flashlight" effect: dark overlay, clear/bright circle.

            // Wait, the user prompt asked for "spotlight animation effect".
            // If I look at the props (brightness, color), it implies drawing LIGHT.
            // Let's draw a radial gradient at spotRef.current coordinates.

            const gradient = ctx.createRadialGradient(
                spotRef.current.x,
                spotRef.current.y,
                0,
                spotRef.current.x,
                spotRef.current.y,
                radius
            );

            // Customize the gradient steps based on "brightness" and "color"
            // Assuming 'color' is the light color (white/yellow).
            // We fade from color -> transparent.

            // Converting hex to rgba for transparency control could be good, but let's stick to simple first.
            // If color is #ffffff, we want center to be brighter.

            gradient.addColorStop(0, `${color}40`); // ~25% opacity at center (hex + alpha) - adjusting for 'brightness'
            // Ideally we'd parse the color or use rgba. For now let's assume specific format or just use consistent values.
            // Since user wants "nice", let's make it a nice glow.

            // Let's try a composite operation if we want to "light up" the background?
            // Or just standard drawing.

            gradient.addColorStop(0, `rgba(255, 255, 255, ${brightness})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            frameRef.current = requestAnimationFrame(render);
        };

        frameRef.current = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [radius, brightness, color, smoothing]);

    return canvasRef;
};

export default useSpotlightEffect;
