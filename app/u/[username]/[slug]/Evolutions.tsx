'use client';

import Sprite from './Sprite';

import { Stack, Tooltip, Typography } from '@mui/material';

import type { Evolution, EvolutionFamily as EvolutionFamilyType } from '@/types/pokemon';
import type { Dex } from '@/types/dexes';

import { capitalize } from '@/utils/formatting';

import { ArrowRightAlt, Info } from '@mui/icons-material';

export function Trigger({ evolutions }: { evolutions: Evolution[], id?: number }) {
	const evolution = evolutions[0];
	let trigger = null;
	let notes = null;

	switch (evolution.trigger) {
		case 'level':
			trigger = <span>Level Up {evolution.level ? `to ${evolution.level} ` : ''}</span>;
			break;
		case 'stone':
			trigger = <span>{capitalize(evolution.stone!)} Stone</span>;
			break;
		case 'candy':
			trigger = <span>{evolution.candy_count} Candies</span>;
			break;
		case 'other':
			break;
		default:
			trigger = <span>{capitalize(evolution.trigger)}</span>;
			break;
	}

	if (evolution.notes) {
		if (evolutions.length <= 3) {
			notes = <span>{evolution.notes}</span>;
		} else {
			notes = (
				<Tooltip arrow title={evolution.notes}>
					<Info fontSize='small' sx={{ verticalAlign: 'top' }} />
				</Tooltip>
			);
		}
	}

	return (
		<Typography sx={{ textWrap: 'wrap', textAlign: 'center', width: '100px' }} variant='caption'>
			{trigger}
			{evolution.held_item ? <span>holding {capitalize(evolution.held_item)} </span> : null}
			{notes}
		</Typography>
	);
}

export function Evolutions({ family, dex }: { family: EvolutionFamilyType, dex: Dex }) {
	return (
		<Stack alignItems='center' direction={family.evolutions.length === 0 ? 'column' : 'row'} height='60px' justifyContent='space-evenly' width='100%'>
			<Sprite dex={dex} pokemon={family.pokemon[0][0]} />
			{family.evolutions.length === 0 ? (
				<Typography variant='caption'>Does not evolve</Typography>
			) : (
				null
			)}
			{family.evolutions.length > 0 ? (
				<Stack alignItems='center' justifyContent='center'>
					<ArrowRightAlt fontSize='small' />
					<Trigger evolutions={family.evolutions[0]} />
					</Stack>
			) : (
				null
			)}
			{family.pokemon.length > 1 ? (
				<Sprite dex={dex} pokemon={family.pokemon[1][0]} />
			) : (
				null
			)}
			{family.evolutions.length > 1 ? (
				<Stack alignItems='center' justifyContent='center'>
					<ArrowRightAlt fontSize='small' />
					<Trigger evolutions={family.evolutions[1]} id={family.pokemon[2][0].national_id} />
				</Stack>
			) : (
				null
			)}
			{family.pokemon.length > 2 ? (
				<Sprite dex={dex} pokemon={family.pokemon[2][0]} />
			) : (
				null
			)}
		</Stack>
	);
}
