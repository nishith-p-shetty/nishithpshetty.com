// icons
import {
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiGithubFill,
  RiTwitterXFill,
  RiInstagramLine,
} from "react-icons/ri";

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
    weblink: SocialMediaProfiles.instagram,
    iconlogo: <RiInstagramLine />,
  },
];
