import { Movie } from '@/domain/movie/entities/Movie';
import { isWatchlistEmpty } from '@/domain/movie/stores/actions/IsWatchlistEmpty';
import { resetWatchlist } from '@/domain/movie/stores/actions/resetWatchlist';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { Builder } from 'builder-pattern';

describe('resetWatchlist', () => {
  it('resets the watchlist', () => {
    // Given
    useWatchlistStore.setState({
      watchlist: {
        1: movie,
        2: movie,
        3: movie,
      },
    });
    expect(isWatchlistEmpty(useWatchlistStore)()).toBe(false);

    // When
    resetWatchlist(useWatchlistStore)();

    // Then
    const { watchlist } = useWatchlistStore.getState();
    expect(watchlist).toStrictEqual({});
    expect(isWatchlistEmpty(useWatchlistStore)()).toBe(true);
  });
});

const movie = Builder<Movie>().build();
