// components
import { CoverEdited } from "@/components/ui/cover-edited";
import { FlipWords } from "@/components/ui/flip-words";

// data
import { WorkRoles } from "@/data/WorkRoles";

export const Hero = () => {
  return (
    <div>
      Hello, I&apos;m <CoverEdited>SHETTY</CoverEdited> aka Nishith P Shetty
      <FlipWords words={WorkRoles} duration={2000} />
    </div>
  );
};
