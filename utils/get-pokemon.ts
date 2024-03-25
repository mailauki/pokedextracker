// import type { Capture } from '@/types/captures';
import type { Pokemon } from '@/types/pokemon';
import { cache } from 'react';

export const getPokemon = cache(async (pokemon: Pokemon) => {
	const res = await fetch(`https://pokedextracker.com/api/pokemon/${pokemon.national_id}?dex_type=${pokemon.dex_number}`);
	const selected = await res.json();
	return selected;
});
