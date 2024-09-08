// "use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { motion } from "framer-motion";

// data
import { NavLinks } from "@/data/NavLinks";

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
