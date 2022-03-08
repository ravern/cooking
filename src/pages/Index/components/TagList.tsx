import { Chip, Stack } from "@mui/material";
import React from "react";

export type TagListProps = {
  tags: string[];
};

export default function TagList({ tags }: TagListProps): JSX.Element | null {
  const handleClick = () => {
    console.log("test");
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
        <Chip key={tag} variant="outlined" label={tag} onClick={handleClick} />
      ))}
    </Stack>
  );
}
