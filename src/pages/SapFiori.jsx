import React from 'react';
import { FaMobileAlt, FaPalette, FaUserTie, FaRocket, FaLaptopCode, FaSmile } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/sap-fiori-hero.png';
import costsImg from '../assets/costs-sap-fiori.png';
import overviewImg from '../assets/overview-sap-fiori.png';

const SapFiori = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Fiori & UX Design"
            subtitle="Transforming the user experience with intuitive, mobile-ready SAP applications."
            description="Replace complex transaction codes with simple, role-based apps that work on any device, boosting productivity and user satisfaction."
            approachSteps={[
                { title: "Discover", text: "Identify user personas and pain points in current workflows.", icon: <FaUserTie /> },
                { title: "Design", text: "Prototyping intuitive UI screens using SAP Fiori Design Guidelines.", icon: <FaPalette /> },
                { title: "Develop", text: "Building apps using SAPUI5 and Fiori Elements.", icon: <FaLaptopCode /> },
                { title: "Deploy", text: "Configuring Fiori Launchpad and enabling mobile access.", icon: <FaMobileAlt /> }
            ]}
            benefits={[
                "Increased user productivity",
                "Reduced training time",
                "Mobile access anywhere, anytime",
                "Fewer data entry errors",
                "Modern, consistent look & feel",
                "Higher employee satisfaction"
            ]}
            tools={[
                "SAP Fiori Elements",
                "SAPUI5 framework",
                "SAP Business Technology Platform",
                "SAP Mobile Start",
                "SAP Screen Personas"
            ]}
            idealFor={[
                "Enterprises modernizing their SAP ECC or S/4HANA interface",
                "Field workforces needing mobile access",
                "Managers approving workflows on the go",
                "Companies focused on employee experience"
            ]}
            faqs={[
                { q: "Does Fiori work on mobile?", a: "Yes, Fiori is responsive by design and works seamlessly on tablets and smartphones." },
                { q: "Can we customize standard apps?", a: "Yes, we can extend standard Fiori apps to add custom fields and logic." },
                { q: "Do we need S/4HANA for Fiori?", a: "Fiori works best with S/4HANA, but many apps are also available for SAP ECC." }
            ]}
            ctaText="Modernize Your UI"

            // Overview Section
            overviewSection={{
                heading: "Consumer-Grade Experience for the Enterprise",
                paragraphs: [
                    "Employees today expect their work software to be as intuitive as the apps they use at home. SAP Fiori delivers this promise by reimagining the SAP user experience. It shifts the focus from functions to roles, giving users exactly what they need to do their job in a simple, tiled interface.",
                    "We help you implement the SAP Fiori Launchpad as the single entry point for all applications. Whether it's approving a purchase order, tracking sales, or managing inventory, your team can do it with fewer clicks and zero frustration.",
                    "Good design is good business. By removing friction from daily tasks, we help you unlock significant productivity gains and ensure your SAP system is actually used to its full potential."
                ],
                buttonText: "See Fiori in Action",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "UX Challenges We Solve",
                subtitle: "Stop fighting with complex screens. We make SAP easy to use.",
                challenges: [
                    { title: "Complex T-Codes", text: "Memorizing cryptic codes scares users. Fiori replaces them with named, clickable apps." },
                    { title: "Mobile Disconnect", text: "Field workers shouldn't need a laptop. We enable secure mobile access for approvals and data entry." },
                    { title: "Slow Workflows", text: "Click-heavy processes waste time. We streamline workflows to minimize steps." },
                    { title: "High Training Costs", text: "Complex UIs require weeks of training. Fiori is intuitive enough to use with minimal instruction." },
                    { title: "User Frustration", text: "Bad UX leads to low morale. A modern interface improves employee engagement." },
                    { title: "Data Errors", text: "Confusing screens lead to mistakes. Clear, simple forms improve data accuracy." }
                ],
                ctaHeading: "Delight Your Users",
                ctaButtonText: "Start UX Transformation",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "ROI of User Experience",
                paragraphs: [
                    "The return on investing in UX is often underestimated. Saving just 5 minutes per employee per day adds up to thousands of hours of productivity annually.",
                    "Reduced training requirements and fewer helpdesk tickets for 'how-to' questions further lower operational costs. We help you quantify these savings to build a compelling business case for Fiori adoption."
                ],
                buttonText: "Calculate UX Savings",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapFiori;
