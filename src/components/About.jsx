// icons
import { GraduationCap, Briefcase } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";

// data
import { AboutMeBasicInfo } from "@/data/AboutMeBasicInfo";
import { Education } from "@/data/Education";
import { WorkExperience } from "@/data/WorkExperience";
import { SkillsTools } from "@/data/SkillsTools";

// components
import { DevImage } from "@/components/DevImage";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const About = () => {
  return (
    <section className="bg-secondary p-8" id="aboutme">
      <div className="container mx-auto">
        <h2 className="before:bg-about_dots_light before:dark:bg-about_dots_dark relative mx-auto mb-8 flex w-max items-center justify-between gap-x-3 pt-8 text-center text-5xl font-bold text-inherit before:h-[24px] before:w-[24px] before:bg-center before:bg-no-repeat xl:mb-16">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative hidden flex-1 xl:flex">
            <DevImage
              containerStyles="pl-20 pt-10 bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/Developer-Hello.png"
              imgHeight={505}
              imgWidth={505}
            />
          </div>
          {/* tabs */}
          <Tabs defaultValue="PersonalInformation" className="flex-1">
            <TabsList className="grid w-full border-primary xl:max-w-[520px] xl:grid-cols-3 xl:border-2">
              <TabsTrigger
                value="PersonalInformation"
                className="w-[162px] xl:w-auto"
              >
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                value="Qualifications"
                className="w-[162px] xl:w-auto"
              >
                Qualifications
              </TabsTrigger>
              <TabsTrigger value="SkillsTools" className="w-[162px] xl:w-auto">
                Skills & Tools
              </TabsTrigger>
            </TabsList>
            {/* tab content */}
            <div className="mt-12 text-lg xl:mt-8">
              {/* Personal Information Content */}
              <TabsContent
                value="PersonalInformation"
                className="text-center xl:text-left"
              >
                <h3 className="mb-4 text-wrap text-justify text-2xl font-bold">
                  Software engineering student with a passion for building
                  innovative and user-friendly applications.
                </h3>
                <p className="mx-auto mb-8 max-w-xl text-wrap text-justify text-lg font-light text-muted-foreground xl:mx-0">
                  Strong foundation in computer science and a keen eye for
                  design, I strive to create seamless experiences that exceed
                  expectations.
                </p>
                {/* icons */}
                <div className="mb-12 grid gap-4 xl:grid-cols-2">
                  {AboutMeBasicInfo.map((item, index) => {
                    return (
                      <div
                        className="mx-auto flex items-center gap-x-4 xl:mx-0"
                        key={index}
                      >
                        <div className="text-primary">{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    );
                  })}
                </div>
                {/* languagues */}
                <div className="flex flex-col gap-y-2">
                  <div className="text-primary">Language Skill</div>
                  <div className="border-b border-border"></div>
                  <div>English, Kannada, Hindi</div>
                </div>
              </TabsContent>
              {/* Qualifications Content */}
              <TabsContent value="Qualifications">
                <h3 className="mb-8 text-center text-3xl font-bold xl:text-left">
                  My Awesome Journey
                </h3>
                {/* experience & education wrapper */}
                <div className="grid gap-y-2 md:grid-cols-2">
                  {/*  Experience */}
                  <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-4 text-[22px] text-primary">
                      <Briefcase />
                      <h4 className="font-medium capitalize">Experince</h4>
                    </div>
                    {/* experince list */}
                    <div className="flex flex-col gap-y-8">
                      {WorkExperience.map((item, index) => {
                        return (
                          <div className="group flex gap-x-8" key={index}>
                            <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                              <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                            </div>
                            <div>
                              <div className="leading-none-mb-2 text-xl font-semibold">
                                {item.company}
                              </div>
                              <div className="mb-4 text-lg leading-none text-muted-foreground">
                                {item.role}
                              </div>
                              <div className="text-base font-medium">
                                {item.time}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* education */}
                  <div className="flex flex-col gap-y-6">
                    <div className="flex items-center gap-x-4 text-[22px] text-primary">
                      <GraduationCap size={28} />
                      <h4 className="font-medium capitalize">Education</h4>
                    </div>
                    {/* education list */}
                    <div className="flex flex-col gap-y-8">
                      {Education.map((item, index) => {
                        return (
                          <div className="group flex gap-x-8" key={index}>
                            <div className="relative ml-2 h-[84px] w-[1px] bg-border">
                              <div className="absolute -left-[5px] h-[11px] w-[11px] rounded-full bg-primary transition-all duration-500 group-hover:translate-y-[84px]"></div>
                            </div>
                            <div>
                              <div className="leading-none-mb-2 text-xl font-semibold">
                                {item.institution}
                              </div>
                              <div className="mb-4 text-lg leading-none text-muted-foreground">
                                {item.course}
                              </div>
                              <div className="text-base font-medium">
                                {item.time}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </TabsContent>
              {/* Skills & Tools Content */}
              <TabsContent
                value="SkillsTools"
                className="text-center xl:text-left"
              >
                <h3 className="mb-8 text-3xl font-bold">
                  Tools I use Everyday
                </h3>
                {/* skills  */}
                <div className="mb-16">
                  <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                  <div className="mb-4 border-b border-border"></div>
                  {/* skill list */}
                  <div className="mb-12 grid gap-4 xl:grid-cols-2">
                    {SkillsTools.skills.map((item, index) => {
                      return (
                        <div
                          className="mx-auto flex items-center gap-x-4 xl:mx-0"
                          key={index}
                        >
                          <div className="flex items-center justify-center gap-x-3">
                            <FaDotCircle className="text-sm text-primary" />
                            {item}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* tools */}
                <div>
                  <h4 className="mb-2 text-xl font-semibold xl:text-left">
                    Tools
                  </h4>
                  <div className="mb-4 border-b border-border"></div>
                  {/* tool list */}
                  <div className="flex flex-wrap justify-start gap-x-8 gap-y-8 text-3xl">
                    {SkillsTools.tools.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="text-foreground transition-all hover:text-primary"
                        >
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
