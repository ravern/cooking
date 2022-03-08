import { Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";

import Header from "~/components/Header";

import DishGrid from "./components/DishGrid";
import TagList from "./components/TagList";

export default function IndexPage(): JSX.Element | null {
  return (
    <Container maxWidth="lg">
      <Header />
      <Stack direction="row" spacing={2}>
        <TagList />
        <Stack spacing={2} flex={1}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "flex-start", md: "flex-end" }}
            spacing={2}
            pr={2}
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
          <DishGrid />
        </Stack>
      </Stack>
    </Container>
  );
}
