"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function AnimatedVerticalLines() {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        const hasLoadedBefore = sessionStorage.getItem('pageHasLoaded');
        if (hasLoadedBefore) {
            setIsFirstLoad(false);
        }
    }, []);

    // Animation duration for the lines to grow from top to bottom
    const lineDuration = 2.4;
    const hLineDuration = 1.0;
    const lineDelay = 1.4;

    return (
        <div className="lines hidden lg:block">
            {/* Left vertical line */}
            <motion.div
                className="absolute -left-16 top-0 w-[1px] border-l border-dashed border-muted-foreground/35 [mask-image:linear-gradient(to_bottom,transparent,black_1%,black_95%,transparent)] origin-top"
                initial={isFirstLoad ? { height: 0 } : { height: "100%" }}
                animate={{ height: "100%" }}
                transition={{
                    duration: isFirstLoad ? lineDuration : 0,
                    delay: isFirstLoad ? lineDelay : 0,
                    ease: "easeOut"
                }}
            />

            {/* Right vertical line */}
            <motion.div
                className="absolute -right-16 top-0 w-[1px] border-r border-dashed border-muted-foreground/35 [mask-image:linear-gradient(to_bottom,transparent,black_1%,black_95%,transparent)] origin-top"
                initial={isFirstLoad ? { height: 0 } : { height: "100%" }}
                animate={{ height: "100%" }}
                transition={{
                    duration: isFirstLoad ? lineDuration : 0,
                    delay: isFirstLoad ? lineDelay : 0,
                    ease: "easeOut"
                }}
            />

            {/* Horizontal line at top */}
            <motion.div
                className="absolute left-1/2 top-16 h-[1px] w-screen -translate-x-1/2 border-t border-dashed border-muted-foreground/35 [mask-image:linear-gradient(to_right,transparent,black_6%,black_90%,transparent)]"
                initial={isFirstLoad ? { clipPath: "inset(0 100% 0 0)" } : { clipPath: "inset(0 0% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                    duration: isFirstLoad ? hLineDuration : 0,
                    delay: isFirstLoad ? lineDelay : 0,
                    ease: "easeOut"
                }}
            />

            {/* Left corner square */}
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -left-16 top-16 -translate-x-1/2 -translate-y-1/2 size-2 text-muted-foreground2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: lineDuration,
                    delay: lineDelay,
                    ease: "easeOut"
                }}
            >
                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path>
            </motion.svg>

            {/* Right corner square */}
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -right-16 top-16 translate-x-1/2 -translate-y-1/2 size-2 text-muted-foreground2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: lineDuration,
                    delay: lineDelay,
                    ease: "easeOut"
                }}
            >
                <path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path>
            </motion.svg>
        </div>
    );
}
