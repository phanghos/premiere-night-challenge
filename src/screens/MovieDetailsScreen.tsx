import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import type { RootStackParamList } from '@/app/navigation/RootStackParamList';
import { WatchlistButton } from '@/components/movieDetails/WatchlistButton';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { HeaderBackButton } from '@react-navigation/elements';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
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
  } = useRoute<RouteProp<RootStackParamList, 'MovieDetails'>>();
  const genres = getGenresById(movie.genreIds);
  const shouldRenderGenres = !!genres.length;

  return (
    <View style={styles.container}>
      <ParallaxScrollView
        headerBackgroundColor={'#000'}
        headerImage={
          <Image
            source={{ uri: movie.posterPath }}
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT / 2.5,
            }}
            resizeMode="stretch"
          />
        }
      >
        <View>
          <Text style={styles.title}>{movie.originalTitle}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>

          <Text style={styles.label}>Release Date</Text>
          <Text style={styles.labelContent}>{movie.releaseDate}</Text>

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
    fontWeight: 500,
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
    fontWeight: 700,
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
