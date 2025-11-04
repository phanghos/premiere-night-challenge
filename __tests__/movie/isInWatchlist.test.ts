import { Movie } from '@/domain/movie/entities/Movie';
import { isInWatchlist } from '@/domain/movie/stores/actions/isInWatchlist';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { Builder } from 'builder-pattern';

describe('isInWatchlist', () => {
  it('returns true when the movie is in the watchlist', () => {
    // Given
    useWatchlistStore.setState({
      watchlist: {
        1: movie,
      },
    });

    // When
    const result = isInWatchlist(useWatchlistStore)(1);

    // Then
    expect(result).toBe(true);
  });

  it('returns false when the movie is in the watchlist', () => {
    // Given
    useWatchlistStore.setState({
      watchlist: {
        2: movie,
      },
    });

    // When
    const result = isInWatchlist(useWatchlistStore)(1);

    // Then
    expect(result).toBe(false);
  });
});

const movie = Builder<Movie>().id(1).build();
