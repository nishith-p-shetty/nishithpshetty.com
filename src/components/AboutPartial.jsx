import Link from "next/link";

// icons
import { GraduationCap, Briefcase } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

// data
import { AboutMeBasicInfo } from "@/data/AboutMeBasicInfo";
import { Education } from "@/data/Education";
import { WorkExperience } from "@/data/WorkExperience";
import { SkillsTools } from "@/data/SkillsTools";

// components
import { DevImage } from "@/components/DevImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export const AboutPartial = () => {
  return (
    <section className="bg-secondary p-8">
      <div className="container mx-auto">
        <h2 className="before:bg-about_dots_light before:dark:bg-about_dots_dark relative mx-auto mb-8 flex w-max items-center justify-between gap-x-3 pt-8 text-center text-5xl font-bold text-inherit before:h-[24px] before:w-[24px] before:bg-center before:bg-no-repeat xl:mb-16">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative mr-10 hidden xl:flex">
            <DevImage
              containerStyles="pl-20 pt-10 bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/Developer-Hello.png"
              imgHeight={505}
              imgWidth={505}
            />
          </div>
          <div className="my-auto w-full text-left">
            <h3 className="mb-4 text-wrap text-justify text-2xl font-bold">
              Software engineering student with a passion for building
              innovative and user-friendly applications.
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-wrap text-justify text-lg font-light text-muted-foreground xl:mx-0">
              Strong foundation in computer science and a keen eye for design, I
              strive to create seamless experiences that exceed expectations.
            </p>
            <div>
              <Link href="/about">
                <Button className="items-center justify-center align-middle text-2xl">
                  Know More
                  <MdOutlineRocketLaunch className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
