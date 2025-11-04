import { Movie } from '@/domain/movie/entities/Movie';
import { isWatchlistEmpty } from '@/domain/movie/stores/actions/IsWatchlistEmpty';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { Builder } from 'builder-pattern';

describe('isWatchlistEmpty', () => {
  it('returns true when the watchlist is empty', () => {
    // When
    const result = isWatchlistEmpty(useWatchlistStore)();

    // Then
    expect(result).toBe(true);
  });

  it('returns false when the watchlist is not empty', () => {
    // Given
    useWatchlistStore.setState({
      watchlist: {
        1: movie,
      },
    });

    // When
    const result = isWatchlistEmpty(useWatchlistStore)();

    // Then
    expect(result).toBe(false);
  });
});

const movie = Builder<Movie>().id(1).build();
