import styled from "@emotion/styled";

import getInstagramPosts from "~/fetchers/getInstagramPosts";
import useRequest from "~/hooks/useRequest";

import Error from "./Error";
import Post from "./Post";

export default function ChoosePostInput({ value, onChange }) {
  const { data: posts, error, refetch } = useRequest(
    "/instagram/posts",
    getInstagramPosts
  );

  const handleSelect = (postID) => () => {
    onChange(postID);
  };

  return (
    <Container>
      <Title>Step 1: Choose post from Instagram</Title>
      {!posts && !error && "Loading..."}
      {error && <Error error={error} refetch={refetch} />}
      {posts && (
        <PostsContainer>
          {posts.map((post) => (
            <Post
              key={post.id}
              selected={value === post.id}
              post={post}
              onSelect={handleSelect(post.id)}
            />
          ))}
        </PostsContainer>
      )}
    </Container>
  );
}

const Container = styled.div`
  & > * + * {
    margin-top: 0.8rem;
  }
`;

const Title = styled.h2``;

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
