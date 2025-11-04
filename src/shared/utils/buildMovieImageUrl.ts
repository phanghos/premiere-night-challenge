import { Constants } from '@/core/Constants';
import type { ImageSize } from '@/core/types/ImageSize';

export const buildMovieImageUrl = (fileName: string, size: ImageSize) =>
  `${Constants.apiImageBaseUrl}/${size}${fileName}`;
