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
    // During build (server-side), fetch directly from Hashnode
    // In browser, use API route
    const isBuild = typeof window === 'undefined';
    
    if (isBuild) {
      // Direct Hashnode API call during build with caching
      const response = await fetch(HASHNODE_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query Publication($host: String!) {
              publication(host: $host) {
                id
                posts(first: 50) {
                  edges {
                    node {
                      id
                      slug
                      title
                      brief
                      publishedAt
                      coverImage { url }
                      tags { id name }
                    }
                  }
                }
              }
            }
          `,
          variables: { host: HOST },
        }),
        // Add caching for ISR - revalidate every 60 seconds
        next: { revalidate: 60 }
      });

      const result = await response.json();
      const posts = (result.data?.publication?.posts?.edges ?? []).map((edge: any) => ({
        slug: edge.node.slug,
        metadata: {
          title: edge.node.title,
          summary: edge.node.brief,
          publishedAt: edge.node.publishedAt,
          image: edge.node.coverImage?.url,
          category: edge.node.tags?.[0]?.name ?? "General",
        },
      }));
      return posts;
    } else {
      // Browser: use API route with relative URL
      const response = await fetch('/api/blog', { 
        cache: 'no-store' // Don't cache in browser to get fresh data
      });
      
      if (!response.ok) {
        console.error(`API returned ${response.status}`);
        throw new Error(`API returned ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Fetched posts from API:', data.posts?.length || 0, 'posts');
      return data.posts || [];
    }
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
                  markdown
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
      // Cache individual posts for 60 seconds
      next: { revalidate: 60 }
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
      source: post.content.markdown,
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
