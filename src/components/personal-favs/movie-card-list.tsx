"use client";

import { MovieCard } from "@/components/personal-favs/movie-card";
import { DATA } from "@/data/resume";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface MovieItem {
    readonly id: number;
    readonly title: string;
    readonly image: string;
    readonly rating: number;
    readonly watchlistLink: string;
}

interface MovieCardListProps {
    items?: readonly MovieItem[];
}

export function MovieCardList({ items }: MovieCardListProps) {
    const data: readonly MovieItem[] = items || DATA.animes;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [showLeftMask, setShowLeftMask] = useState(false);
    const [showRightMask, setShowRightMask] = useState(true); // Initially true if content overflows, or false until mount check

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const updatePagination = () => {
            const scrollLeft = container.scrollLeft;
            const clientWidth = container.clientWidth;
            const scrollWidth = container.scrollWidth;
            const cardWidth = 156; // Card width (140px) + gap (16px)

            // Update Mask Visibility
            setShowLeftMask(scrollLeft > 0);
            setShowRightMask(scrollLeft < scrollWidth - clientWidth - 2); // buffer of 10px

            // Calculate total pages based on visible cards
            const visibleCards = Math.floor(clientWidth / cardWidth);
            // If visibleCards is 0 (very small screen), default to 1 to avoid division by zero
            const effectiveVisibleCards = visibleCards > 0 ? visibleCards : 1;
            const pages = Math.ceil(data.length / effectiveVisibleCards);
            setTotalPages(pages);

            // Calculate current page
            const page = Math.round(scrollLeft / (cardWidth * effectiveVisibleCards));
            setCurrentPage(page);
        };

        // Initial calculation
        updatePagination();

        // Update on scroll
        container.addEventListener("scroll", updatePagination);
        window.addEventListener("resize", updatePagination);

        return () => {
            container.removeEventListener("scroll", updatePagination);
            window.removeEventListener("resize", updatePagination);
        };
    }, [data]);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 156 * 2; // Scroll 2 cards at a time for better UX
            const newScrollLeft =
                scrollContainerRef.current.scrollLeft +
                (direction === "left" ? -scrollAmount : scrollAmount);

            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };

    const scrollToPage = (pageIndex: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const clientWidth = container.clientWidth;
            const cardWidth = 156;
            const visibleCards = Math.floor(clientWidth / cardWidth);
            const effectiveVisibleCards = visibleCards > 0 ? visibleCards : 1;

            const scrollLeft = pageIndex * cardWidth * effectiveVisibleCards;
            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
        }
    };

    return (
        <div
            className="relative group/carousel space-y-4"
        >
            <div className="relative">
                {/* Navigation Button Container - Hidden on mobile, visible on desktop */}
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft className="size-4" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background"
                    onClick={() => scroll("right")}
                >
                    <ChevronRight className="size-4" />
                </Button>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                    }}
                >
                    {data.map((item) => (
                        <div key={item.id} className="snap-start">
                            <MovieCard
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                watchlistLink={item.watchlistLink}
                            />
                        </div>
                    ))}
                </div>
                {/* Gradient Masks */}
                <div
                    className={`pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-[5] ${showLeftMask ? "opacity-100" : "opacity-0"
                        }`}
                />
                <div
                    className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-[5] ${showRightMask ? "opacity-100" : "opacity-0"
                        }`}
                />
            </div>

            {/* Pagination Dots */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 pt-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToPage(index)}
                            className={`h-2 rounded-full transition-[width,background-color] duration-500 ease-in-out ${index === currentPage
                                ? "w-8 bg-foreground"
                                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Custom CSS for hiding scrollbar */}
            <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-auto::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
          background: transparent !important;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-x-auto {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>
        </div>
    );
}
