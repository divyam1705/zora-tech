import React from 'react';
import { FaFileInvoiceDollar, FaBalanceScale, FaSearchDollar, FaHandshake, FaChartPie, FaCheckDouble } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/sap-licenses-hero.png';
import costsImg from '../assets/costs-sap-licenses.png';
import overviewImg from '../assets/overview-sap-licenses.png';

const SapLicenses = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="SAP Licensing Optimization"
            subtitle="Maximize the value of your SAP contract and ensure compliance without overspending."
            description="Expert analysis of your software usage to rightsizing your licenses, reducing shelfware, and negotiating better contracts."
            approachSteps={[
                { title: "Analyze", text: "Deep dive into your current contracts and actual bill of materials.", icon: <FaSearchDollar /> },
                { title: "Audit", text: "Usage measurement to identify unused or underutilized licenses.", icon: <FaCheckDouble /> },
                { title: "Optimize", text: "re-classifying users to lower cost types based on actual activity.", icon: <FaBalanceScale /> },
                { title: "Negotiate", text: "Strategic support during contract renewals and audits.", icon: <FaHandshake /> }
            ]}
            benefits={[
                "Reduced annual maintenance fees",
                "Elimination of shelfware",
                "Audit risk mitigation",
                "Aligned cost with value",
                "Transparency in software spend",
                "Strategic contract terms"
            ]}
            tools={[
                "SAP License Audit Workbench (LAW)",
                "System Measurement (USMM)",
                "Digital Access Evaluation",
                "Contract Rightsizing Models",
                "Software Asset Management (SAM)"
            ]}
            idealFor={[
                "Companies facing an SAP audit",
                "Organizations preparing for S/4HANA contract conversion",
                "Enterprises with undefined 'Digital Access' risk",
                "Businesses looking to cut IT OpEx"
            ]}
            faqs={[
                { q: "Can you help with Indirect Access?", a: "Yes, we analyze your third-party connections to estimate Digital Access costs and options." },
                { q: "How much can we save?", a: "Clients typically see 15-30% savings by rightsizing user types and removing dormant licenses." },
                { q: "Do you sell licenses?", a: "We act as your advocate. We advise on purchasing but our primary goal is optimization." }
            ]}
            ctaText="Optimize Your Spend"

            // Overview Section
            overviewSection={{
                heading: "Stop Paying for Software You Don't Use",
                paragraphs: [
                    "SAP licensing is notoriously complex. Between user types, engines, and the new Digital Access model, it's easy to become non-compliant—or worse, to drastically overpay for software you aren't using.",
                    "Our Licensing Optimization service brings clarity to your contract. We measure what you are actually using versus what you are paying for. We often find that companies are paying for 'Professional' licenses when cheaper 'ESS' or 'Functional' licenses would suffice.",
                    "As you move to S/4HANA or the Cloud, you have a once-in-a-generation opportunity to restructure your contract. We ensure you get the best conversion credit and terms for your future landscape."
                ],
                buttonText: "Audit Your Licenses",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Licensing Pitfalls We Avoid",
                subtitle: "Compliance shouldn't be a guessing game. We provide the facts.",
                challenges: [
                    { title: "Audit Surprise", text: "Unexpected audit findings can lead to millions in penalties. We pre-audit you to find and fix issues first." },
                    { title: "Shelfware", text: "Paying for unused shelfware is wasted budget. We identify and trade-in unused licenses." },
                    { title: "Wrong User Types", text: "Users assigned higher access than needed inflate costs. We map actual usage to the cheapest valid license type." },
                    { title: "Digital Access", text: "Robots and IoT devices accessing SAP can trigger fees. We calculate your exposure and finding the best model." },
                    { title: "Cloud Compliance", text: "Cloud subscriptions work differently (FUEs). We ensure you don't exceed your usage metrics." },
                    { title: "Contract Complexity", text: "Legacy contracts are confusing. We translate terms into plain English and financial impact." }
                ],
                ctaHeading: "Take Control of Your Contract",
                ctaButtonText: "Speak to a License Expert",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Savings That Fund Innovation",
                paragraphs: [
                    "The budget you save on maintenance fees and unnecessary licenses can be directly reinvested into innovation projects like Fiori, AI, or Cloud migration.",
                    "Our optimization services typically pay for themselves within the first year through direct cost reductions. It's not just about compliance; it's about smart financial management of your IT assets."
                ],
                buttonText: "Start Saving Today",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default SapLicenses;
