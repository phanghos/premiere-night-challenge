import type { Genre } from '../entities/Genre';

export const getGenresByIds = (ids: number[], genres: Genre[]): string[] =>
  ids
    .map(it => genres.find(itt => it === itt.id)?.name)
    .filter(Boolean) as string[];
