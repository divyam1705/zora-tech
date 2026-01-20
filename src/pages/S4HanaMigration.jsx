import React from 'react';
import { FaDatabase, FaExchangeAlt, FaRocket, FaCheckCircle, FaSearch, FaProjectDiagram, FaGlobe, FaListOl } from 'react-icons/fa'; // Changed FaOne to FaListOl as valid placeholder
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-s4hana.png';
import costsImg from '../assets/costs-s4hana.png';
import overviewImg from '../assets/overview-s4hana.png';

const S4HanaMigration = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="S/4HANA Migration"
            subtitle="Expert guidance for your move to the Intelligent Enterprise."
            description="Seamlessly transition from SAP ECC to S/4HANA with reduced risk, minimal downtime, and optimized data structures."
            approachSteps={[
                { title: "Discover", text: "Readiness checks and simplification item analysis.", icon: <FaSearch /> },
                { title: "Prepare", text: "Customer / Vendor integration (CVI) and data cleansing.", icon: <FaListOl /> },
                { title: "Migrate", text: "SUM DMO execution for database and application capability.", icon: <FaExchangeAlt /> },
                { title: "Go-Live", text: "Cutover management and post-migration validation.", icon: <FaRocket /> }
            ]}
            benefits={[
                "Real-time analytics capability",
                "Simplified data model",
                "Improved user experience (Fiori)",
                "Faster financial close",
                "Foundation for AI/ML",
                "Future-proof platform"
            ]}
            tools={[
                "SAP Readiness Check",
                "Software Update Manager (SUM)",
                "Migration Cockpit",
                "Custom Code Migration App",
                "ATC (ABAP Test Cockpit)"
            ]}
            idealFor={[
                "SAP ECC 6.0 customers",
                "Companies with large legacy databases",
                "Organizations needing real-time finance",
                "Enterprises planning digital upgrades"
            ]}
            faqs={[
                { q: "Brownfield or Greenfield?", a: "We help you choose. Brownfield preserves history; Greenfield offers a fresh start." },
                { q: "How long does it take?", a: "A typical migration takes 6-12 months depending on database size and complexity." },
                { q: "What about custom code?", a: "We analyze and adapt your custom code to ensure it works on the HANA database." }
            ]}
            ctaText="Plan Your Migration"

            // Overview Section
            overviewSection={{
                heading: "The Next Generation of ERP",
                paragraphs: [
                    "Migration to SAP S/4HANA is not just an upgrade; it is a re-platforming of your business for the digital age. The deadline for ECC support is looming, but the real driver is business value.",
                    "S/4HANA simplifies your data landscape, allowing for real-time decision making and embedded analytics. It replaces batch processing with live transactions.",
                    "Zora Technology specializes in complex migrations. Whether you have terabytes of historical data or a highly customized environment, our 'Factory Approach' to migration ensures a predictable, safe, and efficient journey to S/4HANA."
                ],
                buttonText: "Check Readiness",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Migration Risks We Manage",
                subtitle: "Don't let technical debt derail your upgrade.",
                challenges: [
                    { title: "Data Consistency", text: "Bad legacy data breaks migrations. We clean and harmonize data before the move." },
                    { title: "Business Downtime", text: "You can't stop the business for a week. We use Near Zero Downtime (NZDT) methodologies." },
                    { title: "Custom Code", text: "Old Z-programs might fail on HANA. We remediate incompatibility automatically." },
                    { title: "User Training", text: "The new interface changes processes. We provide comprehensive change management." },
                    { title: "Hardware Sizing", text: "HANA memory is expensive. We right-size your appliance to avoid overspending." },
                    { title: "Interface Breaks", text: "Existing integrations must work. We test all interfaces rigorously." }
                ],
                ctaHeading: "Migrate with Confidence",
                ctaButtonText: "Talk to a Migration Expert",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Migration Economics",
                paragraphs: [
                    "The cost of migration is an investment in future agility. We help you build a ROI model based on infrastructure savings, productivity gains, and inventory reduction.",
                    "Our fixed-price migration packages for standard landscapes take the uncertainty out of budgeting."
                ],
                buttonText: "Get Migration Quote",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default S4HanaMigration;
