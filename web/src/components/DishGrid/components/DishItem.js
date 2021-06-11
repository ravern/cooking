import styled from "@emotion/styled";
import Link from "next/link";


export default function DishItem({dish}) {
  return <Container>
    <ContentContainer>
      <Image src={dish.pictures[0]} alt={dish.name} />
    </ContentContainer>
    <Link href={`/dishes/${dish.id}`} passHref>
      <a>
        <HoverContainer>
          <Name>{dish.name}</Name>
        </HoverContainer>
      </a>
    </Link>
  </Container>
}

const Container = styled.div`
  position: relative;
  border-radius: 0.8rem;
  overflow: hidden;

  &::before {
    content: "";
    padding-bottom: 100%;
    display: block;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const HoverContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  color: white;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    opacity: 1;
    transition-duration: 0.2s;
  }
`;

const Name = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`;