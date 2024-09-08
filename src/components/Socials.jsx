// "use client";

// data
import { IconsLinks } from "@/data/IconsLinks";

export const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {IconsLinks.map((iconlink, index) => {
        return (
          <a
            href={iconlink.weblink}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${iconsStyles}`}>{iconlink.iconlogo}</div>
          </a>
        );
      })}
    </div>
  );
};
