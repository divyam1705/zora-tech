import React from 'react';
import { FaGlobe, FaMapMarkedAlt, FaSyncAlt, FaUserCheck, FaRoute, FaCheckCircle } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/sap-rollout-hero.png';
import costsImg from '../assets/costs-sap-rollout.png';
import overviewImg from '../assets/overview-sap-rollout.png';

const SapRollout = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Global Rollouts"
            subtitle="Extending your SAP template to subsidiaries across the globe with local relevance."
            description="Seamlessly expand your global footprint by rolling out a standardized SAP template while ensuring local compliance and cultural adoption."
            approachSteps={[
                { title: "Defne Template", text: "Establish the global core template and lock down standard processes.", icon: <FaMapMarkedAlt /> },
                { title: "Localize", text: "Adapt for local tax, legal, and language requirements.", icon: <FaGlobe /> },
                { title: "Deploy", text: "Execute the rollout using a fit-gap analysis approach.", icon: <FaRoute /> },
                { title: "Adopt", text: "Ensure local user acceptance and smooth change management.", icon: <FaUserCheck /> }
            ]}
            benefits={[
                "Standardized global processes",
                "Compliance with local regulations",
                "Reduced rollout time & cost",
                "Unified global reporting",
                "Scalable operational model",
                "Preserved data integrity"
            ]}
            tools={[
                "SAP S/4HANA Cloud",
                "Central Finance",
                "Localization Hub",
                "Migration Cockpit",
                "SAP Translation Hub"
            ]}
            idealFor={[
                "Multinational corporations extending to new regions",
                "Companies acquiring new subsidiaries (M&A)",
                "Enterprises standardizing fragmented systems",
                "Businesses entering emerging markets"
            ]}
            faqs={[
                { q: "How do you handle local taxes?", a: "We use standard SAP country versions and localization packs to ensure full tax compliance." },
                { q: "Do you support multiple languages?", a: "Yes, we manage translation and training in local languages for user adoption." },
                { q: "Can you rollout in waves?", a: "Yes, a phased wave approach is often best to manage risk and resources." }
            ]}
            ctaText="Start Your Rollout"

            // Overview Section
            overviewSection={{
                heading: "Think Global, Act Local with Your SAP System",
                paragraphs: [
                    "Expanding into new markets is a major milestone, but it brings technical and operational complexities. Your SAP system needs to support this growth by acting as a unified backbone that connects headquarters with every local entity.",
                    "Our SAP Rollout services focus on extending your proven Global Template to new geographies. We rigorously manage the tension between global standardization (for efficiency and reporting) and local adaptation (for compliance and usability).",
                    "We bring deep expertise in country-specific legal requirements, tax structures, and business practices, ensuring your rollout is not just a technical installation but a successful business expansion."
                ],
                buttonText: "Plan Global Expansion",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Rollout Roadblocks We Remove",
                subtitle: "Global projects fail when they ignore local reality. We bridge the gap.",
                challenges: [
                    { title: "Localization Complexity", text: "Every country has unique statutory reporting and tax laws. We implement correct country versions (e.g., GST in India, HIPAA in USA)." },
                    { title: "Cultural Resistance", text: "Local teams often resist 'headquarters processes'. We engage them early to ensure buy-in and adoption." },
                    { title: "Time Zone Coordination", text: "Managing global teams is tough. Our distributed delivery model ensures 24-hour project progress." },
                    { title: "Data Consistency", text: "Merging new subsidiary data into the global core requires strict governance. We enforce master data standards." },
                    { title: "Scope Creep", text: "Local requests can dilute the global template. We strictly govern 'fit-to-standard' to maintain system integrity." },
                    { title: "Training Gaps", text: "Language barriers can hinder training. We deliver localized training materials and support." }
                ],
                ctaHeading: "Expand Confidently",
                ctaButtonText: "Consult Our Rollout Team",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Cost-Effective Expansion",
                paragraphs: [
                    "Rolling out an existing template is significantly cheaper than a greenfield implementation, but hidden costs can mount without proper planning. We help you budget accurately for localization development, travel, training, and data migration.",
                    "Our 'Factory Model' for rollouts allows us to replicate success across multiple countries, achieving economies of scale and reducing the cost per country for subsequent rollouts."
                ],
                buttonText: "Estimate Rollout Budget",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapRollout;
