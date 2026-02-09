"use client";

import { MovieCard } from "@/components/movie-card";
import { DATA } from "@/data/resume";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function MovieCardList() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const updatePagination = () => {
            const scrollLeft = container.scrollLeft;
            const scrollWidth = container.scrollWidth;
            const clientWidth = container.clientWidth;
            const cardWidth = 296; // Card width (280px) + gap (16px)

            // Calculate total pages based on visible cards
            const visibleCards = Math.floor(clientWidth / cardWidth);
            const pages = Math.ceil(DATA.animes.length / visibleCards);
            setTotalPages(pages);

            // Calculate current page
            const page = Math.round(scrollLeft / (cardWidth * visibleCards));
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
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 296; // Card width (280px) + gap (16px)
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
            const cardWidth = 296;
            const visibleCards = Math.floor(clientWidth / cardWidth);

            const scrollLeft = pageIndex * cardWidth * visibleCards;
            container.scrollTo({
                left: scrollLeft,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="relative group/carousel space-y-4">
            <div className="relative">
                {/* Navigation Buttons - Hidden on mobile, visible on desktop */}
                <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background"
                    onClick={() => scroll("left")}
                >
                    <ChevronLeft className="size-4" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background"
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
                    {DATA.animes.map((anime) => (
                        <div key={anime.id} className="snap-start">
                            <MovieCard
                                title={anime.title}
                                image={anime.image}
                                rating={anime.rating}
                                watchlistLink={anime.watchlistLink}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 pt-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToPage(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentPage
                                ? "w-8 h-2 bg-[#b56b36] dark:bg-[#F0A57F]"
                                : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
