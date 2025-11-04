import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { Button } from '@react-navigation/elements';
import React, { useContext } from 'react';

export const ResetWatchlistHeaderButton = () => {
  const {
    watchlist: { isWatchlistEmpty, resetWatchlist },
  } = useContext(DependencyProviderContext);
  useWatchlistStore(s => s.watchlist);

  if (isWatchlistEmpty()) {
    return null;
  }

  return (
    <Button variant="plain" onPress={resetWatchlist}>
      Remove All
    </Button>
  );
};
