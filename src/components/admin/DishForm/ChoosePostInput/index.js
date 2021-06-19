import styled from "@emotion/styled";

import getInstagramPosts from "~/fetchers/getInstagramPosts";
import useRequest from "~/hooks/useRequest";

import Error from "./Error";
import PostGrid from "./PostGrid";
import PostItem from "./PostGrid/PostItem";

export default function ChoosePostInput({ value, onChange }) {
  const { data: posts, error, refetch } = useRequest(
    "/instagram/posts",
    getInstagramPosts
  );

  const handleSelect = (post) => {
    onChange(post);
  };

  return (
    <Container>
      <Title>Step 1: Choose post from Instagram</Title>
      {!posts && !error && <span>Loading...</span>}
      {error && <Error error={error} refetch={refetch} />}
      {posts && (
        <PostGrid posts={posts} onSelect={handleSelect} selectedPostID={value?.id} />
      )}
    </Container>
  );
}

const Container = styled.div`
  & > * + * {
    margin-top: 0.8rem;
  }
`;

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 0.8rem;
  max-height: 18rem;
  overflow-y: scroll;

  & > * + * {
    margin-top: 0.8rem;
  }
`;
