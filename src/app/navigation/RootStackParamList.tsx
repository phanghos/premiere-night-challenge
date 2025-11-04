import type { Movie } from '@/domain/movie/entities/Movie';

export type RootStackParamList = {
  MovieDetails: {
    movie: Movie;
  };
};
