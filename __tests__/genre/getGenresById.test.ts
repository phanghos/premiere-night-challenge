import { Genre } from '@/domain/genre/entities/Genre';
import { getGenresByIds } from '@/domain/genre/utils/getGenresById';

describe('getGenresById', () => {
  it('Returns the mapped list of genres', () => {
    // Given
    const expected = ['Comedy', 'Action'];

    // When
    const result = getGenresByIds(genreIds, availableGenres);

    // Then
    expect(result).toStrictEqual(expected);
  });
});

const genreIds = [7, 2, 3];
const availableGenres: Genre[] = [
  { id: 1, name: 'Drama' },
  { id: 2, name: 'Comedy' },
  { id: 3, name: 'Action' },
];
