"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedHorizontalLineProps {
    withCorners?: boolean;
}

export function AnimatedHorizontalLine({ withCorners = false }: AnimatedHorizontalLineProps) {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        const hasLoadedBefore = sessionStorage.getItem('pageHasLoaded');
        if (hasLoadedBefore) {
            setIsFirstLoad(false);
        }
    }, []);

    const lineDuration = 1.0;
    const lineDelay = 1.4;

    return (
        <div className="lines hidden lg:block">
            {/* Horizontal line */}
            <motion.div
                className="absolute left-1/2 top-0 h-[1px] w-screen -translate-x-1/2 border-t border-dashed border-muted-foreground/35 [mask-image:linear-gradient(to_right,transparent,black_6%,black_90%,transparent)]"
                initial={isFirstLoad ? { clipPath: "inset(0 100% 0 0)" } : { clipPath: "inset(0 0% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{
                    duration: isFirstLoad ? lineDuration : 0,
                    delay: isFirstLoad ? lineDelay : 0,
                    ease: "easeOut"
                }}
            />

            {withCorners && (
                <>
                    {/* Left corner square */}
                    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -left-[88px] top-0 -translate-x-1/2 -translate-y-1/2 size-2 text-muted-foreground2"
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
                    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -right-[88px] top-0 translate-x-1/2 -translate-y-1/2 size-2 text-muted-foreground2"
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
                </>
            )}
        </div>
    );
}
