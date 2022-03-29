import {
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useCallback, useEffect, useRef, useState } from "react";

import DishGrid from "~/components/DishGrid";
import Header from "~/components/Header";

import TagList from "./components/TagList";
import useDishes from "./hooks/useDishes";
import useTags from "./hooks/useTags";

export default function IndexPage(): JSX.Element | null {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { dishes, fetching, fetchMore } = useDishes({
    searchQuery,
    selectedTags,
  });
  const { tags } = useTags();

  const [previousScroll, setPreviousScroll] = useState(9999);
  const loadingRef = useRef<HTMLElement>(null);

  const handleScroll = useCallback(
    (entities: IntersectionObserverEntry[]) => {
      if (entities[0].boundingClientRect.y < previousScroll && !fetching) {
        setPreviousScroll(entities[0].boundingClientRect.y);
        fetchMore();
      }
    },
    [fetching, fetchMore, previousScroll, setPreviousScroll],
  );

  useEffect(() => {
    if (loadingRef.current == null) {
      return;
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleScroll, options);
    observer.observe(loadingRef.current);

    return () => {
      if (loadingRef.current == null) {
        return;
      }
      observer.unobserve(loadingRef.current);
    };
  }, [handleScroll, loadingRef.current]);

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
        {tags != null ? (
          <TagList
            selectedTags={selectedTags}
            tags={tags}
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
            <>
              <DishGrid dishes={dishes} />
              <Stack direction="row" justifyContent="center" pb={4}>
                <CircularProgress ref={loadingRef} />
              </Stack>
            </>
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
