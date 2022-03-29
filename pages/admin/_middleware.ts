import { NextResponse } from "next/server";

import config from "~/config";

import type { NextFetchEvent, NextRequest } from "next/server";

// Adapted from https://jitsu.com/blog/supabase-nextjs-middleware.
export async function middleware(
  req: NextRequest,
  _event: NextFetchEvent,
): Promise<NextResponse> {
  if (req.url === "/admin/login") {
    return NextResponse.next();
  }

  const token = req.cookies["sb:token"];
  if (!token) {
    return NextResponse.redirect("/admin/login", 302);
  }

  const res = await fetch(`${config.supabaseUrl}/auth/v1/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      APIKey: config.supabaseAnonKey,
    },
  });
  const body = await res.json();
  console.log(body);

  if (res.status === 200 && body.aud === "authenticated") {
    return NextResponse.next();
  } else {
    return NextResponse.redirect("/admin/login", 302);
  }
}
