'use client';

import { useState } from 'react';

import Sprite from './Sprite';

import type { Theme, CSSObject } from '@mui/material/styles';
import { styled, useTheme } from '@mui/material/styles';

import { Drawer as MuiDrawer, IconButton, Toolbar, ListItem, ListItemText, List, Divider, Stack, ListItemAvatar } from '@mui/material';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import type { Dex } from '@/types/dexes';
import type { Pokemon } from '@/types/pokemon';

import { nationalId, padding } from '@/utils/formatting';
import EvolutionFamily from './EvolutionFamily';
import Locations from './Locations';

const drawerWidth = 340;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'hidden',
  width: `calc(${theme.spacing(4)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function InfoDrawer({ pokemon, dex }: { pokemon: Pokemon, dex: Dex }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
	console.log(pokemon);
  const regional = dex.dex_type.tags.includes('regional');
  const idToDisplay = regional ? (pokemon.dex_number === -1 ? '---' : pokemon.dex_number) : nationalId(pokemon.national_id);
  const paddingDigits = dex.total >= 1000 ? 4 : 3;
	// #{padding(dex.dex_type.tags.includes('regional') ? (pokemon.dex_number === -1 ? '---' : pokemon.dex_number) : nationalId(pokemon.national_id), dex.total >= 1000 ? 4 : 3)}

	return (
		<>
			<Drawer
				anchor='right'
				open={open}
				sx={{ zIndex: (theme) => theme.zIndex.appBar - 1 }}
				variant='permanent'
			>
				<Stack direction='row'>
					<IconButton
						onClick={() => setOpen(!open)}
						sx={{
							height: '100vh',
							width: theme.spacing(4),
							[theme.breakpoints.up('sm')]: {
								width: theme.spacing(6),
							},
							bgcolor: (theme) => theme.palette.background.default,
							borderRadius: 0,
						}}
					>
						{open ? <ChevronRight /> : <ChevronLeft />}
					</IconButton>
					<Divider orientation='vertical' />
					<List sx={{ width: '100%' }}>
						<Toolbar/>
						<ListItem>
							<ListItemAvatar>
								<Sprite dex={dex} pokemon={pokemon} />
							</ListItemAvatar>
							<ListItemText
								primary={pokemon.name}
								secondary={`#${padding(idToDisplay, paddingDigits)}`}
							/>
						</ListItem>
						<Divider />
						<Locations locations={pokemon.locations} />
						<Divider />
						<EvolutionFamily dex={dex} evolution_family={pokemon.evolution_family} />
						{/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
					</List>
				</Stack>
			</Drawer>
		</>
	);
}
