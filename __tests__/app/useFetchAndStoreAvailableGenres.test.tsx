import { AppDependencies } from '@/app/di/AppDependencies';
import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { useFetchAndStoreAvailableGenres } from '@/app/genre/usecases/useFetchAndStoreAvailableGenres';
import { Genre } from '@/domain/genre/entities/Genre';
import { FetchAvailableGenresRepository } from '@/domain/genre/repositories/FetchAvailableGenresRepository';
import { useAvailableGenres } from '@/domain/genre/usecases/useAvailableGenres';
import { act, renderHook } from '@testing-library/react-native';
import { Builder } from 'builder-pattern';

const availableGenres = useAvailableGenres;

describe('useFetchAndStoreAvailableGenres', () => {
  it('success', async () => {
    // Given
    const repoMock: FetchAvailableGenresRepository = () => ({
      isLoading: false,
      isError: false,
      data: [comedyGenre, actionGenre],
    });
    const setGenresMock = jest.fn();

    // When
    renderHook(() => useFetchAndStoreAvailableGenres(), {
      wrapper: ({ children }) => (
        <DependencyProviderContext.Provider
          value={Builder<AppDependencies>()
            .genre({
              fetchAvailableGenres: availableGenres(repoMock),
              setGenres: setGenresMock,
              getGenresById: jest.fn(),
            })
            .build()}
        >
          {children}
        </DependencyProviderContext.Provider>
      ),
    });

    // Then
    await act(async () => {
      expect(setGenresMock).toHaveBeenCalledWith([comedyGenre, actionGenre]);
    });
  });

  it('error', async () => {
    // Given
    const repoMock: FetchAvailableGenresRepository = () => ({
      isLoading: false,
      isError: false,
      data: [],
    });
    const setGenresMock = jest.fn();

    // When
    renderHook(() => useFetchAndStoreAvailableGenres(), {
      wrapper: ({ children }) => (
        <DependencyProviderContext.Provider
          value={Builder<AppDependencies>()
            .genre({
              fetchAvailableGenres: availableGenres(repoMock),
              setGenres: setGenresMock,
              getGenresById: jest.fn(),
            })
            .build()}
        >
          {children}
        </DependencyProviderContext.Provider>
      ),
    });

    // Then
    await act(async () => {
      expect(setGenresMock).not.toHaveBeenCalled();
    });
  });
});

const comedyGenre: Genre = {
  id: 1,
  name: 'Comedy',
};
const actionGenre: Genre = {
  id: 2,
  name: 'Action',
};
