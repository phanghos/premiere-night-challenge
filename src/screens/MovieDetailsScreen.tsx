import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { WatchlistButton } from '@/components/movieDetails/WatchlistButton';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Movie } from '@/domain/movie/entities/Movie';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
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

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <ParallaxScrollView
        headerBackgroundColor={'#000'}
        headerImage={
          <Image
            source={{ uri: movieTyped.posterPath }}
            style={{
              width: SCREEN_WIDTH,
              height: SCREEN_HEIGHT / 2.5,
              zIndex: 1,
            }}
            resizeMode="stretch"
          />
        }
      >
        <View style={{ zIndex: 30 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: '#fff',
            }}
          >
            {movieTyped.originalTitle}
          </Text>
          <Text
            style={{
              fontWeight: 300,
              color: '#fff',
              marginTop: 8,
              marginBottom: 16,
            }}
          >
            2016
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: '#fff',
              marginBottom: 16,
            }}
          >
            {movieTyped.overview}
          </Text>

          <Text style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>
            Release Date
          </Text>
          <Text style={{ color: '#fff', marginBottom: 16 }}>
            December 9, 2016
          </Text>

          {!!genres.length && (
            <>
              <Text style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>
                Genres
              </Text>
              <Text style={{ color: '#fff', marginBottom: 16 }}>
                {genres.join(', ')}
              </Text>
            </>
          )}
        </View>
      </ParallaxScrollView>
      <View style={{ margin: 16 }}>
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
