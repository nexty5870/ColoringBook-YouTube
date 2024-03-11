import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";


// since middleware runs on all requests, we dont want to run it on static assets
// also disable on prefetches https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy#adding-a-nonce-with-middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets/* (files next automatically serves in public/assets), seems to be the main culprit
     * - robots.txt (SEO)
     * - sitemap.xml (SEO)
     */
    {
      source: '/((?!api|_next/static|_next/image|assets/|robots.txt|favicon.ico|sitemap.xml).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}


// The middleware is used to refresh the user's session before loading Server Component routes
export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}
