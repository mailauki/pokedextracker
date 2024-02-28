import type { Metadata } from 'next';

import Main from '@/components/Main';
import LoginForm from './LoginForm';

import { Link, Toolbar, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Login() {
	return (
		<Main size='xs'>
			<Toolbar sx={{ mt: 5 }} />

			<Typography variant='h3'>Login</Typography>

			<LoginForm />

			<Typography sx={{ mt: 3 }} textAlign='center'>
				{'Don\'t have an account yet? '}
				<Link href='/register'>Register here</Link>!
			</Typography>
		</Main>
	);
}
