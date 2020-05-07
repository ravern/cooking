import Link from 'next/link';
import {Flex} from '@chakra-ui/core';
import styled from '@emotion/styled';

export default function Header() {
  return (
    <Flex direction="column">
      <Flex px={24} py={4} justify="space-between">
        <Link href="/" passHref><NavAnchor>Home</NavAnchor></Link>
        <Link href="/" passHref><NavAnchor>Breakfast</NavAnchor></Link>
        <Link href="/" passHref><NavAnchor>Mains</NavAnchor></Link>
        <Link href="/" passHref><NavAnchor>Desserts</NavAnchor></Link>
        <Link href="/" passHref><NavAnchor>Recipes</NavAnchor></Link>
      </Flex>
    </Flex>
  );
}

const NavAnchor = styled.a`
  text-transform: uppercase;
`;
