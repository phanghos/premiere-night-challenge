import type { FetchNowPlayingMoviesRepository } from '../repositories/FetchNowPlayingMoviesRepository';

export const useNowPlayingMovies =
  (repository: FetchNowPlayingMoviesRepository) => () =>
    repository();
