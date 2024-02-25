import Main from "@/components/Main";

import type { Dex } from "@/types/dexes";

import { Toolbar } from "@mui/material";
import Searchbar from "./Searchbar";
import DexHeader from "./DexHeader";

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
				{/* <Typography variant="h3">{dex.title}</Typography>
				<Link href={`/u/${username}`}>/u/{username}</Link> */}
				<DexHeader dex={dex} />
			</Main>
		</>
	);
}
