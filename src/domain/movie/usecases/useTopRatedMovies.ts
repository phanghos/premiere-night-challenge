import { ApiResult } from '@/core/types/ApiResult';
import { MovieRaw } from '@/core/types/MovieRaw';
import { QueryResult } from '@/core/types/QueryResult';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { moviesAdapter } from '../adapters/moviesAdapter';
import { Movie } from '../entities/Movie';

export const useTopRatedMovies = (): QueryResult<Movie[]> => {
  const { isPending, data, isError } = useQuery<ApiResult<MovieRaw[]>>({
    queryKey: ['/movie/top_rated?language=en-US&page=1'],
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
