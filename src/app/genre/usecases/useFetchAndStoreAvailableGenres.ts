import { DependencyProviderContext } from '@/app/di/DependencyProviderContext';
import { useContext, useEffect } from 'react';

export const useFetchAndStoreAvailableGenres = () => {
  const {
    genre: { fetchAvailableGenres, setGenres },
  } = useContext(DependencyProviderContext);
  const { data } = fetchAvailableGenres();

  useEffect(() => {
    if (data?.length) {
      setGenres(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
};
