const { strictEqual } = require("assert");

const { getCurrentVersions } = require("./index.js");

runTest();

async function runTest() {
  const versions = await getCurrentVersions();

  strictEqual(Array.isArray(versions), true, "returns an array");
  strictEqual(
    versions.length >= 3 && versions.length <= 4,
    true,
    `expected array of 3-4 items, but got ${versions.length}`
  );

  console.log("ok");
}
