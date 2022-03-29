import { createClient } from "@supabase/supabase-js";

import config from "~/config";

import type { AuthChangeEvent, Session } from "@supabase/supabase-js";

export const client = createClient(config.supabaseUrl, config.supabaseAnonKey);

// Adapted from https://dev.to/sruhleder/protected-routes-with-supabase-and-nextjs-381k.
export async function updateAuthCookie(
  event: AuthChangeEvent,
  session: Session | null,
): Promise<void> {
  await fetch("/api/auth/set", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify({ event, session }),
  });
}
