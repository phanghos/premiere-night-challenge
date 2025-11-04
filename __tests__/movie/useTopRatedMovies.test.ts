import { Movie } from '@/domain/movie/entities/Movie';
import { FetchTopRatedMoviesRepository } from '@/domain/movie/repositories/FetchTopRatedMoviesRepository';
import { useTopRatedMovies } from '@/domain/movie/usecases/useTopRatedMovies';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

describe('useTopRatedMovies', () => {
  it('success', () => {
    // Given
    const repoMock: FetchTopRatedMoviesRepository = () => {
      return {
        isLoading: false,
        isError: false,
        data: [movie],
      };
    };

    // When
    const { result } = renderHook(() => useTopRatedMovies(repoMock)());

    // Then
    expect(result.current.data).toStrictEqual([movie]);
  });

  it('loading', () => {
    // Given
    const repoMock: FetchTopRatedMoviesRepository = () => {
      return {
        isLoading: true,
        isError: false,
        data: [],
      };
    };

    // When
    const { result } = renderHook(() => useTopRatedMovies(repoMock)());

    // Then
    expect(result.current.isLoading).toBe(true);
  });

  it('error', () => {
    // Given
    const repoMock: FetchTopRatedMoviesRepository = () => {
      return {
        isLoading: false,
        isError: true,
        data: [],
      };
    };

    // When
    const { result } = renderHook(() => useTopRatedMovies(repoMock)());

    // Then
    expect(result.current.isError).toBe(true);
  });
});

const movie = Builder<Movie>().build();
