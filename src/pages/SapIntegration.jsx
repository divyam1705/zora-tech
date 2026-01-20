import React from 'react';
import { FaNetworkWired, FaPuzzlePiece, FaExchangeAlt, FaCloud, FaStream, FaProjectDiagram } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/sap-integration-hero.png';
import costsImg from '../assets/costs-sap-integration.png';
import overviewImg from '../assets/overview-sap-integration.png';

const SapIntegration = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Integration Services"
            subtitle="Connecting your intelligent enterprise for seamless data flow and process automation."
            description="Break down data silos by integrating your SAP landscape with cloud applications, third-party tools, and IoT devices."
            approachSteps={[
                { title: "Analyze", text: "Mapping data flows and identifying integration points.", icon: <FaProjectDiagram /> },
                { title: "Design", text: "Selecting the right middleware (CPI, PI/PO) and patterns.", icon: <FaPuzzlePiece /> },
                { title: "Develop", text: "Building robust APIs, iFlows, and connectors.", icon: <FaNetworkWired /> },
                { title: "Monitor", text: "Real-time tracking of message processing and errors.", icon: <FaStream /> }
            ]}
            benefits={[
                "Real-time data visibility",
                "Automated cross-system workflows",
                "Reduced manual data entry errors",
                "Scalable API-led connectivity",
                "Faster onboarding of new apps",
                "Simplified landscape architecture"
            ]}
            tools={[
                "SAP Integration Suite (BTP)",
                "SAP Cloud Platform Integration (CPI)",
                "SAP Process Orchestration (PO)",
                "SAP Event Mesh",
                "Open Connectors"
            ]}
            idealFor={[
                "Hybrid landscapes (Cloud + On-Premise)",
                "Connecting Salesforce/Workday to SAP",
                "B2B integration with suppliers (EDI)",
                "IoT and Edge computing scenarios"
            ]}
            faqs={[
                { q: "What middleware do you recommend?", a: "We primarily advocate for SAP Integration Suite (CPI) for modern, cloud-first scenarios." },
                { q: "Can you replace legacy middleware?", a: "Yes, we migrate from legacy tools like Dell Boomi or MuleSoft to SAP Integration Suite." },
                { q: "Do you handle EDI?", a: "Yes, we implement B2B integration for seamless electronic document exchange." }
            ]}
            ctaText="Connect Your Systems"

            // Overview Section
            overviewSection={{
                heading: "The Nervous System of Your Digital Business",
                paragraphs: [
                    "In a modern enterprise, no system acts alone. Your SAP ERP needs to talk to your CRM, HR system, e-commerce platform, and supply chain partners. Integration is the key to unlocking the true value of your data.",
                    "We specialize in 'API-First' and event-driven architectures. By updating point-to-point connections with a robust Integration Suite, we create a flexible digital backbone that allows you to plug in new applications and technologies with ease.",
                    "Whether you are connecting SAP S/4HANA to Salesforce, linking Ariba to suppliers, or capturing IoT sensor data, our integration experts ensure the data flows securely and reliably in real-time."
                ],
                buttonText: "Review Integration Strategy",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Integration Headaches We Cure",
                subtitle: "Disconnects cause delays. We ensure your systems speak the same language.",
                challenges: [
                    { title: "Data Silos", text: "Information trapped in one system leads to poor decisions. We unify data across the enterprise." },
                    { title: "Spaghetti Code", text: "Messy point-to-point connections are hard to maintain. We implement a clean, hub-and-spoke architecture." },
                    { title: "Legacy Protocols", text: "Old systems use file transfers (FTP). We modernize them to use real-time APIs (REST/OData)." },
                    { title: "Lack of Visibility", text: "You need to know if an order failed. We build dashboards for end-to-end monitoring." },
                    { title: "Scalability Issues", text: "Batch jobs can't handle high volumes. We design event-driven architectures that scale instantly." },
                    { title: "Security Risks", text: "Data in transit must be secure. We encrypt payloads and manage certificates rigorously." }
                ],
                ctaHeading: "Unify Your Data Landscape",
                ctaButtonText: "Talk to an Integration Architect",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Integration ROI",
                paragraphs: [
                    "Investing in a proper integration platform pays for itself by eliminating manual data entry, reducing errors, and accelerating process cycle times. An automated order-to-cash process, for example, can speed up revenue recognition significantly.",
                    "We help you optimize licensing costs for SAP Integration Suite and design efficient flows to minimize metered usage fees."
                ],
                buttonText: "Calculate ROI",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapIntegration;
