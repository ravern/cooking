import {
  Chip,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import { useRouter } from "next/router";
import React from "react";
import { useFilter, useSelect } from "react-supabase";

import Header from "~/components/Header";

import type { Dish } from "~/api/models";

export default function DishPage(): JSX.Element | null {
  const router = useRouter();
  const id = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;

  const filter = useFilter((query) => query.eq("id", id), [id]);
  const [{ data: dishes }] = useSelect<Dish>("dishes", {
    filter,
    pause: id == null,
  });
  const dish = dishes?.[0];

  const body =
    dish?.body?.type != null ? generateHTML(dish.body, [StarterKit]) : null;

  console.log(body);

  if (dish == null) {
    return <CircularProgress />;
  }
  return (
    <Container maxWidth="lg">
      <Header />
      <Stack spacing={2} p={2}>
        <Typography variant="h3" component="h1" fontWeight="bold">
          {dish.title}
        </Typography>
        <Typography variant="body1">{dish.subtitle}</Typography>
        <Typography variant="body2" color="text.secondary">
          Last updated on <time>7 January, 2022</time>
        </Typography>
        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
          {dish.tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              sx={{ marginBottom: 1, marginRight: 1 }}
            />
          ))}
        </Stack>
        <img src={dish.images[0]} />
        {body != null && <div dangerouslySetInnerHTML={{ __html: body }} />}
      </Stack>
    </Container>
  );
}
