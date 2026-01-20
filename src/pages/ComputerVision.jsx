import React from 'react';
import { FaEye, FaVideo, FaRobot, FaFingerprint, FaBoxOpen, FaCar } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-computer-vision.png';
import costsImg from '../assets/costs-vision.png';
import overviewImg from '../assets/overview-vision.png';

const ComputerVision = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Computer Vision Solutions"
            subtitle="Teaching machines to see, interpret, and understand the visual world."
            description="Automate visual inspection, security, and analysis using state-of-the-art Deep Learning models."
            approachSteps={[
                { title: "Capture", text: "Setting up camera feeds and image acquisition.", icon: <FaVideo /> },
                { title: "Train", text: "Labeling datasets and training CNN/Transformer models.", icon: <FaEye /> },
                { title: "Deploy", text: "Running inference on Edge devices or Cloud.", icon: <FaRobot /> },
                { title: "Act", text: "Triggering automated workflows based on detection.", icon: <FaFingerprint /> }
            ]}
            benefits={[
                "Automated Quality Control (QC)",
                "Enhanced surveillance security",
                "Contactless biometrics",
                "Real-time object tracking",
                "Reduced human error",
                "24/7 visual monitoring"
            ]}
            tools={[
                "PyTorch / TensorFlow",
                "OpenCV",
                "YOLO (You Only Look Once)",
                "NVIDIA DeepStream",
                "AWS Rekognition"
            ]}
            idealFor={[
                "Manufacturing (Defect detection)",
                "Retail (Checkout-free stores)",
                "Security (Face recognition)",
                "Logistics (Barcode/OCR scanning)"
            ]}
            faqs={[
                { q: "How much data do we need?", a: "For custom models, we need a few hundred labeled images. We can augment small datasets synthetically." },
                { q: "Can it run on edge?", a: "Yes, we optimize models to run on NVIDIA Jetson or Raspberry Pi devices." },
                { q: "Is it real-time?", a: "Yes, our pipelines are designed for low-latency processing (30+ FPS)." }
            ]}
            ctaText="Automate Vision"

            // Overview Section
            overviewSection={{
                heading: "The Eyes of AI",
                paragraphs: [
                    "Cameras are everywhere, but most are 'dumb' recorders. Computer Vision turns them into smart sensors. It allows software to identify objects, reading text, separate defects from features, and understand human behavior.",
                    "At Zora Technology, we build custom vision pipelines. Whether it's counting cars in a parking lot, spotting a microscopic scratch on a circuit board, or authenticating users via FaceID, we deploy models that see better than humans.",
                    "We handle the full lifecycle: from data collection and annotation to model training and edge deployment."
                ],
                buttonText: "See Vision Demos",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "Vision Hurdles We Clear",
                subtitle: "Lighting, angles, and occlusion—we handle the messy real world.",
                challenges: [
                    { title: "Lighting Conditions", text: "Shadows confuse models. We implement HDR preprocessing and robust augmentation." },
                    { title: "Processing Speed", text: "Real-time video is heavy. We use TensorRT optimization to speed up inference by 10x." },
                    { title: "Privacy", text: "Faces need blurring. We implement auto-redaction for GDPR compliance." },
                    { title: "False Positives", text: "A dog is not a cat. We fine-tune confidence thresholds to precision." },
                    { title: "Edge Hardware", text: "Deploying on factory floors? We build ruggedized edge compute units." },
                    { title: "Integration", text: "Detection is useless if it doesn't stop the belt. We integrate with PLC and SCADA systems." }
                ],
                ctaHeading: "Give Sight to Your Systems",
                ctaButtonText: "Talk to a Vision Engineer",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "ROI of Automation",
                paragraphs: [
                    "Replacing manual visual inspection with an automated system typically pays for itself in <12 months through labor savings and reduced scrap rates.",
                    "We offer Feasibility Studies to test if your problem is solvable with vision before committing to full development."
                ],
                buttonText: "Get Vision Assessment",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default ComputerVision;
