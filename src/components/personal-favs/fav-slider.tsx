"use client";

import { useState, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SpotifyPlaylist } from "./spotify-playlist";
import { YoutubePlaylist } from "./youtube-playlist";
import { DATA } from "@/data/resume";

export function FavSlider() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const instanceId = useId().replace(/:/g, "");
  const prevClass = `fav-prev-${instanceId}`;
  const nextClass = `fav-next-${instanceId}`;
  const paginationClass = `fav-pagination-${instanceId}`;

  return (
    <div className="w-full max-w-2xl mx-auto relative group/carousel">
      {/* Navigation Buttons - Visible on mobile */}
      <Button
        variant="outline"
        size="icon"
        className={`h-8 w-8 absolute -left-4 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 z-20 flex opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background ${prevClass}`}
      >
        <ChevronLeft className="size-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={`h-8 w-8 absolute -right-4 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 z-20 flex opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background ${nextClass}`}
      >
        <ChevronRight className="size-4" />
      </Button>

      <div className="relative rounded-xl overflow-hidden border border-dashed border-foreground/20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          roundLengths={true}
          watchSlidesProgress={true}
          touchStartPreventDefault={false}
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
          className="fav-swiper"
        >
          {DATA.playlists.spotify.map((item, index) => (
            <SwiperSlide key={`spotify-${index}`}>
              <SpotifyPlaylist src={item.src} />
            </SwiperSlide>
          ))}
          {DATA.playlists.youtube.map((item, index) => (
            <SwiperSlide key={`youtube-${index}`}>
              <YoutubePlaylist src={item.src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination Container */}
      <div className={`${paginationClass} fav-swiper-pagination flex justify-center items-center gap-2 mt-6`}></div>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .fav-swiper-pagination .swiper-pagination-bullet {
          height: 8px !important;
          width: 8px !important;
          border-radius: 9999px !important;
          background-color: hsl(var(--muted-foreground) / 0.3) !important;
          opacity: 1 !important;
          margin: 0 !important;
          transition: all 0.3s ease-in-out !important;
          cursor: pointer;
        }
        .fav-swiper-pagination .swiper-pagination-bullet-active {
          width: 32px !important;
          background-color: hsl(var(--foreground)) !important;
        }
        .fav-swiper-pagination .swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
          background-color: hsl(var(--muted-foreground) / 0.5) !important;
        }
        /* Override swiper's default disabled behavior */
        .swiper-button-disabled {
          opacity: 0 !important;
          pointer-events: auto !important;
          cursor: pointer !important;
        }
        /* Improve swiper smoothness */
        .fav-swiper .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
        }
      `}</style>
    </div>
  );
}
