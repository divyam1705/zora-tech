import React from 'react';
import useSpotlightEffect from '../hooks/use-spotlight';

const SpotlightCursor = ({
    config = {},
    className = '',
    ...rest
}) => {
    const spotlightConfig = {
        radius: 400, // Adjusted default for better visibility
        brightness: 0.15,
        color: '#ffffff',
        smoothing: 0.1,
        ...config,
    };

    const canvasRef = useSpotlightEffect(spotlightConfig);

    return (
        <canvas
            ref={canvasRef}
            className={`spotlight-canvas ${className}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
                width: '100%',
                height: '100%',
            }}
            {...rest}
        />
    );
};

export default SpotlightCursor;
