"use client";

import { createContext, useMemo, useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import { amber, indigo } from "@mui/material/colors";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Theme({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
					primary: {
						main: mode === "dark" ? indigo[600] : indigo[800],
					},
					secondary: {
						main: mode === "dark" ? amber[600] : amber[500],
					},
        },
      }),
    [mode],
  );
	return (
    <ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
