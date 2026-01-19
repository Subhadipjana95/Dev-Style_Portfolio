"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function WavingHand() {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    const hasAnimated = useRef(false);

    useEffect(() => {
        if (isInView) {
            const delay = hasAnimated.current ? 0.2 : 2.5;
            controls.start({
                rotate: [0, 20, -10, 20, 0],
                transition: {
                    duration: 1.4,
                    ease: "easeInOut",
                    delay: delay,
                },
            });
            hasAnimated.current = true;
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ rotate: 0 }}
            className="hidden sm:inline-block"
            style={{
                transformOrigin: "70% 70%"
            }}
        >
            👋
        </motion.div>
    );
}
