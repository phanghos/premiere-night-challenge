import { GenreRaw } from '@/data/genre/dtos/GenreRaw';
import type { FetchAvailableGenresRepository } from '@/domain/genre/repositories/FetchAvailableGenresRepository';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { genresAdapter } from '../adapters/genresAdapter';

export const useFetchAvailableGenresRepository: FetchAvailableGenresRepository =
  () => {
    const { isPending, data, isError } = useQuery<{ genres: GenreRaw[] }>({
      queryKey: ['/genre/movie/list?language=en'],
    });
    const genres = useMemo(() => genresAdapter(data?.genres || []), [data]);

    return {
      isLoading: isPending,
      data: genres,
      isError,
    };
  };
