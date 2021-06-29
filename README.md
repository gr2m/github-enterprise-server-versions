# 🚧 Work in progress - see [#1](https://github.com/gr2m/github-enterprise-server-versions/pull/1)

# github-enterprise-server-versions

> Retrieve the GitHub Enterprise Server (GHES) versions

The list of past and current GitHub Enterprise Server versions can be found at https://docs.github.com/enterprise-server/admin/all-releases. This module makes this information accessible programmatically.

## Usage

```js
import { getCurrentVersions } from "github-enterprise-server-versions";

const versions = await getCurrentVersions();
// e.g. [ 2.22, 3, 3.1 ]
```

## License

[ISC](LICENSE)
