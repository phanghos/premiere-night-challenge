import { MovieRaw } from '@/core/types/MovieRaw';
import { buildMovieImageUrl } from '@/shared/utils/buildMovieImageUrl';
import {
  Image,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type MovieListItemProps = {
  movie: MovieRaw;
  onLayout?: (event: LayoutChangeEvent) => void;
};

export const MoviesCarouselListItem = ({
  movie,
  onLayout,
}: MovieListItemProps) => {
  return (
    <TouchableOpacity
      onLayout={onLayout}
      style={{
        width: 150,
        borderRadius: 8,
      }}
    >
      <Image
        source={{ uri: buildMovieImageUrl(movie.poster_path) }}
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
          {movie.original_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
