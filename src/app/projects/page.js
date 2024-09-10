"use client";

import { useState } from "react";

// components
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/ProjectCard";

// data
import { AllProjects, Categories } from "@/data/AllProjects";

export default function Projects() {
  const [category, setCategory] = useState("All");

  const filteredProjects = AllProjects.filter((project) => {
    // if category is 'All' return all projects, else filter by category
    return category === "All" ? project : project.category.includes(category);
  });

  return (
    <section className="bg-secondary p-12">
      <div className="container mx-auto">
        <h2 className="before:bg-heading_dots_light before:dark:bg-heading_dots_dark relative mx-auto mb-8 flex w-max items-center justify-between gap-x-3 text-center text-4xl font-bold before:h-[24px] before:w-[24px] before:bg-center before:bg-no-repeat xl:mb-16">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="mx-auto mb-12 grid h-full w-full border-primary md:grid-cols-7 md:border-2 lg:max-w-[750px]">
            {Categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => {
                    setCategory(category);
                  }}
                  value={category}
                  key={index}
                  className="w-[162px] capitalize md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="grid grid-cols-1 gap-4 text-lg lg:grid-cols-3 xl:mt-8">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} type={"all"} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
      <div className="border-3 border-b border-dotted border-primary"></div>
    </section>
  );
}
