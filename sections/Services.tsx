"use client";
import ServiceCard from "@/components/ServiceCard";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { FlipWords } from "@/components/ui/flip-words";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


import { forwardRef } from "react";

export const Services = forwardRef<HTMLDivElement, {}>((props, serviceRef) => {
    const dynamicWords = ["Data Migration", "Data Archiving", "Master Data Management", "Data Integration"];

    const container = {
        hidden: { opacity: 1, scale: 0.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <motion.section
            ref={serviceRef}
            id="service"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-16 px-5"
        >
            <div className="flex flex-col items-center">
                <div className="section-heading">
                    <div className="flex flex-col h-48 items-center">
                        <AnimatedGradientText className="">
                            ⚙️ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                            <span
                                className={cn(
                                    `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                                )}
                            >
                                Services
                            </span>
                        </AnimatedGradientText>
                        <h2 className="section-title mt-5">
                            Expert Solutions in
                        </h2>
                        <FlipWords className="section-title mt-2 text-[#001E80]" words={dynamicWords} />
                    </div>

                    <p className="section-description mt-5">
                        Zora Technologies Inc. delivers expert solutions in data migration, archiving, management, and integration to streamline your business operations.
                    </p>
                </div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.2 }}
                    variants={container}
                    className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-14"
                >
                    {services.map((service) => (
                        <motion.div key={service.name} variants={item}>
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
});