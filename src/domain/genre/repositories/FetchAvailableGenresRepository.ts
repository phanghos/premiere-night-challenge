import type { QueryResult } from '@/core/types/QueryResult';
import type { Genre } from '../entities/Genre';

export type FetchAvailableGenresRepository = () => QueryResult<Genre[]>;
