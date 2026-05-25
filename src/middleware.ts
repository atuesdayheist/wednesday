import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    console.log("no token");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);

  try {
    console.log("try");
    await jwtVerify(token, secret);
  } catch {
    console.log("catch");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user", "/home"],
};
