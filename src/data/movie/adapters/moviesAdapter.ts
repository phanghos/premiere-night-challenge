import { ImageSizes } from '@/core/types/ImageSize';
import type { MovieRaw } from '@/core/types/MovieRaw';
import type { Movie } from '@/domain/movie/entities/Movie';
import { buildMovieImageUrl } from '@/shared/utils/buildMovieImageUrl';
import { formatDate } from '@/shared/utils/formatDate';

export const moviesAdapter = (moviesRaw: MovieRaw[]): Movie[] =>
  moviesRaw.map<Movie>(it => ({
    id: it.id,
    title: it.title,
    originalTitle: it.original_title,
    posterPath: buildMovieImageUrl(it.poster_path, ImageSizes.Poster),
    thumbnailPath: buildMovieImageUrl(it.poster_path, ImageSizes.Thumbnail),
    releaseDate: formatDate(it.release_date),
    overview: it.overview,
    genreIds: it.genre_ids,
  }));
