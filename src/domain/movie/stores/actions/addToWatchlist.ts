import type { Movie } from '../../entities/Movie';
import type { WatchlistStore } from '../watchlistStore';

export const addToWatchlist =
  (store: WatchlistStore) =>
  (movie: Movie): void => {
    const { watchlist } = store.getState();
    store.setState({ watchlist: { ...watchlist, [Number(movie.id)]: movie } });
  };

export type AddToWatchlist = ReturnType<typeof addToWatchlist>;
