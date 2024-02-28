import { Avatar } from '@mui/material';

import type { EvolutionPokemon, Pokemon } from '@/types/pokemon';
import type { Dex } from '@/types/dexes';

import { iconClass } from '@/utils/pokemon';

import './sprite.css';

export default function Sprite({ dex, pokemon }: { dex: Dex, pokemon: Pokemon | EvolutionPokemon }) {
	const isLegendsArceus = Boolean(dex.game.name === 'Legends: Arceus');

	return (
		<Avatar alt={pokemon.name}
			sx={{
				height: isLegendsArceus ? 30 : 40,
				width: isLegendsArceus ? 30 : 40,
				backgroundColor: isLegendsArceus ? 'divider': 'transparent',
			}}
			variant={isLegendsArceus ? 'circular' : 'rounded'}
		>
			<i className={iconClass(pokemon, dex)} />
		</Avatar>
	);
}
