import { buildMovieImageUrl } from '@/shared/utils/buildMovieImageUrl';

describe('buildMovieImageUrl', () => {
  it('returns the correct URL', () => {
    // When
    const result = buildMovieImageUrl(fileName);

    // Then
    expect(result).toBe(`https://image.tmdb.org/t/p/w500${fileName}`);
  });
});

const fileName = '/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg';
