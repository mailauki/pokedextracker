'use client';

import Sprite from './Sprite';

import { Card, CardActionArea, CardActions, IconButton, Stack, Typography, alpha } from '@mui/material';

import type { Capture } from '@/types/captures';
import type { Dex } from '@/types/dexes';

import { nationalId, padding } from '@/utils/formatting';
import { Info } from '@mui/icons-material';

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
				position: 'relative',
			}}
			variant={capture.captured ? 'outlined': 'elevation'}
		>
			<CardActionArea
				onClick={() => alert('card clicked')}
				sx={{ height: '100%', width: '100%' }}
			>
				<Stack
					alignItems='center'
					direction='column'
					justifyContent='space-between'
					sx={{ height: '90%', padding: '5%' }}
				>
					<Typography>{capture.pokemon.name}</Typography>

					<Sprite dex={dex} pokemon={capture.pokemon} />

					<Typography variant='overline'>
						#{padding(idToDisplay, paddingDigits)}
					</Typography>
				</Stack>
			</CardActionArea>

			<CardActions
				sx={{
					position: 'absolute',
					bottom: 0,
					right: 0,
					p: 0,
				}}
			>
				<IconButton
					onClick={() => alert('button clicked')}
					size='small'
				>
					<Info />
				</IconButton>
			</CardActions>
		</Card>
	);
}
