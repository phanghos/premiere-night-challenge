export const ImageSizes = {
  Poster: 'w500',
  Thumbnail: 'w185',
} as const;

export type ImageSize = (typeof ImageSizes)[keyof typeof ImageSizes];
