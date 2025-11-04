import { MovieRaw } from '@/core/types/MovieRaw';
import { useFetchMovies } from '@/data/movie/hooks/useFetchMovies';
import {
  QueryObserverLoadingErrorResult,
  QueryObserverPendingResult,
  QueryObserverSuccessResult,
  useQuery,
} from '@tanstack/react-query';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

const mockedUseQuery = jest.mocked(useQuery);

describe('useFetchMovies', () => {
  it('success', () => {
    // Given
    mockedUseQuery.mockReturnValue(
      Builder<QueryObserverSuccessResult>()
        .data({
          results: [movieRaw, movieRaw],
        })
        .build(),
    );

    // When
    const { result } = renderHook(() => useFetchMovies(''));

    // Then
    expect(result.current.data).toBeInstanceOf(Array);
    expect(result.current.data).toHaveLength(2);
  });

  it('loading', () => {
    // Given
    mockedUseQuery.mockReturnValue(
      Builder<QueryObserverPendingResult>().isPending(true).build(),
    );

    // When
    const { result } = renderHook(() => useFetchMovies(''));

    // Then
    expect(result.current.isLoading).toBe(true);
  });

  it('error', () => {
    // Given
    mockedUseQuery.mockReturnValue(
      Builder<QueryObserverLoadingErrorResult>().isError(true).build(),
    );

    // When
    const { result } = renderHook(() => useFetchMovies(''));

    // Then
    expect(result.current.isError).toBe(true);
  });
});

const movieRaw: MovieRaw = {
  id: 1,
  original_title: 'title',
  poster_path: 'poster',
  overview: 'overview',
  genre_ids: [1, 2],
};
