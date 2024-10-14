"use client";
import ServiceCard from "@/components/ServiceCard";
import { FlipWords } from "@/components/ui/flip-words";
import { services } from "@/data/services";
import { motion } from "framer-motion";
export const Services = () => {

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

    return <section className="py-16 px-5">
        <div className="flex flex-col items-center">
            <div className="section-heading">
                <div className="flex flex-col h-48 items-center">
                    <div className="tag">Services</div>
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
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-14">
                {services.map((service) => (
                    <motion.div variants={item}
                    >
                        <ServiceCard key={service.name}
                            service={service}
                        />
                    </motion.div>
                ))}

            </motion.div>
        </div>
    </section>;
};