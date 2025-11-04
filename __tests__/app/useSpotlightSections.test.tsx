import { AppDependencies } from '@/app/di/AppDependencies';
import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { useSpotlightSections } from '@/app/movie/usecases/useSpotlightSections';
import { Movie } from '@/domain/movie/entities/Movie';
import { SpotlightSection } from '@/domain/movie/entities/SpotlightSection';
import { FetchNowPlayingMoviesRepository } from '@/domain/movie/repositories/FetchNowPlayingMoviesRepository';
import { FetchPopularMoviesRepository } from '@/domain/movie/repositories/FetchPopularMoviesRepository';
import { FetchTopRatedMoviesRepository } from '@/domain/movie/repositories/FetchTopRatedMoviesRepository';
import { useNowPlayingMovies } from '@/domain/movie/usecases/useNowPlayingMovies';
import { usePopularMovies } from '@/domain/movie/usecases/usePopularMovies';
import { useTopRatedMovies } from '@/domain/movie/usecases/useTopRatedMovies';
import { renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

const nowPlaying = useNowPlayingMovies;
const popular = usePopularMovies;
const topRated = useTopRatedMovies;

describe('useSpotlightSections', () => {
  it('success', () => {
    // Given
    const nowPlayingRepoMock: FetchNowPlayingMoviesRepository = () => ({
      isLoading: false,
      isError: false,
      data: [movie],
    });
    const popularRepoMock: FetchPopularMoviesRepository = () => ({
      isLoading: false,
      isError: false,
      data: [movie],
    });
    const topRatedRepoMock: FetchTopRatedMoviesRepository = () => ({
      isLoading: false,
      isError: false,
      data: [movie],
    });
    const expectedSections: SpotlightSection[] = [
      { title: 'Now Playing', data: [movie] },
      { title: 'Popular', data: [movie] },
      { title: 'Top Rated', data: [movie] },
    ];

    // When
    const { result } = renderHook(() => useSpotlightSections(), {
      wrapper: ({ children }) => (
        <DependencyProviderContext.Provider
          value={Builder<AppDependencies>()
            .fetchNowPlayingMovies(nowPlaying(nowPlayingRepoMock))
            .fetchPopularMovies(popular(popularRepoMock))
            .fetchTopRatedMovies(topRated(topRatedRepoMock))
            .build()}
        >
          {children}
        </DependencyProviderContext.Provider>
      ),
    });

    // Then
    expect(result.current).toStrictEqual({
      isLoading: false,
      isError: false,
      sections: expectedSections,
    });
  });

  it('loading', () => {
    // Given
    const nowPlayingRepoMock: FetchNowPlayingMoviesRepository = () => ({
      isLoading: true,
      isError: false,
      data: [],
    });
    const popularRepoMock: FetchPopularMoviesRepository = () => ({
      isLoading: true,
      isError: false,
      data: [],
    });
    const topRatedRepoMock: FetchTopRatedMoviesRepository = () => ({
      isLoading: false,
      isError: false,
      data: [movie],
    });

    // When
    const { result } = renderHook(() => useSpotlightSections(), {
      wrapper: ({ children }) => (
        <DependencyProviderContext.Provider
          value={Builder<AppDependencies>()
            .fetchNowPlayingMovies(nowPlaying(nowPlayingRepoMock))
            .fetchPopularMovies(popular(popularRepoMock))
            .fetchTopRatedMovies(topRated(topRatedRepoMock))
            .build()}
        >
          {children}
        </DependencyProviderContext.Provider>
      ),
    });

    // Then
    expect(result.current).toStrictEqual({
      isLoading: true,
      isError: false,
      sections: [],
    });
  });

  it('error', () => {
    // Given
    const nowPlayingRepoMock: FetchNowPlayingMoviesRepository = () => ({
      isLoading: false,
      isError: true,
      data: [],
    });
    const popularRepoMock: FetchPopularMoviesRepository = () => ({
      isLoading: false,
      isError: true,
      data: [],
    });
    const topRatedRepoMock: FetchTopRatedMoviesRepository = () => ({
      isLoading: false,
      isError: true,
      data: [],
    });

    // When
    const { result } = renderHook(() => useSpotlightSections(), {
      wrapper: ({ children }) => (
        <DependencyProviderContext.Provider
          value={Builder<AppDependencies>()
            .fetchNowPlayingMovies(nowPlaying(nowPlayingRepoMock))
            .fetchPopularMovies(popular(popularRepoMock))
            .fetchTopRatedMovies(topRated(topRatedRepoMock))
            .build()}
        >
          {children}
        </DependencyProviderContext.Provider>
      ),
    });

    // Then
    expect(result.current).toStrictEqual({
      isLoading: false,
      isError: true,
      sections: [],
    });
  });
});

const movie = Builder<Movie>().build();
