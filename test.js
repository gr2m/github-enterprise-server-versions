import { strictEqual } from "assert"

import { getCurrentVersions } from "./index.js"

runTest();

async function runTest() {
  const versions = await getCurrentVersions();

  strictEqual(Array.isArray(versions), true, "returns an array");
  strictEqual(
    versions.length >= 3 && versions.length <= 5,
    true,
    `expected array of 3-5 items, but got ${versions.length}`
  );

  console.log("ok");
}
