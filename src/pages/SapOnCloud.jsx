import React from 'react';
import { FaCloud, FaServer, FaShieldAlt, FaRocket, FaTools, FaCheckCircle, FaProjectDiagram, FaSearch, FaCogs } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import Interactive3DBox from '../components/Interactive3DBox';
import heroBg from '../assets/hero-cloud-transformation.png';
import costsImg from '../assets/costs-cloud.png'; // Assuming a costs image might exist or using default if not found
import overviewImg from '../assets/overview-cloud.png'; // Assuming overview image might exist

const SapOnCloud = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP on Cloud Services"
            subtitle="Accelerate innovation with SAP on the World's Leading Cloud Platforms."
            description="Migrate, manage, and optimize your SAP workloads on AWS, Azure, or Google Cloud with our expert cloud services."
            approachSteps={[
                { title: "Cloud Strategy", text: "Defining the right cloud roadmap for your SAP landscape.", icon: <FaSearch /> },
                { title: "Migration", text: "Safe and efficient transition of SAP systems to the cloud.", icon: <FaRocket /> },
                { title: "Optimization", text: "Fine-tuning performance and costs in the cloud environment.", icon: <FaCogs /> },
                { title: "Management", text: "24/7 monitoring and management of your cloud infrastructure.", icon: <FaServer /> }
            ]}
            benefits={[
                "Scalability and Flexibility",
                "Reduced Total Cost of Ownership (TCO)",
                "Enhanced Security and Compliance",
                "High Availability and Disaster Recovery",
                "Faster Innovation Cycles",
                "Global Reach"
            ]}
            tools={[
                "Amazon Web Services (AWS)",
                "Microsoft Azure",
                "Google Cloud Platform (GCP)",
                "SAP HANA Enterprise Cloud",
                "SAP BTP"
            ]}
            idealFor={[
                "Companies looking to modernize their infrastructure",
                "Businesses needing scalable resources for SAP HANA",
                "Organizations reducing data center footprint",
                "Enterprises seeking pay-as-you-go commercial models"
            ]}
            faqs={[
                { q: "Which cloud provider is best for SAP?", a: "We help you evaluate AWS, Azure, and GCP to find the best fit for your specific SAP workload and business goals." },
                { q: "Can we move existing SAP systems to the cloud?", a: "Yes, we specialize in 'Lift and Shift' as well as re-platforming migrations to the cloud." },
                { q: "Is SAP on Cloud secure?", a: "Cloud providers offer enterprise-grade security. We add layers of SAP-specific security best practices to ensure data protection." }
            ]}
            ctaText="Move to Cloud"
            // Overview Section
            overviewSection={{
                heading: "Unleash the Power of SAP in the Cloud",
                paragraphs: [
                    "Running SAP on the cloud offers unparalleled agility and innovation potential. Whether you are considering a greenfield implementation or migrating an existing landscape, Zora Technologies provides the expertise to ensure a smooth journey.",
                    "We partner with major cloud providers to deliver robust, secure, and high-performance environments for your critical business applications. Our cloud architects design solutions that maximize uptime while optimizing costs.",
                    "From initial assessment to ongoing managed services, we handle the complexities of cloud infrastructure so you can focus on your core business processes."
                ],
                buttonText: "Discuss Cloud Strategy",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}
            // Challenges Section
            challengesSection={{
                heading: "Overcoming Cloud Migration Challenges",
                subtitle: "We address the common hurdles in moving SAP to the cloud.",
                challenges: [
                    { title: "Downtime minimization", text: "We utilize advanced migration tools to minimize business disruption during the cutover phase." },
                    { title: "Security concerns", text: "We implement rigorous security architectures including VPCs, encryption, and identity management." },
                    { title: "Cost control", text: "Cloud costs can spiral if not managed. We implement FinOps practices to keep your cloud bill optimized." },
                    { title: "Integration", text: "We ensure your cloud-based SAP systems connect seamlessly with on-premise and other cloud applications." },
                    { title: "Compliance", text: "We ensure your cloud environment meets all regulatory and industry compliance standards." },
                    { title: "Skill gaps", text: "Our team supplements your internal IT staff with specialized cloud skills." }
                ],
                ctaHeading: "Ready for Cloud?",
                ctaButtonText: "Get a Cloud Assessment",
                ctaButtonLink: "/contact"
            }}
            // Costs Section
            costsSection={{
                heading: "Optimized Cloud Investment",
                paragraphs: [
                    "Moving to the cloud shifts CapEx to OpEx, providing financial flexibility. We help you assume the right sizing to avoid over-provisioning.",
                    "Our managed services include continuous cost optimization reviews to ensure you are only paying for what you need."
                ],
                buttonText: "Calculate TCO",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapOnCloud;
