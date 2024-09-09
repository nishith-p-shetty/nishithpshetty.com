import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

// components
import { Nav } from "./Nav";
import { Logo } from "./Logo";
import { Socials } from "./Socials";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <AlignJustify
          className="mt-1 cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="flex h-full flex-col items-center justify-between py-8">
              <div className="flex flex-col items-center gap-y-32">
                <Logo
                  onLinkClick={handleLinkClick} // Pass the handleLinkClick function to the Nav component
                />
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col items-center justify-between py-8">
          <div className="flex flex-col items-center gap-y-32">
            <Nav
              containerStyles=" flex flex-col items-center gap-y-6"
              linkStyles="relative transition-all hover:text-primary text-2xl"
              underlineStyles="absolute left-0 top-full h-[2px] w-full bg-primary"
              onLinkClick={handleLinkClick} // Pass the handleLinkClick function to the Nav component
            />
            <SheetFooter>
              <Socials containerStyles="flex gap-x-4" iconsStyles="text-2xl" />
            </SheetFooter>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
