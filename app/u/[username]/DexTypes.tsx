import { Chip, Stack } from '@mui/material';

import { AutoAwesome as ShinyIcon } from '@mui/icons-material';

import type { Dex } from '@/types/dexes';

const EXCLUDED_TAGS = ['regional', 'game national', 'full national'];

export default function DexTypes({ dex }: { dex: Dex }) {
	return (
		<Stack
			alignItems="center"
			direction="row"
			spacing={1}
			sx={{ display: { xs: 'none', sm: 'flex' } }}
		>
			{dex.shiny && <ShinyIcon fontSize="small" />}
			{[
				dex.dex_type.base_dex_type?.name || dex.dex_type.name,
				...dex.dex_type.tags.filter((tag) => !EXCLUDED_TAGS.includes(tag)),
			].map((tag) => (
				<Chip
					key={tag}
					label={tag.replace(/^customization-/g, '')}
					sx={{ textTransform: 'capitalize' }}
				/>
			))}
			<Chip
				label={dex.game.name}
				sx={{ textTransform: 'capitalize' }}
			/>
		</Stack>
	);
}
