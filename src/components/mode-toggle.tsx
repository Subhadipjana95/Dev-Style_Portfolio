"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, forwardRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SunMediumIcon } from "./animated-icons/sun-medium";
import { MoonIcon } from "./animated-icons/moon";

export const ModeToggle = forwardRef<HTMLButtonElement, any>((props, ref) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const iconRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className="px-4"
        onMouseEnter={() => iconRef.current?.startAnimation?.()}
        onMouseLeave={() => iconRef.current?.stopAnimation?.()}
      >
        <SunMediumIcon size={20} ref={iconRef} />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      ref={ref}
      variant="ghost"
      type="button"
      size="icon"
      className="px-4 rounded-lg"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      onMouseEnter={() => iconRef.current?.startAnimation?.()}
      onMouseLeave={() => iconRef.current?.stopAnimation?.()}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.div
            key="dark"
            initial={{ opacity: 0, rotate: -90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <MoonIcon size={20} ref={iconRef} />
          </motion.div>
        ) : (
          <motion.div
            key="light"
            initial={{ opacity: 0, rotate: 90, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SunMediumIcon size={20} ref={iconRef} />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
});
ModeToggle.displayName = "ModeToggle";
