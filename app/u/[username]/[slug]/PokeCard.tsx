'use client';

import Sprite from './Sprite';

import { Card, CardActionArea, Stack, Typography, alpha } from '@mui/material';

import type { Capture } from '@/types/captures';
import type { Dex } from '@/types/dexes';

import { nationalId, padding } from '@/utils/formatting';

export default function PokeCard({ capture, dex }: { capture: Capture, dex: Dex }) {
  const regional = dex.dex_type.tags.includes('regional');
  const idToDisplay = regional ? (capture.pokemon.dex_number === -1 ? '---' : capture.pokemon.dex_number) : nationalId(capture.pokemon.national_id);
  const paddingDigits = dex.total >= 1000 ? 4 : 3;

	return (
		<Card
			sx={{
				width: 120,
				height: 120,
				borderColor: capture.captured ? (theme) => theme.palette.primary.main : 'inherit',
				bgcolor: capture.captured ? (theme) => alpha(theme.palette.primary.light, 0.25) : 'inherit',
			}}
			variant={capture.captured ? 'outlined': 'elevation'}
		>
			<CardActionArea sx={{ height: '100%' }}>
				<Stack
					alignItems="center"
					direction="column"
					justifyContent="space-between"
					sx={{ height: '90%', padding: '5%' }}
				>
					<Typography>{capture.pokemon.name}</Typography>

					<Sprite capture={capture} dex={dex} />

					<Typography variant="overline">
						#{padding(idToDisplay, paddingDigits)}
					</Typography>
				</Stack>
			</CardActionArea>
		</Card>
	);
}
