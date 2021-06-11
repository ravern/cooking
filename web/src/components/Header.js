import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return <Container>
    <Logo>
      <Link href="/">
        <Anchor>
          Jenny's Recipes
        </Anchor>
      </Link>
    </Logo>
    <Nav>
      <Link href="/about">
        <Anchor>
          About
        </Anchor>
      </Link>
    </Nav>
  </Container>
}

const Container = styled.header`
  margin: auto;
  max-width: 80ch;
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 900;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Nav = styled.nav`
`;

const Anchor = styled.a`
  text-decoration: none;
  color: black;
`
