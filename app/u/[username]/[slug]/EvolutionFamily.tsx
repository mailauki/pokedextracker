import Sprite from './Sprite';

import type { EvolutionFamily } from '@/types/pokemon';
import type { Dex } from '@/types/dexes';

import { ListItem, Typography } from '@mui/material';

import { ArrowRightAlt } from '@mui/icons-material';

export default function EvolutionFamily({ dex, evolution_family }: { dex: Dex, evolution_family: EvolutionFamily }) {
	return (
		<>
			<ListItem sx={{ justifyContent: 'center' }}>
					<Sprite dex={dex} pokemon={evolution_family.pokemon[0][0]} />
					<ArrowRightAlt fontSize='small' />
					<Typography sx={{ mx: 0.5 }} variant='caption'>
						Level Up {evolution_family.evolutions[0][0].level ? `to ${evolution_family.evolutions[0][0].level}` : ''}
					</Typography>
					<ArrowRightAlt fontSize='small' />
					<Sprite dex={dex} pokemon={evolution_family.pokemon[1][0]} />
			</ListItem>
			{/* <pre>{JSON.stringify(evolution_family, null, 2)}</pre> */}
		</>
	);
}
