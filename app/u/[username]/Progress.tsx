"use client";

import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export default function Progress({
	caught, total,
}: {
	caught: number,
	total: number
}) {
  const percent = 100 * caught / total;

	return (
		<Box sx={{ position: "relative" }}>
			<Stack
				alignItems="center"
				justifyContent="center"
				sx={{
					position: "absolute", zIndex: 10,
					height: "100%", width: "100%",
				}}
			>
				<Typography
					sx={{
						// color: (theme) => theme.palette.secondary.contrastText,
					}}
					variant="overline"
				>
					<b>{percent.toFixed(1)}</b>% done! (<b>{caught}</b> caught, <b>{total - caught}</b> to go)
				</Typography>
			</Stack>
			<LinearProgress
				color="secondary"
				sx={{
					height: 28,
					borderRadius: (theme) => theme.shape.borderRadius,
				}}
				value={percent}
				variant="determinate"
			/>
		</Box>
	);
}
