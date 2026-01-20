import React from 'react';
import { FaDatabase, FaSitemap, FaCheckDouble, FaUserShield, FaGlobe, FaSearch } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-mdm.png';
import costsImg from '../assets/costs-mdm.png';
import overviewImg from '../assets/overview-mdm.png';

const MasterDataManagement = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Master Data Management (MDM)"
            subtitle="Establish a single source of truth for your critical business data."
            description="Eliminate duplicates and errors. We help you govern, clean, and synchronize master data across your enterprise."
            approachSteps={[
                { title: "Profile", text: "Analyzing current data quality and duplication rates.", icon: <FaSearch /> },
                { title: "Govern", text: "Defining ownership, standards, and validation rules.", icon: <FaUserShield /> },
                { title: "Consolidate", text: "Merging duplicates into a 'Golden Record'.", icon: <FaDatabase /> },
                { title: "Distribute", text: "Syndicating clean data to all subscribing systems.", icon: <FaGlobe /> }
            ]}
            benefits={[
                "Trusted reporting & analytics",
                "Reduced supply chain errors",
                "360-degree customer view",
                "Regulatory compliance",
                "Faster operational processes",
                "Simplified system integration"
            ]}
            tools={[
                "SAP Master Data Governance (MDG)",
                "Informatica MDM",
                "TIBCO EBX",
                "Talend MDM",
                "Semarchy"
            ]}
            idealFor={[
                "Organizations with multiple ERPs",
                "Mergers causing data duplication",
                "Companies with poor address quality",
                "Product Information Management (PIM) needs"
            ]}
            faqs={[
                { q: "What domains do you cover?", a: "We specialize in Customer, Vendor, Material (Product), and Finance master data." },
                { q: "Is MDM a tool or a process?", a: "It's both. We implement the software tool AND design the governance organization to run it." },
                { q: "How long to see value?", a: "Data cleaning gives immediate value, but full MDM maturity is a journey of 6-12 months." }
            ]}
            ctaText="Clean Your Data"

            // Overview Section
            overviewSection={{
                heading: "Data You Can Trust",
                paragraphs: [
                    "Bad data costs businesses millions in lost sales, shipping errors, and compliance fines. If you have three different addresses for the same customer, how do you invoice them? If you have duplicate part numbers, how do you manage inventory?",
                    "Master Data Management (MDM) is the discipline of creating a 'Golden Record'—one trusted version of the truth. We help you implement the processes and technology to ensure that your core data assets remain clean, consistent, and complete.",
                    "With Zora Technology MDM services, you stop fixing data downstream and start governing it at the source."
                ],
                buttonText: "Start Governance Journey",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "MDM Challenges We Tackle",
                subtitle: "From chaos to clarity.",
                challenges: [
                    { title: "Duplicate Records", text: "We use fuzzy matching algorithms to identify and merge duplicate entries automatically." },
                    { title: "Data Silos", text: "Marketing thinks Customer A lies in New York; Sales thinks London. We help them agree." },
                    { title: "Governance Limits", text: "Nobody owns the data. We assist in setting up Data Stewards and Councils." },
                    { title: "Address Quality", text: "We integrate address validation services to ensure shipping accuracy." },
                    { title: "Complex Hierarchies", text: "Managing corporate trees (Parent-Child relationships) is hard. We visualize and manage them." },
                    { title: "Input Errors", text: "We build user-friendly request forms with drop-downs and checks to prevent bad entry." }
                ],
                ctaHeading: "Fix Your Master Data",
                ctaButtonText: "Talk to an MDM Architect",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "The Cost of Bad Data",
                paragraphs: [
                    "The '1-10-100' rule says it costs $1 to verify a record, $10 to clean it later, and $100 if a mistake reaches the customer. MDM is an investment in preventing the $100 penalty.",
                    "We help you build a business case focused on operational efficiency and risk reduction."
                ],
                buttonText: "Data Quality Audit",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default MasterDataManagement;
