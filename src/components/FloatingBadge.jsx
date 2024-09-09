"use client";

import CountUp from "react-countup";

export const FloatingBadge = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <section
      className={`${containerStyles} z-10 flex h-[68px] w-[210px] items-center gap-x-4 rounded-full bg-white p-4 shadow-2xl dark:backdrop-blur-[44px]`}
    >
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl font-bold leading-none text-primary">
          <CountUp end={endCountNum} delay={1} duration={3} />
          {endCountText}
        </div>
        <div className="max-w-[70px] text-[15px] font-medium leading-none text-black">
          {badgeText}
        </div>
      </div>
    </section>
  );
};
