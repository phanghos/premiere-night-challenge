import type { GenreRaw } from '@/data/genre/dtos/GenreRaw';
import type { Genre } from '@/domain/genre/entities/Genre';

export const genresAdapter = (genresRaw: GenreRaw[]): Genre[] =>
  genresRaw.map(it => ({ ...it }));

export type GenresAdapter = typeof genresAdapter;
