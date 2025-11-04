import type { Genre } from '../../entities/Genre';
import type { GenreStore } from '../genreStore';

export const setGenres =
  (store: GenreStore) =>
  (genres: Genre[]): void => {
    store.setState({ genres });
  };

export type SetGenres = ReturnType<typeof setGenres>;
