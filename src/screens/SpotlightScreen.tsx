import { useSpotlightSections } from '@/app/movie/usecases/useSpotlightSections';
import { ErrorPlaceholder } from '@/components/ErrorPlaceholder';
import { FullScreenSpinner } from '@/components/FullScreenSpinner';
import { MoviesCarousel } from '@/components/MoviesCarousel';
import { moviesAdapter } from '@/domain/movie/adapters/moviesAdapter';
import { Movie } from '@/domain/movie/entities/Movie';
import { SpotlightSection } from '@/domain/movie/entities/SpotlightSection';
import { mockDataNowPlaying } from '@/mockDataNowPlaying';
import { mockDataPopular } from '@/mockDataPopular';
import { mockDataTopRated } from '@/mockDataTopRated';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MOCK_SECTIONS: SpotlightSection[] = [
  {
    title: 'Now Playing',
    data: moviesAdapter(mockDataNowPlaying.results),
  },
  {
    title: 'Popular',
    data: moviesAdapter(mockDataPopular.results),
  },
  {
    title: 'Top Rated',
    data: moviesAdapter(mockDataTopRated.results),
  },
] as const;

export const SpotlightScreen = () => {
  const { isLoading, sections, isError } = useSpotlightSections();
  const { navigate } = useNavigation();

  const onMoviePress = (movie: Movie) => {
    navigate('MovieDetails', { movie });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <Text
          style={{ fontSize: 24, fontWeight: 700, color: '#fff', margin: 16 }}
        >
          Premiere Night
        </Text>
        {isError && <ErrorPlaceholder />}
        {isLoading && <FullScreenSpinner />}
        {sections.map(it => {
          return (
            <MoviesCarousel
              key={`${it.title}`}
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
