import type { WatchlistStore } from '../watchlistStore';

export const isInWatchlist =
  (store: WatchlistStore) =>
  (movieId: number): boolean => {
    const { watchlist } = store.getState();
    return !!watchlist[movieId];
  };

export type IsInWatchlist = ReturnType<typeof isInWatchlist>;
