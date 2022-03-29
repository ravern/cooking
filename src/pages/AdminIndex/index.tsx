import { CircularProgress, Container, Stack } from "@mui/material";
import React from "react";
import { useFilter, useSelect } from "react-supabase";

import AdminHeader from "~/components/AdminHeader";
import DishGrid from "~/components/DishGrid";

import type { Dish } from "~/api/models";

export default function IndexPage(): JSX.Element | null {
  const filter = useFilter((query) =>
    query.order("title", { ascending: false }),
  );
  const [{ data: dishes }] = useSelect<Dish>("dishes", { filter });

  return (
    <Container maxWidth="lg">
      <AdminHeader />
      <Stack direction="row" spacing={2}>
        {dishes != null ? (
          <DishGrid dishes={dishes} />
        ) : (
          <Stack flex={1} direction="row" justifyContent="center">
            <CircularProgress />
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
