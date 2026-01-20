import React from 'react';
import { FaHelicopter, FaMapMarked, FaCamera, FaMicrochip, FaCogs, FaGamepad } from 'react-icons/fa';
import ServiceDetailLayout from '../components/ServiceDetailLayout';
import heroBg from '../assets/hero-drone-rnd.png';
import costsImg from '../assets/costs-drone.png';
import overviewImg from '../assets/overview-drone.png';

const DroneRnd = () => {
    return (
        <ServiceDetailLayout
            heroImage={heroBg}
            title="Drone R&D and Software"
            subtitle="Custom flight control software and autonomous navigation for UAVs."
            description="Pushing the boundaries of aerial robotics with custom firmware, swarm logic, and computer vision integration."
            approachSteps={[
                { title: "Design", text: "Hardware selection and airframe simulation.", icon: <FaCogs /> },
                { title: "Code", text: "Developing flight controller firmware (PX4/ArduPilot).", icon: <FaMicrochip /> },
                { title: "Simulate", text: "Virtual testing in Gazebo/AirSim environments.", icon: <FaGamepad /> },
                { title: "Fly", text: "Field testing and tuning PID controllers.", icon: <FaHelicopter /> }
            ]}
            benefits={[
                "Autonomous BVLOS flight",
                "Precision logic for inspections",
                "Swarm capabilities",
                "Real-time video processing",
                "Custom payload integration",
                "Secure data links"
            ]}
            tools={[
                "PX4 / ArduPilot",
                "ROS (Robot Operating System)",
                "OpenCV / AI Edge",
                "MAVLink Protocol",
                "QGroundControl"
            ]}
            idealFor={[
                "Agriculture (Crop monitoring)",
                "Infrastructure Inspection",
                "Search and Rescue (SAR)",
                "Last-mile delivery pilots"
            ]}
            faqs={[
                { q: "Do you build hardware?", a: "We focus on software and system integration, partnering with airframe manufacturers for the hardware." },
                { q: "Can you do swarm?", a: "Yes, we develop algorithms for multi-agent coordination and formation flight." },
                { q: "Is it legal?", a: "We help you navigate FAA/EASA regulations for autonomous operations." }
            ]}
            ctaText="Launch Your UAV Project"

            // Overview Section
            overviewSection={{
                heading: "Intelligence in the Sky",
                paragraphs: [
                    "Drones are no longer toys; they are industrial tools. But stock firmware is often too limited for specialized missions. That's where we come in.",
                    "Our R&D team develops custom software that gives drones 'brains'. From obstacle avoidance using LiDAR (SLAM) to object recognition using onboard AI, we turn standard UAVs into autonomous agents.",
                    "Whether you need a heavy-lift drone to deliver medical supplies or a swarm of micro-drones to scan a warehouse, Zora Technology engineers the logic that keeps them in the air."
                ],
                buttonText: "Explore Capabilities",
                buttonLink: "/contact",
                image: overviewImg,
                showInteractive3D: true
            }}

            // Challenges Section
            challengesSection={{
                heading: "R&D Challenges We Solve",
                subtitle: "Flight is unforgiving. We engineer for reliability.",
                challenges: [
                    { title: "GPS Denied", text: "Flying indoors or under bridges? We implement Optical Flow and SLAM for GPS-free navigation." },
                    { title: "Battery Life", text: "Efficient flight paths save power. We optimize mission planning algorithms." },
                    { title: "Data Bandwidth", text: "Streaming 4K video is hard. We implement smart compression and edge processing." },
                    { title: "Safety Redundancy", text: "We code fail-safes: parachute release, return-to-home, and safe landing protocols." },
                    { title: "Payload Control", text: "We integrate custom sensors (Thermal, Multispectral) seamlessly with the flight controller." },
                    { title: "Cybersecurity", text: "Drones can be hijacked. We encrypt command-and-control (C2) links." }
                ],
                ctaHeading: "Take Flight",
                ctaButtonText: "Talk to a Robotics Engineer",
                ctaButtonLink: "/contact"
            }}

            // Costs Section
            costsSection={{
                heading: "R&D Investment",
                paragraphs: [
                    "Developing custom avionics is an investment in IP. We work on a milestone basis—Proof of Concept (PoC) first, then MVP, then production hardening.",
                    "This phased approach minimizes risk and ensures you validate the technology before scaling."
                ],
                buttonText: "Estimate R&D Budget",
                buttonLink: "/contact",
                image: costsImg
            }}
        />
    );
};

export default DroneRnd;
