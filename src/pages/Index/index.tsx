import {
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import { useFilter, useSelect } from "react-supabase";

import DishGrid from "~/components/DishGrid";
import Header from "~/components/Header";

import TagList from "./components/TagList";
import generateTags from "./helpers/generateTags";

import type { Dish } from "~/api/models";

export default function IndexPage(): JSX.Element | null {
  const filter = useFilter((query) =>
    query.order("title", { ascending: false }).limit(30),
  );
  const [{ data: dishes }] = useSelect<Dish>("dishes", { filter });

  const tags = useMemo(
    () => (dishes != null ? generateTags(dishes) : null),
    [dishes],
  );

  return (
    <Container maxWidth="lg">
      <Header />
      <Stack direction="row" spacing={2}>
        {tags != null ? <TagList tags={tags} /> : <CircularProgress />}
        <Stack spacing={2} flex={1}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-start", md: "flex-end" }}
            spacing={2}
            px={2}
          >
            <Typography variant="h4" component="h1" fontWeight="bold">
              All Recipes
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Search for a dish..."
              size="small"
              sx={{
                maxWidth: "100%",
                width: 320,
              }}
            />
          </Stack>
          {dishes != null ? (
            <DishGrid dishes={dishes} />
          ) : (
            <Stack flex={1} direction="row" justifyContent="center">
              <CircularProgress />
            </Stack>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}
