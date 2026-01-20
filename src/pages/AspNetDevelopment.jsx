import React from 'react';
import { FaGlobe, FaServer, FaShieldAlt, FaCodeBranch, FaLaptopCode, FaDatabase } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-aspnet.png';
import costsImg from '../assets/costs-aspnet.png';
import overviewImg from '../assets/overview-aspnet.png';

const AspNetDevelopment = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="ASP.NET Web Development"
            subtitle="Robust, secure, and dynamic web applications powered by Microsoft technology."
            description="Create feature-rich web portals, APIs, and real-time applications using the powerful ASP.NET Core framework."
            approachSteps={[
                { title: "Plan", text: "Requirement gathering and technical specification.", icon: <FaCodeBranch /> },
                { title: "Design", text: "UI/UX wireframing and database schema design.", icon: <FaLaptopCode /> },
                { title: "Build", text: "Agile development using ASP.NET MVC or Razor Pages.", icon: <FaGlobe /> },
                { title: "Secure", text: "Implementing OAuth, JWT, and best-in-class security.", icon: <FaShieldAlt /> }
            ]}
            benefits={[
                "High performance web apps",
                "Built-in security features",
                "Real-time functionality (SignalR)",
                "Easy maintenance and deployment",
                "Cross-platform execution",
                "Rich developer ecosystem"
            ]}
            tools={[
                "ASP.NET Core MVC",
                "Razor Pages",
                "SignalR",
                "Web API",
                "Entity Framework Core",
                "SQL Server"
            ]}
            idealFor={[
                "B2B Customer Portals",
                "E-commerce platforms",
                "Real-time dashboards",
                "Enterprise intranets"
            ]}
            faqs={[
                { q: "Is ASP.NET better than Node.js?", a: "For enterprise-grade, typed, and structured backends, ASP.NET often offers superior performance and maintainability." },
                { q: "Can you build APIs?", a: "Yes, we build high-performance RESTful and GraphQL APIs using ASP.NET Web API." },
                { q: "What about frontend?", a: "We often pair ASP.NET backends with React used in this site, or Angular frontends." }
            ]}
            ctaText="Start Your Web Project"

            // Overview Section
            overviewSection={{
                heading: "Powering the Modern Web",
                paragraphs: [
                    "ASP.NET is more than just a framework; it's a complete ecosystem for building modern web applications. From simple websites to complex manufacturing dashboards processing millions of events, ASP.NET Core delivers unmatched speed and reliability.",
                    "We leverage features like SignalR for real-time bi-directional communication (perfect for chat apps and live feeds) and Blazor for building interactive web UIs with C# instead of JavaScript.",
                    "Our team ensures your web application is secure by design, implementing industry-standard authentication and authorization protocols to protect your sensitive business data."
                ],
                buttonText: "Web Strategy Call",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Web Development Challenges We Solve",
                subtitle: "We build web apps that work when it matters most.",
                challenges: [
                    { title: "Slow Load Times", text: "Performance is a feature. We optimize caching, database queries, and code execution for sub-second response times." },
                    { title: "Security Vulnerabilities", text: "We patch SQL injection, XSS, and CSRF holes before hackers find them." },
                    { title: "Mobile Responsiveness", text: "Your web app must work on phones. We ensure fully responsive, adaptive designs." },
                    { title: "Scalability", text: "Can your site handle Black Friday traffic? We design horizontally scalable architectures." },
                    { title: "Real-Time Needs", text: "Users hate refreshing pages. We use SignalR to push updates instantly." },
                    { title: "Database Bottlenecks", text: "We optimize EF Core queries and use indexing strategies to keep data access fast." }
                ],
                ctaHeading: "Build Better Web Apps",
                ctaButtonText: "Consult Our Developers",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Cost-Efficient Web Solutions",
                paragraphs: [
                    "Building on ASP.NET allows us to leverage a vast library of pre-built NuGet packages, reducing development time and cost.",
                    "We offer fixed-bid projects for defined scopes, giving you budget certainty before a single line of code is written."
                ],
                buttonText: "Estimate Your Project",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default AspNetDevelopment;
