import styled from "@emotion/styled";

import Header from "~/components/Header";

export default function AdminLayout({ children }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

const Container = styled.main`
  margin: auto;
  max-width: 64ch;
  padding: 1.2rem;
`;
