// components
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { RecentProjects } from "@/components/RecentProjects";

import { metadata } from "./layout";

export default function Home() {
  return (
    <main>
      <Hero discription={metadata.description} />
      <div className="border-3 border-b border-dotted border-primary"></div>
      <About />
      <div className="border-3 border-b border-dotted border-primary"></div>
      <RecentProjects />
      <div className="border-3 border-b border-dotted border-primary"></div>
    </main>
  );
}
