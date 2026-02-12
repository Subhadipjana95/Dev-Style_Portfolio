"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { BlogList } from "@/components/blogs/blog-list";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { useFirstLoad } from "@/hooks/useFirstLoad";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const isFirstLoad = useFirstLoad();

  // Skip animation delays during client-side navigation
  const BLUR_FADE_DELAY = isFirstLoad ? 0.04 : 0;

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl mb-6 sm:mb-12"><Highlight><SparklesText className="text-inherit" sparklesCount={4}>Blogs </SparklesText></Highlight> by Subhadip Jana <Highlight><SparklesText className="text-inherit" sparklesCount={4}>(a063)</SparklesText></Highlight></h1>
      </BlurFade>
      <BlogList posts={posts} />
    </section>
  );
}
