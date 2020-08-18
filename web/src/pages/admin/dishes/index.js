import styled from "@emotion/styled";
import Link from "next/link";

import AdminDish from "~/components/AdminDish";
import getDishes from "~/fetchers/getDishes";
import useRequest from "~/hooks/useRequest";
import AdminLayout from "~/layouts/Admin";
import requireAdminAuth from "~/middleware/requireAdminAuth";

export default function DishesPage() {
  const { data: dishes, error } = useRequest("/api/dishes", getDishes);

  return (
    <AdminLayout>
      <TitleContainer>
        <Title>Your dishes</Title>
        <NewLink href="/admin/dishes/new">
          <a>New dish</a>
        </NewLink>
      </TitleContainer>
      <Container>
        {dishes?.map((dish) => (
          <AdminDish key={dish.id} dish={dish} />
        ))}
      </Container>
    </AdminLayout>
  );
}

export async function getServerSideProps({ req, res }) {
  await requireAdminAuth(req, res);

  return { props: {} };
}

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NewLink = styled(Link)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0;

  & > * + * {
    margin-top: 1.2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
`;
