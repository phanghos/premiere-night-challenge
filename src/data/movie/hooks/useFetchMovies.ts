import type { ApiResult } from '@/core/types/ApiResult';
import type { QueryResult } from '@/core/types/QueryResult';
import type { MovieRaw } from '@/data/movie/dtos/MovieRaw';
import type { Movie } from '@/domain/movie/entities/Movie';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { moviesAdapter } from '../adapters/moviesAdapter';

export const useFetchMovies = (query: string): QueryResult<Movie[]> => {
  const { isPending, data, isError } = useQuery<ApiResult<MovieRaw[]>>({
    queryKey: [query],
  });
  const movies = useMemo(() => moviesAdapter(data?.results || []), [data]);

  return {
    isLoading: isPending,
    data: movies,
    isError,
  };
};
