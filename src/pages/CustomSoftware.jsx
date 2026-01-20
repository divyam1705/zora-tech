import React from 'react';
import { FaCogs, FaDraftingCompass, FaPuzzlePiece, FaInfinity, FaFingerprint, FaLayerGroup } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-custom-software.png';
import costsImg from '../assets/costs-custom.png';
import overviewImg from '../assets/overview-custom.png';

const CustomSoftware = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Custom Software Solutions"
            subtitle="Tailor-made software built to solve your unique business problems."
            description="When off-the-shelf software falls short, we design and build bespoke solutions that fit your processes perfectly."
            approachSteps={[
                { title: "Analyze", text: "Deep dive into your business logic and pain points.", icon: <FaFingerprint /> },
                { title: "Prototype", text: "Visualizing the solution before writing code.", icon: <FaDraftingCompass /> },
                { title: "Engineer", text: "Building with scalable, maintainable architecture.", icon: <FaCogs /> },
                { title: "Evolve", text: "Continuous improvement and feature iteration.", icon: <FaInfinity /> }
            ]}
            benefits={[
                "Perfect fit for your workflow",
                "Full ownership of code and IP",
                "No licensing fees",
                "Competitive advantage",
                "Scalable with your business",
                "Integration with legacy systems"
            ]}
            tools={[
                "Microservices",
                "Cloud-Native Architecture",
                "Python / Django",
                "Java / Spring Boot",
                "Docker / Kubernetes"
            ]}
            idealFor={[
                "Businesses with unique operational flows",
                "Startups creating new IP",
                "Companies replacing legacy internal tools",
                "Enterprises needing complex integrations"
            ]}
            faqs={[
                { q: "Who owns the code?", a: "You do. Upon completion and payment, all intellectual property rights are transferred to you." },
                { q: "How long does it take?", a: "Timelines vary, but a typical MVP takes 3-4 months to launch." },
                { q: "Is it expensive?", a: "Higher upfront cost than SaaS, but cheaper in the long run with no recurring license fees." }
            ]}
            ctaText="Build Your Solution"

            // Overview Section
            overviewSection={{
                heading: "Software Designed Around You",
                paragraphs: [
                    "Off-the-shelf software forces you to change your business to fit the tool. Custom software changes the tool to fit your business. At Zora Technology, we believe technology should be an enabler, not a constraint.",
                    "We specialize in solving the 'unsolvable' problems—the complex workflows, the niche industry requirements, and the legacy integrations that no standard product can handle.",
                    "From logistics platforms to internal CRMs, our custom solutions are built to be robust, secure, and scalable, giving you a distinct competitive advantage that your rivals can't buy off the shelf."
                ],
                buttonText: "Discuss Your Needs",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Why Build Custom?",
                subtitle: "Solve the problems that generic software ignores.",
                challenges: [
                    { title: "Unique Processes", text: "Your 'secret sauce' workflow doesn't exist in standard ERPs. We digitize it exactly as you envision." },
                    { title: "Integration Nightmares", text: "Commercial tools operate in silos. We build software that glues everything together." },
                    { title: "Scalability Control", text: "SaaS platforms get expensive as you grow. Custom software scales on your terms." },
                    { title: "Vendor Lock-in", text: "Stop being held hostage by price hikes. Own the platform you depend on." },
                    { title: "Security Requirements", text: "Need specific encryption or on-premise hosting? Custom allows full security control." },
                    { title: "Legacy Modernization", text: "Replace excel sheets and Access databases with modern web applications." }
                ],
                ctaHeading: "Innovate Your Operations",
                ctaButtonText: "Start Custom Build",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Custom Build vs. SaaS",
                paragraphs: [
                    "Building custom software is a capital investment (CapEx). While the initial outlay is higher than a monthly subscription, the long-term TCO is often lower.",
                    "You eliminate 'per-user' fees and gain an asset on your balance sheet. We help you analyze the Build vs. Buy decision to ensure it makes financial sense."
                ],
                buttonText: "Get a Build Estimate",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default CustomSoftware;
