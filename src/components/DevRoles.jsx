// components
import { FlipWords } from "@/components/ui/flip-words";

// data
import { WorkRoles } from "@/data/WorkRoles";

export const DevRoles = () => {
  return (
    <section>
      <FlipWords
        words={WorkRoles}
        duration={1000}
        className={"text-primary dark:text-primary"}
      />
    </section>
  );
};
