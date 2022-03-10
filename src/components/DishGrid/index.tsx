import { Grid } from "@mui/material";
import React from "react";

import DishItem from "./components/DishItem";

import type { Dish } from "~/api/models";

export type DishGridProps = {
  dishes: Dish[];
};

export default function DishGrid({
  dishes,
}: DishGridProps): JSX.Element | null {
  return (
    <Grid container p={2} pr={0}>
      {dishes.map((dish) => (
        <DishItem key={dish.id} dish={dish} />
      ))}
    </Grid>
  );
}
