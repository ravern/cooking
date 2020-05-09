import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import {AspectRatioBox, PseudoBox, Text, Box, Heading, Tag, Stack} from "@chakra-ui/core";

import Layout from '../../components/layout';

const PostQuery = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      name
      description
      images
      tags
    }
  }
`;

export default function Post({ postID }) {
  const { query: { id } } = useRouter();

  const { data } = useQuery(PostQuery, {
    variables: { id },
  })
  const post = data?.post;

  if (data) {
    return (
      <Stack spacing={4}>
        <AspectRatioBox
          bgImg={`url(${post.images[0]})`}
          bg="gray.300"
          bgSize="cover"
          bgPos="center"
          ratio={1}
        >
          <span></span>
        </AspectRatioBox>
        <Heading as="h1">{post.name}</Heading>
        <Text>{post.description}</Text>
        <Stack direction="row" spacing={2}>
          {post.tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Stack>
      </Stack>
    );
  }
  return null;
}
