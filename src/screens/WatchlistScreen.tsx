import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { EmptyListPlaceholder } from '@/components/EmptyListPlaceholder';
import { WatchlistItem } from '@/components/watchlist/WatchlistItem';
import type { Movie } from '@/domain/movie/entities/Movie';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import Animated, { LinearTransition } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      {!watchlist.length ? (
        <EmptyList />
      ) : (
        <Animated.FlatList
          data={watchlist}
          renderItem={renderItem(onItemPress, onHeartPress)}
          keyExtractor={keyExtractor}
          style={{ backgroundColor: '#000' }}
          contentContainerStyle={{ padding: 16 }}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
          itemLayoutAnimation={LinearTransition}
        />
      )}
    </SafeAreaView>
  );
};
