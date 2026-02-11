"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { BlogPost } from "@/data/blog";

const BLUR_FADE_DELAY = 0.04;




interface BlogListProps {
    posts: BlogPost[];
}

function formatDate(date: string) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();

    const suffix = ["th", "st", "nd", "rd"];
    const v = day % 100;
    const ord = suffix[(v - 20) % 10] || suffix[v] || suffix[0];

    return `${day}${ord} ${month} ${year}`;
}

export function BlogList({ posts }: BlogListProps) {
    const [filterCategory, setFilterCategory] = useState<string>("All");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = new Set(posts.map((post) => post.metadata.category).filter(Boolean));
        return ["All", ...Array.from(cats)];
    }, [posts]);

    // Filter and sort posts
    const filteredPosts = useMemo(() => {
        return posts
            .filter((post) => {
                if (filterCategory === "All") return true;
                return post.metadata.category === filterCategory;
            })
            .sort((a, b) => {
                const dateA = new Date(a.metadata.publishedAt).getTime();
                const dateB = new Date(b.metadata.publishedAt).getTime();
                return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
            });
    }, [posts, filterCategory, sortOrder]);

    return (
        <div className="space-y-1 sm:space-y-8">
            {/* Blog Filters */}
            <BlurFade delay={BLUR_FADE_DELAY}>
                <div className="flex sm:gap-4 justify-between items-center mb-4 sm:mb-8">
                    {/* Category Filter */}
                    <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
                        <span className="text-[12px] sm:text-sm font-medium">Category:</span>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-7 sm:h-8 gap-1 text-[12px] sm:text-sm text-muted-foreground hover:text-muted-foreground px-2">
                                    {filterCategory}
                                    <ChevronDown className="h-3 w-3 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-fit min-w-[auto] text-muted-foreground hover:text-muted-foreground">
                                <DropdownMenuRadioGroup value={filterCategory} onValueChange={setFilterCategory}>
                                    {categories.map((cat) => (
                                        <DropdownMenuRadioItem key={cat as string} value={cat as string}>
                                            {cat as string}
                                        </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    {/* Sort by Time Filter */}
                    <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground">
                        <span className="text-[12px] sm:text-sm font-medium">Sort by Date:</span>
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="h-7 sm:h-8 gap-1 text-[12px] sm:text-sm text-muted-foreground hover:text-muted-foreground px-2">
                                    {sortOrder === "desc" ? "Newest First" : "Oldest First"}
                                    <ChevronDown className="h-3 w-3 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-fit min-w-[auto] text-muted-foreground hover:text-muted-foreground">
                                <DropdownMenuRadioGroup value={sortOrder} onValueChange={(val) => setSortOrder(val as "asc" | "desc")}>
                                    <DropdownMenuRadioItem value="desc">Newest First</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="asc">Oldest First</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </BlurFade>


            {/* Blog Posts */}
            <div className="space-y-4">
                {filteredPosts.map((post, index) => (
                    <BlurFade delay={BLUR_FADE_DELAY * 2 + index * 0.05} key={post.slug}>
                        <Link
                            className="group flex items-start gap-4 mb-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                            href={`/blog/${post.slug}`}
                        >
                            <span className="text-muted-foreground font-mono text-sm pt-1">
                                {String(index + 1).padStart(2, "0")}.
                            </span>
                            <div className="w-full flex flex-col space-y-1">
                                <div className="flex justify-between items-start gap-2">
                                    <p className="tracking-tight font-medium text-muted-foreground group-hover:text-foreground">
                                        {post.metadata.title}
                                    </p>
                                    <span className="text-xs text-muted-foreground shrink-0 whitespace-nowrap">
                                        {formatDate(post.metadata.publishedAt)}
                                    </span>
                                </div>
                                {post.metadata.category && (
                                    <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-secondary w-fit">
                                        {post.metadata.category}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </BlurFade>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <p className="text-center text-muted-foreground">No posts found.</p>
            )}
        </div>
    );
}
