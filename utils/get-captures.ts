import type { Capture } from '@/types/captures';
import { cache } from 'react';

export const getCaptures = cache(async (username: string, slug: string) => {
	const res = await fetch(`https://pokedextracker.com/api/users/${username}/dexes/${slug}/captures`);
	const captures = await res.json() as Capture[];
	return captures;
});
