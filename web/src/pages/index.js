import styled from "@emotion/styled";

import fetch from "~/helpers/fetch";

export default function IndexPage({ dishes, error }) {
  return (
    <GridContainer>
      {dishes.map((dish) => {
        console.log(dish.images);
        return <DishContainer key={dish.id} image={dish.images[0]} />;
      })}
    </GridContainer>
  );
}

export async function getServerSideProps() {
  const { data, error } = await fetch("/dishes");

  return {
    props: {
      dishes: data ?? null,
      error: error ?? null,
    },
  };
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;

  & > *::before {
    content: "";
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
  }
`;

const DishContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
`;
