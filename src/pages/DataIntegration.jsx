import React from 'react';
import { FaNetworkWired, FaPlug, FaExchangeAlt, FaStream, FaProjectDiagram, FaCheckCircle } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-data-integration.png';
import costsImg from '../assets/costs-data-integration.png';
import overviewImg from '../assets/overview-data-integration.png';

const DataIntegration = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Data Integration Services"
            subtitle="Connect your disparate data sources into a unified, actionable ecosystem."
            description="Break down silos. We build robust pipelines that ingest, transform, and deliver data across your enterprise in real-time."
            approachSteps={[
                { title: "Connect", text: "Establishing secure links to APIs, DBs, and files.", icon: <FaPlug /> },
                { title: "Transform", text: "Cleaning and mapping data to a common schema.", icon: <FaExchangeAlt /> },
                { title: "Load", text: "Pushing data to warehouses or data lakes.", icon: <FaStream /> },
                { title: "Govern", text: "Ensuring lineage and quality monitoring.", icon: <FaCheckCircle /> }
            ]}
            benefits={[
                "Single view of the customer",
                "Real-time decision making",
                "Automated reporting",
                "Reduced data redundancy",
                "Improved data quality",
                "Scalable architecture"
            ]}
            tools={[
                "Talend / Informatica",
                "Azure Data Factory",
                "MuleSoft / Boomi",
                "Apache Kafka",
                "SAP Data Services"
            ]}
            idealFor={[
                "Mergers & Acquisitions (System consolidation)",
                "Business Intelligence initiatives",
                "IoT sensor networks",
                "Marketing analytics"
            ]}
            faqs={[
                { q: "Do you handle real-time data?", a: "Yes, we build event-driven pipelines using Kafka and Event Grid for streaming data." },
                { q: "ETL or ELT?", a: "We support both. Modern cloud warehouses often favor ELT (Load then Transform) for speed." },
                { q: "Is the data secure?", a: "Security is paramount. We encrypt data in transit and at rest." }
            ]}
            ctaText="Integrate Your Data"

            // Overview Section
            overviewSection={{
                heading: "The Connected Enterprise",
                paragraphs: [
                    "Data is only valuable if it flows. When information is trapped in silos—like a CRM that doesn't talk to the ERP—opportunities are lost.",
                    "Our Data Integration services act as the plumbing for your digital business. We design and build high-performance data pipelines that move information securely from where it is created to where it is needed.",
                    "Whether you need batch processing for nightly reports or real-time streaming for live dashboards, we engineer solutions that are robust, fault-tolerant, and easy to maintain."
                ],
                buttonText: "Map Your Data Flow",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Integration Blocks We Remove",
                subtitle: "We turn data chaos into order.",
                challenges: [
                    { title: "Format Wars", text: "JSON, XML, CSV, Parquet... we translate between all formats seamlessly." },
                    { title: "Latency", text: "Old batch jobs are too slow. We implement Change Data Capture (CDC) for near-real-time updates." },
                    { title: "API Limits", text: "SaaS tools throttle data access. We implement smart caching and queuing strategies." },
                    { title: "Bad Data", text: "Garbage in, garbage out. We filter and validate data during ingestion." },
                    { title: "Maintenance Hell", text: "Fragile scripts break often. We build resilient pipelines with error handling and alerts." },
                    { title: "Cloud Hybrid", text: "Moving data between on-prem and cloud can be slow. We optimize throughput." }
                ],
                ctaHeading: "Unify Your Systems",
                ctaButtonText: "Talk to an Integration Architect",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Efficiency Savings",
                paragraphs: [
                    "Automated integration saves thousands of man-hours spent on manual data entry and 'spreadsheet consolidation'.",
                    "We help you choose the right tooling—Open Source vs. Enterprise—to match your budget and scalability needs."
                ],
                buttonText: "Estimate Savings",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default DataIntegration;
