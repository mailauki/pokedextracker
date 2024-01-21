import { AppBar, Button, Link, Toolbar } from "@mui/material";

export default function Nav() {
	return (
		<AppBar>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				{/* <Typography variant="h6">Pokédex Tracker</Typography> */}
				<Link
					color="inherit"
					href="/"
					sx={{ cursor: "pointer" }}
					underline="none"
					variant="h6"
				>
					Pokédex Tracker
				</Link>
        <Button
					color="inherit"
					component="a"
					href="/login"
				>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
}
