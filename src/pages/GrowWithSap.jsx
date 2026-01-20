import React from 'react';
import { FaSeedling, FaCloud, FaRocket, FaChartLine, FaCheck, FaTools } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-grow-sap.png';
import costsImg from '../assets/costs-grow-sap.png';
import overviewImg from '../assets/overview-grow-sap.png';

const GrowWithSap = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="GROW with SAP"
            subtitle="A ready-to-run cloud ERP solution designed specifically for mid-market scaleups."
            description="Accelerate your growth with a public cloud ERP that brings industry best practices, predictable pricing, and rapid implementation."
            approachSteps={[
                { title: "Adopt", text: "Deploy standard 'Fit-to-Standard' business processes instantly.", icon: <FaCheck /> },
                { title: "Accelerate", text: "Go live in weeks, not months, using pre-configured content.", icon: <FaRocket /> },
                { title: "Scale", text: "Add users and markets easily as your business expands.", icon: <FaChartLine /> },
                { title: "Innovate", text: "Leverage embedded AI and automation updates automatically.", icon: <FaLightbulb /> }
            ]}
            benefits={[
                "Rapid implementation (as fast as 4 weeks)",
                "Predictable subscription pricing",
                "Continuous automated updates",
                "Built-in industry best practices",
                "Enterprise-grade security",
                "Scalability without IT complexity"
            ]}
            tools={[
                "SAP S/4HANA Cloud Public Edition",
                "SAP Business Technology Platform",
                "SAP Build Process Automation",
                "Startup Activation Packs",
                "Embedded Analytics"
            ]}
            idealFor={[
                "Fast-growing mid-market companies",
                "Scaleups preparing for IPO",
                "Subsidiaries of large enterprises",
                "Businesses moving from QuickBooks/Xero"
            ]}
            faqs={[
                { q: "Is this S/4HANA?", a: "Yes, it is the full S/4HANA Cloud Public Edition, tailored for speed and simplicity." },
                { q: "Can I customize it?", a: "It uses Key User Extensibility and BTP for side-by-side extensions, keeping the core clean." },
                { q: " What's included?", a: "It bundles ERP, BTP entitlements, and learning adoption specifically for growth companies." }
            ]}
            ctaText="Start Your Growth"

            // Overview Section
            overviewSection={{
                heading: "Enterprise Power, Startup Speed",
                paragraphs: [
                    "Growing companies need the power of a world-class ERP without the complexity and cost of a traditional implementation. GROW with SAP offers exactly that: a pre-configured, cloud-native edition of S/4HANA that gets you running quickly.",
                    "We help you embrace the 'Fit-to-Standard' mindset, deploying industry best practices that have been proven globally. This avoids costly customizations and ensures your system remains standardized, update-compliant, and agile.",
                    "With Zora Technology and GROW with SAP, you get a foundation that scales with you—from your first international office to your IPO and beyond."
                ],
                buttonText: "Check Eligibility",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Growth Hurdles We Clear",
                subtitle: "Don't let your systems hold back your ambition.",
                challenges: [
                    { title: "Outgrowing Basic Software", text: "QuickBooks and spreadsheets can't handle complex inventory or global reporting. GROW creates a unified system." },
                    { title: "Limited IT Resources", text: "You don't need a huge IT team. We manage the cloud environment, while SAP handles security and updates." },
                    { title: "Speed to Market", text: "You can't wait a year for ERP. We deploy GROW in weeks so you miss no opportunities." },
                    { title: "Regulatory Compliance", text: "Entering new countries means new laws. GROW handles local tax and reporting automatically." },
                    { title: "Cash Flow Visibility", text: "Get real-time insight into liquidity. No more waiting for month-end close." },
                    { title: "Process Chaos", text: "Startups often have messy processes. We enforce disciplined, best-practice workflows." }
                ],
                ctaHeading: "Scale Without Limits",
                ctaButtonText: "Get GROWTH Ready",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Transparent Subscription Pricing",
                paragraphs: [
                    "GROW with SAP is sold as a straightforward subscription model based on your user needs (Full Usage vs. Self-Service). This eliminates large upfront capital expenditure for servers and licenses.",
                    "Our implementation packages are also fixed-price and outcome-based, ensuring you know exactly what your investment will be before we start."
                ],
                buttonText: "See Pricing Tier",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};
import { FaLightbulb } from 'react-icons/fa'; // Added missing import

export default GrowWithSap;
