"use client";

import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { useTheme } from "next-themes";

export function ThemedFlickeringGrid() {
    const { theme } = useTheme();

    return (
        <FlickeringGrid
            className="absolute top-0 left-1/2 -translate-x-1/2"
            squareSize={2}
            gridGap={1.5}
            color={theme === "dark" ? "#ACE7AE" : "#1F432B"}
            maxOpacity={0.5}
            flickerChance={0.3}
            height={300}
            width={1920}
        />
    );
}

// Brighter variant for layout header
export function ThemedFlickeringGridBright() {
    const { theme } = useTheme();

    return (
        <FlickeringGrid
            className="absolute top-0 left-1/2 -translate-x-1/2"
            squareSize={2}
            gridGap={1.5}
            color={theme === "dark" ? "#ACE7AE" : "#1F432B"}
            maxOpacity={1}
            flickerChance={0.3}
            height={300}
            width={1920}
        />
    );
}
