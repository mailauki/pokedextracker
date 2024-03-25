'use client';

import { createContext, useMemo, useState } from 'react';

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';

import { amber, blue, grey, indigo } from '@mui/material/colors';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Theme({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
			responsiveFontSizes(
				createTheme({
					palette: {
						mode,
						primary: {
							main: mode === 'dark' ? blue[700] : indigo[800],
						},
						secondary: {
							main: mode === 'dark' ? amber[600] : amber[400],
						},
						info: {
							main: mode === 'dark' ? grey[100] : grey[50],
						},
					},
				})
			),
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
