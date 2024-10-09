import Logo from "@/assets/logo.svg"
import Image from "next/image";
import { NavigationMenuHelper } from "./NavigationMenu";
import { SliderMenu } from "./SliderMenu";


export const Header = () => {
    return (

        <header className="sticky top-0 backdrop-blur-sm">
            <div className="flex items-center justify-center py-5 px-4">
                <div className=" container ">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-4 items-center">
                            <Image className="" src={Logo} alt="Zora Logo" height={40} width={40} />
                            <div className=" text-black text-center text-lg font-bold border-[#222]/10 px-3 py-1  tracking-tighter text-transparent bg-clip-text">
                                Zora Technologies
                            </div>
                        </div>
                        <SliderMenu />
                        <div className="hidden md:flex"><NavigationMenuHelper /></div>
                    </div>
                </div>
            </div>
        </header>);
}