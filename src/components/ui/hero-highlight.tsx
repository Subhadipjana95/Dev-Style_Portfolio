"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";


export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 1,
        ease: "linear",
        delay: 0.3,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block rounded-sm bg-gradient-to-r from-background/50 to-primary/20 px-1 dark:from-background/50 dark:to-primary/20 border border-dashed border-[#6e6d6d]`,
        className,
      )}
    >
      {children}
    </motion.span>
  );
};
