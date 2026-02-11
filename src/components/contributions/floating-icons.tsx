"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface FloatingIcon {
    src: string;
    alt: string;
    position: string;
    size: number;
    animationDelay: string;
}

const icons: FloatingIcon[] = [
    {
        src: "/3D-icons/computer-icon.png",
        alt: "Computer",
        position: "hidden sm:block -top-2 -left-6 -translate-x-1/2 -translate-y-1/2",
        size: 24,
        animationDelay: "0s"
    },
    {
        src: "/3D-icons/headphone-icon.png",
        alt: "Color Bucket",
        position: "-top-4 right-28 translate-x-1/2 -translate-y-1/2",
        size: 26,
        animationDelay: "0.5s"
    },
    {
        src: "/3D-icons/tea-icon.png",
        alt: "Headphone",
        position: "-bottom-4 left-10 -translate-x-1/2 translate-y-1/2",
        size: 25,
        animationDelay: "1s"
    },
    {
        src: "/3D-icons/color-bucket-icon.png",
        alt: "Tea Cup",
        position: "-bottom-4 sm:-bottom-2 -right-2 sm:-right-6 translate-x-1/2 translate-y-1/2",
        size: 24,
        animationDelay: "1.5s"
    }
];

export function FloatingIcons() {
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Check if this is the first load in this session
        const hasLoadedBefore = sessionStorage.getItem('pageHasLoaded');

        if (hasLoadedBefore) {
            // Not first load - use short delay
            setIsFirstLoad(false);
        }
    }, []);

    return (
        <>
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        .floating-icon {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

            {icons.map((icon, index) => {
                // Desktop/Tablet: long delay on first load, short delay on subsequent navigations
                // Mobile: always short delay
                const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 640;
                const baseDelay = isDesktop && isFirstLoad ? 3.8 : 0.5; // 3.8s for desktop first load, 0.5s otherwise
                const iconDelay = baseDelay + index * 0.15; // Stagger each icon

                return (
                    <motion.div
                        key={index}
                        className={`absolute ${icon.position} floating-icon z-10 pointer-events-none bg-gradient-to-br from-neutral-100 to-neutral-300 dark:from-neutral-500 dark:to-neutral-800 p-[2px] rounded-xl border border-neutral-400/50 dark:border-neutral-700/50`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: iconDelay,
                            ease: "backOut"
                        }}
                        style={{
                            animationDelay: icon.animationDelay,
                            boxShadow: `
                                0 1px 0 0 rgba(255, 255, 255, 0.4) inset,
                                0 -1px 0 0 rgba(0, 0, 0, 0.1) inset,
                                2px 2px 0 0 rgba(0, 0, 0, 0.12),
                                3px 3px 0 0 rgba(0, 0, 0, 0.08),
                                4px 4px 8px 0 rgba(0, 0, 0, 0.2),
                                0 6px 12px rgba(0, 0, 0, 0.15)
                            `
                        }}
                    >
                        <Image
                            src={icon.src}
                            alt={icon.alt}
                            width={icon.size}
                            height={icon.size}
                            className="drop-shadow-xl relative z-10"
                        />
                    </motion.div>
                );
            })}
        </>
    );
}
