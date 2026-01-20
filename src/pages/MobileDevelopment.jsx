import React from 'react';
import { FaMobile, FaApple, FaAndroid, FaCode, FaRocket, FaTabletAlt } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-mobile-app.png';
import costsImg from '../assets/costs-mobile.png';
import overviewImg from '../assets/overview-mobile.png';

const MobileDevelopment = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Mobile App Development"
            subtitle="Engaging, intuitive, and powerful mobile experiences for iOS and Android."
            description="We build native and cross-platform mobile applications that users love, leveraging the latest technologies for seamless performance."
            approachSteps={[
                { title: "Strategy", text: "Defining the mobile product roadmap and specific features.", icon: <FaMobile /> },
                { title: "UX/UI", text: "Designing simple, thumb-friendly interfaces.", icon: <FaTabletAlt /> },
                { title: "Development", text: "Coding with React Native, Flutter, or Swift/Kotlin.", icon: <FaCode /> },
                { title: "Publish", text: "Managing App Store and Google Play submission processes.", icon: <FaRocket /> }
            ]}
            benefits={[
                "Native-like performance",
                "Reduced time-to-market (Cross-Platform)",
                "Hardware integration (Camera, GPS, Bluetooth)",
                "Offline capabilities",
                "Push notifications engagement",
                "Secure data storage"
            ]}
            tools={[
                "React Native",
                "Flutter",
                "Swift (iOS)",
                "Kotlin (Android)",
                "Firebase",
                "SQLite"
            ]}
            idealFor={[
                "Consumer-facing startups",
                "Enterprise field service apps",
                "IoT companion apps",
                "Loyalty and rewards programs"
            ]}
            faqs={[
                { q: "Native or Cross-Platform?", a: "We recommend Cross-Platform (React Native/Flutter) for 90% of apps as it saves cost and time." },
                { q: "Do you handle App Store rejection?", a: "Yes, we handle the entire submission process and fix any compliance issues." },
                { q: "Can you update existing apps?", a: "Yes, we can take over maintenance and feature updates for existing codebases." }
            ]}
            ctaText="Build Your App"

            // Overview Section
            overviewSection={{
                heading: "Apps That Fit in Your Pocket",
                paragraphs: [
                    "The world is mobile-first. Having a presence on your customer's home screen is the ultimate brand engagement. But building a great app is harder than it looks—it requires a deep understanding of touch interactions, device constraints, and platform guidelines.",
                    "At Zora Technology, we specialize in building apps that feel natural. Whether it's a sleek consumer app or a rugged industrial tool, we prioritize performance, battery life, and intuitive navigation.",
                    "We leverage modern cross-platform frameworks like React Native and Flutter to ship to both iOS and Android simultaneously, cutting development time in half without sacrificing quality."
                ],
                buttonText: "View Mobile Case Studies",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Mobile Challenges We Conquer",
                subtitle: "Mobile development is full of edge cases. We handle them all.",
                challenges: [
                    { title: "Device Diversity", text: "Functionality must remain consistent across thousands of Android screen sizes. We test rigorously." },
                    { title: "Offline Mode", text: "Apps fail when signal is lost. We implement local databases (SQLite/Realm) to keep apps working offline." },
                    { title: "Battery Drain", text: "Poor code kills batteries. We optimize background processes and resource usage." },
                    { title: "Hardware Access", text: "Need Bluetooth or Camera access? We bridge the native layer for full hardware control." },
                    { title: "App Store Rules", text: "Apple and Google have strict guidelines. We ensure your app is compliant to avoid rejection." },
                    { title: "User Retention", text: "Users delete bad apps. We focus on smooth onboarding and engagement loops to keep them coming back." }
                ],
                ctaHeading: "Turn Ideas into Apps",
                ctaButtonText: "Talk to an App Developer",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "App Development Investment",
                paragraphs: [
                    "Mobile app costs vary widely based on feature set (e.g., social features, backend integration, real-time sync).",
                    "We provide detailed breakdown estimates. Choosing a Cross-Platform approach (React Native) allows you to target both iOS and Android with a single budget, maximizing your ROI."
                ],
                buttonText: "Get an App Estimate",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default MobileDevelopment;
