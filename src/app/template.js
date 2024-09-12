"use client";

import { motion } from "framer-motion";

//hook
import { useScrollProgress } from "@/hooks/useScrollProgress";

// variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        animate="enter"
        transition={{ type: "linear", delay: 0, duration: 0 }}
      >
        {children}
      </motion.main>
      {/* {completion bar} */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed bottom-0 right-0 top-0 z-50 w-1 bg-primary transition-all"
      ></span>
    </>
  );
};

export default Template;
