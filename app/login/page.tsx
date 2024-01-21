import Main from "@/components/Main";
import { Button, Link, Stack, TextField, Typography } from "@mui/material";

export default function Login() {
	return (
		<Main size="xs">
			<Stack
				alignItems="center"
				component="form"
				direction="column"
				spacing={3}
			>
				<TextField
					fullWidth
					label="Username"
				/>
				<TextField
					fullWidth
					label="Password"
					type="password"
				/>
				<Button
					fullWidth
					size="large"
					variant="contained"
				>
					{"Let's Go!"}
				</Button>
				<Typography>
					{"Don't have an account yet? "}
					<Link>Register here</Link>!
				</Typography>
			</Stack>
		</Main>
	);
}
