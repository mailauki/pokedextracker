'use client';

import PokeCard from './PokeCard';

import { Grid } from '@mui/material';

import type { Capture } from '@/types/captures';
import type { Dex } from '@/types/dexes';

export default function PokeContainer({ captures, dex }: { captures: Capture[], dex: Dex }) {
	return (
		<Grid
			container
			justifyContent='center'
			spacing={2}
			sx={{ mt: 2, flexGrow: 1 }}
		>
			{captures.map((capture) => (
				<Grid item key={`${capture.dex_id}-${capture.pokemon.id}`}>
					<PokeCard capture={capture} dex={dex} />
				</Grid>
			))}
		</Grid>
	);
}
