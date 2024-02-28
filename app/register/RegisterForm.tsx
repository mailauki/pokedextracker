'use client';

import { useState } from 'react';

import { Container, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

import type { MouseEvent } from 'react';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

	return (
		<Container
			alignItems='center'
			component={Stack}
			direction='column'
			maxWidth='xs'
			spacing={3}
			width='48%'
		>
			<Typography variant='h5'>Account Info</Typography>
			<TextField
				fullWidth
				label='Username'
				required
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
				required
				type={showPassword ? 'text' : 'password'}
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
				label='Confirm Password'
				required
				type={showPassword ? 'text' : 'password'}
			/>
			<TextField
				fullWidth
				label='3DS Friend Code'
				placeholder='XXXX-XXXX-XXXX'
			/>
			<TextField
				fullWidth
				label='Switch Friend Code'
				placeholder='SW-XXXX-XXXX-XXXX'
			/>
		</Container>
	);
}
