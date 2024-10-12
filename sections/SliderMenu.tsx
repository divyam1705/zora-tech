import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx"
import { NavigationMenuHelper } from "./NavigationMenu"

export const SliderMenu = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <RxHamburgerMenu className="h-5 w-5 md:hidden" />
            </SheetTrigger>
            <SheetContent >
                <div className="flex items-center justify-center !py-10 w-full">
                    <NavigationMenuHelper className="flex-col !gap-6 " />
                </div>

            </SheetContent>
        </Sheet>
    )
}