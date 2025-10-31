import { Constants } from '@/core/Constants';

const IMAGE_SIZE = 'w500';

export const buildMovieImageUrl = (fileName: string) =>
  `${Constants.apiImageBaseUrl}/${IMAGE_SIZE}${fileName}`;
