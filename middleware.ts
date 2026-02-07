import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Read hostname safely (works on Vercel + local)
  const hostname =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host")

  if (!hostname) {
    return NextResponse.next()
  }

  /**
   * BLOG SUBDOMAIN HANDLING
   * blogs.a063.xyz → serve /blog
   */
  if (hostname === "blogs.a063.xyz") {
    // Prevent infinite loop
    if (!pathname.startsWith("/blog")) {
      const url = request.nextUrl.clone()
      url.pathname = "/blog"
      return NextResponse.rewrite(url)
    }
  }

  /**
   * OPTIONAL (SEO STRONG):
   * Redirect main-domain /blog → blogs.a063.xyz
   */
  if (
    hostname === "a063.xyz" &&
    pathname.startsWith("/blog")
  ) {
    const redirectUrl = new URL(
      "https://blogs.a063.xyz",
      request.url
    )
    return NextResponse.redirect(redirectUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
      Apply to all routes except:
      - static files
      - next internals
    */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)"
  ]
}