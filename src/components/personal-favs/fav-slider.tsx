"use client";

import { useState } from "react";
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

  return (
    <div className="w-full max-w-2xl mx-auto relative group/carousel">
      {/* Navigation Buttons - Always present, visible on hover, matching MovieCardList style */}
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background prev-btn"
      >
        <ChevronLeft className="size-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 hidden md:flex opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 rounded-full bg-background/80 backdrop-blur-sm border-muted-foreground/25 hover:bg-background next-btn"
      >
        <ChevronRight className="size-4" />
      </Button>

      <div className="relative rounded-xl overflow-hidden border border-dashed border-foreground/20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            el: '.fav-swiper-pagination',
            clickable: true,
          }}
          navigation={{
            prevEl: '.prev-btn',
            nextEl: '.next-btn',
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
          className="mySwiper"
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
      <div className="fav-swiper-pagination flex justify-center items-center gap-2 mt-6"></div>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .fav-swiper-pagination .swiper-pagination-bullet {
          height: 8px !important;
          width: 8px !important;
          border-radius: 9999px !important;
          background-color: hsl(var(--muted-foreground) / 0.3) !important;
          opacity: 1 !important;
          margin: 0 !important;
          transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out !important;
          cursor: pointer;
        }
        .fav-swiper-pagination .swiper-pagination-bullet-active {
          width: 32px !important;
          background-color: hsl(var(--foreground)) !important;
        }
        .fav-swiper-pagination .swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
          background-color: hsl(var(--muted-foreground) / 0.5) !important;
        }
        /* Override swiper's default disabled behavior to keep buttons interactive as requested */
        .swiper-button-disabled {
          opacity: 0 !important;
          pointer-events: auto !important;
          cursor: pointer !important;
        }
        /* Ensure buttons show on hover even if swiper thinks they are disabled at ends */
        .group\/carousel:hover .prev-btn,
        .group\/carousel:hover .next-btn {
          opacity: 1 !important;
        }
        /* Except if we want to hide them at ends while still being interactive? 
           The user said "no need for making the buttons disable when they can't be performing any actions".
           I will just keep the opacity-0 logic from the className.
        */
      `}</style>
    </div>
  );
}
