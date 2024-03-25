'use client';

import { createContext, useContext, useState } from 'react';

// import type { Pokemon } from '@/types/pokemon';
import type { CapturePokemon } from '@/types/captures';

export interface SelectedPokemonContextType {
	selectedPokemon: CapturePokemon | null;
	setSelectedPokemon: (pokemon: CapturePokemon) => void;
}

export const SelectedPokemonContext = createContext<SelectedPokemonContextType | null>(null);

export function SelectedPokemonProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	const [selectedPokemon, setSelectedPokemon] = useState<CapturePokemon | null>(null);
	return (
		<SelectedPokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>{children}</SelectedPokemonContext.Provider>
	);
}

export function useSelectedPokemonContext() {
	return useContext(SelectedPokemonContext);
}
