import type { FetchNowPlayingMoviesRepository } from '@/domain/movie/repositories/FetchNowPlayingMoviesRepository';
import { useFetchMovies } from '../hooks/useFetchMovies';

export const useFetchNowPlayingMoviesRepository: FetchNowPlayingMoviesRepository =
  () => useFetchMovies('/movie/now_playing?language=en-US&page=1');
