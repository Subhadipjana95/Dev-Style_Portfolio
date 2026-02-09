"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MovieCardProps {
    title: string;
    image: string;
    rating: number;
    watchlistLink: string;
}

export function MovieCard({ title, image, rating, watchlistLink }: MovieCardProps) {
    return (
        <Card className="group relative border shadow-sm rounded-xl overflow-hidden w-[140px] min-w-[130px] flex-shrink-0">
            {/* Image Container */}
            <div className="relative w-full h-[160px] overflow-hidden bg-muted">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover w-full h-full transition-transform"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-3 space-y-2 h-[80px] flex flex-col justify-between">
                {/* Title */}
                <h3 className="font-semibold tracking-tight text-sm leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
                    {title}
                </h3>

                <div className="flex items-center justify-between gap-2">
                    {/* Watchlist Button */}
                    <Link href={watchlistLink} target="_blank" rel="noopener noreferrer" className="block">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border border-dashed rounded-full hover:bg-foreground/10 transition-colors text-xs px-2"
                        >
                            <Plus className="size-3" />
                        </Button>
                    </Link>
                    <div className="flex items-center gap-1 text-xs font-semibold text-[#b56b36] dark:text-[#F0A57F]">
                        <Star className="size-3 fill-current" />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}
