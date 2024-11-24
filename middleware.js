import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - assets/* (files next automatically serves in public/assets)
     * - robots.txt (SEO)
     * - sitemap.xml (SEO)
     */
    '/((?!_next/static|_next/image|assets/|robots.txt|favicon.ico|sitemap.xml).*)',
  ],
}

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Refresh session if it exists
  await supabase.auth.getSession();

  // Forward to the callback handler
  const { pathname } = req.nextUrl;
  if (pathname === '/api/auth/callback') {
    return res;
  }

  return res;
}
