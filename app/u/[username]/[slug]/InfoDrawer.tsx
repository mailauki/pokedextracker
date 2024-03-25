'use client';

import { useContext, useMemo, useState } from 'react';

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

import type { SelectedPokemonContextType } from '@/utils/context';
import { SelectedPokemonContext } from '@/utils/context';

const drawerWidth = 400;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
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

export default function InfoDrawer({ dex }: { dex: Dex }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

	const { selectedPokemon } = useContext(SelectedPokemonContext) as SelectedPokemonContextType;
	const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const regional = dex.dex_type.tags.includes('regional');

	useMemo(async () => {
		if (selectedPokemon) {
			fetch(`https://pokedextracker.com/api/pokemon/${selectedPokemon.national_id}?dex_type=${selectedPokemon.dex_number}`)
			.then((res) => res.json())
			.then((data) => setPokemon(data));
		}
	}, [regional, selectedPokemon]);

	if (!pokemon) {
		return (
			<Drawer
				anchor='right'
				open={false}
				sx={{ zIndex: (theme) => theme.zIndex.appBar - 1 }}
				variant='permanent'
			>
				<Stack direction='row' divider={<Divider orientation='vertical' />}>
					<IconButton
						disabled
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
						<ChevronLeft />
					</IconButton>
				</Stack>
			</Drawer>
		);
	}

	console.log({ pokemon });

  const idToDisplay = regional ? (pokemon.dex_number === -1 ? '---' : pokemon.dex_number) : nationalId(pokemon.national_id);
  const paddingDigits = dex.total >= 1000 ? 4 : 3;

	return (
		<>
			<Drawer
				anchor='right'
				open={open}
				sx={{
					zIndex: (theme) => theme.zIndex.appBar - 1,
					// overflowX: 'hidden',
				}}
				variant='permanent'
			>
				<Stack direction='row' divider={<Divider orientation='vertical' />}>
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
							// zIndex: (theme) => theme.zIndex.drawer + 100,
						}}
					>
						{open ? <ChevronRight /> : <ChevronLeft />}
					</IconButton>
					<Stack
						component={List}
						disablePadding
						divider={<Divider flexItem />}
						justifyContent='space-between'
						sx={{
							width: '100%',
							height: '100vh',
							// overflowX: 'hidden',
					}}
					>
						<>
							<Toolbar />
							<ListItem>
								<ListItemAvatar>
									<Sprite dex={dex} pokemon={pokemon} />
								</ListItemAvatar>
								<ListItemText
									primary={pokemon.name}
									secondary={`#${padding(idToDisplay, paddingDigits)}`}
								/>
							</ListItem>
						</>
						<Locations locations={pokemon.locations} />
						<EvolutionFamily dex={dex} evolution_family={pokemon.evolution_family} />
					</Stack>
				</Stack>
			</Drawer>
		</>
	);
}
