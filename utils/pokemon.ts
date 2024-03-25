import { padding } from './formatting';

import type { Dex } from '@/types/dexes';

interface Pokemon {
  national_id: number;
  form: string | null;
}

export function iconClass({ national_id: nationalId, form }: Pokemon, dex: Dex) {
	const shiny = dex.shiny ? 'color-shiny' : '';
	const forms = form ? `form-${form}` : '';
	const family = dex.dex_type.game_family_id ? `game-family-${dex.dex_type.game_family_id}` : '';

  return `pkicon pkicon-${padding(nationalId, 3)} ${shiny} ${forms} ${family}`;
}
