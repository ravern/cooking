import styled from "@emotion/styled";
import NextLink from "next/link";

import AdminLayout from "~/layouts/Admin";
import requireAdminAuth from "~/middleware/requireAdminAuth";

export default function AdminPage() {
  return (
    <AdminLayout>
      <Container>
        <h1>What would you like to do?</h1>
        <Link href="/admin/dishes">
          <a>Import a dish from Instagram</a>
        </Link>
        <Link href="/admin/recipes">
          <a>Add a recipe for a dish</a>
        </Link>
        <Link href="/admin/cheats">
          <a>Add a new cheat</a>
        </Link>
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

  & > * + * {
    margin-top: 1.2rem;
  }
`;

const Link = styled(NextLink)``;
