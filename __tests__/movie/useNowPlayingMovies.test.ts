import { Movie } from '@/domain/movie/entities/Movie';
import { FetchNowPlayingMoviesRepository } from '@/domain/movie/repositories/FetchNowPlayingMoviesRepository';
import { useNowPlayingMovies } from '@/domain/movie/usecases/useNowPlayingMovies';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

describe('useNowPlayingMovies', () => {
  it('success', () => {
    // Given
    const repoMock: FetchNowPlayingMoviesRepository = () => {
      return {
        isLoading: false,
        isError: false,
        data: [movie],
      };
    };

    // When
    const { result } = renderHook(() => useNowPlayingMovies(repoMock)());

    // Then
    expect(result.current.data).toStrictEqual([movie]);
  });

  it('loading', () => {
    // Given
    const repoMock: FetchNowPlayingMoviesRepository = () => {
      return {
        isLoading: true,
        isError: false,
        data: [],
      };
    };

    // When
    const { result } = renderHook(() => useNowPlayingMovies(repoMock)());

    // Then
    expect(result.current.isLoading).toBe(true);
  });

  it('error', () => {
    // Given
    const repoMock: FetchNowPlayingMoviesRepository = () => {
      return {
        isLoading: false,
        isError: true,
        data: [],
      };
    };

    // When
    const { result } = renderHook(() => useNowPlayingMovies(repoMock)());

    // Then
    expect(result.current.isError).toBe(true);
  });
});

const movie = Builder<Movie>().build();
