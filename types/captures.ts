import type { GameFamily } from "./games";
import type { Pokemon } from "./pokemon";

export interface Capture {
  dex_id: number;
  pokemon: Pokemon;
  captured: boolean;
}

export interface CapturePokemon {
  id: number;
  national_id: number;
  name: string;
  game_family: GameFamily;
  form: string | null;
  box: string | null;
  dex_number: number;
}
