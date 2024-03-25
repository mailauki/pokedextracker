// import { useState } from 'react';

import type { CapturePokemon } from '@/types/captures';
// import type { Pokemon } from '@/types/pokemon';

// import { useContext } from 'react';
// import type { SelectedPokemonContextType } from './context';
// import { SelectedPokemonContext } from './context';

// import { useSelectedPokemonContext } from './context';

export function handleCapturePokemon(pokemon: { name: any; }) {
	alert(pokemon.name);
	// const [captured, setCaptured] = useState();
}

export const handleSelectPokemon = (pokemon: CapturePokemon) => {
	alert(pokemon.name);
};

