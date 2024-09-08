// components
import { Hero } from "@/components/Hero";

import { metadata } from "./layout";

export default function Home() {
  return (
    <main>
      <Hero discription={metadata.description} />
    </main>
  );
}
