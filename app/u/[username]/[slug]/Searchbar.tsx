"use client";

import { Search } from "@mui/icons-material";
import { AppBar, Checkbox, Container, FormControlLabel, InputAdornment, TextField, Toolbar } from "@mui/material";

export default function Searchbar() {
	return (
		<AppBar
			color="transparent"
			position="fixed"
			sx={{ zIndex: (theme) => theme.zIndex.appBar - 1 }}
		>
			<Toolbar />
			<Toolbar
				component={Container}
				maxWidth="md"
				sx={{
					flexDirection: "column",
					justifyContent: "stretch",
					alignItems: "flex-start",
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
