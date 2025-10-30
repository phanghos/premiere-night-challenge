import type { Movie } from '@/domain/movie/entities/Movie';
import { Dimensions, ListRenderItem } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { MovieListItem } from './MovieListItem';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen');

type MoviesListProps = {
  movies: Movie[];
};

const renderItem: ListRenderItem<Movie> = ({ item }) => (
  <MovieListItem movie={item} />
);

export const MoviesList = ({ movies }: MoviesListProps) => {
  if (!movies.length) {
    return null;
  }

  return (
    <Carousel
      width={SCREEN_WIDTH}
      height={SCREEN_HEIGHT}
      data={movies}
      renderItem={renderItem}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
      containerStyle={{ paddingHorizontal: 16 }}
    />
  );
};
