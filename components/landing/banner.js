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

const PostsQuery = gql`
  query Posts {
    posts {
      id
      name
      description
      images
      tags
    }
  }
`;

export default function Banner() {
  const { data: favouritePostsData } = useQuery(FavouritePostsQuery);
  const { data: postsData } = useQuery(PostsQuery);

  if (favouritePostsData && postsData) {
    return (
      <Stack spacing={4}>
        <Heading as="h2" textAlign="center">Our favourites</Heading>
        <SimpleGrid columns={[1, 2]} gridGap={8}>
          {favouritePostsData.favouritePosts.map(post => (
            <BannerPost key={post.id} post={post} />
          ))}
        </SimpleGrid>
        <Heading as="h2" textAlign="center">All dishes</Heading>
        <SimpleGrid columns={[1, 2, 4]} gridGap={8}>
          {postsData.posts.map(post => (
            <BannerPost key={post.id} post={post} />
          ))}
        </SimpleGrid>
      </Stack>
    );
  }
  return null;
}
