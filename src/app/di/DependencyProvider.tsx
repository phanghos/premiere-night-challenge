import { useFetchAvailableGenresRepository } from '@/data/genre/repositories/useFetchAvailableGenresRepository';
import { useFetchNowPlayingMoviesRepository } from '@/data/movie/repositories/useFetchNowPlayingMoviesRepository';
import { useFetchPopularMoviesRepository } from '@/data/movie/repositories/useFetchPopularMoviesRepository';
import { useFetchTopRatedMoviesRepository } from '@/data/movie/repositories/useFetchTopRatedMoviesRepository';
import { getGenresByIdsFromStore } from '@/domain/genre/stores/actions/getGenresByIdsFromStore';
import { setGenres } from '@/domain/genre/stores/actions/setGenres';
import { useGenreStore } from '@/domain/genre/stores/genreStore';
import { addToWatchlist } from '@/domain/movie/stores/actions/addToWatchlist';
import { isInWatchlist } from '@/domain/movie/stores/actions/isInWatchlist';
import { isWatchlistEmpty } from '@/domain/movie/stores/actions/IsWatchlistEmpty';
import { removeFromWatchlist } from '@/domain/movie/stores/actions/removeFromWatchlist';
import { resetWatchlist } from '@/domain/movie/stores/actions/resetWatchlist';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { useAvailableGenres } from '@/domain/movie/usecases/useAvailableGenres';
import { useNowPlayingMovies } from '@/domain/movie/usecases/useNowPlayingMovies';
import { usePopularMovies } from '@/domain/movie/usecases/usePopularMovies';
import { useTopRatedMovies } from '@/domain/movie/usecases/useTopRatedMovies';
import React from 'react';
import type { AppDependencies } from './AppDependencies';
import { DependencyProviderContext } from './DependencyProviderContext';

type DependencyProviderProps = {
  children: React.ReactNode;
};

export const DependencyProvider = ({ children }: DependencyProviderProps) => {
  const appDependencies: AppDependencies = {
    fetchNowPlayingMovies: useNowPlayingMovies(
      useFetchNowPlayingMoviesRepository,
    ),
    fetchPopularMovies: usePopularMovies(useFetchPopularMoviesRepository),
    fetchTopRatedMovies: useTopRatedMovies(useFetchTopRatedMoviesRepository),
    genre: {
      fetchAvailableGenres: useAvailableGenres(
        useFetchAvailableGenresRepository,
      ),
      getGenresById: getGenresByIdsFromStore(useGenreStore),
      setGenres: setGenres(useGenreStore),
    },
    watchlist: {
      addToWatchlist: addToWatchlist(useWatchlistStore),
      removeFromWatchlist: removeFromWatchlist(useWatchlistStore),
      resetWatchlist: resetWatchlist(useWatchlistStore),
      isInWatchlist: isInWatchlist(useWatchlistStore),
      isWatchlistEmpty: isWatchlistEmpty(useWatchlistStore),
    },
  };

  return (
    <DependencyProviderContext.Provider value={appDependencies}>
      {children}
    </DependencyProviderContext.Provider>
  );
};
