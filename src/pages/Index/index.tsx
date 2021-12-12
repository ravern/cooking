import { Container } from "@mui/material";
import React from "react";

import Header from "~/components/Header";

import RecipeGrid from "./components/RecipeGrid";

export default function IndexPage(): JSX.Element | null {
  return (
    <Container maxWidth="lg">
      <Header />
      <RecipeGrid />
    </Container>
  );
}
