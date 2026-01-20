export type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  category?: string;
};

export type BlogPost = {
  slug: string;
  metadata: Metadata;
  source?: string;
};

const HASHNODE_API = "https://gql.hashnode.com";
const HOST = "a063.hashnode.dev";

/* ===========================
   Get all blog posts (list)
=========================== */
export async function getBlogPosts() {
  try {
    // Use relative URL for API route to work in both dev and production
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/blog`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    
    const data = await response.json();
    return data.posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

/* ===========================
   Get single blog post
=========================== */
export async function getPost(slug: string) {
  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query GetPost($host: String!, $slug: String!) {
            publication(host: $host) {
              id
              post(slug: $slug) {
                id
                title
                brief
                publishedAt
                coverImage {
                  url
                }
                content {
                  html
                }
                tags {
                  id
                  name
                }
              }
            }
          }
        `,
        variables: { host: HOST, slug },
      }),
    });

    const result = await response.json();
    
    if (result.errors) {
      console.error("Hashnode API Errors:", result.errors);
      return null;
    }

    const post = result.data?.publication?.post;
    if (!post) return null;

    return {
      slug,
      metadata: {
        title: post.title,
        summary: post.brief,
        publishedAt: post.publishedAt,
        image: post.coverImage?.url ?? undefined,
        category: post.tags?.[0]?.name ?? "General",
      } as Metadata,
      source: post.content.html,
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
