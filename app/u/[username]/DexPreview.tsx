import Progress from "./Progress";

import { Box, Chip, Link, Stack } from "@mui/material";

import { AutoAwesome as ShinyIcon } from "@mui/icons-material";

import type { Dex } from "@/types/dexes";

const EXCLUDED_TAGS = ["regional", "game national", "full national"];

export default function DexPreview({ dex }: { dex: Dex }) {
	return (
		<Box sx={{ mt: 5 }}>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="space-between"
				sx={{ mb: 1 }}
			>
				<Link variant="h6">{dex.title}</Link>
				<Stack alignItems="center" direction="row" spacing={1}>
					{dex.shiny && <ShinyIcon fontSize="small" />}
					{[
						dex.dex_type.base_dex_type?.name || dex.dex_type.name,
						...dex.dex_type.tags.filter((tag) => !EXCLUDED_TAGS.includes(tag)),
					].map((tag) => (
						<Chip
							key={tag}
							label={tag.replace(/^customization-/g, "")}
							sx={{ textTransform: "capitalize" }}
						/>
					))}
					<Chip
						label={dex.game.name}
						sx={{ textTransform: "capitalize" }}
					/>
				</Stack>
			</Stack>
			<Progress caught={dex.caught} total={dex.total} />
		</Box>
	);
}
