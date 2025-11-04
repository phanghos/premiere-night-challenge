import { Movie } from '@/domain/movie/entities/Movie';
import { addToWatchlist } from '@/domain/movie/stores/actions/addToWatchlist';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { Builder } from 'builder-pattern';

describe('addToWatchlist', () => {
  it('adds the movie to the store', () => {
    // Given
    const { watchlist: initialState } = useWatchlistStore.getState();
    expect(initialState).toStrictEqual({});

    // When
    addToWatchlist(useWatchlistStore)(movie);

    // When
    const { watchlist } = useWatchlistStore.getState();
    expect(watchlist).toStrictEqual({
      1: movie,
    });
  });
});

const movie = Builder<Movie>().id(1).build();
