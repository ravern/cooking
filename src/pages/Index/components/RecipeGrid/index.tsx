import { FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

export default function RecipeGrid(): JSX.Element | null {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            height="200"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="h6" component="h2" fontWeight="bold">
              Paella Dish
            </Typography>
            <Typography variant="body2">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests.
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardMedia
            component="img"
            image="https://ciao.kitchen/wp-content/uploads/2021/06/CKT0887.jpg"
            alt="Paella dish"
          />
        </Card>
      </Grid>
    </Grid>
  );
}
