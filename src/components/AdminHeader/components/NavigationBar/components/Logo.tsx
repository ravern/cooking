import { OutdoorGrill as OutdoorGrillIcon } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

export default function Logo(): JSX.Element | null {
  return (
    <Stack direction="row" spacing={0.5} alignItems="center">
      <OutdoorGrillIcon />
      <Typography variant="body1" fontWeight="bold">
        Cooking Admin
      </Typography>
    </Stack>
  );
}
