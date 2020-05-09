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

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  console.log(isOpen);

  return (
    <Box pb={8}>
      <Flex direction="row" justify="flex-end" display={["flex", "flex", "none"]}>
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
      <Flex direction="column" display={["none", "none", "flex"]}>
        <Flex px={24} py={4} justify="space-between">
          <Link href="/" passHref><NavAnchor>Home</NavAnchor></Link>
          <Link href="/" passHref><NavAnchor>Breakfast</NavAnchor></Link>
          <Link href="/" passHref><NavAnchor>Mains</NavAnchor></Link>
          <Link href="/" passHref><NavAnchor>Desserts</NavAnchor></Link>
          <Link href="/" passHref><NavAnchor>Recipes</NavAnchor></Link>
        </Flex>
      </Flex>
    </Box>
  );
}

const NavAnchor = styled.a`
  text-transform: uppercase;
`;
