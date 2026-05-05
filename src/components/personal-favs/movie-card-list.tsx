"use client";

import { MovieCard } from "@/components/personal-favs/movie-card";
import { DATA } from "@/data/resume";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useId } from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    
    // Unique ID for this specific instance to avoid cross-slider navigation
    const instanceId = useId().replace(/:/g, "");
    const prevClass = `prev-btn-${instanceId}`;
    const nextClass = `next-btn-${instanceId}`;
    const paginationClass = `pagination-${instanceId}`;

    return (
        <div className="relative group/carousel space-y-4">
            <div className="relative">
                {/* Navigation Buttons */}
                <Button
                    variant="outline"
                    size="icon"
                    className={`w-8 h-8 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background ${prevClass}`}
                >
                    <ChevronLeft className="size-4" />
                </Button>

                <Button
                    variant="outline"
                    size="icon"
                    className={`w-8 h-8 absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background ${nextClass}`}
                >
                    <ChevronRight className="size-4" />
                </Button>

                {/* Swiper Container */}
                <div className="relative overflow-hidden">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={2.25}
                        grabCursor={true}
                        roundLengths={true}
                        watchSlidesProgress={true}
                        touchStartPreventDefault={false}
                        breakpoints={{
                            480: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            640: {
                                slidesPerView: 4,
                                spaceBetween: 16,
                            }
                        }}
                        pagination={{
                            el: `.${paginationClass}`,
                            clickable: true,
                        }}
                        navigation={{
                            prevEl: `.${prevClass}`,
                            nextEl: `.${nextClass}`,
                        }}
                        onInit={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        modules={[Pagination, Navigation]}
                        className="movie-swiper"
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item.id} className="w-fit">
                                <MovieCard
                                    title={item.title}
                                    image={item.image}
                                    rating={item.rating}
                                    watchlistLink={item.watchlistLink}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Gradient Masks - Added transitions for smoothness */}
                    <div
                        className={`pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-[5] transition-opacity duration-300 ${!isBeginning ? "opacity-100" : "opacity-0"}`}
                    />
                    <div
                        className={`pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-[5] transition-opacity duration-300 ${!isEnd ? "opacity-100" : "opacity-0"}`}
                    />
                </div>
            </div>

            {/* Pagination Container */}
            <div className={`${paginationClass} movie-swiper-pagination flex justify-center items-center gap-2 pt-2`}></div>

            {/* Custom Pagination Styling */}
            <style jsx global>{`
                .movie-swiper-pagination .swiper-pagination-bullet {
                    height: 8px !important;
                    width: 8px !important;
                    border-radius: 9999px !important;
                    background-color: hsl(var(--muted-foreground) / 0.3) !important;
                    opacity: 1 !important;
                    margin: 0 !important;
                    transition: all 0.3s ease-in-out !important;
                    cursor: pointer;
                }
                .movie-swiper-pagination .swiper-pagination-bullet-active {
                    width: 32px !important;
                    background-color: hsl(var(--foreground)) !important;
                }
                .movie-swiper-pagination .swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
                    background-color: hsl(var(--muted-foreground) / 0.5) !important;
                }
                
                /* Override swiper's default disabled behavior */
                .swiper-button-disabled {
                    opacity: 0 !important;
                    pointer-events: auto !important;
                    cursor: pointer !important;
                }
                
                /* Improve swiper smoothness */
                .movie-swiper .swiper-wrapper {
                    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
                }
            `}</style>
        </div>
    );
}
