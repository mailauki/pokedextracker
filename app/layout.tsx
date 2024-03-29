import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Nav from '@/components/Nav';

import Theme from '@/utils/theme';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Paper } from '@mui/material';
import { SelectedPokemonProvider } from '@/utils/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | Pokédex Tracker',
		default: 'Pokédex Tracker',
	},
  description: 'A website to track your completion of a Living Pokedex.',
	icons: {
		icon: 'favicon.ico',
	},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en' style={{ minHeight: '100vh' }}>
			<Theme>
				<SelectedPokemonProvider>
					<Paper className={inter.className} component='body' elevation={0} sx={{ m: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
						<AppRouterCacheProvider>
							<Nav />
							{children}
						</AppRouterCacheProvider>
					</Paper>
				</SelectedPokemonProvider>
			</Theme>
		</html>
  );
}
