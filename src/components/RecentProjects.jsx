"use client";
import Link from "next/link";

// data
import { AllProjects } from "@/data/AllProjects";

// icon
import { FaArrowCircleRight } from "react-icons/fa";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// components
import { Button } from "./ui/button";
import { ProjectCard } from "@/components/ProjectCard";

export const RecentProjects = () => {
  return (
    <section className="relative my-12 xl:my-48">
      <div className="container mx-auto">
        {/* heading caption */}
        <div className="mx-auto mb-12 flex max-w-[400px] flex-col items-center justify-center text-center xl:mx-0 xl:h-[400px] xl:items-start xl:text-left">
          <h2 className="relative mb-4 flex w-max items-center justify-between gap-x-3 text-4xl font-bold before:h-[24px] before:w-[24px] before:bg-heading_dots_light before:bg-center before:bg-no-repeat before:dark:bg-heading_dots_dark">
            Latest Projects
          </h2>
          <p className="mb-8 text-lg font-light text-muted-foreground">
            Here are some of the projects I&apos;ve worked on recently.
          </p>
          <Link href="/projects">
            <Button className="rounded-full text-lg">
              All projects <FaArrowCircleRight className="ml-2 animate-ping" />
            </Button>
          </Link>
        </div>
        {/* slider */}
        <div className="right-0 top-0 xl:absolute xl:max-w-[1000px]">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the recent projects for the slides */}
            {AllProjects.filter((project) => {
              return project.isLatest;
            }).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} type={"latest"} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
