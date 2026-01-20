import React from 'react';
import { FaWindows, FaCode, FaCloud, FaDatabase, FaServer, FaCogs } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-dotnet.png';
import costsImg from '../assets/costs-dotnet.png';
import overviewImg from '../assets/overview-dotnet.png';

const DotNetDevelopment = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title=".NET Development"
            subtitle="Building high-performance, scalable enterprise applications with the Microsoft ecosystem."
            description="Leverage the full power of the .NET framework to build secure, cross-platform applications that drive your business forward."
            approachSteps={[
                { title: "Architect", text: "Designing modular, microservices-based architectures.", icon: <FaServer /> },
                { title: "Develop", text: "Clean coding with C# and the latest .NET Core framework.", icon: <FaCode /> },
                { title: "Integrate", text: "Seamless connection with Azure, SQL Server, and third-party APIs.", icon: <FaDatabase /> },
                { title: "Deploy", text: "CI/CD pipelines for automated testing and cloud deployment.", icon: <FaCloud /> }
            ]}
            benefits={[
                "Cross-platform compatibility",
                "High performance & speed",
                "Enterprise-grade security",
                "Large ecosystem support",
                "Scalable microservices",
                "Seamless Azure integration"
            ]}
            tools={[
                "ASP.NET Core",
                "C#",
                "Entity Framework",
                "Azure DevOps",
                "Blazor",
                "Visual Studio"
            ]}
            idealFor={[
                "Enterprises needing robust internal portals",
                "SaaS companies building scalable products",
                "Businesses integrated with Microsoft stack",
                "High-traffic web API development"
            ]}
            faqs={[
                { q: "Do you work with .NET Core?", a: "Yes, we specialize in modern .NET 6/7/8+ development for cross-platform needs." },
                { q: "Can you migrate legacy apps?", a: "We have deep experience migrating legacy ASP.NET WebForms to modern .NET Core." },
                { q: "Do you provide Azure support?", a: "Yes, we are experts in deploying and managing .NET apps on Azure Cloud." }
            ]}
            ctaText="Build with .NET"

            // Overview Section
            overviewSection={{
                heading: "Enterprise-Grade Solutions on Microsoft .NET",
                paragraphs: [
                    "For decades, the Microsoft .NET framework has been the backbone of enterprise software. Today, with the advent of .NET Core (now just .NET), it has evolved into a blazingly fast, cross-platform powerhouse capable of running anywhere—from Windows servers to Linux containers in the cloud.",
                    "Our .NET development services cover the full spectrum: from building complex enterprise resource planning (ERP) systems to high-frequency trading platforms. We write clean, maintainable C# code that stands the test of time.",
                    "Whether you need to modernize a legacy application or build a cloud-native microservices architecture from scratch, Zora Technology has the certified experts to deliver excellence."
                ],
                buttonText: "Discuss Your Project",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Software Challenges We Resolve",
                subtitle: "We turn complex requirements into elegant code.",
                challenges: [
                    { title: "Legacy Debt", text: "Old ASP.NET WebForms apps are slow and insecure. We modernize them to .NET Core/Blazor without data loss." },
                    { title: "Scalability Limits", text: "Monolithic apps crash under load. We break them into scalable microservices containers." },
                    { title: "Cloud Readiness", text: "Moving to the cloud requires more than just 'lift and shift'. We refactor apps to be truly cloud-native." },
                    { title: "Integration Headaches", text: "Connecting disparate systems is hard. We build robust APIs and middleware solutions." },
                    { title: "Security Flaws", text: "We implement rigorous security standards (OWASP) to protect your application from vulnerabilities." },
                    { title: "Maintenance Costs", text: "Spaghetti code is expensive to fix. We write clean, documented code that is easy to maintain." }
                ],
                ctaHeading: "Modernize Your Stack",
                ctaButtonText: "Talk to a .NET Architect",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Transparent Development Costs",
                paragraphs: [
                    "We offer flexible engagement models to suit your project scope. From dedicated teams (Staff Augmentation) to fixed-price project delivery, you get full visibility into where your budget goes.",
                    "By using modern .NET tools and cloud automation, we significantly reduce development time and operational costs compared to legitimate stacks."
                ],
                buttonText: "Get a Quote",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default DotNetDevelopment;
