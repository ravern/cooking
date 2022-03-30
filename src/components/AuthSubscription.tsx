import { useAuthStateChange } from "react-supabase";

import { updateAuthCookie } from "~/api";

export default function AuthSubscription(): JSX.Element | null {
  // Adapted from https://dev.to/sruhleder/protected-routes-with-supabase-and-nextjs-381k.
  useAuthStateChange((event, session) => updateAuthCookie(event, session));

  return null;
}
