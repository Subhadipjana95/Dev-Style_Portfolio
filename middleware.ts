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

  // Extract the base hostname without port (for local development)
  const baseHostname = hostname.split(":")[0]

  /**
   * ✅ BLOG SUBDOMAIN HANDLING (production + local)
   * blogs.a063.xyz → serve /blog
   * blogs.localhost → serve /blog (local dev)
   */
  if (
    baseHostname === "blogs.a063.xyz" ||
    baseHostname === "blogs.localhost"
  ) {
    // Prevent infinite rewrite loop
    if (!pathname.startsWith("/blog")) {
      const url = request.nextUrl.clone()
      url.pathname = `/blog${pathname}`
      return NextResponse.rewrite(url)
    }
  }

  /**
   * ✅ OPTIONAL (SEO): Redirect main-domain /blog → subdomain
   * a063.xyz/blog → blogs.a063.xyz
   */
  if (
    (baseHostname === "a063.xyz" || baseHostname === "www.a063.xyz") &&
    pathname.startsWith("/blog")
  ) {
    return NextResponse.redirect(
      new URL("https://blogs.a063.xyz", request.url),
      301
    )
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