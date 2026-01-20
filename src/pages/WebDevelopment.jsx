import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaRocket, FaPaintBrush, FaSearch } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-web-development.png';
import costsImg from '../assets/costs-web.png';
import overviewImg from '../assets/overview-web.png';

const WebDevelopment = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Full-Stack Web Development"
            subtitle="Creating stunning, functional, and responsive websites that convert."
            description="From complex enterprise web applications to engaging marketing sites, we build the digital face of your business."
            approachSteps={[
                { title: "Discover", text: "Understanding your brand, audience, and goals.", icon: <FaSearch /> },
                { title: "Design", text: "Crafting intuitive UX and pixel-perfect UI.", icon: <FaPaintBrush /> },
                { title: "Develop", text: "Coding with modern frontend and backend stacks.", icon: <FaCode /> },
                { title: "Launch", text: "SEO optimized deployment and performance tuning.", icon: <FaRocket /> }
            ]}
            benefits={[
                "Custom-tailored designs",
                "Mobile-first responsiveness",
                "SEO-friendly architecture",
                "Fast loading speeds",
                "Secure and scalable",
                "Easy content management"
            ]}
            tools={[
                "React / Next.js",
                "Vue.js / Nuxt",
                "Node.js",
                "Tailwind CSS",
                "WordPress / Headless CMS"
            ]}
            idealFor={[
                "Startups launching MVP products",
                "Corporate branding websites",
                "E-commerce stores",
                "Interactive web portals"
            ]}
            faqs={[
                { q: "What tech stack do you use?", a: "We are flexible, but we specialize in the MERN stack (MongoDB, Express, React, Node) and Next.js." },
                { q: "Is SEO included?", a: "Yes, we build with technical SEO best practices (meta tags, fast load times, semantic HTML) in mind." },
                { q: "Do you offer maintenance?", a: "Yes, we provide ongoing care plans for updates, backups, and security." }
            ]}
            ctaText="Build Your Website"

            // Overview Section
            overviewSection={{
                heading: "Digital Experiences That Matter",
                paragraphs: [
                    "Your website is often the first interaction a customer has with your brand. It needs to be faster, smarter, and better looking than your competition. We don't just write code; we create digital experiences.",
                    "Our full-stack developers act as bridges between design and engineering. We use modern frameworks like React and Next.js to build Single Page Applications (SPAs) that feel like native apps—instant transitions, smooth animations, and zero lag.",
                    "Whether you need a high-converting landing page or a complex SaaS dashboard, Zora Technology delivers pixel-perfect quality backed by rock-solid engineering."
                ],
                buttonText: "See Our Portfolio",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Web Challenges We Solve",
                subtitle: "The web changes fast. We keep you ahead of the curve.",
                challenges: [
                    { title: "Device Fragmentation", text: "We ensure your site looks perfect on everything from a 4K monitor to an old iPhone." },
                    { title: "Slow Performance", text: "Google punishes slow sites. We optimize assets and use CDNs to ensure lightning-fast Core Web Vitals." },
                    { title: "Accessibility (a11y)", text: "We build accessible sites that comply with WCAG standards, ensuring usability for everyone." },
                    { title: "Security Attacks", text: "Websites are constant targets. We implement headers, firewalls, and secure coding practices." },
                    { title: "Content Management", text: "You shouldn't need a dev to change text. We integrate user-friendly CMS solutions." },
                    { title: "Lead Conversion", text: "Traffic is useless without conversion. We optimize UX flows to funnel users to the 'Buy' button." }
                ],
                ctaHeading: "Ready to Upgrade Your Web Presence?",
                ctaButtonText: "Start Web Project",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Investment in Your Brand",
                paragraphs: [
                    "A high-quality website is an asset that appreciates. It works for you 24/7, generating leads and building credibility.",
                    "Our pricing is based on complexity and scope. We offer transparent packages for standard websites and custom quoting for complex web applications."
                ],
                buttonText: "Get a Web Quote",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default WebDevelopment;
