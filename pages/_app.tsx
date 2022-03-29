import "~/index.css";

import { CssBaseline } from "@mui/material";
import Head from "next/head";
import React, { useEffect } from "react";
import { Provider as SupabaseProvider } from "react-supabase";

import { client, updateAuthCookie } from "~/api";
import { ThemeProvider } from "~/contexts/Theme";

import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps): JSX.Element | null {
  // Adapted from https://dev.to/sruhleder/protected-routes-with-supabase-and-nextjs-381k.
  useEffect(() => {
    const { data: authListener } = client.auth.onAuthStateChange(
      (event, session) => updateAuthCookie(event, session),
    );
    return () => authListener?.unsubscribe();
  }, []);

  return (
    <SupabaseProvider value={client}>
      <ThemeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SupabaseProvider>
  );
}
