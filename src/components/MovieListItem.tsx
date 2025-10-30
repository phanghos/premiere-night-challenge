import { MovieRaw } from '@/core/types/MovieRaw';
import { buildMovieImageUrl } from '@/shared/utils/buildMovieImageUrl';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

type MovieListItemProps = {
  movie: MovieRaw;
};

export const MovieListItem = ({ movie }: MovieListItemProps) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        backgroundColor: '#fff',
        alignSelf: 'flex-start',
      }}
    >
      <Image
        source={{ uri: buildMovieImageUrl(movie.poster_path) }}
        style={{
          width: SCREEN_WIDTH - 32,
          aspectRatio: 2 / 3,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
        resizeMode="contain"
      />
      <View
        style={{
          paddingVertical: 16,
          paddingHorizontal: 8,
          backgroundColor: '#fff',
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 300 }}>
          {movie.original_title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
