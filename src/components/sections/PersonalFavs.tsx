import React, { useState } from "react";

import { MovieCardList } from '@/components/personal-favs/movie-card-list';
import { FavSlider } from '@/components/personal-favs/fav-slider';
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesText } from "@/components/magicui/sparkles-text";
import BlurFade from "@/components/magicui/blur-fade";
import { AnimatedHorizontalLine } from '@/components/layout-styles/animated-horizontal-line';
import { DATA } from "@/data/resume";
import { useFirstLoad } from "@/hooks/useFirstLoad";

const PersonalFavs = () => {
  const [showAllMovies, setShowAllMovies] = useState(false);
    const isFirstLoad = useFirstLoad();
  
    const BLUR_FADE_DELAY = isFirstLoad ? 0.04 : 0;

  return (
    <section id="personalChoices" className="relative">
      <AnimatedHorizontalLine />
      <div className="space-y-12 w-full pt-6 pb-3 sm:pt-12 sm:pb-6">
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-4">
            <div className="space-y-6">
              <div className="relative inline-block mb-3 sm:mb-2">
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-screen border-t border-dashed border-muted-foreground/25 -z-10 lg:hidden"
                  style={{
                    maskImage:
                      "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                  }}
                />
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Favs
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What I{" "}
                  <Highlight>
                    <SparklesText
                      className="text-inherit text-shadow-secondary-foreground text-shadow-sm"
                      sparklesCount={12}
                    >
                      love?
                    </SparklesText>
                  </Highlight>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These are some of my favorite things to be showcased.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-8">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <FavSlider />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            {/* Animes */}
            <div className="max-w-2xl mx-auto">
              <div className="mb-2">
                <h2 className="text-xl font-bold">Animes</h2>
              </div>
              <MovieCardList items={DATA.animes} />
            </div>

            {/* Collapsible Content */}
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                showAllMovies
                  ? "max-h-[1000px] opacity-100 mt-4"
                  : "max-h-0 opacity-0 mt-0"
              }`}
            >
              {/* Movies & Webseries */}
              <div className="max-w-2xl mx-auto">
                <div className="mb-2">
                  <h2 className="text-xl font-bold">Movies & Webseries</h2>
                </div>
                <MovieCardList items={DATA.movies} />
              </div>
              {/* Manhwas */}
              <div className="max-w-2xl mx-auto mt-4">
                <div className="mb-2">
                  <h2 className="text-xl font-bold">Manhwas</h2>
                </div>
                <MovieCardList items={DATA.manhwas} />
              </div>
            </div>

            {/* Expand/Collapse Button */}
            <div className="flex justify-center mt-4">
              <Button
                variant="ghost"
                onClick={() => setShowAllMovies(!showAllMovies)}
                className="group hover:bg-transparent hover:text-primary transition-colors duration-300"
              >
                <span className="text-sm font-medium underline hover:text-muted-foreground">
                  {showAllMovies ? "Show Less" : "View All"}
                </span>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default PersonalFavs;
