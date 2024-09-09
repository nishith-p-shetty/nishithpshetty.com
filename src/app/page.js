// components
import { Hero } from "@/components/Hero";
import { AboutPartial } from "@/components/AboutPartial";

import { metadata } from "./layout";

export default function Home() {
  return (
    <main>
      <Hero discription={metadata.description} />
      <AboutPartial />
    </main>
  );
}
