import styled from "@emotion/styled";
import Link from "next/link";

import Button from "~/components/Button";
import AdminLayout from "~/layouts/Admin";
import requireAdminAuth from "~/middleware/requireAdminAuth";

export default function AdminPage() {
  return (
    <AdminLayout>
      <Container>
        <h1>What would you like to do?</h1>
        <LinksContainer>
          <Link href="/admin/dishes/new">
            <Button as="a">Add a new dish</Button>
          </Link>
          <Link href="/admin/dishes">
            <Button as="a">View existing dishes</Button>
          </Link>
        </LinksContainer>
      </Container>
    </AdminLayout>
  );
}

export async function getServerSideProps({ req, res }) {
  await requireAdminAuth(req, res);

  return { props: {} };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > * + * {
    margin-top: 1.2rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 0.4rem;
  }
`;
