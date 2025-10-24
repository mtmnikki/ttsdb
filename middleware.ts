import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/ssr";

const publicRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/forgot-password",
  "/auth/create-password",
  "/auth/callback",
];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/manifest.json")
  ) {
    return NextResponse.next();
  }

  const res = NextResponse.next();

  const supabase = createMiddlewareClient({
    req,
    res,
  }, {
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });

  // Ensure auth cookies are refreshed/available
  await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

  if (!user && !isPublic) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return res;
}
