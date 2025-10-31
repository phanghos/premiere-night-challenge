import { Movie } from '@/domain/movie/entities/Movie';
import {
  Image,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type MovieListItemProps = {
  movie: Movie;
  onLayout?: (event: LayoutChangeEvent) => void;
  onPress: (movie: Movie) => void;
};

export const MoviesCarouselListItem = ({
  movie,
  onLayout,
  onPress,
}: MovieListItemProps) => {
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
    </TouchableOpacity>
  );
};
