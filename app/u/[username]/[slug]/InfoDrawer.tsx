'use client';

import { useState } from 'react';

import type { Theme, CSSObject } from '@mui/material/styles';
import { styled, useTheme } from '@mui/material/styles';

import { Drawer as MuiDrawer, IconButton, Toolbar, ListItem, ListItemText, List, Divider, Stack } from '@mui/material';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';

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

export default function InfoDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

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
					<List>
						<Toolbar/>
						<ListItem>
							<ListItemText primary='Hello' />
						</ListItem>
						<ListItem>
							<ListItemText primary='World' />
						</ListItem>
					</List>
				</Stack>
			</Drawer>
		</>
	);
}
