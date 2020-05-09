import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import BannerPost from "./banner-post";
import {SimpleGrid, Heading, Box, Stack} from "@chakra-ui/core";

const FavouritePostsQuery = gql`
  query FavourtePosts {
    favouritePosts {
      id
      name
      description
      images
      tags
    }
  }
`;

export default function Banner() {
  const { data } = useQuery(FavouritePostsQuery);

  if (data) {
    return (
      <Stack spacing={4}>
        <Heading as="h2" textAlign="center">Our favourites</Heading>
        <SimpleGrid columns={[1, 2]} gridGap={8}>
          {data.favouritePosts.map(post => (
            <BannerPost key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Stack>
    );
  }
  return null;
}
