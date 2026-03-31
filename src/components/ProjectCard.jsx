import Link from "next/link";
import Image from "next/image";

// icon
import { Link2Icon } from "lucide-react";

const GithubIcon = ({ className }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// components
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export const ProjectCard = ({ project, type }) => {
  return (
    <section>
      <Card className="group relative overflow-hidden">
        <CardHeader className="p-0">
          {/* image */}
          <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden bg-secondary/40 dark:bg-secondary/40 md:h-[240px]">
            <Image
              className="absolute bottom-0 rounded-t-lg shadow-2xl"
              src={project.image}
              // width={450}
              // height={450}
              fill={true}
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
                target="_blank"
                className="flex h-[54px] w-[54px] scale-0 items-center justify-center rounded-full bg-foreground opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
              >
                <GithubIcon className="text-primary" />
              </Link>
            </div>
          </div>
        </CardHeader>
        {type === "latest" ? (
          <div className="h-full px-8 py-6">
            <div className="left-5 top-4 mb-2 flex">
              {project.category.map((badge_name, index) => {
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
            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>
          </div>
        ) : (
          <div className="h-full px-8 py-6">
            <h4 className="mb-1 text-[22px] font-semibold">{project.name}</h4>
            <p className="text-lg text-muted-foreground">
              {project.description}
            </p>
            <div className="left-5 top-4 mt-4 grid grid-cols-3 gap-4">
              {project.techStack.map((badge_name, index) => {
                return (
                  <div
                    key={index}
                    variant="outline"
                    className="mx-1 flex items-center justify-center gap-x-1 gap-y-1 rounded-full text-center align-middle text-xs font-medium text-primary"
                  >
                    {badge_name}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};
