import styled from "@emotion/styled";

import Header from "~/components/Header";

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  margin: auto;
  max-width: 80ch;
  padding: 1.2rem;
`;
