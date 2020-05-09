import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import BannerPost from "./landing/banner-post";
import {SimpleGrid, Heading, Box, Stack} from "@chakra-ui/core";

const PostsQuery = gql`
  query Posts($tags: [String!]) {
    posts(tags: $tags) {
      id
      name
      description
      images
      tags
    }
  }
`;

export default function Posts({ title, tags }) {
  const { data } = useQuery(PostsQuery, { variables: { tags }});

  if (data) {
    return (
      <Stack spacing={4}>
        <Heading as="h2" textAlign="center">{title}</Heading>
        <SimpleGrid columns={[1, 2, 4]} gridGap={4}>
          {data.posts.map(post => (
            <BannerPost key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Stack>
    );
  }
  return null;
}

Posts.defaultProps = {
  tags: null,
};
