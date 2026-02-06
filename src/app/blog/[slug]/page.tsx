import { getBlogPosts, getPost, type BlogPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Markdown from "react-markdown";
import { CodeBlock } from "@/components/ui/code-block";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post: BlogPost) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  // Preprocess Hashnode markdown to fix image syntax
  // Hashnode uses: ![alt](url align="left") which is non-standard
  // Convert to: ![alt](url)
  const cleanedMarkdown = post.source?.replace(
    /!\[([^\]]*)\]\(([^\s)]+)\s+align="[^"]*"\)/g,
    '![$1]($2)'
  ) || "";

  return (
    <section id="blog" className="w-full max-w-4xl mx-auto px-4 sm:px-6 overflow-hidden">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="line-clamp-1">{post.metadata.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article className="prose dark:prose-invert max-w-none prose-img:rounded-lg prose-img:shadow-md prose-headings:scroll-mt-20 prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
        <Markdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          components={{
            pre: ({ children }: any) => <>{children}</>,
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");
              const isInline = inline || !match;

              if (isInline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock
                  code={String(children).replace(/\n$/, "")}
                  language={match ? match[1] : "text"}
                  className="not-prose"
                />
              );
            },
            img({ src, alt, ...props }: any) {
              return (
                <span className="block my-6 overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={alt || "Blog image"}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    {...props}
                  />
                </span>
              );
            },
            p({ children, ...props }: any) {
              return (
                <p className="break-words overflow-wrap-anywhere" {...props}>
                  {children}
                </p>
              );
            },
            a({ href, children, ...props }: any) {
              return (
                <Link
                  href={href || "#"}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="break-words"
                  {...props}
                >
                  {children}
                </Link>
              );
            },
            table({ children, ...props }: any) {
              return (
                <div className="overflow-x-auto my-6">
                  <table {...props}>{children}</table>
                </div>
              );
            },
          }}
        >
          {cleanedMarkdown}
        </Markdown>
      </article>
      <div className="h-16 w-full bg-transparent block sm:hidden" />
    </section>
  );
}
