import React from 'react';
import { FaHeartbeat, FaStethoscope, FaWifi, FaUserMd, FaShieldAlt, FaTabletAlt } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-medical-device.png';
import costsImg from '../assets/costs-medical.png';
import overviewImg from '../assets/overview-medical.png';

const MedicalDeviceIntegration = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Medical Device Integration"
            subtitle="Connecting lifesaving devices to the digital healthcare ecosystem."
            description="Bridging the gap between medical hardware and HIS/EMR systems for seamless data flow and remote monitoring."
            approachSteps={[
                { title: "Connect", text: "Interfacing with hardware via Bluetooth/IoT protocols.", icon: <FaWifi /> },
                { title: "Extract", text: "Parsing binary data streams from devices.", icon: <FaStethoscope /> },
                { title: "Comply", text: "Ensuring HIPAA/GDPR and FDA compliance.", icon: <FaShieldAlt /> },
                { title: "Visualize", text: "Displaying vitals on clinician dashboards.", icon: <FaUserMd /> }
            ]}
            benefits={[
                "Real-time patient monitoring",
                "Reduced manual charting errors",
                "Remote patient care (Telehealth)",
                "Predictive maintenance for devices",
                "Regulatory data compliance",
                "Enhanced clinical decision making"
            ]}
            tools={[
                "HL7 / FHIR Standards",
                "Bluetooth Low Energy (BLE)",
                "Azure IoT for Health",
                "DICOM Imaging",
                "Secure Edge Gateway"
            ]}
            idealFor={[
                "MedTech manufacturers",
                "Hospitals and Clinics",
                "Telehealth startups",
                "Wearable health device makers"
            ]}
            faqs={[
                { q: "Is it HIPAA compliant?", a: "Yes, all our architectures are designed with strict HIPAA/HITECH security controls." },
                { q: "Do you work with legacy devices?", a: "Yes, we can build edge gateways to capture data from older serial-port equipment." },
                { q: "Can you push to EMR?", a: "We integrate with Epic, Cerner, and others using HL7/FHIR interfaces." }
            ]}
            ctaText="Connect Your Devices"

            // Overview Section
            overviewSection={{
                heading: "The Internet of Medical Things (IoMT)",
                paragraphs: [
                    "Healthcare is becoming data-driven. From pacemakers to insulin pumps, medical devices generate vast amounts of critical data. But often, this data is trapped on the device.",
                    "We specialize in unlocking this data. We build secure, compliant middleware that captures telemetry from medical devices and securely transmits it to the cloud or Electronic Medical Records (EMR) systems.",
                    "By integrating devices, we enable remote patient monitoring, allowing doctors to spot trends early and intervene before emergencies happen."
                ],
                buttonText: "Discuss IoMT Strategy",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Healthcare Challenges We Solve",
                subtitle: "Safety first, always.",
                challenges: [
                    { title: "Data Security", text: "Patient data is sensitive. We enforce end-to-end encryption and strict access controls." },
                    { title: "Interoperability", text: "Healthcare has many standards (HL7, FHIR). We translate between them seamlessly." },
                    { title: "Connectivity", text: "Hospitals have Wi-Fi dead zones. We build apps that store-and-forward data reliably." },
                    { title: "Device Power", text: "Wearables have small batteries. We optimize communication protocols to save power." },
                    { title: "FDA Regulations", text: "Software as a Medical Device (SaMD) requires rigorous validation. We follow ISO 13485 processes." },
                    { title: "Latency", text: "Critical alerts cannot be delayed. We prioritize alarm data packets for instant delivery." }
                ],
                ctaHeading: "Innovate in Healthcare",
                ctaButtonText: "Talk to a HealthTech Expert",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Value-Based Care Investment",
                paragraphs: [
                    "Investing in connectivity reduces hospital readmissions and enables new 'remote care' revenue models.",
                    "We help MedTech companies build the digital differentiation that justifies premium device pricing."
                ],
                buttonText: "Get an Integration Quote",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default MedicalDeviceIntegration;
