import { NextResponse } from 'next/server';

const HASHNODE_API = "https://gql.hashnode.com";
const HOST = "a063.hashnode.dev";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const response = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query Publication($host: String!) {
            publication(host: $host) {
              id
              title
              posts(first: 50) {
                edges {
                  node {
                    id
                    slug
                    title
                    brief
                    publishedAt
                    coverImage {
                      url
                    }
                    tags {
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        `,
        variables: { host: HOST },
      }),
    });

    const result = await response.json();
    
    if (result.errors) {
      console.error("Hashnode API Errors:", result.errors);
      return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }

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

    return NextResponse.json({ posts }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
