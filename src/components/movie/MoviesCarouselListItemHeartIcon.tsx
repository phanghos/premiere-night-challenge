import type { Movie } from '@/domain/movie/entities/Movie';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const Scale = {
  Initial: 1,
  Up: 1.5,
  Down: 0.8,
};

const Icon = {
  FullName: 'heart',
  OutlineName: 'heart-outline',
  Color: '#f00',
  Size: 25,
} as const;

type MoviesCarouselListItemHeartIconProps = {
  movie: Movie;
  isInWatchlist: boolean;
  onPress: (movie: Movie) => void;
};

export const MoviesCarouselListItemHeartIcon = ({
  movie,
  isInWatchlist,
  onPress,
}: MoviesCarouselListItemHeartIconProps) => {
  const heartScaleSv = useSharedValue(Scale.Initial);

  const heartAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: heartScaleSv.value,
      },
    ],
  }));

  return (
    <TouchableOpacity
      onPress={() => {
        const firstAnim = isInWatchlist
          ? withTiming(Scale.Down)
          : withTiming(Scale.Up);

        heartScaleSv.value = withSequence(firstAnim, withTiming(Scale.Initial));

        onPress(movie);
      }}
      style={styles.container}
    >
      <Animated.View style={heartAnimatedStyle}>
        <MaterialDesignIcons
          name={isInWatchlist ? Icon.FullName : Icon.OutlineName}
          size={Icon.Size}
          color={isInWatchlist ? Icon.Color : undefined}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
});
