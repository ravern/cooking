import Head from "next/head"
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";

const client = new ApolloClient({
  uri: '/api',
  fetch,
});

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        <ThemeProvider theme={{
          fonts: {
            body: 'Lato, sans-serif',
            heading: 'Lato, sans-serif',
          }
        }}>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
            <title>Jenny's Cooking</title>
          </Head>
          <CSSReset />
          <Global styles={css`
            body {
              background-color: #f9f9f9;
            }
          `} />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
