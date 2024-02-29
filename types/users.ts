import type { Dex } from './dexes';

export interface User {
  id: number;
  username: string;
  friend_code_3ds: string | null;
  friend_code_switch: string | null;
  dexes: Dex[];
  donated: boolean;
  date_created: string;
  date_modified: string;
}

export interface Session {
  id: number;
  username: string;
  friend_code_3ds: string | null;
  friend_code_switch: string | null;
  date_created: string;
  date_modified: string;
  token: string;
}

export interface CreateUserPayload {
  username: string;
  password: string;
  friend_code_3ds?: string;
  friend_code_switch?: string;
  referrer?: string;
  title: string;
  slug: string;
  shiny: boolean;
  game: string;
  dex_type: number;
}
