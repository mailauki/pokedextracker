import type { Metadata } from 'next';

import Main from '@/components/Main';
import DexPreview from './DexPreview';

import { Typography } from '@mui/material';

import type { Dex } from '@/types/dexes';

interface Props {
  params: { username: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { username } = params;

  return {
    title: `${username}'s Profile` || 'Profile',
  };
}

export default async function Profile({
	params,
}: {
	params: {
		username: string,
	}
}) {
	const { username } = params;
	const res = await fetch(`https://pokedextracker.com/api/users/${username}`);
	const user = await res.json();

	return (
		<Main size="md">
			<Typography variant="h3">{username}{'\'s Profile'}</Typography>
			<Typography
				sx={{
					'& span': {
						color: user.friend_code_switch ? 'inherit' : 'text.disabled',
						pointerEvents: 'none',
						textDecoration: 'none',
					},
				}}
			>
				<b>3DS FC</b>:{' '}
				<span>{user.friend_code_3ds || 'XXXX-XXXX-XXXX'}</span>
			</Typography>
			<Typography
				sx={{
					'& span': {
						color: user.friend_code_switch ? 'inherit' : 'text.disabled',
						pointerEvents: 'none',
						textDecoration: 'none',
					},
				}}
			>
				<b>Switch FC</b>:{' '}
				<span>{user.friend_code_switch || 'SW-XXXX-XXXX-XXXX'}</span>
			</Typography>
			{/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
			{user.dexes.map((dex: Dex) => <DexPreview dex={dex} key={dex.id} />)}
		</Main>
	);
}
