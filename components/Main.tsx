import { Container, Toolbar } from "@mui/material";
import type { Breakpoint } from "@mui/material";

export default function Main({
  children, size,
}: Readonly<{
  children: React.ReactNode;
	size: false | Breakpoint | undefined;
}>) {
	return (
		<Container component="main" maxWidth={size}>
			<Toolbar sx={{ mb: 3 }} />
			{children}
			<Toolbar />
		</Container>
	);
}
