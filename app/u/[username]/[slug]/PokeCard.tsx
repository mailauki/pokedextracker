import { Avatar, Card, CardActionArea, Stack, Typography } from "@mui/material";

// import type { Pokemon } from "@/types/pokemon";
import type { Capture } from "@/types/captures";
import type { Dex } from "@/types/dexes";

import { nationalId, padding } from "@/utils/formatting";

export default function PokeCard({ capture, dex }: { capture: Capture, dex: Dex }) {
  const regional = dex.dex_type.tags.includes("regional");
  const idToDisplay = regional ? (capture.pokemon.dex_number === -1 ? "---" : capture.pokemon.dex_number) : nationalId(capture.pokemon.national_id);
  const paddingDigits = dex.total >= 1000 ? 4 : 3;

	return (
		<Card sx={{ width: 120, height: 120 }}>
			<CardActionArea sx={{ height: "100%" }}>
				<Stack
					alignItems="center"
					direction="column"
					justifyContent="space-between"
					sx={{ height: "90%", padding: "5%" }}
				>
					<Typography>{capture.pokemon.name}</Typography>
					<Avatar alt={capture.pokemon.name} src="" sx={{ display: "none" }} />
					<Typography>#{padding(idToDisplay, paddingDigits)}</Typography>
				</Stack>
			</CardActionArea>
		</Card>
		// <pre>{JSON.stringify(pokemon, null, 2)}</pre>
	);
}
