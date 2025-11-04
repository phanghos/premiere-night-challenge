import { MovieRaw } from '@/core/types/MovieRaw';
import { moviesAdapter } from '@/data/movie/adapters/moviesAdapter';
import { Movie } from '@/domain/movie/entities/Movie';

describe('moviesAdapter', () => {
  it('adapts the raw type to the Movie entity correctly', () => {
    // When
    const result = moviesAdapter([movieRaw]);

    // Then
    expect(result).toStrictEqual([adaptedMovie]);
  });
});

const movieRaw: MovieRaw = {
  genre_ids: [28, 12, 878],
  id: 640146,
  original_title: 'Ant-Man and the Wasp: Quantumania',
  overview:
    "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
  poster_path: '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
  release_date: '2023-02-15',
};
const adaptedMovie: Movie = {
  genreIds: [28, 12, 878],
  id: 640146,
  originalTitle: 'Ant-Man and the Wasp: Quantumania',
  overview:
    "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
  posterPath: 'https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
  thumbnailPath:
    'https://image.tmdb.org/t/p/w185/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg',
  releaseDate: 'February 15, 2023',
};
