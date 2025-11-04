import type { Movie } from '@/domain/movie/entities/Movie';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type WatchlistItemProps = {
  movie: Movie;
  onPress: (movie: Movie) => void;
  onHeartPress: (movie: Movie) => void;
};

export const WatchlistItem = ({
  movie,
  onPress,
  onHeartPress,
}: WatchlistItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(movie)}
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 16,
        alignItems: 'center',
        borderRadius: 8,
      }}
    >
      <Image
        source={{ uri: movie.thumbnailPath }}
        style={{ width: 50, height: 50, borderRadius: 20, marginRight: 8 }}
      />
      <Text style={{ flex: 1, fontSize: 16, fontWeight: 300 }}>
        {movie.originalTitle}
      </Text>
      <TouchableOpacity
        onPress={() => {
          onHeartPress(movie);
        }}
      >
        <MaterialDesignIcons name="heart" size={25} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
