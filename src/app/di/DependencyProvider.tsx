import { useFetchNowPlayingMoviesRepository } from '@/data/movie/repositories/useFetchNowPlayingMoviesRepository';
import { useFetchPopularMoviesRepository } from '@/data/movie/repositories/useFetchPopularMoviesRepository';
import { useFetchTopRatedMoviesRepository } from '@/data/movie/repositories/useFetchTopRatedMoviesRepository';
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
  };

  return (
    <DependencyProviderContext.Provider value={appDependencies}>
      {children}
    </DependencyProviderContext.Provider>
  );
};
