import styled from "@emotion/styled";

export default function Post({ selected, post, onSelect }) {
  return (
    <Container selected={selected}>
      <Image src={post.media_url} />
      <RightContainer>
        <CaptionContainer>
          <Caption>{post.caption}</Caption>
        </CaptionContainer>
        <ActionsContainer>
          <SelectButton onClick={onSelect}>Select</SelectButton>
        </ActionsContainer>
      </RightContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.4rem;
  border: ${(props) => (props.selected ? "1px solid black" : "none")};

  & > * + * {
    margin-left: 0.8rem;
  }
`;

const Image = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  object-fit: cover;
  border: 1px solid black;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;

  & > * + * {
    margin-top: 0.4rem;
  }
`;

const CaptionContainer = styled.div`
  position: relative;
  height: 1.6rem;
`;

const Caption = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActionsContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 0.8rem;
  }
`;

const SelectButton = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  padding: 0;
`;
