import type { ApiResult } from '@/core/types/ApiResult';
import type { MovieRaw } from '@/core/types/MovieRaw';
import type { QueryResult } from '@/core/types/QueryResult';
import { moviesAdapter } from '@/data/movie/adapters/moviesAdapter';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import type { Movie } from '../entities/Movie';
import type { FetchTopRatedMoviesRepository } from '../repositories/FetchTopRatedMoviesRepository';

export const useTopRatedMovies = (): QueryResult<Movie[]> => {
  const { isPending, data, isError } = useQuery<ApiResult<MovieRaw[]>>({
    queryKey: ['/movie/top_rated?language=en-US&page=1'],
  });
  const movies = useMemo(() => moviesAdapter(data?.results || []), [data]);

  return {
    isLoading: isPending,
    data: movies,
    isError,
  };
};

export const useTopRatedMovies2 =
  (repository: FetchTopRatedMoviesRepository) => () =>
    repository();
