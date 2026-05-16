import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("jwt")?.value;

  const isProtectedRoute =
    request.nextUrl.pathname.startsWith("/bookings") ||
    request.nextUrl.pathname.startsWith("/settings") ||
    request.nextUrl.pathname.includes("/slots");

  const isAuthRoute = 
    request.nextUrl.pathname.startsWith("/auth/login") || 
    request.nextUrl.pathname.startsWith("/auth/register");

  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/bookings/:path*", 
    "/settings/:path*", 
    "/fields/:id/slots/:path*",
    "/auth/:path*"
  ],
};
