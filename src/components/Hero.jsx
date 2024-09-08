import Link from "next/link";

// icons
import {
  RiTeamFill,
  RiTodoFill,
  RiDownload2Fill,
  RiBriefcase4Fill,
  RiArrowDownDoubleFill,
} from "react-icons/ri";

// components
import { CoverEdited } from "@/components/ui/cover-edited";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { DevImg } from "./DevImg";
import { FloatingBadge } from "./FloatingBadge";
import { Socials } from "./Socials";
import { DevRoles } from "./DevRoles";

export const Hero = ({ discription }) => {
  return (
    <section className="h-[110vh] bg-secondary bg-cover bg-bottom bg-no-repeat py-8 dark:bg-none xl:h-[90vh] xl:py-24 xl:pt-28">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="mx-auto flex max-w-[300px] flex-col justify-center text-center xl:mx-0 xl:max-w-[40%] xl:text-left">
            <div className="mb-4 cursor-grab text-sm font-semibold uppercase tracking-[4px] text-primary">
              <DevRoles />
            </div>
            <h1 className="mb-4 text-6xl font-bold tracking-[-2px] xl:text-[72px] xl:leading-[80px]">
              Hello, I&apos;m{" "}
              <CoverEdited className={"text-primary dark:text-primary"}>
                SHETTY
              </CoverEdited>{" "}
              aka Nishith P Shetty
            </h1>
            <p className="mx-auto mb-8 max-w-[490px] text-lg font-light text-muted-foreground xl:mx-0">
              {discription}
            </p>
            {/* buttons */}
            <div className="mx-auto mb-12 flex flex-col gap-x-3 gap-y-3 md:flex-row xl:mx-0">
              <Link href="/contact">
                <Button className="h-[45px] gap-x-2 rounded-full px-6 text-base xl:h-[50px]">
                  Contact Me
                  <Send size={18} />
                </Button>
              </Link>
              <a href="/Resume.pdf" download>
                <Button
                  variant="secondary"
                  className="h-[45px] gap-x-2 rounded-full border-2 border-primary px-6 text-base hover:bg-primary hover:text-black xl:h-[50px]"
                >
                  My Resume <Download size={18} />
                </Button>
              </a>
            </div>
            {/* socials */}
            <Socials
              containerStyles="gap-x-6 mx-auto xl:mx-0 flex"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="relative hidden xl:flex">image</div>
        </div>
        {/* icon */}
        <div className="absolute bottom-44 left-2/4 hidden animate-bounce md:flex xl:bottom-12">
          <RiArrowDownDoubleFill className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};
