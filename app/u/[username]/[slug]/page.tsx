import type { Metadata } from 'next';

import Main from '@/components/Main';
import Searchbar from './Searchbar';
import DexHeader from './DexHeader';
import PokeContainer from './PokeContainer';

import { Toolbar } from '@mui/material';

import type { Dex } from '@/types/dexes';

interface Props {
  params: { username: string, slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { username, slug } = params;
	const userRes = await fetch(`https://pokedextracker.com/api/users/${username}`);
	const user = await userRes.json();
	const dex = user.dexes.find((dex: Dex) => dex.slug === slug);

  return {
    title: dex.title || 'Dex',
  };
}

export default async function Dex({ params }: Props) {
	const { username, slug } = params;
	const userRes = await fetch(`https://pokedextracker.com/api/users/${username}`);
	const user = await userRes.json();
	const dex = user.dexes.find((dex: Dex) => dex.slug === slug);

	const captureRes = await fetch(`https://pokedextracker.com/api/users/${username}/dexes/${slug}/captures`);
	const captures = await captureRes.json();

	return (
		<>
			<Searchbar />
			<Main size="md">
				<Toolbar sx={{ height: 130 }} />
				<DexHeader dex={dex} />
				<PokeContainer captures={captures} dex={dex} />
			</Main>
		</>
	);
}
