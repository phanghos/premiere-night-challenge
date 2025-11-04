import { Movie } from '@/domain/movie/entities/Movie';
import { FetchPopularMoviesRepository } from '@/domain/movie/repositories/FetchPopularMoviesRepository';
import { usePopularMovies } from '@/domain/movie/usecases/usePopularMovies';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

describe('usePopularMovies', () => {
  it('success', () => {
    // Given
    const repoMock: FetchPopularMoviesRepository = () => {
      return {
        isLoading: false,
        isError: false,
        data: [movie],
      };
    };

    // When
    const { result } = renderHook(() => usePopularMovies(repoMock)());

    // Then
    expect(result.current.data).toStrictEqual([movie]);
  });

  it('loading', () => {
    // Given
    const repoMock: FetchPopularMoviesRepository = () => {
      return {
        isLoading: true,
        isError: false,
        data: [],
      };
    };

    // When
    const { result } = renderHook(() => usePopularMovies(repoMock)());

    // Then
    expect(result.current.isLoading).toBe(true);
  });

  it('error', () => {
    // Given
    const repoMock: FetchPopularMoviesRepository = () => {
      return {
        isLoading: false,
        isError: true,
        data: [],
      };
    };

    // When
    const { result } = renderHook(() => usePopularMovies(repoMock)());

    // Then
    expect(result.current.isError).toBe(true);
  });
});

const movie = Builder<Movie>().build();
