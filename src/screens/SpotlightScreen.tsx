import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { useSpotlightSections } from '@/app/movie/usecases/useSpotlightSections';
import { ErrorPlaceholder } from '@/components/ErrorPlaceholder';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { MoviesCarouselList } from '@/components/movie/MoviesCarouselList';
import { moviesAdapter } from '@/data/movie/adapters/moviesAdapter';
import { Movie } from '@/domain/movie/entities/Movie';
import { SpotlightSection } from '@/domain/movie/entities/SpotlightSection';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { mockDataNowPlaying } from '@/mockDataNowPlaying';
import { mockDataPopular } from '@/mockDataPopular';
import { mockDataTopRated } from '@/mockDataTopRated';
import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_SECTIONS: SpotlightSection[] = [
  {
    title: 'Now Playing',
    data: moviesAdapter(mockDataNowPlaying.results),
  },
  {
    title: 'Popular',
    data: moviesAdapter(mockDataPopular.results),
  },
  {
    title: 'Top Rated',
    data: moviesAdapter(mockDataTopRated.results),
  },
] as const;

export const SpotlightScreen = () => {
  const {
    watchlist: { addToWatchlist, removeFromWatchlist, isInWatchlist },
  } = useContext(DependencyProviderContext);
  const { isLoading, sections, isError } = useSpotlightSections();
  const { navigate } = useNavigation();
  useWatchlistStore(s => s.watchlist);

  const onMoviePress = (movie: Movie) => {
    navigate('MovieDetails', { movie });
  };

  const onHeartPress = (movie: Movie) => {
    if (isInWatchlist(movie.id)) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist(movie);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <FullScreenSpinner />}
      {isError && (
        <ErrorPlaceholder
          title="Oops! Something went wrong..."
          description="Please try again."
        />
      )}
      <MoviesCarouselList
        sections={sections}
        onMoviePress={onMoviePress}
        onHeartPress={onHeartPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
