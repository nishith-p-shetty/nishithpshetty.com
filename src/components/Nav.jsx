"use client";

import { NavLinks } from "@/data/NavLinks";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

// data
import Link from "next/link";

export const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const currentPathName = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {NavLinks.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
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
