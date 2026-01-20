import React from 'react';

const SpaceTunnel = () => {
    return (
        <div className="space-tunnel-container">
            <div className="space-tunnel">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="cube-frame"></div>
                ))}
            </div>
        </div>
    );
};

export default SpaceTunnel;
