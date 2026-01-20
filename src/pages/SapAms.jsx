import React from 'react';
import { FaTools, FaHeadset, FaClock, FaShieldAlt, FaSyncAlt } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/sap-ams-hero.png';
import costsImg from '../assets/costs-sap-ams.png';
import overviewImg from '../assets/overview-sap-ams.png';

const SapAms = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Application Management Services (AMS)"
            subtitle="Reliable, 24/7 support and optimization for your mission-critical SAP systems."
            description="Ensure business continuity and drive continuous improvement with our proactive SAP AMS support."
            approachSteps={[
                { title: "Monitor", text: "24/7 proactive monitoring of system health and performance.", icon: <FaShieldAlt /> },
                { title: "Resolve", text: "Rapid incident response and problem management (L1/L2/L3).", icon: <FaTools /> },
                { title: "Enhance", text: "Continuous delivery of minor enhancements and change requests.", icon: <FaSyncAlt /> },
                { title: "Optimize", text: "Regular system tuning and process improvement.", icon: <FaClock /> }
            ]}
            benefits={[
                "Guaranteed SLAs (99.9% uptime)",
                "Reduced IT operational costs",
                "Access to specialized skills on-demand",
                "Proactive risk management",
                "Seamless scalability",
                "Focus on core business innovation"
            ]}
            tools={[
                "SAP Solution Manager",
                "ServiceNow Integration",
                "Jira Service Desk",
                "Automated Testing Tools",
                "Performance Monitoring"
            ]}
            idealFor={[
                "Organizations with limited internal SAP support teams",
                "Businesses seeking cost-effective system maintenance",
                "Enterprises requiring 24/7 global support coverage",
                "Companies looking to optimize their SAP landscape"
            ]}
            faqs={[
                { q: "Do you offer 24/7 support?", a: "Yes, our global delivery centers provide round-the-clock coverage for critical issues." },
                { q: "What support levels do you cover?", a: "We cover L1 (Helpdesk), L2 (Functional/Technical), and L3 (Root Cause/Expert) support." },
                { q: "Is the contract flexible?", a: "Yes, we offer flexible bucket-of-hours or fixed-fee models tailored to your needs." }
            ]}
            ctaText="Get Support Now"

            // Overview Section
            overviewSection={{
                heading: "Your SAP Landscape, Always On, Always Optimized",
                paragraphs: [
                    "Maintaining an SAP environment effectively requires a diverse set of skills and constant vigilance. Our Application Management Services (AMS) act as an extension of your IT team, ensuring your systems are not just running, but performing at their peak.",
                    "We move beyond break-fix support to offer proactive maintenance and continuous improvement. By leveraging automation and best practices, we reduce ticket volumes over time and help you unlock new value from your existing investment.",
                    "With Zora Technology AMS, you gain peace of mind knowing that certified experts are watching over your critical business systems 24/7, allowing you to focus on strategy and innovation rather than maintenance."
                ],
                buttonText: "Explore Support Plans",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Operational Challenges We Eliminate",
                subtitle: "Running SAP shouldn't be a burden. We tackle the day-to-day challenges so you don't have to.",
                challenges: [
                    { title: "High Support Costs", text: "Maintaining a full in-house team for every SAP module is expensive. Our shared services model reduces your TCO significantly." },
                    { title: "Skill Gaps", text: "Finding niche SAP experts is hard. We provide instant access to a deep bench of functional and technical consultants." },
                    { title: "System Downtime", text: "Unplanned outages cost money. Our proactive monitoring detects issues before they impact business operations." },
                    { title: "Backlog Accumulation", text: "Change requests often pile up. We manage enhancements alongside support to keep your system evolving." },
                    { title: "Knowledge Loss", text: "Employee turnover risks knowledge drain. We document everything and maintain institutional knowledge of your system." },
                    { title: "Compliance Risks", text: "We ensure your system stays compliant with audit requirements and security patches." }
                ],
                ctaHeading: "Stabilize Your SAP Operations Today",
                ctaButtonText: "Contact Support Team",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Flexible AMS Pricing Models",
                paragraphs: [
                    "We understand that every business has different support needs. That's why we offer multiple AMS engagement models: Fixed Monthly Fee for predictable costs, Bucket of Hours for flexibility, or Ticket-Based pricing.",
                    "Our goal is to provide the right level of support at the right price point. We work with you to define SLAs and scope that align with your budget and business criticality."
                ],
                buttonText: "Get a Support Quote",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapAms;
