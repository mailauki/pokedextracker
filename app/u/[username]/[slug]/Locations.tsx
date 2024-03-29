import type { Location } from '@/types/pokemon';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';

import { RadioButtonUnchecked as Bullet } from '@mui/icons-material';

export default function EvolutionFamily({ locations }: { locations: Location[] }) {
	return (
		<>
			<List
				subheader={<li />}
				sx={{
					width: '100%',
					bgcolor: 'background.paper',
					position: 'relative',
					overflowY: 'auto',
					flex: '1 1 auto',
					// height: 'calc(100vh - (16px + 8px + 64px + 72px + 56px + 2px))',
					'& ul': { padding: 0 },
				}}
			>
				{locations.map((location) => (
					<li key={location.game.id}>
						<ul>
							<ListSubheader>Pokémon {location.game.name}</ListSubheader>
							{location.value.map((item) => (
								<ListItem key={`item-${location.game.id}-${item}`} sx={{ alignItems: 'baseline' }}>
									<ListItemIcon sx={{ minWidth: 'fit-content', mr: 1, fontSize: '8px' }}>
										<Bullet fontSize='inherit' sx={{ paddingY: 0.25 }} />
									</ListItemIcon>
									<ListItemText primary={item} sx={{ textWrap: 'wrap' }} />
								</ListItem>
							))}
						</ul>
					</li>
				))}
			</List>
			{/* <pre>{JSON.stringify(locations, null, 2)}</pre> */}
		</>
	);
}
