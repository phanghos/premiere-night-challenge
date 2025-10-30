const IMAGE_SIZE = 'w500';
const BASE_URL = `https://image.tmdb.org/t/p/${IMAGE_SIZE}`;

export const buildMovieImageUrl = (fileName: string) =>
  `${BASE_URL}${fileName}`;
