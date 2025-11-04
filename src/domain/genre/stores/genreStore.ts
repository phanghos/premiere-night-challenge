import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { Genre } from '../entities/Genre';

type GenreStoreState = {
  genres: Genre[];
};

export const useGenreStore = create<GenreStoreState>()(
  persist<GenreStoreState>(
    () => ({
      genres: [],
    }),
    {
      name: 'genre-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export type GenreStore = typeof useGenreStore;
