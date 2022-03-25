import { Chip, Stack } from "@mui/material";
import React from "react";

export type TagListProps = {
  selectedTags: string[];
  tags: string[];
  onTagClick: (tag: string) => void;
};

export default function TagList({
  selectedTags,
  tags,
  onTagClick,
}: TagListProps): JSX.Element | null {
  const handleClick = (tag: string) => () => {
    onTagClick(tag);
  };

  return (
    <Stack
      alignItems="flex-start"
      p={2}
      spacing={1}
      sx={{
        display: { xs: "none", sm: "flex" },
      }}
    >
      {tags.map((tag) => (
        <Chip
          key={tag}
          variant={selectedTags.includes(tag) ? "filled" : "outlined"}
          label={tag}
          onClick={handleClick(tag)}
        />
      ))}
    </Stack>
  );
}
