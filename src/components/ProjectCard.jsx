import Link from "next/link";
import Image from "next/image";

// icon
import { Github, Link2Icon } from "lucide-react";

// components
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export const ProjectCard = ({ project, type }) => {
  return (
    <section>
      <Card className="relative overflow-hidden">
        <CardHeader className="p-0">
          {/* image */}
          <div className="relative flex h-[300px] w-full items-center justify-center overflow-hidden bg-secondary/40 dark:bg-secondary/40">
            <Image
              className="absolute bottom-0 rounded-t-lg shadow-2xl"
              src={project.image}
              width={450}
              height={450}
              //   fill={true}
              priority={true}
              alt={project.name + "thumbnail"}
            />
            {/* btn links */}
            <div className="flex gap-4">
              {project.link != null ? (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-foreground opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"
                >
                  <Link2Icon className="text-primary" />
                </Link>
              ) : (
                ""
              )}
              <Link
                href={project.github}
                target_="_blank"
                className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-foreground opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <Github className="text-primary" />
              </Link>
            </div>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-6">
          <div className="left-5 top-4 mb-2 flex">
            {type === "latest"
              ? project.category.map((badge_name, index) => {
                  return (
                    <Badge
                      key={index}
                      className="mr-2 rounded-full text-sm font-medium uppercase"
                    >
                      {badge_name}
                    </Badge>
                  );
                })
              : project.techStack.map((badge_name, index) => {
                  return (
                    <Badge
                      key={index}
                      className="mr-2 rounded-full text-sm font-medium uppercase"
                    >
                      {badge_name}
                    </Badge>
                  );
                })}
          </div>
          <h4 className="mb-1 text-[22px] font-semibold">{project.name}</h4>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </div>
      </Card>
    </section>
  );
};
