import { Avatar } from '@mui/material';

import type { Capture } from '@/types/captures';
import type { Dex } from '@/types/dexes';

import { iconClass } from '@/utils/pokemon';

import './sprite.css';

export default function Sprite({ capture, dex }: { capture: Capture, dex: Dex }) {
	const isLegendsArceus = Boolean(dex.game.name === 'Legends: Arceus');

	return (
		<Avatar alt={capture.pokemon.name}
			sx={{
				height: isLegendsArceus ? 30 : 40,
				width: isLegendsArceus ? 30 : 40,
				backgroundColor: isLegendsArceus ? 'divider': 'transparent',
			}}
			variant={isLegendsArceus ? 'circular' : 'rounded'}
		>
			<i className={iconClass(capture.pokemon, dex)} />
		</Avatar>
	);
}
