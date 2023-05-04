module.exports = { getCurrentVersions };

const fetch = require("node-fetch");

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
    .map(([version]) => parseFloat(version))
    .sort();
}
