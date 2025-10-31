const sectionTypes = ['Now Playing', 'Popular', 'Top Rated'] as const;
export type SectionType = (typeof sectionTypes)[number];
