// "use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

// data
import { NavLinks } from "@/data/NavLinks";

// icon
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export const Nav = ({
  containerStyles,
  linkStyles,
  underlineStyles,
  onLinkClick,
}) => {
  const currentPathName = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {NavLinks.map((link, index) => {
        return link.name === "Resume" ? (
          <Link
            href={link.path}
            target="_blank"
            prefetch={false}
            key={index}
            className={`flex capitalize ${linkStyles}`}
            onClick={onLinkClick}
          >
            {link.name}
            <ArrowTopRightIcon className="flex" />
          </Link>
        ) : (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
            onClick={onLinkClick}
          >
            {link.path === currentPathName && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underlineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
