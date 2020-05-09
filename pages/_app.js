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
        <CSSReset />
        <Global styles={css`
          body {
            background-color: #f9f9f9;
          }
        `} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
