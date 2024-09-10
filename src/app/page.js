// components
import { Hero } from "@/components/Hero";
import { AboutPartial } from "@/components/AboutPartial";

import { metadata } from "./layout";

export default function Home() {
  return (
    <main>
      <Hero discription={metadata.description} />
      <div className="border-3 border-b border-dotted border-primary"></div>
      <AboutPartial />
      <div className="border-3 border-b border-dotted border-primary"></div>
    </main>
  );
}
