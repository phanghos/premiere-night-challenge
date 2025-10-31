import { Constants } from '@/core/Constants';

export const buildMovieImageUrl = (fileName: string) =>
  `${Constants.apiImageBaseUrl}/${Constants.imageSize}${fileName}`;
