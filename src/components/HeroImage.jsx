// components
import { DevImg } from "./DevImg";
import { FloatingBadge } from "./FloatingBadge";

// icons
import { RiMedalFill, RiTodoFill, RiBriefcase4Fill } from "react-icons/ri";

export const HeroImage = () => {
  return (
    <section>
      {/* FloatingBadge 1 */}
      <FloatingBadge
        containerStyles="absolute top-[24%] -left-[5rem]"
        icon={<RiBriefcase4Fill />}
        endCountNum={1}
        endCountText=""
        badgeText="Internships Completed"
      />
      {/* FloatingBadge 2 */}
      <FloatingBadge
        containerStyles="absolute top-[80%] -left-[1rem]"
        icon={<RiTodoFill />}
        endCountNum={9}
        endCountText="+"
        badgeText="Finished Projects"
      />
      {/* FloatingBadge 3 */}
      <FloatingBadge
        containerStyles="absolute top-[55%] -right-10"
        icon={<RiMedalFill />}
        endCountNum={1}
        endCountText="/1"
        badgeText="Hackathons Won"
      />
      <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark absolute -right-16 -top-0 h-[540px] w-[540px] bg-no-repeat"></div>
      <DevImg
        containerStyles="bg-hero_shape relative h-[540px] w-[540px] -top-8 bg-bottom bg-no-repeat"
        imgSrc="/hero/Developer-Headshot.png"
        imhHeight={540}
        imgWidth={540}
      />
    </section>
  );
};
