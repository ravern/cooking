import styled from "@emotion/styled";

import BaseBody from "~/components/Body";
import fetch from "~/helpers/fetch";
import BaseLayout from "~/layouts/Base";

export async function getServerSideProps({ params: { id } }) {
  const { data: dish, error } = await fetch(`/dishes/${id}`);

  return {
    props: {
      dish: dish ?? null,
      error: error ?? null,
    },
  };
}

export default function DishPage({ dish, error }) {
  return (
    <BaseLayout>
      <Container>
        <ImageContainer>
          <ImageInnerContainer>
            <Image src={dish.pictures[0]} />
          </ImageInnerContainer>
        </ImageContainer>
        <ContentContainer>
          <Name>{dish.name}</Name>
          <Body body={dish.body} />
        </ContentContainer>
      </Container>
    </BaseLayout>
  );
}

const Container = styled.article``;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 0.4rem;
  overflow: hidden;

  &::before {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
`;

const ImageInnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  margin-top: 1.6rem;
`;

const Name = styled.h1``;

const Body = styled(BaseBody)`
  margin-top: 0.8rem;
`;
