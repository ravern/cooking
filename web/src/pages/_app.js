import { css, Global } from "@emotion/core";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

  * {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
    color: #111;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;
