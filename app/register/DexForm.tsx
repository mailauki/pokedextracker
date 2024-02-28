import { Checkbox, Container, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Tooltip, Typography } from '@mui/material';

import { Help } from '@mui/icons-material';

import type { Game } from '@/types/games';

export default async function DexForm() {
	const res = await fetch('https://pokedextracker.com/api/games');
	const games = await res.json();

	return (
		<Container
			alignItems='center'
			component={Stack}
			direction='column'
			maxWidth='xs'
			spacing={3}
		>
			<Typography variant='h5'>
				First Dex Info
				{' '}
				<Tooltip
					arrow
					title='You can track multiple dexes on our app! This sets the settings for the first dex on your account.'
				>
					<Help fontSize='small' />
				</Tooltip>
			</Typography>

			<TextField
				fullWidth
				label='Title'
			/>

			<FormControl fullWidth>
				<InputLabel>Game</InputLabel>
				<Select
					label='Game'
				>
					{games.map((game: Game) => <MenuItem key={game.id} value={game.id}>{game.name}</MenuItem>)}
				</Select>
			</FormControl>

			<FormControl fullWidth>
				<FormLabel>Dex Type</FormLabel>
				<RadioGroup
					defaultValue='Full National'
				>
					<FormControlLabel control={<Radio />} label='Full National' value='Full National' />
				</RadioGroup>
			</FormControl>

			<FormControl fullWidth>
				<FormLabel>Customizations</FormLabel>
				<FormGroup>
					<FormControlLabel control={<Checkbox />} label='Shiny' />
					<FormControlLabel control={<Checkbox />} label='Gigantamax Forms' />
				</FormGroup>
			</FormControl>
		</Container>
	);
}
