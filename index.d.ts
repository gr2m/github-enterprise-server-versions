export function getCurrentVersions(): Promise<
  [string, { releaseDate: string; deprecationDate: string }][]
>;
