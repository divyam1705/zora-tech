import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { FaDatabase, FaComments, FaNetworkWired, FaCheckCircle, FaHeadset, FaMobileAlt, FaArrowRight, FaCode, FaCloud, FaLaptopCode, FaApple, FaAndroid, FaMicrochip, FaPlane, FaBrain, FaNotesMedical, FaEye, FaRobot, FaAtom, FaArchive, FaProjectDiagram } from 'react-icons/fa';

import dotnetLogo from '../assets/dotnet.png';
import aspnetLogo from '../assets/aspnet.png';
import webdevLogo from '../assets/webdev.png';
import mobiledevLogo from '../assets/mobiledev.jpg';
import clouddevLogo from '../assets/clouddev.png';

const Services = () => {
    const [hoveredData, setHoveredData] = useState(null); // Added for Data Management Interaction
    const navigate = useNavigate();
    const trackRef = React.useRef(null);
    const positionRef = React.useRef(0);
    const isDraggingRef = React.useRef(false);
    const startXRef = React.useRef(0);

    // Second Marquee Refs
    const trackRef2 = React.useRef(null);
    const positionRef2 = React.useRef(0); // Start at 0 or offset
    const isDraggingRef2 = React.useRef(false);
    const startXRef2 = React.useRef(0);

    const animationFrameRef = React.useRef(null);
    const [isGrabbing, setIsGrabbing] = React.useState(false);

    // --- Expertise Hover Logic ---
    const [hoveredExp, setHoveredExp] = useState(null);


    // --- Carousel Auto-Rotation Logic ---
    const [isPaused, setIsPaused] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Smooth Cursor Logic
    const cursorRef = React.useRef(null);
    const mouseRef = React.useRef({ x: 0, y: 0 });
    const followerRef = React.useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Animation Loop
        let rafId;
        const animateCursor = () => {
            if (cursorRef.current) {
                const { x: targetX, y: targetY } = mouseRef.current;
                const { x: currentX, y: currentY } = followerRef.current;

                // Lerp factor (0.1 = smooth slow, 0.2 = faster)
                const lerp = 0.15;
                const newX = currentX + (targetX - currentX) * lerp;
                const newY = currentY + (targetY - currentY) * lerp;

                followerRef.current = { x: newX, y: newY };
                cursorRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0) translate(-50%, -50%)`;
            }
            rafId = requestAnimationFrame(animateCursor);
        };
        animateCursor();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
    }, []);

    // Snap follower to mouse pos when hover starts to avoid flying in from 0,0
    useEffect(() => {
        if (hoveredExp) {
            followerRef.current = { ...mouseRef.current };
        }
    }, [hoveredExp]);

    const softwareExpertise = [
        '.NET development', 'ASP.NET development', 'Web development services',
        'Mobile development (iOS, Android)', 'Cloud software development',
        'Custom software product development'
    ];

    const aiExpertise = [
        'AI development services', 'Military drone R&D services', 'ML/AI development',
        'Computer Vision solutions', 'Medical device integration', 'AI agent development services'
    ];

    const expertiseIcons = {
        '.NET development': (
            <img src={dotnetLogo} alt=".NET" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
        ),
        'ASP.NET development': (
            <img src={aspnetLogo} alt="ASP.NET" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
        ),
        'Web development services': (
            <img src={webdevLogo} alt="Web Development" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
        ),
        'Mobile development (iOS, Android)': (
            <img src={mobiledevLogo} alt="Mobile App Development" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
        ),
        'Cloud software development': (
            <img src={clouddevLogo} alt="Cloud Software Development" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />
        ),
        'Custom software product development': (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
        'AI development services': (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8A2BE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
                <path d="M9 12l-2-2m-2-2l2 2m2 8l-2-2m-2-2l2 2m8-8l2-2m2-2l-2 2m-2 8l2-2m2-2l-2 2" />
            </svg>
        ),
        'Military drone R&D services': (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#556B2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        'ML/AI development': (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        'Computer Vision solutions': (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#20B2AA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
        'Medical device integration': (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
        ),
        'AI agent development services': (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9370DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        )
    };

    React.useEffect(() => {
        const animate = () => {
            // Track 1 Animation (Left)
            if (trackRef.current) {
                const track = trackRef.current;
                const totalWidth = track.scrollWidth;
                const halfWidth = totalWidth / 2;

                if (!isDraggingRef.current) {
                    positionRef.current -= 0.5;
                }

                if (positionRef.current <= -halfWidth) {
                    positionRef.current += halfWidth;
                } else if (positionRef.current > 0) {
                    positionRef.current -= halfWidth;
                }

                track.style.transform = `translateX(${positionRef.current}px)`;
            }

            // Track 2 Animation (Right)
            if (trackRef2.current) {
                const track2 = trackRef2.current;
                const totalWidth2 = track2.scrollWidth;
                const halfWidth2 = totalWidth2 / 2;

                if (!isDraggingRef2.current) {
                    positionRef2.current += 0.5; // Move Right
                }

                // Loop logic for right movement
                if (positionRef2.current >= 0) {
                    positionRef2.current -= halfWidth2;
                } else if (positionRef2.current < -halfWidth2) {
                    positionRef2.current += halfWidth2;
                }

                track2.style.transform = `translateX(${positionRef2.current}px)`;
            }

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        if (trackRef2.current) {
            positionRef2.current = -trackRef2.current.scrollWidth / 2;
        }

        animationFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    const [textIndex, setTextIndex] = React.useState(0);
    const serviceTitles = [
        "Data Migration",
        "Data Integration",
        "Data Archiving",
        "Master Data Management"
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % serviceTitles.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const handleStart = (clientX, trackId = 1) => {
        if (trackId === 1) {
            isDraggingRef.current = true;
            startXRef.current = clientX - positionRef.current;
        } else {
            isDraggingRef2.current = true;
            startXRef2.current = clientX - positionRef2.current;
        }
        setIsGrabbing(true);
    };

    const handleMove = (clientX) => {
        if (isDraggingRef.current) {
            positionRef.current = clientX - startXRef.current;
        }
        if (isDraggingRef2.current) {
            positionRef2.current = clientX - startXRef2.current;
        }
    };

    const handleEnd = () => {
        isDraggingRef.current = false;
        isDraggingRef2.current = false;
        setIsGrabbing(false);
    };

    // Mouse Events
    const onMouseDown = (e, trackId = 1) => {
        e.preventDefault();
        handleStart(e.pageX, trackId);
    };
    const onMouseMove = (e) => {
        if (isDraggingRef.current || isDraggingRef2.current) e.preventDefault();
        handleMove(e.pageX);
    };

    // Touch Events
    const onTouchStart = (e, trackId = 1) => handleStart(e.touches[0].clientX, trackId);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);

    // 3D Carousel Logic
    const testimonials = [
        { text: "Harriet has been in the advertising industry since the early days and has constantly reinvented himself and kept pace with the changes.", company: "Zora Technologies" },
        { text: "They creatively reach their desired market and get results. It's always fun working with their team. As a video editor it's great to get the infusion of new ideas.", company: "Zora Technologies" },
        { text: "We attained through his long term media relationships and sponsorship track record is one of the reasons we have seen continued growth.", company: "Zora Technologies" },
        { text: "The team's dedication to quality is unmatched in the industry. They truly understand the complexities of modern digital transformation.", company: "Global Systems Inc." },
        { text: "Their SAP migration expertise saved us months of downtime. Highly recommended for enterprise-level data projects.", company: "TechCorp Solutions" },
        { text: "Innovative, reliable, and incredibly skilled. The best partner for data management we've ever worked with.", company: "DataFlow Dynamics" },
        { text: "From consultation to execution, the process was seamless. They delivered exactly what they promised.", company: "FutureNet Systems" },
        { text: "A game-changer for our IT infrastructure. Their master data management solutions are top-tier.", company: "Omega Retail Group" }
    ];

    const [carouselAngle, setCarouselAngle] = useState(0);

    const audioRef = React.useRef(null);
    const cellCount = testimonials.length;
    const radius = 550;
    const theta = 360 / cellCount;

    useEffect(() => {
        // Pre-initialize audio with Base64 Data URI (Mechanical Click)
        const clickSound = "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAABAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP///";

        audioRef.current = new Audio(clickSound);
        audioRef.current.volume = 0.5;
        // Optional: Preload
        audioRef.current.load();
    }, []);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reset to start for rapid clicks
            audioRef.current.play().catch(e => console.error("Audio play error:", e));
        }
    };

    const rotateCarousel = (direction) => {
        playSound();
        setCarouselAngle(prev => prev + (direction * theta));
    };

    const currentIndex = Math.round(-carouselAngle / theta);
    const positiveIndex = ((currentIndex % cellCount) + cellCount) % cellCount;

    // Auto-rotate every 2 seconds, pauses on hover
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            rotateCarousel(1);
        }, 2000);
        return () => clearInterval(interval);
    }, [theta, isPaused]);

    return (
        <div className="services-page">



            {/* 1. Our Services Grid */}
            <section className="service-section">
                <div className="container" style={{ marginBottom: '0px', paddingBottom: '3rem' }}>

                    <br /><br />
                    <h2 className="section-title title-grid-wrapper">
                        <div className="title-static-part">Expert Solutions in</div>
                        <div className="title-dynamic-part">
                            <div className="gear-reveal-wrapper" key={textIndex}>
                                <span className="gear-reveal-ghost" aria-hidden="true">{serviceTitles[textIndex]}</span>
                                <span className="gear-reveal-text">{serviceTitles[textIndex]}</span>
                                <div className="gear-icon-container">
                                    <svg className="gear-icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.14 12.94C19.17 12.63 19.19 12.32 19.19 12C19.19 11.68 19.17 11.37 19.14 11.06L21.16 9.38C21.34 9.22 21.39 8.97 21.28 8.76L19.37 5.43C19.26 5.23 19.01 5.15 18.8 5.23L16.42 6.19C15.91 5.79 15.35 5.46 14.75 5.21L14.39 2.68C14.36 2.45 14.16 2.29 13.93 2.29H10.08C9.85 2.29 9.65 2.45 9.62 2.68L9.26 5.21C8.66 5.46 8.1 5.79 7.58 6.19L5.2 5.23C4.99 5.14 4.74 5.23 4.63 5.43L2.73 8.76C2.62 8.97 2.66 9.22 2.84 9.38L4.86 11.06C4.83 11.37 4.81 11.68 4.81 12C4.81 12.32 4.83 12.63 4.86 12.94L2.84 14.62C2.66 14.78 2.61 15.03 2.73 15.24L4.63 18.57C4.74 18.77 4.99 18.86 5.2 18.77L7.58 17.81C8.1 18.21 8.66 18.54 9.26 18.79L9.62 21.32C9.65 21.55 9.85 21.71 10.08 21.71H13.93C14.16 21.71 14.36 21.55 14.39 21.32L14.75 18.79C15.35 18.54 15.91 18.21 16.42 17.81L18.8 18.77C19.01 18.85 19.26 18.77 19.37 18.57L21.28 15.24C21.39 15.03 21.34 14.78 21.16 14.62L19.14 12.94ZM12 15.6C10.01 15.6 8.4 13.99 8.4 12C8.4 10.01 10.01 8.4 12 8.4C13.99 8.4 15.6 10.01 15.6 12C15.6 13.99 13.99 15.6 12 15.6Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </h2>

                    <br />

                    <div className="bento-v2-container">

                        {/* Area 1: Header (Left) */}
                        <div className="bento-v2-header">
                            <h2 className="bento-v2-title">
                                SAP <br /> <span style={{ color: '#ff8163' }}>SERVICES</span>
                            </h2>
                            <p className="bento-v2-desc">
                                Accelerate development cycles and ensure resilient, scalable operations with our experts and management services.
                            </p>
                            <Link to="/services/sap-services" className="bento-v2-btn">
                                LEARN MORE <FaArrowRight />
                            </Link>
                        </div>

                        {/* Area 2: Feature Card (Middle Top) */}
                        <div className="bento-v2-feature">
                            <div className="bento-v2-icon" style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ff8163' }}>
                                <FaCheckCircle />
                            </div>
                            <div>
                                <div className="feature-label">Implementation</div>
                                <h3 className="feature-title">SAP Solution Deployment</h3>
                                <p className="feature-desc">
                                    Enhance business capabilities and innovation with our tailored deployment strategies.
                                </p>
                            </div>
                        </div>

                        {/* Area 3: Visual (Right) */}
                        <div className="bento-v2-visual">
                            {/* Placeholder for 3D Graphic - Using a generic tech SVG for now */}
                            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#ff8163" strokeWidth="0.5" className="bento-visual-img">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                <path d="M12 22l10-5-10-5-10 5 10 5z" opacity="0.5" />
                            </svg>
                        </div>

                        {/* Area 4: grid Cards (Bottom Left Grid) */}
                        <div className="bento-v2-grid">
                            {/* Card 1 */}
                            <div className="bento-v2-small-card">
                                <div className="bento-v2-icon"><FaDatabase /></div>
                                <div className="bento-v2-card-content">
                                    <h4 className="bento-v2-card-title">Migration</h4>
                                    <span style={{ fontSize: '0.8rem', color: '#888' }}>Seamless Data Transition</span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bento-v2-small-card">
                                <div className="bento-v2-icon"><FaNetworkWired /></div>
                                <div className="bento-v2-card-content">
                                    <h4 className="bento-v2-card-title">Integration</h4>
                                    <span style={{ fontSize: '0.8rem', color: '#888' }}>Unified Ecosystem</span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bento-v2-small-card">
                                <div className="bento-v2-icon"><FaComments /></div>
                                <div className="bento-v2-card-content">
                                    <h4 className="bento-v2-card-title">Consulting</h4>
                                    <span style={{ fontSize: '0.8rem', color: '#888' }}>Expert Guidance</span>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="bento-v2-small-card">
                                <div className="bento-v2-icon"><FaHeadset /></div>
                                <div className="bento-v2-card-content">
                                    <h4 className="bento-v2-card-title">Support</h4>
                                    <span style={{ fontSize: '0.8rem', color: '#888' }}>24/7 Operations</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* --- Extended Services Section (Dark Background) --- */}
            <section className="extended-services-section" style={{ backgroundColor: '#000', padding: '2rem 0', position: 'relative', overflow: 'hidden' }}>

                {/* Floating Animation Background */}
                <div className="extended-bg-animation">
                    <div className="floating-tech-item anim-float-up delay-1 duration-slow" style={{ top: '80%', left: '10%' }}>+</div>
                    <div className="floating-tech-item anim-float-up delay-2 duration-fast" style={{ top: '60%', left: '80%' }}>::</div>
                    <div className="floating-tech-item anim-drift delay-3" style={{ top: '20%', left: '20%' }}>{'{ }'}</div>
                    <div className="floating-tech-item anim-pulse delay-4" style={{ top: '15%', right: '15%' }}>[]</div>
                    <div className="floating-tech-item anim-float-up delay-5 duration-slow" style={{ bottom: '10%', right: '30%' }}>//</div>
                    <div className="floating-tech-item anim-pulse delay-1" style={{ top: '40%', left: '5%' }}>.</div>
                    <div className="floating-tech-item anim-drift delay-2" style={{ top: '70%', right: '5%' }}>_</div>
                </div>

                {/* Caution Tape (Moved) - REMOVED */}

                {/* Optional: Add a subtle grid overlay for texture if desired, matching other dark areas */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.1, pointerEvents: 'none' }}></div>
                <div className="container">
                    <div className="extended-services-container">

                        {/* Column 1: Left */}
                        <div className="extended-col">
                            {/* Card 1: .NET */}
                            <Link to="/services/software-engineering-hub" className="extended-card card-large hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-shadow duration-300" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="extended-icon-box"><FaCode /></div>
                                <div>
                                    <h3 className="extended-card-title">.NET Development</h3>
                                    <p className="extended-card-desc">
                                        Build powerful, secure, and scalable enterprise applications with our expert .NET services.
                                    </p>
                                </div>
                                <div className="extended-arrow"><FaArrowRight /></div>
                            </Link>

                            {/* Card 2: Custom Products (Moved from Col 2) */}
                            <Link to="/services/software-engineering-hub" className="extended-card card-large hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-shadow duration-300" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="extended-icon-box"><FaLaptopCode /></div>
                                <div>
                                    <h3 className="extended-card-title">Custom Products</h3>
                                    <p className="extended-card-desc">
                                        Build an innovative enterprise solution from scratch or enhance an ongoing project with tailored software.
                                    </p>
                                </div>
                                <div className="extended-arrow"><FaArrowRight /></div>
                            </Link>
                        </div>

                        {/* Column 2: Middle */}
                        <div className="extended-col">
                            {/* Card 3: Cloud Software (Moved from Col 1) */}
                            <Link to="/services/software-engineering-hub" className="extended-card card-large hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-shadow duration-300" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="extended-icon-box"><FaCloud /></div>
                                <div>
                                    <h3 className="extended-card-title">Cloud Software</h3>
                                    <p className="extended-card-desc">
                                        Accelerate your digital transformation with secure and scalable cloud infrastructure solutions.
                                    </p>
                                </div>
                                <div className="extended-arrow"><FaArrowRight /></div>
                            </Link>

                            {/* Card 4: Mobile iOS */}
                            <Link to="/services/software-engineering-hub" className="extended-card card-small hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-shadow duration-300" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="extended-icon-box"><FaApple /></div>
                                <div style={{ flex: 1 }}>
                                    <h4 className="extended-card-title">iOS Development</h4>
                                </div>
                                <div className="extended-arrow"><FaArrowRight /></div>
                            </Link>

                            {/* Card 5: Mobile Android */}
                            <Link to="/services/software-engineering-hub" className="extended-card card-small hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-shadow duration-300" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="extended-icon-box"><FaAndroid /></div>
                                <div style={{ flex: 1 }}>
                                    <h4 className="extended-card-title">Android Dev</h4>
                                </div>
                                <div className="extended-arrow"><FaArrowRight /></div>
                            </Link>
                        </div>

                        {/* Column 3: Right (Text + Orbit Visual) */}
                        <div className="extended-col extended-info">
                            <div className="extended-info-content">
                                <div className="section-bracket-visual">[]</div>
                                <h2 className="extended-headline">Software Engineering</h2>
                                <p className="extended-desc-text">
                                    We provide comprehensive enterprise services of any type and scale for your effective digital transformation and IT infrastructure optimization.
                                </p>
                            </div>

                            {/* Orbit Visual */}
                            <div className="orbit-container">
                                <div className="orbit-circle orbit-1">
                                    <div className="tech-icon-float pos-1"><FaCode color="#ff8163" /></div>
                                </div>
                                <div className="orbit-circle orbit-2">
                                    <div className="tech-icon-float pos-2"><FaDatabase color="#007acc" /></div>
                                </div>
                                <div className="orbit-circle orbit-3">
                                    <div className="tech-icon-float pos-3"><FaNetworkWired color="#e535ab" /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* AI & Innovation Section (New) */}
            <section className="ai-innovation-section">
                <div className="container">
                    <div className="ai-content-wrapper">
                        {/* Left Side: Hero Info */}
                        <div className="ai-left-panel">
                            <div className="ai-icon-circle-large">
                                <FaAtom className="ai-spin-icon" />
                            </div>
                            <h2 className="ai-main-title">
                                AI & <br />
                                <span className="ai-highlight-box">INNOVATION</span>
                            </h2>
                            <p className="ai-desc-text">
                                Defense-grade intelligence and enterprise-scale AI solutions engineered for high-end corporate and strategic military operations.
                            </p>
                            <Link to="/services/ai-innovation-services" className="ai-launch-btn">
                                LAUNCH SYSTEMS <FaArrowRight style={{ marginLeft: '10px' }} />
                            </Link>
                        </div>

                        {/* Right Side: Grid */}
                        <div className="ai-right-grid">
                            {[
                                { title: "AI development services", sub: "SYSTEM ENGINEERING", icon: <FaMicrochip />, link: "/services/ai-innovation-services" },
                                { title: "Military drone R&D services", sub: "STRATEGIC DEFENSE", icon: <FaPlane />, link: "/services/ai-innovation-services" },
                                { title: "ML/Ai development", sub: "NEURAL NETWORKS", icon: <FaBrain />, link: "/services/ai-innovation-services" },
                                { title: "Computer vision solutions", sub: "OPTICAL INTEL", icon: <FaEye />, link: "/services/ai-innovation-services" },
                                { title: "Medical device integration", sub: "BIO-INTEGRATION", icon: <FaNotesMedical />, link: "/services/ai-innovation-services" },
                                { title: "Ai agent development services", sub: "PROCESS LOGIC", icon: <FaRobot />, link: "/services/ai-innovation-services" }
                            ].map((item, idx) => (
                                <Link to={item.link} key={idx} className="ai-card">
                                    <div className="ai-card-icon-box">
                                        {item.icon}
                                    </div>
                                    <div className="ai-card-text">
                                        <h3>{item.title}</h3>
                                        <span>{item.sub}</span>
                                    </div>
                                    <div className="ai-card-arrow">
                                        <FaArrowRight />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Management Section (Premium Bento) */}
            <section className="data-management-section">
                <div className="container">
                    <div className="data-header-center">
                        <h2 className="section-title text-center text-white">SAP Data Management</h2>
                        <p className="section-subtitle text-center">Architecting the foundation of your digital enterprise with precision and scale.</p>
                    </div>

                    <div className="data-bento-grid">
                        {/* Hero Item - 3D Visual Context */}
                        <div className="bento-item bento-hero">
                            <div className="bento-content">
                                <h3>Enterprise Data Core</h3>
                                <p>Centralized control for decentralized intelligence.</p>
                                <div className="cube-visual-wrapper-mini">
                                    <div className={`cube-stack ${hoveredData ? 'active-hover' : ''}`}>
                                        <div className="cube-layer layer-1"><FaDatabase /></div>
                                        <div className="cube-layer layer-2"><FaDatabase /></div>
                                        <div className="cube-layer layer-3 text-glow">
                                            {hoveredData ? hoveredData.label : 'DATA'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List Items as Bento Cards */}
                        {[
                            { id: "migrate", title: "S/4 HANA Migration", desc: "Risk-free transition protocol.", icon: <FaDatabase />, link: "/services/sap-data-management-hub", label: "MIGRATE", size: "bento-standard" },
                            { id: "archive", title: "Active Archiving", desc: "Intelligent lifecycle management.", icon: <FaArchive />, link: "/services/sap-data-management-hub", label: "ARCHIVE", size: "bento-standard" },
                            { id: "mdm", title: "Master Data", desc: "Single source of truth governance.", icon: <FaNetworkWired />, link: "/services/sap-data-management-hub", label: "MASTER DATA", size: "bento-standard" },
                            { id: "integrate", title: "Integration Hub", desc: "Seamless system unification.", icon: <FaProjectDiagram />, link: "/services/sap-data-management-hub", label: "INTEGRATE", size: "bento-standard" }
                        ].map((item, idx) => (
                            <Link
                                to={item.link}
                                key={idx}
                                className={`bento-item ${item.size}`}
                                onMouseEnter={() => setHoveredData(item)}
                                onMouseLeave={() => setHoveredData(null)}
                            >
                                <div className="bento-icon-box">
                                    {item.icon}
                                </div>
                                <div className="bento-text">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="bento-arrow">
                                    <FaArrowRight />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Caution Tape (Moved Here) */}
            <div className="caution-tape-container" style={{ marginTop: '0' }}>
                <div className="caution-tape-pattern"></div>
                <div className="caution-tape-content">
                    <div className="caution-text">ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING •</div>
                    <div className="caution-text">ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING • ZORA TECHNOLOGIES • FUTURE LOADING •</div>
                </div>
            </div>



            {/* 2. Solutions Showcase */}
            <section className="showcase-section bg-light-grey">
                <div className="container">
                    <h2 className="section-title text-center" style={{ marginBottom: '4rem' }}>Real Solutions for Real Challenges</h2>
                    <div className="showcase-grid">
                        {[
                            { id: "manufacturing", title: "Manufacturing", desc: "Digital transformation for smart factories.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
                            { id: "retail", title: "Retail", desc: "Inventory and master data optimization.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
                            { id: "financial", title: "Financial", desc: "Systems modernization and compliance.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
                            { id: "healthcare", title: "Healthcare", desc: "Secure data management and patient privacy.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" }
                        ].map((solution, index) => (
                            <Link to={`/solution/${solution.id}`} key={index} className="showcase-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="showcase-image-container">
                                    <img src={solution.image} alt={solution.title} className="showcase-image" />
                                </div>
                                <div className="showcase-content">
                                    <h3 className="showcase-title">{solution.title}</h3>
                                    <p className="showcase-desc">{solution.desc}</p>
                                    <div style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Explore Solution →</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* Testimonials Section - Cover Flow Style */}
            <section className="testimonial-section">
                <div className="container" style={{ overflow: 'hidden', paddingBottom: '4rem' }}>
                    <h2 className="testimonial-title">
                        What our <span className="title-yellow">clients</span> are saying
                    </h2>
                    <p className="testimonial-subtitle">
                        Hear from businesses around the world who trust Zora Technologies Inc. to drive their digital transformation and data migration projects.
                    </p>

                    {/* 3D Carousel Container */}
                    <div className="carousel-3d-container"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {testimonials.map((t, i) => {
                            // Calculate distance from current index
                            let offset = (i - currentIndex) % cellCount;
                            if (offset < -cellCount / 2) offset += cellCount;
                            if (offset > cellCount / 2) offset -= cellCount;

                            // Responsive Spread Calculation
                            const isMobile = windowWidth < 768;
                            const spread = isMobile ? 40 : 420; // Reduced spread for mobile stacking
                            const scaleSide = isMobile ? 0.9 : 0.9;
                            const rotateSide = isMobile ? 5 : 15; // Reduced rotation on mobile

                            // Determine style based on offset
                            let style = {};
                            let zIndex = 0;
                            let opacity = 0;

                            // Visual properties based on position
                            if (offset === 0) {
                                // Center
                                style = { transform: 'translateX(-50%) translateY(-50%) scale(1) rotateY(0deg)' };
                                zIndex = 10;
                                opacity = 1;
                            } else if (Math.abs(offset) === 1) {
                                // Immediate Left/Right
                                const sign = Math.sign(offset); // -1 or 1
                                style = {
                                    transform: `translateX(calc(-50% + ${sign * spread}px)) translateY(-50%) scale(${scaleSide}) rotateY(${sign * rotateSide}deg)`,
                                    filter: 'blur(1px)' // Subtle focus effect
                                };
                                zIndex = 5;
                                opacity = isMobile ? 0 : 0.8; // Hide side cards completely on mobile for cleanliness
                            } else {
                                // Hidden / Far away
                                style = { transform: 'translateX(-50%) translateY(-50%) scale(0) rotateY(0deg)' };
                                opacity = 0;
                                zIndex = 0;
                            }

                            return (
                                <div
                                    key={i}
                                    className="testimonial-card-3d"
                                    style={{
                                        ...style,
                                        zIndex: zIndex,
                                        opacity: opacity,
                                        pointerEvents: offset === 0 ? 'auto' : 'none' // Only clickable if center?
                                    }}
                                >
                                    {/* ZORA TECH Logo Block */}
                                    <div className="zora-block-container">
                                        <div className="zora-block-row">
                                            {['Z', 'O', 'R', 'A'].map((char, k) => (
                                                <div key={k} className="zora-block">{char}</div>
                                            ))}
                                        </div>
                                        <div className="zora-block-row" style={{ marginLeft: '10px' }}>
                                            {['T', 'E', 'C', 'H'].map((char, k) => (
                                                <div key={k} className="zora-block">{char}</div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="testimonial-quote">
                                        " {t.text} "
                                    </div>

                                    {/* Author/Company */}
                                    <div className="testimonial-author-comp">
                                        {t.company}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Controls */}
                    <div className="nav-container">
                        <button className="carousel-nav-btn" onClick={() => rotateCarousel(-1)}>
                            <FaArrowRight style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <button className="carousel-nav-btn" onClick={() => rotateCarousel(1)}>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </section>




            {/* Custom Cursor Follower - Portaled to Body */}
            {
                createPortal(
                    <div
                        ref={cursorRef}
                        className="custom-cursor-follower"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            pointerEvents: 'none',
                            zIndex: 9999,
                            opacity: (hoveredExp && softwareExpertise.includes(hoveredExp)) ? 1 : 0,
                            transition: 'opacity 0.2s ease',
                        }}
                    >
                        {hoveredExp && softwareExpertise.includes(hoveredExp) && expertiseIcons[hoveredExp] && (
                            React.cloneElement(expertiseIcons[hoveredExp], {
                                style: {
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0px 4px 10px rgba(0,0,0,0.2))'
                                }
                            })
                        )}
                    </div>,
                    document.body
                )
            }
        </div >
    );
};

export default Services;
