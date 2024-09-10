// icons
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramLine,
} from "react-icons/ri";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

// data
import { SocialMediaProfiles } from "./SocialMediaProfiles";

export const IconsLinks = [
  {
    weblink: SocialMediaProfiles.github,
    iconlogo: <RiGithubFill />,
  },
  {
    weblink: SocialMediaProfiles.linkedin,
    iconlogo: <RiLinkedinBoxFill />,
  },
  {
    weblink: SocialMediaProfiles.twitter,
    iconlogo: <RiTwitterXFill />,
  },
  {
    weblink: SocialMediaProfiles.leetcode,
    iconlogo: <SiLeetcode />,
  },
  {
    weblink: SocialMediaProfiles.hackerrank,
    iconlogo: <SiHackerrank />,
  },
  {
    weblink: SocialMediaProfiles.instagram,
    iconlogo: <RiInstagramLine />,
  },
];
