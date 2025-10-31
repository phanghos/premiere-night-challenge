import ParallaxScrollView from '@/components/ParallaxScrollView';
import { MovieRaw } from '@/core/types/MovieRaw';
import { buildMovieImageUrl } from '@/shared/utils/buildMovieImageUrl';
import { Button, HeaderBackButton } from '@react-navigation/elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dimensions, Image, Text, View } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

export const MovieDetailsScreen = () => {
  const { goBack } = useNavigation();
  const {
    params: { movie },
  } = useRoute();
  const movieTyped: MovieRaw = movie;

  const onAddToWatchlistPress = () => {
    console.log('Adding to Watchlist...');
  };

  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={'#000'}
        headerImage={
          <Image
            source={{ uri: buildMovieImageUrl(movieTyped.poster_path) }}
            style={{ width: SCREEN_WIDTH, height: 300, zIndex: 1 }}
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
            {movieTyped.original_title}
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

          <Text style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>
            Genres
          </Text>
          <Text style={{ color: '#fff', marginBottom: 16 }}>
            Comedy, Drama, Romance
          </Text>
          <Button variant="filled" onPress={onAddToWatchlistPress}>
            Add To Watchlist
          </Button>
        </View>
      </ParallaxScrollView>
      <HeaderBackButton
        onPress={goBack}
        style={{
          position: 'absolute',
          top: 24,
          alignSelf: 'flex-start',
        }}
      />
    </View>
  );
};
