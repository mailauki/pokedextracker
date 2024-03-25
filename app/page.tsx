import Main from '@/components/Main';
import { RssFeed, Twitter } from '@mui/icons-material';
import { Button, Container, IconButton, Link, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import Image from 'next/image';

export default async function Home() {
  return (
		<Paper
			elevation={0}
			square
			sx={{
				backgroundImage: 'url(/pattern.png)',
				backgroundSize: '500px',
				backgroundPosition: 'center center',
				backgroundRepeat: 'repeat',
				backgroundBlendMode: 'exclusion',
				borderLeft: 0,
				borderRight: 0,
				// borderColor: 'transparent',
				display: 'flex',
				flex: '1 1 auto',
			}}
			variant='outlined'
		>
			<Main size='md'>
				<Toolbar sx={{ mb: 2 }} />

				<Stack alignItems='center'>
					<Image
						alt="Gotta catch 'em all!"
						height={100}
						src='/pokeball.svg'
						width={100}
					/>
					<Typography color='primary' fontWeight='bold' variant='h2'>Pokédex Tracker</Typography>
				</Stack>

				<Container maxWidth='sm' sx={{ mt: 2 }}>
					<Typography textAlign='center' variant='subtitle2'>A tool for tracking your Living Dex progress! We currently support:</Typography>
					<ul style={{ paddingInlineStart: '20px', margin: '0.5rem' }}>
						<li>
							<Typography variant='body2'><Link href='/u/ashketchum10/scarlet-expansion-living-dex'>Pokémon Scarlet &amp; Violet (Expansion Pass) Full Paldea Dex</Link>, <Link href='/u/ashketchum10/scarlet-kitakami-living-dex'>Kitakami Dex</Link>, &amp; <Link href='/u/ashketchum10/scarlet-blueberry-living-dex'>Blueberry Dex</Link></Typography>
							</li>
						<li>
							<Typography variant='body2'><Link href='/u/ashketchum10/scarlet-regional-living-dex'>Pokémon Scarlet &amp; Violet Regional Dex</Link>
							</Typography>
						</li>
						<li>
							<Typography variant='body2'><Link href='/u/ashketchum10/home-national-living-dex'>HOME Generation 9 National Dex</Link> (and Generations 6, 7, and 8)
							</Typography>
						</li>
						<li>
							<Typography variant='body2'><Link href='/u/ashketchum10/legends-arceus-regional-living-dex'>Pokémon Legends: Arceus Regional Dex</Link></Typography>
						</li>
						<li>
							<Typography variant='body2'>Pokémon Brilliant Diamond &amp; Shining Pearl <Link href='/u/ashketchum10/brilliant-diamond-regional-living-dex'>Regional Dex</Link> and <Link href='/u/ashketchum10/brilliant-diamond-national-living-dex'>National Dex</Link></Typography>
						</li>
						<li>
							<Typography variant='body2'><Link href='/u/ashketchum10/sword-expansion-pass-regional-living-dex'>Pokémon Sword &amp; Shield (Expansion Pass) Regional Dex</Link></Typography>
						</li>
						<li>
							<Typography variant='body2'><Link href='/u/ashketchum10/sword-regional-living-dex'>Pokémon Sword &amp; Shield Regional Dex</Link></Typography>
						</li>
						<li>
							<Typography variant='body2'>Previous Games: <Link href='/u/ashketchum10/lets-go-pikachu-regional-living-dex'>Let&apos;s Go, Pikachu &amp; Let&apos;s Go, Eevee</Link>, <Link href='/u/ashketchum10/ultra-sun-regional-living-dex'>Ultra Sun &amp; Ultra Moon</Link>, <Link href='/u/ashketchum10/sun-regional-living-dex'>Sun &amp; Moon</Link>, <Link href='/u/ashketchum10/omega-ruby-regional-living-dex'>Omega Ruby &amp; Alpha Sapphire</Link>, and <Link href='/u/ashketchum10/x-regional-living-dex'>X &amp; Y</Link></Typography>
						</li>
						<li>
							<Typography variant='body2'><Link href='/u/ashketchum10/shinies'>Shiny Dexes</Link> for all of the above!</Typography>
						</li>
					</ul>

					<Stack direction='row' justifyContent='center' spacing={2} sx={{ my: 2 }}>
						<Button
							size='large'
							sx={{ width: 200 }}
							variant='contained'
						>
							Register
						</Button>
						<Button
							// color='info'
							size='large'
							sx={{
								width: 200,
								// '&:hover': { bgcolor: grey[300] }
							}}
							// variant='contained'
							variant='outlined'
						>
								Login
							</Button>
					</Stack>

					<Typography paragraph variant='body2'>Easily toggle between and track your captured Pokémon, find the locations of those left to be captured, manage all your dexes on one <Link href='/u/ashketchum10'>profile</Link>, and share a public link with others to see how you can help each other out.</Typography>

					<Typography paragraph variant='body2'>This project is open source, and you can find the code on <Link href='https://github.com/pokedextracker' rel='noopener noreferrer' target='_blank'>GitHub</Link>. Feel free to report issues, suggest features, or even submit a pull request. Help support this project financially by <Link href='https://www.patreon.com/pokedextracker' rel='noopener noreferrer' target='_blank'>donating</Link>&mdash;every little bit helps!</Typography>

					<Stack
						alignItems='center'
						direction='row'
						justifyContent='center'
					>
						<IconButton
							color='primary'
							component='a'
							href='https://twitter.com/PokedexTracker'
							rel='noopener noreferrer'
							target='_blank'
						>
							<Twitter />
						</IconButton>
						<IconButton
							color='primary'
							component='a'
							href='/blog/'
							rel='noopener noreferrer'
							target='_blank'
						>
							<RssFeed />
						</IconButton>
					</Stack>
				</Container>
			</Main>
		</Paper>
  );
}
