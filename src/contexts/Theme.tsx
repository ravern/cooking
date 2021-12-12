import { ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";
import React, { createContext, useContext, useMemo, useState } from "react";

import { DARK_THEME, LIGHT_THEME } from "~/theme";

export type PaletteMode = "light" | "dark";

export type ThemeContextState = {
  mode: PaletteMode;
  toggleMode: () => void;
};

export const ThemeContext = createContext<ThemeContextState>({
  mode: "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMode: () => {},
});

export function usePaletteMode(): ThemeContextState {
  return useContext(ThemeContext);
}

export type ThemeProviderProps = {
  children?: React.ReactNode;
};

export function ThemeProvider({
  children,
}: ThemeProviderProps): JSX.Element | null {
  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = useMemo(
    () => (mode === "light" ? LIGHT_THEME : DARK_THEME),
    [mode],
  );

  const value = useMemo(
    () => ({
      mode,
      toggleMode: () => {
        setMode(mode === "light" ? "dark" : "light");
      },
    }),
    [mode, setMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      <MaterialThemeProvider theme={theme}>{children}</MaterialThemeProvider>
    </ThemeContext.Provider>
  );
}
