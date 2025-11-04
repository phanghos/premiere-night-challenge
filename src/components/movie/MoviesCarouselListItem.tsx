import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import type { Movie } from '@/domain/movie/entities/Movie';
import { useContext } from 'react';
import {
  Dimensions,
  Image,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MoviesCarouselListItemHeartIcon } from './MoviesCarouselListItemHeartIcon';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

type MovieListItemProps = {
  movie: Movie;
  onLayout?: (event: LayoutChangeEvent) => void;
  onPress: (movie: Movie) => void;
  onHeartPress: (movie: Movie) => void;
};

export const MoviesCarouselListItem = ({
  movie,
  onLayout,
  onPress,
  onHeartPress,
}: MovieListItemProps) => {
  const {
    watchlist: { isInWatchlist },
  } = useContext(DependencyProviderContext);

  const inWatchlist = isInWatchlist(movie.id);

  const onPressCallback = () => onPress(movie);

  return (
    <TouchableOpacity
      onLayout={onLayout}
      onPress={onPressCallback}
      style={{
        width: SCREEN_WIDTH / 2.5,
        borderRadius: 8,
      }}
    >
      <Image
        source={{ uri: movie.posterPath }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.originalTitle}
        </Text>
      </View>
      <MoviesCarouselListItemHeartIcon
        movie={movie}
        isInWatchlist={inWatchlist}
        onPress={onHeartPress}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 27 / 40,
    borderRadius: 8,
  },
  titleContainer: {
    width: '100%',
    paddingVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 300,
    color: '#fff',
    textAlign: 'center',
  },
  heartContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
});
