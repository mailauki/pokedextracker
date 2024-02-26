'use client';

import { useState } from 'react';

import { Button, IconButton, InputAdornment, Stack, TextField } from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

import type { MouseEvent } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

	return (
		<Stack
			alignItems='center'
			component='form'
			direction='column'
			spacing={3}
		>
			<TextField
				fullWidth
				label='Username'
			/>
			<TextField
				InputProps={{
					endAdornment: <InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							edge='end'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>,
				}}
				fullWidth
				label='Password'
				type={showPassword ? 'text' : 'password'}
			/>
			<Button
				fullWidth
				size='large'
				variant='contained'
			>
				{'Let\'s Go!'}
			</Button>
		</Stack>
	);
}
