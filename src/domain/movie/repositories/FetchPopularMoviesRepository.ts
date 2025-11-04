import type { QueryResult } from '@/core/types/QueryResult';
import type { Movie } from '../entities/Movie';

export type FetchPopularMoviesRepository = () => QueryResult<Movie[]>;
