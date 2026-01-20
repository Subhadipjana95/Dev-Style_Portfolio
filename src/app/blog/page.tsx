import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";

export const dynamic = "force-dynamic";
export const revalidate = 0;
import { BlogList } from "@/components/blog-list";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesText } from "@/components/magicui/sparkles-text";

export const metadata = {
  title: "Blogs by Subhadip Jana(a063)",
  description: "My thoughts on Designing and Software Development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tighter sm:text-3xl mb-6 sm:mb-12"><Highlight><SparklesText className="text-inherit" sparklesCount={4}>Blogs </SparklesText></Highlight> by Subhadip Jana <Highlight><SparklesText className="text-inherit" sparklesCount={4}>(a063)</SparklesText></Highlight></h1>
      </BlurFade>
      <BlogList posts={posts} />
    </section>
  );
}
