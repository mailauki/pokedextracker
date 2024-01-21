import Main from "@/components/Main";
import type { Dex } from "@/types/dexes";
import { Typography } from "@mui/material";

export default async function Profile({ params }: { params: { username: string } }) {
	const { username } = params;
	const res = await fetch(`https://pokedextracker.com/api/users/${username}`);
	const user = await res.json();

	return (
		<Main size="md">
			<Typography variant="h3">{username}{"'s Profile"}</Typography>
			{/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
			{user.dexes.map((dex: Dex) => <p key={dex.id}>{dex.title}</p>)}
		</Main>
	);
}
