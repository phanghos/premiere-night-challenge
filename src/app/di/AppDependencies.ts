import type { FetchNowPlayingMoviesRepository } from '@/domain/movie/repositories/FetchNowPlayingMoviesRepository';
import type { FetchPopularMoviesRepository } from '@/domain/movie/repositories/FetchPopularMoviesRepository';
import type { FetchTopRatedMoviesRepository } from '@/domain/movie/repositories/FetchTopRatedMoviesRepository';
import type { AddToWatchlist } from '@/domain/movie/stores/actions/addToWatchlist';
import type { IsInWatchlist } from '@/domain/movie/stores/actions/isInWatchlist';
import type { IsWatchlistEmpty } from '@/domain/movie/stores/actions/IsWatchlistEmpty';
import type { RemoveFromWatchlist } from '@/domain/movie/stores/actions/removeFromWatchlist';
import type { ResetWatchlist } from '@/domain/movie/stores/actions/resetWatchlist';

export type AppDependencies = {
  fetchNowPlayingMovies: FetchNowPlayingMoviesRepository;
  fetchPopularMovies: FetchPopularMoviesRepository;
  fetchTopRatedMovies: FetchTopRatedMoviesRepository;
  watchlist: {
    addToWatchlist: AddToWatchlist;
    removeFromWatchlist: RemoveFromWatchlist;
    resetWatchlist: ResetWatchlist;
    isInWatchlist: IsInWatchlist;
    isWatchlistEmpty: IsWatchlistEmpty;
  };
};
