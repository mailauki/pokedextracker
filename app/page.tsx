import Main from '@/components/Main';
import { RssFeed, Twitter } from '@mui/icons-material';
import { Container, IconButton, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default async function Home() {
  return (
		<Main size='md'>
			<Stack alignItems='center'>
				<Image
					alt="Gotta catch 'em all!"
					height={100}
					src='/pokeball.svg'
					width={100}
				/>
				<Typography color='primary' fontWeight='bold' variant='h1'>Pokédex Tracker</Typography>
			</Stack>

			<Container maxWidth='sm' sx={{ mt: 2 }}>
				<Typography textAlign='center'>A tool for tracking your Living Dex progress! We currently support:</Typography>
				<ul>
					<li><Link href='/u/ashketchum10/scarlet-expansion-living-dex'>Pokémon Scarlet &amp; Violet (Expansion Pass) Full Paldea Dex</Link>, <Link href='/u/ashketchum10/scarlet-kitakami-living-dex'>Kitakami Dex</Link>, &amp; <Link href='/u/ashketchum10/scarlet-blueberry-living-dex'>Blueberry Dex</Link></li>
					<li><Link href='/u/ashketchum10/scarlet-regional-living-dex'>Pokémon Scarlet &amp; Violet Regional Dex</Link></li>
					<li><Link href='/u/ashketchum10/home-national-living-dex'>HOME Generation 9 National Dex</Link> (and Generations 6, 7, and 8)</li>
					<li><Link href='/u/ashketchum10/legends-arceus-regional-living-dex'>Pokémon Legends: Arceus Regional Dex</Link></li>
					<li>Pokémon Brilliant Diamond &amp; Shining Pearl <Link href='/u/ashketchum10/brilliant-diamond-regional-living-dex'>Regional Dex</Link> and <Link href='/u/ashketchum10/brilliant-diamond-national-living-dex'>National Dex</Link></li>
					<li><Link href='/u/ashketchum10/sword-expansion-pass-regional-living-dex'>Pokémon Sword &amp; Shield (Expansion Pass) Regional Dex</Link></li>
					<li><Link href='/u/ashketchum10/sword-regional-living-dex'>Pokémon Sword &amp; Shield Regional Dex</Link></li>
					<li>Previous Games: <Link href='/u/ashketchum10/lets-go-pikachu-regional-living-dex'>Let&apos;s Go, Pikachu &amp; Let&apos;s Go, Eevee</Link>, <Link href='/u/ashketchum10/ultra-sun-regional-living-dex'>Ultra Sun &amp; Ultra Moon</Link>, <Link href='/u/ashketchum10/sun-regional-living-dex'>Sun &amp; Moon</Link>, <Link href='/u/ashketchum10/omega-ruby-regional-living-dex'>Omega Ruby &amp; Alpha Sapphire</Link>, and <Link href='/u/ashketchum10/x-regional-living-dex'>X &amp; Y</Link></li>
					<li><Link href='/u/ashketchum10/shinies'>Shiny Dexes</Link> for all of the above!</li>
				</ul>

				<Typography paragraph>Easily toggle between and track your captured Pokémon, find the locations of those left to be captured, manage all your dexes on one <Link href='/u/ashketchum10'>profile</Link>, and share a public link with others to see how you can help each other out.</Typography>

				<Typography paragraph>This project is open source, and you can find the code on <Link href='https://github.com/pokedextracker' rel='noopener noreferrer' target='_blank'>GitHub</Link>. Feel free to report issues, suggest features, or even submit a pull request. Help support this project financially by <Link href='https://www.patreon.com/pokedextracker' rel='noopener noreferrer' target='_blank'>donating</Link>&mdash;every little bit helps!</Typography>

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
  );
}
