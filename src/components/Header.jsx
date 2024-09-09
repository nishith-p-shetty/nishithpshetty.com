"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

// components
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { ThemeToggler } from "./ThemeToggler";

export const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${
        header ? "bg-inherit py-4 shadow-lg dark:bg-accent" : "py-6"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-inherit"} `}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden items-center gap-x-8 xl:flex"
              linkStyles="relative transition-all hover:text-primary"
              underlineStyles="absolute left-0 top-full h-[2px] w-full bg-primary"
            />

            <ThemeToggler />

            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
