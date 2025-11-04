import { GenreRaw } from '@/core/types/GenreRaw';
import { Genre } from '@/domain/genre/entities/Genre';

export const genresAdapter = (genresRaw: GenreRaw[]): Genre[] =>
  genresRaw.map(it => ({ ...it }));

export type GenresAdapter = typeof genresAdapter;
