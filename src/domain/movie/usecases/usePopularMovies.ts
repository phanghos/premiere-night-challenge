import type { FetchPopularMoviesRepository } from '../repositories/FetchPopularMoviesRepository';

export const usePopularMovies =
  (repository: FetchPopularMoviesRepository) => () =>
    repository();
