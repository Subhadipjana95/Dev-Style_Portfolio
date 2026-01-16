"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';

const selectLastOneYear = (contributions: Array<{ date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }>) => {
    const today = new Date();
    const startDate = new Date();
    startDate.setDate(today.getDate() - 365);

    return contributions.filter((activity: { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }) => {
        const date = new Date(activity.date);
        return date >= startDate && date <= today;
    });
};

export default function GithubContributions() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Scroll to right on mount
    // Scroll to right on load and resize
    useEffect(() => {
        setMounted(true);
        const container = containerRef.current;
        if (!container) return;

        const scrollToRight = () => {
            container.scrollLeft = container.scrollWidth;
        };

        // Initial scroll
        scrollToRight();

        // Observe for size changes (data loading)
        const observer = new ResizeObserver(() => {
            // Only scroll to right if we are already near the end or it's the initial load? 
            // For now, let's just force it on first meaningful size change if we want strict "on loading... appeared from right end"
            // But user might be scrolling.
            // Let's protect it: if user hasn't interacted? 
            // The simplest "on load" logic is watching for scrollWidth change.
            if (container.scrollWidth > container.clientWidth) {
                scrollToRight();
            }
        });

        // Watch the child div (the calendar wrapper)
        if (container.firstElementChild) {
            observer.observe(container.firstElementChild);
        }

        return () => observer.disconnect();
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 1.5; // Scroll-fast multiplier
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div
            id="github-contribution-scroll-container"
            ref={containerRef}
            className="w-full overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <style jsx global>{`
                #github-contribution-scroll-container::-webkit-scrollbar {
                    display: none !important;
                    width: 0px !important;
                    background: transparent !important;
                    -webkit-appearance: none !important;
                }
                #github-contribution-scroll-container {
                    scrollbar-width: none !important;
                    -ms-overflow-style: none !important;
                }
            `}</style>
            <div className="flex w-fit ml-auto">
                <GitHubCalendar
                    username="Subhadipjana95"
                    transformData={selectLastOneYear}
                    showColorLegend={false}
                    showMonthLabels={false}
                    showTotalCount={false}
                    showWeekdayLabels={false}
                    colorScheme={(mounted && resolvedTheme === 'light') ? 'light' : 'dark'}
                />
            </div>
        </div>
    );
}
