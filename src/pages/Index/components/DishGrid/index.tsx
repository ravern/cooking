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

export default function RecipeGrid(): JSX.Element | null {
  return (
    <Grid container>
      {new Array(100).fill(0).map((_, index) => (
        <Grid key={index} item xs={12} sm={6} lg={3}>
          <Card sx={{ marginRight: 2, marginBottom: 2 }}>
            <CardMedia
              component="img"
              image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
              height="200"
              alt="Paella dish"
            />
            <CardContent>
              <NextLink href="/dishes/1" passHref>
                <Link color="inherit" underline="none">
                  <Typography variant="h6" component="h2" fontWeight="bold">
                    Paella Dish
                  </Typography>
                  <Typography variant="body2">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests.
                  </Typography>
                </Link>
              </NextLink>
            </CardContent>
            <CardActions>
              <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                <Chip
                  label="Vegan 🌿"
                  sx={{ marginBottom: 1, marginRight: 1 }}
                />
                <Chip label="Green" sx={{ marginBottom: 1, marginRight: 1 }} />
                <Chip
                  label="Healthy"
                  sx={{ marginBottom: 1, marginRight: 1 }}
                />
                <Chip
                  label="Quick Bites"
                  sx={{ marginBottom: 1, marginRight: 1 }}
                />
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
