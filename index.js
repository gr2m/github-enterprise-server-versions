export { getCurrentVersions };

const ENTERPRISE_VERSIONS_URL =
  "https://raw.githubusercontent.com/github/docs/main/src/ghes-releases/lib/enterprise-dates.json";

async function getCurrentVersions() {
  const response = await fetch(ENTERPRISE_VERSIONS_URL);
  const data = await response.json();
  const today = new Date().toISOString().substr(0, 10);

  return Object.entries(data)
    .filter(([, { releaseDate, deprecationDate }]) => {
      if (releaseDate > today) return;
      if (deprecationDate < today) return;

      return true;
    })
    .map(([version]) => version)
    .sort((a,b) => {
      const aComponents = a.split(".").map(Number);
      const bComponents = b.split(".").map(Number);
      for (let i = 0; i < Math.max(aComponents.length, bComponents.length); i++) {
        const aElem = aComponents[i] || 0;
        const bElem = bComponents[i] || 0;
        if (aElem > bElem) return +1;
        if (aElem < bElem) return -1;
      }
      return 0;
    });
}
