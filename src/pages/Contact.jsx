import React from 'react';
import ContactComponent from '../components/Contact';

const Contact = () => {
    return (
        <>
            {/* Padding top to account for header absolute position and simulate spacing if needed, 
          but our visual design might want it to start lower. 
          The Hero section has padding-top: 80px. 
          We'll add a spacer or style the page container. */}
            <ContactComponent />
        </>
    );
};

export default Contact;
