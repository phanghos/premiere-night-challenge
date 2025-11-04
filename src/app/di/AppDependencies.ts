import type { FetchNowPlayingMoviesRepository } from '@/domain/movie/repositories/FetchNowPlayingMoviesRepository';
import type { FetchPopularMoviesRepository } from '@/domain/movie/repositories/FetchPopularMoviesRepository';
import type { FetchTopRatedMoviesRepository } from '@/domain/movie/repositories/FetchTopRatedMoviesRepository';

export type AppDependencies = {
  fetchNowPlayingMovies: FetchNowPlayingMoviesRepository;
  fetchPopularMovies: FetchPopularMoviesRepository;
  fetchTopRatedMovies: FetchTopRatedMoviesRepository;
};
