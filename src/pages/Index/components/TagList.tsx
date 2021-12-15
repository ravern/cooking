import { Chip, Stack } from "@mui/material";
import React from "react";

export default function TagList(): JSX.Element | null {
  const handleClick = () => {
    console.log("test");
  };

  return (
    <Stack
      p={2}
      spacing={1}
      sx={{
        display: { xs: "none", sm: "flex" },
      }}
    >
      {new Array(100).fill(0).map((_, index) => (
        <Chip key={index} label="Vegan 🌿" onClick={handleClick} />
      ))}
    </Stack>
  );
}
