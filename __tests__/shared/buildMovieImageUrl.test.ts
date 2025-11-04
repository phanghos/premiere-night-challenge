import { ImageSizes } from '@/core/types/ImageSize';
import { buildMovieImageUrl } from '@/shared/utils/buildMovieImageUrl';

describe('buildMovieImageUrl', () => {
  describe('Poster Size', () => {
    it('returns the correct URL', () => {
      // When
      const result = buildMovieImageUrl(fileName, ImageSizes.Poster);

      // Then
      expect(result).toBe(`https://image.tmdb.org/t/p/w500${fileName}`);
    });
  });

  describe('Thumbnail Size', () => {
    it('returns the correct URL', () => {
      // When
      const result = buildMovieImageUrl(fileName, ImageSizes.Thumbnail);

      // Then
      expect(result).toBe(`https://image.tmdb.org/t/p/w185${fileName}`);
    });
  });
});

const fileName = '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg';
