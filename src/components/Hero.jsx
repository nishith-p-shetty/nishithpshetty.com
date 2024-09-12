import Link from "next/link";

// icons
import { RiArrowDownDoubleFill } from "react-icons/ri";

// components
import { Cover } from "@/components/ui/cover";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { Socials } from "./Socials";
import { DevRoles } from "./DevRoles";
import { HeroImage } from "./HeroImage";
import { MobileFloatingBadge } from "./MobileFloatingBadges";

export const Hero = ({ discription }) => {
  return (
    // md:h-[110vh] xl:h-[91vh]
    <section className="bg-secondary py-8 xl:h-screen xl:py-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="mx-auto flex max-w-[300px] flex-col justify-center text-center xl:mx-0 xl:max-w-[40%] xl:text-left">
            <div className="mb-4 cursor-grab text-sm font-semibold uppercase tracking-[4px] text-primary">
              <DevRoles />
            </div>
            <h1 className="mb-4 text-6xl font-bold tracking-[-2px] xl:text-[72px] xl:leading-[80px]">
              Hello, I&apos;m{" "}
              <Cover className={"text-primary dark:text-primary"}>SHETTY</Cover>{" "}
              aka Nishith P Shetty
            </h1>
            <p className="mx-auto mb-8 mt-2 w-full text-justify text-lg font-light text-muted-foreground xl:mx-0">
              {discription}
            </p>
            {/* buttons */}
            <div className="mx-auto mb-8 flex flex-col gap-x-3 gap-y-3 md:flex-row">
              <Link href="/contact">
                <Button className="h-[45px] min-w-[166px] gap-x-2 rounded-full px-6 text-base xl:h-[50px]">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              <a href="/Resume.pdf" download>
                <Button
                  variant="secondary"
                  className="h-[45px] min-w-[166px] gap-x-2 rounded-full border-2 border-primary px-6 text-base hover:bg-primary hover:text-black xl:h-[50px]"
                >
                  My Resume <Download size={18} className="animate-bounce" />
                </Button>
              </a>
            </div>
            {/* Mobile FloatingBadge */}
            <div>
              <MobileFloatingBadge />
            </div>
            {/* socials */}
            <Socials
              containerStyles="mx-auto my-auto flex gap-x-6"
              iconsStyles="text-[30px] text-foreground transition-all hover:text-primary"
            />
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">
            <HeroImage />
          </div>
        </div>
        {/* icon */}
        <div className="absolute bottom-44 left-2/4 hidden animate-bounce xl:bottom-12 xl:flex">
          <RiArrowDownDoubleFill className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};
