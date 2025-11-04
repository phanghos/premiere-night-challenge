import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { Movie } from '@/domain/movie/entities/Movie';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useContext } from 'react';
import {
  Image,
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const INITIAL_IMAGE_SCALE = 1;
const IMAGE_SCALE_DOWN = 0.8;
const IMAGE_SCALE_UP = 1.5;

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
  const heartScaleSv = useSharedValue(INITIAL_IMAGE_SCALE);

  const heartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: heartScaleSv.value,
      },
    ],
  }));

  const onPressCallback = () => onPress(movie);

  return (
    <TouchableOpacity
      onLayout={onLayout}
      onPress={onPressCallback}
      style={styles.container}
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
      <TouchableOpacity
        onPress={() => {
          const firstAnim = inWatchlist
            ? withTiming(IMAGE_SCALE_DOWN)
            : withTiming(IMAGE_SCALE_UP);

          heartScaleSv.value = withSequence(
            firstAnim,
            withTiming(INITIAL_IMAGE_SCALE),
          );

          onHeartPress(movie);
        }}
        style={styles.heartContainer}
      >
        <Animated.View style={heartAnimatedStyle}>
          <MaterialDesignIcons
            name={inWatchlist ? 'heart' : 'heart-outline'}
            size={25}
            color={inWatchlist ? 'red' : undefined}
          />
        </Animated.View>
      </TouchableOpacity>
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
