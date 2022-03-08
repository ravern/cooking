import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import React from "react";

import type { Dish } from "~/api/models";

export type DishItemProps = {
  dish: Dish;
};

export default function DishItem({ dish }: DishItemProps): JSX.Element | null {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Card sx={{ marginRight: 2, marginBottom: 2 }}>
        <CardMedia
          component="img"
          image={
            dish.images[0] ??
            "https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
          }
          height="200"
          alt={dish.title}
        />
        <CardContent>
          <NextLink href="/dishes/1" passHref>
            <Link color="inherit" underline="none">
              <Typography variant="h6" component="h2" fontWeight="bold">
                {dish.title}
              </Typography>
              <Typography variant="body2">{dish.subtitle}</Typography>
            </Link>
          </NextLink>
        </CardContent>
        <CardActions>
          <Stack direction="row" sx={{ flexWrap: "wrap" }}>
            {dish.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                sx={{ marginBottom: 1, marginRight: 1 }}
              />
            ))}
          </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
}
