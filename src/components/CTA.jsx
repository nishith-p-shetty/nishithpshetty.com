import Link from "next/link";

// icon
import { MdOutlineRocketLaunch } from "react-icons/md";

// components
import { Button } from "./ui/button";

export const CTA = () => {
  return (
    <section className="bg-secondary py-14 dark:bg-secondary/40">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="mb-8 max-w-xl text-center text-4xl font-bold">
            Get in touch with me for collaborations, inquiries, or to learn more
            about my work.
          </h2>
          <Link href="/contact">
            <Button className={"text-xl"}>
              Contact Me{" "}
              <MdOutlineRocketLaunch className="ml-2 animate-bounce" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
