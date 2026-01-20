import React from 'react';
import { FaCloud, FaServer, FaChartArea, FaRocket, FaLock, FaSync } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-cloud-transformation.png';
import costsImg from '../assets/costs-cloud.png';
import overviewImg from '../assets/overview-cloud.png';

const CloudDigitalTransformation = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Cloud & Digital Transformation"
            subtitle="Modernize your infrastructure and business models with the power of the cloud."
            description="Move beyond legacy constraints. We help you migrate, modernize, and innovate on leading cloud platforms like Azure, AWS, and GCP."
            approachSteps={[
                { title: "Assess", text: "Evaluating readiness and defining the cloud strategy.", icon: <FaChartArea /> },
                { title: "Migrate", text: "Secure lift-and-shift or re-platforming of workloads.", icon: <FaCloud /> },
                { title: "Modernize", text: "Refactoring applications to be cloud-native (containers/serverless).", icon: <FaSync /> },
                { title: "Optimize", text: "Continuous cost and performance management (FinOps).", icon: <FaRocket /> }
            ]}
            benefits={[
                "Elastic Scalability",
                "Reduced IT Overhead",
                "Enhanced Security Posture",
                "Faster Time-to-Market",
                "Global Reach",
                "Disaster Recovery Resilience"
            ]}
            tools={[
                "Microsoft Azure",
                "Amazon Web Services (AWS)",
                "Google Cloud Platform (GCP)",
                "Docker / Kubernetes",
                "Terraform (IaC)"
            ]}
            idealFor={[
                "Enterprises with aging data centers",
                "Companies needing global availability",
                "Startups requiring instant scale",
                "Organizations pursuing innovation"
            ]}
            faqs={[
                { q: "Is cloud secure?", a: "Public clouds are often more secure than on-premise data centers due to massive investments in security." },
                { q: "Do you support hybrid cloud?", a: "Yes, we design hybrid architectures that keep sensitive data on-prem while using cloud for compute." },
                { q: "How do we control costs?", a: "We implement FinOps practices to monitor usage and prevent 'bill shock'." }
            ]}
            ctaText="Accelerate Transformation"

            // Overview Section
            overviewSection={{
                heading: "Reimagine Business in the Cloud",
                paragraphs: [
                    "Digital Transformation is not just about moving servers; it's about moving mindsets. It's the shift from static, capital-intensive infrastructure to dynamic, on-demand innovation.",
                    "Our Cloud Services help you navigate this journey. We don't just dump your VMs in the cloud; we help you modernize your applications to take advantage of cloud-native features like serverless computing, AI APIs, and infinite storage.",
                    "Whether you are looking to retire a legacy data center or build a new digital product, Zora Technology provides the roadmap and the engine to get you there."
                ],
                buttonText: "Plan Your Migration",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Cloud Challenges We Solve",
                subtitle: "The cloud is complex. We simplify the journey.",
                challenges: [
                    { title: "Migration Failures", text: "Poor planning leads to downtime. Our 6R methodology ensures a smooth transition." },
                    { title: "Cost Overruns", text: "Cloud bills can explode. We optimize reserved instances and sizing to keep costs low." },
                    { title: "Security Gaps", text: "Misconfigurations cause breaches. We implement automated security polices and guardrails." },
                    { title: "Vendor Lock-in", text: "We design multi-cloud or containerized strategies to maintain portability." },
                    { title: "Skill Shortages", text: "Your team may not know cloud. We upskill your staff and provide managed services." },
                    { title: "Compliance", text: "We ensure your cloud environment meets GDPR, HIPAA, and ISO standards." }
                ],
                ctaHeading: "Transform Safely",
                ctaButtonText: "Talk to a Cloud Architect",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "The Economics of Cloud",
                paragraphs: [
                    "Cloud transformation shifts spending from CapEx to OpEx, giving you more cash flow flexibility. However, it requires discipline.",
                    "Our 'Cloud Economics' assessment analyzes your current TCO and projects your future cloud spend, ensuring the business case is solid before you move a single byte."
                ],
                buttonText: "Get Cloud Assessment",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default CloudDigitalTransformation;
