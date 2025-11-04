import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { WatchlistButton } from '@/components/movieDetails/WatchlistButton';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import type { Movie } from '@/domain/movie/entities/Movie';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

export const MovieDetailsScreen = () => {
  const {
    genre: { getGenresById },
  } = useContext(DependencyProviderContext);
  useWatchlistStore(s => s.watchlist);
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();
  const {
    params: { movie },
  } = useRoute();
  const movieTyped: Movie = movie;
  const genres = getGenresById(movieTyped.genreIds);
  const shouldRenderGenres = !!genres.length;

  return (
    <View style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={'#000'}
        headerImage={
          <Image
            source={{ uri: movieTyped.posterPath }}
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT / 2.5,
            }}
            resizeMode="stretch"
          />
        }
      >
        <View>
          <Text style={styles.title}>{movieTyped.originalTitle}</Text>
          <Text style={styles.overview}>{movieTyped.overview}</Text>

          <Text style={styles.label}>Release Date</Text>
          <Text style={styles.labelContent}>December 9, 2016</Text>

          {shouldRenderGenres && (
            <>
              <Text style={styles.label}>Genres</Text>
              <Text style={styles.labelContent}>{genres.join(', ')}</Text>
            </>
          )}
        </View>
      </ParallaxScrollView>
      <View style={styles.watchlistButton}>
        <WatchlistButton movie={movie} />
      </View>
      <HeaderBackButton
        onPress={goBack}
        style={{
          position: 'absolute',
          top: insets.top,
          alignSelf: 'flex-start',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    color: '#fff',
    marginBottom: 16,
  },
  overview: {
    fontSize: 16,
    fontWeight: 300,
    color: '#fff',
    marginBottom: 16,
  },
  label: {
    fontWeight: 600,
    color: '#fff',
    marginBottom: 4,
  },
  labelContent: {
    color: '#fff',
    marginBottom: 16,
  },
  watchlistButton: {
    margin: 16,
  },
});
