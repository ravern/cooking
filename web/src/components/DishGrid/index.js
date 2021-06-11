import styled from "@emotion/styled";
import DishItem from './components/DishItem'

export default function DishGrid({ dishes }) {
  return <Container>
    {dishes.map(dish => (
      <DishItem key={dish.id} dish={dish} />
    ))}
  </Container>
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 1.2rem;
`;