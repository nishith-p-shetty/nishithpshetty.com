import Image from "next/image";

// data
import { cards } from "@/data/Photography";

export default function Photography() {
  return (
    <section className="m-0 h-max w-full bg-secondary p-12">
      <div className="container mx-auto">
        <h2 className="relative mx-auto mb-8 flex w-max items-center justify-between gap-x-3 text-center text-4xl font-bold before:h-[24px] before:w-[24px] before:bg-heading_dots_light before:bg-center before:bg-no-repeat before:dark:bg-heading_dots_dark xl:mb-16">
          Gallery
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => {
          return (
            <Image
              key={index}
              src={card.thumbnail}
              height={700}
              width={700}
              alt="image"
            />
          );
        })}
      </div>
      <div className="border-3 mt-10 border-b border-dotted border-primary"></div>
    </section>
  );
}
