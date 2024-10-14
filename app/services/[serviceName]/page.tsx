import React from 'react';


interface ServicePageProps {
    params: {
        serviceName: string;
    };
}
const ServicePage: React.FC<ServicePageProps> = ({ params: { serviceName } }) => {
    return (
        <div>
            <h1>Welcome to My {serviceName}</h1>
            <p>This is a basic page component.</p>
        </div>
    );
};

export default ServicePage;