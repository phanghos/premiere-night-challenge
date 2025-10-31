export type QueryResult<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T;
};
