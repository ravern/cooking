import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from "@mui/icons-material";
import { Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";

import { usePaletteMode } from "~/contexts/Theme";

import Logo from "./components/Logo";

export default function NavigationBar(): JSX.Element | null {
  const { mode, toggleMode } = usePaletteMode();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      p={2}
    >
      <NextLink href="/" passHref>
        <Link color="inherit" underline="none">
          <Logo />
        </Link>
      </NextLink>
      <Stack direction="row" spacing={2} alignItems="center">
        <NextLink href="/" passHref>
          <Link color="inherit" underline="none">
            <Typography variant="body1" fontWeight="bold">
              Recipes
            </Typography>
          </Link>
        </NextLink>
        <NextLink href="/" passHref>
          <Link color="inherit" underline="none">
            <Typography variant="body1" fontWeight="bold">
              About
            </Typography>
          </Link>
        </NextLink>
        <Link color="inherit" underline="none" onClick={toggleMode}>
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </Link>
      </Stack>
    </Stack>
  );
}
