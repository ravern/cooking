import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

import AdminHeader from "~/components/AdminHeader";

export default function AdminIndexPage(): JSX.Element | null {
  return (
    <Container maxWidth="lg">
      <AdminHeader />
      <Stack spacing={2}>
        <Link href="/admin/dishes" passHref>
          <Button component="a" variant="contained">
            Manage Dishes
          </Button>
        </Link>
        <Link href="/admin/tags" passHref>
          <Button component="a" variant="contained">
            Manage Tags
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
