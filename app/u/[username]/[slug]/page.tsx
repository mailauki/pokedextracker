import Main from "@/components/Main";

import type { Dex } from "@/types/dexes";

import { Typography } from "@mui/material";

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
		<Main size="md">
			<Typography variant="h3">{dex.title}</Typography>
		</Main>
	);
}
