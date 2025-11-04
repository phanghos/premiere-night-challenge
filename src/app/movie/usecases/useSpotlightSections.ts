import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import type { Movie } from '@/domain/movie/entities/Movie';
import type { SectionType } from '@/domain/movie/entities/SectionType';
import type { SpotlightSection } from '@/domain/movie/entities/SpotlightSection';
import { useContext, useMemo } from 'react';

const initSpotlightSection = (
  title: SectionType,
  data: Movie[],
): SpotlightSection => ({
  title,
  data,
});

export const useSpotlightSections = () => {
  const { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies } =
    useContext(DependencyProviderContext);

  const {
    isLoading: isPendingNowPlaying,
    data: nowPlayingData,
    isError: isErrorNowPlaying,
  } = fetchNowPlayingMovies();

  const {
    isLoading: isPendingPopular,
    data: popularData,
    isError: isErrorPopular,
  } = fetchPopularMovies();

  const {
    isLoading: isPendingTopRated,
    data: topRatedData,
    isError: isErrorTopRated,
  } = fetchTopRatedMovies();

  const isLoading =
    isPendingNowPlaying || isPendingPopular || isPendingTopRated;

  const isError = isErrorNowPlaying && isErrorPopular && isErrorTopRated;

  const sections = useMemo(
    () =>
      [
        initSpotlightSection('Now Playing', nowPlayingData),
        initSpotlightSection('Popular', popularData),
        initSpotlightSection('Top Rated', topRatedData),
      ].filter(it => !!it.data.length),
    [nowPlayingData, popularData, topRatedData],
  );

  return {
    isLoading,
    isError,
    sections: isLoading ? [] : sections,
  };
};
