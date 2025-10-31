import { Movie } from '@/domain/movie/entities/Movie';
import { SectionType } from '@/domain/movie/entities/SectionType';
import { SpotlightSection } from '@/domain/movie/entities/SpotlightSection';
import { useNowPlayingMovies } from '@/domain/movie/usecases/useNowPlayingMovies';
import { usePopularMovies } from '@/domain/movie/usecases/usePopularMovies';
import { useTopRatedMovies } from '@/domain/movie/usecases/useTopRatedMovies';
import { useMemo } from 'react';

const initSpotlightSection = (
  title: SectionType,
  data: Movie[],
): SpotlightSection => ({
  title,
  data,
});

export const useSpotlightSections = () => {
  const {
    isLoading: isPendingNowPlaying,
    data: nowPlayingData,
    isError: isErrorNowPlaying,
  } = useNowPlayingMovies();

  const {
    isLoading: isPendingPopular,
    data: popularData,
    isError: isErrorPopular,
  } = usePopularMovies();

  const {
    isLoading: isPendingTopRated,
    data: topRatedData,
    isError: isErrorTopRated,
  } = useTopRatedMovies();

  const isLoading =
    isPendingNowPlaying && isPendingPopular && isPendingTopRated;

  const isError = isErrorNowPlaying && isErrorPopular && isErrorTopRated;

  const sections = useMemo(() => {
    return [
      initSpotlightSection('Now Playing', nowPlayingData),
      initSpotlightSection('Popular', popularData),
      initSpotlightSection('Top Rated', topRatedData),
    ].filter(it => !!it.data.length);
  }, [nowPlayingData, popularData, topRatedData]);

  return {
    isLoading,
    isError,
    sections,
  };
};
