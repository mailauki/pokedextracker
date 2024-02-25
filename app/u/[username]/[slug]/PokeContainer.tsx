import { Grid } from "@mui/material";
import PokeCard from "./PokeCard";

import type { Capture } from "@/types/captures";
import type { Dex } from "@/types/dexes";

export default function PokeContainer({ captures, dex }: { captures: Capture[], dex: Dex }) {
	return (
		// <pre>{JSON.stringify(captures, null, 2)}</pre>
		// captures.map((mon) => <PokeCard key={mon.dex_id} pokemon={mon.pokemon} />)
		<Grid
			container
			justifyContent="center"
			spacing={2}
			sx={{ mt: 2, flexGrow: 1 }}
		>
			{captures.map((capture) => (
				<Grid item key={capture.dex_id}>
					<PokeCard capture={capture} dex={dex} />
				</Grid>
			))}
		</Grid>
	);
}
