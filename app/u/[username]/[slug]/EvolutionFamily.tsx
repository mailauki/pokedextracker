import { Evolutions } from './Evolutions';

import type { EvolutionFamily as EvolutionFamilyType } from '@/types/pokemon';
import type { Dex } from '@/types/dexes';

import { ListItem } from '@mui/material';

export default function EvolutionFamily({ dex, evolution_family }: { dex: Dex, evolution_family: EvolutionFamilyType }) {

	return (
		<ListItem sx={{ pb: 2, minHeight: 'fit-content' }}>
			<Evolutions dex={dex} family={evolution_family} />
		</ListItem>
	);
}
