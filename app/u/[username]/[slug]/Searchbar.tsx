'use client';

import { AppBar, Checkbox, Container, FormControlLabel, InputAdornment, TextField, Toolbar } from '@mui/material';

import { Search } from '@mui/icons-material';

export default function Searchbar() {
	return (
		<AppBar
			color="inherit"
			position="fixed"
			sx={{ zIndex: (theme) => theme.zIndex.appBar - 1 }}
		>
			<Toolbar />
			<Toolbar
				component={Container}
				maxWidth="md"
				sx={{
					flexDirection: 'column',
					justifyContent: 'stretch',
					alignItems: 'flex-start',
				}}
			>
				<TextField
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					}}
					fullWidth
					margin="normal"
				/>
				<FormControlLabel
					control={<Checkbox />}
					label="Hide Caught Pokémon"
					sx={{ mb: 1 }}
				/>
			</Toolbar>
		</AppBar>
	);
}
