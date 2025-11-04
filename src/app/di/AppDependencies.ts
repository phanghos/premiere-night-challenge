import type { FetchNowPlayingMoviesRepository } from '@/domain/movie/repositories/FetchNowPlayingMoviesRepository';
import type { FetchPopularMoviesRepository } from '@/domain/movie/repositories/FetchPopularMoviesRepository';
import type { FetchTopRatedMoviesRepository } from '@/domain/movie/repositories/FetchTopRatedMoviesRepository';
import { AddToWatchlist } from '@/domain/movie/stores/actions/addToWatchlist';
import { IsInWatchlist } from '@/domain/movie/stores/actions/isInWatchlist';
import { RemoveFromWatchlist } from '@/domain/movie/stores/actions/removeFromWatchlist';

export type AppDependencies = {
  fetchNowPlayingMovies: FetchNowPlayingMoviesRepository;
  fetchPopularMovies: FetchPopularMoviesRepository;
  fetchTopRatedMovies: FetchTopRatedMoviesRepository;
  watchlist: {
    addToWatchlist: AddToWatchlist;
    removeFromWatchlist: RemoveFromWatchlist;
    isInWatchlist: IsInWatchlist;
  };
};
