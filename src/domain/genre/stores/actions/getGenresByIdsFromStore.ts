import { getGenresByIds } from '../../utils/getGenresById';
import type { GenreStore } from '../genreStore';

export const getGenresByIdsFromStore =
  (store: GenreStore) =>
  (ids: number[]): string[] => {
    const { genres } = store.getState();
    return getGenresByIds(ids, genres);
  };

export type GetGenresByIdFromStore = ReturnType<typeof getGenresByIdsFromStore>;
