import type { FetchTopRatedMoviesRepository } from '@/domain/movie/repositories/FetchTopRatedMoviesRepository';
import { useFetchMovies } from '../hooks/useFetchMovies';

export const useFetchTopRatedMoviesRepository: FetchTopRatedMoviesRepository =
  () => useFetchMovies('/movie/top_rated?language=en-US&page=1');
