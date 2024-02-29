import type { User } from '@/types/users';
import { cache } from 'react';

export const getUser = cache(async (username: string) => {
	const res = await fetch(`https://pokedextracker.com/api/users/${username}`);
	// return await res.json().then((data: User) => {
	// 	return data;
	// });
	const user = await res.json() as User;
	return user;
});
