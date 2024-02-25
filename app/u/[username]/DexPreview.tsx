"use client";

import Progress from "./Progress";
import DexTypes from "./DexTypes";

import { Box, Link, Stack } from "@mui/material";

import type { Dex } from "@/types/dexes";
import { useParams } from "next/navigation";

export default function DexPreview({ dex }: { dex: Dex }) {
  const { username } = useParams<{ username: string }>();

	return (
		<Box sx={{ mt: 5 }}>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="space-between"
			>
				<Link href={`/u/${username}/${dex.slug}`} variant="h6">{dex.title}</Link>
				<DexTypes dex={dex} />
			</Stack>
			<Progress caught={dex.caught} total={dex.total} />
		</Box>
	);
}
