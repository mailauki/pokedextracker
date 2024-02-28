import type { Metadata } from 'next';

import Main from '@/components/Main';
import DexForm from './DexForm';
import RegisterForm from './RegisterForm';

import { Button, Link, Stack, Toolbar, Typography } from '@mui/material';

export const metadata: Metadata = {
  title: 'Register',
};

export default function Register() {
	return (
		<Main size='md'>
			<Toolbar sx={{ mt: 5 }} />

			<Typography variant='h3'>Register</Typography>

			<Stack
				spacing={3}
				sx={{ mt: 2 }}
			>
				<Stack
					component='form'
					direction={{ xs: 'column', sm: 'row' }}
					spacing={3}
				>
					<RegisterForm />

					<DexForm />
				</Stack>

				<Button
					fullWidth
					size='large'
					variant='contained'
				>
					{'Let\'s Go!'}
				</Button>
			</Stack>

			<Typography sx={{ mt: 3 }} textAlign='center'>
				{'Already have an account? '}
				<Link href='/login'>Login here</Link>!
			</Typography>
		</Main>
	);
}
