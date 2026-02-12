"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { BlogList } from "@/components/blogs/blog-list";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useFirstLoad } from "@/hooks/useFirstLoad";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFirstLoad = useFirstLoad();

  // Skip animation delays during client-side navigation
  const BLUR_FADE_DELAY = isFirstLoad ? 0.04 : 0;

  useEffect(() => {
    getBlogPosts()
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl mb-6 sm:mb-12"><Highlight><SparklesText className="text-inherit" sparklesCount={4}>Blogs </SparklesText></Highlight> by Subhadip Jana <Highlight><SparklesText className="text-inherit" sparklesCount={4}>(a063)</SparklesText></Highlight></h1>
      </BlurFade>
      {loading ? (
        <div className="space-y-4">
          {/* Skeleton for filters */}
          <div className="flex justify-between items-center gap-4 mb-6">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
          {/* Skeleton for blog posts */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-start gap-4 p-4">
              <Skeleton className="h-4 w-8 shrink-0" />
              <div className="w-full space-y-2">
                <div className="flex justify-between items-start gap-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-24 shrink-0" />
                </div>
                <Skeleton className="h-5 w-20" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <BlogList posts={posts} />
      )}
    </section>
  );
}
