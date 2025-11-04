import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { Movie } from '@/domain/movie/entities/Movie';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useContext } from 'react';
import {
  Image,
  LayoutChangeEvent,
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
  const heartScaleSv = useSharedValue(1);

  const heartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: heartScaleSv.value,
      },
    ],
  }));

  return (
    <TouchableOpacity
      onLayout={onLayout}
      onPress={() => {
        onPress(movie);
      }}
      style={{
        width: 150,
        borderRadius: 8,
      }}
    >
      <Image
        source={{ uri: movie.posterPath }}
        style={{
          width: '100%',
          aspectRatio: 27 / 40,
          borderRadius: 8,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          width: '100%',
          paddingVertical: 8,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 300,
            color: '#fff',
            textAlign: 'center',
          }}
          numberOfLines={2}
        >
          {movie.originalTitle}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          const firstAnim = inWatchlist ? withTiming(0.8) : withTiming(1.5);
          heartScaleSv.value = withSequence(firstAnim, withTiming(1));
          onHeartPress(movie);
        }}
        style={{
          position: 'absolute',
          top: 8,
          left: 8,
        }}
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
