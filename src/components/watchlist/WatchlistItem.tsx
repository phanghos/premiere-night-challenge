import type { Movie } from '@/domain/movie/entities/Movie';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

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
  const onHeartPressCallback = () => {
    onHeartPress(movie);
  };

  return (
    <TouchableOpacity onPress={() => onPress(movie)} style={styles.container}>
      <Image source={{ uri: movie.thumbnailPath }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <TouchableOpacity onPress={onHeartPressCallback}>
        <MaterialDesignIcons name="heart" size={25} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
    marginRight: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: 300,
  },
});
