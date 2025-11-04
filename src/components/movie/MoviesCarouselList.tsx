import { Movie } from '@/domain/movie/entities/Movie';
import { SpotlightSection } from '@/domain/movie/entities/SpotlightSection';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { MoviesCarousel } from './MoviesCarousel';

type MoviesCarouselListProps = {
  sections: SpotlightSection[];
  onMoviePress: (movie: Movie) => void;
  onHeartPress: (movie: Movie) => void;
};

export const MoviesCarouselList = ({
  sections,
  onMoviePress,
  onHeartPress,
}: MoviesCarouselListProps) => {
  if (!sections.length) {
    return null;
  }

  return (
    <ScrollView>
      <Text style={styles.headerText}>Premiere Night</Text>
      {sections.map(it => {
        return (
          <MoviesCarousel
            key={`${it.title}`}
            movies={it.data}
            sectionTitle={it.title}
            onMoviePress={onMoviePress}
            onHeartPress={onHeartPress}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 700,
    color: '#fff',
    margin: 16,
  },
});
