import type { FetchPopularMoviesRepository } from '@/domain/movie/repositories/FetchPopularMoviesRepository';
import { useFetchMovies } from '../hooks/useFetchMovies';

export const useFetchPopularMoviesRepository: FetchPopularMoviesRepository =
  () => useFetchMovies('/movie/popular?language=en-US&page=1');
