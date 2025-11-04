import type { FetchAvailableGenresRepository } from '../repositories/FetchAvailableGenresRepository';

export const useAvailableGenres =
  (repository: FetchAvailableGenresRepository) => () =>
    repository();
