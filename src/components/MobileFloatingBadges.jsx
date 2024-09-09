"use client";

import CountUp from "react-countup";

// icons
import { RiMedalFill, RiTodoFill, RiBriefcase4Fill } from "react-icons/ri";

export const MobileFloatingBadge = () => {
  return (
    <section className="mb-3 mt-0 flex flex-col items-center justify-center gap-4 pb-5 pt-0 md:flex-row">
      {/* FloatingBadge 1 */}
      <MobileSingleFloatingBadge
        icon={<RiBriefcase4Fill />}
        endCountNum={1}
        endCountText=""
        badgeText="Internships Completed"
      />
      {/* FloatingBadge 2 */}
      <MobileSingleFloatingBadge
        icon={<RiTodoFill />}
        endCountNum={9}
        endCountText="+"
        badgeText="Finished Projects"
      />
      {/* FloatingBadge 3 */}
      <MobileSingleFloatingBadge
        icon={<RiMedalFill />}
        endCountNum={1}
        endCountText="/1"
        badgeText="Hackathons Won"
      />
    </section>
  );
};

export const MobileSingleFloatingBadge = ({
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <section
      className={
        "relative z-10 flex h-[55px] w-[200px] items-center gap-x-4 rounded-full bg-white p-4 shadow-2xl dark:backdrop-blur-[44px] xl:hidden"
      }
    >
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none text-primary">
          <CountUp end={endCountNum} delay={1} duration={3} />
          {endCountText}
        </div>
        <div className="max-w-[70px] text-[13px] font-semibold leading-none text-black">
          {badgeText}
        </div>
      </div>
    </section>
  );
};
