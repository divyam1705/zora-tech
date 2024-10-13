"use client"
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import dynamic from "next/dynamic";
import { FaArrowRightLong } from "react-icons/fa6";


import { sampleArcs, globeConfig } from "@/data/globe-config";
export const Hero = () => {

    const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
        ssr: false,
    });

    return (
        <section className="pt-8 pb-20 md:pt-5 md:pb-[6rem] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#4c64bb,#EAEEFE_66%)]">
            <div className="flex justify-center px-6 md:px-12 lg:px-[8rem] mt-3">
                <div className="">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="md:max-w-[55vw] md:text-wrap">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6 py-1">
                                Empowering Your Data,
                                <Cover className="cursor-pointer">
                                    Accelerating
                                </Cover>
                                Your Transformation
                            </h1>
                            <p className="text-lg text-[#010D3E] tracking-tight mt-6">
                                <strong>Zora Technologies Inc.</strong> (ZTI) is a global leader in data migration and
                                digital transformation. Specializing in SAP ECC & S/4HANA,
                                we provide end-to-end solutions including data profiling,
                                ETL processes, and advanced analytics. With over <strong>30+ successful
                                    global deployments</strong> and a team of industry experts, ZTI delivers cutting-edge, tailored solutions
                                that drive your business forward.
                            </p>
                            <div className="flex gap-1 items-center mt-[30px]">
                                <Button className="group" size={"lg"}>
                                    Get Started Today
                                    <FaArrowRightLong className="ml-3 transition-transform duration-300 group-hover:translate-x-2" />
                                </Button>
                            </div>
                        </div>
                        <div className=" h-[24rem] m-[1.5rem] !z-0 cursor-pointer">
                            <World data={sampleArcs} globeConfig={globeConfig} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}