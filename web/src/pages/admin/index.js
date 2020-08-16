import styled from "@emotion/styled";

import requireAdminAuth from "~/middleware/requireAdminAuth";

export default function AdminPage() {
  return "tests";
}

export async function getServerSideProps({ req, res }) {
  await requireAdminAuth(req, res);

  return { props: {} };
}
