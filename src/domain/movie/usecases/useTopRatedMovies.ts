import type { FetchTopRatedMoviesRepository } from '../repositories/FetchTopRatedMoviesRepository';

export const useTopRatedMovies =
  (repository: FetchTopRatedMoviesRepository) => () =>
    repository();
