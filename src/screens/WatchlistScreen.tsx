import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { EmptyListPlaceholder } from '@/components/EmptyListPlaceholder';
import { WatchlistItem } from '@/components/watchlist/WatchlistItem';
import type { Movie } from '@/domain/movie/entities/Movie';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';

const keyExtractor = (movie: Movie) => `${movie.id}`;

const renderItem =
  (onPress: (movie: Movie) => void, onHeartPress: (movie: Movie) => void) =>
  ({ item }: ListRenderItemInfo<Movie>) =>
    (
      <WatchlistItem
        movie={item}
        onPress={onPress}
        onHeartPress={onHeartPress}
      />
    );

const EmptyList = () => (
  <EmptyListPlaceholder
    title={'Oops!'}
    description={`Looks like you haven\'t added any movies to your watchlist yet!`}
  />
);

const ItemSeparator = () => <View style={styles.separator} />;

export const WatchlistScreen = () => {
  const {
    watchlist: { removeFromWatchlist },
  } = useContext(DependencyProviderContext);
  const watchlistMap = useWatchlistStore(s => s.watchlist);
  const watchlist = Object.values(watchlistMap);
  const { navigate } = useNavigation();

  const onItemPress = (movie: Movie) => {
    navigate('MovieDetails', { movie });
  };

  const onHeartPress = (movie: Movie) => {
    removeFromWatchlist(movie.id);
  };

  return (
    <View style={styles.container}>
      {!watchlist.length ? (
        <EmptyList />
      ) : (
        <Animated.FlatList
          data={watchlist}
          renderItem={renderItem(onItemPress, onHeartPress)}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={ItemSeparator}
          itemLayoutAnimation={LinearTransition}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    padding: 16,
  },
  separator: {
    marginVertical: 8,
  },
});
