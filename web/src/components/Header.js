import styled from "@emotion/styled";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderContainer>
      <NavContainer>
        <Link href="/" passHref>
          <BrandLink>jenny.cooking</BrandLink>
        </Link>
        <NavLinksContainer>
          <Link href="/admin/dishes" passHref>
            <NavLink>Dishes</NavLink>
          </Link>
          <Link href="/admin/recipes" passHref>
            <NavLink>Recipes</NavLink>
          </Link>
          <Link href="/admin/cheats" passHref>
            <NavLink>Cheats</NavLink>
          </Link>
        </NavLinksContainer>
      </NavContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  position: absolute;
  left: 0;
  top: 0;

  @media only screen and (max-width: 128ch) {
    position: static;
    border-bottom: 1px solid #111;
  }
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;

  & > * + * {
    margin-top: 0.8rem;
  }

  @media only screen and (max-width: 128ch) {
    max-width: 64ch;
    margin: auto;
  }
`;

const BrandLink = styled.a`
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 0.4rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
