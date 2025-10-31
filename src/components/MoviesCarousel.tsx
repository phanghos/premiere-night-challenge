import { MovieRaw } from '@/core/types/MovieRaw';
import { useRef, useState } from 'react';
import { Dimensions, LayoutChangeEvent, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { CarouselRenderItemInfo } from 'react-native-reanimated-carousel/lib/typescript/types';
import { MoviesCarouselListItem } from './MoviesCarouselListItem';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');

type OnLayout = (event: LayoutChangeEvent) => void;

type MoviesListProps = {
  movies: MovieRaw[];
  sectionTitle: string;
};

const renderItem =
  (onLayout: OnLayout) =>
  ({ item }: CarouselRenderItemInfo<MovieRaw>) =>
    <MoviesCarouselListItem movie={item} onLayout={onLayout} />;

export const MoviesCarousel = ({ movies, sectionTitle }: MoviesListProps) => {
  const [carouselHeight, setCarouselHeight] = useState(0);
  const carouselHeightRef = useRef<number[]>([]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: !carouselHeight ? 0 : withTiming(1),
  }));

  if (!movies.length) {
    return null;
  }

  const onLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
    carouselHeightRef.current = [...carouselHeightRef.current, layout.height];
    if (carouselHeightRef.current.length === movies.length) {
      carouselHeightRef.current = carouselHeightRef.current.sort(
        (a, b) => b - a,
      );
      setCarouselHeight(carouselHeightRef.current[0]);
    }
  };

  return (
    <Animated.View style={animatedStyle}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 700, color: '#fff' }}>
          {sectionTitle}
        </Text>
      </View>
      <Carousel
        width={SCREEN_WIDTH - 32}
        height={carouselHeight}
        data={movies}
        renderItem={renderItem(onLayout)}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 200,
        }}
      />
    </Animated.View>
  );
};
