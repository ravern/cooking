import styled from "@emotion/styled";
import Link from "next/link";

import AdminDish from "~/components/admin/Dish";
import getDishes from "~/fetchers/getDishes";
import useRequest from "~/hooks/useRequest";
import AdminLayout from "~/layouts/Admin";
import requireAdminAuth from "~/middleware/requireAdminAuth";

export default function DishesPage() {
  const { data: dishes } = useRequest("/api/dishes", getDishes);

  return (
    <AdminLayout>
      <TitleContainer>
        <Title>Your dishes</Title>
        <Link href="/admin/dishes/new" passHref>
          <NewAnchor>New dish</NewAnchor>
        </Link>
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

const NewAnchor = styled.a``;

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