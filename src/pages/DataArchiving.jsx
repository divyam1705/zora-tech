import React from 'react';
import { FaArchive, FaDatabase, FaHistory, FaServer, FaBalanceScale, FaSearch } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-data-archiving.png';
import costsImg from '../assets/costs-data-archiving.png';
import overviewImg from '../assets/overview-data-archiving.png';

const DataArchiving = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Data Archiving & ILM"
            subtitle="Optimize system performance and reduce costs by managing data lifecycles effectively."
            description="Securely move aging data from your production database to cost-effective storage while keeping it accessible for audit compliance."
            approachSteps={[
                { title: "Analyze", text: "Identifying data volume growth hotspots.", icon: <FaSearch /> },
                { title: "Define", text: "Setting retention rules based on legal requirements.", icon: <FaBalanceScale /> },
                { title: "Archive", text: "Executing archiving runs using ADK or ILM.", icon: <FaArchive /> },
                { title: "Store", text: "Moving files to secure content repositories (Cloud/On-Prem).", icon: <FaHistory /> }
            ]}
            benefits={[
                "Reduced database size",
                "Improved system performance",
                "Lower backup & restore times",
                "Legal compliance (GDPR)",
                "Deferred hardware upgrades",
                "S/4HANA migration cost reduction"
            ]}
            tools={[
                "SAP ILM (Information Lifecycle Management)",
                "OpenText / PBS ContentLink",
                "SAP IQ",
                "Azure Blob / AWS S3",
                "Archive Development Kit (ADK)"
            ]}
            idealFor={[
                "Companies with slow SAP systems",
                "Organizations preparing for HANA migration",
                "Enterprises with strict audit rules",
                "Businesses facing storage capacity limits"
            ]}
            faqs={[
                { q: "Is archived data accessible?", a: "Yes, users can view archived documents seamlessly within SAP transactions." },
                { q: "Does this affect legal audits?", a: "No, archiving ensures data integrity and retention, actually aiding compliance." },
                { q: "How often should we archive?", a: "We recommend a quarterly or annual archiving schedule to keep growth in check." }
            ]}
            ctaText="Start Archiving"

            // Overview Section
            overviewSection={{
                heading: "Tame Your Data Explosion",
                paragraphs: [
                    "Data is the lifeblood of business, but too much of it can clog the arteries. As your system ages, historical data accumulates, slowing down performance, increasing backup windows, and driving up storage costs.",
                    "Our Data Archiving services help you implement a strategic Information Lifecycle Management (ILM) plan. We distinguish between 'hot' active data and 'cold' historical data, moving the latter to cheaper, secure storage without breaking access.",
                    "Before migrating to S/4HANA (where memory is expensive), archiving is crucial. Cleaning your house before you move can save you 30-40% on appliance hardware costs."
                ],
                buttonText: "Get Archiving Assessment",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Data Growth Problems We Solve",
                subtitle: "Don't let data volume dictate your IT budget.",
                challenges: [
                    { title: "HANA Cost", text: "In-memory storage is pricey. Archiving reduces the memory footprint required." },
                    { title: "Slow Reporting", text: "Queries scanning 10 years of data are slow. Archiving speeds up operational reporting." },
                    { title: "Backup Windows", text: "Backups taking too long? Smaller databases backup and restore much faster." },
                    { title: "GDPR Risks", text: "Keeping personal data forever is illegal. ILM enables compliant data destruction." },
                    { title: "System Stability", text: "Overloaded tables cause dumps. Archiving keeps table sizes manageable." },
                    { title: "Legal Holds", text: "We implement retention policies that freeze data deletion when legal cases arise." }
                ],
                ctaHeading: "Shrink Your Database",
                ctaButtonText: "Consult an ILM Expert",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Archiving ROI",
                paragraphs: [
                    "Data Archiving projects typically have a very short payback period (often <6 months) due to immediate savings on disk storage, backup infrastructure, and potential hardware purchases.",
                    "We help you calculate the TCO reduction to justify the project investment."
                ],
                buttonText: "Calculate Savings",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default DataArchiving;
