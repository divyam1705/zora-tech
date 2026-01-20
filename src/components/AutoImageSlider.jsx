import React, { useState, useEffect } from 'react';

const AutoImageSlider = ({
    images = [],
    interval = 3000,
    width = "100%",
    height = "400px"
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Default placeholder images if none provided (using placeholders similar to reference)
    const defaultImages = [
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop", // Earth/Space
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", // Office/Laptop
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"  // Tech
    ];

    const sliderImages = images.length > 0 ? images : defaultImages;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
        }, interval);

        return () => clearInterval(timer);
    }, [sliderImages.length, interval]);

    return (
        <div className="leaf-slider-container" style={{ width, height, position: 'relative' }}>
            {/* Back Decoration Shape (Offset) */}
            <div className="leaf-shape-back"></div>

            {/* Main Image Mask */}
            <div className="leaf-shape-mask">
                {sliderImages.map((img, index) => (
                    <div
                        key={index}
                        className={`leaf-slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default AutoImageSlider;
