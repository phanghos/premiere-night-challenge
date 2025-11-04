// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sectionTypes = ['Now Playing', 'Popular', 'Top Rated'] as const;
export type SectionType = (typeof sectionTypes)[number];
