import Link from 'next/link';
import {
  Flex,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/core';
import styled from '@emotion/styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import {useRef} from 'react';

import Logo from '../assets/logo.svg';

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  console.log(isOpen);

  return (
    <Box pb={8}>
      <Flex pl={2} direction="row" justify="space-between" align="center" display={["flex", "flex", "none"]}>
        <Logo />
        <Button ref={btnRef} onClick={onOpen}><Box as={GiHamburgerMenu} size={4} /></Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Stack spacing={2}>
                <Box><Link href="/" passHref><NavAnchor>Home</NavAnchor></Link></Box>
                <Box><Link href="/" passHref><NavAnchor>Breakfast</NavAnchor></Link></Box>
                <Box><Link href="/" passHref><NavAnchor>Mains</NavAnchor></Link></Box>
                <Box><Link href="/" passHref><NavAnchor>Desserts</NavAnchor></Link></Box>
                <Box><Link href="/" passHref><NavAnchor>Recipes</NavAnchor></Link></Box>
              </Stack>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </Flex>
      <Stack display={["none", "none", "flex"]} spacing={4}>
        <Flex direction="column" align="center">
          <Logo />
        </Flex>
        <Flex px={24} py={4} justify="space-between">
          <Link href="/" passHref><NavAnchor>Home</NavAnchor></Link>
          <Link href="/" passHref><NavAnchor>Breakfast</NavAnchor></Link>
          <Link href="/" passHref><NavAnchor>Mains</NavAnchor></Link>
          <Link href="/" passHref><NavAnchor>Desserts</NavAnchor></Link>
          <Link href="/" passHref><NavAnchor>Recipes</NavAnchor></Link>
        </Flex>
      </Stack>
    </Box>
  );
}

const NavAnchor = styled.a`
  text-transform: uppercase;
  font-weight: normal;
`;
