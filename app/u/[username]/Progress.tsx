'use client';

import { Box, LinearProgress, Stack, Typography, useTheme } from '@mui/material';

export default function Progress({
	caught, total,
}: {
	caught: number,
	total: number
}) {
  const percent = 100 * caught / total;
	const theme = useTheme();
	const mode = theme.palette.mode;

	return (
		<Box sx={{ position: 'relative', mt: 1 }}>
			<Stack
				alignItems='center'
				justifyContent='center'
				sx={{
					position: 'absolute', zIndex: 10,
					height: '100%', width: '100%',
				}}
			>
				<Typography
					sx={{
						// color: (theme) => theme.palette.secondary.contrastText,
						filter: mode === 'dark' ? 'drop-shadow(2px 2px 3px black)' : 'inherit',
					}}
					variant='overline'
				>
					<b>{percent.toFixed(1)}</b>% done! (<b>{caught}</b> caught, <b>{total - caught}</b> to go)
				</Typography>
			</Stack>
			<LinearProgress
				color='secondary'
				sx={{
					height: 28,
					borderRadius: (theme) => theme.shape.borderRadius,
					filter: mode === 'dark' ? 'opacity(0.75)' : 'inherit',
				}}
				value={percent}
				variant='determinate'
			/>
		</Box>
	);
}
