import { MovieRaw } from '@/core/types/MovieRaw';
import { buildMovieImageUrl } from '@/shared/utils/buildMovieImageUrl';
import { Movie } from '../entities/Movie';

export const moviesAdapter = (moviesRaw: MovieRaw[]): Movie[] => {
  return moviesRaw.map<Movie>(it => ({
    id: it.id,
    originalTitle: it.original_title,
    posterPath: buildMovieImageUrl(it.poster_path),
    overview: it.overview,
  }));
};
