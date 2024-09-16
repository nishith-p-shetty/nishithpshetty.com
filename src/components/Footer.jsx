import Link from "next/link";

// components
import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary text-[20px] dark:text-muted-foreground text-[20px] hover:text-muted-foreground dark:hover:text-primary transition-all"
          />
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Nishith P Shetty {new Date().getFullYear()}. All
            rights reserved.
          </div>
        </div>
      </div>
      <div className="gap-x-1 gap-y-1 bg-secondary text-center text-secondary">
        <Link className="m-1 p-1" href="https://www.nishithpshetty.com/">
          Home
        </Link>
        <Link
          className="m-1 p-1"
          href="https://www.nishithpshetty.com/#aboutme"
        >
          Amout Me
        </Link>
        <Link
          className="m-1 p-1"
          href="https://www.nishithpshetty.com/projects"
        >
          My Projects
        </Link>
        <Link
          className="m-1 p-1"
          href="https://www.nishithpshetty.com/photography"
        >
          Photography Gallery
        </Link>
        <Link className="m-1 p-1" href="https://www.nishithpshetty.com/contact">
          Contact Me
        </Link>
        <Link
          className="m-1 p-1"
          target="_blank"
          prefetch={false}
          href="https://www.nishithpshetty.com/Resume.pdf"
        >
          Resume
        </Link>
      </div>
    </footer>
  );
};
