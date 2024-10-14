"use client";
import Logo from "@/assets/logo.svg"
import Image from "next/image";
import { NavigationMenuHelper } from "./NavigationMenu";
import { SliderMenu } from "./SliderMenu";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-50">
            <div className="flex items-center justify-center py-5 px-4">
                <div className=" container ">
                    <div className="flex items-center justify-between">
                        <Link href="/">
                            <div className="flex gap-4 items-center">
                                <Image className="" src={Logo} alt="Zora Logo" height={40} width={40} />
                                <div className=" text-black text-center text-lg font-bold border-[#222]/10 px-3 py-1  tracking-tighter bg-clip-text">
                                    Zora Technologies
                                </div>
                            </div>
                        </Link>
                        <SliderMenu />
                        <div className="hidden md:flex"><NavigationMenuHelper /></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

