import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import type { Movie } from '@/domain/movie/entities/Movie';
import { Button } from '@react-navigation/elements';
import React, { useCallback, useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type WatchlistButtonProps = {
  movie: Movie;
};

export const WatchlistButton = ({ movie }: WatchlistButtonProps) => {
  const {
    watchlist: { addToWatchlist, removeFromWatchlist, isInWatchlist },
  } = useContext(DependencyProviderContext);
  const insets = useSafeAreaInsets();
  const inWatchlist = isInWatchlist(movie.id);
  const onPress = useCallback(() => {
    if (inWatchlist) {
      console.log('Removing...');
      removeFromWatchlist(movie.id);
    } else {
      console.log('Adding...');
      addToWatchlist(movie);
    }
  }, [inWatchlist]);
  const buttonText = inWatchlist ? 'Remove From Watchlist' : 'Add To Watchlist';

  return (
    <Button
      variant="filled"
      onPress={onPress}
      style={{
        bottom: insets.bottom,
      }}
    >
      {buttonText}
    </Button>
  );
};
