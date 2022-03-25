import {
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React, { useState } from "react";
import { useFilter, useSelect } from "react-supabase";

import DishGrid from "~/components/DishGrid";
import Header from "~/components/Header";

import TagList from "./components/TagList";

import type { Dish, Tag } from "~/api/models";

export default function IndexPage(): JSX.Element | null {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const [{ data: tags }] = useSelect<Tag>("tags");
  const tagNames = tags?.map(({ name }) => name.trim());

  const filter = useFilter(
    (query) => {
      const or = selectedTags.map((tag) => `tags.cs.{${tag}}`).join(",");
      if (!isEmpty(or)) {
        query = query.or(or);
      }
      if (!isEmpty(searchQuery)) {
        query = query.or(
          `title.like.*${searchQuery}*,subtitle.like.*${searchQuery}*`,
        );
      }
      return query.order("title", { ascending: false }).limit(30);
    },
    [searchQuery, selectedTags],
  );
  const [{ data: dishes }] = useSelect<Dish>("dishes", { filter });

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag),
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container maxWidth="lg">
      <Header />
      <Stack direction="row" spacing={2}>
        {tagNames != null ? (
          <TagList
            selectedTags={selectedTags}
            tags={tagNames}
            onTagClick={handleTagClick}
          />
        ) : (
          <CircularProgress />
        )}
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
              value={searchQuery}
              onChange={handleQueryChange}
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
