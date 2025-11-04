import { Movie } from '@/domain/movie/entities/Movie';
import { removeFromWatchlist } from '@/domain/movie/stores/actions/removeFromWatchlist';
import { useWatchlistStore } from '@/domain/movie/stores/watchlistStore';
import { Builder } from 'builder-pattern';

describe('removeFromWatchlist', () => {
  it('removes the movie from the store', () => {
    // Given
    useWatchlistStore.setState({
      watchlist: {
        1: movie,
      },
    });

    // When
    removeFromWatchlist(useWatchlistStore)(1);

    // Then
    const { watchlist } = useWatchlistStore.getState();
    expect(watchlist).toStrictEqual({});
  });
});

const movie = Builder<Movie>().id(1).build();
