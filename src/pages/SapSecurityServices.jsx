import React from 'react';
import { FaLock, FaUserSecret, FaKey, FaShieldAlt, FaFileContract, FaEye } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/sap-security-hero.png';
import costsImg from '../assets/costs-sap-security.png';
import overviewImg from '../assets/overview-sap-security.png';

const SapSecurityServices = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Security & GRC"
            subtitle="Protecting your enterprise data with robust access controls and compliance frameworks."
            description="Safeguard your SAP landscape against internal and external threats while ensuring regulatory compliance."
            approachSteps={[
                { title: "Audit", text: "Comprehensive vulnerability scanning and role analysis.", icon: <FaSearch /> },
                { title: "Design", text: "Architecting secure roles and authorization concepts.", icon: <FaKey /> },
                { title: "Implement", text: "Deploying GRC and IDM solutions.", icon: <FaShieldAlt /> },
                { title: "Monitor", text: "Continuous threat detection and compliance reporting.", icon: <FaEye /> }
            ]}
            benefits={[
                "Audit-proof compliance (SOX, GDPR)",
                "Prevention of segregation of duties (SoD) conflicts",
                "Reduced risk of data leakage",
                "Automated user provisioning",
                "Real-time threat monitoring",
                "Secure cloud identity management"
            ]}
            tools={[
                "SAP GRC Access Control",
                "SAP IAG (Identity Access Governance)",
                "SAP Single Sign-On",
                "Enterprise Threat Detection",
                "SAP Code Vulnerability Analyzer"
            ]}
            idealFor={[
                "Public companies facing SOX audits",
                "Organizations with complex role structures",
                "Enterprises migrating to the cloud",
                "Businesses securing sensitive HR/Finance data"
            ]}
            faqs={[
                { q: "How do you handle SoD conflicts?", a: "We use GRC tools to analyze and remediate Segregation of Duties conflicts in your role design." },
                { q: "Do you secure Fiori apps?", a: "Yes, we design catalog-based roles to secure Fiori Launchpad and applications." },
                { q: "Can you help with audit findings?", a: "Absolutely. We specialize in remediating audit gaps and establishing controls." }
            ]}
            ctaText="Secure Your SAP System"

            // Overview Section
            overviewSection={{
                heading: "Security is Not an Afterthought—It's Foundation",
                paragraphs: [
                    "In the digital age, your SAP system holds your most valuable asset: data. Protecting it requires a multi-layered security strategy that goes beyond simple passwords. From preventing unauthorized access to monitoring for cyber threats, SAP Security is a critical business imperative.",
                    "Our dedicated security practice helps you navigate the complex world of GRC (Governance, Risk, and Compliance). We design authorization concepts that follow the 'Principle of Least Privilege', ensuring users have exactly the access they need—no more, no less.",
                    "We also help you automate compliance, turning audit preparation from a frantic monthly event into a continuous, automated background process."
                ],
                buttonText: "Assess Your Security Posture",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Security Risks We Mitigate",
                subtitle: "Vulnerabilities can exist anywhere. We close the gaps.",
                challenges: [
                    { title: "SoD Violations", text: "Users having conflicting access (e.g., creating and paying vendors) creates fraud risk. We detect and clean these up." },
                    { title: "Role Explosion", text: "Too many custom roles make the system unmanageable. We redesign and simplify your role architecture." },
                    { title: "Cyber Threats", text: "SAP systems are targets for hackers. We harden the infrastructure and enable threat detection monitoring." },
                    { title: "Audit Failures", text: "Failing an audit is costly. We establish the controls needed to pass Big 4 audits with flying colors." },
                    { title: "Cloud Access", text: "Managing identities across hybrid landscapes is hard. We implement unified Identity Access Governance (IAG)." },
                    { title: "Code Vulnerabilities", text: "Custom code often hides backdoors. We scan your ABAP code for SQL injection flaws and other risks." }
                ],
                ctaHeading: "Fortify Your Defenses",
                ctaButtonText: "Talk to a Security Architect",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "The Cost of Inaction is Higher",
                paragraphs: [
                    "Investing in SAP Security is an insurance policy for your business. The cost of a data breach or a failed audit far outweighs the investment in robust GRC tools and role design.",
                    "We offer fixed-price security assessments and remediation packages to give you clear visibility into your risk profile and a defined path to compliance."
                ],
                buttonText: "Get a Security Audit Quote",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};
import { FaSearch } from 'react-icons/fa'; // Added missing import

export default SapSecurityServices;
