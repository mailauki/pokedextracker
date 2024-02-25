import Main from "@/components/Main";
import Searchbar from "./Searchbar";
import DexHeader from "./DexHeader";

import { Toolbar } from "@mui/material";

import type { Dex } from "@/types/dexes";
import PokeContainer from "./PokeContainer";

// import { useTrackerContext } from "@/components/useTracker";

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
	const userRes = await fetch(`https://pokedextracker.com/api/users/${username}`);
	const user = await userRes.json();
	const dex = user.dexes.find((dex: Dex) => dex.slug === slug);

	const captureRes = await fetch(`https://pokedextracker.com/api/users/${username}/dexes/${slug}/captures`);
	const captures = await captureRes.json();

	console.log({ captures });

	return (
		<>
			<Searchbar />
			<Main size="md">
				<Toolbar sx={{ height: 130 }} />
				{/* <Typography variant="h3">{dex.title}</Typography>
				<Link href={`/u/${username}`}>/u/{username}</Link> */}
				<DexHeader dex={dex} />
				<PokeContainer captures={captures} dex={dex} />
				{/* <pre>{JSON.stringify(captures, null, 2)}</pre> */}
			</Main>
		</>
	);
}
