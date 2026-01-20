import React from 'react';
import { FaLightbulb, FaChartLine, FaCogs, FaHandshake, FaUserCheck, FaSearch } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/sap-consulting-hero.png';
import costsImg from '../assets/costs-sap-consulting.png';
import overviewImg from '../assets/overview-sap-consulting.png';

const SapConsulting = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Consulting Services"
            subtitle="Expert guidance to optimize your SAP landscape and drive business transformation."
            description="Leverage our deep industry knowledge and technical expertise to align your SAP strategy with your business goals."
            approachSteps={[
                { title: "Assess", text: "Health checks and maturity assessments of your current landscape.", icon: <FaSearch /> },
                { title: "Strategize", text: "Defining roadmaps for S/4HANA migration and cloud adoption.", icon: <FaLightbulb /> },
                { title: "Optimize", text: "Process improvement and system performance tuning.", icon: <FaCogs /> },
                { title: "Empower", text: "Change management and user training strategies.", icon: <FaUserCheck /> }
            ]}
            benefits={[
                "Clear strategic roadmap",
                "Optimized business processes",
                "Reduced total cost of ownership",
                "Enhanced system performance",
                "Improved user adoption",
                "Risk mitigation"
            ]}
            tools={[
                "SAP Signavio",
                "SAP Readiness Check",
                "SAP Process Mining",
                "SAP Architecture",
                "SAP Cloud ALM"
            ]}
            idealFor={[
                "Companies planning S/4HANA migrations",
                "Organizations needing process optimization",
                "Businesses facing performance bottlenecks",
                "Teams requiring strategic guidance"
            ]}
            faqs={[
                { q: "What areas of SAP do you cover?", a: "Our consulting covers the entire suite, from S/4HANA and Fiori to BTP and cloud solutions." },
                { q: "Do you help with roadmap planning?", a: "Yes, we specialize in creating 3-5 year strategic roadmaps for digital transformation." },
                { q: "Can you audit our existing system?", a: "Absolutely. We perform comprehensive health checks to identify risks and opportunities." }
            ]}
            ctaText="Consult with Experts"

            // Overview Section
            overviewSection={{
                heading: "Strategic SAP Consulting for Future-Ready Business",
                paragraphs: [
                    "In a rapidly evolving digital landscape, having the right technology strategy is crucial. Our SAP Consulting services provide the expert guidance you need to navigate complex decisions, from S/4HANA migrations to cloud adoption.",
                    "We go beyond technical advice; we partner with you to understand your business objectives and align your SAP landscape to support them. Whether you need to streamline operations, improve reporting, or innovate with new business models, our consultants chart the path forward.",
                    "With Zora Technology, you gain a partner who understands both the technical intricacies of SAP and the strategic demands of your industry. Let us help you unlock the full potential of your SAP investment."
                ],
                buttonText: "Schedule an Assessment",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "SAP Strategy Challenges We Solve",
                subtitle: "Navigating the SAP ecosystem can be complex. We help you overcome strategic hurdles to ensure long-term success.",
                challenges: [
                    { title: "Migration Uncertainties", text: "Moving to S/4HANA involves complex choices. We clarify the path between Brownfield, Greenfield, and Bluefield approaches." },
                    { title: "Process Inefficiency", text: "Customized legacy processes often slow down innovation. We help you adopt SAP Best Practices for leaner operations." },
                    { title: "Cloud Confusion", text: "Deciding between private, public, or hybrid cloud requires expertise. We analyze your needs to recommend the best fit." },
                    { title: "Data Silos", text: "Fragmented data hampers decision-making. We design master data strategies to ensure a single source of truth." },
                    { title: "User Resistance", text: "New systems fail without adoption. Our change management strategies ensure your team embraces the new tools." },
                    { title: "Technical Debt", text: "Over-customization creates maintenance burdens. We help you return to standard code to reduce future costs." }
                ],
                ctaHeading: "Ready to Optimize Your Strategy?",
                ctaButtonText: "Talk to a Consultant",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Consulting Engagement Models",
                paragraphs: [
                    "Our consulting engagements are flexible and tailored to your specific needs. Whether you require a short-term audit, a strategic roadmap project, or long-term advisory services, we offer models that fit your budget.",
                    "We believe in transparency and value-driven pricing. Contact us to discuss your goals, and we'll provide a detailed proposal outlining the scope, deliverables, and investment required for your strategic initiative."
                ],
                buttonText: "Request a Proposal",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapConsulting;
