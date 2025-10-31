import type { Movie } from './Movie';
import type { SectionType } from './SectionType';

export type SpotlightSection = {
  title: SectionType;
  data: Movie[];
};
