'use client';

import { useContext } from 'react';

import { Brightness4, Brightness7 } from '@mui/icons-material';
import { AppBar, Button, IconButton, Link, Stack, Toolbar, useTheme } from '@mui/material';
import { ColorModeContext } from '@/utils/theme';

export default function Nav() {
	const theme = useTheme();
	const mode = theme.palette.mode;
  const colorMode = useContext(ColorModeContext);

	return (
		<AppBar position='fixed'>
			<Toolbar sx={{ justifyContent: 'space-between' }}>
				<Link
					color='inherit'
					href='/'
					sx={{ cursor: 'pointer' }}
					underline='none'
					variant='h6'
				>
					Pokédex Tracker
				</Link>
				<Stack direction='row'>
					<IconButton
						color='inherit'
						onClick={colorMode.toggleColorMode}
					>
						{mode === 'dark' ? (
							<Brightness7 />
						) : (
							<Brightness4 />
						)}
					</IconButton>
					<Button
						color='inherit'
						component='a'
						href='/login'
					>
						Login
					</Button>
				</Stack>
			</Toolbar>
		</AppBar>
	);
}
