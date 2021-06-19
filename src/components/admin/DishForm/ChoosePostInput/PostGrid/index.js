import styled from "@emotion/styled";

import PostItem from "./PostItem";

export default function PostGrid({ className, posts, onSelect, selectedPostID }) {
  return (
    <Container>
      <GridContainer className={className}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} selected={post.id === selectedPostID} onSelect={() => onSelect(post)} />
        ))}
      </GridContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 24rem;
  overflow-y: scroll;
  padding: 1.2rem;
  border-radius: 0.8rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: #eee;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1.2rem;
`;
