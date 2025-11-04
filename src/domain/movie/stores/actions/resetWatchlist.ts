import type { WatchlistStore } from '../watchlistStore';

export const resetWatchlist = (store: WatchlistStore) => (): void => {
  store.setState({ watchlist: {} });
};

export type ResetWatchlist = ReturnType<typeof resetWatchlist>;
