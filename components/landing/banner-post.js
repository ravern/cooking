import Link from "next/link";
import {AspectRatioBox, PseudoBox, Text, Box} from "@chakra-ui/core";

export default function BannerPost({ post }) {
  return (
    <Box>
      <Link href={`/posts/${post.id}`} passHref>
        <a>
          <AspectRatioBox
            bgImg={`url(${post.images[0]})`}
            bgSize="cover"
            bgPos="center"
            ratio={1}
          >
            <PseudoBox
              color="white"
              // bg="rgba(0.6, 0.6, 0.6, 0.3)"
              transition="background-color 250ms"
              _hover={{
                // bg: 'rgba(0.6, 0.6, 0.6, 0.6)',
              }}
            >
            </PseudoBox>
          </AspectRatioBox>
          <Text mt={2} fontWeight="bold" fontSize="lg">{post.name}</Text>
        </a>
      </Link>
    </Box>
  );
}
