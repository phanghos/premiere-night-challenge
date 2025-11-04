import type { WatchlistStore } from '../watchlistStore';

export const isWatchlistEmpty = (store: WatchlistStore) => (): boolean => {
  return !Object.values(store.getState().watchlist).length;
};

export type IsWatchlistEmpty = ReturnType<typeof isWatchlistEmpty>;
