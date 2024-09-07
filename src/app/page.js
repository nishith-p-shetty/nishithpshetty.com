import Image from "next/image";

// components
import { CoverEdited } from "@/components/ui/cover-edited";
import { FlipWords } from "@/components/ui/flip-words";

// data
import { WorkRoles } from "@/data/WorkRoles";

export default function Home() {
  return (
    <main>
      Hello, I&apos;m <CoverEdited>SHETTY</CoverEdited> aka Nishith P Shetty
      <FlipWords words={WorkRoles} duration={2000} />
    </main>
  );
}
