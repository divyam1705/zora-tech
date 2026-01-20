import React from 'react';
import { FaBrain, FaRobot, FaMicrochip, FaSearch, FaCommentDots, FaChartLine } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-ai-development.png';
import costsImg from '../assets/costs-ai.png';
import overviewImg from '../assets/overview-ai.png';

const AiDevelopment = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="AI & Machine Learning Development"
            subtitle="Unlock the power of data with custom AI solutions, from prediction to generation."
            description="We build intelligent systems that learn from data to predict outcomes, automate tasks, and generate value."
            approachSteps={[
                { title: "Data Prep", text: "Cleaning and featuring engineering your raw data.", icon: <FaSearch /> },
                { title: "Model", text: "Selecting and training the right algorithm (ML/DL).", icon: <FaBrain /> },
                { title: "Validate", text: "Testing for accuracy, bias, and overfitting.", icon: <FaChartLine /> },
                { title: "Productize", text: "Deploying the model as a scalable API.", icon: <FaRocket /> }
            ]}
            benefits={[
                "Predictive analytics",
                "Process automation",
                "Personalized user experiences",
                "Generative AI capabilities",
                "Data-driven decision making",
                "Scalable intelligence"
            ]}
            tools={[
                "Python / Scikit-learn",
                "OpenAI GPT-4",
                "LangChain",
                "Databricks",
                "Azure ML Studio"
            ]}
            idealFor={[
                "Fintech (Fraud detection)",
                "Marketing (Customer segmentation)",
                "Operations (Demand forecasting)",
                "Customer Service (Chatbots)"
            ]}
            faqs={[
                { q: "Do you do Generative AI?", a: "Yes, we build RAG pipelines and custom LLM applications using OpenAI and open-source models." },
                { q: "How do you handle IP?", a: "The model weights and code we train for you belong to you." },
                { q: "Is it a black box?", a: "We prioritize Explainable AI (XAI) so you understand why the model made a decision." }
            ]}
            ctaText="Build Intelligence"

            // Overview Section
            overviewSection={{
                heading: "From Hype to Impact",
                paragraphs: [
                    "Artificial Intelligence is transformative, but only if applied correctly. We move beyond the buzzwords to build practical, high-impact AI solutions.",
                    "Whether it's a recommendation engine that boosts sales, a forecasting model that optimizes inventory, or a Generative AI assistant that helps your employees write reports, we focus on measurable business outcomes.",
                    "Our team combines data science expertise with software engineering rigor to ensure your AI isn't just a science experiment—it's a production-ready asset."
                ],
                buttonText: "Discuss AI Use Cases",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "AI Challenges We Solve",
                subtitle: "Making AI work in the real world.",
                challenges: [
                    { title: "Data Quality", text: "AI needs good fuel. We implement data engineering pipelines to feed the models clean inputs." },
                    { title: "Hallucinations", text: "GenAI can lie. We use RAG (Retrieval Augmented Generation) to ground answers in your verified data." },
                    { title: "Cost Control", text: "GPU compute is expensive. We optimize models to balance performance and cost." },
                    { title: "Bias & Ethics", text: "We audit models to ensure they treat all users fairly and ethically." },
                    { title: "Integration", text: "A model on a laptop is useless. We wrap it in an API and integrate it with your apps." },
                    { title: "Drift", text: "Models degrade over time. We set up MLOps to retrain them automatically." }
                ],
                ctaHeading: "Innovate with AI",
                ctaButtonText: "Talk to a Data Scientist",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "Investing in AI",
                paragraphs: [
                    "AI projects often start with a Proof of Concept (PoC) to validate feasibility.",
                    "We help you scope the PoC tightly to minimize risk, and then scale up only when value is proven."
                ],
                buttonText: "Estimate AI Project",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

// Fixed FaRocket import
import { FaRocket } from 'react-icons/fa';

export default AiDevelopment;
