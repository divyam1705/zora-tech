import React from 'react';
import { FaCloudUploadAlt, FaChartLine, FaCogs, FaShieldAlt, FaHandshake, FaRocket } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-rise-sap.png';
import costsImg from '../assets/costs-rise-sap.png';
import overviewImg from '../assets/overview-rise-sap.png';

const RiseWithSap = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="RISE with SAP"
            subtitle="Your comprehensive concierge service to the Intelligent Enterprise in the Cloud."
            description="Bundle your specialized cloud ERP, infrastructure, and technical managed services into one contract for a seamless digital transformation."
            approachSteps={[
                { title: "Assess", text: "Analyze current landscape and determine the best cloud path.", icon: <FaSearch /> },
                { title: "Migrate", text: "Technical migration of data and processes to the cloud.", icon: <FaCloudUploadAlt /> },
                { title: "Modernize", text: "Refactoring code and adopting Clean Core principles.", icon: <FaCogs /> },
                { title: "Manage", text: "Running operations with SAP's single SLA commitment.", icon: <FaHandshake /> }
            ]}
            benefits={[
                "One contract, one responsible party",
                "Reduced TCO compared to on-premise",
                "Elastic cloud infrastructure",
                "Access to business network starter pack",
                "Continuous innovation updates",
                "Technical managed services included"
            ]}
            tools={[
                "SAP S/4HANA Cloud Private Edition",
                "SAP Business Technology Platform",
                "Signavio Process Intelligence",
                "Custom Code Migration App",
                "Readiness Check"
            ]}
            idealFor={[
                "Existing SAP ECC customers migrating to Cloud",
                "Enterprises wanting to keep customizations in Cloud",
                "Organizations simplifying vendor management",
                "Businesses needing flexible infrastructure (Hyperscalers)"
            ]}
            faqs={[
                { q: "What's included in RISE?", a: "Cloud ERP, infrastructure hosting, technical managed services, BTP credits, and Signavio." },
                { q: "Can we keep our customizations?", a: "Yes, Private Edition supports legacy code, but we recommend modernizing to side-by-side extensions." },
                { q: "Which cloud provider can we use?", a: "You can choose Azure, AWS, Google Cloud, or SAP data centers as your IaaS provider." }
            ]}
            ctaText="Rise to the Cloud"

            // Overview Section
            overviewSection={{
                heading: "Business Transformation as a Service",
                paragraphs: [
                    "RISE with SAP is not just a product; it's a holistic offering designed to take your business to the cloud on your terms. It simplifies the complex journey of digital transformation by bundling software, infrastructure, and technical services into a single offer.",
                    "Whether you are migrating a complex legacy ECC system or starting fresh, RISE provides the Private Cloud environment that gives you the control you need with the agility of the cloud. You retain the ability to customize while gaining the benefits of a subscription model.",
                    "Zora Technology partners with you to execute the migration and modernization layer, ensuring that your move to RISE delivers actual business value, not just a change of hosting."
                ],
                buttonText: "Start Your RISE Journey",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Transformation Risks We Mitigate",
                subtitle: "Moving to the cloud is a big step. We make it safe.",
                challenges: [
                    { title: "Vendor Complexity", text: "Managing separate contracts for licenses, hosting, and support is hard. RISE consolidates this into ONE." },
                    { title: "Custom Code", text: "Legacy code prevents upgrades. We help analyze and refactor code to be 'Cloud Ready'." },
                    { title: "Downtime Risk", text: "We plan near-zero downtime migrations to minimize business disruption." },
                    { title: "Process Inefficiency", text: "Lifting and shifting bad processes solves nothing. We use Signavio to optimize flows before migration." },
                    { title: "Skill Gaps", text: "Cloud operations are different. RISE includes technical management, so your team doesn't need to be basis experts." },
                    { title: "Security Fears", text: "RISE offers enterprise-grade security and compliance defaults out of the box." }
                ],
                ctaHeading: "Transform With Confidence",
                ctaButtonText: "Consult a RISE Expert",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "TCO Optimization",
                paragraphs: [
                    "RISE with SAP typically reduces Total Cost of Ownership by 20% over 5 years by eliminating hardware refresh cycles, reducing internal staffing needs for basis work, and consolidating vendor spend.",
                    "We help you build the business case, comparing your current on-premise run costs against the RISE subscription model to prove the value."
                ],
                buttonText: "Get TCO Analysis",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};
import { FaSearch } from 'react-icons/fa'; // Added missing import

export default RiseWithSap;
