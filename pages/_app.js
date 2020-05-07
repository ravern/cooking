import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <Global styles={css`
        body {
          background-color: #f9f9f9;
        }
      `} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
