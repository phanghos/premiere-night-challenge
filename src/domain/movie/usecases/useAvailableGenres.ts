import type { FetchAvailableGenresRepository } from '../../genre/repositories/FetchAvailableGenresRepository';

export const useAvailableGenres =
  (repository: FetchAvailableGenresRepository) => () =>
    repository();
