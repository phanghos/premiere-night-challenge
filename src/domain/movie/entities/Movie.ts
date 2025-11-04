export type Movie = {
  id: number;
  originalTitle: string;
  title: string;
  posterPath: string;
  thumbnailPath: string;
  overview: string;
  genreIds: number[];
  releaseDate: string;
};
