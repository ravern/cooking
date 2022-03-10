import "~/index.css";

import { CssBaseline } from "@mui/material";
import Head from "next/head";
import React from "react";
import { Provider as SupabaseProvider } from "react-supabase";

import { client } from "~/api";
import { ThemeProvider } from "~/contexts/Theme";

import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps): JSX.Element | null {
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
