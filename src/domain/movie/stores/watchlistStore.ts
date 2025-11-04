import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { Movie } from '../entities/Movie';

type WatchlistStoreState = {
  watchlist: Record<number, Movie>;
};

export const useWatchlistStore = create<WatchlistStoreState>()(
  persist<WatchlistStoreState>(
    () => ({
      watchlist: {},
    }),
    {
      name: 'watchlist-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export type WatchlistStore = typeof useWatchlistStore;
