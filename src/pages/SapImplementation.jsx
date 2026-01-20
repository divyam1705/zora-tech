import React from 'react';
import { FaRocket, FaCogs, FaProjectDiagram, FaCheckCircle, FaSearch, FaTools } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import Interactive3DBox from '../components/Interactive3DBox';
import heroBg from '../assets/sap-impl-hero-bg.png';
import costsImg from '../assets/costs-sap-implementation.png';
import overviewImg from '../assets/overview-sap-implementation.png';

const SapImplementation = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Implementation Services"
            subtitle="Deploy SAP solutions with speed, confidence, and clarity."
            description="Our expert teams ensure seamless integration and maximum value for your organization through proven implementation methodologies."
            approachSteps={[
                { title: "Discover & Plan", text: "Detailed analysis of your requirements and roadmap definition.", icon: <FaSearch /> },
                { title: "Design & Architect", text: "Blueprint creation and technical architecture design.", icon: <FaProjectDiagram /> },
                { title: "Build & Configure", text: "System configuration, customization, and rigorous testing.", icon: <FaCogs /> },
                { title: "Deploy & Support", text: "Go-live execution and ongoing hypercare support.", icon: <FaRocket /> }
            ]}
            benefits={[
                "Accelerated time-to-value",
                "Reduced operational risk",
                "Seamless system integration",
                "Scalable and future-proof architecture",
                "Enhanced user adoption",
                "Comprehensive post-go-live support"
            ]}
            tools={[
                "SAP S/4HANA",
                "SAP Fiori",
                "SAP Solution Manager",
                "SAP Best Practices",
                "SAP Activate Methodology"
            ]}
            idealFor={[
                "Organizations moving to SAP for the first time",
                "Enterprises upgrading their existing SAP landscape",
                "Companies requiring complex system integrations",
                "Businesses looking for optimized business processes"
            ]}
            faqs={[
                { q: "What implementation methodology do you use?", a: "We primarily follow the SAP Activate methodology, ensuring agile and efficient project delivery." },
                { q: "How long does an implementation take?", a: "Timelines vary by scope, but we focus on rapid deployment strategies to deliver value quickly." },
                { q: "Do you offer post-implementation support?", a: "Yes, we provide comprehensive hypercare and long-term AMS support." }
            ]}
            ctaText="Start Your Journey"
            // Overview Section (Digital Transformation)
            overviewSection={{
                heading: "Zora Technology Ensures Your Successful Digital Transformation",
                paragraphs: [
                    "Digital solutions offer world-class capabilities to help companies achieve growth, agility, and value. However, to harness the full benefits of your technology stack, you need a trusted vendor with the right knowledge, experience, and tools.",
                    "Our team of technical experts brings a wealth of experience and a proven track record of successful implementations across diverse industries. With meticulous attention to detail, we work closely with you to understand your unique business needs and objectives, then guide you every step of the way through planning, execution, and launch — all while meeting your time and budget constraints.",
                    "Choosing Zora Technology as a consulting and support partner is your guarantee of getting an end-to-end solution that is tailored to meet your business needs. With years of proven expertise and recognition as a strategic industry leader, our company is ready to be your trusted partner in every step of your digital transformation journey."
                ],
                buttonText: "Start The Conversation",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}
            // Challenges Section
            challengesSection={{
                heading: "SAP Implementation Challenges We Address",
                subtitle: "The SAP implementation process may include several challenges for your business, and the Zora Tech team is here to help you successfully overcome them all.",
                challenges: [
                    { title: "Complexity", text: "SAP implementations can be highly complex due to the wide range of modules available. Our team will carefully plan and execute the required configurations to suit your organization's needs." },
                    { title: "Customization vs. standardization", text: "Balancing the needed customizations with reliance on standard SAP processes can be challenging. Our experts will help you strike the right balance without increasing complexity or costs." },
                    { title: "Data migration", text: "Migrating data from legacy systems to SAP can be a daunting task. Our job is to ensure data accuracy, integrity, and consistency throughout the entire migration process." },
                    { title: "Performance", text: "Optimizing SAP performance to meet business requirements and user expectations can be tough. We ensure your system is tuned for peak efficiency and responsiveness." },
                    { title: "Integrations", text: "Integrating SAP with existing systems and third-party apps can be essential. We ensure seamless connectivity across your entire landscape." },
                    { title: "Risk management", text: "Proactively identifying and mitigating risks throughout the SAP implementation process is essential for project success and business continuity." },
                    { title: "Operational efficiency", text: "Managing large volumes of scattered data may slow down processes, resulting in missed opportunities and increased costs. SAP implementation empowers companies that work with big datasets to make informed decisions in real-time, thus reducing business costs." },
                    { title: "Scalability and adaptation", text: "The lack of scalable solutions hinders business success, limiting growth and efficiency. SAP implementation allows for continuous business growth, scalability, and strategic planning, while our experts help you adapt SAP solutions and customize them to fit your unique business needs and boost productivity." },
                    { title: "Reporting", text: "Do you lack data to drive informed decision-making and accurate forecasts? SAP's advanced solutions allow you to retrieve and aggregate analytics and data for better business decisions. The Zora Tech team is here to help you make the most out of your reporting tools." },
                    { title: "Process automation", text: "With SAP implementation, manual and time-consuming tasks become relics. Leverage our experience to automate your processes, minimize errors, and have more time for strategic business planning." },
                    { title: "Data safety", text: "Keeping your essential data safe is crucial, as any data compromise or even loss may result in reputational and financial damages. We implement role-based SAP solutions so you can manage data access for each particular user by configuring mass or individual permissions." },
                    { title: "Productivity", text: "Any business is concerned about how the implementation of a new system will affect their productivity and revenue streams. Our SAP expertise is here to raise your profits, grow sales flow, and automate mission-critical processes, just as we have already achieved for our SAP implementation clients." }
                ],
                ctaHeading: "What Is Your Project's Challenge?",
                ctaButtonText: "Contact An Expert",
                ctaButtonLink: "/contact"
            }}
            // Costs Section
            costsSection={{
                heading: "SAP Implementation Costs",
                paragraphs: [
                    "The cost of SAP implementation depends on many factors, such as type of license, deployment option (on-premise or cloud), initial complexity of the business landscape, size of the company, number of users, functionality requirements, data amounts to transform, ongoing maintenance and support, and individual client preferences (if any).",
                    "With profound expertise evaluating SAP implementation projects against these criteria, Zora Tech experts are always here to help you choose the most economically effective solutions to meet the demands of your business. Contact us to receive your tailored SAP implementation solution."
                ],
                buttonText: "Get a Quote",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapImplementation;
