import type { ApiResult } from '@/core/types/ApiResult';
import type { MovieRaw } from '@/core/types/MovieRaw';
import type { QueryResult } from '@/core/types/QueryResult';
import { moviesAdapter } from '@/data/movie/adapters/moviesAdapter';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import type { Movie } from '../entities/Movie';
import type { FetchPopularMoviesRepository } from '../repositories/FetchPopularMoviesRepository';

export const usePopularMovies = (): QueryResult<Movie[]> => {
  const { isPending, data, isError } = useQuery<ApiResult<MovieRaw[]>>({
    queryKey: ['/movie/popular?language=en-US&page=1'],
  });
  const movies = useMemo(() => {
    return moviesAdapter(data?.results || []);
  }, [data]);

  return {
    isLoading: isPending,
    data: movies,
    isError,
  };
};

export const usePopularMovies2 =
  (repository: FetchPopularMoviesRepository) => () =>
    repository();
