import { MoviesCarousel } from '@/components/MoviesCarousel';
import { MovieRaw } from '@/core/types/MovieRaw';
import { mockDataNowPlaying } from '@/mockDataNowPlaying';
import { mockDataPopular } from '@/mockDataPopular';
import { mockDataTopRated } from '@/mockDataTopRated';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  { id: 1, title: 'Now Playing', data: mockDataNowPlaying.results },
  { id: 2, title: 'Popular', data: mockDataPopular.results },
  { id: 3, title: 'Top Rated', data: mockDataTopRated.results },
] as const;

export const SpotlightScreen = () => {
  const { navigate } = useNavigation();

  const onMoviePress = (movie: MovieRaw) => {
    navigate('MovieDetails', { movie });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text
          style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 16 }}
        >
          Premiere Night
        </Text>
        {DATA.map(it => {
          return (
            <MoviesCarousel
              key={`${it.id}`}
              movies={it.data}
              sectionTitle={it.title}
              onMoviePress={onMoviePress}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
