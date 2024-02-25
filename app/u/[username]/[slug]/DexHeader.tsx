"use client";

import Progress from "../Progress";
import DexTypes from "../DexTypes";

import { Box, Link, Stack, Typography } from "@mui/material";

import type { Dex } from "@/types/dexes";
import { useParams } from "next/navigation";

export default function DexHeader({ dex }: { dex: Dex }) {
  const { username } = useParams<{ username: string }>();

	return (
		<Box sx={{ mt: 5 }}>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent="space-between"
			>
				{/* <Link href={`/u/${username}/${dex.slug}`} variant="h6">{dex.title}</Link> */}
				<Typography variant="h3">{dex.title}</Typography>
				{/* <Link href={`/u/${username}`}>/u/{username}</Link> */}
				<DexTypes dex={dex} />
			</Stack>
			<Link href={`/u/${username}`}>/u/{username}</Link>
			<Progress caught={dex.caught} total={dex.total} />
		</Box>
	);
}
