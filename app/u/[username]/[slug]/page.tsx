import Main from "@/components/Main";

import type { Dex } from "@/types/dexes";

import { Link, Toolbar, Typography } from "@mui/material";
import Searchbar from "./Searchbar";

export default async function Dex({
	params,
}: {
	params: {
		username: string,
		slug: string
	}
}) {
	const { username } = params;
	const { slug } = params;
	const res = await fetch(`https://pokedextracker.com/api/users/${username}`);
	const user = await res.json();
	const dex = user.dexes.find((dex: Dex) => dex.slug === slug);

	return (
		<>
			<Searchbar />
			<Main size="md">
				<Toolbar sx={{ height: 130 }} />
				<Typography variant="h3">{dex.title}</Typography>
				<Link href={`/u/${username}`}>/u/{username}</Link>
			</Main>
			{/* <Toolbar />
			<AppBar color="transparent" position="sticky">
				<Toolbar>
					<Typography>Hello, world!</Typography>
				</Toolbar>
			</AppBar>
			<Container maxWidth="md">
				<Typography variant="h3">{dex.title}</Typography>
				<Link href={`/u/${username}`}>/u/{username}</Link>
			</Container> */}
			{/* <Main size="md">
				<AppBar>
					<Toolbar />
					<Toolbar>
						<Typography>Hello, world!</Typography>
					</Toolbar>
				</AppBar>
				<Typography variant="h3">{dex.title}</Typography>
				<Link href={`/u/${username}`}>/u/{username}</Link>
			</Main> */}
		</>
	);
}
