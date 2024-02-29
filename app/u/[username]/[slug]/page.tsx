import type { Metadata } from 'next';

import Main from '@/components/Main';
import Searchbar from './Searchbar';
import DexHeader from './DexHeader';
import PokeContainer from './PokeContainer';
import InfoDrawer from './InfoDrawer';

import { Stack } from '@mui/material';

import type { Dex } from '@/types/dexes';

import { getUser } from '@/utils/get-user';
import { getCaptures } from '@/utils/get-captures';

interface Props {
  params: { username: string, slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { username, slug } = params;

	const user = await getUser(username);
	const dex = user.dexes.find((dex: Dex) => dex.slug === slug);

  return {
    title: dex?.title || 'Dex',
  };
}

export default async function Dex({ params }: Props) {
	const { username, slug } = params;

	const user = await getUser(username);
	const dex = user.dexes.find((dex: Dex) => dex.slug === slug);

	const captures = await getCaptures(username, slug);

	const selectedPokemon = captures[0].pokemon;
	const selectedRes = await fetch(`https://pokedextracker.com/api/pokemon/${selectedPokemon.national_id}?dex_type=${selectedPokemon.dex_number}`);
	const selected = await selectedRes.json();

	return (
		<Stack direction='row'>
			<Stack flexGrow={1}>
				<Searchbar />
				<Main size='md'>
					<DexHeader dex={dex!} />
					<PokeContainer captures={captures} dex={dex!} />
				</Main>
			</Stack>
			<InfoDrawer dex={dex!} pokemon={selected} />
		</Stack>
	);
}
