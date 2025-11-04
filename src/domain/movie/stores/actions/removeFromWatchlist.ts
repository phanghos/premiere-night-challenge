import type { WatchlistStore } from '../watchlistStore';

export const removeFromWatchlist =
  (store: WatchlistStore) =>
  (movieId: number): void => {
    const { watchlist } = store.getState();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [movieId]: _, ...rest } = watchlist;
    store.setState({ watchlist: rest });
  };

export type RemoveFromWatchlist = ReturnType<typeof removeFromWatchlist>;
