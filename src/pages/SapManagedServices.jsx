import React from 'react';
import { FaServer, FaCloud, FaShieldAlt, FaTools, FaNetworkWired, FaDatabase } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/sap-managed-services-hero.png';
import costsImg from '../assets/costs-sap-managed.png';
import overviewImg from '../assets/overview-sap-managed.png';

const SapManagedServices = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Managed Services"
            subtitle="End-to-end technical management of your SAP infrastructure and basis operations."
            description="Secure, scalable, and high-performance hosting and basis support for your SAP landscape, on-premise or in the cloud."
            approachSteps={[
                { title: "Host", text: "Secure cloud hosting on Azure, AWS, or Private Cloud.", icon: <FaCloud /> },
                { title: "Manage", text: "Comprehensive Basis administration and OS/DB support.", icon: <FaServer /> },
                { title: "Secure", text: "Advanced threat protection and compliance monitoring.", icon: <FaShieldAlt /> },
                { title: "Recover", text: "Robust Disaster Recovery (DR) and backup strategies.", icon: <FaDatabase /> }
            ]}
            benefits={[
                "99.99% Infrastructure Uptime",
                "Advanced Security Compliance",
                "Automated Patch Management",
                "Scalable Cloud Architecture",
                "Reduced Hardware Footprint",
                "24/7 Technical Support"
            ]}
            tools={[
                "SAP HANA Cockpit",
                "SAP Landscape Management",
                "Azure / AWS Cloud Tools",
                "Monitoring Dashboards",
                "Backup Automation"
            ]}
            idealFor={[
                "Companies migrating SAP to the cloud",
                "Organizations needing robust Basis support",
                "Enterprises looking to retire data centers",
                "Businesses requiring high availability (HA/DR)"
            ]}
            faqs={[
                { q: "Do you support public cloud migrations?", a: "Yes, we are certified partners for SAP on Azure and AWS." },
                { q: "Does this include Basis support?", a: "Yes, full Basis administration is a core part of our managed services." },
                { q: "How do you handle security?", a: "We implement enterprise-grade security, including firewalls, encryption, and regular audits." }
            ]}
            ctaText="Optimize Your Infrastructure"

            // Overview Section
            overviewSection={{
                heading: "The Foundation of Your Intelligent Enterprise",
                paragraphs: [
                    "Your SAP applications are only as good as the infrastructure they run on. Our SAP Managed Services provide the rock-solid technical foundation your business needs to operate without interruption.",
                    "We take full responsibility for the technical layer—Hosting, Basis, Operating System, and Database. Whether you are on-premise, in the cloud, or hybrid, our experts ensure optimal performance, rigorous security, and seamless scalability.",
                    "By offloading the heavy lifting of infrastructure management to Zora Technology, you free your internal IT resources to focus on application innovation and business value creation."
                ],
                buttonText: "Review Infrastructure Options",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Infrastructure Challenges We Solve",
                subtitle: "We eliminate the complexity of managing SAP infrastructure, so you can focus on usage.",
                challenges: [
                    { title: "Performance Issues", text: "Slow systems kill productivity. We fine-tune your HANA database and OS settings for maximum speed." },
                    { title: "Security Vulnerabilities", text: "Cyber threats are real. We apply rigorous patching, encryption, and monitoring to protect your data." },
                    { title: "Complex Migrations", text: "Moving to the cloud is risky. We execute zero-downtime migrations using proven methodologies." },
                    { title: "Data Growth", text: "Exploding data costs money. We implement data aging and archiving strategies to manage storage costs." },
                    { title: "Disaster Recovery", text: "Downtime is not an option. We design and test robust HA/DR solutions to ensure business continuity." },
                    { title: "Compliance Audits", text: "We ensure your infrastructure meets industry standards (GDPR, SOX, HIPAA) and passes audits." }
                ],
                ctaHeading: "Secure Your SAP Landscape",
                ctaButtonText: "Talk to a Basis Expert",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Predictable Infrastructure Costs",
                paragraphs: [
                    "Moving to a Managed Services model converts unpredictable capital expenses (CapEx) into predictable operational expenses (OpEx). You pay for what you use, with the ability to scale up or down as your business needs change.",
                    "We offer transparent monthly billing that wraps hosting, licenses, and management services into a single invoice, simplifying your IT budgeting."
                ],
                buttonText: "Get a Hosting Quote",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapManagedServices;
